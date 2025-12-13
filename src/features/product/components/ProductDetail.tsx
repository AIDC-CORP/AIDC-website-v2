
import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, Zap, BarChart3, ShieldCheck, FileText } from 'lucide-react';

// Import assets relative to this file
import img1 from '../assets/Screenshot 2025-11-29 at 09.42.26.png';
import img2 from '../assets/Screenshot 2025-11-29 at 09.42.50.png';
import img3 from '../assets/Screenshot 2025-11-29 at 09.43.11.png';
import img4 from '../assets/Screenshot 2025-11-29 at 09.43.57.png';

export default function ProductDetail() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const features = [
    {
      title: "Real-time Monitoring",
      description: "Experience seamless real-time tracking of attendance with our advanced dashboard. Monitor check-ins and check-outs as they happen with sub-second latency.",
      image: img1,
      icon: Zap,
      accentColor: "#f59e0b", // amber-500
      bgParams: "rgba(245, 158, 11, 0.1)"
    },
    {
      title: "Comprehensive Analytics",
      description: "Gain deep insights into workforce attendance patterns. Visual charts and graphs help you make data-driven decisions to optimize workforce allocation.",
      image: img2,
      icon: BarChart3,
      accentColor: "#3b82f6", // blue-500
      bgParams: "rgba(59, 130, 246, 0.1)"
    },
    {
      title: "User Management",
      description: "Easily manage user profiles and permissions. Our intuitive interface ensures that administration is straightforward, secure, and scalable.",
      image: img3,
      icon: ShieldCheck,
      accentColor: "#10b981", // emerald-500
      bgParams: "rgba(16, 185, 129, 0.1)"
    },
    {
      title: "Detailed Reporting",
      description: "Generate compliant reports for payroll and HR audits. Export data in multiple formats including PDF, Excel, and CSV with just a few clicks.",
      image: img4,
      icon: FileText,
      accentColor: "#a855f7", // purple-500
      bgParams: "rgba(168, 85, 247, 0.1)"
    }
  ];

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f8fafc', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      <style>{`
        .glass-btn {
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(4px);
            transition: all 0.3s ease;
        }
        .glass-btn:hover {
            background: rgba(255, 255, 255, 0.1);
            padding-right: 1.5rem;
        }
        .cta-btn:hover {
            transform: translateY(-4px);
            box-shadow: 0 10px 25px -5px rgba(59, 130, 246, 0.4);
        }
        .feature-card-img {
            transition: transform 0.7s ease;
        }
        .feature-card:hover .feature-card-img {
            transform: scale(1.02);
        }
        @media (min-width: 1024px) {
            .feature-row {
                flex-direction: row;
                align-items: stretch !important;
            }
            .feature-row-reverse {
                flex-direction: row-reverse;
                align-items: stretch !important;
            }
            .feature-card {
                position: relative;
            }
            .feature-image-wrapper {
                position: absolute;
                inset: 0;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            .feature-card-img {
                max-height: 100%;
                width: auto;
                max-width: 100%;
                object-fit: contain;
            }
        }
        @media (max-width: 1023px) {
            .feature-row, .feature-row-reverse {
                flex-direction: column;
            }
            .hero-title {
                font-size: 3rem !important;
            }
            .feature-image-wrapper {
                display: flex;
                justify-content: center;
            }
            .feature-card-img {
                max-width: 320px;
                width: 100%;
            }
        }
      `}</style>

      {/* Hero Section */}
      <section style={{ 
          position: 'relative', 
          minHeight: '70vh', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          overflow: 'hidden', 
          backgroundColor: '#0B1120', 
          color: 'white',
          paddingTop: '80px'
      }}>
        
        {/* Abstract Background */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
            <div style={{ 
                position: 'absolute', 
                inset: 0, 
                backgroundImage: 'linear-gradient(to right, #4f4f4f2e 1px, transparent 1px), linear-gradient(to bottom, #4f4f4f2e 1px, transparent 1px)', 
                backgroundSize: '14px 24px',
                maskImage: 'radial-gradient(ellipse 60% 50% at 50% 0%, #000 70%, transparent 100%)',
                WebkitMaskImage: 'radial-gradient(ellipse 60% 50% at 50% 0%, #000 70%, transparent 100%)'
            }} />
            <div style={{ 
                position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', 
                width: '1000px', height: '500px', 
                background: 'rgba(59, 130, 246, 0.2)', 
                filter: 'blur(100px)', borderRadius: '100%', 
                opacity: 0.5 
            }} />
        </div>

        <div style={{ position: 'absolute', top: '2rem', left: '2rem', zIndex: 50 }}>
            <Link 
                to="/product" 
                className="glass-btn"
                style={{ 
                    display: 'flex', alignItems: 'center', gap: '0.5rem', 
                    padding: '0.5rem 1rem', borderRadius: '9999px', 
                    color: '#e2e8f0', textDecoration: 'none'
                }}
            >
                <ArrowLeft size={18} color="#bfdbfe" />
                <span style={{ fontSize: '0.875rem', fontWeight: 500 }}>Back to Products</span>
            </Link>
        </div>

        <div style={{ containerType: 'inline-size', width: '100%', maxWidth: '1280px', margin: '0 auto', padding: '0 1rem', height: '100%', zIndex: 10, textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            style={{ 
                display: 'inline-block', marginBottom: '1.5rem', padding: '0.375rem 1rem', 
                borderRadius: '9999px', border: '1px solid rgba(59, 130, 246, 0.3)', 
                backgroundColor: 'rgba(59, 130, 246, 0.1)', backdropFilter: 'blur(12px)'
            }}
          >
            <span style={{ color: '#93c5fd', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase' }}>Enterprise Grade Solution</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="hero-title"
            style={{ 
                fontSize: '5rem', fontWeight: 800, marginBottom: '2rem', lineHeight: 1.1,
                background: 'linear-gradient(to bottom, #ffffff, #ffffff, #94a3b8)', 
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'
            }}
          >
            Work Mind
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
             style={{ fontSize: '1.25rem', color: '#94a3b8', maxWidth: '48rem', margin: '0 auto', fontWeight: 300, lineHeight: 1.6 }}
          >
            Revolutionize your workforce management with AI-powered tracking. 
            <span style={{ color: '#e2e8f0', fontWeight: 400 }}> Seamless, secure, and instantaneous.</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{ marginTop: '3rem', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}
          >
             <button 
                onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })} 
                style={{ 
                    padding: '1rem 2rem', backgroundColor: 'white', color: '#0f172a', 
                    borderRadius: '9999px', fontWeight: 700, border: 'none', cursor: 'pointer',
                    boxShadow: '0 0 20px rgba(255,255,255,0.3)' 
                }}
             >
                Explore Features
             </button>
             <Link to="/contact" style={{ 
                 padding: '1rem 2rem', backgroundColor: 'transparent', border: '1px solid #334155', 
                 color: 'white', borderRadius: '9999px', fontWeight: 700, textDecoration: 'none' 
             }}>
                Request Demo
             </Link>
          </motion.div>
        </div>
      </section>

      {/* Feature Showcase */}
      <section id="features" style={{ padding: '2rem 0', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '1px', background: 'linear-gradient(to right, transparent, #e2e8f0, transparent)' }}></div>
        
        <div style={{ width: '100%', maxWidth: '1280px', margin: '0 auto', padding: '0 1rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
             <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem', color: '#0f172a', letterSpacing: '-0.025em' }}>Engineered for Efficiency</h2>
             <p style={{ fontSize: '1.25rem', color: '#64748b', maxWidth: '42rem', margin: '0 auto' }}>Every feature is designed to reduce administrative overhead and improve accuracy.</p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`feature-row${index % 2 !== 0 ? '-reverse' : ''}`}
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '2rem' }}
              >
                {/* Image Side */}
                <div className="feature-card" style={{ flex: '1' }}>
                  <div className="feature-image-wrapper" style={{ 
                      borderRadius: '1rem', overflow: 'hidden', padding: '1rem' 
                  }}>
                    <img 
                      src={feature.image} 
                      alt={feature.title} 
                      className="feature-card-img"
                      style={{ 
                          borderRadius: '1rem', 
                          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' 
                      }}
                    />
                  </div>
                </div>

                {/* Text Side */}
                <div style={{ 
                    flex: '1', display: 'flex', flexDirection: 'column', gap: '2rem',
                    backgroundColor: 'white', padding: '2.5rem', borderRadius: '2rem',
                    boxShadow: '0 20px 40px -12px rgba(0, 0, 0, 0.1)'
                }}>
                  <div style={{ 
                      display: 'inline-flex', alignItems: 'center', justifyContent: 'center', 
                      padding: '0.75rem', borderRadius: '1rem', backgroundColor: feature.bgParams, 
                      color: feature.accentColor, width: 'fit-content'
                  }}>
                    <feature.icon size={32} strokeWidth={1.5} />
                  </div>
                  
                  <h3 style={{ fontSize: '2.25rem', fontWeight: 700, color: '#0f172a', lineHeight: 1.1 }}>
                    {feature.title}
                  </h3>
                  
                  <p style={{ fontSize: '1.125rem', color: '#475569', lineHeight: 1.7 }}>
                    {feature.description}
                  </p>

                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', padding: 0 }}>
                    {['Automated workflow', 'Instant synchronization', 'Secure data handling'].map((item, i) => (
                        <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#334155', fontWeight: 500 }}>
                            <CheckCircle2 size={18} color={feature.accentColor} />
                            {item}
                        </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section style={{ padding: '5rem 0', backgroundColor: '#0f172a', color: 'white', position: 'relative', overflow: 'hidden' }}>
         <div style={{ width: '100%', maxWidth: '1280px', margin: '0 auto', padding: '0 1rem', position: 'relative', zIndex: 10 }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem', textAlign: 'center' }}>
                {[
                    { label: "Active Users", value: "10k+" },
                    { label: "Accuracy Rate", value: "99.9%" },
                    { label: "Uptime", value: "99.99%" },
                    { label: "Support", value: "24/7" },
                ].map((stat, i) => (
                    <div key={i} style={{ padding: '0 1rem', borderRight: i !== 3 ? '1px solid rgba(255,255,255,0.1)' : 'none' }}>
                        <div style={{ fontSize: '3rem', fontWeight: 700, marginBottom: '0.5rem', background: 'linear-gradient(to bottom, #fff, #94a3b8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{stat.value}</div>
                        <div style={{ color: '#94a3b8', fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{stat.label}</div>
                    </div>
                ))}
            </div>
         </div>
      </section>

      {/* Download App Section */}
      <section style={{ padding: '6rem 0', backgroundColor: '#f1f5f9', textAlign: 'center' }}>
        <div style={{ width: '100%', maxWidth: '1280px', margin: '0 auto', padding: '0 1rem' }}>
             <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem', color: '#0f172a' }}>Take Work Mind with you</h2>
             <p style={{ fontSize: '1.25rem', color: '#64748b', marginBottom: '3rem', maxWidth: '36rem', margin: '0 auto 3rem' }}>
                Manage your profile, check in, and view reports from anywhere. Available now on iOS and Android.
             </p>
             <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
                {/* App Store Button */}
                <a 
                    href="https://apps.apple.com/vn/app/work-mind/id6755899760?l=vi" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ 
                        display: 'inline-flex', alignItems: 'center', gap: '0.75rem',
                        backgroundColor: '#000', color: 'white', padding: '0.75rem 1.5rem', 
                        borderRadius: '0.75rem', textDecoration: 'none', transition: 'transform 0.2s',
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                    }}
                    onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                    onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                >
                    <svg viewBox="0 0 384 512" width="24" height="24" fill="currentColor"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 52.3-11.4 69.5-34.3z"/></svg>
                    <div style={{ textAlign: 'left' }}>
                        <div style={{ fontSize: '0.65rem', lineHeight: 1 }}>Download on the</div>
                        <div style={{ fontSize: '1.1rem', fontWeight: 600, lineHeight: 1 }}>App Store</div>
                    </div>
                </a>

                {/* Google Play Button */}
                <a 
                    href="https://play.google.com/store/apps/details?id=com.mobile_ios&hl=vi" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ 
                        display: 'inline-flex', alignItems: 'center', gap: '0.75rem',
                        backgroundColor: '#000', color: 'white', padding: '0.75rem 1.5rem', 
                        borderRadius: '0.75rem', textDecoration: 'none', transition: 'transform 0.2s',
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                    }}
                    onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                    onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                >
                    <svg viewBox="0 0 512 512" width="24" height="24" fill="currentColor"><path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/></svg>
                    <div style={{ textAlign: 'left' }}>
                        <div style={{ fontSize: '0.65rem', lineHeight: 1 }}>GET IT ON</div>
                        <div style={{ fontSize: '1.1rem', fontWeight: 600, lineHeight: 1 }}>Google Play</div>
                    </div>
                </a>
             </div>
        </div>
      </section>

      {/* Call to Action */}
      <section style={{ padding: '8rem 0', backgroundColor: 'white', position: 'relative' }}>
        <div style={{ width: '100%', maxWidth: '1280px', margin: '0 auto', padding: '0 1rem' }}>
            <div style={{ 
                maxWidth: '56rem', margin: '0 auto', 
                background: 'linear-gradient(135deg, #2563eb, #4338ca)', 
                borderRadius: '2.5rem', padding: '4rem', textAlign: 'center', color: 'white',
                boxShadow: '0 25px 50px -12px rgba(30, 58, 138, 0.25)', position: 'relative', overflow: 'hidden'
            }}>
                <div style={{ position: 'absolute', top: 0, left: 0, width: '16rem', height: '16rem', background: 'rgba(255,255,255,0.1)', borderRadius: '50%', transform: 'translate(-50%, -50%)', filter: 'blur(64px)' }}></div>
                <div style={{ position: 'absolute', bottom: 0, right: 0, width: '16rem', height: '16rem', background: 'rgba(99, 102, 241, 0.3)', borderRadius: '50%', transform: 'translate(50%, 50%)', filter: 'blur(64px)' }}></div>

                <h2 style={{ fontSize: '3rem', fontWeight: 700, marginBottom: '1.5rem', position: 'relative', zIndex: 10 }}>Ready to transform your workplace?</h2>
                <p style={{ color: '#dbeafe', fontSize: '1.25rem', marginBottom: '2.5rem', maxWidth: '42rem', margin: '0 auto 2.5rem', position: 'relative', zIndex: 10 }}>
                    Join thousands of forward-thinking companies using our Smart Attendance solution.
                </p>
                <Link 
                    to="/contact"
                    className="cta-btn"
                    style={{ 
                        position: 'relative', zIndex: 10, display: 'inline-block', 
                        padding: '1.25rem 2.5rem', backgroundColor: 'white', color: '#1d4ed8', 
                        fontWeight: 700, fontSize: '1.125rem', borderRadius: '9999px', 
                        textDecoration: 'none', transition: 'all 0.3s ease',
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                    }}
                >
                    Get Started Now
                </Link>
            </div>
        </div>
      </section>
    </div>
  );
}
