import React from 'react';
import { motion } from 'motion/react';
import { useI18n } from '../../../shared/hooks/useI18n';

export default function ContactHero() {
  const { t } = useI18n();

  return (
    <section 
      style={{
        position: 'relative',
        padding: '8rem 0 6rem',
        backgroundColor: '#0B1120',
        color: 'white',
        overflow: 'hidden'
      }}
    >
      {/* Abstract Background Layers */}
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
              position: 'absolute', top: '-10%', right: '-5%', 
              width: '600px', height: '600px', 
              background: 'rgba(56, 189, 248, 0.15)', // sky-400
              filter: 'blur(100px)', borderRadius: '100%', 
              opacity: 0.5
          }} />
          <div style={{ 
              position: 'absolute', bottom: '-10%', left: '-5%', 
              width: '500px', height: '500px', 
              background: 'rgba(99, 102, 241, 0.15)', // indigo-500
              filter: 'blur(100px)', borderRadius: '100%', 
              opacity: 0.4
          }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center space-y-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
             style={{ 
                fontWeight: 800, 
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
                marginBottom: '1rem',
                background: 'linear-gradient(to bottom, #ffffff, #ffffff, #94a3b8)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
          >
            {t('contact_heading')}
          </motion.h1>
          <motion.p 
            className="text-white/90 max-w-3xl mx-auto"
            style={{ fontSize: '1.125rem', color: '#94a3b8', fontWeight: 300, lineHeight: 1.6 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {t('contact_intro')}
          </motion.p>
        </div>
      </div>
    </section>
  );
}
