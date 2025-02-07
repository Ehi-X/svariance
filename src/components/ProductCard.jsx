import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white shadow-lg rounded-2xl p-4 w-full sm:w-64 md:w-72 lg:w-80 transition-transform transform hover:scale-105 hover:shadow-xl">
      <div className="flex justify-center">
        <img 
          src={product.image} 
          alt={product.title} 
          className="h-48 w-40 object-contain mb-4 rounded-md"
        />
      </div>
      
      <h3 className="text-lg font-semibold text-gray-800 line-clamp-2">
        {product.title}
      </h3>
      
      <p className="text-gray-500 text-sm mt-2 capitalize">{product.category}</p>
      
      <p className="text-xl font-bold text-green-600 mt-2">${product.price}</p>
      
      <button 
        onClick={() => navigate(`/product/${product.id}`)}
        className="mt-4 w-full bg-gray-600 text-white py-2 rounded-lg hover:bg-gray-700 transition duration-300"
      >
        View Details
      </button>
    </div>
  );
};

export default ProductCard;
