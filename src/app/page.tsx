import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white min-h-screen flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/solarwindbattery.jpg"
            alt="Industrial BESS Installation"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Unlock Reliable Power for Your Operations with Alchemy's Made-in-the-US BESS
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
              Versatile power solutions for C&I facilities – solve outages, sags, and demand charges with instant response and scalability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/power-quality-study"
                className="bg-[#007167] hover:bg-[#005a52] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300"
              >
                Get Free Power Quality Study
              </Link>
              <Link 
                href="/products"
                className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Power Challenges Costing Your Business
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Outages halt operations ($1,000–$5,000/event), sags/swells damage equipment ($10,000/year), demand charges add $4,000–$10,000/year.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-[#007167] text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Outages</h3>
              <p className="text-gray-600">$1,000–$5,000 per event, halting operations and causing revenue loss.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-[#007167] text-4xl mb-4">📉</div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Power Quality Issues</h3>
              <p className="text-gray-600">Sags/swells damage equipment, costing $10,000/year in repairs and downtime.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-[#007167] text-4xl mb-4">💰</div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Demand Charges</h3>
              <p className="text-gray-600">Add $4,000–$10,000/year to your energy costs with peak demand penalties.</p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <a 
              href="https://www.brattle.com/wp-content/uploads/2024/09/Value-of-Lost-Load-Study-for-the-ERCOT-Region.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#007167] hover:text-[#005a52] font-semibold underline"
            >
              Read the recent ERCOT Value of Lost Load Study →
            </a>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Alchemy's Battery Energy Storage System (BESS)
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Made in the US for quality and speed. Benefits: Resilience (uptime during disruptions), Power Quality (mitigates sags/swells), Demand Reduction ($4,000–$10,000/year savings), Arbitrage ($2,000–$5,000/year)
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-[#007167] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900">Resilience</h3>
              <p className="text-gray-600">Uptime during disruptions</p>
            </div>
            <div className="text-center">
              <div className="bg-[#007167] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900">Power Quality</h3>
              <p className="text-gray-600">Mitigates sags/swells</p>
            </div>
            <div className="text-center">
              <div className="bg-[#007167] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900">Demand Reduction</h3>
              <p className="text-gray-600">$4,000–$10,000/year savings</p>
            </div>
            <div className="text-center">
              <div className="bg-[#007167] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💹</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900">Arbitrage</h3>
              <p className="text-gray-600">$2,000–$5,000/year</p>
            </div>
          </div>
        </div>
      </section>

      {/* Battery Fundamentals */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Battery Fundamentals
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Versatile Powerhouse: Multitask peak shaving, backups, and more. Local Control: Place anywhere. Instant Response: Smooth spikes. Flexible & Scalable: Grow as needed. Rapid Setup: Quick deployment.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-[#007167]">Versatile Powerhouse</h3>
              <p className="text-gray-600">Multitask peak shaving, backups, and renewables integration.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-[#007167]">Local Control</h3>
              <p className="text-gray-600">Place anywhere, manage power on-site.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-[#007167]">Instant Response</h3>
              <p className="text-gray-600">Smooth spikes and dips for stable operations.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-[#007167]">Flexible & Scalable</h3>
              <p className="text-gray-600">Grow as needed with modular design.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-[#007167]">Rapid Setup</h3>
              <p className="text-gray-600">Quick deployment for immediate value.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-[#007167]">Forklift Optimization</h3>
              <p className="text-gray-600">Enables electric charging ($7,200/year savings), faster cycles (10–20% productivity).</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-20 bg-[#007167] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Optimize Your Power?
          </h2>
          <p className="text-xl mb-8">
            Download our comprehensive 'Power Problems Guide' to understand how energy storage can solve your facility's challenges.
          </p>
          <Link 
            href="/power-problems-guide"
            className="bg-white text-[#007167] hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300 inline-block"
          >
            Download 'Power Problems Guide'
          </Link>
        </div>
      </section>
    </main>
  );
}
