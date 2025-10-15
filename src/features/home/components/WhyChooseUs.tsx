import React, { useEffect, useMemo, useRef, useState } from 'react';
import { motion, useMotionValue, animate, useTransform } from 'motion/react';
import { Users, Target, Lightbulb, Award } from 'lucide-react';
import { useI18n } from '../../../App';

function useValues() {
  const { t } = useI18n();
  return useMemo(
    () => [
      { icon: Users, title: t('why_val_partnership') },
      { icon: Target, title: t('why_val_excellence') },
      { icon: Lightbulb, title: t('why_val_innovation') },
      { icon: Award, title: t('why_val_quality') },
    ],
    [t]
  );
}

function useContainerWidth<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [width, setWidth] = useState(0);
  useEffect(() => {
    if (!ref.current) return;
    const ro = new ResizeObserver(([entry]) => setWidth(entry.contentRect.width));
    ro.observe(ref.current);
    return () => ro.disconnect();
  }, []);
  return { ref, width };
}

const clamp = (v: number, min: number, max: number) => Math.max(min, Math.min(max, v));

export default function WhyChooseUs() {
  const { t } = useI18n();
  const rotation = useMotionValue(0);
  useEffect(() => {
    const controls = animate(rotation, 360, { duration: 20, repeat: Infinity, ease: 'linear' });
    return controls.stop;
  }, [rotation]);

  const { ref: orbitWrapRef, width: cw } = useContainerWidth<HTMLDivElement>();

  const sizes = useMemo(() => {
    // đường tròn nét đứt (giảm 5%)
    const dashedSize = clamp(cw * 0.45, 360, 680) * 0.95;
    const orbitRadius = dashedSize / 2;
  
    const centerSize = Math.round(dashedSize * 0.58 * 0.9); // vòng trung tâm
    const planetBase = dashedSize * 0.18;
    const itemSize = Math.round(planetBase * 1.2);
    const halfItem = itemSize / 2;
  
    const safePadding = Math.round(Math.max(12, dashedSize * 0.02));
    const wrapSize = dashedSize + itemSize + safePadding;
  
    const titleSize = Math.max(13, Math.round(centerSize * 0.13));
    const bodySize = Math.max(12, Math.round(centerSize * 0.095));
    const pad = Math.round(centerSize * 0.12);
    const contentW = Math.round(centerSize * 0.72);
  
    return {
      dashedSize,
      orbitRadius,
      centerSize,
      itemSize,
      halfItem,
      wrapSize,
      titleSize,
      bodySize,
      pad,
      contentW,
    };
  }, [cw]);

  const vals = useValues();

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2
            className="main-heading"
            style={{
              fontSize: 'clamp(2rem, 2.2vw, 3rem)',
              fontWeight: 700,
              zIndex: 1,
              color: '#222',
              position: 'relative',
              display: 'inline-block',
              whiteSpace: 'nowrap',
              lineHeight: 1.1,
            }}
          >
            {t('why_heading')}
            <span
              className="main-heading-shadow"
              style={{
                fontSize: 'clamp(2.1rem, 2.4vw, 3.2rem)',
                fontWeight: 700,
                zIndex: 0,
                opacity: 0.2,
                position: 'absolute',
                left: 0,
                top: 0,
                transform: 'translate(12px, -15px)',
                pointerEvents: 'none',
                whiteSpace: 'nowrap',
                lineHeight: 1.1,
              }}
            >
              {t('why_heading')}
            </span>
          </h2>
        </div>

        {/* Orbit Section */}
        <div
          ref={orbitWrapRef}
          className="relative mx-auto flex items-center justify-center"
          style={{
            maxWidth: '100%',
            height: `${sizes.wrapSize}px`,     // << đủ chỗ cho icon quay
            overflow: 'visible',               // << không cắt tràn
          }}
        >
          {/* Dashed circle */}
          <motion.div
            className="absolute rounded-full border-4 border-dashed border-[#53bedd]"
            style={{
              width: sizes.dashedSize,
              height: sizes.dashedSize,
              rotate: rotation,
            }}
          />

          {/* Planets on orbit */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            style={{ rotate: rotation }}
          >
            {vals.map((value, index) => {
              const angle = (index * 360) / vals.length;
              const counter = useTransform(rotation, (r) => -(r + angle));
              return (
                <div
                  key={index}
                  className="absolute left-1/2 top-1/2"
                  style={{
                    transform: `rotate(${angle}deg) translateY(-${sizes.orbitRadius}px)`,
                    transformOrigin: '0 0',
                  }}
                >
                  <motion.div
                    className="rounded-full bg-white shadow-xl flex flex-col items-center justify-center border-4 border-[#53bedd]"
                    style={{
                      width: sizes.itemSize,
                      height: sizes.itemSize,
                      marginLeft: -sizes.halfItem,
                      marginTop: -sizes.halfItem,
                      rotate: counter,
                      boxShadow:
                        '0 14px 30px rgba(83,190,221,0.15), 0 6px 12px rgba(0,0,0,0.06)',
                    }}
                  >
                    <value.icon
                      className="text-[#53bedd] mb-1"
                      style={{
                        width: sizes.itemSize * 0.33,
                        height: sizes.itemSize * 0.33,
                      }}
                    />
                    <span className="text-xs text-gray-700 text-center px-2">
                      {value.title}
                    </span>
                  </motion.div>
                </div>
              );
            })}
          </motion.div>

          {/* Center circle */}
          <div
            className="relative z-10 rounded-full bg-gradient-to-br from-[#53bedd] to-[#2a9cbd] shadow-2xl flex items-center justify-center text-white text-center"
            style={{
              width: sizes.centerSize,
              height: sizes.centerSize,
              padding: sizes.pad,
              boxShadow:
                '0 24px 50px rgba(83,190,221,0.18), 0 10px 20px rgba(0,0,0,0.08)',
            }}
          >
            <div
              style={{
                maxWidth: sizes.contentW,
                margin: '0 auto',
                textWrap: 'balance' as any,
                wordBreak: 'break-word',
              }}
            >
              <h3
                style={{
                  fontSize: sizes.titleSize,
                  fontWeight: 800,
                  lineHeight: 1.15,
                  marginBottom: Math.round(sizes.titleSize * 0.35),
                  textShadow: '0 1px 2px rgba(0,0,0,0.25)',
                }}
              >
                {t('why_center_title')}
              </h3>
              <p
                style={{
                  fontSize: sizes.bodySize,
                  lineHeight: 1.35,
                  opacity: 0.95,
                  textShadow: '0 1px 2px rgba(0,0,0,0.2)',
                }}
              >
                {t('why_center_desc')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
