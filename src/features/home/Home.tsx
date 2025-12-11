import React from 'react';
import Hero from './components/Hero';
import CoreServices from './components/CoreServices';
import WhyChooseUs from './components/WhyChooseUs';
import CustomersSection from './components/CustomersSection';

export default function Home() {
  return (
    <>
      <Hero />
      <CoreServices />
      <WhyChooseUs />
      <CustomersSection />
    </>
  );
}
