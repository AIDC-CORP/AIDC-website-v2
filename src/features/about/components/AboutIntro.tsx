import React from 'react';
import { Button } from '../../../components/ui/button';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { useI18n } from '../../../shared/hooks/useI18n';
import '../../../styles/AboutIntro.css';

const aboutIntroImage1 = new URL('@/assets/images/ai_trong_nong_nghiep.webp', import.meta.url).href;
const aboutIntroImage2 = new URL('@/assets/images/AI-Systems.webp', import.meta.url).href;
const aboutIntroImage3 = new URL('@/assets/images/big_data.png', import.meta.url).href;
const aboutIntroImage4 = new URL('@/assets/images/software_development.webp', import.meta.url).href;

type AboutIntroProps = {
  images?: string[];               // 4 ảnh
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
    <section className="about-intro-section">
      <div className="about-intro-container">
        <div className="about-intro-content">
          <motion.div
            className="about-intro-left"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <motion.h2 
              className="about-intro-title"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {t('about_title')}
            </motion.h2>
            <motion.p 
              className="about-intro-description"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {t('about_intro')}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Button 
                className="about-intro-button"
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
          </motion.div>

          <motion.div 
            className="about-intro-right"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="about-intro-grid">
              {pics.map((src, i) => (
                <motion.div 
                  key={i} 
                  className="about-intro-image-card"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                >
                  <img
                    src={src}
                    alt={`About image ${i + 1}`}
                    className="about-intro-image"
                    loading="lazy"
                    decoding="async"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
