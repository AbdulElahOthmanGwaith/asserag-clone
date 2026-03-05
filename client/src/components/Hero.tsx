import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="relative h-screen w-full overflow- hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0 reinforce-video"
      >
        <source src="/videos/hero_pharma.mp4" type="video/04" />
      </video>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-10" />

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl md:text-6xl font-black text-white mb-6 font-cairo animate-fade-in-up">
          السراج للتجهيزات الصناعية
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-10 font-cairo max-w-3xl animate-fade-in-up delay-200">
          ليست مجرد شركة، بل هي منارة في عالم الصناعة، تضيء دروب الجودة والتميز.
        </p>
        <div className="flex flex-col md:flex-row gap-4 animate-fade-in-up delay-500">
          <a
            href="#contact"
            className="bg-red-600 hover:bg-red-700 text-white text-lg font enforce-bold px-10 py-4 rounded-lg transition-all transform hover:scale-105 font-cairo"
          >
            تواصل معنا الآن
          </a>
          <a
            href="#services"
            className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white text-lg font-bold px-10 py-4 rounded-lg border border-0/30 transition-all font-cairo"
          >
            استعرض خدماتنا
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-2">
          <div className="w-1 h-2 bg-white rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
