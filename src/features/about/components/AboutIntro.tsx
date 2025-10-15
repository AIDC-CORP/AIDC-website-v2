import React, { useEffect, useState } from 'react';
import { Button } from '../../../components/ui/button';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { useI18n } from '../../../App';

const aboutIntroImage1 = new URL('@/assets/images/ai_trong_nong_nghiep.webp', import.meta.url).href;
const aboutIntroImage2 = new URL('@/assets/images/AI-Systems.webp', import.meta.url).href;
const aboutIntroImage3 = new URL('@/assets/images/big_data.png', import.meta.url).href;
const aboutIntroImage4 = new URL('@/assets/images/software_development.webp', import.meta.url).href;

type AboutIntroProps = {
  images?: string[];               // 4 ảnh
  headerHeightPx?: number;         // fallback khi không tìm thấy header
  headerSelector?: string;         // CSS selector để đo chiều cao header thực
};

export default function AboutIntro({
  images,
  headerHeightPx = 80,
  headerSelector = '#site-header',  // đặt id cho toàn bộ cụm navbar + info bar
}: AboutIntroProps) {
  const [hh, setHh] = useState(headerHeightPx);
  const navigate = useNavigate();
  const { t } = useI18n();

  useEffect(() => {
    const el = document.querySelector<HTMLElement>(headerSelector);
    const getH = () => {
      const h = el?.offsetHeight ?? headerHeightPx;
      setHh(h);
      document.documentElement.style.setProperty('--header-h', `${h}px`);
    };
    getH();
    window.addEventListener('resize', getH);
    return () => window.removeEventListener('resize', getH);
  }, [headerSelector, headerHeightPx]);

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
    <section
      className="relative bg-[#53bedd] text-white overflow-hidden flex items-center"
      // Công thức CHUẨN để không hở đáy:
      // - Chiều cao section = 100dvh - header thực
      // - Kéo section lên -header để sát navbar
      // - bù padding-top = header để nội dung không bị che
      style={{
        minHeight: `calc(110dvh - ${hh}px)`,
        marginTop: `-${hh}px`,
        paddingTop: `${hh}px`,
      }}
    >
      <div className="container mx-auto px-4 pb-10 pt-8">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-10">
          <motion.div
            className="w-full lg:w-1/2 text-center lg:text-left space-y-6 lg:pr-4 mt-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <motion.h2 
              className="text-white text-3xl md:text-4xl font-bold" 
              style={{ fontWeight: 700, fontSize: '2rem', color: '#fff'}}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {t('about_title')}
            </motion.h2>
            <motion.p 
              className="text-white/95 leading-relaxed text-base md:text-lg"
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
                className="bg-white text-[#53bedd] hover:bg-white/90 px-8 py-6 rounded-full"
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
            className="w-full lg:w-1/2 lg:pl-4"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
              {pics.map((src, i) => (
                <motion.div 
                  key={i} 
                  className="rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/20 bg-white/5 backdrop-blur"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                >
                  <img
                    src={src}
                    alt={`About image ${i + 1}`}
                    className="w-full h-[180px] sm:h-[200px] md:h-[220px] lg:h-[240px] xl:h-[260px] object-cover transition-transform duration-700 hover:scale-105"
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
