import React from 'react';

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 overflow-hidden flex flex-col">
      <div className="h-48 overflow-hidden bg-gray-50 flex items-center justify-center">
        <img 
          src={product.image} 
          alt={product.name} 
          className="max-h-full object-contain hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-5 flex-grow flex flex-col">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-bold text-gray-800">{product.name}</h3>
          <span className="text-xs font-semibold px-2 py-1 bg-blue-50 text-blue-600 rounded-full">
            {product.category}
          </span>
        </div>
        <p className="text-gray-600 text-sm mb-4 flex-grow">
          {product.description}
        </p>
        <button
          onClick={() => onAddToCart(product)}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
