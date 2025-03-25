import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import Product from "./pages/Product";
import ProductDetails from "./pages/ProductDetails";
import Settings from "./pages/Settings";
import Billings from "./pages/Billings";
import Checkout from "./components/Checkout";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import { useSelector } from "react-redux";

const App = () => {
  const token = useSelector((data) => data.auth.token);

  return (
    <Router>
      <Routes>
        {/* Public Routes - Accessible without login */}
        {!token ? (
          <>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </>
        ) : (
          /* Protected Routes - Accessible only when logged in */
          <>
            <Route path="/" element={<MainLayout />}>
              <Route path="product" element={<Product />} />
              <Route path="product/:id" element={<ProductDetails />} />
              <Route path="settings" element={<Settings />} />
              <Route path="billing" element={<Billings />} />
              <Route path="checkout" element={<Checkout />} />
            </Route>
            <Route path="*" element={<Navigate to="/" />} />
          </>
        )}
      </Routes>
    </Router>
  );
};

export default App;
