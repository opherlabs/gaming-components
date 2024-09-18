import React, { useState, useEffect, useRef } from 'react';

interface ParticleProps {
  context: CanvasRenderingContext2D | null;
  width: number;
  height: number;
}

const Particle: React.FC<ParticleProps> = ({ context, width, height }) => {
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

export const AnimatedBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      if (canvasRef.current) {
        setDimensions({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
    };

    window.addEventListener('resize', updateDimensions);
    updateDimensions();

    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d') || null;
    let animationFrameId: number;

    const render = () => {
      if (context) {
        context.clearRect(0, 0, dimensions.width, dimensions.height);
      }
      animationFrameId = requestAnimationFrame(render);
    };
    render();

    return () => cancelAnimationFrame(animationFrameId);
  }, [dimensions]);

  return (
    <>
      <canvas
        ref={canvasRef}
        width={dimensions.width}
        height={dimensions.height}
        className="fixed inset-0 pointer-events-none"
      />
      {canvasRef.current && Array.from({ length: 100 }).map((_, index) => (
        <Particle
          key={index}
          context={(canvasRef as any).current.getContext('2d')}
          width={dimensions.width}
          height={dimensions.height}
        />
      ))}
    </>
  );
};

