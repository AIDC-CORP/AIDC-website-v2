
import { motion } from 'motion/react';
import { useI18n } from '../../../shared/hooks/useI18n';

export default function ProductIntro() {
  const { t } = useI18n();
  
  return (
    <div style={{ position: 'relative', overflow: 'hidden', backgroundColor: '#0B1120', color: 'white' }}>
      {/* Background with abstract shapes/gradients similar to ProductDetail */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <div style={{ 
              position: 'absolute', 
              inset: 0, 
              backgroundImage: 'linear-gradient(to right, #4f4f4f2e 1px, transparent 1px), linear-gradient(to bottom, #4f4f4f2e 1px, transparent 1px)', 
              backgroundSize: '14px 24px',
              maskImage: 'radial-gradient(ellipse 60% 50% at 50% 0%, #000 70%, transparent 100%)',
              WebkitMaskImage: 'radial-gradient(ellipse 60% 50% at 50% 0%, #000 70%, transparent 100%)'
          }} />
          <div style={{ 
              position: 'absolute', top: '-10%', left: '50%', transform: 'translateX(-50%)', 
              width: '1000px', height: '500px', 
              background: 'rgba(37, 99, 235, 0.15)', // blue-600 low opacity
              filter: 'blur(80px)', borderRadius: '100%', 
              opacity: 0.6
          }} />
          <div style={{ 
              position: 'absolute', bottom: '-20%', right: '-10%', 
              width: '800px', height: '600px', 
              background: 'rgba(79, 70, 229, 0.1)', // indigo-600 low opacity
              filter: 'blur(100px)', borderRadius: '100%', 
              opacity: 0.4
          }} />
      </div>

      <div style={{ 
          position: 'relative', zIndex: 10, 
          paddingTop: '8rem', paddingBottom: '6rem',
          textAlign: 'center' 
      }}>
        <div style={{ width: '100%', maxWidth: '1280px', margin: '0 auto', padding: '0 1rem' }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              style={{ display: 'inline-block', marginBottom: '1.5rem', padding: '0.5rem 1rem', borderRadius: '9999px', backgroundColor: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(4px)', border: '1px solid rgba(255,255,255,0.1)' }}
            >
                <span style={{ fontSize: '0.875rem', fontWeight: 600, letterSpacing: '0.05em', color: '#93c5fd' }}>
                    INNOVATIVE SOLUTIONS
                </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{ 
                  fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', 
                  fontWeight: 800, 
                  marginBottom: '1.5rem', 
                  lineHeight: 1.1,
                  background: 'linear-gradient(to bottom, #ffffff, #e2e8f0)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  letterSpacing: '-0.02em'
              }}
            >
              {t('nav_product')}
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{ 
                  fontSize: '1.25rem', 
                  color: '#94a3b8', 
                  maxWidth: '48rem', 
                  margin: '0 auto', 
                  lineHeight: 1.6 
              }}
            >
              {t('hero_desc_1')}
            </motion.p>
        </div>
      </div>
    </div>
  );
}
