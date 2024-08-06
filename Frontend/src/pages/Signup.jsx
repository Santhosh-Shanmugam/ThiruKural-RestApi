import React,{useState} from 'react'
import {Link , useNavigate} from "react-router-dom"
import axios from 'axios';

const signup = () => {

  const navigate = useNavigate();
  const Home=()=>{
  navigate('/home');
  }

  return (
    <>
      <div className="flex items-center justify-center mt-28">
        <div className="w-96 border rounded bg-white px-7 py-10">
          <form>
            <h4 className="text-2xl mb-7">Sign-Up</h4>
            <input 
            type="text" 
            placeholder="Name" 
            className="w-full text-sm bg-transparent border border-gray-400 px-5 py-3 rounded mb-4 focus:outline-none
"
            />

            <input 
            type="text" 
            placeholder="E-mail" 
            className="w-full text-sm bg-transparent border border-gray-400 px-5 py-3 rounded mb-4 focus:outline-none
"
            />
            <input 
              type="psd" 
              placeholder="Password" 
              className="w-full text-sm bg-transparent border border-gray-400 px-5 py-3 rounded mb-4 focus:outline-none"
            />
            <Link to='/home'>
            <button type="submit" className="w-full text-sm bg-blue-800 text-black p-2 rounded my-1" onSubmit={Home()}>
            Create Account
            </button>
            </Link>

            
            <p className="text-sm text-center mt-4">
              Already Registered ? {" "}
              <Link to="/" className="font-medium text-primary underline">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  )
}

export default signup