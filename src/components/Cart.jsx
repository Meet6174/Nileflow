import React from 'react';

const Cart = ({ cartItems, onRemove, onOrder }) => {
  if (cartItems.length === 0) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 md:relative md:bottom-auto bg-white border-t md:border-none shadow-[0_-4px_10px_rgba(0,0,0,0.05)] md:shadow-none p-4 z-40">
      <div className="container mx-auto md:max-w-md">
        <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
          <h2 className="text-xl font-bold text-blue-900 mb-4 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            Your Selection ({cartItems.length})
          </h2>
          <ul className="space-y-3 mb-6 max-h-48 overflow-y-auto pr-2 custom-scrollbar">
            {cartItems.map((item, index) => (
              <li key={index} className="flex justify-between items-center bg-white p-3 rounded-lg shadow-sm border border-blue-50">
                <span className="text-gray-700 font-medium">{item.name}</span>
                <button 
                  onClick={() => onRemove(index)}
                  className="text-red-400 hover:text-red-600 p-1"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              </li>
            ))}
          </ul>
          <button
            onClick={onOrder}
            className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-green-200 transition-all transform hover:-translate-y-1 flex justify-center items-center gap-2"
          >
            <span>Order on WhatsApp</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.412-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.309 1.656zm6.29-4.143c1.589.943 3.513 1.441 5.474 1.442 5.463 0 9.904-4.441 9.907-9.905.002-2.646-1.03-5.134-2.906-7.01-1.875-1.875-4.361-2.903-7.006-2.904-5.463 0-9.903 4.443-9.907 9.906 0 2.128.568 4.195 1.644 5.962l-.216.523-1.002 3.655 3.738-.98.267-.189zm11.362-6.422c-.055-.091-.202-.146-.423-.257-.221-.11-.1.306-1.307-.801-.132-.119-.224-.18-.3-.275-.078-.095-.152-.206-.152-.355 0-.15.059-.263.107-.314.048-.051.107-.12.152-.175.046-.055.063-.091.102-.155.039-.064.02-.12-.01-.175-.03-.055-.264-.637-.361-.872-.095-.228-.192-.196-.264-.2-.066-.004-.143-.004-.219-.004s-.201.029-.306.142c-.104.113-.399.389-.399.95s.408 1.101.465 1.176c.058.076.804 1.229 1.948 1.725.272.118.485.188.65.24.273.088.521.075.717.046.219-.033.673-.275.768-.54.095-.266.095-.494.066-.54-.028-.046-.104-.074-.159-.111z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
