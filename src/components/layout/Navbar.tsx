import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, UtensilsCrossed } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { clsx } from 'clsx';

const navLinks = [
  { name: '홈', path: '/' },
  { name: '우리밀 소개', path: '/about' },
  { name: '서비스 안내', path: '/services' },
  { name: '식단표', path: '/menu' },
  { name: '소식', path: '/blog' },
  { name: '상담 및 예약', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav
      className={clsx(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-12 lg:px-24 py-4',
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="bg-brand-green p-2 rounded-lg text-white group-hover:rotate-12 transition-transform">
            <UtensilsCrossed size={24} />
          </div>
          <span className="text-2xl font-bold tracking-tighter text-brand-green">우리밀</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={clsx(
                'text-sm font-medium transition-colors hover:text-brand-green',
                location.pathname === link.path ? 'text-brand-green' : 'text-stone-600'
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/contact" className="btn-primary py-2 px-6 text-sm">
            문의하기
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-stone-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white shadow-xl border-t border-stone-100 md:hidden flex flex-col p-6 gap-4"
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={clsx(
                  'text-lg font-medium py-2',
                  location.pathname === link.path ? 'text-brand-green' : 'text-stone-600'
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contact" className="btn-primary text-center mt-2">
              문의하기
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
