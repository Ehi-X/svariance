import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


const CartDrop = ({closeDropDown}) => {
    const cartItems = useSelector((state) => state.cart.cartItem);

    console.log("Cart Items:", cartItems);

    return (
        <div className="relative z-10">

            <div className="bg-gray-600 text-white shadow-lg p-4 absolute right-0 top-0 mt-2">
                <h3 className="text-2xl font-bold">Cart Items</h3>
                {cartItems.length === 0 ? (
                    <p className="text-gray-500"> Your cart is empty  </p>
                ) : (

                    <div className="max-h-64 overflow-y-auto">
                        <ul>
                            {cartItems.map((item, index) => (
                                <li key={index} className="flex justify-between py-2 border-b">
                                    <span>{item?.title || "No Name"}</span>
                                    <span className="text-sm font-semibold">${item?.price || "0.00"}</span>
                                </li>


                            ))}


                        </ul>
                    </div>



                )}
                <div>
                <Link to="checkout" onClick={closeDropDown} className="block mt-4 bg-white text-black py-2 text-center rounded-md">
                    Check out
                </Link>
                </div>




            </div>
        </div>
    );
};

export default CartDrop;