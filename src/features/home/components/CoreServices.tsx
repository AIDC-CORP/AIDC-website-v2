import { Database, Brain, Code, Network } from 'lucide-react';
import { motion } from 'motion/react';
import React, { useState } from 'react';

const services = [
  {
    icon: Database,
    title: 'Data analysis services, database construction',
    description: [
      'We provide comprehensive data analysis services and database construction to help organizations transform raw information into actionable insights.',
      'Our solutions ensure reliable, scalable data infrastructures that support smarter decision-making and sustainable growth.',
    ],
  },
  {
    icon: Brain,
    title: 'Application of new technology services',
    description: [
      'We focus on harnessing the power of AI/ML, including computer vision and large language models (LLMs), to deliver intelligent, adaptive solutions.',
      'We help businesses integrate these cutting-edge technologies to enhance efficiency, automation, and user experiences.',
    ],
  },
  {
    icon: Code,
    title: 'Outsourcing services, software development',
    description: [
      'Software development services',
      'Implement product technology transfer, upgrade product versions',
      'R&D as per requirements',
    ],
  },
  {
    icon: Network,
    title: 'Consulting, integrating comprehensive IT systems',
    description: [
      'We offer comprehensive IT systems, covering infrastructure, applications, and data environments.',
      'Our team ensures seamless connectivity between legacy and modern platforms, strengthens security, and improves system performance.',
    ],
  },
];

export default function CoreServices() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="main-heading"
              style={{ fontSize: '2.5rem', fontWeight: 700, zIndex: 1, color: '#222', position: 'relative', display: 'inline-block', whiteSpace: 'nowrap', lineHeight: 1.1 }}
            >
            Core services
              <span className="main-heading-shadow"
                style={{ fontSize: '2.6rem', fontWeight: 700, zIndex: 0, opacity: 0.2, position: 'absolute', left: 0, top: 0, transform: 'translate(12px, -12px)', pointerEvents: 'none', whiteSpace: 'nowrap', lineHeight: 1.1 }}
              >Core services</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      className="h-80 perspective-1000"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <motion.div
        className="relative w-full h-full preserve-3d"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Front Face */}
        <div
          className="absolute inset-0 bg-[#53bedd] rounded-2xl shadow-lg flex flex-col items-center justify-center p-6 backface-hidden"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <service.icon className="w-16 h-16 text-white mb-4" />
          <h3 className="text-white text-center">{service.title}</h3>
        </div>

        {/* Back Face */}
        <div
          className="absolute inset-0 bg-white rounded-2xl shadow-lg p-6 backface-hidden border-2 border-[#53bedd]"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          }}
        >
          <div className="h-full flex flex-col justify-center">
            <h4 className="text-[#53bedd] mb-4 text-center">{service.title}</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              {service.description.map((desc, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-[#53bedd] mr-2">•</span>
                  <span>{desc}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
