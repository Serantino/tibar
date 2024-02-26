// pages/index.js
import React from 'react';
import ProductList from '../components/ProductList';
import products from '../data/products';

const HomePage = () => {
  return (
    <div>
      <h1>Products</h1>
      <ProductList products={products} />
    </div>
  );
};

export default HomePage;
