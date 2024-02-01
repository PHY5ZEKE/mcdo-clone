// ExampleCarouselImage.js
import React from "react";

const ExampleCarouselImage = ({ text, imagePath }) => (
  <div>
    <img src={imagePath} alt={text} style={{ width: "100%" }} />
    <div className="carousel-caption">
      <h3>{text}</h3>
      {/* Additional caption content if needed */}
    </div>
  </div>
);

export default ExampleCarouselImage;
