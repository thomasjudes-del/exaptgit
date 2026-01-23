
import React, { useState, useEffect } from 'react';
import { 
  Globe, 
  Leaf, 
  Lightbulb, 
  Rocket, 
  Layers, 
  Zap, 
  ChevronRight, 
  Menu, 
  X, 
  ArrowUpRight 
} from 'lucide-react';
import { translations, Language } from './translations';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('en');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const t = translations[lang];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLang = () => {
    setLang(prev => (prev === 'en' ? 'fr' : 'en'));
  };

  const navLinks = [
    { name: t.nav.definition, href: '#definition' },
    { name: t.nav.lgi, href: '#lgi' },
    { name: t.nav.services, href: '#services' },
  ];

  return (
    <div className="min-h-screen selection:bg-emerald-100 selection:text-emerald-900">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass py-3' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center text-white shadow-lg">
              <Zap size={24} />
            </div>
            <span className="text-2xl font-bold tracking-tight text-slate-900">
              Exaptation
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-sm font-medium text-slate-600 hover:text-emerald-600 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <button 
              onClick={toggleLang}
              className="flex items-center space-x-1 px-3 py-1 rounded-full border border-slate-200 hover:bg-slate-100 transition-colors text-xs font-bold uppercase tracking-wider text-slate-700"
            >
              <Globe size={14} />
              <span>{lang}</span>
            </button>
            <a 
              href="#contact" 
              className="px-5 py-2.5 bg-slate-900 text-white rounded-full text-sm font-semibold hover:bg-slate-800 transition-all shadow-md active:scale-95"
            >
              {t.cta.button}
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center space-x-4">
            <button onClick={toggleLang} className="text-xs font-bold uppercase text-slate-700 border border-slate-200 px-2 py-1 rounded">
              {lang}
            </button>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-900">
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden glass absolute top-full left-0 right-0 border-t border-slate-100 p-6 flex flex-col space-y-4 animate-in fade-in slide-in-from-top-4 duration-300">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-lg font-medium text-slate-800"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact" 
              className="block w-full text-center py-3 bg-slate-900 text-white rounded-xl font-bold"
              onClick={() => setIsMenuOpen(false)}
            >
              {t.cta.button}
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        {/* Background blobs */}
        <div className="absolute top-0 right-0 -z-10 w-1/2 h-1/2 bg-emerald-50 rounded-full blur-3xl opacity-60 transform translate-x-1/4 -translate-y-1/4"></div>
        <div className="absolute bottom-0 left-0 -z-10 w-1/3 h-1/3 bg-blue-50 rounded-full blur-3xl opacity-60 transform -translate-x-1/4 translate-y-1/4"></div>
        
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center space-x-2 bg-emerald-50 text-emerald-700 px-4 py-1.5 rounded-full text-sm font-bold mb-6 animate-bounce">
            <Rocket size={16} />
            <span>{lang === 'en' ? 'Launch V0.1' : 'Lancement V0.1'}</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-8 max-w-4xl mx-auto leading-tight">
            {t.hero.title}
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 max-w-2xl mx-auto mb-12 leading-relaxed font-light">
            {t.hero.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a href="#services" className="w-full sm:w-auto px-8 py-4 bg-emerald-600 text-white rounded-full text-lg font-bold hover:bg-emerald-700 transition-all shadow-xl shadow-emerald-200 active:scale-95 flex items-center justify-center group">
              {t.nav.services}
              <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#definition" className="w-full sm:w-auto px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-full text-lg font-bold hover:bg-slate-50 transition-all active:scale-95">
              {t.nav.definition}
            </a>
          </div>
        </div>
      </section>

      {/* Definition Section */}
      <section id="definition" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <div className="relative">
                <img 
                  src="https://picsum.photos/seed/evolution/800/800" 
                  alt="Evolutionary inspiration" 
                  className="rounded-3xl shadow-2xl relative z-10"
                />
                <div className="absolute -top-4 -left-4 w-full h-full bg-emerald-100 rounded-3xl -z-10 transform -rotate-3"></div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <span className="text-emerald-600 font-bold tracking-widest uppercase text-sm mb-4 block">
                {t.definition.origin}
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 font-serif italic">
                {t.definition.title}
              </h2>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p className="p-6 bg-slate-50 rounded-2xl border-l-4 border-emerald-500 italic">
                  "{t.definition.content}"
                </p>
                <p>
                  {t.definition.mission}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LGI Link Section */}
      <section id="lgi" className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-emerald-900/10 -skew-x-12 transform translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                {t.lgi.title}
              </h2>
              <p className="text-xl text-slate-300 mb-6 leading-relaxed">
                {t.lgi.content}
              </p>
              <p className="text-slate-400 leading-relaxed mb-10">
                {t.lgi.experience}
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="px-4 py-2 bg-slate-800 rounded-lg text-sm border border-slate-700">Horizon 2020</div>
                <div className="px-4 py-2 bg-slate-800 rounded-lg text-sm border border-slate-700">Horizon Europe</div>
                <div className="px-4 py-2 bg-slate-800 rounded-lg text-sm border border-slate-700">Circular Economy</div>
                <div className="px-4 py-2 bg-slate-800 rounded-lg text-sm border border-slate-700">Deep Tech</div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-emerald-600 p-8 rounded-3xl flex flex-col justify-between aspect-square transform hover:-translate-y-2 transition-transform">
                <Globe size={40} className="mb-4" />
                <div>
                  <div className="text-4xl font-bold mb-1">15+</div>
                  <div className="text-sm opacity-80 uppercase tracking-wider font-semibold">Years Exp</div>
                </div>
              </div>
              <div className="bg-slate-800 p-8 rounded-3xl flex flex-col justify-between aspect-square transform translate-y-12 hover:-translate-y-2 transition-transform">
                <Layers size={40} className="mb-4 text-emerald-400" />
                <div>
                  <div className="text-4xl font-bold mb-1">200+</div>
                  <div className="text-sm opacity-60 uppercase tracking-wider font-semibold">Partners</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              {t.services.title}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Service 1: Creation */}
            <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-slate-100 group flex flex-col h-full">
              <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 mb-6 group-hover:scale-110 transition-transform">
                <Lightbulb size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{t.services.creation.title}</h3>
              <p className="text-slate-600 leading-relaxed flex-grow">
                {t.services.creation.description}
              </p>
            </div>

            {/* Service 2: Incubation */}
            <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-slate-100 group flex flex-col h-full">
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform">
                <Leaf size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{t.services.incubation.title}</h3>
              <p className="text-slate-600 leading-relaxed flex-grow">
                {t.services.incubation.description}
              </p>
            </div>

            {/* Service 3: Acceleration */}
            <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-slate-100 group flex flex-col h-full">
              <div className="w-14 h-14 bg-purple-50 rounded-2xl flex items-center justify-center text-purple-600 mb-6 group-hover:scale-110 transition-transform">
                <Rocket size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{t.services.acceleration.title}</h3>
              <p className="text-slate-600 leading-relaxed flex-grow">
                {t.services.acceleration.description}
              </p>
            </div>

            {/* Service 4: As a Service */}
            <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-slate-100 group flex flex-col h-full">
              <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center text-orange-600 mb-6 group-hover:scale-110 transition-transform">
                <ArrowUpRight size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{t.services.asAService.title}</h3>
              <p className="text-slate-600 leading-relaxed flex-grow">
                {t.services.asAService.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-gradient-to-br from-emerald-600 to-blue-700 rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-bold mb-10">
                {t.cta.title}
              </h2>
              <button className="px-10 py-5 bg-white text-emerald-700 rounded-full text-xl font-bold hover:bg-slate-50 transition-all shadow-lg active:scale-95 flex items-center mx-auto">
                {t.cta.button}
                <ArrowUpRight className="ml-2" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-slate-500 text-sm">
          <div className="flex items-center space-x-2">
            <Zap size={20} className="text-emerald-600" />
            <span className="font-bold text-slate-900">Exaptation</span>
          </div>
          <p>{t.footer.rights}</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-emerald-600 transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-emerald-600 transition-colors">Twitter</a>
            <a href="https://lgi-consulting.com" target="_blank" className="hover:text-emerald-600 transition-colors font-semibold">LGI Sustainable Innovation</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
