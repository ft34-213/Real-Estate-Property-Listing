import React from "react";
import { Link } from "react-router-dom";

const PropertyCard = ({ property, onFavorite }) => {
  const handleFavorite = () => onFavorite(property);

  return (
    <div className="border rounded shadow p-2">
      <img src={property.images[0]} alt="Property" className="w-full h-48 object-cover" />
      <h3>{property.title}</h3>
      <p>{property.location}</p>
      <p>₹{property.price.toLocaleString()}</p>
      <div className="flex justify-between items-center mt-2">
        <Link to={`/property/${property.id}`} className="btn btn-primary">View Details</Link>
        <button onClick={handleFavorite}>♥</button>
      </div>
    </div>
  );
};

export default PropertyCard;
