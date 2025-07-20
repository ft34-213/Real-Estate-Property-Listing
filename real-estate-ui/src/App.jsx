import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PropertyDetails from "./pages/PropertyDetails";
import Favorites from "./pages/Favorites";

const App = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/property/:id" element={<PropertyDetails />} />
    <Route path="/favorites" element={<Favorites />} />
  </Routes>
);

export default App;