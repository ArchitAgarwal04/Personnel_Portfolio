'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { ChevronDown, Code, Palette, Zap } from 'lucide-react';
import { FloatingText } from '@/scenes/FloatingText';
import { ParticleBackground, FloatingShapes } from '@/components/BackgroundAnimations';

export default function Hero() {
  const controls = useAnimation();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    controls.start({ opacity: 1, y: 0 });
  }, [controls]);

  const scrollToNext = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <ParticleBackground />
      <FloatingShapes />
      
      {/* 3D Background */}
      <div className="absolute inset-0 -z-5">
        <FloatingText />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/20 z-10" />

      {/* Content */}
      <div ref={containerRef} className="relative z-30 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={controls}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <motion.div
            initial={{ scale: 1, opacity: 1 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            className="mb-6"
          >
            <h1 className="font-bold font-poppins mb-6">
              <motion.span 
                className="block text-responsive-4xl md:text-responsive-5xl lg:text-responsive-6xl"
                initial={{ y: 0, opacity: 1 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                Hi, I'm
              </motion.span>
              <motion.span 
                className="block gradient-text text-responsive-4xl md:text-responsive-5xl lg:text-responsive-6xl"
                initial={{ y: 0, opacity: 1 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                Archit Agarwal
              </motion.span>
            </h1>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={controls}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <TypeWriter />
        </motion.div>

        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={controls}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <p className="text-responsive-lg md:text-responsive-xl max-w-4xl mx-auto leading-relaxed opacity-90">
            Full Stack Developer crafting digital experiences with modern technologies and creative solutions.
            Passionate about building scalable applications that make a difference.
          </p>
        </motion.div>

        {/* Feature highlights */}
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={controls}
          transition={{ duration: 0.8 }}
          className="flex flex-wrap justify-center gap-6 mb-12"
        >
          {[
            { icon: Code, text: "Clean Code", color: "from-blue-500 to-cyan-500" },
            { icon: Palette, text: "Creative Design", color: "from-purple-500 to-pink-500" },
            { icon: Zap, text: "Performance", color: "from-yellow-500 to-orange-500" },
          ].map((item, index) => (
            <motion.div
              key={item.text}
              initial={{ opacity: 1, scale: 1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="glass-card px-6 py-3 flex items-center space-x-3 hover:scale-105 transition-transform duration-300"
            >
              <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center`}>
                <item.icon className="w-4 h-4 text-white" />
              </div>
              <span className="font-medium text-responsive-sm">{item.text}</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={controls}
          transition={{ duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 text-responsive-sm">View My Work</span>
          </motion.button>
          <motion.button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-secondary text-responsive-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 1, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30"
      >
        <motion.button
          onClick={scrollToNext}
          className="flex flex-col items-center opacity-70 hover:opacity-100 transition-opacity group"
          whileHover={{ y: -5 }}
        >
          <span className="text-responsive-xs mb-2 font-medium">Scroll Down</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 border-2 border-current rounded-full flex justify-center opacity-30"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-3 bg-current rounded-full mt-2 opacity-50"
            />
          </motion.div>
        </motion.button>
      </motion.div>

      {/* Floating Elements */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-20 left-10 w-20 h-20 bg-purple-500/20 rounded-full blur-xl z-0"
      />
      <motion.div
        animate={{
          y: [0, 20, 0],
          rotate: [0, -5, 5, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-20 right-10 w-32 h-32 bg-blue-500/20 rounded-full blur-xl z-0"
      />
    </section>
  );
}

// TypeWriter Component
function TypeWriter() {
  const texts = [
    "Full Stack Developer",
    "React Specialist",
    "UI/UX Designer", 
    "Problem Solver",
    "Creative Thinker",
    "Tech Enthusiast"
  ];

  return (
    <div className="text-responsive-xl md:text-responsive-2xl font-medium text-purple-400 font-poppins min-h-[60px] flex items-center justify-center">
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <TypeWriterText texts={texts} />
      </motion.div>
    </div>
  );
}

function TypeWriterText({ texts }: { texts: string[] }) {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const text = texts[currentIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setCurrentText(text.slice(0, currentText.length + 1));
        if (currentText === text) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setCurrentText(text.slice(0, currentText.length - 1));
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isDeleting, texts]);

  return (
    <span className="relative">
      {currentText}
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className="inline-block w-1 h-8 bg-purple-400 ml-1"
      />
    </span>
  );
}