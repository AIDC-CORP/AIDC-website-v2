import React, { useMemo, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "../../../styles/CoreValues.css";
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

  // (Nếu bạn muốn vòng lặp vô hạn, bỏ atFirst/atLast và dùng:
  // setIdx((p) => (p + 1) % DATA.length) / setIdx((p) => (p - 1 + DATA.length) % DATA.length)
  // nhưng với “track trượt” kiểu này thì phiên bản hữu hạn cho bố cục tự nhiên nhất.)

  const styleIdx = useMemo(() => ({ ["--idx" as any]: String(idx) }), [idx]);

  return (
    <section className="core-value">
      <div className="text-center mb-16">
        <h2 className="main-heading"
          style={{ fontSize: '2.5rem', fontWeight: 700, zIndex: 1, color: '#222', position: 'relative', display: 'inline-block', whiteSpace: 'nowrap', lineHeight: 1.1 }}
        >
          {t('core_values_heading')}
          <span className="main-heading-shadow"
            style={{ fontSize: '2.6rem', fontWeight: 700, zIndex: 0, opacity: 0.2, position: 'absolute', left: 0, top: 0, transform: 'translate(12px, -12px)', pointerEvents: 'none', whiteSpace: 'nowrap', lineHeight: 1.1 }}
          >{t('core_values_heading')}</span>
        </h2>
      </div>

      <div className="core-carousel">
        <button
          className="nav-arrow left"
          onClick={prev}
          disabled={atFirst}
          aria-label="Prev"
        >
          <ChevronLeft size={24} />
        </button>

        {/* viewport */}
        <div className="circles-viewport">
          {/* track trượt ngang: --idx được dùng để translateX */}
          <div className="circles-track" style={styleIdx}>
            {DATA.map((d, i) => (
              <div className={`slide ${i === idx ? "active" : ""}`} key={i}>
                <div className="circle">
                  {/* Có thể tách t1/sub/t2 nếu muốn — ở đây dùng 1 text */}
                  <p className="t2">{d.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          className="nav-arrow right"
          onClick={next}
          disabled={atLast}
          aria-label="Next"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </section>
  );
}
