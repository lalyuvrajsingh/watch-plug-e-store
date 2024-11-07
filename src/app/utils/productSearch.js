export async function searchProducts(query) {
  const { collection, getDocs, query: firestoreQuery, where } = require('firebase/firestore');
  const { db } = require('../../../firebaseConfig');
  
  const productsRef = collection(db, 'products');
  const q = firestoreQuery(
    productsRef,
    where('brand', '>=', query.toUpperCase()),
    where('brand', '<=', query.toUpperCase() + '\uf8ff')
  );
  
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data(),
    url: `/product/${doc.id}`
  }));
} 