import React, { useState } from 'react';

const Cart = ({ cartItems, onRemove, onOrder }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white py-3 px-5 rounded-full shadow-2xl flex items-center gap-2 z-40 transition-transform hover:scale-105"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
        <span className="font-bold">Cart ({cartItems.length})</span>
      </button>

      {/* Backdrop Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-50 transition-opacity"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Cart Drawer */}
      <div 
        className={`fixed inset-y-0 right-0 z-50 w-[80%] md:w-96 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out flex flex-col ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-blue-50">
          <h2 className="text-xl font-bold text-blue-900 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            Your Cart ({cartItems.length})
          </h2>
          <button 
            onClick={() => setIsOpen(false)}
            className="text-gray-500 hover:text-red-500 transition-colors p-1"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 bg-white">
          {cartItems.length === 0 ? (
            <div className="text-center text-gray-500 mt-10">
              <p>Your cart is empty.</p>
              <button 
                onClick={() => setIsOpen(false)}
                className="mt-4 text-blue-600 hover:underline"
              >
                Continue Browsing
              </button>
            </div>
          ) : (
            <ul className="space-y-4">
              {cartItems.map((item, index) => (
                <li key={index} className="flex justify-between items-center p-4 rounded-xl border border-gray-100 shadow-sm bg-gray-50">
                  <div className="flex flex-col">
                    <span className="text-gray-800 font-semibold">{item.name}</span>
                    <span className="text-xs text-gray-500">{item.hp} - {item.phase}</span>
                  </div>
                  <button 
                    onClick={() => onRemove(index)}
                    className="text-red-400 hover:text-red-600 p-2 hover:bg-red-50 rounded-full transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="p-6 border-t border-gray-100 bg-white shadow-[0_-10px_15px_-3px_rgba(0,0,0,0.05)]">
            <button
              onClick={() => {
                onOrder();
                setIsOpen(false);
              }}
              className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-green-200 transition-all transform hover:-translate-y-1 flex justify-center items-center gap-2"
            >
              <span>Order on WhatsApp</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.412-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.309 1.656zm6.29-4.143c1.589.943 3.513 1.441 5.474 1.442 5.463 0 9.904-4.441 9.907-9.905.002-2.646-1.03-5.134-2.906-7.01-1.875-1.875-4.361-2.903-7.006-2.904-5.463 0-9.903 4.443-9.907 9.906 0 2.128.568 4.195 1.644 5.962l-.216.523-1.002 3.655 3.738-.98.267-.189zm11.362-6.422c-.055-.091-.202-.146-.423-.257-.221-.11-.1.306-1.307-.801-.132-.119-.224-.18-.3-.275-.078-.095-.152-.206-.152-.355 0-.15.059-.263.107-.314.048-.051.107-.12.152-.175.046-.055.063-.091.102-.155.039-.064.02-.12-.01-.175-.03-.055-.264-.637-.361-.872-.095-.228-.192-.196-.264-.2-.066-.004-.143-.004-.219-.004s-.201.029-.306.142c-.104.113-.399.389-.399.95s.408 1.101.465 1.176c.058.076.804 1.229 1.948 1.725.272.118.485.188.65.24.273.088.521.075.717.046.219-.033.673-.275.768-.54.095-.266.095-.494.066-.54-.028-.046-.104-.074-.159-.111z" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
