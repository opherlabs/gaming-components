'use client';
import React, { useState } from 'react';
import "./index.css";
export const AnimatedCard = () => {
  const [rotation, setRotation] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleMouseEnter = () => {
    setRotation(45);
  };

  const handleMouseLeave = () => {
    setRotation(0);
  };

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      style={{
        transform: `rotateY(${rotation}deg)`,
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={(e) => {
        e.preventDefault();
        handleClick();
      }}
      className={isFlipped ? 'flip cardd' : 'cardd'}
    >
      <h2>Card Title</h2>
      <p>Card Content</p>
    </div>
  );
};
