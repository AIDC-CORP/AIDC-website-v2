import { useMemo, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useI18n } from "../../../shared/hooks/useI18n";


type Item = { text: string };

export default function CoreValuesCSS() {
  const { t } = useI18n();
  const DATA: Item[] = useMemo(
    () => [
      { text: t("cv_1") },
      { text: t("cv_2") },
      { text: t("cv_3") },
      { text: t("cv_4") },
      { text: t("cv_5") },
      { text: t("cv_6") },
      { text: t("cv_7") },
    ],
    [t]
  );
  const [idx, setIdx] = useState(0);

  const atFirst = idx === 0;
  const atLast = idx === DATA.length - 1;

  const next = () => !atLast && setIdx((p) => p + 1);
  const prev = () => !atFirst && setIdx((p) => p - 1);

  const styleIdx = useMemo(() => ({ ["--idx" as any]: String(idx) }), [idx]);

  return (
    <>
      <style>{`
        .core-carousel-responsive {
          --slideW: clamp(220px, 35vw, 360px);
          --gap: clamp(16px, 4vw, 48px);
          --sideScale: 0.72;
          --centerLift: 0px;
        }
        .circles-track-animated {
          transform: translateX(calc((var(--slideW) + var(--gap)) * var(--idx) * -1));
          transition: transform 0.65s cubic-bezier(0.22, 0.8, 0.24, 1);
          will-change: transform;
        }
        .circle-animated {
          --sc: var(--sideScale);
          --ty: 10px;
          transform: translateY(var(--ty)) scale(var(--sc));
          opacity: 0.85;
          transition:
            transform 0.65s cubic-bezier(0.22, 0.8, 0.24, 1),
            opacity 0.65s cubic-bezier(0.22, 0.8, 0.24, 1);
        }
        .slide-active .circle-animated {
          --sc: 1;
          --ty: var(--centerLift);
          opacity: 1;
        }
      `}</style>
      <section 
        style={{
          padding: '70px 0 40px 0',
          overflowX: 'hidden'
        }}
      >
        <div className="container mx-auto px-4">
          <div 
            style={{
              textAlign: 'left',
              marginBottom: '4rem',
              paddingLeft: '1rem' // Added little padding to not stick to edge
            }}
          >
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
              {t('core_values_heading')}
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
                {t('core_values_heading')}
              </span>
            </h2>
          </div>
        </div>

        <div 
          className="core-carousel-responsive"
          style={{
            position: 'relative',
            display: 'grid',
            gridTemplateColumns: '70px 1fr 70px',
            alignItems: 'center',
            gap: '10px',
            marginTop: '70px'
          }}
        >
          <button
            onClick={prev}
            disabled={atFirst}
            aria-label="Prev"
            style={{
              width: '48px',
              height: '48px',
              borderRadius: '999px',
              border: 0,
              color: '#7b7b7b',
              cursor: atFirst ? 'not-allowed' : 'pointer',
              fontSize: '28px',
              lineHeight: 1,
              display: 'grid',
              placeItems: 'center',
              transition: 'transform 0.2s ease, background 0.2s ease, color 0.2s ease',
              outline: 'none',
              boxShadow: 'none',
              background: '#fff',
              justifySelf: 'end',
              opacity: atFirst ? 0.35 : 1
            }}
            onMouseEnter={(e) => {
              if (!atFirst) {
                e.currentTarget.style.background = '#e7e7e7';
                e.currentTarget.style.color = '#333';
                e.currentTarget.style.transform = 'scale(1.05)';
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#fff';
              e.currentTarget.style.color = '#7b7b7b';
              e.currentTarget.style.transform = 'none';
            }}
          >
            <ChevronLeft size={24} />
          </button>

          {/* viewport */}
          <div 
            style={{
              overflow: 'hidden',
              width: 'min(100%, calc(var(--slideW) * 3 + var(--gap) * 2))',
              height: 'var(--slideW)',
              justifySelf: 'center'
            }}
          >
            {/* track */}
            <div 
              className="circles-track-animated"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--gap)',
                paddingLeft: 'calc(50% - (var(--slideW) / 2))',
                ...styleIdx
              }}
            >
              {DATA.map((d, i) => (
                <div 
                  className={i === idx ? "slide-active" : ""}
                  key={i}
                  style={{
                    flex: '0 0 var(--slideW)',
                    height: 'var(--slideW)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}
                >
                  <div 
                    className="circle-animated"
                    style={{
                      width: 'var(--slideW)',
                      height: 'var(--slideW)',
                      borderRadius: '50%',
                      background: 'radial-gradient(120% 120% at 30% 20%, #5fc2df 0%, #2a9cbd 70%)',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                      textAlign: 'center'
                    }}
                  >
                    <p 
                      style={{
                        margin: 0,
                        color: '#fff',
                        fontWeight: 600,
                        letterSpacing: '0.2px',
                        lineHeight: 1.35,
                        fontSize: 'clamp(14px, 1.6vw, 22px)',
                        padding: '0 18px'
                      }}
                    >
                      {d.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={next}
            disabled={atLast}
            aria-label="Next"
            style={{
              width: '48px',
              height: '48px',
              borderRadius: '999px',
              border: 0,
              color: '#7b7b7b',
              cursor: atLast ? 'not-allowed' : 'pointer',
              fontSize: '28px',
              lineHeight: 1,
              display: 'grid',
              placeItems: 'center',
              transition: 'transform 0.2s ease, background 0.2s ease, color 0.2s ease',
              outline: 'none',
              boxShadow: 'none',
              background: '#fff',
              justifySelf: 'start',
              opacity: atLast ? 0.35 : 1
            }}
            onMouseEnter={(e) => {
              if (!atLast) {
                e.currentTarget.style.background = '#e7e7e7';
                e.currentTarget.style.color = '#333';
                e.currentTarget.style.transform = 'scale(1.05)';
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#fff';
              e.currentTarget.style.color = '#7b7b7b';
              e.currentTarget.style.transform = 'none';
            }}
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </section>
    </>
  );
}
