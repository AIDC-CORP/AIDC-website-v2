
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from '../../../components/ui/button';
import { useNavigate } from 'react-router-dom';
import { useI18n } from '../../../shared/hooks/useI18n';
import { ArrowRight } from 'lucide-react';

const hpBg = new URL('@/assets/images/hp_bg.jpg', import.meta.url).href;
const hpItem1 = new URL('@/assets/images/hp_item.png', import.meta.url).href;
const hpItem2 = new URL('@/assets/images/hp_item2.png', import.meta.url).href;
const hpItem3 = new URL('@/assets/images/hp_item3.png', import.meta.url).href;

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const navigate = useNavigate();
  const aiImages = [hpItem1, hpItem2, hpItem3];
  const { t } = useI18n();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % aiImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [aiImages.length]);

  return (
    <>
      <style>{`
        .hero-text-gradient {
            background: linear-gradient(to bottom, #ffffff, #e2e8f0);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        .hero-responsive {
          padding-top: 6rem;
        }
        .hero-content-responsive {
          flex-direction: column;
          align-items: center;
          gap: 2rem;
          padding-top: 2rem;
        }
        .hero-left-responsive {
          width: 100%;
          text-align: center;
          margin-top: 2rem;
        }
        .hero-left-responsive * {
          text-align: center !important;
          margin-left: auto !important;
          margin-right: auto !important;
        }
        .hero-right-responsive {
          width: 100%;
        }
        .hero-image-responsive {
          display: none;
        }
        .hero-buttons-responsive {
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }
        .hero-buttons-responsive button {
          width: 100%;
          max-width: 280px;
        }
        @media (min-width: 768px) {
          .hero-responsive {
            padding-top: 8rem;
          }
          .hero-content-responsive {
            margin-top: 0;
            padding-top: 0;
          }
          .hero-image-responsive {
            display: block;
            width: 32rem;
            height: 32rem;
          }
        }
        @media (min-width: 992px) {
          .hero-content-responsive {
            flex-direction: row;
            gap: 3rem;
          }
          .hero-left-responsive {
            width: 60%;
            text-align: left;
          }
          .hero-left-responsive * {
            text-align: left !important;
            margin-left: 0 !important;
            margin-right: auto !important;
          }
          .hero-right-responsive {
            width: 40%;
          }
          .hero-image-responsive {
            width: 20rem;
            height: 20rem;
          }
          .hero-buttons-responsive {
            flex-direction: row;
            justify-content: flex-start;
          }
          .hero-buttons-responsive button {
            width: auto;
          }
        }
        @media (min-width: 1200px) {
          .hero-content-responsive {
            gap: 4rem;
          }
          .hero-left-responsive {
            width: 65%;
            padding-top: 3rem;
          }
          .hero-right-responsive {
            width: 35%;
            padding-top: 3rem;
          }
          .hero-image-responsive {
            width: 28rem;
            height: 28rem;
            padding-top: 3rem;
          }
        }
      `}</style>
      <section 
        className="hero-responsive"
        style={{
          position: 'relative',
          height: '100vh',
          minHeight: '700px',
          overflow: 'hidden',
          backgroundColor: '#0B1120' // Fallback
        }}
      >
        {/* Background Image with Overlay */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: `url('${hpBg}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'saturate(1.1) brightness(0.9)'
            }}
          />
          {/* Enhanced Overlay */}
          <div 
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to right, rgba(11, 17, 32, 0.95), rgba(11, 17, 32, 0.8), rgba(11, 17, 32, 0.4))'
            }}
          />
          {/* Decorative Elements */}
           <div style={{ 
              position: 'absolute', bottom: '-10%', left: '-5%', 
              width: '500px', height: '500px', 
              background: 'rgba(56, 189, 248, 0.2)', 
              filter: 'blur(120px)', borderRadius: '100%', 
              opacity: 0.6
          }} />
        </div>

        {/* Content */}
        <div 
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '0 1rem',
            height: '100%',
            position: 'relative',
            zIndex: 10
          }}
        >
          <div 
            className="hero-content-responsive"
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              height: '100%'
            }}
          >
            {/* Left Content */}
            <div 
              className="hero-left-responsive"
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
                color: 'white',
                zIndex: 20
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                style={{ display: 'inline-block', marginBottom: '0.5rem', padding: '0.5rem 1rem', borderRadius: '9999px', backgroundColor: 'rgba(56, 189, 248, 0.1)', border: '1px solid rgba(56, 189, 248, 0.2)', backdropFilter: 'blur(4px)', width: 'fit-content' }}
               >
                <span style={{ fontSize: '0.875rem', fontWeight: 600, letterSpacing: '0.05em', color: '#7dd3fc', textTransform: 'uppercase' }}>
                    Welcome to AIDC Corp
                </span>
               </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                style={{ 
                  fontWeight: 800, 
                  fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', 
                  lineHeight: 1.1,
                  letterSpacing: '-0.02em',
                  marginBottom: '0.5rem',
                  background: 'linear-gradient(to bottom, #ffffff, #ffffff, #94a3b8)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                {t('hero_title')}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                style={{
                  color: '#94a3b8',
                  fontSize: '1.125rem',
                  lineHeight: 1.7,
                  maxWidth: '42rem'
                }}
              >
                {t('hero_desc_1')} {t('hero_desc_2')}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="hero-buttons-responsive"
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '1.25rem',
                  marginTop: '1.5rem'
                }}
              >
                <Button 
                  style={{
                    backgroundColor: 'white',
                    color: '#0f172a',
                    padding: '1.5rem 2.5rem',
                    borderRadius: '9999px',
                    border: 'none',
                    fontSize: '1rem',
                    fontWeight: 600,
                    boxShadow: '0 0 20px rgba(255,255,255,0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}
                  className="hover:bg-gray-100 transition-all transform hover:-translate-y-1"
                  onClick={() => {
                    const element = document.getElementById('core-services');
                    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }}
                >
                  {t('hero_btn_services')}
                  <ArrowRight size={18} />
                </Button>
                <Button
                  variant="outline"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    color: 'white',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    padding: '1.5rem 2.5rem',
                    borderRadius: '9999px',
                    fontSize: '1rem',
                    fontWeight: 600,
                    backdropFilter: 'blur(10px)'
                  }}
                  className="hover:bg-white/10 transition-all"
                  onClick={() => navigate('/contact')}
                >
                  {t('hero_btn_contact')}
                </Button>
              </motion.div>
            </div>

            {/* Right Content - AI Images */}
            <div 
              className="hero-right-responsive"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                perspective: '1000px'
              }}
            >
              <div style={{ position: 'relative' }}>
                {/* Glow effect behind robot */}
                <div style={{ 
                    position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', 
                    width: '80%', height: '80%', 
                    background: 'rgba(56, 189, 248, 0.3)', 
                    filter: 'blur(50px)', borderRadius: '100%', 
                    zIndex: 0
                }} />
                
                <AnimatePresence mode="wait">
                    <motion.div
                    key={currentImageIndex}
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: -20 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className="hero-image-responsive"
                    style={{
                        position: 'relative',
                        zIndex: 10,
                        // Remove border/overflow if robot is transparent png, otherwise rounded looks good
                        // Assuming robot images might be transparent cuts, so maybe no background
                    }}
                    >
                    <img 
                        src={aiImages[currentImageIndex]} 
                        alt={`AI Technology ${currentImageIndex + 1}`}
                        style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain', // Changed to contain to respect transparency if any
                        filter: 'drop-shadow(0 0 20px rgba(56, 189, 248, 0.3))'
                        }}
                    />
                    </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
