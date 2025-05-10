import React from 'react'

function HomePage() {
  return (
    <>
      <div>Welcome to Makola</div>
      <div className="container">
        <h1 className='py-3'>Welcome to Makola</h1>
        <p>Makola is a modern e-commerce platform that offers a wide range of products and services.</p>
        <p>Explore our features and discover the best deals!</p>
        <p>Shop now and enjoy a seamless shopping experience.</p>
        <p>Join us today and be part of the Makola community!</p>
        <p>For more information, visit our <a href="/about">About Us</a> page.</p>
        </div>
      <div className="container">
        <h2 className='py-3'>Features</h2>
        <ul>
          <li>Wide range of products</li>
          <li>Secure payment options</li>
          <li>Fast and reliable shipping</li>
          <li>24/7 customer support</li>
          <li>User-friendly interface</li>
        </ul>
        <p>For more details, check out our <a href="/features">Features</a> page.</p>
        <h2 className='py-3'>Pricing</h2>
      </div>
    </>
  );
}

export default HomePage