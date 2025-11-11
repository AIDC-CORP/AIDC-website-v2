import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useI18n } from '../../App';
import FormSection from './components/FormSection';
import MapSection from './components/MapSection';

export default function Contact() {
  const { t } = useI18n();
  return (
    <div style={{ paddingTop: '110px' }} className="pb-20">
      {/* Section 1 - Dark Background */}
      <section className="py-20 bg-[#0a2342]">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4">
            <h1 className="text-[#53bedd]">{t('contact_heading')}</h1>
            <p className="text-white/90 max-w-3xl mx-auto">
              {t('contact_intro')}
            </p>
          </div>
        </div>
      </section>

      {/* Section 2 - Contact Form & Info */}
      <div className="bg-gray-50">
        <div className="container mx-auto px-4 pt-16">
          <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left - Contact Info */}
            <div className="bg-gradient-to-br from-[#53bedd] to-[#2a9cbd] p-12 text-white">
              <h2 className="text-white mb-4">{t('contact_heading')}</h2>
              <p className="text-white/90 mb-12">{t('contact_intro')}</p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white mb-1">{t('contact_address')}</h4>
                    <p className="text-white/90">
                      19n7b Trung Hoa Nhan Chinh Urban Area, Thanh Xuan District, Hanoi, Vietnam
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white mb-1">{t('contact_phone')}</h4>
                    <a href="tel:+84865903798" className="text-white/90 hover:text-white">
                      +84 865903798
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white mb-1">{t('contact_email')}</h4>
                    <a
                      href="mailto:contact@aidccompany.com"
                      className="text-white/90 hover:text-white"
                    >
                      contact@aidccompany.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white mb-1">{t('contact_hours')}</h4>
                    <p className="text-white/90">{t('contact_hours_mon')}</p>
                    <p className="text-white/90">{t('contact_hours_sun')}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Contact Form */}
            <FormSection />
          </div>
          </div>
        </div>
      </div>

      {/* Section 3 - Map Section */}
      <MapSection />
    </div>
  );
}
