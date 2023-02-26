import React from "react";
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  const refreshPage = () => {
    window.location.reload();
  };

  const handleDeleteProduct = async (id) => {
    let deleteProduct = await fetch(`http://localhost:5000/delete/${id}`, {
      method: "DELETE",
    });
    deleteProduct = await deleteProduct.json();
    if (deleteProduct) {
      alert(`Product is deleted successfully ${id}`);
      refreshPage();
    }
  };
  
  return (
    <div className="w-full max-w-sm bg-white border border-gray-2000 rounded-lg shadow">
      <img
        className="p-8 rounded-t-lg"
        src="https://image-us.samsung.com/us/smartphones/galaxy-s21/configurator/SDSAC-3641-06-A03-Blue-Configurator-MB-720x720.jpg"
        alt="Item phoptp"
      />
      <div className="px-5 pb-5">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 ">
          {product.name}
        </h5>
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 ">
          {product.category}
        </h5>
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 ">
          {product.brand}
        </h5>
        <h5 className="text-xl  tracking-tight text-gray-900 ">
          {product.description}
        </h5>
      </div>
      <div className="flex item-center justify-between px-5 pb-5">
        <span className="text-3xl font-bold text-gray-900">
          {product.price}
        </span>
      </div>
      <div className="space-between">
        <button
          className="p-2 m-2 border border rounded bg-blue-500 hover:bg-blue-700 text-white"
          onClick={() => handleDeleteProduct(product._id)}
        >
          Delete
        </button>
        <button className="p-2 m-2 border border rounded bg-blue-500 hover:bg-blue-700 text-white"
        >
          <Link to={`/update/${product._id}`} >Update Products</Link>
        </button>
      </div>
    </div>
  );
}
