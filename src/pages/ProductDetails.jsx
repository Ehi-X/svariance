import { FlutterWaveButton, closePaymentModal } from "flutterwave-react-v3";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const FLUTTER_PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY
    

    useEffect(() => {
        const fetchSingleProduct = async () => {
            try {
                const response = await fetch(`https://fakestoreapi.com/products/${id}`);
                if (!response.ok) {
                    throw new Error("Failed to fetch product");
                }
                const data = await response.json();
                setProduct(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchSingleProduct();
    }, [id]);

    if (loading) return <p >Loading product details...</p>;
    if (error) return <p >Error: {error}</p>;
    if (!product) return <p >Product not found</p>;

    const config = {
        public_key: FLUTTER_PUBLIC_KEY,
        tx_ref: Date.now(),
        amount: product.price,
        currency: 'NGN',
        payment_options: 'card,mobilemoney,ussd',
        customer: {
          email: 'user@gmail.com',
          phone_number: '070****',
          name: 'john doe',
        },
        customizations: {
          title: 'ETZEE',
          description: 'Payment for items in cart',
          logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
        },
      };
    
      const fwConfig = {
        ...config,
        text: 'Order now!',
        callback: (response) => {
           console.log(response);
          closePaymentModal() 
        },
        onClose: () => {},
      };

    return (
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 p-6 bg-white shadow-lg rounded-lg max-w-4xl mx-auto">
            <div className="w-full md:w-1/3">
                <img 
                    className="w-full rounded-lg shadow-md bg-gray-100 p-4" 
                    src={product.image} 
                    alt={product.title} 
                />
            </div>

            <div className="w-full md:w-2/3 space-y-4">
                <h2 className="text-2xl font-bold text-gray-800">{product.title}</h2>
                <p className="text-gray-600 leading-relaxed"><strong>Description:</strong> {product.description}</p>
                <p className="text-xl font-semibold text-green-600"><strong>Price:</strong> ${product.price}</p>

                <FlutterWaveButton className="px-5 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300" {...fwConfig} />
                {/* <button className="px-5 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
                    Add to Cart
                </button> */}
            </div>
        </div>
    );
};

export default ProductDetails;
