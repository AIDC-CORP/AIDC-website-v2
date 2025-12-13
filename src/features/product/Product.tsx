
import React from 'react';
import ProductIntro from './components/ProductIntro';
import ProductList from './components/ProductList';

export default function Product() {
  return (
    <div className="min-h-screen bg-white">
      <ProductIntro />
      <ProductList />
    </div>
  );
}
