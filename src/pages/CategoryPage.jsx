import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

const CategoryPage = ({ onAddToCart }) => {
  const { categoryName } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [categoryName]);

  // Map URL parameter to data category
  const categoryMap = {
    'submersible': 'Submersible',
    'openwell': 'Open Well',
    'domestic': 'Domestic',
    'mudpump': 'Mud Pump'
  };

  const dataCategory = categoryMap[categoryName];
  const categoryProducts = products.filter(p => p.category === dataCategory);

  // Title for the page
  const titleMap = {
    'submersible': 'Submersible Pumps Sets',
    'openwell': 'Open Well Sets',
    'domestic': 'Domestic Pumps',
    'mudpump': 'Mud Pumps'
  };

  const pageTitle = titleMap[categoryName] || 'Products';

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="flex items-center text-sm text-gray-500 mb-8">
          <Link to="/" className="hover:text-blue-600 transition">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900 font-medium">{pageTitle}</span>
        </div>

        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{pageTitle}</h1>
          <p className="text-gray-600 max-w-3xl">
            Explore our complete range of {pageTitle.toLowerCase()}. High performance, reliable, and durable solutions for your needs.
          </p>
        </div>

        {categoryProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {categoryProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={onAddToCart}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-medium text-gray-600">No products found in this category.</h3>
            <Link to="/" className="mt-4 inline-block text-blue-600 hover:underline">Return to Home</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;
