import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import logoImg from '../assets/logo.jpeg';

const categories = [
  {
    id: 'submersible',
    name: 'Submersible Pumps Sets',
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Submersible_pump_0.75HP.jpg',
  },
  {
    id: 'openwell',
    name: 'Open Well Sets',
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Centrifugal_Pump.jpg',
  },
  {
    id: 'domestic',
    name: 'Domestic Pumps',
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Water_pump.jpg',
  },
  {
    id: 'mudpump',
    name: 'Mud Pumps',
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Slurry_Pump.jpg',
  }
];

const HomePage = () => {
  return (
    <>
      {/* Hero Section */}
      <header className="relative bg-blue-50 py-20 overflow-hidden">
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
              Supplying high-quality water pumps and motors all over the india with best prices by <span className="font-bold text-gray-800">Dwarkesh Enterprise</span> . We provide durable solutions for agriculture, industrial, and domestic needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#categories" 
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-xl shadow-lg shadow-blue-200 transition text-center"
              >
                View Categories
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
                src={logoImg} 
                alt="Nileflow Pump Solutions Logo" 
                className="relative z-10 w-full max-w-md drop-shadow-2xl hover:scale-105 transition-transform duration-500 rounded-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Categories Section */}
      <section id="categories" className="py-24 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Product Categories</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Browse our wide range of professional pump solutions organized by category. Find exactly what you need for your application.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((cat) => (
            <Link to={`/category/${cat.id}`} key={cat.id} className="group cursor-pointer">
              <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden h-full flex flex-col relative">
                <div className="h-64 overflow-hidden bg-gray-50 flex items-center justify-center relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent z-10"></div>
                  <img 
                    src={cat.image} 
                    alt={cat.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 relative z-0"
                  />
                  <div className="absolute bottom-6 left-6 z-20">
                    <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-blue-300 transition-colors">{cat.name}</h3>
                    <p className="text-blue-100 text-sm font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0">
                      Explore Products <span aria-hidden="true">&rarr;</span>
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};

export default HomePage;
