import React from "react";
import { CiSettings } from "react-icons/ci";
import { PiMoneyWavyBold } from "react-icons/pi";
import { AiOutlineProduct } from "react-icons/ai";
import { Link } from "react-router-dom";



const Sidebar = () => {
    return (
        <aside className=" w-40 bg-gray-600 text-white p-5">
            <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
            <nav className="flex flex-col space-y-4">
                <Link to="/product" className="flex items-center space-x-3 hover:bg-gray-700 p-2 rounded">
                    <AiOutlineProduct />
                    <span>Product</span>
                </Link>
                <Link to="/billing" className="flex items-center space-x-3 hover:bg-gray-700 p-2 rounded">
                    <PiMoneyWavyBold />
                    <span>Billing</span>
                </Link>
                <div className="mt-90 flex">
                    <CiSettings />
                    <Link to="/settings" className="flex items-center space-x-40 hover:bg-gray-700 p-2 rounded">

                        <span>Settings</span>
                    </Link>
                </div>
            </nav>
        </aside>
    );
};

export default Sidebar;
