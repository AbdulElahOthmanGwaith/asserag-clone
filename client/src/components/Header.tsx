import { useState, useEffect } from 'react';
import { Menu, X, Globe, Phone } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'الرئيسية', href: '#hero' },
    { label: 'الخدمات', href: '#services' },
    { label: 'المشاريع', href: '#projects' },
    { label: 'عن الشركة', href: '#about' },
    { label: 'اتصل بنا', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="bg-primary p-2 rounded-xl group-hover:rotate-12 transition-transform">
              <img 
                src="/images/logo.png" 
                alt="Asserag Logo" 
                className="h-10 w-auto brightness-0 invert"
              />
            </div>
            <div className="flex flex-col">
              <span className={`text-xl font-black tracking-tighter font-cairo ${isScrolled ? 'text-primary' : 'text-white'}`}>
                السراج
              </span>
              <span className={`text-[10px] font-bold uppercase tracking-[0.2em] ${isScrolled ? 'text-secondary' : 'text-secondary'}`}>
                Industrial
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`text-sm font-bold font-cairo transition-all hover:text-secondary relative group ${
                  isScrolled ? 'text-slate-700' : 'text-white'
                }`}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden lg:flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Globe size={18} className={isScrolled ? 'text-primary' : 'text-white'} />
              <div className="flex gap-1 text-xs font-bold">
                <button className="text-secondary">AR</button>
                <span className="text-gray-400">/</span>
                <button className={isScrolled ? 'text-gray-400' : 'text-gray-300'}>EN</button>
              </div>
            </div>
            <a 
              href="tel:+967777603050"
              className="bg-secondary hover:bg-secondary/80 text-white px-6 py-3 rounded-xl font-bold text-sm flex items-center gap-2 transition-all shadow-lg shadow-secondary/20"
            >
              <Phone size={16} />
              إتصل بنا
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden p-2 rounded-lg ${isScrolled ? 'text-primary' : 'text-white'}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-2xl border-t border-gray-100 animate-fade-in">
            <nav className="p-6 flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-slate-800 hover:text-secondary font-bold font-cairo py-2 border-b border-gray-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="flex items-center justify-between mt-4">
                <div className="flex gap-4">
                  <button className="text-secondary font-bold">العربية</button>
                  <button className="text-gray-400 font-bold">English</button>
                </div>
                <a 
                  href="tel:+967777603050"
                  className="bg-primary text-white px-6 py-3 rounded-xl font-bold text-sm"
                >
                  إتصل بنا
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
