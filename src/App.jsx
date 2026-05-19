import React, { useState } from 'react';
import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';
import Cart from './components/Cart';
import Contact from './components/Contact';
import { products } from './data/products';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  const handleOrder = () => {
    if (cart.length === 0) return;

    const businessName = "Nileflow Pump Solutions";
    const phone = "918141825092";
    
    let message = `Hello Nileflow,\n\nI want to order:\n\n`;
    cart.forEach((item, index) => {
      message += `${index + 1}. ${item.name}\n`;
    });
    message += `\nPlease contact me.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phone}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Navbar />

      {/* Hero Section */}
      <header id="home" className="relative bg-blue-50 py-20 overflow-hidden">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center relative z-10">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-bold mb-4 uppercase tracking-wider">
              Trusted Supplier
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-blue-900 mb-6 leading-tight">
              Nileflow <br />
              <span className="text-blue-600 font-extrabold">Pump Solutions</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-lg leading-relaxed">
              Supplying high-quality water pumps and motors by <span className="font-bold text-gray-800">Dwarkesh Enterprise</span>. We provide durable solutions for agriculture, industrial, and domestic needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#products" 
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-xl shadow-lg shadow-blue-200 transition text-center"
              >
                View Products
              </a>
              <button 
                onClick={() => window.open('https://wa.me/918141825092', '_blank')}
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-xl shadow-lg shadow-green-100 transition flex items-center justify-center gap-2"
              >
                Contact on WhatsApp
              </button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-200 rounded-full blur-3xl opacity-30 transform scale-150"></div>
              <img 
                src={products[0].image} 
                alt="Water Pump" 
                className="relative z-10 w-full max-w-md drop-shadow-2xl hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Product Section */}
      <section id="products" className="py-24 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Product Catalog</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Browse our wide range of Nile Flow and Top Water pumps. Select the products you need and send your order directly to us.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onAddToCart={addToCart} 
            />
          ))}
        </div>
      </section>

      {/* Cart Section - Mobile Fixed / Desktop Sticky */}
      <div className="lg:fixed lg:right-8 lg:bottom-8 lg:w-80 lg:z-50">
        <Cart 
          cartItems={cart} 
          onRemove={removeFromCart} 
          onOrder={handleOrder} 
        />
      </div>

      <Contact />

      <footer className="bg-gray-900 text-gray-400 py-10 text-center">
        <div className="container mx-auto px-4">
          <p className="mb-2">© 2026 Nileflow Pump Solutions. All rights reserved.</p>
          <p className="text-sm">Quality Products by Dwarkesh Enterprise</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
