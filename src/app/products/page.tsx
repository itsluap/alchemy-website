import Link from 'next/link';
import Image from 'next/image';

export default function Products() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              BESS: Versatile, Made-in-the-US Power Solutions
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto">
              Scalable systems, including inverter, for warehouses and manufacturing. Proudly made in the US for reliability.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Complete Energy Storage Solutions
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Our Battery Energy Storage Systems (BESS) are designed specifically for commercial and industrial applications. Each system includes advanced inverters, monitoring capabilities, and scalable architecture to meet your facility's unique needs.
              </p>
              <p className="text-lg text-gray-600">
                Made in the US for reliability, compliance, and fast delivery. Our systems integrate seamlessly with existing infrastructure while providing the flexibility to grow with your operations.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/microgrid.png"
                alt="BESS Microgrid System"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Battery Benefits
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From the conversation and "What only batteries can do.pdf" - discover the unique advantages of energy storage.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-[#007167] text-4xl mb-4">🔋</div>
              <h3 className="text-xl font-semibold mb-4 text-[#007167]">Versatile Powerhouse</h3>
              <p className="text-gray-600">Handles peak shaving, backups, renewables integration, and more with a single system.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-[#007167] text-4xl mb-4">🏭</div>
              <h3 className="text-xl font-semibold mb-4 text-[#007167]">Local Energy Control</h3>
              <p className="text-gray-600">Deploy anywhere, manage power on-site, reduce waste and enhance resilience.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-[#007167] text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-4 text-[#007167]">Instant Response</h3>
              <p className="text-gray-600">Smooths voltage spikes/dips for stable operations and equipment protection.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-[#007167] text-4xl mb-4">📈</div>
              <h3 className="text-xl font-semibold mb-4 text-[#007167]">Flexible & Scalable</h3>
              <p className="text-gray-600">Modular design allows growth as needed, from small facilities to large operations.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-[#007167] text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold mb-4 text-[#007167]">Rapid Setup</h3>
              <p className="text-gray-600">Quick deployment with minimal downtime for immediate value and ROI.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-[#007167] text-4xl mb-4">🔧</div>
              <h3 className="text-xl font-semibold mb-4 text-[#007167]">Forklift Optimization</h3>
              <p className="text-gray-600">Enables electric charging ($7,200/year savings), faster cycles (10–20% productivity).</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Start with our comprehensive assessment to understand your facility's energy profile and identify optimization opportunities.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-[#007167] mb-4">Free 30-Day Power Quality Study</h3>
              <p className="text-gray-600 mb-6">
                Our Fluke Logger 1738 assessment provides detailed insights into your facility's power consumption patterns.
              </p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>• Hook up device to your electrical system</li>
                <li>• Set parameters to match your topology</li>
                <li>• Record 2,800 measurements over 15-min averages</li>
                <li>• Analyze for maximum loads and power quality issues</li>
                <li>• Inform optimal BESS design for your facility</li>
              </ul>
              <Link 
                href="/power-quality-study"
                className="bg-[#007167] text-white px-6 py-3 rounded-lg hover:bg-[#005a52] transition-colors duration-300 inline-block"
              >
                Schedule Your Study
              </Link>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-[#007167] mb-4">Custom BESS Design</h3>
              <p className="text-gray-600 mb-6">
                Based on your power quality study results, we design a tailored energy storage solution that addresses your specific challenges.
              </p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>• Custom system sizing and configuration</li>
                <li>• Integration planning with existing infrastructure</li>
                <li>• ROI analysis and payback calculations</li>
                <li>• Installation and commissioning support</li>
                <li>• Ongoing monitoring and maintenance</li>
              </ul>
              <Link 
                href="/contact"
                className="bg-[#007167] text-white px-6 py-3 rounded-lg hover:bg-[#005a52] transition-colors duration-300 inline-block"
              >
                Get Custom Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Calculator Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Calculate Your Savings
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how energy storage can reduce your costs and improve reliability.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#007167] mb-2">$4K-$10K</div>
              <p className="text-gray-600">Demand Reduction per year</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#007167] mb-2">$2K-$5K</div>
              <p className="text-gray-600">Energy Arbitrage per year</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#007167] mb-2">$10K</div>
              <p className="text-gray-600">Power Quality savings per year</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#007167] mb-2">2.1 Years</div>
              <p className="text-gray-600">Typical payback period</p>
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
            Download our Study Offering PDF to learn more about our comprehensive power quality assessment.
          </p>
          <Link 
            href="/power-quality-study"
            className="bg-white text-[#007167] hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300 inline-block"
          >
            Download Study Offering PDF
          </Link>
        </div>
      </section>
    </main>
  );
} 