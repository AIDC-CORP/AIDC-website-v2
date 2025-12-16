import React, { useMemo, useState } from 'react';
import { motion } from 'motion/react';
import { useI18n } from '../../../shared/hooks/useI18n';

const mrTan = new URL('@/assets/images/tan_avatar.jpg', import.meta.url).href;
const mrQuyet = new URL('@/assets/images/quyet_avatar.jpg', import.meta.url).href;
const mrToan = new URL('@/assets/images/toan_avatar.jpg', import.meta.url).href;
const mrCong = new URL('@/assets/images/cong_avatar.jpg', import.meta.url).href;
const mrDung = new URL('@/assets/images/dung_avatar.jpg', import.meta.url).href;

function buildDirectors(t: (k: string) => string) {
  return [
    {
      name: t('bod_tan_name'),
      position: t('bod_tan_position'),
      description: t('bod_tan_desc'),
      image: mrTan,
    },
    {
      name: t('bod_cong_name'),
      position: t('bod_cong_position'),
      description: t('bod_cong_desc'),
      image: mrCong,
    },
    {
      name: t('bod_toan_name'),
      position: t('bod_toan_position'),
      description: t('bod_toan_desc'),
      image: mrToan,
    },
    {
      name: t('bod_quyet_name'),
      position: t('bod_quyet_position'),
      description: t('bod_quyet_desc'),
      image: mrQuyet,
    },
    {
      name: t('bod_dung_name'),
      position: t('bod_dung_position'),
      description: t('bod_dung_desc'),
      image: mrDung,
    },
  ];
}

type SlotsMap = Record<number, number>; // key: directorIndex, value: slot 0..3

