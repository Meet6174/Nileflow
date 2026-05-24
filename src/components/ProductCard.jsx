import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product, onAddToCart }) => {
  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    onAddToCart(product);
  };

  return (
    <Link to={`/product/${product.id}`} className="block h-full cursor-pointer hover:no-underline">
      <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col h-full group">
        <div className="h-56 overflow-hidden bg-gray-50 flex items-center justify-center relative">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            <span className="text-xs font-bold px-2.5 py-1 bg-blue-100 text-blue-700 rounded-md shadow-sm">
              {product.category}
            </span>
            <span className="text-xs font-bold px-2.5 py-1 bg-green-100 text-green-700 rounded-md shadow-sm w-max">
              {product.hp}
            </span>
          </div>
        </div>
        
        <div className="p-5 flex-grow flex flex-col">
          <h3 className="text-lg font-bold text-gray-800 leading-tight mb-2 group-hover:text-blue-600 transition-colors">{product.name}</h3>
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {product.shortDescription}
          </p>

          <div className="bg-gray-50 rounded-lg p-3 mb-4 flex-grow border border-gray-100 group-hover:bg-blue-50/50 transition-colors">
            <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs">
              <div className="flex flex-col">
                <span className="text-gray-400 font-medium uppercase tracking-wider text-[10px]">Usage</span>
                <span className="font-semibold text-gray-700 truncate" title={product.usage}>{product.usage}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-gray-400 font-medium uppercase tracking-wider text-[10px]">Phase</span>
                <span className="font-semibold text-gray-700 truncate">{product.phase}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-gray-400 font-medium uppercase tracking-wider text-[10px]">Head</span>
                <span className="font-semibold text-gray-700 truncate">{product.specifications?.head || "N/A"}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-gray-400 font-medium uppercase tracking-wider text-[10px]">Flow Rate</span>
                <span className="font-semibold text-gray-700 truncate">{product.specifications?.flowRate || "N/A"}</span>
              </div>
            </div>
          </div>

          <button
            onClick={handleAddToCart}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 rounded-lg transition shadow-md hover:shadow-blue-500/30 active:scale-[0.98] mt-auto relative z-10"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
