

import React, { useState } from 'react';
import { Parallax } from 'react-parallax';  
import './App.css';
import img1 from './images/new-way-sliders.webp';
import book from './images/bookstore.webp';
import cruise from './images/Cruise-ships-1.png';
import software from './images/software.jpg';
import software2 from './images/software2.jpg';
import waterfall from './images/waterfall.jpg';
import aeroplane from './images/aeroplane.avif';

function App() {
  const images = [img1, book, cruise, software, software2, waterfall, aeroplane];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="App">
      <div className="scroll-container">
        {images.map((image, index) => (
          <Parallax key={index} strength={300} bgImage={image} style={{ width: '100%' }}>
            <div className="content">
              <div className="text-content">{/* Your text content here */}</div>
            </div>
          </Parallax>
        ))}
      </div>
      <button className="prev" onClick={handlePrev}>
        &#8249;
      </button>
      <button className="next" onClick={handleNext}>
        &#8250;
      </button>
    </div>
  );
}

export default App;


