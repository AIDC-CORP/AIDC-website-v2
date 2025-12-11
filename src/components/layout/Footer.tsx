import React from 'react';
import { Phone, Mail, MapPin, Facebook, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useI18n } from '../../App';

const logo = new URL('@/assets/images/logo_aidc.png', import.meta.url).href;

export default function Footer() {
  const { t } = useI18n();
  return (
    <footer className="bg-[#0a2342] text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          {/* Column 1: Logo & Description */}
          <div className="space-y-4">
            <img src={logo} alt="AIDC Corp" className="h-20 w-auto" />
            <p className="text-white/80 text-sm leading-relaxed">
              {t('footer_desc')}
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-white mb-4">{t('footer_quick_links')}</h4>
            <nav className="flex flex-col gap-3">
              <Link to="/" className="text-white/80 hover:text-[#53bedd] transition-colors text-sm">
                {t('footer_home')}
              </Link>
              <Link
                to="/about"
                className="text-white/80 hover:text-[#53bedd] transition-colors text-sm"
              >
                {t('footer_about')}
              </Link>
              <Link
                to="/career"
                className="text-white/80 hover:text-[#53bedd] transition-colors text-sm"
              >
                {t('footer_career')}
              </Link>
              <a
                href="https://blog.aidccompany.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-[#53bedd] transition-colors text-sm"
              >
                {t('footer_blog')}
              </a>
              <Link
                to="/contact"
                className="text-white/80 hover:text-[#53bedd] transition-colors text-sm"
              >
                {t('footer_contact')}
              </Link>
            </nav>
          </div>

          {/* Column 3: Contact Information */}
          <div>
            <h4 className="text-white mb-4">{t('footer_contact_info')}</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#53bedd] flex-shrink-0 mt-1" />
                <p className="text-white/80 text-sm">
                  19n7b Trung Hoa Nhan Chinh Urban Area, Thanh Xuan District, Hanoi, Vietnam
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#53bedd] flex-shrink-0" />
                <a href="tel:+84865903798" className="text-white/80 hover:text-[#53bedd] text-sm">
                  +84 865903798
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#53bedd] flex-shrink-0" />
                <a
                  href="mailto:contact@aidccompany.com"
                  className="text-white/80 hover:text-[#53bedd] text-sm"
                >
                  contact@aidccompany.com
                </a>
              </div>

              {/* Social Media Icons */}
              <div className="flex items-center gap-4 pt-4">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#53bedd] flex items-center justify-center transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#53bedd] flex items-center justify-center transition-colors"
                  aria-label="TikTok"
                >
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#53bedd] flex items-center justify-center transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-white/60 text-sm">© 2025 AIDC Corp – {t('footer_copyright')}</p>
        </div>
      </div>
    </footer>
  );
}
