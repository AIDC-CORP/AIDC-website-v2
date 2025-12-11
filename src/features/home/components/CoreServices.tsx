import { Database, Brain, Code, Network } from 'lucide-react';
import { motion } from 'motion/react';
import React, { useMemo, useState } from 'react';
import { useI18n } from '../../../shared/hooks/useI18n';

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
    <section id="core-services" className="core-services-section">
      <div className="container-responsive">
          <div className="core-services-header">
            <h2 className="main-heading"
              style={{ fontSize: '2.5rem', fontWeight: 700, zIndex: 1, color: '#222', position: 'relative', display: 'inline-block', whiteSpace: 'nowrap', lineHeight: 1.1 }}
            >
            {t('core_heading')}
              <span className="main-heading-shadow"
                style={{ fontSize: '2.6rem', fontWeight: 700, zIndex: 0, opacity: 0.2, position: 'absolute', left: 0, top: 0, transform: 'translate(12px, -12px)', pointerEvents: 'none', whiteSpace: 'nowrap', lineHeight: 1.1 }}
              >{t('core_heading')}</span>
          </h2>
        </div>

        <div className="core-services-grid">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service, index }: { 
  service: {
    icon: React.ComponentType<{ className?: string }>;
    title: string;
    description: string[];
  }; 
  index: number 
}) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      className="service-card"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <motion.div
        className="service-card-inner"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Front Face */}
        <div className="service-card-front">
          <service.icon className="service-icon" />
          <h3 className="service-title">{service.title}</h3>
        </div>

        {/* Back Face */}
        <div className="service-card-back">
          <div className="service-card-content">
            <h4 className="service-back-title">{service.title}</h4>
            <ul className="service-description-list">
              {service.description.map((desc, i) => (
                <li key={i} className="service-description-item">
                  <span className="service-bullet">•</span>
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
