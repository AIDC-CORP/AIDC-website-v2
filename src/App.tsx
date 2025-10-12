import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './features/home/Home';
import About from './features/about/About';
import Fields from './features/fields/Fields';
import Customers from './features/customers/Customers';
import Career from './features/career/Career';
import Contact from './features/contact/Contact';
import ComingSoon from './features/common/ComingSoon';
import ScrollToTop from './lib/ScrollToTop';

export default function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/fields" element={<Fields />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/career" element={<Career />} />
            <Route path="/blog" element={<ComingSoon />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
}
