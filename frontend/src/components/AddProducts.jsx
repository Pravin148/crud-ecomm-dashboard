import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddProducts() {
  const [state, setState] = useState({
    name: "",
    price: "",
    brand: "",
    category: "",
    description: "",
  });

  const navigate = useNavigate()


  const handleaAddSubmit = async (e) => {
    e.preventDefault();
    let result = await fetch('http://localhost:5000/add',{
      method : 'POST',
      body : JSON.stringify(state),
      headers: {
          "content-type": "application/json",
      },
    })
    result = await result.json();
    if (result) {
      navigate("/");
    }
  };

  const handleAddInputChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <div className="w-100% pt-[40px] flex justify-center">
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 text-lg"
          onSubmit={handleaAddSubmit}
        >
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-grey-700  font-bold mb-2"
            >
              Product Name{" "}
            </label>
            <input
              type="text"
              name="name"
              value={state.name}
              className="productName shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onChange={handleAddInputChange}
            ></input>
          </div>
          <div className="mb-4">
            <label
              htmlFor="price"
              className="block text-grey-700  font-bold mb-2"
            >
              Price{" "}
            </label>
            <input
              type="text"
              name="price"
              value={state.price}
              className="price shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onChange={handleAddInputChange}
            ></input>
          </div>
          <div className="mb-4">
            <label
              htmlFor="brand"
              className="block text-grey-700  font-bold mb-2"
            >
              Brand{" "}
            </label>
            <input
              type="text"
              name="brand"
              value={state.brand}
              className="brand shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onChange={handleAddInputChange}
            ></input>
          </div>
          <div className="mb-4">
            <label htmlFor="category" className="block text-grey-700  font-bold mb-2">
              Category
            </label>
            <select
              name="category"
              className="category shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onChange={handleAddInputChange}
            >
              <option value="NA">choose</option>
              <option value="Mobile">Mobile</option>
              <option value="Tablet">Tablet</option>
              <option value="Laptop">Laptop</option>
            </select>
          </div>

          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-grey-700  font-bold mb-2"
            >
              Description{" "}
            </label>
            <textarea
              type="text"
              name="description"
              value={state.description}
              className="description shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onChange={handleAddInputChange}
            ></textarea>
          </div>
          <div>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "
              type="submit"
            >
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
