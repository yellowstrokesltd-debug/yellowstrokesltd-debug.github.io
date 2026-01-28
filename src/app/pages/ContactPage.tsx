import { Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BackProjectsSection } from '../components/BackProjectsSection';
import { Layout } from '../components/layout';
import { SEO } from '../components/SEO';

export default function ContactPage() {
  return (
    <Layout>
      <SEO
        title="Contact Us"
        description="Get in touch with Yellow Stroke. We are ready to help you evolve and grow through our tailored coaching and mentoring services."
      />


      {/* Contact Section */}
      <section className="py-12 bg-[#111828] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Contact Information */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Contact Information
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                We're here to answer any questions you may have about our services. Reach out to us and we'll respond as soon as we can.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center p-8 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                <div className="w-14 h-14 bg-yellow-400/20 text-yellow-400 rounded-lg flex items-center justify-center mb-6">
                  <Mail size={28} />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-white">Email</h3>
                <p className="text-gray-300 mb-2"><a href="mailto:hello@yellowstroke.com" className="hover:text-yellow-400 transition-colors">hello@yellowstroke.com</a></p>
                <p className="text-sm text-gray-500">We'll respond within 24-48 hours</p>
              </div>

              <div className="flex flex-col items-center text-center p-8 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                <div className="w-14 h-14 bg-yellow-400/20 text-yellow-400 rounded-lg flex items-center justify-center mb-6">
                  <Phone size={28} />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-white">Phone</h3>
                <p className="text-gray-300 mb-2"><a href="tel:+254723572882" className="hover:text-yellow-400 transition-colors">+254 723 572 882</a></p>
                <p className="text-sm text-gray-500">Mon-Fri from 9am to 6pm</p>
              </div>

              <div className="flex flex-col items-center text-center p-8 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                <div className="w-14 h-14 bg-yellow-400/20 text-yellow-400 rounded-lg flex items-center justify-center mb-6">
                  <MapPin size={28} />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-white">Global Reach</h3>
                <p className="text-gray-300 mb-2">Serving clients worldwide</p>
                <p className="text-sm text-gray-500">Virtual and in-person services available</p>
              </div>
            </div>
          </div>

          <BackProjectsSection />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Prefer to Learn More First?
            </h2>
            <p className="text-xl mb-8 text-gray-300">
              Explore our services and discover how we can help you achieve your goals
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/about#services"
                className="px-8 py-4 bg-yellow-400 text-black font-semibold rounded-xl hover:bg-yellow-500 transition-all"
              >
                View Our Services
              </Link>
              <Link
                to="/about"
                className="px-8 py-4 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-all border border-white/20"
              >
                Learn About Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
