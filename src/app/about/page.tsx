import Link from 'next/link';
import Image from 'next/image';

export default function About() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Alchemy: Innovators in Made-in-the-US Energy Storage
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto">
              Founded in Houston, TX, Alchemy designs and manufactures BESS solutions for C&I needs. Our US-based production ensures high quality, compliance, and fast delivery – supporting local jobs while solving global power challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in Houston, TX, Alchemy designs and manufactures BESS solutions for C&I needs. Our US-based production ensures high quality, compliance, and fast delivery – supporting local jobs while solving global power challenges.
              </p>
              <p className="text-lg text-gray-600">
                We understand the critical nature of power reliability in commercial and industrial operations. That&apos;s why we&apos;ve built our company around the principle that energy storage should be as reliable as the operations it supports.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/about_alchemy.jpg"
                alt="Alchemy Energy Storage Solutions"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Mission
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Empower facilities with versatile batteries that provide resilience, efficiency, and scalability, from outages to demand management.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-[#007167] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Resilience</h3>
              <p className="text-black font-medium">Protecting operations from power disruptions and ensuring continuous uptime.</p>
            </div>
            <div className="text-center">
              <div className="bg-[#007167] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Efficiency</h3>
              <p className="text-black font-medium">Optimizing energy usage to reduce costs and improve operational efficiency.</p>
            </div>
            <div className="text-center">
              <div className="bg-[#007167] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📈</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Scalability</h3>
              <p className="text-black font-medium">Growing with your business needs, from small facilities to large operations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Values
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2 text-[#007167]">Quality</h3>
              <p className="text-gray-600">US manufacturing standards ensure reliability and performance.</p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2 text-[#007167]">Innovation</h3>
              <p className="text-gray-600">Continuous improvement in energy storage technology.</p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2 text-[#007167]">Service</h3>
              <p className="text-gray-600">Local support and expertise for your energy needs.</p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2 text-[#007167]">Sustainability</h3>
              <p className="text-gray-600">Supporting clean energy and reducing environmental impact.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#007167] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Work with Alchemy?
          </h2>
          <p className="text-xl mb-8">
            Contact us for a custom assessment of your facility&apos;s energy storage needs.
          </p>
          <Link 
            href="/contact"
            className="bg-white text-[#007167] hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300 inline-block"
          >
            Contact Us for a Custom Assessment
          </Link>
        </div>
      </section>
    </main>
  );
} 