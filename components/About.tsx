'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Palette, Rocket, Users, Award, Coffee } from 'lucide-react';
import { GridBackground } from '@/components/BackgroundAnimations';

const features = [
  {
    icon: Code,
    title: 'Clean Code',
    description: 'Writing maintainable, scalable, and efficient code with modern best practices and design patterns.',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Palette,
    title: 'Creative Design',
    description: 'Crafting beautiful, intuitive user interfaces that engage users and deliver exceptional experiences.',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: Rocket,
    title: 'Performance',
    description: 'Building fast, optimized applications with cutting-edge technologies and performance optimization.',
    color: 'from-orange-500 to-red-500'
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'Working effectively with cross-functional teams to deliver projects that exceed expectations.',
    color: 'from-green-500 to-emerald-500'
  },
];

const stats = [
  { number: '50+', label: 'Projects Completed', icon: Award },
  { number: '3+', label: 'Years Experience', icon: Coffee },
  { number: '15+', label: 'Technologies Mastered', icon: Code },
  { number: '100%', label: 'Client Satisfaction', icon: Users },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="about" className="min-h-screen py-20 relative overflow-hidden">
      <GridBackground />
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-blue-900/10" />
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-responsive-4xl md:text-responsive-5xl font-bold font-poppins mb-6">
            <span className="gradient-text">About Me</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Hi! I'm Archit, a passionate full stack developer with a love for building modern web applications and creative digital experiences. I enjoy working with the latest technologies and collaborating with teams to deliver impactful solutions.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-10 mb-16">
          {features.map((feature, idx) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 1, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className={`rounded-xl p-6 bg-gradient-to-br ${feature.color} text-white shadow-lg flex items-center space-x-4`}
            >
              <feature.icon size={36} />
              <div>
                <h3 className="text-2xl font-semibold mb-1">{feature.title}</h3>
                <p className="text-base opacity-80">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 1, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center bg-white/10 rounded-xl p-6 shadow"
            >
              <stat.icon size={32} className="mb-2 text-purple-400" />
              <span className="text-3xl font-bold gradient-text mb-1">{stat.number}</span>
              <span className="text-base text-gray-200">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}