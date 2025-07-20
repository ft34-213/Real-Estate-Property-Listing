import React from "react";

const Carousel = ({ images }) => (
  <div className="carousel">
    {images.map((src, i) => (
      <img key={i} src={src} alt="slide" className="w-full h-64 object-cover mb-2" />
    ))}
  </div>
);

export default Carousel;
