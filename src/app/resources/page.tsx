import Link from 'next/link';

export default function Resources() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Resources for Power Efficiency
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto">
              Download our comprehensive guides, studies, and resources to understand how energy storage can solve your facility's challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Downloads Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Free Downloads
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Access our comprehensive guides and studies to understand energy storage solutions for your facility.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg shadow-lg flex flex-col h-full">
              <div className="text-[#007167] text-4xl mb-4">📋</div>
              <h3 className="text-xl font-semibold mb-4 text-[#007167]">Power Problems Guide</h3>
              <p className="text-gray-600 mb-6 flex-grow">
                Comprehensive guide to common C&I power issues and how energy storage provides solutions.
              </p>
              <Link 
                href="/power-problems-guide"
                className="bg-[#007167] text-white px-6 py-3 rounded-lg hover:bg-[#005a52] transition-colors duration-300 inline-block text-center"
              >
                Download PDF
              </Link>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg shadow-lg flex flex-col h-full">
              <div className="text-[#007167] text-4xl mb-4">📊</div>
              <h3 className="text-xl font-semibold mb-4 text-[#007167]">Power Quality Study Offering</h3>
              <p className="text-gray-600 mb-6 flex-grow">
                Learn about our free 30-day Fluke Logger assessment and what insights it provides.
              </p>
              <Link 
                href="/power-quality-study"
                className="bg-[#007167] text-white px-6 py-3 rounded-lg hover:bg-[#005a52] transition-colors duration-300 inline-block text-center"
              >
                Download PDF
              </Link>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg shadow-lg flex flex-col h-full">
              <div className="text-[#007167] text-4xl mb-4">🔋</div>
              <h3 className="text-xl font-semibold mb-4 text-[#007167]">Fundamental Power of Batteries</h3>
              <p className="text-gray-600 mb-6 flex-grow">
                Understand the unique capabilities and benefits of energy storage systems.
              </p>
              <Link 
                href="/contact"
                className="bg-[#007167] text-white px-6 py-3 rounded-lg hover:bg-[#005a52] transition-colors duration-300 inline-block text-center"
              >
                Download PDF
              </Link>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg shadow-lg flex flex-col h-full">
              <div className="text-[#007167] text-4xl mb-4">📈</div>
              <h3 className="text-xl font-semibold mb-4 text-[#007167]">Power Problems Self Assessment</h3>
              <p className="text-gray-600 mb-6 flex-grow">
                Checklist to identify peaks and savings opportunities in your facility.
              </p>
              <Link 
                href="/contact"
                className="bg-[#007167] text-white px-6 py-3 rounded-lg hover:bg-[#005a52] transition-colors duration-300 inline-block text-center"
              >
                Download PDF
              </Link>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg shadow-lg flex flex-col h-full">
              <div className="text-[#007167] text-4xl mb-4">🏭</div>
              <h3 className="text-xl font-semibold mb-4 text-[#007167]">Common C&I Power Problems</h3>
              <p className="text-gray-600 mb-6 flex-grow">
                Overview of typical power challenges faced by commercial and industrial facilities.
              </p>
              <Link 
                href="/contact"
                className="bg-[#007167] text-white px-6 py-3 rounded-lg hover:bg-[#005a52] transition-colors duration-300 inline-block text-center"
              >
                Download PDF
              </Link>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg shadow-lg flex flex-col h-full">
              <div className="text-[#007167] text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-4 text-[#007167]">ERCOT Value of Lost Load Summary</h3>
              <p className="text-gray-600 mb-6 flex-grow">
                Key findings from the recent Brattle Group study on outage costs in ERCOT.
              </p>
              <Link 
                href="/contact"
                className="bg-[#007167] text-white px-6 py-3 rounded-lg hover:bg-[#005a52] transition-colors duration-300 inline-block text-center"
              >
                Download PDF
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Latest Insights
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay updated with the latest trends, case studies, and insights in energy storage.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <article className="bg-white p-8 rounded-lg shadow-lg flex flex-col h-full">
              <div className="text-sm text-gray-500 mb-4">December 2024</div>
              <h3 className="text-xl font-semibold mb-4 text-[#007167]">
                The Hidden Costs of Power Outages: VoLL Insights for ERCOT C&I Businesses
              </h3>
              <p className="text-gray-600 mb-4 flex-grow">
                Power outages in ERCOT can cost C&I businesses thousands per MWh. This guide summarizes recent findings on Value of Lost Load (VoLL).
              </p>
              <Link 
                href="/contact"
                className="text-[#007167] hover:text-[#005a52] font-semibold"
              >
                Read More →
              </Link>
            </article>
            
            <article className="bg-white p-8 rounded-lg shadow-lg flex flex-col h-full">
              <div className="text-sm text-gray-500 mb-4">November 2024</div>
              <h3 className="text-xl font-semibold mb-4 text-[#007167]">
                The Ultimate Guide to Behind-the-Meter Energy Independence
              </h3>
              <p className="text-gray-600 mb-4 flex-grow">
                In an era of grid instability and rising energy costs, behind-the-meter energy storage offers C&I businesses a path to independence.
              </p>
              <Link 
                href="/contact"
                className="text-[#007167] hover:text-[#005a52] font-semibold"
              >
                Read More →
              </Link>
            </article>
            
            <article className="bg-white p-8 rounded-lg shadow-lg flex flex-col h-full">
              <div className="text-sm text-gray-500 mb-4">October 2024</div>
              <h3 className="text-xl font-semibold mb-4 text-[#007167]">
                C&I Power Audit Checklist: Identify Peaks and Savings Opportunities
              </h3>
              <p className="text-gray-600 mb-4 flex-grow">
                Use this checklist to self-assess your facility's power issues and spot opportunities for savings and energy independence.
              </p>
              <Link 
                href="/contact"
                className="text-[#007167] hover:text-[#005a52] font-semibold"
              >
                Read More →
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* Podcast Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Podcast Appearances
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Listen to our team discuss energy storage solutions and industry insights.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg flex flex-col h-full">
              <div className="text-[#007167] text-4xl mb-4">🎙️</div>
              <h3 className="text-xl font-semibold mb-4 text-[#007167]">Energy Storage Industry Insights</h3>
              <p className="text-gray-600 mb-4 flex-grow">
                Our CEO discusses the future of energy storage and its impact on C&I operations.
              </p>
              <Link 
                href="/contact"
                className="bg-[#007167] text-white px-6 py-3 rounded-lg hover:bg-[#005a52] transition-colors duration-300 inline-block text-center"
              >
                Listen Now
              </Link>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg flex flex-col h-full">
              <div className="text-[#007167] text-4xl mb-4">🎙️</div>
              <h3 className="text-xl font-semibold mb-4 text-[#007167]">AI-Generated Content on Energy Storage</h3>
              <p className="text-gray-600 mb-4 flex-grow">
                Exploring how AI is transforming the energy storage industry and facility management.
              </p>
              <Link 
                href="/contact"
                className="bg-[#007167] text-white px-6 py-3 rounded-lg hover:bg-[#005a52] transition-colors duration-300 inline-block text-center"
              >
                Listen Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="py-20 bg-[#007167] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Stay Updated
          </h2>
          <p className="text-xl mb-8">
            Subscribe for updates on energy storage solutions, industry insights, and exclusive content.
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-[#007167] hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 