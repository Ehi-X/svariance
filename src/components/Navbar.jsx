import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { useSelector } from "react-redux";
import CartDrop from "./CartDrop";

const Navbar = () => {
    const cartCount = useSelector((state) => state.cart.cartCount);
    const cartItem = useSelector((state) => state.cart.cartItem);
    // const [cartItem, setcartItem] = useState(false);
    console.log(cartItem);

    const [dropdownOpen, setDropdownOpen] = useState(false);

    const closeDropdown = () => {
        setDropdownOpen(false);
    }

    return (
        <div>
        <nav className="bg-gray-600 text-white py-4 shadow-md ">
            <div className="container mx-auto flex justify-between items-center px-4">

                <div className="text-3xl font-bold">
                    <Link to="/">ETZEE</Link>
                </div>


                <div className="flex space-x-6">
                    <Link to="/" className="hover:text-gray-300 font-semibold text-2xl">Home</Link>

                </div>


                <div className="">
                    <button onClick={()=> {setDropdownOpen ((previous) => !previous)}}>
                        <FiShoppingCart className="text-3xl hover:text-gray-300" />
                        <span className="absolute bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
                            {cartCount}
                        </span>
                    </button>



                </div>
            </div >

            
            
        </nav>
        {dropdownOpen && <CartDrop closeDropdown={closeDropdown}/>}
        </div>
    );
};

export default Navbar;
