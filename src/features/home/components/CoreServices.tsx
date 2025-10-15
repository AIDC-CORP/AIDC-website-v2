import { Database, Brain, Code, Network } from 'lucide-react';
import { motion } from 'motion/react';
import React, { useMemo, useState } from 'react';
import { useI18n } from '../../../App';

function useServices() {
  const { t } = useI18n();
  return useMemo(
    () => [
      {
        icon: Database,
        title: t('svc1_title'),
        description: [t('svc1_desc1'), t('svc1_desc2')],
      },
      {
        icon: Brain,
        title: t('svc2_title'),
        description: [t('svc2_desc1'), t('svc2_desc2')],
      },
      {
        icon: Code,
        title: t('svc3_title'),
        description: [t('svc3_desc1'), t('svc3_desc2'), t('svc3_desc3')],
      },
      {
        icon: Network,
        title: t('svc4_title'),
        description: [t('svc4_desc1'), t('svc4_desc2')],
      },
    ],
    [t]
  );
}

export default function CoreServices() {
  const { t } = useI18n();
  const services = useServices();
  return (
    <section id="core-services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="main-heading"
              style={{ fontSize: '2.5rem', fontWeight: 700, zIndex: 1, color: '#222', position: 'relative', display: 'inline-block', whiteSpace: 'nowrap', lineHeight: 1.1 }}
            >
            {t('core_heading')}
              <span className="main-heading-shadow"
                style={{ fontSize: '2.6rem', fontWeight: 700, zIndex: 0, opacity: 0.2, position: 'absolute', left: 0, top: 0, transform: 'translate(12px, -12px)', pointerEvents: 'none', whiteSpace: 'nowrap', lineHeight: 1.1 }}
              >{t('core_heading')}</span>
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
