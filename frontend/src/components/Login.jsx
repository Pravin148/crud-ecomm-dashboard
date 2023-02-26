import React, { useState , useEffect} from 'react'
import { useNavigate } from 'react-router-dom';

export default function Login() {

    const [state, setState] = useState({
        email : '',
        password : ''
    });
    const navigate = useNavigate();

    useEffect(() => {
      const auth = localStorage.getItem("user");
      if (auth) {
        navigate("/");
      }
    });
    const handleLoginInputChange = (e) => {
        setState({
          ...state,
          [e.target.name]: e.target.value,
        });
      };


    const handleLoginSubmit = async (e)=>{
        e.preventDefault();
        let result = await fetch('http://localhost:5000/login',{
            method : 'POST',
            body : JSON.stringify(state),
            headers: {
                "content-type": "application/json",
            },
        })
        result = await result.json();
        if (result.auth) {
          localStorage.setItem('user', JSON.stringify(result.user));
          localStorage.setItem('token', JSON.stringify(result.auth));
            navigate("/");
        }
        else{
          alert("Please enter valid credentials");
        }
    }
  return (
    <div className='min-h-screen '>
    <div className="w-100% pt-[40px] flex justify-center">
      <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 text-lg"
          onSubmit={handleLoginSubmit}
        >
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-grey-700  font-bold mb-2"
            >
              Email{" "}
            </label>
            <input
              type="email"
              name="email"
              value={state.email}
              className="email shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onChange={handleLoginInputChange}
            ></input>
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-grey-700  font-bold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              value={state.password}
              className="password shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onChange={handleLoginInputChange}
            ></input>
          </div>
          <div>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "
              type="submit"
            >
              Login
            </button>
          </div>
        </form>
    </div>
    </div>
  )
}
