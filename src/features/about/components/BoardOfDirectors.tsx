import React, { useState } from 'react';
import { motion } from 'motion/react';

const directors = [
  {
    name: 'Dr. Nguyen Van A',
    position: 'Chief Executive Officer',
    description:
      'With over 20 years of experience in AI and digital transformation, Dr. Nguyen leads AIDC Corp with a vision to revolutionize how businesses leverage technology. His expertise in machine learning and data analytics has driven numerous successful projects across various industries.',
    image: 'https://images.unsplash.com/photo-1425421669292-0c3da3b8f529?w=400',
  },
  {
    name: 'Ms. Tran Thi B',
    position: 'Chief Technology Officer',
    description:
      'Ms. Tran brings a wealth of knowledge in software architecture and emerging technologies. She oversees all technical operations and R&D initiatives, ensuring AIDC Corp stays at the forefront of technological innovation.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400',
  },
  {
    name: 'Mr. Le Van C',
    position: 'Chief Operations Officer',
    description:
      'Mr. Le specializes in operational excellence and process optimization. His strategic approach to business operations has helped scale AIDC Corp efficiently while maintaining high quality standards.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
  },
  {
    name: 'Dr. Pham Thi D',
    position: 'Chief Data Officer',
    description:
      'Dr. Pham is an expert in data science and analytics. She leads our data initiatives, helping clients transform raw data into strategic business insights through advanced analytical frameworks.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400',
  },
];

export default function BoardOfDirectors() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-gray-900">Board of directors</h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto">
          {/* Left - Circular Gallery */}
          <div className="lg:w-1/2 flex items-center justify-center">
            <div className="relative w-96 h-96">
              {/* Decorative Circles */}
              <div className="absolute inset-0 rounded-full border-4 border-[#53bedd]" />
              <motion.div
                className="absolute inset-4 rounded-full border-4 border-dashed border-[#53bedd]"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              />

              {/* Center - Selected Director */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  key={selectedIndex}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-2xl"
                >
                  <img
                    src={directors[selectedIndex].image}
                    alt={directors[selectedIndex].name}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>

              {/* Orbiting Small Circles */}
              {directors.map((director, index) => {
                const angle = (index * 360) / directors.length;
                const radius = 160;
                const x = Math.cos((angle * Math.PI) / 180) * radius;
                const y = Math.sin((angle * Math.PI) / 180) * radius;

                return (
                  <button
                    key={index}
                    onClick={() => setSelectedIndex(index)}
                    className="absolute top-1/2 left-1/2 -ml-12 -mt-12"
                    style={{
                      transform: `translate(${x}px, ${y}px)`,
                    }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-24 h-24 rounded-full overflow-hidden border-4 ${
                        index === selectedIndex
                          ? 'border-[#53bedd] ring-4 ring-[#53bedd]/30'
                          : 'border-white'
                      } shadow-lg transition-all`}
                    >
                      <img
                        src={director.image}
                        alt={director.name}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right - Director Info */}
          <div className="lg:w-1/2 space-y-6">
            <motion.div
              key={selectedIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-gray-900">{directors[selectedIndex].name}</h3>
              <p className="text-[#53bedd] mb-4">{directors[selectedIndex].position}</p>
              <p className="text-gray-700 leading-relaxed">{directors[selectedIndex].description}</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
