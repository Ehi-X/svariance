import React from "react";
import { useSelector } from "react-redux";
import { FlutterWaveButton, closePaymentModal } from "flutterwave-react-v3";

const Checkout = (item) => {
  const cartItems = useSelector((state) => state.cart.cartItem) || []; 
  const totalAmount = cartItems.reduce((acc, item) => acc + item.price, 0);
  const FLUTTER_PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

  const config = {
    public_key: FLUTTER_PUBLIC_KEY,
    tx_ref: Date.now(),
    amount: totalAmount,
    currency: "NGN",
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: "user@gmail.com",
      phone_number: "070****",
      name: "John Doe",
    },
    customizations: {
      title: "ETZEE Checkout",
      description: "Payment for items in cart",
      logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
    },
    callback: (response) => {
      console.log(response);
      closePaymentModal();
    },
  };

  const fwConfig = {
    ...config,
    text: 'Proceed',
    callback: (response) => {
       console.log(response);
      closePaymentModal() 
    },
    onClose: () => {},
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>

      <div className="bg-white shadow-lg rounded-lg p-6">
        {cartItems.length === 0 ? (
          <p className="text-gray-500">Your cart is empty.</p>
        ) : (
          <ul className="divide-y divide-gray-300">
            {cartItems.map((item, index) => (
              <li key={index} className="flex justify-between py-3">
                <span>{item.title || "No Name"}</span>
                <span className="font-semibold">₦{item.price || 0.00}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="mt-6 text-lg font-bold">
        Total Amount: <span className="text-blue-600">₦{totalAmount.toFixed(2)}</span>
      </div>

      <div className="mt-6">
        <FlutterWaveButton
          {...fwConfig}
          className="px-5 py-2 bg-blue-600 w-40 h-10 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
        />
      </div>
    </div>
  );
};

export default Checkout;
