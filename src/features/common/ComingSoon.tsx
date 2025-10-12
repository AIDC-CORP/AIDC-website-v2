import React from 'react';
import { motion } from 'motion/react';
import { Construction } from 'lucide-react';

export default function ComingSoon() {
  return (
    <div className="min-h-screen pt-32 flex items-center justify-center bg-gray-50">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center space-y-6 px-4"
      >
        <Construction className="w-24 h-24 text-[#53bedd] mx-auto" />
        <h1 className="text-gray-900">Coming Soon</h1>
        <p className="text-gray-600 max-w-md mx-auto">
          This page is currently under construction. We're working hard to bring you great content.
          Please check back soon!
        </p>
      </motion.div>
    </div>
  );
}
