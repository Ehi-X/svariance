import React, { useState, useEffect } from 'react'
import ProductCard from '../components/ProductCard';
import { useNavigate } from 'react-router-dom';


const Products = () => {
  const [product, setProduct] = useState([]);
  const [filteredProduct, setFilteredProduct] = useState([]);
  const navigate = useNavigate();

  
  
  const filterprice = (price) => { 
  
  const filtered =filteredProduct.filter((p) => p.price > price);
  setProduct(filtered);
  return filtered


  
  }

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await fetch("https://fakestoreapi.com/products");
        const response = await data.json();
        setProduct(response)
        setFilteredProduct(response)
      } catch (error) {
        console.log(error.message)
      }
    }
    fetchProduct();
  }, [])
  

  // const filterprice = (price) => { 
  //   const filtered = product.filter((p) => price > p.price);
  //   setProduct(filtered);
  //   return setFilteredProduct;


    
    

    
  

  return (
    <div className='mt-8'>
      <div className='border-b pb-4 flex items-center justify-between'>
        <h3 className='text-2xl font-semibold'>Products</h3>

        <input
            type='text'
            placeholder='Search Products...'
    
            className='border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition'
          />

        <select onChange={(e) => filterprice(Number(e.target.value))}
          className="border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
          name="filter"
          id=""
        >
          <option value="200">Less than 200 NGN</option>
          <option value="700">Between 200 - 1,0000 NGN</option>
          <option value="">All</option>
        </select>
      </div>
     
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
        {product.map((p, index) => (
          <ProductCard key={index} product={p} />
        ))}
      </div>
    </div>
  )
}

export default Products
