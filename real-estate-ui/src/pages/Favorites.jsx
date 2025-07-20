import React from "react";
import PropertyCard from "../components/propertycard";

const Favorites = () => {
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  return (
    <div className="p-4">
      <h2 className="text-xl mb-4">Favorites</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {favorites.map((property) => (
          <PropertyCard key={property.id} property={property} onFavorite={() => {}} />
        ))}
      </div>
    </div>
  );
};

export default Favorites;