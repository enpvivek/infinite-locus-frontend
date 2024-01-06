import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from "./Products";
import Header from "./Header";
import Sales from "./Sales";
import Items from "./Items";
import AddProducts from "./AddProducts";

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Products />
            </>
          }
        />
        <Route path="/sales" element={<Sales />} />
        <Route path="/items" element={<Items />} />
        <Route path="/add-products" element={<AddProducts />} />
      </Routes>
    </Router>
  );
}
