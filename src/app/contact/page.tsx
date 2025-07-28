'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    facilityType: '',
    powerIssues: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would integrate with HubSpot CRM
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
      facilityType: '',
      powerIssues: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
              Ready to Optimize Your Power?
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto">
              Contact us for a free consultation and discover how energy storage can solve your facility's power challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Get Your Free Consultation
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Fill out the form below and our team will contact you within 24 hours to discuss your energy storage needs and schedule a free power quality assessment.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="bg-[#007167] text-white w-12 h-12 rounded-full flex items-center justify-center mr-4">
                    <span className="text-xl">📧</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600">info@alchemy.com</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-[#007167] text-white w-12 h-12 rounded-full flex items-center justify-center mr-4">
                    <span className="text-xl">📞</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Phone</h3>
                    <p className="text-gray-600">(713) 555-0123</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-[#007167] text-white w-12 h-12 rounded-full flex items-center justify-center mr-4">
                    <span className="text-xl">🏭</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Made in the US</h3>
                    <p className="text-gray-600">For reliability and fast delivery</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg">
              <form onSubmit={handleSubmit} className="space-y-6">
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
                
                <div>
                  <label htmlFor="facilityType" className="block text-sm font-medium text-gray-700 mb-2">
                    Facility Type *
                  </label>
                  <select
                    id="facilityType"
                    name="facilityType"
                    value={formData.facilityType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#007167] focus:border-[#007167] outline-none"
                  >
                    <option value="">Select facility type</option>
                    <option value="warehouse">Warehouse</option>
                    <option value="manufacturing">Manufacturing</option>
                    <option value="data-center">Data Center</option>
                    <option value="office">Office Building</option>
                    <option value="retail">Retail</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="powerIssues" className="block text-sm font-medium text-gray-700 mb-2">
                    Power Issues (Select all that apply) *
                  </label>
                  <select
                    id="powerIssues"
                    name="powerIssues"
                    value={formData.powerIssues}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#007167] focus:border-[#007167] outline-none"
                  >
                    <option value="">Select power issues</option>
                    <option value="outages">Outages</option>
                    <option value="sags">Sags</option>
                    <option value="demand-charges">Demand Charges</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Information
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#007167] focus:border-[#007167] outline-none"
                    placeholder="Tell us more about your power challenges and goals..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-[#007167] text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-[#005a52] transition-colors duration-300"
                >
                  Submit for a Free Consultation
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Alchemy Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Choose Alchemy?
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-[#007167] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🇺🇸</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Made in the US</h3>
              <p className="text-gray-600">High quality standards, fast delivery, and local support.</p>
            </div>
            <div className="text-center">
              <div className="bg-[#007167] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Free Assessment</h3>
              <p className="text-gray-600">30-day power quality study to identify your specific needs.</p>
            </div>
            <div className="text-center">
              <div className="bg-[#007167] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Proven ROI</h3>
              <p className="text-gray-600">Typical 2.1-year payback with significant annual savings.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#007167] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8">
            Don't wait for the next power outage or high demand charge. Contact us today to start your journey toward energy independence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+17135550123"
              className="bg-white text-[#007167] hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300 inline-block"
            >
              Call Now
            </a>
            <a 
              href="mailto:info@alchemy.com"
              className="border-2 border-white text-white hover:bg-white hover:text-[#007167] px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300 inline-block"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
} 