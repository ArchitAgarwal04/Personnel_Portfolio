'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { SkillCategory } from '@/types';
import { OrbitingSkills } from '@/scenes/OrbitingSkills';
import { GridBackground } from '@/components/BackgroundAnimations';

const skillCategories: SkillCategory[] = [
  {
    name: 'Frontend Development',
    skills: [
      { name: 'React', level: 95 },
      { name: 'Next.js', level: 90 },
      { name: 'TypeScript', level: 88 },
      { name: 'JavaScript', level: 92 },
      { name: 'HTML/CSS', level: 95 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'Sass/SCSS', level: 85 },
      { name: 'Vue.js', level: 80 }
    ]
  },
  {
    name: 'Backend Development',
    skills: [
      { name: 'Node.js', level: 90 },
      { name: 'Express.js', level: 88 },
      { name: 'Python', level: 85 },
      { name: 'FastAPI', level: 82 },
      { name: 'PostgreSQL', level: 85 },
      { name: 'MongoDB', level: 80 },
      { name: 'Redis', level: 75 },
      { name: 'GraphQL', level: 78 }
    ]
  },
  {
    name: 'Cloud & DevOps',
    skills: [
      { name: 'AWS', level: 85 },
      { name: 'Docker', level: 80 },
      { name: 'Kubernetes', level: 70 },
      { name: 'CI/CD', level: 82 },
      { name: 'Terraform', level: 75 },
      { name: 'Linux', level: 85 },
      { name: 'Nginx', level: 78 },
      { name: 'Monitoring', level: 80 }
    ]
  },
  {
    name: 'Design & UX',
    skills: [
      { name: 'Figma', level: 85 },
      { name: 'Adobe XD', level: 80 },
      { name: 'Photoshop', level: 75 },
      { name: 'Illustrator', level: 70 },
      { name: 'Framer Motion', level: 88 },
      { name: 'Three.js', level: 75 },
      { name: 'WebGL', level: 65 },
      { name: 'UI/UX Design', level: 85 }
    ]
  },
  {
    name: 'Mobile Development',
    skills: [
      { name: 'React Native', level: 80 },
      { name: 'Flutter', level: 75 },
      { name: 'iOS Development', level: 70 },
      { name: 'Android Development', level: 70 },
      { name: 'PWA', level: 85 },
      { name: 'Mobile UI', level: 80 },
      { name: 'App Store', level: 75 },
      { name: 'Performance', level: 82 }
    ]
  },
  {
    name: 'Other Skills',
    skills: [
      { name: 'Git', level: 90 },
      { name: 'Agile/Scrum', level: 85 },
      { name: 'Testing', level: 80 },
      { name: 'SEO', level: 75 },
      { name: 'Security', level: 80 },
      { name: 'Performance', level: 85 },
      { name: 'Accessibility', level: 80 },
      { name: 'Documentation', level: 85 }
    ]
  }
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
  return (
    <section id="skills" className="min-h-screen py-20 relative overflow-hidden">
      <GridBackground />
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/20" />
      <OrbitingSkills />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins mb-6">
            <span className="gradient-text">Skills & Technologies</span>
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-white/90">
            A comprehensive overview of my technical expertise and proficiency levels across various technologies
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
          <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="glass-card p-6 rounded-xl"
          >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center mr-4">
                  <div className="w-6 h-6 bg-white rounded-sm"></div>
                </div>
                <h3 className="text-xl md:text-2xl font-bold gradient-text">{category.name}</h3>
              </div>
              
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.5, delay: 0.1 * index + 0.05 * skillIndex }}
                    >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm md:text-base font-medium text-white">{skill.name}</span>
                      <span className="text-sm text-purple-300">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2">
                          <motion.div
                            className="h-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 1, delay: 0.1 * index + 0.1 * skillIndex }}
                          />
                        </div>
                  </motion.div>
                ))}
                      </div>
                    </motion.div>
                  ))}
                </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="glass-card p-8 rounded-xl max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 gradient-text">Continuous Learning</h3>
            <p className="text-base md:text-lg text-white/90 mb-6 leading-relaxed">
              I'm constantly expanding my skill set and staying up-to-date with the latest technologies and best practices. 
              My passion for learning drives me to explore new frameworks, tools, and methodologies that can enhance the 
              quality and efficiency of my work.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold gradient-text mb-2">95%</div>
                <div className="text-sm text-white/70">Frontend Mastery</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold gradient-text mb-2">90%</div>
                <div className="text-sm text-white/70">Backend Expertise</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold gradient-text mb-2">85%</div>
                <div className="text-sm text-white/70">Cloud & DevOps</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold gradient-text mb-2">88%</div>
                <div className="text-sm text-white/70">Problem Solving</div>
              </div>
            </div>
          </div>
          </motion.div>

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-8 gradient-text">Certifications & Achievements</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.7 + 0.1 * index }}
                className="glass-card p-6 rounded-xl card-hover"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">🏆</span>
                </div>
                <h4 className="font-bold text-base md:text-lg mb-2 text-white">{cert.name}</h4>
                <p className="text-purple-300 text-sm md:text-base mb-1">{cert.issuer}</p>
                <div className="flex justify-between items-center text-xs text-white/70">
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