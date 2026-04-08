import { Droplet, Users, TrendingUp, Shield, Truck, Clock } from 'lucide-react';

const services = [
  {
    icon: Droplet,
    title: 'Nümunə Toplanması',
    description: 'Peşəkar laboratoriya nümunə toplanması - qan testləri, sidik analizi və s. yerində'
  },
  {
    icon: Shield,
    title: 'Steril və Təhlükəsiz',
    description: 'Bütün prosedurlar peşəkar tibbi mütəxəssislər tərəfindən tam steril şəraitdə həyata keçirilir'
  },
  {
    icon: Truck,
    title: 'Səyyar Xidmət',
    description: 'Müasir təchizatlandırılmış avtomobillər birbaşa sizin yerinizdə - evdə, işdə və ya digər yerlərdə'
  },
  {
    icon: Clock,
    title: 'Sürətli Nəticələr',
    description: 'Dəqiq test nəticələri mümkün olan ən qısa vaxtda çatdırılır'
  },
  {
    icon: TrendingUp,
    title: 'Hərtərəfli Testlər',
    description: 'Qan testləri, sidik analizi, hormonal testlər, biokimya və hərtərəfli sağliq panelləri'
  },
  {
    icon: Users,
    title: 'Keşikçi Komanda',
    description: 'Dəqiq nəticələr və peşəkar xidmətləri təmin edən təcrübəli tibbi mütəxəssislər'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Xidmətlərimiz</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Peşəkar qayğı və dəqiqliklə evinizdə çatdırılan tam laboratoriya testləri
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-8 hover:border-teal-300 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-teal-600 transition-colors">
                  <Icon className="text-teal-600 group-hover:text-white transition-colors" size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-r from-teal-600 to-teal-700 rounded-2xl p-8 md:p-12 text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-3">Nəticə Çatdırılması Variantları</h3>
          <p className="text-teal-100 mb-6">Test nəticələrinizi necə almaq istədiyinizi seçin</p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white bg-opacity-20 rounded-lg flex items-center justify-center font-bold">
                📧
              </div>
              <div>
                <p className="font-semibold">Email</p>
                <p className="text-teal-100 text-sm">Poçtunuza göndərilir</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white bg-opacity-20 rounded-lg flex items-center justify-center font-bold">
                💬
              </div>
              <div>
                <p className="font-semibold">WhatsApp</p>
                <p className="text-teal-100 text-sm">Ani mesajlaşdırma</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white bg-opacity-20 rounded-lg flex items-center justify-center font-bold">
                🔐
              </div>
              <div>
                <p className="font-semibold">Şəxsi Hesab</p>
                <p className="text-teal-100 text-sm">Təhlükəli portal girişi</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
