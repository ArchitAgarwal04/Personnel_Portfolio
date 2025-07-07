'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Github, ArrowRight, Star, Users, Calendar } from 'lucide-react';
import { Project } from '@/types';
import { MeshGradient } from '@/components/BackgroundAnimations';

const projects: Project[] = [
  {
    id: 'osimulate',
    title: '🧠 OSimulate – Operating Systems Learning Dashboard',
    description: [
      'Interactive platform for learning Operating System concepts visually.',
      'Structured lessons on scheduling, memory management, deadlocks, and more.',
      'Simulators for page replacement, CPU, and disk scheduling algorithms.',
      'Integrated notes, quizzes, and progress tracking.',
      'Modular architecture with C++ backend logic and Next.js 15 frontend.',
      'Adopted by faculty and students at GEHU.'
    ],
    technologies: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'Supabase', 'C++'],
    liveUrl: 'https://osimulate.netlify.app/',
    githubUrl: 'https://github.com/OSimulate/OSimulate',
    imageUrl: '/osimulate.png',
    featured: true,
    stats: { stars: 20, users: 'Faculty & Students', date: '2025' }
  },
  {
    id: 'formcraft',
    title: '🧾 FormCraft – Custom Form Builder',
    description: [
      'Real-time form builder with drag-and-drop interface.',
      'Design, customize, and share forms for surveys and data collection.',
      'Secure form links with public/private access.',
      'Live preview and custom field configuration.',
      'PostgreSQL integration for reliable data storage.',
      'Type-safe backend with Next.js 14 and TypeScript.',
      'Ideal for teams and individuals needing quick, customizable forms.'
    ],
    technologies: ['Next.js 14', 'TypeScript', 'PostgreSQL', 'Tailwind CSS'],
    liveUrl: 'https://form-craft-delta.vercel.app/',
    githubUrl: 'https://github.com/ArchitAgarwal04/FormCraft',
    imageUrl: '/formcraft.png',
    featured: false,
    stats: { stars: 0, users: 'Teams & Individuals', date: '2025' }
  },
  {
    id: 'mindguard',
    title: '🧠 MindGuard – AI-Powered Mental Health SaaS',
    description: [
      'Intelligent SaaS platform for personalized journaling and emotional tracking.',
      'Custom LLM integration for empathetic, context-aware prompts.',
      'Analytics dashboard for mood trends and keyword insights.',
      'Light/dark mode UI for accessibility.',
      'Secure MongoDB storage and user authentication.',
      'Conversational AI interface using OpenAI APIs.',
      'Finalist at Grapha-e-thon 2.0, praised for real-world impact and UX.',
      'Open-sourced and modular for future expansion.'
    ],
    technologies: ['Next.js 14', 'Tailwind CSS', 'MongoDB', 'OpenAI APIs', 'TypeScript'],
    githubUrl: 'https://github.com/ArchitAgarwal04/MindGuard',
    imageUrl: '/mindguard.jpg',
    featured: true,
    stats: { stars: 0, users: 'Finalist Teams', date: '2025' }
  },
  {
    id: '3',
    title: 'Weather Dashboard',
    description: [
      'Beautiful dashboard with interactive weather charts.',
      'Location-based forecasts and animated weather icons.',
      'Detailed climate analytics and data visualizations.',
      'Built with React, D3.js, and Chart.js.'
    ],
    technologies: ['React', 'D3.js', 'OpenWeather API', 'Framer Motion', 'Chart.js'],
    liveUrl: 'https://weather-dashboard-bah3-m019b2xp8.vercel.app/',
    githubUrl: 'https://github.com/ArchitAgarwal04/WeatherDashboard',
    imageUrl: '/image.png',
    stats: { stars: 67, users: '1.2k', date: '2023' }
  },
  {
    id: 'pathfinding',
    title: '🧭 Pathfinding Race – Visual Pathfinding Algorithm Simulator',
    description: [
      'Interactive web-based tool to visualize and compare pathfinding algorithms in real-time.',
      'Race Mode: Watch BFS, Dijkstra\'s, and A* compete to find the shortest path.',
      'Step-by-step animation with color-coded nodes and traversal flow.',
      'Custom grid editor: add walls, set start/end points, generate random mazes.',
      'Control animation speed, reset grid, and compare runs dynamically.',
      'Educational focus: designed to teach algorithm behavior visually and intuitively.',
      'Perfect for students, educators, and anyone curious about pathfinding.'
    ],
    technologies: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: 'https://architagarwal04.github.io/pathFinding/',
    githubUrl: 'https://github.com/ArchitAgarwal04/pathFinding',
    imageUrl: '/pathfinding.png',
    stats: { stars: 0, users: 'Students & Educators', date: '2024' }
  },
  {
    id: 'portfolio',
    title: '🌐 Personal Portfolio – Developer Showcase & Digital Identity',
    description: [
      'Sleek, responsive, and performance-optimized website to highlight my technical skills, projects, open-source work, and achievements.',
      'Project showcases with tech stacks, live demos, and GitHub links.',
      'Animated UI/UX with smooth transitions and hover effects using Framer Motion.',
      'Modern design with custom typography, soft gradients, and light/dark mode.',
      'Mobile-first and fully responsive across all devices.',
      'Modular, scalable, and built with reusable components and clean code.',
      'A storytelling platform reflecting my journey, growth, and value as a developer.'
    ],
    technologies: ['Next.js 14', 'Tailwind CSS', 'TypeScript', 'Framer Motion'],
    liveUrl: 'https://personnel-portfolio-655vxase3-archit-agarwals-projects-f61b9f94.vercel.app/',
    githubUrl: 'https://github.com/ArchitAgarwal04/Personnel_Portfolio',
    imageUrl: '/portfolio.png',
    stats: { stars: 0, users: 'Developers & Recruiters', date: '2025' }
  },
  {
    id: 'applevision',
    title: '🍎 Apple Vision – Product Landing Page Clone',
    description: [
      'Visually striking front-end project replicating the Apple Vision Pro landing experience.',
      'GSAP-powered scroll-based transitions and parallax effects.',
      'Pixel-perfect layout with immersive visuals and hardware showcases.',
      'Responsive design for desktop and mobile.',
      'Practice project for modern web animation and layout structuring.',
      'Demonstrates advanced front-end techniques and design-first thinking.'
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'GSAP'],
    liveUrl: 'https://architagarwal04.github.io/Apple-Vision/',
    githubUrl: 'https://github.com/ArchitAgarwal04/Apple-Vision',
    imageUrl: '/visionpro.png',
    stats: { stars: 0, users: 'Frontend Enthusiasts', date: '2024' }
  },
];

