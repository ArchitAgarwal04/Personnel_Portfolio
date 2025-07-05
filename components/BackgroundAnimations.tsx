'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export function ParticleBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) {
      console.log('ParticleBackground: Container not found');
      return;
    }

    console.log('ParticleBackground: Starting particle creation');

    const createParticle = () => {
      const particle = document.createElement('div');
      particle.className = 'particle';
      
      const size = Math.random() * 15 + 8;
      const startX = Math.random() * window.innerWidth;
      const duration = Math.random() * 15 + 10;
      
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${startX}px`;
      particle.style.animationDuration = `${duration.toString()}s`;
      particle.style.opacity = (Math.random() * 0.9 + 0.6).toString();
      
      container.appendChild(particle);
      
      setTimeout(() => {
        if (container.contains(particle)) {
          container.removeChild(particle);
        }
      }, duration * 1000);
    };

    const interval = setInterval(createParticle, 100);
    
    return () => {
      clearInterval(interval);
      console.log('ParticleBackground: Cleanup complete');
    };
  }, []);

  return (
    <div ref={containerRef} className="particle-bg absolute inset-0 z-0">
      {/* Test element to verify rendering */}
      <div className="absolute top-4 left-4 w-4 h-4 bg-red-500 rounded-full z-50"></div>
    </div>
  );
}

export function FloatingShapes() {
  const shapes = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    size: Math.random() * 150 + 80,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 15 + 8,
  }));

  console.log('FloatingShapes: Rendering', shapes.length, 'shapes');

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Test element to verify rendering */}
      <div className="absolute top-4 right-4 w-4 h-4 bg-green-500 rounded-full z-50"></div>
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          className="absolute rounded-full bg-gradient-to-br from-purple-500/40 to-blue-500/40 blur-xl"
          style={{
            width: shape.size,
            height: shape.size,
            left: `${shape.x}%`,
            top: `${shape.y}%`,
          }}
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -100, 50, 0],
            scale: [1, 1.3, 0.7, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

export function GridBackground() {
  return (
    <div className="absolute inset-0 grid-pattern opacity-30 z-0" />
  );
}

export function MeshGradient() {
  return (
    <div className="absolute inset-0 mesh-gradient opacity-50 z-0" />
  );
}