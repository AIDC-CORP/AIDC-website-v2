import React from 'react';
import { MapPin } from 'lucide-react';
import { useI18n } from '../../../App';
import { Button } from '../../../components/ui/button';

function ContactMapSection() {
  const { t } = useI18n();

  const openGoogleMaps = () => {
    const latitude = 21.005076;
    const longitude = 105.801285;
    const url = `https://www.google.com/maps?q=${latitude},${longitude}`;
    window.open(url, '_blank');
  };

  return (
    <section style={{
      padding: 'clamp(3.5rem, 7vw, 5.5rem) clamp(1.5rem, 5vw, 4rem)',
    }}>
      <style>
        {`
          @media (max-width: 768px) {
            .contact-map-container {
              flex-direction: column !important;
            }
          }
        `}
      </style>
      <h2 style={{
        fontSize: 'clamp(1.875rem, 5vw, 2.25rem)',
        fontWeight: 600,
        letterSpacing: '-0.02em',
        textAlign: 'center',
        margin: '0 0 3rem 0',
        color: '#0d2f6f',
      }}>{t('map_section_title')}</h2>
      <div className="contact-map-container" style={{
        maxWidth: '96rem',
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'flex',
        gap: '2rem',
        alignItems: 'start',
      }}>
        <div style={{
          flex: 1,
          borderRadius: '12px',
          overflow: 'hidden',
          boxShadow: '0 4px 12px rgba(9, 25, 45, 0.1)',
        }}>
            <iframe
              title="Tân Thành Công location map"
              src="https://www.google.com/maps?q=21.005076,105.801285&z=16&output=embed"
              width="100%"
              height="400"
              style={{
                border: 'none',
                display: 'block',
              }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
        </div>
        <div style={{
          flex: 1,
          height: '400px',
          padding: '2rem',
          background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
          borderRadius: '12px',
          boxShadow: '0 4px 12px rgba(9, 25, 45, 0.1)',
          overflowY: 'auto',
        }}>
          <h3 style={{
            fontSize: '1.5rem',
            fontWeight: 600,
            color: '#0d2f6f',
            margin: '0 0 1.5rem 0',
          }}>{t('map_company_name')}</h3>
          <div style={{ marginBottom: '1.5rem' }}>
            <p style={{
              fontSize: '1rem',
              color: '#495057',
              margin: '0 0 0.5rem 0',
              lineHeight: 1.6,
            }}>
              {t('map_company_desc')}
            </p>
          </div>
          <div>
            <div style={{ marginBottom: '1rem' }}>
              <strong style={{ color: '#0d2f6f' }}>{t('map_phone_label')}</strong> {t('map_phone_value')}
            </div>
            <div style={{ marginBottom: '1rem' }}>
              <strong style={{ color: '#0d2f6f' }}>{t('map_email_label')}</strong> {t('map_email_value')}
            </div>
            <div style={{ marginBottom: '1rem' }}>
              <strong style={{ color: '#0d2f6f' }}>{t('map_address_label')}</strong> {t('map_address_value')}
            </div>
            <div style={{ marginBottom: '1rem' }}>
              <strong style={{ color: '#0d2f6f' }}>{t('map_hours_label')}</strong> {t('map_hours_value')}
            </div>
          </div>
        </div>
      </div>

      {/* Open in Google Maps Button */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: '3rem',
      }}>
        <Button
          onClick={openGoogleMaps}
          className="bg-gradient-to-r from-[#53bedd] to-[#2a9cbd] hover:shadow-lg hover:shadow-[#53bedd]/30 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 flex items-center gap-2 border-0"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.75rem 2rem',
            fontSize: '1rem',
            fontWeight: 600,
            borderRadius: '9999px',
            cursor: 'pointer',
            boxShadow: '0 4px 15px rgba(83, 190, 221, 0.3)',
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = '0 8px 25px rgba(83, 190, 221, 0.4)';
            e.currentTarget.style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = '0 4px 15px rgba(83, 190, 221, 0.3)';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
        >
          <MapPin className="w-5 h-5" />
          {t('map_open_google_maps')}
        </Button>
      </div>
    </section>
  )
}

export default ContactMapSection
