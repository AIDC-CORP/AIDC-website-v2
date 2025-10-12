import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const coreValues = [
  'PRACTICE is the criterion to test TRUTH',
  'RESPONSIBILITY is our unwavering commitment TO CUSTOMERS',
  'CREATIVITY paves the way for BREAKTHROUGH',
  'DISCIPLINE builds COLLECTIVE STRENGTH',
  'QUALITY is the measure of REPUTATION',
  'TRANSPARENCY builds TRUST',
  'CONTINUOUS LEARNING so we can GO FURTHER',
];

export default function CoreValues() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % coreValues.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + coreValues.length) % coreValues.length);
  };

  const getVisibleValues = () => {
    const visible: { index: number; value: string; position: number; }[] = [];
    for (let i = -1; i <= 1; i++) {
      const index = (currentIndex + i + coreValues.length) % coreValues.length;
      visible.push({ index, value: coreValues[index], position: i });
    }
    return visible;
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="relative inline-block text-gray-900">
            Core values
            <span className="absolute inset-0 text-gray-200 blur-sm -z-10">Core values</span>
          </h2>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-[#53bedd] text-white rounded-full flex items-center justify-center hover:bg-[#2a9cbd] transition-colors shadow-lg"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-[#53bedd] text-white rounded-full flex items-center justify-center hover:bg-[#2a9cbd] transition-colors shadow-lg"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Values Display */}
          <div className="overflow-hidden px-20">
            <div className="flex items-center justify-center gap-8 h-80">
              <AnimatePresence mode="popLayout">
                {getVisibleValues().map(({ index, value, position }) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8, x: position * 100 }}
                    animate={{
                      opacity: position === 0 ? 1 : 0.4,
                      scale: position === 0 ? 1 : 0.8,
                      x: position * 320,
                    }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.5 }}
                    className={`flex-shrink-0 w-72 h-72 rounded-full bg-gradient-to-br from-[#53bedd] to-[#2a9cbd] shadow-2xl flex items-center justify-center p-8 ${
                      position !== 0 ? 'pointer-events-none' : ''
                    }`}
                  >
                    <p className="text-white text-center">{value}</p>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {coreValues.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex ? 'bg-[#53bedd] w-8' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
