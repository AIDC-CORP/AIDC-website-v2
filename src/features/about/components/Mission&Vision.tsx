import { useI18n } from "../../../shared/hooks/useI18n";
import { motion } from "motion/react";


const quoteOpenIcon = new URL('@/assets/icons/quote-open.png', import.meta.url).href;
const quoteCloseIcon = new URL('@/assets/icons/quotes-close.png', import.meta.url).href;

export default function MissionVision() {
  const { t } = useI18n();
  
  return (
    <>
      <style>{`
        .mv-responsive-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: clamp(20px, 3vw, 36px);
        }
        @media (max-width: 1024px) {
          .mv-responsive-grid {
            grid-template-columns: 1fr;
          }
        }
        @media (max-width: 768px) {
          .mv-card-scale,
          .mv-speech-scale {
            transform: scale(0.95);
            transform-origin: top center;
          }
        }
      `}</style>
      <section 
        style={{
          padding: 'clamp(28px, 4vw, 56px) 0'
        }}
      >
        <div 
          style={{
            textAlign: 'center',
            marginBottom: '4rem'
          }}
        >
          <motion.h2 
            style={{ 
              fontSize: '2rem', 
              fontWeight: 700, 
              zIndex: 1, 
              color: '#222', 
              position: 'relative', 
              display: 'inline-block', 
              whiteSpace: 'nowrap', 
              lineHeight: 1.1 
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            {t('mission_vision_heading')}
            <span 
              style={{ 
                fontSize: '2.1rem', 
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
              {t('mission_vision_heading')}
            </span>
          </motion.h2>
        </div>
        <div 
          className="mv-responsive-grid"
          style={{
            width: 'min(1140px, 90vw)',
            margin: '0 auto'
          }}
        >
          {/* LEFT COLUMN */}
          <div 
            style={{
              marginTop: '70px',
              display: 'flex',
              flexDirection: 'column',
              gap: '20px'
            }}
          >
            {/* Philosophy of action */}
            <motion.div 
              className="mv-card-scale"
              style={{
                position: 'relative',
                background: '#53bedd',
                color: '#ffffff',
                borderRadius: '28px',
                boxShadow: '0 12px 28px rgba(0,0,0,.18)',
                padding: 'clamp(16px, 2.8vw, 26px) clamp(16px, 2.8vw, 28px)',
                overflow: 'hidden',
                minHeight: '200px'
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div 
                style={{
                  position: 'absolute',
                  top: '12px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: '#ffffff',
                  color: '#2a6f71',
                  fontWeight: 700,
                  fontSize: '14px',
                  padding: '8px 18px',
                  borderRadius: '999px',
                  boxShadow: '0 6px 14px rgba(0,0,0,.08)',
                  whiteSpace: 'nowrap'
                }}
              >
                {t('philosophy_label')}
              </div>
              <img 
                src={quoteOpenIcon} 
                alt="quote open" 
                style={{
                  position: 'absolute',
                  width: '26px',
                  height: 'auto',
                  opacity: 0.9,
                  pointerEvents: 'none',
                  userSelect: 'none',
                  filter: 'brightness(0) invert(1)',
                  top: '30px',
                  left: '16px'
                }}
              />
              <img 
                src={quoteCloseIcon} 
                alt="quote close" 
                style={{
                  position: 'absolute',
                  width: '26px',
                  height: 'auto',
                  opacity: 0.9,
                  pointerEvents: 'none',
                  userSelect: 'none',
                  filter: 'brightness(0) invert(1)',
                  bottom: '12px',
                  right: '16px'
                }}
              />
              <div style={{ marginTop: '36px' }}>
                <h3 
                  style={{
                    fontWeight: 800,
                    lineHeight: 1.35,
                    fontSize: 'clamp(15px, 2vw, 23px)',
                    margin: '6px 0 10px'
                  }}
                >
                  "{t('philosophy_title')}"
                </h3>
                <p 
                  style={{
                    opacity: 0.95,
                    fontSize: 'clamp(13px, 1.3vw, 15px)'
                  }}
                >
                  {t('philosophy_desc')}
                </p>
              </div>
            </motion.div>

            {/* Brand Message */}
            <motion.div 
              className="mv-card-scale"
              style={{
                position: 'relative',
                background: '#53bedd',
                color: '#ffffff',
                borderRadius: '28px',
                boxShadow: '0 12px 28px rgba(0,0,0,.18)',
                padding: 'clamp(16px, 2.8vw, 26px) clamp(16px, 2.8vw, 28px)',
                overflow: 'hidden',
                minHeight: '200px',
                marginTop: '28px'
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div 
                style={{
                  position: 'absolute',
                  top: '12px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: '#ffffff',
                  color: '#2a6f71',
                  fontWeight: 700,
                  fontSize: '14px',
                  padding: '8px 18px',
                  borderRadius: '999px',
                  boxShadow: '0 6px 14px rgba(0,0,0,.08)',
                  whiteSpace: 'nowrap'
                }}
              >
                {t('brand_message_label')}
              </div>
              <img 
                src={quoteOpenIcon} 
                alt="quote open" 
                style={{
                  position: 'absolute',
                  width: '26px',
                  height: 'auto',
                  opacity: 0.9,
                  pointerEvents: 'none',
                  userSelect: 'none',
                  filter: 'brightness(0) invert(1)',
                  top: '30px',
                  left: '16px'
                }}
              />
              <img 
                src={quoteCloseIcon} 
                alt="quote close" 
                style={{
                  position: 'absolute',
                  width: '26px',
                  height: 'auto',
                  opacity: 0.9,
                  pointerEvents: 'none',
                  userSelect: 'none',
                  filter: 'brightness(0) invert(1)',
                  bottom: '12px',
                  right: '16px'
                }}
              />
              <div style={{ marginTop: '36px' }}>
                <h3 
                  style={{
                    fontWeight: 800,
                    lineHeight: 1.35,
                    fontSize: 'clamp(15px, 2vw, 23px)',
                    margin: '6px 0 10px'
                  }}
                >
                  "{t('brand_message_title')}"
                </h3>
                <p 
                  style={{
                    opacity: 0.95,
                    fontSize: 'clamp(13px, 1.3vw, 15px)',
                    fontStyle: 'italic'
                  }}
                >
                  {t('brand_message_english')}
                </p>
              </div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN */}
          <div 
            style={{
              display: 'grid',
              gap: 'clamp(28px, 3vw, 40px)',
              alignContent: 'start'
            }}
          >
            {/* Mission */}
            <motion.div 
              style={{
                position: 'relative',
                height: 'auto',
                marginBottom: '20px'
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div 
                style={{
                  position: 'absolute',
                  inset: 0,
                  transform: 'translate(-4px, -6px) rotate(-3.5deg)',
                  borderRadius: '22px',
                  background: '#28ADC2',
                  filter: 'drop-shadow(0 8px 16px rgba(0, 0, 0, 0.18))',
                  transition: 'transform 0.3s ease'
                }}
              />
              <div 
                className="mv-speech-scale"
                style={{
                  position: 'relative',
                  background: '#53bedd',
                  color: '#ffffff',
                  borderRadius: '22px',
                  padding: 'clamp(16px, 2.2vw, 24px)',
                  boxShadow: '0 12px 28px rgba(0,0,0,.18)',
                  overflow: 'hidden'
                }}
              >
                <div 
                  style={{
                    position: 'absolute',
                    top: '10px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: '#fff',
                    color: '#2a6f71',
                    fontWeight: 800,
                    fontSize: '14px',
                    padding: '8px 18px',
                    borderRadius: '999px',
                    whiteSpace: 'nowrap',
                    boxShadow: '0 6px 14px rgba(0,0,0,.08)'
                  }}
                >
                  {t('mission_label')}
                </div>
                <img 
                  src={quoteOpenIcon} 
                  alt="quote open" 
                  style={{
                    position: 'absolute',
                    width: '26px',
                    height: 'auto',
                    opacity: 0.9,
                    pointerEvents: 'none',
                    userSelect: 'none',
                    filter: 'brightness(0) invert(1)',
                    top: '30px',
                    left: '16px'
                  }}
                />
                <img 
                  src={quoteCloseIcon} 
                  alt="quote close" 
                  style={{
                    position: 'absolute',
                    width: '26px',
                    height: 'auto',
                    opacity: 0.9,
                    pointerEvents: 'none',
                    userSelect: 'none',
                    filter: 'brightness(0) invert(1)',
                    bottom: '12px',
                    right: '16px'
                  }}
                />

                <p 
                  style={{
                    fontSize: 'clamp(13px, 1.4vw, 15px)',
                    marginTop: '44px',
                    lineHeight: 1.6,
                    paddingRight: '8px'
                  }}
                >
                  {t('mission_content')}
                </p>
              </div>
            </motion.div>

            {/* Vision */}
            <motion.div 
              style={{
                position: 'relative',
                height: 'auto',
                marginBottom: '20px'
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <div 
                style={{
                  position: 'absolute',
                  inset: 0,
                  transform: 'translate(6px, -3px) rotate(3.5deg)',
                  borderRadius: '22px',
                  background: '#28ADC2',
                  filter: 'drop-shadow(0 8px 16px rgba(0, 0, 0, 0.18))',
                  transition: 'transform 0.3s ease'
                }}
              />
              <div 
                className="mv-speech-scale"
                style={{
                  position: 'relative',
                  background: '#53bedd',
                  color: '#ffffff',
                  borderRadius: '22px',
                  padding: 'clamp(16px, 2.2vw, 24px)',
                  boxShadow: '0 12px 28px rgba(0,0,0,.18)',
                  overflow: 'hidden'
                }}
              >
                <div 
                  style={{
                    position: 'absolute',
                    top: '10px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: '#fff',
                    color: '#2a6f71',
                    fontWeight: 800,
                    fontSize: '14px',
                    padding: '8px 18px',
                    borderRadius: '999px',
                    whiteSpace: 'nowrap',
                    boxShadow: '0 6px 14px rgba(0,0,0,.08)'
                  }}
                >
                  {t('vision_label')}
                </div>
                <img 
                  src={quoteOpenIcon} 
                  alt="quote open" 
                  style={{
                    position: 'absolute',
                    width: '26px',
                    height: 'auto',
                    opacity: 0.9,
                    pointerEvents: 'none',
                    userSelect: 'none',
                    filter: 'brightness(0) invert(1)',
                    top: '30px',
                    left: '16px'
                  }}
                />
                <img 
                  src={quoteCloseIcon} 
                  alt="quote close" 
                  style={{
                    position: 'absolute',
                    width: '26px',
                    height: 'auto',
                    opacity: 0.9,
                    pointerEvents: 'none',
                    userSelect: 'none',
                    filter: 'brightness(0) invert(1)',
                    bottom: '12px',
                    right: '16px'
                  }}
                />
                <p 
                  style={{
                    fontSize: 'clamp(13px, 1.4vw, 15px)',
                    marginTop: '44px',
                    lineHeight: 1.6,
                    paddingRight: '8px'
                  }}
                >
                  {t('vision_content')}
                </p>
              </div>
            </motion.div>

            {/* Brand spirit */}
            <motion.div 
              style={{
                position: 'relative',
                height: 'auto',
                marginBottom: '20px'
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              <div 
                style={{
                  position: 'absolute',
                  inset: 0,
                  transform: 'translate(-5px, 4px) rotate(-3.5deg)',
                  borderRadius: '22px',
                  background: '#28ADC2',
                  filter: 'drop-shadow(0 8px 16px rgba(0, 0, 0, 0.18))',
                  transition: 'transform 0.3s ease'
                }}
              />
              <div 
                className="mv-speech-scale"
                style={{
                  position: 'relative',
                  background: '#53bedd',
                  color: '#ffffff',
                  borderRadius: '22px',
                  padding: 'clamp(16px, 2.2vw, 24px)',
                  boxShadow: '0 12px 28px rgba(0,0,0,.18)',
                  overflow: 'hidden'
                }}
              >
                <div 
                  style={{
                    position: 'absolute',
                    top: '10px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: '#fff',
                    color: '#2a6f71',
                    fontWeight: 800,
                    fontSize: '14px',
                    padding: '8px 18px',
                    borderRadius: '999px',
                    whiteSpace: 'nowrap',
                    boxShadow: '0 6px 14px rgba(0,0,0,.08)'
                  }}
                >
                  {t('brand_spirit_label')}
                </div>
                <img 
                  src={quoteOpenIcon} 
                  alt="quote open" 
                  style={{
                    position: 'absolute',
                    width: '26px',
                    height: 'auto',
                    opacity: 0.9,
                    pointerEvents: 'none',
                    userSelect: 'none',
                    filter: 'brightness(0) invert(1)',
                    top: '30px',
                    left: '16px'
                  }}
                />
                <img 
                  src={quoteCloseIcon} 
                  alt="quote close" 
                  style={{
                    position: 'absolute',
                    width: '26px',
                    height: 'auto',
                    opacity: 0.9,
                    pointerEvents: 'none',
                    userSelect: 'none',
                    filter: 'brightness(0) invert(1)',
                    bottom: '12px',
                    right: '16px'
                  }}
                />
                <p 
                  style={{
                    fontSize: 'clamp(13px, 1.4vw, 15px)',
                    marginTop: '44px',
                    lineHeight: 1.6,
                    paddingRight: '8px'
                  }}
                >
                  {t('brand_spirit_content')}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
