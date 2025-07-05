'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export function ParticleBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const createParticle = () => {
      const particle = document.createElement('div');
      particle.className = 'particle';
      
      const size = Math.random() * 4 + 2;
      const startX = Math.random() * window.innerWidth;
      const duration = Math.random() * 20 + 15;
      
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${startX}px`;
      particle.style.animationDuration = `${duration}s`;
      particle.style.opacity = Math.random() * 0.5 + 0.2;
      
      container.appendChild(particle);
      
      setTimeout(() => {
        if (container.contains(particle)) {
          container.removeChild(particle);
        }
      }, duration * 1000);
    };

    const interval = setInterval(createParticle, 300);
    
    return () => {
      clearInterval(interval);
    };
  }, []);

  return <div ref={containerRef} className="particle-bg -z-10" />;
}

export function FloatingShapes() {
  const shapes = Array.from({ length: 6 }, (_, i) => ({
    id: i,
    size: Math.random() * 100 + 50,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 10,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          className="absolute rounded-full bg-gradient-to-br from-purple-500/10 to-blue-500/10 blur-xl"
          style={{
            width: shape.size,
            height: shape.size,
            left: `${shape.x}%`,
            top: `${shape.y}%`,
          }}
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -100, 50, 0],
            scale: [1, 1.2, 0.8, 1],
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
    <div className="absolute inset-0 grid-pattern opacity-30 -z-10" />
  );
}

export function MeshGradient() {
  return (
    <div className="absolute inset-0 mesh-gradient opacity-50 -z-10" />
  );
}