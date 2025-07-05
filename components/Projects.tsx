'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Github, ArrowRight, Star, Users, Calendar } from 'lucide-react';
import { Project } from '@/types';
import { MeshGradient } from '@/components/BackgroundAnimations';

const projects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment integration, admin dashboard, real-time inventory management, and advanced analytics.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind CSS', 'Socket.io'],
    liveUrl: 'https://ecommerce-demo.com',
    githubUrl: 'https://github.com/archit/ecommerce',
    imageUrl: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: true,
    stats: { stars: 124, users: '2.5k', date: '2024' }
  },
  {
    id: 'mock',
    title: 'Mock Portfolio Project',
    description: 'A sample project to showcase portfolio layout and design. Includes mock data for demonstration.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    liveUrl: '#',
    githubUrl: '#',
    imageUrl: 'https://images.pexels.com/photos/3184295/pexels-photo-3184295.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: false,
    stats: { stars: 0, users: '0', date: '2025' }
  },
  {
    id: '2',
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, team collaboration features, time tracking, and advanced project analytics.',
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'Socket.io', 'Framer Motion'],
    liveUrl: 'https://taskmanager-demo.com',
    githubUrl: 'https://github.com/archit/taskmanager',
    imageUrl: 'https://images.pexels.com/photos/3184295/pexels-photo-3184295.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: true,
    stats: { stars: 89, users: '1.8k', date: '2024' }
  },
  {
    id: '3',
    title: 'Weather Dashboard',
    description: 'A beautiful weather dashboard with interactive charts, location-based forecasts, animated weather icons, and detailed climate analytics.',
    technologies: ['React', 'D3.js', 'OpenWeather API', 'Framer Motion', 'Chart.js'],
    liveUrl: 'https://weather-dashboard-demo.com',
    githubUrl: 'https://github.com/archit/weather-dashboard',
    imageUrl: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
    stats: { stars: 67, users: '1.2k', date: '2023' }
  },
  {
    id: '4',
    title: 'Social Media Analytics',
    description: 'An analytics dashboard for social media managers with real-time metrics, engagement tracking, report generation, and AI-powered insights.',
    technologies: ['Vue.js', 'Python', 'FastAPI', 'PostgreSQL', 'Chart.js', 'TensorFlow'],
    liveUrl: 'https://social-analytics-demo.com',
    githubUrl: 'https://github.com/archit/social-analytics',
    imageUrl: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
    stats: { stars: 156, users: '3.1k', date: '2023' }
  },
  {
    id: '5',
    title: 'AI Content Generator',
    description: 'An AI-powered content generation tool that helps writers create engaging content using natural language processing and machine learning.',
    technologies: ['React', 'OpenAI API', 'Node.js', 'MongoDB', 'Tailwind CSS', 'Redis'],
    liveUrl: 'https://ai-content-demo.com',
    githubUrl: 'https://github.com/archit/ai-content-generator',
    imageUrl: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
    stats: { stars: 203, users: '4.7k', date: '2024' }
  },
  {
    id: '6',
    title: 'Real-time Chat Application',
    description: 'A modern chat application with real-time messaging, file sharing, video calls, and end-to-end encryption for secure communication.',
    technologies: ['Next.js', 'Socket.io', 'WebRTC', 'MongoDB', 'Redis', 'AWS S3'],
    liveUrl: 'https://chat-app-demo.com',
    githubUrl: 'https://github.com/archit/chat-app',
    imageUrl: 'https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg?auto=compress&cs=tinysrgb&w=800',
    stats: { stars: 178, users: '2.9k', date: '2024' }
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [filter, setFilter] = useState('all');

  // Always show all projects, including mock data, regardless of filter
  const filteredProjects = projects;

  return (
    <section id="projects" className="min-h-screen py-20 relative overflow-hidden">
      <MeshGradient />
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-transparent to-purple-900/10" />
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-responsive-4xl md:text-responsive-5xl font-bold font-poppins mb-6">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-responsive-lg max-w-3xl mx-auto mb-8 opacity-90">
            Showcasing some of my best work in web development, featuring modern technologies and innovative solutions
          </p>
          
          {/* Filter buttons */}
          <div className="flex justify-center space-x-4 mb-8">
            {['all', 'featured'].map((filterType) => (
              <button
                key={filterType}
                onClick={() => setFilter(filterType)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 text-responsive-sm ${
                  filter === filterType
                    ? 'bg-purple-600 text-white'
                    : 'bg-white/10 hover:bg-white/20'
                }`}
              >
                {filterType === 'all' ? 'All Projects' : 'Featured'}
              </button>
            ))}
          </div>
        </motion.div>

        {/* All Projects Grid (shows all, including mock data) */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16"
        >
          <motion.button 
            className="btn-primary group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="flex items-center text-responsive-sm">
              View All Projects
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index, featured = false }: { project: Project; index: number; featured?: boolean }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 1, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
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
              <span className="text-responsive-xs">{project.stats.stars}</span>
            </div>
            <div className="flex items-center space-x-1 bg-black/50 backdrop-blur-sm rounded-full px-2 py-1">
              <Users className="w-3 h-3 text-blue-400" />
              <span className="text-responsive-xs">{project.stats.users}</span>
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
            <span className="text-responsive-xs">{project.stats.date}</span>
          </div>
        )}
      </div>
      
      <div className="p-6">
        <h3 className="text-responsive-lg font-bold mb-3 group-hover:text-purple-400 transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-responsive-sm opacity-70 mb-4 leading-relaxed">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <motion.span
              key={tech}
              className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-purple-300 rounded-full text-responsive-xs border border-purple-500/30"
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
                className="text-purple-400 hover:text-purple-300 transition-colors text-responsive-sm font-medium"
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
                className="text-blue-400 hover:text-blue-300 transition-colors text-responsive-sm font-medium"
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