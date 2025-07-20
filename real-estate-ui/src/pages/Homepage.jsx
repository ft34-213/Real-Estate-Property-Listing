import React, { useState } from "react";
import propertiesData from "../data/properties.json";
import PropertyCard from "../components/propertycard";
import Filters from "../components/Flters";

const HomePage = () => {
  const [filters, setFilters] = useState({});
  const [favorites, setFavorites] = useState(() => JSON.parse(localStorage.getItem("favorites")) || []);

  const handleFavorite = (property) => {
    const updated = [...favorites, property];
    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  };

  const filtered = propertiesData.filter((p) => {
    return (
      (!filters.minPrice || p.price >= filters.minPrice) &&
      (!filters.maxPrice || p.price <= filters.maxPrice) &&
      (!filters.type || p.type === filters.type) &&
      (!filters.bhk || p.bhk === filters.bhk)
    );
  });

  return (
    <div>
      <Filters filters={filters} setFilters={setFilters} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
        {filtered.map((property) => (
          <PropertyCard key={property.id} property={property} onFavorite={handleFavorite} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;