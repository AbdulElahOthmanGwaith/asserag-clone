import { useState } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink, Award, CheckCircle } from 'lucide-react';

export default function ProjectsGallery() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const projects = [
    {
      id: 1,
      title: 'مصنع الهلال للصناعات الدوائية',
      category: 'تجهيزات طبية وصناعية',
      description: 'مشروع متكامل لتأسيس وتجهيز خطوط الإنتاج في مصنع الهلال، مع الالتزام بأعلى معايير الجودة العالمية (GMP). شمل المشروع توريد وتركيب أنظمة التنقية والتعقيم المتقدمة.',
      stats: { area: '5000 م²', duration: '12 شهر', status: 'مكتمل' },
      images: [
        '/images/hero-medical-factory.jpg',
        '/images/industrial-design.jpg',
        '/images/team-collaboration.jpg',
      ],
    },
    {
      id: 2,
      title: 'المجلس الأعلى للعقاقير والمستلزمات الطبية',
      category: 'مختبرات وفحص جودة',
      description: 'تجهيز المختبرات المركزية للمجلس الأعلى بأحدث أجهزة الفحص والتحليل الكيميائي والبيولوجي. يعتبر هذا المرفق المرجعية الأولى لضمان جودة الأدوية في المنطقة.',
      stats: { area: '2500 م²', duration: '8 أشهر', status: 'مكتمل' },
      images: [
        '/images/industrial-design.jpg',
        '/images/hero-medical-factory.jpg',
        '/images/team-collaboration.jpg',
      ],
    },
    {
      id: 3,
      title: 'مجمع الشفاء الصناعي الطبي',
      category: 'بنية تحتية صناعية',
      description: 'تصميم وتنفيذ البنية التحتية الميكانيكية والكهربائية لمجمع الشفاء، بما يضمن استمرارية العمل وكفاءة استهلاك الطاقة في الظروف التشغيلية القصوى.',
      stats: { area: '8000 م²', duration: '18 شهر', status: 'مكتمل' },
      images: [
        '/images/team-collaboration.jpg',
        '/images/industrial-design.jpg',
        '/images/hero-medical-factory.jpg',
      ],
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const project = projects[currentSlide];

  return (
    <section id="projects" className="py-24 bg-slate-900 text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-black mb-4 font-cairo">
              مشاريعنا <span className="text-secondary">العملاقة</span>
            </h2>
            <p className="text-gray-400 text-lg font-cairo">
              نفخر بتنفيذ كبرى المشاريع الصناعية والطبية التي تساهم في نهضة القطاع الصناعي، مع الالتزام التام بالمواصفات العالمية.
            </p>
          </div>
          <div className="flex gap-4">
            <button 
              onClick={prevSlide}
              className="p-4 rounded-full border border-white/20 hover:bg-secondary hover:border-secondary transition-all group"
            >
              <ChevronRight size={24} className="group-hover:scale-110 transition-transform" />
            </button>
            <button 
              onClick={nextSlide}
              className="p-4 rounded-full border border-white/20 hover:bg-secondary hover:border-secondary transition-all group"
            >
              <ChevronLeft size={24} className="group-hover:scale-110 transition-transform" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Project Content */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="inline-block px-4 py-1 bg-secondary/20 text-secondary rounded-full text-sm font-bold mb-6">
              {project.category}
            </div>
            <h3 className="text-3xl font-bold mb-6 font-cairo leading-tight">
              {project.title}
            </h3>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed font-cairo">
              {project.description}
            </p>

            <div className="grid grid-cols-3 gap-6 mb-10">
              <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                <p className="text-gray-400 text-xs mb-1">المساحة</p>
                <p className="font-bold text-secondary">{project.stats.area}</p>
              </div>
              <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                <p className="text-gray-400 text-xs mb-1">المدة</p>
                <p className="font-bold text-secondary">{project.stats.duration}</p>
              </div>
              <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                <p className="text-gray-400 text-xs mb-1">الحالة</p>
                <p className="font-bold text-green-400 flex items-center gap-1">
                  <CheckCircle size={12} /> {project.stats.status}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <button className="bg-secondary hover:bg-secondary/80 text-white px-8 py-4 rounded-lg font-bold flex items-center gap-2 transition-all transform hover:-translate-y-1">
                تفاصيل المشروع <ExternalLink size={18} />
              </button>
              <button className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-bold border border-white/20 transition-all">
                جميع المشاريع
              </button>
            </div>
          </div>

          {/* Project Image Display */}
          <div className="lg:col-span-7 order-1 lg:order-2 relative">
            <div className="relative aspect-[16/10] rounded-3xl overflow-hidden shadow-2xl border-8 border-white/5">
              <img
                src={project.images[0]}
                alt={project.title}
                className="w-full h-full object-cover transition-all duration-700 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
              
              {/* Floating Badge */}
              <div className="absolute bottom-8 right-8 bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 flex items-center gap-4">
                <div className="bg-secondary p-3 rounded-xl">
                  <Award size={24} className="text-white" />
                </div>
                <div>
                  <p className="text-xs text-gray-300">شهادة الجودة</p>
                  <p className="font-bold">ISO 9001:2015</p>
                </div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-secondary/20 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary/30 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center gap-3 mt-16">
          {projects.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2 rounded-full transition-all duration-500 ${
                idx === currentSlide
                  ? 'bg-secondary w-12'
                  : 'bg-white/20 w-4 hover:bg-white/40'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
