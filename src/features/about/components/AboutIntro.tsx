import React from 'react';
import { Button } from '../../../components/ui/button';
import { motion } from 'motion/react';

export default function AboutIntro() {
  return (
    <section className="py-20 bg-[#53bedd] text-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-4xl mx-auto text-center space-y-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-white">About us</h2>

          <p className="text-white/95 leading-relaxed">
            Vietnam AI Technology and Digital Transformation Joint Stock Company (AIDC Corp.) was
            established with the mission to pioneer in the fields of AI, data, and digital
            technology. We provide end-to-end solutions from software development and data analytics
            to R&D in AI, AR/VR, and green agriculture automation, helping businesses optimize
            operations and embrace sustainable growth. In addition, we apply AI to monitor and
            improve CO₂ processes, supporting enterprises in reducing environmental impact.
            Innovation and the adoption of advanced technologies are always at the core of our
            vision, enabling us to deliver tailored and sustainable solutions for our customers.
          </p>

          <Button className="bg-white text-[#53bedd] hover:bg-gray-100 px-8 py-6 rounded-full">
            Discover our service
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
