import React, { useState, useEffect } from 'react';
import { 
  Globe, 
  Leaf, 
  Lightbulb, 
  Rocket, 
  Layers, 
  ChevronRight, 
  Menu, 
  X, 
  ArrowUpRight,
  Linkedin,
  ChevronDown
} from 'lucide-react';
import { translations, Language } from './translations';
import olivierPhoto from './src/assets/images/olivier_fauchet.jpg';
import manuelPhoto from './src/assets/images/manuel_astier.jpg';
import sarahPhoto from './src/assets/images/sarah_crosnier.jpg';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('en');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  
  const t = translations[lang];

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLang = () => {
    setLang(prev => (prev === 'en' ? 'fr' : 'en'));
  };

  const navLinks = [
    { name: t.nav.services, href: '#services' },
    { name: t.nav.playground, href: '#playground' },
    { name: t.nav.definition, href: '#definition' },
    { name: t.nav.team, href: '#team' },
    { name: t.nav.lgi, href: '#lgi' },
  ];

  const logoUrl = "https://lgi.earth/images/expectation/Exaptation_Horizontal.png";
  const contactEmail = "mailto:thomas@exaptation.studio";
  const displayTargetLang = lang === 'en' ? 'fr' : 'en';

  // LGI Hub Tags with specific URLs
  const lgiHubs = [
    { name: 'Circular Economy', url: 'https://lgi.earth/hub-raw-material-and-circular-value-chains' },
    { name: 'Nature Positive', url: 'https://lgi.earth/hub-nature-positive-action' },
    { name: 'Decarbonation', url: 'https://lgi.earth/hub-decarbonisation' },
    { name: 'Resilience', url: 'https://lgi.earth/hub-resilience' },
    { name: 'Digital', url: null },
    { name: 'One Health', url: null },
    { name: 'Social & Culture', url: null },
    { name: 'Raw Materials', url: 'https://lgi.earth/hub-raw-material-and-circular-value-chains' },
  ];

  // Team Member Component with Image Fallback
  const TeamMember = ({ name, role, linkedin, imageUrl, initials, colorClass }: { 
    name: string, 
    role: string, 
    linkedin: string, 
    imageUrl: string, 
    initials: string,
    colorClass: string 
  }) => {
    const [imgError, setImgError] = useState(false);

    return (
      <div className="bg-white p-6 rounded-3xl shadow-sm hover:shadow-md transition-all text-center group flex flex-col items-center h-full">
        <div className={`w-28 h-28 ${colorClass} rounded-full mb-4 overflow-hidden shadow-inner border-2 border-white flex-shrink-0`}>
          {!imgError ? (
            <img 
              src={imageUrl} 
              alt={name} 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              referrerPolicy="no-referrer"
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center font-bold text-xl uppercase tracking-tighter">
              {initials}
            </div>
          )}
        </div>
        <h3 className="font-bold text-slate-900 text-lg leading-tight mb-1">{name}</h3>
        <p className="text-xs text-slate-500 mb-4 h-8 flex items-center justify-center leading-tight">
          {role}
        </p>
        <a href={linkedin} target="_blank" rel="noopener noreferrer" className="mt-auto inline-flex text-slate-300 hover:text-[#0077B5] transition-colors">
          <Linkedin size={20} />
        </a>
      </div>
    );
  };

  return (
    <div className="min-h-screen selection:bg-emerald-100 selection:text-emerald-900">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'glass py-3 shadow-lg' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center">
            <a href="/" className="block">
              <img 
                src={logoUrl} 
                alt="Exaptation Studio" 
                className={`h-10 md:h-12 w-auto object-contain transition-all duration-500 ${!scrolled ? 'brightness-0 invert' : ''}`}
              />
            </a>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className={`text-sm font-medium transition-colors whitespace-nowrap ${scrolled ? 'text-slate-600 hover:text-emerald-600' : 'text-white/80 hover:text-white'}`}
              >
                {link.name}
              </a>
            ))}
            <div className={`h-6 w-px mx-2 ${scrolled ? 'bg-slate-200' : 'bg-white/20'}`}></div>
            <button 
              onClick={toggleLang}
              className={`flex items-center space-x-1 px-3 py-1 rounded-full border transition-colors text-xs font-bold uppercase tracking-wider ${scrolled ? 'border-slate-200 text-slate-700 hover:bg-slate-100' : 'border-white/30 text-white hover:bg-white/10'}`}
              title={lang === 'en' ? 'Passer en Français' : 'Switch to English'}
            >
              <Globe size={14} />
              <span>{displayTargetLang}</span>
            </button>
            <a 
              href={contactEmail}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all shadow-md active:scale-95 whitespace-nowrap ${scrolled ? 'bg-slate-900 text-white hover:bg-slate-800' : 'bg-white text-slate-900 hover:bg-slate-100'}`}
            >
              {t.nav.contact}
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center space-x-4">
            <button onClick={toggleLang} className={`text-xs font-bold uppercase border px-2 py-1 rounded ${scrolled ? 'text-slate-700 border-slate-200' : 'text-white border-white/30'}`}>
              {displayTargetLang}
            </button>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={scrolled ? 'text-slate-900' : 'text-white'}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden glass absolute top-full left-0 right-0 border-t border-slate-100 p-6 flex flex-col space-y-4 animate-in fade-in slide-in-from-top-4 duration-300 shadow-2xl">
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
              href={contactEmail}
              className="block w-full text-center py-3 bg-slate-900 text-white rounded-xl font-bold"
              onClick={() => setIsMenuOpen(false)}
            >
              {t.nav.contact}
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section - WOW Version with Parallax */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-slate-900">
        {/* Parallax Background */}
        <div 
          className="absolute inset-0 z-0 scale-110"
          style={{
            transform: `translateY(${scrollY * 0.4}px)`,
            willChange: 'transform'
          }}
        >
          <img 
            src="https://images.unsplash.com/photo-1617538716228-213f468a2c6c?q=80&w=1200&auto=format&fit=crop" 
            alt="Conceptual Network Structure" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/20 to-slate-900"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10 pt-20">
          <div className="inline-flex items-center space-x-2 bg-emerald-500/20 backdrop-blur-md text-emerald-300 px-4 py-1.5 rounded-full text-sm font-bold mb-8 border border-emerald-500/30 animate-bounce cursor-default">
            <Rocket size={16} />
            <span className="tracking-wide">{lang === 'en' ? 'LAUNCH V0.1' : 'LANCEMENT V0.1'}</span>
          </div>
          
          <h1 className="text-5xl md:text-8xl font-bold tracking-tight text-white mb-8 max-w-5xl mx-auto leading-[0.9] animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
            {t.hero.title}
          </h1>
          
          <p className="text-xl md:text-3xl text-white/80 max-w-3xl mx-auto mb-14 leading-relaxed font-light animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-500">
            {t.hero.subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 animate-in fade-in slide-in-from-bottom-16 duration-1000 delay-700">
            <a href="#services" className="w-full sm:w-auto px-10 py-5 bg-emerald-600 text-white rounded-full text-xl font-bold hover:bg-emerald-500 hover:scale-105 transition-all shadow-xl shadow-emerald-900/40 active:scale-95 flex items-center justify-center group">
              {t.nav.services}
              <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#definition" className="w-full sm:w-auto px-10 py-5 bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-full text-xl font-bold hover:bg-white/20 transition-all active:scale-95">
              {t.nav.definition}
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center space-y-2 opacity-50 animate-pulse">
          <span className="text-white text-[10px] uppercase tracking-widest font-bold">Scroll</span>
          <ChevronDown className="text-white animate-bounce" />
        </div>
      </section>

      {/* SECTION 1 — Proud to be European */}
      <section className="py-32 bg-white relative z-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-10 leading-tight">
                {t.proud.title}
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed font-light">
                {t.proud.text}
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1559589688-6ba6beafe1e5?q=80&w=1584&auto=format&fit=crop" 
                alt="European sustainable infrastructure" 
                className="rounded-3xl shadow-2xl w-full h-auto object-cover aspect-[4/3] relative z-10"
              />
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-emerald-100 rounded-full -z-0 blur-3xl opacity-60"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section (Our Multidimensional Studio) */}
      <section id="services" className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              {t.services.title}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-slate-100 group flex flex-col h-full">
              <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 mb-6 group-hover:scale-110 transition-transform">
                <Lightbulb size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{t.services.creation.title}</h3>
              <p className="text-slate-600 leading-relaxed flex-grow">
                {t.services.creation.description}
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-slate-100 group flex flex-col h-full">
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform">
                <Leaf size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{t.services.incubation.title}</h3>
              <p className="text-slate-600 leading-relaxed flex-grow">
                {t.services.incubation.description}
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-slate-100 group flex flex-col h-full">
              <div className="w-14 h-14 bg-purple-50 rounded-2xl flex items-center justify-center text-purple-600 mb-6 group-hover:scale-110 transition-transform">
                <Rocket size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{t.services.acceleration.title}</h3>
              <p className="text-slate-600 leading-relaxed flex-grow">
                {t.services.acceleration.description}
              </p>
            </div>

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

      {/* SECTION 2 — Exploration Playground */}
      <section id="playground" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              {t.playground.title}
            </h2>
            <div className="max-w-3xl mx-auto space-y-4">
              <p className="text-xl text-slate-600 italic leading-relaxed">
                "{t.playground.quote}"
              </p>
              <p className="text-lg text-slate-500 leading-relaxed">
                {t.playground.description}
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Daïmons */}
            <a href="https://www.daimons.ai/" target="_blank" rel="noopener noreferrer" className="group bg-slate-50 rounded-3xl overflow-hidden border border-slate-100 hover:shadow-xl transition-all flex flex-col h-full">
              <div className="h-48 bg-slate-200">
                <img src="https://plus.unsplash.com/premium_photo-1683121710572-7723bd2e235d?q=80&w=1632&auto=format&fit=crop" alt="Daïmons" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6 flex-grow">
                <h3 className="text-xl font-bold text-slate-900 mb-2 flex items-center">
                  Daimons <ArrowUpRight size={18} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-sm text-slate-600">{t.playground.daimons}</p>
              </div>
            </a>

            {/* KAØS */}
            <a href="https://kaosdecoded.com" target="_blank" rel="noopener noreferrer" className="group bg-slate-50 rounded-3xl overflow-hidden border border-slate-100 hover:shadow-xl transition-all flex flex-col h-full">
              <div className="h-48 bg-slate-200">
                <img src="https://images.unsplash.com/photo-1603880921125-88ce2fc04673?q=80&w=1074&auto=format&fit=crop" alt="KAØS" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6 flex-grow">
                <h3 className="text-xl font-bold text-slate-900 mb-2 flex items-center">
                  KAØS <ArrowUpRight size={18} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-sm text-slate-600">{t.playground.kaos}</p>
              </div>
            </a>

            {/* Green Claims Fix */}
            <a href="/green-claims-fix/" className="group bg-slate-50 rounded-3xl overflow-hidden border border-slate-100 hover:shadow-xl transition-all flex flex-col h-full">
              <div className="h-48 bg-slate-200 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1200&auto=format&fit=crop" alt="Green Claims Fix" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6 flex-grow">
                <h3 className="text-xl font-bold text-slate-900 mb-2 flex items-center">
                  Green Claims Fix <ArrowUpRight size={18} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-sm text-slate-600">{t.playground.greenClaimsFix}</p>
              </div>
            </a>

            {/* Weathered */}
            <div className="bg-slate-50 rounded-3xl overflow-hidden border border-slate-100 flex flex-col h-full">
              <div className="h-48 bg-slate-200">
                <img src="https://plus.unsplash.com/premium_photo-1733349608730-92c509594d76?q=80&w=1062&auto=format&fit=crop" alt="Weathered" className="w-full h-full object-cover" />
              </div>
              <div className="p-6 flex-grow">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Weathered</h3>
                <p className="text-sm text-slate-600">{t.playground.weathered}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Definition Section (Biology to Business) */}
      <section id="definition" className="py-24 bg-white relative border-t border-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <div className="relative">
                <a 
                  href="https://www.letstalkacademy.com/exaptation-evolutionary-biology-traits-new-functions/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block group"
                >
                  <img 
                    src="https://images.unsplash.com/photo-1737998245384-1db4d24f74d2?q=80&w=687&auto=format&fit=crop" 
                    alt="Biological Exaptation" 
                    className="rounded-3xl shadow-2xl relative z-10 w-full h-[500px] object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </a>
                <div className="absolute -top-4 -left-4 w-full h-full bg-emerald-50 rounded-3xl -z-10 transform -rotate-2 md:scale-105"></div>
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
                <p className="p-6 bg-slate-50 rounded-2xl border-l-4 border-emerald-500 italic shadow-sm">
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

      {/* SECTION 3 — Team */}
      <section id="team" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              {t.team.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <TeamMember 
              name="Thomas Judes"
              role="Director"
              linkedin="https://www.linkedin.com/in/thomas-judes-8532351/"
              imageUrl="https://my.lgi.app/_content/avatar/54704/myAvatar.png"
              initials="TJ"
              colorClass="bg-emerald-100 text-emerald-700"
            />
            
            <TeamMember 
              name="Vincent Chauvet"
              role="Board Member"
              linkedin="https://www.linkedin.com/in/vincentchauvet/"
              imageUrl="https://my.lgi.app/_content/avatar/1/avatarWebsite.png"
              initials="VC"
              colorClass="bg-blue-100 text-blue-700"
            />

            <TeamMember 
              name="Pierre Cattoire"
              role="Senior Advisor"
              linkedin="https://www.linkedin.com/in/pierre-cattoire-78b17b1/"
              imageUrl="https://my.lgi.app/_content/avatar/52628/avatarWebsite.png"
              initials="PC"
              colorClass="bg-indigo-100 text-indigo-700"
            />

            <TeamMember 
              name="Olivier Fauchet"
              role="Innovation and Operations"
              linkedin="https://www.linkedin.com/in/olivier-fauchet-958788195/?locale=en"
              imageUrl={olivierPhoto}
              initials="OF"
              colorClass="bg-purple-100 text-purple-700"
            />

            <TeamMember 
              name="Dain Jung"
              role="Strategy & Foresight"
              linkedin="https://www.linkedin.com/in/dain-jung-8827a21aa/"
              imageUrl="https://my.lgi.app/_content/avatar/54740/avatarWebsite.png"
              initials="DJ"
              colorClass="bg-orange-100 text-orange-700"
            />

            <TeamMember 
              name="Manuel Astier"
              role="Venture Builder Daïmons"
              linkedin="https://www.linkedin.com/in/maastier/"
              imageUrl={manuelPhoto}
              initials="MA"
              colorClass="bg-teal-100 text-teal-700"
            />

            <TeamMember 
              name="Sarah Crosnier de Bellaistre"
              role="Venture Builder"
              linkedin="https://www.linkedin.com/in/sarahdebellaistre/"
              imageUrl={sarahPhoto}
              initials="SC"
              colorClass="bg-rose-100 text-rose-700"
            />

            {/* Final Card with Background Image Transparency */}
            <a 
              href="https://lgi.earth/team" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="relative p-6 rounded-3xl shadow-lg flex items-center justify-center text-center overflow-hidden group min-h-[220px] bg-slate-900 h-full transform hover:scale-[1.02] transition-all"
            >
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1170&auto=format&fit=crop" 
                alt="LGI Team" 
                className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-110 opacity-40 group-hover:opacity-60"
              />
              <p className="relative z-10 font-bold text-white text-lg px-2 drop-shadow-lg group-hover:text-emerald-400 transition-colors">
                {t.team.lgiers}
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* LGI Link Section */}
      <section id="lgi" className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-emerald-900/10 -skew-x-12 transform translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <a 
                href="http://lgi.earth" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group block"
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-8 group-hover:text-emerald-400 transition-colors">
                  {t.lgi.title}
                </h2>
              </a>
              <p className="text-xl text-slate-300 mb-6 leading-relaxed">
                {t.lgi.content}
              </p>
              <p className="text-slate-400 leading-relaxed mb-10">
                {t.lgi.experience}
              </p>
              <div className="flex flex-wrap gap-4">
                {lgiHubs.map(hub => {
                  const baseClasses = "px-4 py-2 bg-slate-800 rounded-lg text-sm border border-slate-700 transition-all duration-300 whitespace-nowrap";
                  if (hub.url) {
                    return (
                      <a 
                        key={hub.name} 
                        href={hub.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={`${baseClasses} hover:bg-slate-700 hover:border-emerald-500/50 hover:text-emerald-300 shadow-sm`}
                      >
                        {hub.name}
                      </a>
                    );
                  }
                  return (
                    <div key={hub.name} className={baseClasses}>
                      {hub.name}
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <a 
                href="https://lgi.earth/story" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-emerald-600 p-8 rounded-3xl shadow-lg shadow-emerald-900/20 flex flex-col justify-between aspect-square transform hover:-translate-y-2 hover:scale-[1.02] transition-all group"
              >
                <Globe size={40} className="mb-4 group-hover:animate-pulse" />
                <div>
                  <div className="text-4xl font-bold mb-1">20+</div>
                  <div className="text-sm opacity-80 uppercase tracking-wider font-semibold">
                    {lang === 'en' ? 'Years Exp' : 'Années Exp'}
                  </div>
                </div>
              </a>
              <a 
                href="https://lgi.earth/clients" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-slate-800 p-8 rounded-3xl shadow-lg shadow-black/20 flex flex-col justify-between aspect-square transform translate-y-12 hover:translate-y-10 hover:scale-[1.02] transition-all group border border-transparent hover:border-emerald-500/50"
              >
                <Layers size={40} className="mb-4 text-emerald-400 group-hover:animate-pulse" />
                <div>
                  <div className="text-4xl font-bold mb-1">350+</div>
                  <div className="text-sm opacity-60 uppercase tracking-wider font-semibold">
                    {lang === 'en' ? 'Partners' : 'Partenaires'}
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="relative rounded-[3rem] p-12 md:p-20 text-center text-white overflow-hidden shadow-2xl bg-slate-900">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
              <img 
                src="https://images.unsplash.com/photo-1617538716228-213f468a2c6c?q=80&w=1200&auto=format&fit=crop" 
                alt="Exploration Background" 
                className="w-full h-full object-cover opacity-50"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/80 via-emerald-800/40 to-blue-900/80"></div>
            </div>
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-bold mb-10 drop-shadow-md">
                {t.cta.title}
              </h2>
              <a 
                href={contactEmail} 
                className="inline-flex items-center px-10 py-5 bg-white text-emerald-700 rounded-full text-xl font-bold hover:bg-slate-50 transition-all shadow-xl active:scale-95 mx-auto group"
              >
                {t.nav.contact}
                <ArrowUpRight className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-slate-500 text-sm">
          <div className="flex items-center">
            <img 
              src={logoUrl} 
              alt="Exaptation Studio Logo" 
              className="h-8 w-auto object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all"
            />
          </div>
          <p>{t.footer.rights}</p>
          <div className="flex space-x-6">
            <a href="http://lgi.earth" target="_blank" className="hover:text-emerald-600 transition-colors font-semibold">LGI Sustainable Innovation</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;