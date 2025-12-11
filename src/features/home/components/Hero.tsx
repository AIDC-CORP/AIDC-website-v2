import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from '../../../components/ui/button';
import { useNavigate } from 'react-router-dom';
import { useI18n } from '../../../shared/hooks/useI18n';

const hpBg = new URL('@/assets/images/hp_bg.jpg', import.meta.url).href;
const hpItem1 = new URL('@/assets/images/hp_item.png', import.meta.url).href;
const hpItem2 = new URL('@/assets/images/hp_item2.png', import.meta.url).href;
const hpItem3 = new URL('@/assets/images/hp_item3.png', import.meta.url).href;

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [hoveredBtn, setHoveredBtn] = useState<'primary' | 'secondary' | null>(null);
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
          gap: 0.75rem;
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
            width: 65%;
            text-align: left;
          }
          .hero-left-responsive * {
            text-align: left !important;
            margin-left: 0 !important;
            margin-right: auto !important;
          }
          .hero-right-responsive {
            width: 35%;
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
            width: 70%;
            padding-top: 3rem;
          }
          .hero-right-responsive {
            width: 30%;
            padding-top: 3rem;
          }
          .hero-image-responsive {
            width: 24rem;
            height: 24rem;
            padding-top: 3rem;
          }
        }
      `}</style>
      <section 
        className="hero-responsive"
        style={{
          position: 'relative',
          height: '100vh',
          minHeight: '600px',
          overflow: 'hidden'
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
              backgroundPosition: 'center'
            }}
          />
          <div 
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to right, rgba(10, 35, 66, 0.9), rgba(83, 190, 221, 0.4), rgba(10, 35, 66, 0.8))'
            }}
          />
        </div>

        {/* Content */}
        <div 
          style={{
            maxWidth: '1200px',
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
                color: 'white'
              }}
            >
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                style={{ 
                  fontWeight: 700, 
                  fontSize: 'clamp(1.5rem, 4vw, 2rem)', 
                  color: '#53bedd',
                  marginTop: '2rem'
                }}
              >
                {t('hero_title')}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                style={{
                  color: 'rgba(255, 255, 255, 0.9)',
                  maxWidth: '48rem'
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
                  gap: '1rem'
                }}
              >
                <Button 
                  style={{
                    backgroundColor: hoveredBtn === 'primary' ? 'rgba(83, 190, 221, 0.9)' : '#53bedd',
                    color: 'white',
                    padding: '1.5rem 2rem',
                    borderRadius: '9999px',
                    border: 'none',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={() => setHoveredBtn('primary')}
                  onMouseLeave={() => setHoveredBtn(null)}
                  onClick={() => {
                    const element = document.getElementById('core-services');
                    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }}
                >
                  {t('hero_btn_services')}
                </Button>
                <Button
                  variant="outline"
                  style={{
                    backgroundColor: hoveredBtn === 'secondary' ? 'rgba(255, 255, 255, 0.9)' : 'white',
                    color: '#53bedd',
                    border: '1px solid white',
                    padding: '1.5rem 2rem',
                    borderRadius: '9999px',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={() => setHoveredBtn('secondary')}
                  onMouseLeave={() => setHoveredBtn(null)}
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
                justifyContent: 'center'
              }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImageIndex}
                  initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
                  animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                  exit={{ opacity: 0, scale: 0.8, rotateY: 90 }}
                  transition={{ duration: 0.8, ease: 'easeInOut' }}
                  className="hero-image-responsive"
                  style={{
                    borderRadius: '1rem',
                    overflow: 'hidden'
                  }}
                >
                  <img 
                    src={aiImages[currentImageIndex]} 
                    alt={`AI Technology ${currentImageIndex + 1}`}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
