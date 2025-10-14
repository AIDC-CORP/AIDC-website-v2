import React, { useMemo, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "../../../styles/CoreValues.css";

type Item = { text: string };

const DATA: Item[] = [
  { text: "PRACTICE is the criterion to test TRUTH" },
  { text: "RESPONSIBILITY is our unwavering commitment TO CUSTOMERS" },
  { text: "CREATIVITY paves the way for BREAKTHROUGH" },
  { text: "DISCIPLINE builds COLLECTIVE STRENGTH" },
  { text: "QUALITY is the measure of REPUTATION" },
  { text: "TRANSPARENCY builds TRUST" },
  { text: "CONTINUOUS LEARNING so we can GO FURTHER" },
];

export default function CoreValuesCSS() {
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
          Core values
          <span className="main-heading-shadow"
            style={{ fontSize: '2.6rem', fontWeight: 700, zIndex: 0, opacity: 0.2, position: 'absolute', left: 0, top: 0, transform: 'translate(12px, -12px)', pointerEvents: 'none', whiteSpace: 'nowrap', lineHeight: 1.1 }}
          >Core values</span>
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