export default function Projects() {
  const [filter, setFilter] = useState('all');

  // Always show all projects, including mock data, regardless of filter
  const filteredProjects = projects;

  return (
    <section id="projects" className="min-h-screen py-20 relative overflow-hidden">
      <MeshGradient />
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-purple-900/20" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins mb-6">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-white/90">
            Showcasing some of my best work in web development, featuring modern technologies and innovative solutions
          </p>
        </motion.div>

        {/* All Projects Grid (shows all, including mock data) */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index, featured = false }: { project: Project; index: number; featured?: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, delay: 0.1 * index }}
      className={`glass-card rounded-xl overflow-hidden card-hover group ${
        featured ? 'lg:col-span-1' : ''
      }`}
    >
      <div className="relative overflow-hidden">
        <motion.img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-48 object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        
        {/* Project stats overlay */}
        {project.stats && (
          <div className="absolute top-4 left-4 flex space-x-2">
            <div className="flex items-center space-x-1 bg-black/50 backdrop-blur-sm rounded-full px-2 py-1">
              <Star className="w-3 h-3 text-yellow-400" />
              <span className="text-xs">{project.stats.stars}</span>
            </div>
            <div className="flex items-center space-x-1 bg-black/50 backdrop-blur-sm rounded-full px-2 py-1">
              <Users className="w-3 h-3 text-blue-400" />
              <span className="text-xs">{project.stats.users}</span>
            </div>
          </div>
        )}
        
        <div className="absolute top-4 right-4 flex space-x-2">
          {project.liveUrl && (
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ExternalLink className="w-4 h-4" />
            </motion.a>
          )}
          {project.githubUrl && (
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Github className="w-4 h-4" />
            </motion.a>
          )}
        </div>

        {project.stats && (
          <div className="absolute bottom-4 left-4 flex items-center space-x-1 bg-black/50 backdrop-blur-sm rounded-full px-2 py-1">
            <Calendar className="w-3 h-3 text-gray-400" />
            <span className="text-xs">{project.stats.date}</span>
          </div>
        )}
      </div>
      
      <div className="p-6">
        <h3 className="text-lg md:text-xl font-bold mb-3 group-hover:text-purple-400 transition-colors duration-300 text-white">
          {project.title}
        </h3>
        <ul className="list-disc pl-5 text-sm md:text-base text-white/70 mb-4 leading-relaxed">
          {project.description.map((desc, index) => (
            <li key={index}>{desc}</li>
          ))}
        </ul>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <motion.span
              key={tech}
              className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-purple-300 rounded-full text-xs border border-purple-500/30"
              whileHover={{ scale: 1.05 }}
            >
              {tech}
            </motion.span>
          ))}
        </div>

        <div className="flex justify-between items-center">
          <div className="flex space-x-3">
            {project.liveUrl && (
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:text-purple-300 transition-colors text-sm md:text-base font-medium"
                whileHover={{ x: 5 }}
              >
                Live Demo →
              </motion.a>
            )}
            {project.githubUrl && (
              <motion.a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors text-sm md:text-base font-medium"
                whileHover={{ x: 5 }}
              >
                Source Code →
              </motion.a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}