export default function BoardOfDirectors() {
  const { t } = useI18n();
  const directors = buildDirectors(t);
  // Center: mặc định người đầu tiên
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Góc cố định cho 4 slot xung quanh (kim cương): 45°, 135°, 225°, 315°
  const slotAngles = useMemo(() => [45, 135, 225, 315], []);
  const radius = 160;

  // Khởi tạo slots cho 4 người ngoài (theo thứ tự xuất hiện, bỏ qua selectedIndex)
  const initialSlots = useMemo<SlotsMap>(() => {
    const m: SlotsMap = {};
    let s = 0;
    for (let i = 0; i < directors.length; i++) {
      if (i === 0) continue; // selectedIndex mặc định = 0
      m[i] = s; // gán slot 0..3
      s += 1;
    }
    return m;
  }, []);

  const [slots, setSlots] = useState<SlotsMap>(initialSlots);

  // Tính (x, y) theo slot
  const posForSlot = (slot: number) => {
    const angle = (slotAngles[slot] * Math.PI) / 180;
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;
    return { x, y };
  };

  const onClickOuter = (clickedIdx: number) => {
    // Người bị click sẽ vào giữa.
    // Người đang ở giữa sẽ ra đúng slot (slot cũ của clickedIdx).
    setSlots((prev) => {
      const clickedSlot = prev[clickedIdx];
      const next: SlotsMap = { ...prev };
      // Xóa slot của người vừa click (vì họ vào center)
      delete next[clickedIdx];
      // Gán slot đó cho người ở giữa hiện tại
      next[selectedIndex] = clickedSlot;
      return next;
    });
    setSelectedIndex(clickedIdx);
  };

  // Danh sách index ngoài (4 người), giữ nguyên theo slots map
  const outerIndices = useMemo(
    () => Object.keys(slots).map((k) => parseInt(k, 10)),
    [slots]
  );

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-left mb-16 pl-4">
          <h2
            style={{
              fontSize: '44px',
              fontWeight: 700,
              color: '#000',
              position: 'relative',
              display: 'inline-block',
              whiteSpace: 'nowrap',
              lineHeight: 1.2,
              zIndex: 2,
              fontFamily: 'Roboto, sans-serif'
            }}
          >
            {t('board_heading')}
            <span
              style={{
                fontSize: '66px',
                fontWeight: 700,
                position: 'absolute',
                left: '30px',
                top: '-18px',
                transform: 'translateY(-20%)',
                pointerEvents: 'none',
                whiteSpace: 'nowrap',
                lineHeight: 1,
                zIndex: -1,
                background: 'linear-gradient(to bottom, rgba(209, 213, 219, 1) 20%, rgba(209, 213, 219, 0) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              {t('board_heading')}
            </span>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-0 max-w-6xl mx-auto">
          {/* Left - Circular Gallery */}
          <div className="lg:w-1/2 flex items-center justify-center">
            <div className="relative w-96 h-96">
              {/* Decorative Circles */}
              <div className="absolute inset-0 rounded-full border-4 border-[#334155] opacity-20" />
              <motion.div
                className="absolute inset-4 rounded-full border-4 border-dashed border-[#1e293b] opacity-30"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              />

              {/* Center - Selected Director */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  key={selectedIndex}
                  initial={{ scale: 0.85, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.45 }}
                  className="w-48 h-48 rounded-full overflow-hidden shadow-2xl"
                  style={{
                    border: '4px solid rgba(255,255,255,0.1)',
                    background: 'linear-gradient(135deg, #334155 0%, #0f172a 100%)',
                    boxShadow: '0 24px 50px rgba(0,0,0,0.25), 0 10px 20px rgba(0,0,0,0.2)'
                  }}
                >
                  <img
                    src={directors[selectedIndex].image}
                    alt={directors[selectedIndex].name}
                    className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-300"
                  />
                </motion.div>
              </div>

              {/* Orbiting 4 Small Circles (fixed slots) */}
              {outerIndices.map((idx) => {
                const slot = slots[idx];
                const { x, y } = posForSlot(slot);

                return (
                  <motion.button
                    key={idx}
                    onClick={() => onClickOuter(idx)}
                    className="absolute top-1/2 left-1/2"
                    style={{ translateX: '-50%', translateY: '-50%' }}
                    animate={{ x, y }}
                    transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                    aria-label={`Select ${directors[idx].name}`}
                  >
                    <motion.div
                      whileHover={{ scale: 1.08 }}
                      whileTap={{ scale: 0.96 }}
                      className="w-24 h-24 rounded-full overflow-hidden shadow-lg ring-0"
                      style={{
                        border: '2px solid rgba(255,255,255,0.1)',
                        background: 'linear-gradient(135deg, #334155 0%, #0f172a 100%)'
                      }}
                    >
                      <img
                        src={directors[idx].image}
                        alt={directors[idx].name}
                        className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-300"
                      />
                    </motion.div>
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* Right - Director Info */}
          <div className="lg:w-1/2">
            <motion.div
              key={`info-${selectedIndex}`}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                position: 'relative'
              }}
            >
               {/* Decorative Quote Background */}
               <div style={{
                   position: 'absolute', top: '-60px', left: '-40px',
                   fontSize: '140px', fontFamily: 'serif',
                   color: '#f1f5f9', zIndex: 0, pointerEvents: 'none',
                   lineHeight: 1, opacity: 0.8
               }}>
                   “
               </div>

              <div style={{ position: 'relative', zIndex: 1 }}>
                  <h3 style={{
                    fontSize: 'clamp(2rem, 3.5vw, 3.5rem)',
                    fontWeight: 800,
                    lineHeight: 1.1,
                    background: 'linear-gradient(135deg, #0f172a 0%, #334155 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    marginBottom: '1rem',
                    letterSpacing: '-0.02em',
                    whiteSpace: 'nowrap'
                  }}>
                    {directors[selectedIndex].name}
                  </h3>
                  
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '2.5rem' }}>
                      <div style={{ height: '4px', width: '60px', background: 'linear-gradient(90deg, #53bedd, #2563eb)', borderRadius: '2px' }} />
                      <p style={{
                        color: '#53bedd',
                        fontSize: '1.25rem',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '0.15em'
                      }}>
                        {directors[selectedIndex].position}
                      </p>
                  </div>

                  <div style={{
                      position: 'relative',
                      paddingLeft: '2rem',
                      borderLeft: '4px solid #e2e8f0'
                  }}>
                    <p style={{
                        fontSize: '1.25rem',
                        lineHeight: 1.8,
                        color: '#475569',
                        fontWeight: 400
                    }}>
                        {directors[selectedIndex].description}
                    </p>
                  </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
