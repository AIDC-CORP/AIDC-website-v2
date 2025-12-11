import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { motion } from 'motion/react';
import { useI18n } from '../../shared/hooks/useI18n';
import FormSection from './components/FormSection';
import MapSection from './components/MapSection';

export default function Contact() {
  const { t } = useI18n();
  return (
    <div style={{ paddingTop: '110px' }} className="pb-20">
      {/* Section 1 - Dark Background */}
      <motion.section 
        className="py-20 bg-[#0a2342]"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4">
            <motion.h1 
              className="text-[#53bedd]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {t('contact_heading')}
            </motion.h1>
            <motion.p 
              className="text-white/90 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {t('contact_intro')}
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Section 2 - Contact Form & Info */}
      <motion.div 
        className="bg-gray-50"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div className="container mx-auto px-4 pt-16">
          <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left - Contact Info */}
            <motion.div 
              className="bg-gradient-to-br from-[#53bedd] to-[#2a9cbd] p-12 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
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
            </motion.div>

            {/* Right - Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <FormSection />
            </motion.div>
          </div>
          </div>
        </div>
      </motion.div>

      {/* Section 3 - Map Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <MapSection />
      </motion.div>
    </div>
  );
}
