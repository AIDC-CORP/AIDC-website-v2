
import { Button } from '../../../components/ui/button';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { useI18n } from '../../../shared/hooks/useI18n';

import bgIntro from '../assets/about_intro_bg.png';

const aboutIntroImage1 = new URL('@/assets/images/ai_trong_nong_nghiep.webp', import.meta.url).href;
const aboutIntroImage2 = new URL('@/assets/images/AI-Systems.webp', import.meta.url).href;
const aboutIntroImage3 = new URL('@/assets/images/big_data.png', import.meta.url).href;
const aboutIntroImage4 = new URL('@/assets/images/software_development.webp', import.meta.url).href;

type AboutIntroProps = {
  images?: string[];
};

export default function AboutIntro({
  images,
}: AboutIntroProps) {
  const navigate = useNavigate();
  const { t } = useI18n();

  const pics =
    images?.length === 4
      ? images
      : [
          aboutIntroImage1,
          aboutIntroImage2,
          aboutIntroImage3,
          aboutIntroImage4,
        ];

  return (
    <>
      <style>{`
        .glass-card {
            background: rgba(255, 255, 255, 0.03);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .hero-text-gradient {
            background: linear-gradient(to bottom, #ffffff, #e2e8f0);
            background: linear-gradient(to bottom, #ffffff, #e2e8f0);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        .image-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 1rem;
            width: 100%;
        }
        @media (min-width: 768px) {
            .image-grid {
                grid-template-columns: repeat(2, 1fr);
                width: 110%;
                transform: scale(1.1);
                transform-origin: center;
                gap: 1.5rem;
            }
        }
      `}</style>
      <section 
        style={{
            position: 'relative',
            minHeight: '100vh',
            overflow: 'hidden',
            backgroundColor: '#0B1120',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            paddingTop: '6rem'
        }}
      >
        {/* Abstract Background Layers */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
            {/* Mesh Grid */}
            <div style={{ 
                position: 'absolute', 
                inset: 0, 
                backgroundImage: 'linear-gradient(to right, #4f4f4f2e 1px, transparent 1px), linear-gradient(to bottom, #4f4f4f2e 1px, transparent 1px)', 
                backgroundSize: '14px 24px',
                maskImage: 'radial-gradient(ellipse 60% 50% at 50% 0%, #000 70%, transparent 100%)',
                WebkitMaskImage: 'radial-gradient(ellipse 60% 50% at 50% 0%, #000 70%, transparent 100%)'
            }} />
            
            {/* Glow Orbs */}
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

        <div className="max-w-[1280px] w-full mx-auto px-4 md:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
            
            {/* Text Content */}
            <motion.div
              className="w-full lg:w-1/2 text-center lg:text-left"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <div style={{ display: 'inline-block', marginBottom: '1.5rem', padding: '0.5rem 1rem', borderRadius: '9999px', backgroundColor: 'rgba(56, 189, 248, 0.1)', border: '1px solid rgba(56, 189, 248, 0.2)' }}>
                <span style={{ fontSize: '0.875rem', fontWeight: 600, letterSpacing: '0.05em', color: '#38bdf8', textTransform: 'uppercase' }}>
                    Who We Are
                </span>
              </div>

              <h2 
                className="mb-6"
                style={{ 
                  fontWeight: 800, 
                  fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                  lineHeight: 1.1,
                  letterSpacing: '-0.02em',
                  background: 'linear-gradient(to bottom, #ffffff, #ffffff, #94a3b8)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                {t('about_title')}
              </h2>
              
              <p 
                style={{ 
                    fontSize: '1.125rem', 
                    color: '#94a3b8', 
                    lineHeight: 1.7, 
                    marginBottom: '2.5rem',
                    fontWeight: 300
                }}
              >
                {t('about_intro')}
              </p>
              
              <Button 
                style={{
                    backgroundColor: 'white',
                    color: '#0f172a',
                    padding: '1.25rem 2.5rem',
                    borderRadius: '9999px',
                    fontWeight: 600,
                    fontSize: '1rem',
                    boxShadow: '0 0 20px rgba(255,255,255,0.15)'
                }}
                className="hover:bg-gray-100 transition-all transform hover:-translate-y-1"
                onClick={() => {
                  navigate('/');
                  setTimeout(() => {
                    const element = document.getElementById('core-services');
                    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }, 100);
                }}
              >
                {t('about_btn_discover')}
              </Button>
            </motion.div>

            {/* Image Grid */}
            <motion.div 
              className="w-full lg:w-1/2"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="image-grid">
                {pics.map((src, i) => (
                  <motion.div 
                    key={i} 
                    className="glass-card rounded-2xl overflow-hidden relative group"
                    style={{ aspectRatio: '4/3' }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  >
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.5), transparent)', zIndex: 10 }} />
                    <img
                      src={src}
                      alt={`About image ${i + 1}`}
                      style={{ 
                          width: '100%', 
                          height: '100%', 
                          objectFit: 'cover',
                          transition: 'transform 0.7s ease'
                      }}
                      className="group-hover:scale-110"
                      loading="lazy"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
