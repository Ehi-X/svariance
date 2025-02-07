import React from "react";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";

const Navbar = () => {
    return (
        <nav className="bg-gray-600 text-white py-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center px-4">
                
              
                <div className="text-3xl font-bold">
                    <Link to="/">ETZEE</Link>
                </div>

                
                <div className="flex space-x-6">
                    <Link to="/" className="hover:text-gray-300 font-semibold text-2xl">Home</Link>
                    {/* <Link to="/product" className="hover:text-gray-300 font-semibold text-2xl">Products</Link> */}
                    
                </div>

                <div>

                    <Link to="/cart" className="relative">
                        <FiShoppingCart className="text-3xl hover:text-gray-300" />
                        <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
                            5
                        </span>
                    </Link>
                
                </div>

                
            </div>
        </nav>
    );
};

export default Navbar;
