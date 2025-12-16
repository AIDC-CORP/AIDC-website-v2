import React from 'react';
import { motion } from 'motion/react';
import AboutIntro from './components/AboutIntro';
import CoreValues from './components/CoreValues';
import BoardOfDirectors from './components/BoardOfDirectors';
import MissionVision from './components/Mission&Vision';

const fadeInUp = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8 }
};

export default function About() {
  return (
    <div>
      <motion.div {...fadeInUp}>
        <AboutIntro />
      </motion.div>
      <motion.div {...fadeInUp}>
        <BoardOfDirectors />
      </motion.div>
      <motion.div {...fadeInUp}>
        <CoreValues />
      </motion.div>
      <motion.div {...fadeInUp}>
        <MissionVision />
      </motion.div>
    </div>
  );
}
