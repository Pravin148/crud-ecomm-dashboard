import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const auth = localStorage.getItem('user');
  const navigate = useNavigate();
  const logout=()=>{
    localStorage.clear();
    navigate('/signup');
  }
  return (
    <div className="navbar">
      <nav className="bg-gray-800 text-white">
        <ul className="flex flex-row space-x-8 p-[17px]">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/add">Add Product</Link>
          </li>

          {
            auth ? <Link to="/signup"onClick={logout}>Log out</Link> :
            <>
            <Link to="/login">login</Link>
            <Link to="/signup">Sign Up</Link>

            </>
          }
        </ul>
      </nav>
    </div>
  );
}
