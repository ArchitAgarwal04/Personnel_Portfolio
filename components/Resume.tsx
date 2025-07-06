'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Download, Eye, Award, Briefcase, GraduationCap, MapPin, Calendar, ExternalLink } from 'lucide-react';
import { Experience, Education } from '@/types';
import { MeshGradient } from '@/components/BackgroundAnimations';

const experiences: Experience[] = [
  {
    title: 'Senior Full Stack Developer',
    company: 'TechCorp Inc.',
    period: '2022 - Present',
    description: 'Lead development of scalable web applications using React, Node.js, and cloud technologies. Managed a team of 5 developers and delivered 15+ successful projects.',
    technologies: ['React', 'Next.js', 'Node.js', 'AWS', 'PostgreSQL', 'TypeScript']
  },
  {
    title: 'Full Stack Developer',
    company: 'StartupXYZ',
    period: '2020 - 2022',
    description: 'Developed and maintained multiple client projects, focusing on performance optimization and user experience. Improved application performance by 40% on average.',
    technologies: ['React', 'Express.js', 'MongoDB', 'Docker', 'Redis']
  },
  {
    title: 'Frontend Developer',
    company: 'WebSolutions',
    period: '2019 - 2020',
    description: 'Created responsive and interactive user interfaces using modern frontend frameworks. Collaborated with design teams to implement pixel-perfect designs.',
    technologies: ['React', 'Vue.js', 'Sass', 'Webpack', 'Jest']
  },
  {
    title: 'Junior Developer',
    company: 'CodeCraft Agency',
    period: '2018 - 2019',
    description: 'Started my professional journey building websites and learning modern development practices. Contributed to 20+ client projects.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'PHP']
  },
];

const education: Education[] = [
  {
    degree: 'Bachelor of Technology in Computer Science',
    institution: 'Indian Institute of Technology, Delhi',
    period: '2015 - 2019',
    description: 'Focused on software engineering, data structures, algorithms, and computer systems. Graduated with First Class Honors.',
    gpa: '8.7/10'
  },
  {
    degree: 'Higher Secondary Certificate',
    institution: 'Delhi Public School',
    period: '2013 - 2015',
    description: 'Specialized in Mathematics, Physics, and Computer Science. Active member of the coding club.',
    gpa: '94.2%'
  },
];

const achievements = [
  'Led a team of 5 developers in delivering a $2M e-commerce project',
  'Improved application performance by 40% through optimization techniques',
  'Contributed to 10+ open source projects with 500+ GitHub stars',
  'Mentored 15+ junior developers and conducted technical workshops',
  'Built and deployed 50+ production applications',
  'Achieved AWS Certified Developer Associate certification',
  'Speaker at 3 tech conferences and meetups',
  'Maintained 99.9% uptime for critical production systems'
];

const projects = [
  {
    name: 'E-Commerce Platform',
    description: 'Full-stack solution handling 10k+ daily users',
    impact: '$500k+ revenue generated'
  },
  {
    name: 'Real-time Analytics Dashboard',
    description: 'Data visualization platform for business insights',
    impact: '60% faster decision making'
  },
  {
    name: 'Mobile Banking App',
    description: 'Secure financial application with biometric auth',
    impact: '100k+ active users'
  }
];

