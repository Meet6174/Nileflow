import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Cart from './components/Cart';
import Contact from './components/Contact';
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import ProductDetail from './pages/ProductDetail';

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

    const phone = "918141825092";
    
    let message = `Hello Nileflow,\n\nI want to order:\n\n`;
    cart.forEach((item, index) => {
      message += `${index + 1}. ${item.name} (${item.hp})\n`;
    });
    message += `\nPlease contact me.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phone}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 flex flex-col">
      <Navbar />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/category/:categoryName" element={<CategoryPage onAddToCart={addToCart} />} />
          <Route path="/product/:id" element={<ProductDetail onAddToCart={addToCart} />} />
        </Routes>
      </main>

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
