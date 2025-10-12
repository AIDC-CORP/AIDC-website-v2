import React from 'react';
import { useState } from 'react';
import { Phone, Mail, MapPin, Search, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const logo = new URL('@/assets/images/logo.png', import.meta.url).href;

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState<'en' | 'vn'>('en');
  const location = useLocation();

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Fields', path: '/fields' },
    { label: 'Customers & Partners', path: '/customers' },
    { label: 'Career Opportunities', path: '/career' },
    { label: 'Blog', path: '/blog' },
    { label: 'Contact', path: '/contact' },
  ];

  const navItemsVN = [
    { label: 'Trang chủ', path: '/' },
    { label: 'Về chúng tôi', path: '/about' },
    { label: 'Lĩnh vực', path: '/fields' },
    { label: 'Khách hàng & Đối tác', path: '/customers' },
    { label: 'Cơ hội nghề nghiệp', path: '/career' },
    { label: 'Blog', path: '/blog' },
    { label: 'Liên hệ', path: '/contact' },
  ];

  const items = language === 'en' ? navItems : navItemsVN;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      {/* Header Top */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4 py-2">
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
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 z-10">
            <div className="w-24 h-24 -mb-16 bg-white rounded-lg shadow-md border-2 border-gray-100 flex items-center justify-center p-2">
              <img src={logo} alt="AIDC Corp" className="w-full h-full object-contain" />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-8 flex-1 justify-center">
            {items.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-gray-800 hover:text-[#53bedd] transition-colors relative group whitespace-nowrap ${
                  location.pathname === item.path ? 'text-[#53bedd]' : ''
                }`}
              >
                {item.label}
                <span
                  className={`absolute bottom-0 left-0 w-0 h-0.5 bg-[#53bedd] group-hover:w-full transition-all duration-300 ${
                    location.pathname === item.path ? 'w-full' : ''
                  }`}
                />
              </Link>
            ))}
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            {/* Search Bar */}
            <div className="hidden md:flex items-center bg-gray-100 rounded-full px-4 py-2">
              <Search className="w-4 h-4 text-gray-500 mr-2" />
              <input
                type="text"
                placeholder={language === 'en' ? 'Search...' : 'Tìm kiếm...'}
                className="bg-transparent outline-none text-sm w-32"
              />
            </div>

            {/* Language Switcher */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setLanguage('vn')}
                className={`w-8 h-6 rounded overflow-hidden border-2 transition-all ${
                  language === 'vn' ? 'border-[#53bedd] scale-110' : 'border-transparent'
                }`}
                title="Tiếng Việt"
              >
                <div className="w-full h-1/2 bg-red-600"></div>
                <div className="w-full h-1/2 bg-yellow-400"></div>
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`w-8 h-6 rounded overflow-hidden border-2 transition-all ${
                  language === 'en' ? 'border-[#53bedd] scale-110' : 'border-transparent'
                }`}
                title="English"
              >
                <div className="relative w-full h-full bg-blue-700">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-full h-[2px] bg-white"></div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-[2px] h-full bg-white"></div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-full h-full" style={{ 
                      background: 'linear-gradient(45deg, transparent 46%, white 46%, white 54%, transparent 54%), linear-gradient(-45deg, transparent 46%, white 46%, white 54%, transparent 54%)'
                    }}></div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-full h-full" style={{ 
                      background: 'linear-gradient(45deg, transparent 48%, red 48%, red 52%, transparent 52%), linear-gradient(-45deg, transparent 48%, red 48%, red 52%, transparent 52%)'
                    }}></div>
                  </div>
                </div>
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
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {items.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`text-gray-800 hover:text-[#53bedd] transition-colors ${
                  location.pathname === item.path ? 'text-[#53bedd]' : ''
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
