import React from 'react';
import { motion } from 'motion/react';
import { Button } from '../../../components/ui/button';

export default function Hero() {
  const aiImages = [
    'https://images.unsplash.com/photo-1625314887424-9f190599bd56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwcm9ib3R8ZW58MXx8fHwxNzYwMTQyMDI4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1645839078449-124db8a049fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXVyYWwlMjBuZXR3b3JrJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjAyMDE5NDd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1655891709727-1506dff4af97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWNoaW5lJTIwbGVhcm5pbmclMjBBSXxlbnwxfHx8fDE3NjAyNDA1Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080',
  ];

  return (
    <section className="relative h-screen min-h-[600px] pt-32 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1645839078449-124db8a049fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMHRlY2hub2xvZ3klMjBuZXR3b3JrfGVufDF8fHx8MTc2MDI1NDgyOXww&ixlib=rb-4.1.0&q=80&w=1080')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a2342]/90 via-[#53bedd]/40 to-[#0a2342]/80" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 xl:px-12 h-full relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between h-full gap-8 lg:gap-12 xl:gap-16">
          {/* Left Content - 70% */}
          <div className="flex-1 lg:w-[65%] xl:w-[70%] text-white space-y-6 text-center lg:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white"
            >
              AIDC corp. was established with the mission of pioneering in the fields of AI, data,
              and digital technologies.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-white/90 max-w-3xl mx-auto lg:mx-0"
            >
              We deliver end-to-end solutions in software development, data analytics, and R&D in
              AI and AR/VR, enabling businesses to optimize performance and strengthen
              competitiveness. Innovation and advanced technologies are at the heart of our
              approach, ensuring sustainable and customized solutions for our clients.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <Button className="bg-[#53bedd] text-white hover:bg-[#53bedd]/90 px-8 py-6 rounded-full">
                Our services
              </Button>
              <Button
                variant="outline"
                className="bg-white text-[#53bedd] border-white hover:bg-white/90 hover:text-[#53bedd] px-8 py-6 rounded-full"
              >
                Contact us
              </Button>
            </motion.div>
          </div>

          {/* Right Content - 30% AI Images */}
          <div className="lg:w-[35%] xl:w-[30%] flex items-center justify-center gap-4 xl:gap-6">
            {aiImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: 1,
                  scale: [0.8, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  delay: index * 0.3,
                  repeat: Infinity,
                  repeatType: 'reverse',
                  repeatDelay: 3,
                }}
                className="hidden md:block w-32 h-32 lg:w-48 lg:h-48 xl:w-56 xl:h-56 rounded-2xl overflow-hidden shadow-2xl"
              >
                <img src={image} alt={`AI Technology ${index + 1}`} className="w-full h-full object-cover" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
