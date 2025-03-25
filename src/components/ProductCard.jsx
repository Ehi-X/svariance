import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addtoCart } from '../redux/slices/cartslice'

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();


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
      
      <div className='flex gap-2'>

      <button 
        onClick={() => navigate(`/product/${product.id}`)}
        className="mt-4 w-full bg-gray-600 text-white py-2 rounded-lg hover:bg-gray-700 transition duration-300"
      >
        View Details
      </button>

      <button onClick={()=> {dispatch(addtoCart(product))}}
        className="mt-4 w-full bg-gray-600 text-white py-2 rounded-lg hover:bg-gray-700 transition duration-300"
      >
        Add to Cart
      </button>
      </div>
    </div>
  );
};

export default ProductCard;
