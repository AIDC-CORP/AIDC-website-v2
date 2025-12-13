
import { Database, Brain, Code, Network } from 'lucide-react';
import { motion } from 'motion/react';
import { useMemo, useState } from 'react';
import { useI18n } from '../../../shared/hooks/useI18n';
import bgDatabase from '../assets/service_bg_database.png';
import bgAi from '../assets/service_bg_ai.png';
import bgCode from '../assets/service_bg_code.png';
import bgNetwork from '../assets/service_bg_network.png';

function useServices() {
  const { t } = useI18n();
  return useMemo(
    () => [
      {
        icon: Database,
        title: t('svc1_title'),
        description: [t('svc1_desc1'), t('svc1_desc2')],
        image: bgDatabase
      },
      {
        icon: Brain,
        title: t('svc2_title'),
        description: [t('svc2_desc1'), t('svc2_desc2')],
        image: bgAi
      },
      {
        icon: Code,
        title: t('svc3_title'),
        description: [t('svc3_desc1'), t('svc3_desc2'), t('svc3_desc3')],
        image: bgCode
      },
      {
        icon: Network,
        title: t('svc4_title'),
        description: [t('svc4_desc1'), t('svc4_desc2')],
        image: bgNetwork
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
          backgroundColor: '#f9fafb', // Reverted to Light
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Removed Dark Background Decorative Elements */}

        <div 
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 1rem',
            width: '100%',
            boxSizing: 'border-box',
            position: 'relative',
            zIndex: 10
          }}
        >
          <div className="text-left mb-16 pl-4 relative">
            <h2 
              style={{ 
                fontSize: '44px',
                fontWeight: 700, 
                color: '#000', 
                position: 'relative', 
                display: 'inline-block', 
                whiteSpace: 'nowrap', 
                lineHeight: 1.2,
                zIndex: 2,
                fontFamily: 'Roboto, sans-serif'
              }}
            >
              {t('core_heading')}
              <span 
                style={{ 
                  fontSize: '66px', 
                  fontWeight: 700, 
                  position: 'absolute', 
                  left: '30px', 
                  top: '-18px', 
                  transform: 'translateY(-20%)',
                  pointerEvents: 'none', 
                  whiteSpace: 'nowrap', 
                  lineHeight: 1,
                  zIndex: -1,
                  background: 'linear-gradient(to bottom, rgba(209, 213, 219, 1) 20%, rgba(209, 213, 219, 0) 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
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
    image: string;
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
        height: '24rem', // Slightly taller for cleaner layout
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
            boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.15), inset 0 1px 0 0 rgba(255, 255, 255, 0.5)',
            backfaceVisibility: 'hidden',
            backgroundColor: '#0B1120', 
            // Darker Hero-like gradient
            background: 'linear-gradient(135deg, #334155 0%, #0f172a 100%)', 
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden'
          }}
        >
          
          {/* Background Image - Visible Layer */}
          <div 
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundImage: `url(${service.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: 0.6, 
              mixBlendMode: 'overlay',
              pointerEvents: 'none',
              filter: 'grayscale(0.5) contrast(0.97)' // Desaturate slightly to match neutral theme
            }} 
          />
          
          {/* Additional Shine for depth */}
          <div 
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              background: 'linear-gradient(105deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.05) 30%, transparent 50%)',
              pointerEvents: 'none'
            }} 
          />

          <service.icon 
            style={{
              width: '4rem',
              height: '4rem',
              color: 'white',
              marginBottom: '1rem',
              zIndex: 1
            }}
          />
          <h3 
            style={{
              color: 'white',
              textAlign: 'center',
              fontSize: '1.25rem',
              fontWeight: 700,
              zIndex: 1,
              textShadow: '0 2px 4px rgba(0,0,0,0.2)'
            }}
          >
            {service.title}
          </h3>
        </div>

        {/* Back Face - Original Light Style */}
        <div 
          style={{
            position: 'absolute',
            inset: 0,
            borderRadius: '1rem',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
            backfaceVisibility: 'hidden',
            background: 'linear-gradient(to bottom right, #ffffff, #f0f9ff) padding-box, linear-gradient(135deg, #53bedd, #2563eb) border-box',
            border: '2px solid transparent',
            padding: '1.5rem',
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
