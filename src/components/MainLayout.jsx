import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Back from './Back';

const MainLayout = () => {
  return (
    <div className="flex flex-col h-screen">
    
      <Navbar />

      
      <div className="flex  flex-grow ">
        
        <Sidebar />

       
        <div className="flex-grow p-6 bg-gray-100">
          <Back />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
