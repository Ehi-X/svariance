import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const baseURL = import.meta.env.VITE_BASE_URL;
const apiUrl = axios.create({baseURL});
import Swal from 'sweetalert2'

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const navigate = useNavigate();

    const signUpData = {
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName
    }

    console.log(signUpData);

    const handleSignup = async(e) => {
        e.preventDefault();
        const response = await apiUrl.post("/register", signUpData)
        console.log(response.data);

        if(response.data.status === true){
            Swal.fire({
                title: `${response.data.data.firstName}`,
                text: `${response.data.message}`,
                icon: "success"
              });
            navigate("/login");
        }
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-200">
            <div className="bg-white p-8 rounded-lg shadow-lg w-96">
                <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Sign Up</h2>
                <form onSubmit={handleSignup} className="space-y-4">
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
                        required
                    />
                    <input
                        type="firstName"
                        placeholder="firstName"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
                        required
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
                        required
                    />

                    <input
                        type="lastName"
                        placeholder="lastName"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
                        required
                    /> 
                    <Link to="/login" >
                    <button  type="submit" className="w-full bg-gray-500 text-white p-3 rounded-lg hover:bg-gray-600 transition">
                        Sign Up
                    </button>
                    </Link>
                </form>
                <p className="mt-4 text-center text-gray-600">
                    Already have an account? <Link to="/login" className="text-gray-500 font-semibold hover:underline">Log in</Link>
                </p>
            </div>
        </div>
    );
}

export default Register;