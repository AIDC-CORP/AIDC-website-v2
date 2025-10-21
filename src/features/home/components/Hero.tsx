import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from '../../../components/ui/button';
import { useNavigate } from 'react-router-dom';
import { useI18n } from '../../../App';
import '../../../styles/Home.css';

const hpBg = new URL('@/assets/images/hp_bg.jpg', import.meta.url).href;
const hpItem1 = new URL('@/assets/images/hp_item.png', import.meta.url).href;
const hpItem2 = new URL('@/assets/images/hp_item2.png', import.meta.url).href;
const hpItem3 = new URL('@/assets/images/hp_item3.png', import.meta.url).href;

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const navigate = useNavigate();
  const aiImages = [hpItem1, hpItem2, hpItem3];
  const { t } = useI18n();

  // Auto-rotate images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % aiImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [aiImages.length]);

  return (
    <section className="hero-section">
      {/* Background Image with Overlay */}
      <div className="hero-background">
        <div
          className="hero-bg-image"
          style={{
            backgroundImage: `url('${hpBg}')`,
          }}
        />
        <div className="hero-overlay" />
      </div>

      {/* Content */}
      <div className="hero-container">
        <div className="hero-content">
          {/* Left Content - 70% */}
          <div className="hero-left">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="hero-title"
              style={{ fontWeight: 700, fontSize: '2rem', color: '#53bedd'}}
            >
              {t('hero_title')}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hero-description"
            >
              {t('hero_desc_1')} {t('hero_desc_2')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="hero-buttons"
            >
              <Button 
                className="hero-btn-primary"
                onClick={() => {
                  const element = document.getElementById('core-services');
                  element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
              >
                {t('hero_btn_services')}
              </Button>
              <Button
                variant="outline"
                className="hero-btn-secondary"
                onClick={() => navigate('/contact')}
              >
                {t('hero_btn_contact')}
              </Button>
            </motion.div>
          </div>

          {/* Right Content - 30% AI Images */}
          <div className="hero-right">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentImageIndex}
                initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                exit={{ opacity: 0, scale: 0.8, rotateY: 90 }}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
                className="hero-image"
              >
                <img 
                  src={aiImages[currentImageIndex]} 
                  alt={`AI Technology ${currentImageIndex + 1}`} 
                  className="hero-img" 
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
