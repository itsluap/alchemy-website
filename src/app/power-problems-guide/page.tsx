'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function PowerProblemsGuide() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would integrate with HubSpot CRM
    console.log('Power Problems Guide form submitted:', formData);
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
              The Ultimate Guide to Power Problems for C&I
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto">
              Understand common power challenges and discover how energy storage provides solutions for your facility.
            </p>
          </div>
        </div>
      </section>

      {/* Guide Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                What's Inside the Guide
              </h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-[#007167] text-white w-8 h-8 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-sm">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Common Power Issues</h3>
                    <p className="text-gray-600">Outages, sags, swells, and demand charges explained</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-[#007167] text-white w-8 h-8 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-sm">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Cost Analysis</h3>
                    <p className="text-gray-600">Real numbers on how power problems impact your bottom line</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-[#007167] text-white w-8 h-8 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-sm">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Energy Storage Solutions</h3>
                    <p className="text-gray-600">How BESS addresses each power challenge</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-[#007167] text-white w-8 h-8 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-sm">4</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">ROI Calculator</h3>
                    <p className="text-gray-600">See potential savings for your facility</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-[#007167] mb-6">
                Download Your Free Guide
              </h3>
              <p className="text-gray-600 mb-6">
                Enter your information below to receive the "Power Problems for C&I.pdf" guide and learn how energy storage can solve your facility's challenges.
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
                  Download Power Problems Guide
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Preview Content */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Preview: Common Power Problems
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-[#007167] text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-4">Power Outages</h3>
              <p className="text-gray-600 mb-4">$1,000–$5,000 per event, halting operations and causing revenue loss.</p>
              <p className="text-sm text-[#007167] font-semibold">Solution: BESS provides instant backup power</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-[#007167] text-4xl mb-4">📉</div>
              <h3 className="text-xl font-semibold mb-4">Voltage Sags/Swells</h3>
              <p className="text-gray-600 mb-4">Damage sensitive equipment, costing $10,000/year in repairs and downtime.</p>
              <p className="text-sm text-[#007167] font-semibold">Solution: BESS smooths voltage fluctuations</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-[#007167] text-4xl mb-4">💰</div>
              <h3 className="text-xl font-semibold mb-4">Demand Charges</h3>
              <p className="text-gray-600 mb-4">Add $4,000–$10,000/year to energy costs with peak demand penalties.</p>
              <p className="text-sm text-[#007167] font-semibold">Solution: BESS reduces peak demand</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#007167] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Solve Your Power Problems?
          </h2>
          <p className="text-xl mb-8">
            Download the complete guide to understand how energy storage can transform your facility's power reliability and costs.
          </p>
          <Link 
            href="/contact"
            className="bg-white text-[#007167] hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300 inline-block"
          >
            Get Your Free Consultation
          </Link>
        </div>
      </section>
    </main>
  );
} 