import { Users, Heart, Activity, Clock } from 'lucide-react';

const audiences = [
  {
    icon: Clock,
    title: 'Məşğul Müəssisəçilər',
    description: 'Klinika ziyarətlərini aradan qaldırıb vaxt qurtarın. İş saatlarında rahat test olun',
    color: 'from-orange-50 to-orange-100',
    iconBg: 'bg-orange-100',
    iconColor: 'text-orange-600'
  },
  {
    icon: Users,
    title: 'Yaşlı İnsanlar',
    description: 'Tibbi mərkəzlərə getməyin stress və fiziki zoraqlığı olmadan evdə rahat test',
    color: 'from-green-50 to-green-100',
    iconBg: 'bg-green-100',
    iconColor: 'text-green-600'
  },
  {
    icon: Activity,
    title: 'Yatmış Xəstələr',
    description: 'Peşəkar tibbi komanda sizə gəlir, lazımi avadanlıq və steril şərait təmin olunur',
    color: 'from-red-50 to-red-100',
    iconBg: 'bg-red-100',
    iconColor: 'text-red-600'
  },
  {
    icon: Heart,
    title: 'Hamilə Qadınlar',
    description: 'Hamiləlik zamanı təhlükəsiz, rahat test, stress və mərkəzə getmə təvəkkəlü olmadan',
    color: 'from-pink-50 to-pink-100',
    iconBg: 'bg-pink-100',
    iconColor: 'text-pink-600'
  }
];

export default function WhoWeServe() {
  return (
    <section id="who-we-serve" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Kimə Xidmət Edirik</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Səyyar laboratoriya xidmətimiz rahatçılığı, komfortunu və keyfiyyətli sağlıq xidmətini qiymətləndirən hər kəs üçün nəzərdə tutulmuşdur
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {audiences.map((audience, index) => {
            const Icon = audience.icon;
            return (
              <div
                key={index}
                className={`bg-gradient-to-br ${audience.color} border border-gray-200 rounded-xl p-8 hover:shadow-lg hover:scale-105 transition-all duration-300`}
              >
                <div className={`w-14 h-14 ${audience.iconBg} rounded-lg flex items-center justify-center mb-4`}>
                  <Icon className={audience.iconColor} size={28} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{audience.title}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{audience.description}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-white rounded-2xl border border-gray-200 p-8 md:p-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-teal-600 mb-2">💙</div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Komfort Önə Çəkilir</h4>
              <p className="text-gray-600">Sizin komfortu və rahatçılığı bizim prioritetimizdir</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-teal-600 mb-2">✓</div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Dəqiqlik Qəbul</h4>
              <p className="text-gray-600">Etibar edə biləcəyiniz peşəkar nəticələr</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-teal-600 mb-2">🚗</div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Tam Səyyar</h4>
              <p className="text-gray-600">Biz sizə gəlirik, Azərbaycanın hər yerində</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
