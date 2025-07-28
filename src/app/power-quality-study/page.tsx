'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function PowerQualityStudy() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would integrate with HubSpot CRM
    console.log('Power Quality Study form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      company: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Free 30-Day Power Quality Study
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto">
              Get your comprehensive Fluke Logger 1738 assessment to identify power quality issues and energy optimization opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Study Details */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                What You'll Get
              </h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-[#007167] text-white w-8 h-8 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-sm">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Device Installation</h3>
                    <p className="text-gray-600">We'll hook up the Fluke Logger 1738 to your electrical system</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-[#007167] text-white w-8 h-8 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-sm">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">30-Day Monitoring</h3>
                    <p className="text-gray-600">Record 2,800 measurements over 15-minute averages</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-[#007167] text-white w-8 h-8 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-sm">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Comprehensive Analysis</h3>
                    <p className="text-gray-600">Identify maximum loads, power quality issues, and optimization opportunities</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-[#007167] text-white w-8 h-8 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-sm">4</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Custom BESS Design</h3>
                    <p className="text-gray-600">Get a tailored energy storage solution based on your facility's needs</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-[#007167] mb-6">
                Get Your Free Study
              </h3>
              <p className="text-gray-600 mb-6">
                Enter your information below to receive our "Alchemy Power Quality Study Offering.pdf" and schedule your free assessment.
              </p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#007167] focus:border-[#007167] outline-none"
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#007167] focus:border-[#007167] outline-none"
                    placeholder="Enter your email address"
                  />
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#007167] focus:border-[#007167] outline-none"
                    placeholder="Enter your company name"
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-[#007167] text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-[#005a52] transition-colors duration-300"
                >
                  Download Study Offering PDF
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why This Study Matters
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-[#007167] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Identify Issues</h3>
              <p className="text-gray-600">Discover hidden power quality problems costing you money.</p>
            </div>
            <div className="text-center">
              <div className="bg-[#007167] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Calculate Savings</h3>
              <p className="text-gray-600">See exactly how much you can save with energy storage.</p>
            </div>
            <div className="text-center">
              <div className="bg-[#007167] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔧</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Custom Solution</h3>
              <p className="text-gray-600">Get a BESS design tailored to your specific needs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#007167] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Optimize Your Power?
          </h2>
          <p className="text-xl mb-8">
            Don't wait for the next power outage or high demand charge. Start your journey toward energy independence today.
          </p>
          <Link 
            href="/contact"
            className="bg-white text-[#007167] hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300 inline-block"
          >
            Contact Us for More Information
          </Link>
        </div>
      </section>
    </main>
  );
} 