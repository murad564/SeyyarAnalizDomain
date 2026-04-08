import { useState } from 'react';
import { Menu, X, Phone, Mail, MapPin, Clock, CheckCircle, Users, Heart, Zap } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import WhoWeServe from './components/WhoWeServe';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="w-full bg-white">
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Hero />
      <Services />
      <WhoWeServe />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
