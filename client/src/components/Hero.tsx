import React from 'react';
import { ArrowLeft, ShieldCheck, Zap, Award } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden bg-slate-900">
      {/* Video Background with better overlay */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-60"
        >
          <source src="/videos/hero_pharma.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/40 to-slate-900/90" />
      </div>

      {/* Content */}
      <div className="relative z-20 h-full container mx-auto px-4 flex flex-col justify-center">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 border border-secondary/30 text-secondary mb-8 animate-fade-in">
            <ShieldCheck size={18} />
            <span className="text-sm font-bold tracking-wider uppercase font-cairo">الريادة في التجهيزات الصناعية</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 font-cairo leading-[1.1] animate-fade-in-up">
            السراج للتجهيزات <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-l from-secondary to-red-500">الصناعية</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 font-cairo max-w-2xl leading-relaxed animate-fade-in-up delay-200">
            ليست مجرد شركة، بل هي منارة في عالم الصناعة، تضيء دروب الجودة والتميز من خلال حلول هندسية متكاملة تجمع بين الدقة والمتانة.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 animate-fade-in-up delay-500">
            <a
              href="#contact"
              className="group bg-secondary hover:bg-secondary/90 text-white text-lg font-bold px-10 py-5 rounded-2xl transition-all transform hover:-translate-y-1 flex items-center justify-center gap-3 shadow-xl shadow-secondary/20 font-cairo"
            >
              إبدأ مشروعك معنا
              <ArrowLeft className="group-hover:-translate-x-2 transition-transform" />
            </a>
            <a
              href="#projects"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white text-lg font-bold px-10 py-5 rounded-2xl border border-white/20 transition-all flex items-center justify-center gap-3 font-cairo"
            >
              استعرض سابقة أعمالنا
            </a>
          </div>

          {/* Trust Badges */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in-up delay-700">
            <div className="flex items-center gap-3 text-white/60">
              <Award size={24} className="text-secondary" />
              <span className="text-sm font-bold font-cairo">معايير GMP</span>
            </div>
            <div className="flex items-center gap-3 text-white/60">
              <Zap size={24} className="text-secondary" />
              <span className="text-sm font-bold font-cairo">حلول ذكية</span>
            </div>
            <div className="flex items-center gap-3 text-white/60">
              <ShieldCheck size={24} className="text-secondary" />
              <span className="text-sm font-bold font-cairo">ضمان الجودة</span>
            </div>
            <div className="flex items-center gap-3 text-white/60">
              <Award size={24} className="text-secondary" />
              <span className="text-sm font-bold font-cairo">دعم فني 24/7</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
        <span className="text-[10px] text-white/40 uppercase tracking-[0.3em] font-bold">Scroll</span>
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1.5">
          <div className="w-1 h-2 bg-secondary rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
