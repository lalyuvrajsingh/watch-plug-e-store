'use client'
import { db } from '../../../firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import withAdminAuth from '../auth';
import { useEffect, useState } from 'react';
import { getFirestore, getDocs, deleteDoc, doc } from 'firebase/firestore';
import AdminProductGrid from '../components/AdminProductGrid';

// import nookies from 'nookies';


// export async function getServerSideProps(context) {
//   try {
//     const cookies = nookies.get(context);
//     const token = cookies.token; // Assuming you store your token in cookies named 'token'

//     // Verify the token with Firebase Admin
//     const decodedToken = await firebaseAdmin.auth().verifyIdToken(token);

//     // Optionally, fetch other data here if needed

//     return {
//       props: { }, // You can pass additional props to the page component here
//     };
//   } catch (err) {
//     // If the token is invalid or there is any error, redirect to login
//     return {
//       redirect: {
//         destination: '/admin/login',
//         permanent: false,
//       },
//     };
//   }
// }





function AdminDashboard() {
  const [formData, setFormData] = useState({
    category: '',
    brand: '',
    image: '',
    date: '',
    mrp: '',
    sellingPrice: '',
    discount: '',
    featured: false,
    limitedEdition: false,
    description: '',
    coverImage: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };


  const [imageFile, setImageFile] = useState(null);
  const [coverImageFile, setCoverImageFile] = useState(null);

  const handleImageChange = e => {
      setImageFile(e.target.files[0]);
  };

  const handleCoverImageChange = e => {
      setCoverImageFile(e.target.files[0]);
  };



  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!imageFile || !coverImageFile) {
        alert('Please select both an image and a cover image.');
        return;
    }

    const storage = getStorage();

    // Paths in storage
    const imageRef = ref(storage, `images/${imageFile.name}`);
    const coverImageRef = ref(storage, `coverImages/${coverImageFile.name}`);

    try {
        // Upload image and cover image
        const imageSnapshot = await uploadBytes(imageRef, imageFile);
        const coverImageSnapshot = await uploadBytes(coverImageRef, coverImageFile);

        // Get download URLs
        const imageUrl = await getDownloadURL(imageSnapshot.ref);
        const coverImageUrl = await getDownloadURL(coverImageSnapshot.ref);

        // Add product data to Firestore
        await addDoc(collection(db, 'products'), {
            ...formData,
            image: imageUrl,
            coverImage: coverImageUrl,
            date: new Date(formData.date)
        });

        alert('Product added successfully!');
        // Optionally, clear the form or navigate the user away
    } catch (error) {
        console.error('Error adding document:', error);
        alert('Failed to add product.');
    }
};


  return (
    <div className="container flex flex-col items-center justify-center px-4">

      <h1 className="text-center text-gray-500 text-5xl mt-8 mb-8 font-bold">Admin Panel</h1>

      <form onSubmit={handleSubmit} className="flex rounded-2xl lg:w-[600px] flex-col border p-3 m-5 shadow-xl space-y-4">
        <input type="text" name="category" value={formData.category} onChange={handleChange} placeholder="Category" className="input border m-2 p-1 rounded-xl" />
        <input type="text" name="brand" value={formData.brand} onChange={handleChange} placeholder="Brand/Size" className="input border m-2 p-1 rounded-xl" />
        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" className="input border m-2 p-1 rounded-xl" />
        <input type="file" name="coverImage" onChange={handleCoverImageChange} className="input border m-2 p-1 rounded-xl" />
        <input type="file" name="image" onChange={handleImageChange} className="input border m-2 p-1 rounded-xl" />
        <input type="date" name="date" value={formData.date} onChange={handleChange} className="input border m-2 p-1 rounded-xl" />
        {/* <input type="number" name="mrp" value={formData.mrp} onChange={handleChange} placeholder="MRP in $" className="input border m-2 p-1 rounded-xl" /> */}
        <input type="number" name="sellingPrice" value={formData.sellingPrice} onChange={handleChange} placeholder="Selling Price in $" className="input border m-2 p-1 rounded-xl" />
        <input type="number" name="discount" value={formData.discount} onChange={handleChange} placeholder="Discount" className="input border m-2 p-1 rounded-xl" />
        <label>
          <input type="checkbox" name="featured" checked={formData.featured} onChange={handleChange} /> Featured
        </label>
        <label>
          <input type="checkbox" name="limitedEdition" checked={formData.limitedEdition} onChange={handleChange} /> Limited Edition
        </label>
        <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Description" className="input border m-2 p-1 rounded-xl"></textarea>
        <button type="submit" className="bt border m-2 p-1 rounded-xl bg-green-400 shadow-lg">Add Product</button>
      </form>

      <div className='mt-10'>
      <h1 className="text-center text-gray-500 text-5xl mt-8 mb-8 font-bold">Products</h1>
        
        <AdminProductGrid/>
        </div>


    </div>
  );
}

export default withAdminAuth(AdminDashboard);
