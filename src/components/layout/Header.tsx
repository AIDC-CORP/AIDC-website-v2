import { useState } from 'react';
import { Phone, Mail, MapPin, Search, Menu, X, Home, Info, Package, Briefcase, Newspaper, MessageSquare } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useI18n } from '../../shared/hooks/useI18n';

const logo = new URL('@/assets/images/logo.png', import.meta.url).href;

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t } = useI18n();

  const items = [
    { label: t('nav_home'), path: '/', icon: Home },
    { label: t('nav_about'), path: '/about', icon: Info },
    { label: t('nav_product'), path: '/product', icon: Package },
    { label: t('nav_career'), path: '/career', icon: Briefcase },
    { label: t('nav_blog'), path: 'https://blog.aidccompany.com/', external: true, icon: Newspaper },
    { label: t('nav_contact'), path: '/contact', icon: MessageSquare },
  ];

  return (
    <>

      <header 
        className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          backgroundColor: 'white',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
          width: '100%',
          maxWidth: '100vw',
          display: 'block',
          visibility: 'visible',
          opacity: 1
        }}
      >

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
                const linkStyle = {
                  fontWeight: 700,
                  color: isActive ? '#53bedd' : '#0f172a',
                  fontSize: '16px',
                  letterSpacing: '0.02em',
                };
                const linkClass = `hover:text-[#53bedd] transition-colors relative group whitespace-nowrap tracking-wide`;
                
                if (item.external) {
                  return (
                    <a
                      key={item.path}
                      href={item.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={linkClass}
                      style={linkStyle}
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
                    style={linkStyle}
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

              {/* Mobile Menu Trigger */}
              <button
                onClick={() => setIsMenuOpen(true)} // Only opens, close is handled inside sidebar
                className="lg:hidden p-2 -mr-2 text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
                aria-label="Open menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

      <div 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          zIndex: 9998,
          opacity: isMenuOpen ? 1 : 0,
          visibility: isMenuOpen ? 'visible' : 'hidden',
          transition: 'opacity 0.3s ease',
          pointerEvents: isMenuOpen ? 'auto' : 'none',
          backdropFilter: 'blur(4px)',
        }}
        onClick={() => setIsMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Menu Sidebar */}
      <div 
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          width: '300px',
          height: '100dvh',
          backgroundColor: 'white',
          zIndex: 9999,
          transform: isMenuOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.3s ease-in-out',
          boxShadow: '-4px 0 24px rgba(0,0,0,0.15)',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
          {/* Sidebar Header */}
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between', 
            padding: '24px', 
            borderBottom: '1px solid #f3f4f6' 
          }}>
            <div style={{ height: '32px' }}>
               <img src={logo} alt="AIDC Corp" style={{ height: '100%', width: 'auto', objectFit: 'contain' }} />
            </div>
            <button
              onClick={() => setIsMenuOpen(false)}
              style={{
                background: 'transparent',
                border: 'none',
                padding: '8px',
                marginRight: '-8px',
                cursor: 'pointer',
                color: '#9ca3af',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          {/* Sidebar Content */}
          <nav style={{ flex: 1, overflowY: 'auto', padding: '24px 0' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', padding: '0 16px' }}>
              {items.map((item) => {
                const isActive = location.pathname === item.path;
                const Icon = item.icon;
                
                const linkStyle = {
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  padding: '14px 16px',
                  borderRadius: '12px',
                  textDecoration: 'none',
                  fontSize: '16px',
                  fontWeight: isActive ? 600 : 500,
                  color: isActive ? '#53bedd' : '#4b5563',
                  backgroundColor: isActive ? 'rgba(83, 190, 221, 0.1)' : 'transparent',
                  transition: 'all 0.2s ease',
                };
                
                if (item.external) {
                  return (
                    <a
                      key={item.path}
                      href={item.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsMenuOpen(false)}
                      style={linkStyle}
                    >
                      <Icon size={20} color={isActive ? '#53bedd' : '#9ca3af'} />
                      {item.label}
                    </a>
                  );
                }
                
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    style={linkStyle}
                  >
                    <Icon size={20} color={isActive ? '#53bedd' : '#9ca3af'} />
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </nav>

          {/* Sidebar Footer */}
          <div style={{ padding: '24px', borderTop: '1px solid #f3f4f6', backgroundColor: '#f9fafb' }}>
               <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', fontSize: '14px', color: '#4b5563' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <Phone size={20} color="#53bedd" style={{ marginTop: '2px', flexShrink: 0 }} />
                    <span style={{ lineHeight: '1.4' }}>+84 865903798</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <Mail size={20} color="#53bedd" style={{ marginTop: '2px', flexShrink: 0 }} />
                    <span style={{ lineHeight: '1.4', wordBreak: 'break-all' }}>contact@aidccompany.com</span>
                  </div>
               </div>
          </div>
        </div>
      </div>
      </header>
    </>
  );
}
