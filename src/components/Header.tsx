import { Menu, X, Phone } from 'lucide-react';

interface HeaderProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}

export default function Header({ isMenuOpen, setIsMenuOpen }: HeaderProps) {
  return (
    <header className="fixed w-full top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-3">
            <img src="/WhatsApp_Image_2026-04-04_at_15.13.33_(1).jpeg" alt="Səyyar Analiz Logo" className="w-12 h-12 rounded-lg object-cover" />
            <div className="hidden sm:block">
              <h1 className="text-lg font-bold text-gray-900">Səyyar Analiz</h1>
              <p className="text-xs text-teal-600">Laboratoriya Evinizdə</p>
            </div>
          </div>

          <nav className="hidden md:flex gap-8 items-center">
            <a href="#services" className="text-gray-700 hover:text-blue-600 transition font-medium">
              Services
            </a>
            <a href="#who-we-serve" className="text-gray-700 hover:text-blue-600 transition font-medium">
              Who We Serve
            </a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition font-medium">
              Contact
            </a>
            <a
              href="#contact"
              className="flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition font-medium"
            >
              <Phone size={18} />
              Book Now
            </a>
          </nav>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden pb-4 border-t border-gray-200">
            <a
              href="#services"
              className="block py-3 text-gray-700 hover:text-blue-600 transition font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </a>
            <a
              href="#who-we-serve"
              className="block py-3 text-gray-700 hover:text-blue-600 transition font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Who We Serve
            </a>
            <a
              href="#contact"
              className="block py-3 text-gray-700 hover:text-blue-600 transition font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            <a
              href="#contact"
              className="block mt-3 bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition text-center font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Book Now
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
