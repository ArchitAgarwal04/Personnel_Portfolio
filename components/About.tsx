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
  return (
    <section id="about" className="min-h-screen py-20 relative overflow-hidden">
      <GridBackground />
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/20" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins mb-6">
            <span className="gradient-text">About Me</span>
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Hi! I'm Archit, a passionate full stack developer with a love for building modern web applications and creative digital experiences. I enjoy working with the latest technologies and collaborating with teams to deliver impactful solutions.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-10 mb-16">
          {features.map((feature, idx) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.1 * idx }}
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
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.4 + 0.1 * idx }}
              className="flex flex-col items-center bg-white/10 rounded-xl p-6 shadow"
            >
              <stat.icon size={32} className="mb-2 text-purple-400" />
              <span className="text-3xl font-bold gradient-text mb-1">{stat.number}</span>
              <span className="text-base text-white/90">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}