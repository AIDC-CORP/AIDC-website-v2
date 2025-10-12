import React from 'react';
import { ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';

const commitments = [
  '01. Continuous innovation to deliver outstanding value.',
  '02. Transparency and trust in every partnership.',
  "03. Long-term commitment to our customers' sustainable growth.",
];

// Mock logo URLs - in production, replace with actual partner logos
const partnerLogos = [
  'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop',
  'https://images.unsplash.com/photo-1599658880436-c61792e70672?w=200&h=100&fit=crop',
  'https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=200&h=100&fit=crop',
  'https://images.unsplash.com/photo-1614680376408-81e0e00df3dd?w=200&h=100&fit=crop',
  'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop',
];

export default function Customers() {
  return (
    <div className="pt-32 pb-20">
      {/* Section 1 - Dark Background */}
      <section className="py-20 bg-[#0a2342]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            {/* Left - Title */}
            <div className="lg:w-1/2 space-y-6">
              <h2 className="text-[#53bedd]">Customers & Partners</h2>
              <div className="flex items-center gap-4">
                <h3 className="text-white">Our commitment</h3>
                <ChevronRight className="w-8 h-8 text-white" />
              </div>
            </div>

            {/* Right - Cards */}
            <div className="lg:w-1/2 space-y-6">
              {commitments.map((commitment, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all duration-300"
                >
                  <p className="text-white">{commitment}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 - Logo Carousel */}
      <section className="py-12 bg-white overflow-hidden">
        <div className="relative">
          {/* Scrolling Logo Strip */}
          <motion.div
            className="flex gap-12 items-center"
            animate={{
              x: ['0%', '-50%'],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            {/* Double the logos for seamless loop */}
            {[...partnerLogos, ...partnerLogos].map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-48 h-24 bg-gray-100 rounded-lg flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-300"
              >
                <img
                  src={logo}
                  alt={`Partner ${index + 1}`}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
