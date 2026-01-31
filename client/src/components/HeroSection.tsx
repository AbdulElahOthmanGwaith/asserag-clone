export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(/images/hero-medical-factory.jpg)',
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          كل ما تحتاجه لبناء
          <br />
          <span className="text-secondary">مصنع طبي احترافي</span>
        </h1>
        
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-gray-100">
          نبني مصانع طبية تسمح لعملائنا بتحقيق رؤيتهم
        </p>

        <button className="bg-white text-primary px-8 py-3 rounded font-bold text-lg hover:shadow-lg transition-all inline-block">
          تواصل معنا
        </button>
      </div>
    </section>
  );
}
