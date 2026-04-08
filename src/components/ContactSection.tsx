import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', phone: '', email: '', service: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-teal-600 to-teal-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Xidmət Sifariş Edin</h2>
              <p className="text-teal-100 text-lg">
                Səyyar laboratoriya xidmətini istədiyiniz vaxt və yerdə sifariş etmək üçün bizə müraciət edin
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Telefon</h3>
                  <p className="text-teal-100">+994 50 XXX XX XX</p>
                  <p className="text-teal-100 text-sm mt-1">24/7 Mövcuddur</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Email</h3>
                  <p className="text-teal-100">info@seyaranaliz.az</p>
                  <p className="text-teal-100 text-sm mt-1">1 saat içində cavab</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Yer</h3>
                  <p className="text-teal-100">Ümumbəşəri Xidmət</p>
                  <p className="text-teal-100 text-sm mt-1">Azərbaycanda hər yerdə</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Saat</h3>
                  <p className="text-teal-100">24/7 Açıq</p>
                  <p className="text-teal-100 text-sm mt-1">Hər gün açıqdır</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 border border-white border-opacity-20">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="w-16 h-16 bg-green-400 rounded-full flex items-center justify-center mb-4">
                  <Send size={32} className="text-green-900" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Sifariş Alındı!</h3>
                <p className="text-teal-100">
                  Təşəkkür edirik! Səyyar laboratoriya xidməti təyinatınızı təsdiq etmək üçün tezliklə siz bizi arayacağız.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold mb-2">Ad Soyad</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-90 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-300 focus:bg-white transition"
                    placeholder="Sizin adınız"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Telefon</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-90 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-300 focus:bg-white transition"
                      placeholder="+994 50 XXX XX XX"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-90 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-300 focus:bg-white transition"
                      placeholder="sizin@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Xidmət Növü</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-90 text-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-300 focus:bg-white transition"
                  >
                    <option value="">Xidməti seçin</option>
                    <option value="blood">Qan Testləri</option>
                    <option value="urine">Sidik Analizi</option>
                    <option value="hormonal">Hormonal Testlər</option>
                    <option value="biochemistry">Biokimya</option>
                    <option value="comprehensive">Hərtərəfli Panel</option>
                    <option value="other">Digər</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Əlavə Məlumat</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-90 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-300 focus:bg-white transition resize-none"
                    placeholder="İstədiyiniz vaxt, yer və ya xüsusi tələbləriniz haqqında bizə məlumat verin..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-white text-teal-600 py-3 rounded-lg font-bold hover:bg-teal-50 transition flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  Xidmət Sifariş Edin
                </button>

                <p className="text-xs text-teal-100 text-center">
                  Biz sizin məxfiliyətinizə hörmət edirik. Sizin məlumatınız təhlükəsiz və ehtiyatsızlıqdır.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
