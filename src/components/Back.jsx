import React from 'react';
import { useNavigate } from 'react-router-dom';

const Back = () => {
  const navigate = useNavigate(); 

  return (
    <div className="p-4">
      <button
        onClick={() => navigate(-1)}
        className="bg-gray-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-gray-700 mt-2 transition duration-300"
      >
        Go Back
      </button>
    </div>
  );
};

export default Back;
