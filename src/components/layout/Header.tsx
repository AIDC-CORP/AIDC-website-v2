import React from 'react';
import { useState } from 'react';
import { Phone, Mail, MapPin, Search, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useI18n } from '../../App';
import '../../styles/Home.css';

const logo = new URL('@/assets/images/logo.png', import.meta.url).href;

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t } = useI18n();

  const items = [
    { label: t('nav_home'), path: '/' },
    { label: t('nav_about'), path: '/about' },
    { label: t('nav_customers'), path: '/customers' },
    { label: t('nav_career'), path: '/career' },
    { label: t('nav_blog'), path: 'https://blog.aidccompany.com/', external: true },
    { label: t('nav_contact'), path: '/contact' },
  ];

  return (
    <header 
      className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        backgroundColor: 'white',
        width: '100%',
        maxWidth: '100vw',
        display: 'block',
        visibility: 'visible',
        opacity: 1
      }}
    >
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/30"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
      {/* Header Top */}
      <div 
        className="bg-gray-50 border-b border-gray-200"
        style={{
          backgroundColor: '#f9fafb',
          display: 'block',
          visibility: 'visible',
          opacity: 1
        }}
      >
        <div 
          className="container mx-auto px-4 py-2"
          style={{
            maxWidth: '100%',
            overflowX: 'hidden',
            display: 'block',
            visibility: 'visible'
          }}
        >
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>+84 865903798</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>contact@aidccompany.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>19n7b Trung Hoa Nhan Chinh Urban Area, Thanh Xuan District, Hanoi, Vietnam</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div 
        className="container mx-auto px-4"
        style={{
          maxWidth: '100%',
          overflowX: 'hidden',
          display: 'block',
          visibility: 'visible'
        }}
      >
        <div 
          className="flex items-center justify-between h-20"
          style={{
            display: 'flex',
            visibility: 'visible',
            opacity: 1
          }}
        >
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 z-10" style={{zIndex: 60}}>
            <div className="w-16 h-16 flex items-center justify-center">
              <img src={logo} alt="AIDC Corp" className="w-full h-full object-contain" />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-8 flex-1 justify-center">
            {items.map((item) => {
              const isActive = location.pathname === item.path;
              const linkClass = `text-gray-800 hover:text-[#53bedd] transition-colors relative group whitespace-nowrap ${
                isActive ? 'text-[#53bedd]' : ''
              }`;
              
              if (item.external) {
                return (
                  <a
                    key={item.path}
                    href={item.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClass}
                  >
                    {item.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#53bedd] group-hover:w-full transition-all duration-300" />
                  </a>
                );
              }
              
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={linkClass}
                >
                  {item.label}
                  <span
                    className={`absolute bottom-0 left-0 w-0 h-0.5 bg-[#53bedd] group-hover:w-full transition-all duration-300 ${
                      isActive ? 'w-full' : ''
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            {/* Search Bar */}
            <div className="hidden md:flex items-center bg-gray-100 rounded-full px-4 py-2">
              <Search className="w-4 h-4 text-gray-500 mr-2" />
              <input
                type="text"
                placeholder={t('search_placeholder')}
                className="bg-transparent outline-none text-sm w-32"
              />
            </div>

            {/* Language Switcher */}
            <div className="flex items-center gap-2 text-sm font-medium">
              <button
                onClick={() => setLanguage('vn')}
                className={`transition-colors ${
                  language === 'vn' ? 'text-[#53bedd] font-bold' : 'text-gray-600 hover:text-[#53bedd]'
                }`}
                title="Tiếng Việt"
              >
                VN
              </button>
              <span className="text-gray-400">|</span>
              <button
                onClick={() => setLanguage('en')}
                className={`transition-colors ${
                  language === 'en' ? 'text-[#53bedd] font-bold' : 'text-gray-600 hover:text-[#53bedd]'
                }`}
                title="English"
              >
                EN
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 hover:bg-gray-100 rounded"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden bg-white border-t border-gray-200 relative z-50 ${isMenuOpen ? 'mobile-menu-open' : 'mobile-menu-closed'}`}>
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4 items-center">
            {items.map((item) => {
              const isActive = location.pathname === item.path;
              const linkClass = `text-gray-800 hover:text-[#53bedd] transition-colors text-center ${
                isActive ? 'text-[#53bedd]' : ''
              }`;
              
              if (item.external) {
                return (
                  <a
                    key={item.path}
                    href={item.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsMenuOpen(false)}
                    className={linkClass}
                  >
                    {item.label}
                  </a>
                );
              }
              
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={linkClass}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
    </header>
  );
}
