import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from 'sweetalert2'
import { login } from "../redux/slices/authSlice";
import { useDispatch } from "react-redux";
const baseURL = import.meta.env.VITE_BASE_URL;
const apiUrl = axios.create({ baseURL, });


const Login = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginData = {
    email: email,
    password: password
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch(login(loginData))
    console.log(dispatch(login(loginData)));
    
    // const response = await apiUrl.post("/login", loginData)
    // console.log(response);
    // if(response.status === true){
    //     Swal.fire({
    //         title: "Good job!",
    //         text: "You clicked the button!",
    //         icon: "success"
    //       });
    //     navigate("/dashboard");
    // }
    // Swal.fire({
    //     title: "Good job!",
    //     text: "You clicked the button!",
    //     icon: "success"
    //   });
    //   navigate("/product");
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-200">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">

        <h2 className="text-3xl font-bold mb-6 text-center text-gray-600">Login</h2>
        <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 mb-4" />
        <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 mb-4" />

        <button onClick={handleLogin} className="w-full bg-gray-500 text-white p-3 rounded-lg hover:bg-gray-600 transition">Log In</button>
        <p className="mt-4 text-center text-gray-600">
          Don't have an account? <Link to="/product" className="text-gray-500 font-semibold hover:underline">Sign up</Link>
        </p>
      </div>
    </div>
  );
}
export default Login;
