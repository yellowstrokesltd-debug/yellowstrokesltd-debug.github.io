import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { href: '/', label: 'Home' },
    {
      label: 'About Us',
      href: '/about',
      children: [
        { href: '/about#services', label: 'Our Work' },
        { href: '/#reviews', label: 'Reviews' }
      ]
    },
    { href: '/better-human-beings', label: 'Better Human Beings' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
      ? 'bg-[#28708F]/85 backdrop-blur-md shadow-lg border-b border-white/10'
      : 'bg-[#28708F] shadow-none border-b border-transparent'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 relative">

          {/* Logo - Positioned Absolute Left */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/">
              <img
                src="/logowithouttagline.webp"
                alt="Yellow Stroke"
                className="h-12 w-auto object-contain"
              />
            </Link>
          </div>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
            {links.map((link) => (
              <div
                key={link.label}
                className="relative group"
                onMouseEnter={() => link.children && setActiveDropdown(link.label)}
                onMouseLeave={() => link.children && setActiveDropdown(null)}
              >
                <div className="flex items-center">
                  <Link
                    to={link.href || '#'}
                    className={`text-base transition-colors flex items-center ${location.pathname === link.href
                      ? 'text-yellow-400 font-semibold'
                      : 'text-gray-200 hover:text-yellow-400'
                      }`}
                  >
                    {link.label}
                    {link.children && <ChevronDown size={14} className="ml-1 mt-0.5" />}
                  </Link>
                </div>

                {/* Dropdown Menu */}
                {link.children && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="bg-[#28708F] backdrop-blur-md rounded-xl shadow-xl border border-white/10 overflow-hidden py-2">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          to={child.href}
                          className={`block px-4 py-2 text-sm text-center transition-colors ${location.pathname === child.href
                            ? 'text-yellow-400 bg-white/10'
                            : 'text-gray-200 hover:bg-white/10 hover:text-yellow-400'
                            }`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* CTA Button - Desktop */}
            <Link
              to="/contact"
              className="hidden md:inline-flex items-center px-6 py-2.5 bg-yellow-400 text-black font-semibold rounded-xl hover:bg-yellow-500 transition-all shadow-lg hover:shadow-xl text-sm"
            >
              Get in Touch
            </Link>

            {/* Mobile Menu Button  */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg hover:bg-white/10 text-white transition-all focus:outline-none"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#28708F] border-t border-white/10"
          >
            <div className="px-4 py-4 space-y-3">
              {links.map((link) => (
                <div key={link.label}>
                  {link.children ? (
                    <div className="space-y-2">
                      <Link
                        to={link.href || '#'}
                        onClick={() => setIsOpen(false)}
                        className={`block px-4 py-2 rounded-lg transition-all ${location.pathname === link.href
                          ? 'bg-yellow-400 text-yellow-900 font-semibold'
                          : 'text-gray-200 hover:bg-white/10'
                          }`}
                      >
                        {link.label}
                      </Link>
                      <div className="pl-6 space-y-2 border-l-2 border-white/10 ml-4">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            to={child.href}
                            onClick={() => setIsOpen(false)}
                            className={`block px-4 py-2 rounded-lg transition-all text-sm ${location.pathname === child.href
                              ? 'text-yellow-400 font-medium'
                              : 'text-gray-300 hover:text-white'
                              }`}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      to={link.href!}
                      onClick={() => setIsOpen(false)}
                      className={`block px-4 py-2 rounded-lg transition-all ${location.pathname === link.href
                        ? 'bg-yellow-400 text-yellow-900 font-semibold'
                        : 'text-gray-200 hover:bg-white/10'
                        }`}
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
              {/* Mobile CTA */}
              <div className="pt-2">
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-2 rounded-lg bg-yellow-400 text-black font-semibold text-center mt-2 hover:bg-yellow-500 transition-colors"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}