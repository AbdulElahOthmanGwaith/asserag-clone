import { Factory, Settings, Wrench, Lightbulb, ShieldCheck, AirVent, ArrowLeft } from 'lucide-react';

const services = [
  {
    title: 'توريد معدات مصانع الأدوية',
    description: 'توفير أحدث المعدات الصناعية المتوافقة مع المعايير الدولية GMP لضمان أعلى مستويات الأمان والإنتاجية.',
    icon: <Factory className="w-10 h-10" />,
    color: 'bg-blue-500',
  },
  {
    title: 'تركيب وتشغيل المصانع',
    description: 'فريق هندسي متخصص لتركيب خطوط الإنتاج المعقدة وضمان تشغيلها بكفاءة عالية من اليوم الأول.',
    icon: <Settings className="w-10 h-10" />,
    color: 'bg-red-500',
  },
  {
    title: 'صيانة المعدات الصناعية',
    description: 'برامج صيانة وقائية وعلاجية شاملة لضمان استمرارية الإنتاج وتقليل فترات التوقف غير المخطط لها.',
    icon: <Wrench className="w-10 h-10" />,
    color: 'bg-amber-500',
  },
  {
    title: 'استشارات فنية وهندسية',
    description: 'دراسات جدوى وتصاميم هندسية متكاملة لمصانع الأدوية والمختبرات وفق أحدث التوجهات العالمية.',
    icon: <Lightbulb className="w-10 h-10" />,
    color: 'bg-emerald-500',
  },
  {
    title: 'غرف نظيفة (Clean Rooms)',
    description: 'تصميم وتنفيذ الغرف النظيفة بأنظمة عزل وتحكم متطورة تضمن بيئة عمل خالية من الملوثات.',
    icon: <ShieldCheck className="w-10 h-10" />,
    color: 'bg-indigo-500',
  },
  {
    title: 'أنظمة التكييف والتهوية',
    description: 'حلول HVAC متخصصة للمنشآت الصناعية والطبية تضمن جودة الهواء والتحكم الدقيق في الحرارة والرطوبة.',
    icon: <AirVent className="w-10 h-10" />,
    color: 'bg-cyan-500',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 font-cairo">
              خدماتنا <span className="text-secondary">المتكاملة</span>
            </h2>
            <p className="text-slate-600 text-lg font-cairo leading-relaxed">
              نقدم مجموعة شاملة من الخدمات الهندسية والصناعية التي تغطي كافة مراحل إنشاء وتشغيل المصانع الطبية، مع التركيز على الابتكار والجودة.
            </p>
          </div>
          <a href="#contact" className="hidden md:flex items-center gap-2 text-primary font-bold hover:text-secondary transition-colors font-cairo">
            اطلب استشارة فنية <ArrowLeft size={20} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group bg-white p-10 rounded-[32px] shadow-sm hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500 border border-slate-100 relative overflow-hidden"
            >
              {/* Hover Background Effect */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-l from-secondary to-primary transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
              
              <div className={`w-20 h-20 ${service.color} rounded-2xl flex items-center justify-center text-white mb-8 transform group-hover:rotate-6 transition-transform duration-500 shadow-lg`}>
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-slate-900 mb-4 font-cairo group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              
              <p className="text-slate-500 font-cairo leading-relaxed mb-6">
                {service.description}
              </p>
              
              <div className="flex items-center gap-2 text-slate-400 group-hover:text-secondary transition-colors font-bold text-sm font-cairo">
                <span>تعرف على المزيد</span>
                <ArrowLeft size={16} className="transform group-hover:-translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
