import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img
                src="/logowithtaglinewhite.webp"
                alt="Yellow Stroke - Do better, Be better"
                className="h-30 w-auto object-contain"
              />
            </div>
            <p className="text-gray-400 text-sm">
              Empowering individuals through holistic development and transformation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/about" className="block text-gray-400 hover:text-yellow-400 transition-colors text-sm">
                About Us
              </Link>
              <Link to="/about#services" className="block text-gray-400 hover:text-yellow-400 transition-colors text-sm">
                Our Work
              </Link>
              <Link to="/contact" className="block text-gray-400 hover:text-yellow-400 transition-colors text-sm">
                Contact
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <div className="space-y-3 text-sm text-gray-400">
              <div className="flex items-start space-x-2">
                <Mail size={16} className="mt-1 flex-shrink-0" />
                <span>hello@yellowstroke.com</span>
              </div>
              <div className="flex items-start space-x-2">
                <Phone size={16} className="mt-1 flex-shrink-0" />
                <span>+254 723 572 882</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>Global Operations</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-gray-400">
            © 2026 Yellow Stroke. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <Link to="/terms" className="text-gray-400 hover:text-yellow-400 transition-colors">
              Terms & Conditions
            </Link>
            <Link to="/privacy" className="text-gray-400 hover:text-yellow-400 transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
