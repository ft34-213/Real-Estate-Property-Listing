import React from "react";
import { useParams } from "react-router-dom";
import properties from "../data/properties.json";
import Carousel from "../components/Carousel";
import EnquiryForm from "../components/EnquiryForm";

const PropertyDetails = () => {
  const { id } = useParams();
  const property = properties.find((p) => p.id === parseInt(id));

  if (!property) return <p>Property not found</p>;

  return (
    <div className="p-4">
      <h1>{property.title}</h1>
      <Carousel images={property.images} />
      <div className="my-4">Map: Embed Google Maps or Leaflet here</div>
      <p>Location: {property.location}</p>
      <p>Price: ₹{property.price.toLocaleString()}</p>
      <p>Area: {property.area}</p>
      <p>BHK: {property.bhk}</p>
      <p>Amenities: {property.amenities.join(", ")}</p>
      <EnquiryForm />
    </div>
  );
};

export default PropertyDetails;