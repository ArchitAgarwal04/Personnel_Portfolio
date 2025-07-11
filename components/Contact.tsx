'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';

import { ContactFormData } from '@/types';

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    value: 'architagarwal147@gmail.com',
    link: 'mailto:architagarwal147@gmail.com'
  },
  {
    icon: Phone,
    title: 'Phone',
    value: '+91 8439939169',
    link: 'tel:+918439939169'
  },
  {
    icon: MapPin,
    title: 'Location',
    value: 'Dehradun, India',
    link: '#'
  }
];

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    // Simulate API call
    try {
    await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
    setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
    setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="min-h-screen py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-purple-900/20" />
      {/* ContactCube removed as it requires onActivate prop */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins mb-6">
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-white/90">
            Ready to start a project or just want to chat? I'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="glass-card p-8 rounded-xl">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 gradient-text">Let's Connect</h3>
              <p className="text-base md:text-lg text-white/90 mb-8 leading-relaxed">
                I'm always open to discussing new opportunities, interesting projects, or just having a friendly chat about technology and development.
              </p>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.title}
                    href={info.link}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, delay: 0.3 + 0.1 * index }}
                    className="flex items-center space-x-4 p-4 rounded-lg hover:bg-white/10 transition-colors duration-300 group"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                      <h4 className="text-lg font-semibold text-white">{info.title}</h4>
                      <p className="text-white/70">{info.value}</p>
                  </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="glass-card p-8 rounded-xl"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-6 gradient-text">Send Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                  onChange={handleInputChange}
                    required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                    placeholder="Your name"
                  />
              </motion.div>
                
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                  onChange={handleInputChange}
                    required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
              </motion.div>
                
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                  onChange={handleInputChange}
                    required
                    rows={5}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Tell me about your project or just say hello!"
                  />
              </motion.div>
                
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send className="mr-2 w-5 h-5" />
                  <span className="text-sm md:text-base">
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </span>
                </motion.button>
              </motion.div>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center space-x-2 text-green-400 bg-green-400/10 p-3 rounded-lg"
                >
                  <CheckCircle className="w-5 h-5" />
                  <span>Message sent successfully!</span>
                </motion.div>
              )}

              {submitStatus === 'error' && (
                      <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center space-x-2 text-red-400 bg-red-400/10 p-3 rounded-lg"
                >
                  <AlertCircle className="w-5 h-5" />
                  <span>Failed to send message. Please try again.</span>
                </motion.div>
              )}
              </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}