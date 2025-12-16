import React from 'react';
import { motion } from 'motion/react';
import FormSection from './components/FormSection';
import MapSection from './components/MapSection';
import ContactHero from './components/ContactHero';
import ContactInfo from './components/ContactInfo';

export default function Contact() {
  return (
    <div style={{ paddingTop: '110px' }} className="pb-20">
      {/* Section 1 - Hero */}
      <ContactHero />

      {/* Section 2 - Contact Form & Info */}
      <motion.div 
        style={{ backgroundColor: '#f8fafc' }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div className="container mx-auto px-4 pt-16">
          <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Left - Contact Info */}
              <ContactInfo />

              {/* Right - Contact Form */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <FormSection />
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Section 3 - Map Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <MapSection />
      </motion.div>
    </div>
  );
}
