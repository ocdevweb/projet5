import React, { useState, useEffect } from 'react';
import { ReactComponent as Left } from "../img/left.svg"; 
import { ReactComponent as Right } from "../img/right.svg"; 

export default function Carousel({ images, interval=5000 }) {
  const [activeIndex, setActiveIndex] = useState(0);
  
  useEffect(() => {
    const autoPlayInterval = setInterval(nextSlide, interval);
    return () => {
      clearInterval(autoPlayInterval);
    };
  }, [interval]);

  function nextSlide() {
    setActiveIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  }
  
  function prevSlide() {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  }

  return (
    <div className="carousel">
      { images.length > 1 && 
      <><Left onClick={prevSlide} className="prev"/>
      <Right onClick={prevSlide} className="next"/></>}
      <img
        src={images[activeIndex]}
        alt={`Slide ${activeIndex}`}
        className="carousel-img"
      />
    </div>
  );
}

