import { Database, Brain, Code, Network } from 'lucide-react';
import { motion } from 'motion/react';
import { useMemo, useState } from 'react';
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
    <>
      <style>{`
        .service-grid-responsive {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }
        @media (min-width: 768px) {
          .service-grid-responsive {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (min-width: 992px) {
          .service-grid-responsive {
            grid-template-columns: repeat(4, 1fr);
          }
        }
      `}</style>
      <section 
        id="core-services"
        style={{
          padding: '5rem 0',
          backgroundColor: '#f9fafb'
        }}
      >
        <div 
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 1rem',
            width: '100%',
            boxSizing: 'border-box'
          }}
        >
          <div 
            style={{
              textAlign: 'center',
              marginBottom: '4rem'
            }}
          >
            <h2 
              style={{ 
                fontSize: '2.5rem', 
                fontWeight: 700, 
                zIndex: 1, 
                color: '#222', 
                position: 'relative', 
                display: 'inline-block', 
                whiteSpace: 'nowrap', 
                lineHeight: 1.1 
              }}
            >
              {t('core_heading')}
              <span 
                style={{ 
                  fontSize: '2.6rem', 
                  fontWeight: 700, 
                  zIndex: 0, 
                  opacity: 0.2, 
                  position: 'absolute', 
                  left: 0, 
                  top: 0, 
                  transform: 'translate(12px, -12px)', 
                  pointerEvents: 'none', 
                  whiteSpace: 'nowrap', 
                  lineHeight: 1.1 
                }}
              >
                {t('core_heading')}
              </span>
            </h2>
          </div>

          <div className="service-grid-responsive">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function ServiceCard({ service, index }: { 
  service: {
    icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
    title: string;
    description: string[];
  }; 
  index: number 
}) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      style={{
        height: '20rem',
        perspective: '1000px'
      }}
    >
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        style={{ 
          position: 'relative',
          width: '100%',
          height: '100%',
          transformStyle: 'preserve-3d'
        }}
      >
        {/* Front Face */}
        <div 
          style={{
            position: 'absolute',
            inset: 0,
            borderRadius: '1rem',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
            backfaceVisibility: 'hidden',
            backgroundColor: '#53bedd',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem'
          }}
        >
          <service.icon 
            style={{
              width: '4rem',
              height: '4rem',
              color: 'white',
              marginBottom: '1rem'
            }}
          />
          <h3 
            style={{
              color: 'white',
              textAlign: 'center',
              fontSize: '1.25rem',
              fontWeight: 600
            }}
          >
            {service.title}
          </h3>
        </div>

        {/* Back Face */}
        <div 
          style={{
            position: 'absolute',
            inset: 0,
            borderRadius: '1rem',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
            backfaceVisibility: 'hidden',
            backgroundColor: 'white',
            padding: '1.5rem',
            border: '2px solid #53bedd',
            transform: 'rotateY(180deg)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
          }}
        >
          <h4 
            style={{
              color: '#53bedd',
              marginBottom: '1rem',
              textAlign: 'center',
              fontSize: '1.125rem',
              fontWeight: 600
            }}
          >
            {service.title}
          </h4>
          <ul 
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem',
              fontSize: '0.875rem',
              color: '#374151',
              listStyle: 'none',
              padding: 0,
              margin: 0
            }}
          >
            {service.description.map((desc, i) => (
              <li 
                key={i}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start'
                }}
              >
                <span style={{ color: '#53bedd', marginRight: '0.5rem' }}>•</span>
                <span>{desc}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </motion.div>
  );
}
