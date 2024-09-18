'use client';

import React, { useRef, useEffect } from 'react';

interface ParticleProps {
  context: CanvasRenderingContext2D | null;
  width: number;
  height: number;
}


export const ParticleComponent: React.FC<ParticleProps> = ({ context, width, height }) => {
  const x = useRef(Math.random() * width);
  const y = useRef(Math.random() * height);
  const dx = useRef((Math.random() - 0.5) * 0.5);
  const dy = useRef((Math.random() - 0.5) * 0.5);
  const color = `hsl(${Math.random() * 360}, 50%, 50%)`;
  const size = Math.random() * 3 + 1;

  const animate = () => {
    if (!context) return;

    x.current += dx.current;
    if (x.current < 0 || x.current > width) {
      dx.current = -dx.current;
      x.current = Math.max(0, Math.min(x.current, width));
    }

    y.current += dy.current;
    if (y.current < 0 || y.current > height) {
      dy.current = -dy.current;
      y.current = Math.max(0, Math.min(y.current, height));
    }

    context.beginPath();
    context.arc(x.current, y.current, size, 0, Math.PI * 2);
    context.fillStyle = color;
    context.fill();

    requestAnimationFrame(animate);
  };

  useEffect(() => {
    animate();
  }, [context, width, height]);

  return null;
};
