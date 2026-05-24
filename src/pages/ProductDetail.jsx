import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { products } from '../data/products';

const ProductDetail = ({ onAddToCart }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const product = products.find(p => p.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Product Not Found</h2>
        <button onClick={() => navigate('/')} className="text-blue-600 hover:underline">
          Return to Home
        </button>
      </div>
    );
  }

  const handleWhatsAppOrder = () => {
    const phone = "918141825092";
    const message = `Hello Nileflow,\n\nI would like to order the following product:\n\n*Product Name:* ${product.name}\n*Category:* ${product.category}\n*HP:* ${product.hp}\n\nPlease let me know the availability and price.`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phone}?text=${encodedMessage}`, '_blank');
  };

  // Map category back to URL param for breadcrumb
  const reverseCategoryMap = {
    'Submersible': 'submersible',
    'Open Well': 'openwell',
    'Domestic': 'domestic',
    'Mud Pump': 'mudpump'
  };
  const categoryParam = reverseCategoryMap[product.category];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Breadcrumb */}
        <div className="flex items-center text-sm text-gray-500 mb-8 flex-wrap">
          <Link to="/" className="hover:text-blue-600 transition">Home</Link>
          <span className="mx-2">/</span>
          <Link to={`/category/${categoryParam}`} className="hover:text-blue-600 transition">{product.category} Pumps</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900 font-medium truncate">{product.name}</span>
        </div>

        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden flex flex-col md:flex-row">
          {/* Product Image Section */}
          <div className="w-full md:w-1/2 p-8 md:p-12 bg-gray-50 flex items-center justify-center relative">
            <div className="absolute top-6 left-6 flex gap-2">
              <span className="px-4 py-1.5 bg-blue-100 text-blue-800 font-bold rounded-lg text-sm shadow-sm">
                {product.category}
              </span>
              <span className="px-4 py-1.5 bg-green-100 text-green-800 font-bold rounded-lg text-sm shadow-sm">
                {product.hp}
              </span>
            </div>
            <img 
              src={product.image} 
              alt={product.name} 
              className="max-w-full max-h-[400px] object-contain drop-shadow-xl hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Product Info Section */}
          <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{product.name}</h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {product.shortDescription}
            </p>

            {/* Specifications Grid */}
            <div className="mb-10">
              <h3 className="text-xl font-bold text-gray-900 mb-4 border-b pb-2 border-gray-100">Specifications</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <span className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Usage</span>
                  <span className="text-gray-800 font-medium">{product.usage}</span>
                </div>
                <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <span className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Phase</span>
                  <span className="text-gray-800 font-medium">{product.phase}</span>
                </div>
                <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <span className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Head Range</span>
                  <span className="text-gray-800 font-medium">{product.specifications?.head || "N/A"}</span>
                </div>
                <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <span className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Flow Rate</span>
                  <span className="text-gray-800 font-medium">{product.specifications?.flowRate || "N/A"}</span>
                </div>
                <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <span className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Voltage</span>
                  <span className="text-gray-800 font-medium">{product.specifications?.voltage || "N/A"}</span>
                </div>
                <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <span className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Material</span>
                  <span className="text-gray-800 font-medium">{product.specifications?.material || "N/A"}</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-auto flex flex-col sm:flex-row gap-4">
              <button 
                onClick={handleWhatsAppOrder}
                className="flex-1 bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-6 rounded-xl transition shadow-lg shadow-green-200 flex items-center justify-center gap-2"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                Order on WhatsApp
              </button>
              <button 
                onClick={() => onAddToCart(product)}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-xl transition shadow-lg shadow-blue-200"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
