
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
    <>
      <style>{`
        .about-fix {
          padding-top: 10rem;
          align-items: flex-start;
        }
        @media (min-width: 360px) {
          .about-fix {
            padding-top: 12rem;
          }
        }
        @media (min-width: 480px) {
          .about-fix {
            padding-top: 11rem;
          }
        }
        @media (min-width: 768px) {
          .about-fix {
            padding-top: 12rem; /* Increased to ensure no overlap on tablets */
            align-items: flex-start;
          }
        }
        @media (min-width: 1024px) {
          .about-fix {
            padding-top: 8rem;
            align-items: center;
          }
        }
      `}</style>
      <section 
        className="about-fix relative text-white overflow-hidden flex min-h-screen"
        style={{
          backgroundColor: '#53bedd' // Fallback
        }}
      >
        {/* Background Image Layer */}
        <div 
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: `url(${bgIntro})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.4,
            mixBlendMode: 'overlay',
            pointerEvents: 'none',
            filter: 'contrast(0.5)'
          }}
        />
        
        {/* Gradient Overlay for blue tint */}
        <div 
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(135deg, rgba(83, 190, 221, 0.95) 0%, rgba(42, 156, 189, 0.95) 100%)',
            pointerEvents: 'none',
            zIndex: 0
          }}
        />

        <div className="max-w-[1200px] w-full mx-auto px-3 pb-10 pt-8 sm:px-3 md:px-8 xl:px-12 relative z-10">
          <div className="flex flex-col items-center justify-center gap-8 lg:flex-row lg:gap-10 xl:gap-12">
            <motion.div
              className="w-full text-center pr-0 mt-4 md:mt-8 flex flex-col gap-6 lg:w-1/2 lg:text-left lg:pr-4 xl:pr-6"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <motion.h2 
                className="text-white mb-4"
                style={{ 
                  fontWeight: 900, 
                  textShadow: '0 4px 6px rgba(0,0,0,0.3)',
                  fontSize: 'clamp(2rem, 5vw, 3rem)'
                }}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {t('about_title')}
              </motion.h2>
              <motion.p 
                className="text-white leading-relaxed text-[0.9rem] min-[480px]:text-[0.95rem] md:text-[1rem] lg:text-[1.125rem] mb-6"
                style={{ opacity: 0.9, fontWeight: 500 }}
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
                  className="bg-white text-[#53bedd] px-6 py-4 min-[480px]:px-7 min-[480px]:py-5 md:px-8 md:py-6 rounded-full font-semibold transition-all duration-200 hover:bg-white/90 hover:-translate-y-0.5 inline-flex items-center justify-center text-center leading-none text-[0.9rem] min-[480px]:text-[0.95rem]"
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
              className="w-full pl-0 lg:w-1/2 lg:pl-4 xl:pl-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="grid grid-cols-1 gap-2 min-[480px]:gap-3 w-full transform-none md:grid-cols-2 md:w-[110%] md:scale-110 md:origin-center">
                {pics.map((src, i) => (
                  <motion.div 
                    key={i} 
                    className="rounded-2xl overflow-hidden shadow-2xl border border-white/20 bg-white/5 backdrop-blur-md"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                  >
                    <img
                      src={src}
                      alt={`About image ${i + 1}`}
                      className="w-full object-cover transition-transform duration-700 hover:scale-105 h-[180px] min-[360px]:h-[190px] min-[480px]:h-[200px] md:h-[121px] lg:h-[132px] xl:h-[143px] 2xl:h-[154px]"
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
    </>
  );
}
