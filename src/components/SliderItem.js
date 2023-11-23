// import React from 'react';
// import './SliderItem.css';

// const SliderItem = ({ image, isActive, parallaxIntensity, transitionSpeed }) => {
//   const translateValue = isActive ? 0 : parallaxIntensity;

//   const itemStyle = {
//     transform: `translateX(${translateValue}%)`,
//     transition: `transform ${transitionSpeed}s ease-in-out`,
//   };

//   return (
//     <div className={`slider-item ${isActive ? 'active' : ''}`} style={itemStyle}>
//       <img src={image} alt={`Slider Item`} />
//     </div>
//   );
// };

// export default SliderItem;


// SliderItem.js

import React, { useEffect, useRef } from 'react';
import './SliderItem.css';

const SliderItem = ({ image, isActive, parallaxIntensity, transitionSpeed }) => {
  const itemRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (itemRef.current && isActive) {
        const scrollPosition = window.scrollY;
        const translateY = -scrollPosition * (parallaxIntensity / 100);
        itemRef.current.style.transform = `translateY(${translateY}%)`;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isActive, parallaxIntensity]);

  const itemStyle = {
    transition: `transform ${transitionSpeed}s ease-in-out`,
  };

  return (
    <div className={`slider-item ${isActive ? 'active' : ''}`} ref={itemRef} style={itemStyle}>
      <img src={image} alt={`Slider Item`} />
    </div>
  );
};

export default SliderItem;
