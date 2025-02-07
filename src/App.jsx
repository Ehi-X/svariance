import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import Product from "./pages/Product";
import ProductDetails from "./pages/ProductDetails";

import Settings from "./pages/Settings";
import Billings from "./pages/Billings";
import Homep from "./pages/Homep";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
        <Route index path= "/" element = {<Homep/>}/>
          <Route path="product" element={<Product />} />
          <Route path="product/:id" element={<ProductDetails />} />
          <Route path ="settings" element = {<Settings/>}/>
          <Route path ="billing" element = {<Billings/>}/>
          
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
