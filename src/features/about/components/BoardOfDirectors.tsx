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
        <div className="text-center mb-16">
        <h2 className="main-heading"
          style={{ fontSize: '2.5rem', fontWeight: 700, zIndex: 1, color: '#222', position: 'relative', display: 'inline-block', whiteSpace: 'nowrap', lineHeight: 1.1 }}
        >
          {t('board_heading')}
          <span className="main-heading-shadow"
            style={{ fontSize: '2.6rem', fontWeight: 700, zIndex: 0, opacity: 0.2, position: 'absolute', left: 0, top: 0, transform: 'translate(12px, -12px)', pointerEvents: 'none', whiteSpace: 'nowrap', lineHeight: 1.1 }}
          >{t('board_heading')}</span>
        </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto">
          {/* Left - Circular Gallery */}
          <div className="lg:w-1/2 flex items-center justify-center">
            <div className="relative w-96 h-96">
              {/* Decorative Circles */}
              <div className="absolute inset-0 rounded-full border-4 border-[#53bedd]" />
              <motion.div
                className="absolute inset-4 rounded-full border-4 border-dashed border-[#53bedd]"
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
                  className="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-2xl"
                >
                  <img
                    src={directors[selectedIndex].image}
                    alt={directors[selectedIndex].name}
                    className="w-full h-full object-cover"
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
                      className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg ring-0"
                    >
                      <img
                        src={directors[idx].image}
                        alt={directors[idx].name}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* Right - Director Info */}
          <div className="lg:w-1/2 space-y-6">
            <motion.div
              key={`info-${selectedIndex}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.45 }}
            >
              <h3 className="text-gray-900">{directors[selectedIndex].name}</h3>
              <p className="text-[#53bedd] mb-4">
                {directors[selectedIndex].position}
              </p>
              <p className="text-gray-700 leading-relaxed">
                {directors[selectedIndex].description}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
