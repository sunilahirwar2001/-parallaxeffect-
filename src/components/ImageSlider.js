import React, { useState } from 'react';
import SliderItem from './SliderItem';
import './ImageSlider.css';

const ImageSlider = ({ images, parallaxIntensity, transitionSpeed }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="image-slider">
      {images.map((image, index) => (
        <SliderItem
          key={index}
          image={image}
          isActive={index === currentIndex}
          parallaxIntensity={parallaxIntensity}
          transitionSpeed={transitionSpeed}
        />
      ))}
      <div className="navigation-arrows">
        <button onClick={handlePrev}>&#8249;</button>
        <button onClick={handleNext}>&#8250;</button>
      </div>
      <div className="dots">
        {images.map((_, index) => (
          <div
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
