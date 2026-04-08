import { ArrowRight, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <div className="pt-24 bg-gradient-to-br from-blue-50 via-white to-blue-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-semibold">
                <Zap size={16} />
                Sürətli və Etibarlı Xidmət
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Səyyar Analiz
                <span className="text-teal-600"> Laboratoriya</span>
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Peşəkar tibbi komanda birbaşa evinizdə və ya iş yerinizə gəlir. Uzun sıraların və gözləmənin yoxdur — sadəcə dəqiq və rahat laboratoriya xidmətləri.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <a
                href="#contact"
                className="flex items-center justify-center gap-2 bg-teal-600 text-white px-8 py-4 rounded-lg hover:bg-teal-700 transition font-bold text-lg"
              >
                Xidmət Sifariş Edin
                <ArrowRight size={20} />
              </a>
              <a
                href="#services"
                className="flex items-center justify-center gap-2 border-2 border-teal-600 text-teal-600 px-8 py-4 rounded-lg hover:bg-teal-50 transition font-bold text-lg"
              >
                Xidmətlərə Baxın
              </a>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-gray-200">
              <div>
                <p className="text-2xl font-bold text-teal-600">500+</p>
                <p className="text-sm text-gray-600">Məmnun Müştəri</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-teal-600">24/7</p>
                <p className="text-sm text-gray-600">Mövcud</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-teal-600">15 dəq</p>
                <p className="text-sm text-gray-600">Orta Gözləmə</p>
              </div>
            </div>
          </div>

          <div className="relative hidden md:block">
            <div className="absolute inset-0 bg-gradient-to-br from-teal-200 to-teal-100 rounded-3xl blur-3xl opacity-40"></div>
            <div className="relative bg-gradient-to-br from-teal-500 to-teal-600 rounded-3xl p-8 text-white space-y-6 flex items-center justify-center">
              <img src="/WhatsApp_Image_2026-04-04_at_15.13.33_(1).jpeg" alt="Səyyar Analiz" className="w-full h-full object-cover rounded-2xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
