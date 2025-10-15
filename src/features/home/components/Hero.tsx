import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from '../../../components/ui/button';
import { useNavigate } from 'react-router-dom';
import { useI18n } from '../../../App';

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
    <section className="relative h-screen min-h-[600px] pt-32 md:pt-0 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('${hpBg}')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a2342]/90 via-[#53bedd]/40 to-[#0a2342]/80" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 xl:px-12 h-full relative z-10 mt-8 md:mt-0">
        <div className="flex flex-col lg:flex-row items-center justify-between h-full gap-8 lg:gap-12 xl:gap-16 pt-8 md:pt-0">
          {/* Left Content - 70% */}
          <div className="flex-1 lg:w-[65%] xl:w-[70%] text-white space-y-6 text-center lg:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white mt-8 md:mt-0"
              style={{ fontWeight: 700, fontSize: '2rem', color: '#53bedd'}}
            >
              {t('hero_title')}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-white/90 max-w-3xl mx-auto lg:mx-0"
            >
              {t('hero_desc_1')} {t('hero_desc_2')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <Button 
                className="bg-[#53bedd] text-white hover:bg-[#53bedd]/90 px-8 py-6 rounded-full"
                onClick={() => {
                  const element = document.getElementById('core-services');
                  element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
              >
                {t('hero_btn_services')}
              </Button>
              <Button
                variant="outline"
                className="bg-white text-[#53bedd] border-white hover:bg-white/90 hover:text-[#53bedd] px-8 py-6 rounded-full"
                onClick={() => navigate('/contact')}
              >
                {t('hero_btn_contact')}
              </Button>
            </motion.div>
          </div>

          {/* Right Content - 30% AI Images */}
          <div className="lg:w-[35%] xl:w-[30%] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentImageIndex}
                initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                exit={{ opacity: 0, scale: 0.8, rotateY: 90 }}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
                className="hidden md:block w-128 h-128 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-2xl overflow-hidden"
              >
                <img 
                  src={aiImages[currentImageIndex]} 
                  alt={`AI Technology ${currentImageIndex + 1}`} 
                  className="w-full h-full object-cover" 
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
