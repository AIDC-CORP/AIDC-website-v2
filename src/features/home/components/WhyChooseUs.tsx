import React from 'react';
import { motion } from 'motion/react';
import { Users, Target, Lightbulb, Award } from 'lucide-react';

const values = [
  { icon: Users, title: 'Partnership' },
  { icon: Target, title: 'Excellence' },
  { icon: Lightbulb, title: 'Innovation' },
  { icon: Award, title: 'Quality' },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="relative inline-block text-gray-900">
            Why choose us?
            <span className="absolute inset-0 text-gray-200 blur-sm -z-10">Why choose us?</span>
          </h2>
        </div>

        <div className="relative max-w-4xl mx-auto h-[600px] flex items-center justify-center">
          {/* Rotating dashed circle */}
          <motion.div
            className="absolute w-96 h-96 rounded-full border-4 border-dashed border-[#53bedd]"
            animate={{ rotate: 360 }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear',
            }}
          />

          {/* Center Circle */}
          <div className="relative z-10 w-64 h-64 rounded-full bg-gradient-to-br from-[#53bedd] to-[#2a9cbd] shadow-2xl flex flex-col items-center justify-center text-white p-8">
            <h3 className="text-white mb-4 text-center">Growing together</h3>
            <p className="text-center text-white/90 text-sm">
              Building sustainable relationships through innovation and excellence
            </p>
          </div>

          {/* Orbiting Values */}
          {values.map((value, index) => {
            const angle = (index * 360) / values.length;
            const radius = 220;
            const x = Math.cos((angle * Math.PI) / 180) * radius;
            const y = Math.sin((angle * Math.PI) / 180) * radius;

            return (
              <motion.div
                key={index}
                className="absolute"
                style={{
                  left: '50%',
                  top: '50%',
                }}
                animate={{
                  x: [x, Math.cos(((angle + 360) * Math.PI) / 180) * radius],
                  y: [y, Math.sin(((angle + 360) * Math.PI) / 180) * radius],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              >
                <motion.div
                  className="w-24 h-24 -ml-12 -mt-12 rounded-full bg-white shadow-xl flex flex-col items-center justify-center border-4 border-[#53bedd]"
                  animate={{ rotate: -360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                >
                  <value.icon className="w-8 h-8 text-[#53bedd] mb-1" />
                  <span className="text-xs text-gray-700 text-center px-2">{value.title}</span>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
