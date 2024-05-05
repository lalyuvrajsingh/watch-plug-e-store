export default function ProductCard({ product }) {
    return (
      <div className="border hover:bg-gray-100 hover:shadow-2xl transition-shadow ease-in-out rounded-2xl m-1 my-3 shadow-xl p-4">
      <div className="text-green-700 w-fit p-1 rounded-xl shadow-md bg-green-100 border">{`${product.discount}% Discount`}</div>
        <img src={product.coverImage} alt={product.name} className="h-89 w-full object-cover" />
        <div className="mt-2 text-center">
            <h3 className="text-md text-gray-500">{product.brand}</h3>
          <h3 className="text-lg font-semibold">{product.name}</h3>
          <p className="text-gray-700">{`₹ ${product.sellingPrice}`}</p>
          <p className="text-gray-400 line-through ">{`₹ ${product.mrp}`}</p>
          <button className="mt-4 border border-gray-300 rounded-xl hover:shadow-md transition-shadow ease-in-out  text-gray-400 font-bold py-2 px-4 ">
            Check Our Selling Price
          </button>
        </div>
      </div>
    );
  }
  