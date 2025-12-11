import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./features/home/Home";
import About from "./features/about/About";
import Career from "./features/career/Career";
import Contact from "./features/contact/Contact";
import ComingSoon from "./features/common/ComingSoon";
import ScrollToTop from "./lib/ScrollToTop";
import { I18nProvider } from "./shared/contexts/I18nContext";

export default function App() {
  return (
    <I18nProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/career" element={<Career />} />
              <Route path="/blog" element={<ComingSoon />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </I18nProvider>
  );
}
