import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row">
          <div className="bg-blue-700 text-white p-10 md:w-1/2">
            <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
            <p className="text-blue-100 mb-8">
              We are here to provide the best water solutions for your needs. Reach out to us anytime.
            </p>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-600 p-3 rounded-xl">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-blue-200 font-semibold uppercase tracking-wider">Phone</p>
                  <p className="text-xl font-bold">+91 8141825092</p>
                  <p className="text-blue-200">Jayeshbhai</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-blue-600 p-3 rounded-xl">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-blue-200 font-semibold uppercase tracking-wider">Email</p>
                  <p className="text-xl font-bold">dwarkeshenterprise26@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
          <div className="p-10 md:w-1/2 flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Location</h3>
            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-4">
                <div className="text-blue-600 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed">
                  33, Vikash Estate, Opp. Anil Starch Mill Gate-1, Bapunagar, Ahmedabad - 24
                </p>
              </div>
            </div>
            <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
              <p className="text-sm text-blue-800 font-semibold mb-2">Manufacturer</p>
              <p className="text-lg font-bold text-blue-900">Dwarkesh Enterprise</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
