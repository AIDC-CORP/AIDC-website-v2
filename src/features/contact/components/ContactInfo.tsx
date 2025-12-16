import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useI18n } from '../../../shared/hooks/useI18n';

export default function ContactInfo() {
  const { t } = useI18n();

  return (
    <motion.div 
      className="p-12 text-white"
      style={{ background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)' }}
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
            {/* <p className="text-white/90">{t('contact_hours_sun')}</p> */}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
