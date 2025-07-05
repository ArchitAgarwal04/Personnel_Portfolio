'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { OrbitingSkills } from '@/scenes/OrbitingSkills';
import { SkillCategory } from '@/types';
import { GridBackground } from '@/components/BackgroundAnimations';

const skillCategories: SkillCategory[] = [
  {
    name: 'Frontend Development',
    skills: [
      { name: 'React', level: 95 },
      { name: 'Next.js', level: 90 },
      { name: 'TypeScript', level: 88 },
      { name: 'Tailwind CSS', level: 92 },
      { name: 'Framer Motion', level: 85 },
      { name: 'Vue.js', level: 78 },
    ],
  },
  {
    name: 'Mock Category',
    skills: [
      { name: 'Mock Skill 1', level: 50 },
      { name: 'Mock Skill 2', level: 60 },
      { name: 'Mock Skill 3', level: 70 },
    ],
  },
  {
    name: 'Backend Development',
    skills: [
      { name: 'Node.js', level: 87 },
      { name: 'Python', level: 82 },
      { name: 'Express.js', level: 85 },
      { name: 'FastAPI', level: 80 },
      { name: 'GraphQL', level: 75 },
      { name: 'REST APIs', level: 90 },
    ],
  },
  {
    name: 'Database & Cloud',
    skills: [
      { name: 'PostgreSQL', level: 85 },
      { name: 'MongoDB', level: 83 },
      { name: 'Redis', level: 78 },
      { name: 'AWS', level: 75 },
      { name: 'Docker', level: 80 },
      { name: 'Supabase', level: 88 },
    ],
  },
  {
    name: 'Tools & Others',
    skills: [
      { name: 'Git', level: 92 },
      { name: 'Figma', level: 87 },
      { name: 'Jest', level: 82 },
      { name: 'Webpack', level: 75 },
      { name: 'Vite', level: 85 },
      { name: 'Linux', level: 80 },
    ],
  },
];

const certifications = [
  {
    name: 'AWS Certified Developer',
    issuer: 'Amazon Web Services',
    year: '2024',
    level: 'Associate'
  },
  {
    name: 'React Developer Certification',
    issuer: 'Meta',
    year: '2023',
    level: 'Professional'
  },
  {
    name: 'Full Stack Web Development',
    issuer: 'freeCodeCamp',
    year: '2022',
    level: 'Certification'
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="skills" className="min-h-screen py-20 relative overflow-hidden">
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
            <span className="gradient-text">Skills & Expertise</span>
          </h2>
          <p className="text-responsive-lg max-w-3xl mx-auto opacity-90">
            Technologies and tools I use to bring ideas to life and create exceptional digital experiences
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 1, x: 0 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {skillCategories.map((category, categoryIndex) => (
              <div key={category.name} className="glass-card p-6 rounded-xl">
                <h3 className="text-responsive-xl font-bold mb-6 gradient-text">{category.name}</h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 1, x: 0 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5 }}
                      className="flex items-center justify-between"
                    >
                      <span className="font-medium text-responsive-sm">{skill.name}</span>
                      <div className="flex items-center space-x-3">
                        <div className="w-32 h-2 bg-gray-700 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: `${skill.level}%` }}
                            animate={{ width: `${skill.level}%` }}
                            transition={{ duration: 1 }}
                            className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
                          />
                        </div>
                        <span className="text-responsive-xs opacity-70 w-10">{skill.level}%</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 1, x: 0 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative h-96 lg:h-full"
          >
            <OrbitingSkills />
          </motion.div>
        </div>

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h3 className="text-responsive-2xl font-bold mb-8 gradient-text">Certifications & Achievements</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 1, scale: 1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="glass-card p-6 rounded-xl card-hover"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-responsive-lg">🏆</span>
                </div>
                <h4 className="font-bold text-responsive-md mb-2">{cert.name}</h4>
                <p className="text-purple-400 text-responsive-sm mb-1">{cert.issuer}</p>
                <div className="flex justify-between items-center text-responsive-xs opacity-70">
                  <span>{cert.year}</span>
                  <span>{cert.level}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}