export default function Resume() {
  const handleDownload = () => {
    // In a real application, you would serve the actual PDF file
    const link = document.createElement('a');
    link.href = '/web.pdf';
    link.download = 'Archit_Agarwal_Resume.pdf';
    link.click();
  };

  const handlePreview = () => {
    // In a real application, you would open a modal with PDF preview
    window.open('/web.pdf', '_blank');
  };

  return (
    <section id="resume" className="min-h-screen py-20 relative overflow-hidden">
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
            <span className="gradient-text">Resume</span>
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-white/90">
            My professional journey, achievements, and the impact I've made in the tech industry
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              onClick={handleDownload}
              className="btn-primary group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="mr-2 w-5 h-5" />
              <span className="text-sm md:text-base">Download Resume</span>
            </motion.button>
            <motion.button 
              onClick={handlePreview}
              className="btn-secondary group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Eye className="mr-2 w-5 h-5" />
              <span className="text-sm md:text-base">Preview</span>
            </motion.button>
          </div>
        </motion.div>

        {/* Professional Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass-card p-8 rounded-xl mb-12"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4 gradient-text">Professional Summary</h3>
          <p className="text-base md:text-lg leading-relaxed text-white/90">
            Experienced Full Stack Developer with 5+ years of expertise in building scalable web applications. 
            Proven track record of leading development teams, optimizing performance, and delivering high-quality 
            solutions that drive business growth. Passionate about clean code, user experience, and emerging technologies.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="glass-card p-8 rounded-xl">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-purple-500/30 rounded-lg flex items-center justify-center mr-4">
                  <Briefcase className="w-6 h-6 text-purple-300" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold gradient-text">Experience</h3>
              </div>
              
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    className="border-l-2 border-purple-500/50 pl-6 relative"
                  >
                    <div className="absolute w-3 h-3 bg-purple-400 rounded-full -left-2 top-2"></div>
                    <div className="mb-3">
                      <h4 className="text-lg md:text-xl font-bold text-white">{exp.title}</h4>
                      <div className="flex items-center text-purple-300 font-medium text-base md:text-lg mb-1">
                        <span>{exp.company}</span>
                      </div>
                      <div className="flex items-center text-sm md:text-base text-white/70">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                    <p className="text-sm md:text-base text-white/90 mb-3 leading-relaxed">{exp.description}</p>
                    {exp.technologies && (
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-purple-500/30 text-purple-200 rounded-md text-xs md:text-sm border border-purple-500/50"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Education & Projects */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="space-y-8"
          >
            {/* Education */}
            <div className="glass-card p-8 rounded-xl">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-500/30 rounded-lg flex items-center justify-center mr-4">
                  <GraduationCap className="w-6 h-6 text-blue-300" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold gradient-text">Education</h3>
              </div>
              
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, delay: 0.2 + 0.1 * index }}
                    className="border-l-2 border-blue-500/50 pl-6 relative"
                  >
                    <div className="absolute w-3 h-3 bg-blue-400 rounded-full -left-2 top-2"></div>
                    <div className="mb-2">
                      <h4 className="text-lg md:text-xl font-bold text-white">{edu.degree}</h4>
                      <div className="flex items-center text-blue-300 font-medium text-base md:text-lg mb-1">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span>{edu.institution}</span>
                      </div>
                      <div className="flex justify-between items-center text-sm md:text-base text-white/70">
                        <span>{edu.period}</span>
                        {edu.gpa && <span>GPA: {edu.gpa}</span>}
                      </div>
                    </div>
                    <p className="text-sm md:text-base text-white/90">{edu.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Key Projects */}
            <div className="glass-card p-8 rounded-xl">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-500/30 rounded-lg flex items-center justify-center mr-4">
                  <Award className="w-6 h-6 text-green-300" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold gradient-text">Key Projects</h3>
              </div>
              
              <div className="space-y-4">
                {projects.map((project, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, delay: 0.3 + 0.1 * index }}
                    className="p-4 bg-white/10 rounded-lg border border-white/20"
                  >
                    <h4 className="font-bold text-base md:text-lg text-white mb-2">{project.name}</h4>
                    <p className="text-sm md:text-base text-white/80 mb-2">{project.description}</p>
                    <div className="flex items-center text-green-300 text-sm md:text-base">
                      <ExternalLink className="w-4 h-4 mr-1" />
                      <span>{project.impact}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="glass-card p-8 rounded-xl"
        >
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-yellow-500/30 rounded-lg flex items-center justify-center mr-4">
              <Award className="w-6 h-6 text-yellow-300" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold gradient-text">Key Achievements</h3>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.9 + 0.05 * index }}
                className="flex items-start"
              >
                <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-sm md:text-base text-white/90">{achievement}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}   