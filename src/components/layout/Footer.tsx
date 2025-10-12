import React from 'react';
import { Phone, Mail, MapPin, Facebook, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

const logo = new URL('@/assets/images/logo.png', import.meta.url).href;

export default function Footer() {
  return (
    <footer className="bg-[#0a2342] text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          {/* Column 1: Logo & Description */}
          <div className="space-y-4">
            <img src={logo} alt="AIDC Corp" className="h-20 w-auto" />
            <p className="text-white/80 text-sm leading-relaxed">
              Vietnam AI Technology and Digital Transformation Joint Stock Company - Pioneering in
              AI, data, and digital technologies to deliver innovative, sustainable solutions for
              businesses worldwide.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-white mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-3">
              <Link to="/" className="text-white/80 hover:text-[#53bedd] transition-colors text-sm">
                Home
              </Link>
              <Link
                to="/about"
                className="text-white/80 hover:text-[#53bedd] transition-colors text-sm"
              >
                About Us
              </Link>
              <Link
                to="/fields"
                className="text-white/80 hover:text-[#53bedd] transition-colors text-sm"
              >
                Fields
              </Link>
              <Link
                to="/customers"
                className="text-white/80 hover:text-[#53bedd] transition-colors text-sm"
              >
                Customers & Services
              </Link>
              <Link
                to="/career"
                className="text-white/80 hover:text-[#53bedd] transition-colors text-sm"
              >
                Career Opportunities
              </Link>
              <Link
                to="/blog"
                className="text-white/80 hover:text-[#53bedd] transition-colors text-sm"
              >
                Blog
              </Link>
              <Link
                to="/contact"
                className="text-white/80 hover:text-[#53bedd] transition-colors text-sm"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Column 3: Contact Information */}
          <div>
            <h4 className="text-white mb-4">Contact Information</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#53bedd] flex-shrink-0 mt-1" />
                <p className="text-white/80 text-sm">
                  123 Technology Street, Cau Giay District, Hanoi, Vietnam
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#53bedd] flex-shrink-0" />
                <a href="tel:+84123456789" className="text-white/80 hover:text-[#53bedd] text-sm">
                  +84 123 456 789
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#53bedd] flex-shrink-0" />
                <a
                  href="mailto:contact@aidc.com.vn"
                  className="text-white/80 hover:text-[#53bedd] text-sm"
                >
                  contact@aidc.com.vn
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
          <p className="text-white/60 text-sm">© 2025 AIDC Corp – All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
