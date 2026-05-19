import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-blue-700 text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <span className="text-2xl font-bold tracking-tight">Maulik Desai</span>
          <span className="hidden md:inline-block text-blue-200 border-l border-blue-500 pl-2">Pump Solutions</span>
        </div>
        <div className="hidden md:flex space-x-6 font-medium">
          <a href="#home" className="hover:text-blue-200 transition">Home</a>
          <a href="#products" className="hover:text-blue-200 transition">Products</a>
          <a href="#contact" className="hover:text-blue-200 transition">Contact</a>
        </div>
        <a 
          href="https://wa.me/918141825092" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-full text-sm font-bold transition flex items-center"
        >
          WhatsApp
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
