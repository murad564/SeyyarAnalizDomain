import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src="/WhatsApp_Image_2026-04-04_at_15.13.33_(1).jpeg" alt="Səyyar Analiz" className="w-10 h-10 rounded-lg object-cover" />
              <h3 className="text-white font-bold text-lg">Səyyar Analiz</h3>
            </div>
            <p className="text-sm text-gray-400">
              Azərbaycan ərazisində peşəkar səyyar laboratoriya testləri
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Sürətli Keçidlər</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#services" className="hover:text-teal-400 transition">Xidmətlər</a></li>
              <li><a href="#who-we-serve" className="hover:text-teal-400 transition">Kimə Xidmət Edirik</a></li>
              <li><a href="#contact" className="hover:text-teal-400 transition">Əlaqə</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Xidmətlər</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#services" className="hover:text-teal-400 transition">Qan Testləri</a></li>
              <li><a href="#services" className="hover:text-teal-400 transition">Sidik Analizi</a></li>
              <li><a href="#services" className="hover:text-teal-400 transition">Hormonal Testlər</a></li>
              <li><a href="#services" className="hover:text-teal-400 transition">Digər Testlər</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Əlaqə Məlumatı</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone size={16} className="mt-0.5 flex-shrink-0" />
                <span>+994 50 XXX XX XX</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={16} className="mt-0.5 flex-shrink-0" />
                <span>info@seyaranaliz.az</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                <span>Azərbaycan, Ümumbəşəri</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-sm text-gray-400">
              &copy; 2024 Səyyar Analiz. Bütün hüquqlar qorunur.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-teal-600 transition">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-teal-600 transition">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-teal-600 transition">
                <Twitter size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
