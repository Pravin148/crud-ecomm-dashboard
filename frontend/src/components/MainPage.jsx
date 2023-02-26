import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

export default function MainPage() {
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    const result = await fetch("http://localhost:5000/list",{

    headers :{
      authorization : JSON.parse(localStorage.getItem('token'))}
    });
    setProducts(await result.json());
  };

  useEffect(() => {
    fetchData();
  }, []);

  const searchHandle = async (e)=>{
      let key = e.target.value;
      if (key) {
        
        let searchResult = await fetch(`http://localhost:5000/search/${key}`);
        searchResult = await searchResult.json();
        if (searchResult) {
          setProducts(searchResult);  
        }
      }
      else {
        fetchData();
      }
  }
  return (
    <div className="p-8">
      <form>
        <div className="border rounded-lg shadow bg-white relative m-2">
        <input type="search" className="m-0 w-full p-4 pl-10 border border-gray-500 rounded-lg" placeholder="Start searching here........." onChange={searchHandle} />
        </div>
      </form>

      {products.length>0 ?
      <div className="mx-auto sm:px-2 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 gap-8">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div> : <h1 className="text-bold text-lg">No such product matching.........</h1>}
    </div>
  );
}
