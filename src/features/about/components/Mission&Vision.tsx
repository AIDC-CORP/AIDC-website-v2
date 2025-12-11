import React from "react";
import "../../../styles/MissionVision.css";
import { useI18n } from "../../../shared/hooks/useI18n";
import { motion } from "motion/react";


const quoteOpenIcon = new URL('@/assets/icons/quote-open.png', import.meta.url).href;
const quoteCloseIcon = new URL('@/assets/icons/quotes-close.png', import.meta.url).href;

export default function MissionVision() {
  const { t } = useI18n();
  
  return (
    <section className="mv-section">
      <div className="text-center mb-16">
        <motion.h2 
          className="main-heading"
          style={{ fontSize: '2rem', fontWeight: 700, zIndex: 1, color: '#222', position: 'relative', display: 'inline-block', whiteSpace: 'nowrap', lineHeight: 1.1 }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {t('mission_vision_heading')}
          <span className="main-heading-shadow"
            style={{ fontSize: '2.1rem', fontWeight: 700, zIndex: 0, opacity: 0.2, position: 'absolute', left: 0, top: 0, transform: 'translate(12px, -12px)', pointerEvents: 'none', whiteSpace: 'nowrap', lineHeight: 1.1 }}
          >{t('mission_vision_heading')}</span>
        </motion.h2>
      </div>
      <div className="mv-container">
        {/* LEFT COLUMN */}
        <div className="mv-left">
          {/* Philosophy of action */}
          <motion.div 
            className="mv-card mv-card--lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="mv-pill mv-pill--white mv-pill--center">{t('philosophy_label')}</div>
            <img src={quoteOpenIcon} alt="quote open" className="mv-quote mv-quote--open" />
            <img src={quoteCloseIcon} alt="quote close" className="mv-quote mv-quote--close" />
            <div className="mv-card-body">
              <h3 className="mv-title">
                "{t('philosophy_title')}"
              </h3>
              <p className="mv-desc">
                {t('philosophy_desc')}
              </p>
            </div>
          </motion.div>

          {/* Brand Message */}
          <motion.div 
            className="mv-card mv-card--lg" 
            style={{ marginTop: 28 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="mv-pill mv-pill--white mv-pill--center">{t('brand_message_label')}</div>
            <img src={quoteOpenIcon} alt="quote open" className="mv-quote mv-quote--open" />
            <img src={quoteCloseIcon} alt="quote close" className="mv-quote mv-quote--close" />
            <div className="mv-card-body">
              <h3 className="mv-title">
                "{t('brand_message_title')}"
              </h3>
              <p className="mv-desc mv-desc--en">
                {t('brand_message_english')}
              </p>
            </div>
          </motion.div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="mv-right">
          {/* Mission */}
          <motion.div 
            className="mv-speech"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="mv-backplate mv-backplate--1" />
            <div className="mv-speech-inner">
              <div className="mv-pill mv-pill--white">{t('mission_label')}</div>
              <img src={quoteOpenIcon} alt="quote open" className="mv-quote mv-quote--open" />
              <img src={quoteCloseIcon} alt="quote close" className="mv-quote mv-quote--close" />

              <p className="mv-speech-text">
                {t('mission_content')}
              </p>
            </div>
          </motion.div>

          {/* Vision */}
          <motion.div 
            className="mv-speech"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="mv-backplate mv-backplate--2" />
            <div className="mv-speech-inner">
              <div className="mv-pill mv-pill--white">{t('vision_label')}</div>
              <img src={quoteOpenIcon} alt="quote open" className="mv-quote mv-quote--open" />
              <img src={quoteCloseIcon} alt="quote close" className="mv-quote mv-quote--close" />
              <p className="mv-speech-text">
                {t('vision_content')}
              </p>
            </div>
          </motion.div>

          {/* Brand spirit */}
          <motion.div 
            className="mv-speech"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <div className="mv-backplate mv-backplate--3" />
            <div className="mv-speech-inner">
              <div className="mv-pill mv-pill--white">{t('brand_spirit_label')}</div>
              <img src={quoteOpenIcon} alt="quote open" className="mv-quote mv-quote--open" />
              <img src={quoteCloseIcon} alt="quote close" className="mv-quote mv-quote--close" />
              <p className="mv-speech-text">
                {t('brand_spirit_content')}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
