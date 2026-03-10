import { ShieldCheck, Target, Users, Lightbulb, TrendingUp, Award } from 'lucide-react';

export default function FeaturesSection() {
  const features = [
    {
      id: 1,
      title: 'لماذا اختيارنا؟',
      description: 'نحن وكلاء معتمدون لأكبر الشركات المصرية المتحدة في المجالات الطبية والصيدلانية، ونقدم حلولاً تجمع بين الخبرة المحلية والمعايير العالمية.',
      icon: <Award className="w-8 h-8 text-secondary" />,
      image: '/images/team-collaboration.jpg',
    },
    {
      id: 2,
      title: 'رؤية السراج',
      description: 'نسعى للريادة في مجال أنظمة التهوية والتحكم الكهربائي محلياً وإقليمياً، من خلال الابتكار المستمر والالتزام بأعلى معايير الجودة والاستدامة.',
      icon: <Target className="w-8 h-8 text-secondary" />,
      image: '/images/industrial-design.jpg',
    },
    {
      id: 3,
      title: 'عن الشركة',
      description: 'تأسست السراج عام 2006، وتخصصت في التصنيع والتجميع الكهربائي وتجهيز المصانع الطبية، لتبني مسيرة حافلة بالثقة والإنجازات العملاقة.',
      icon: <ShieldCheck className="w-8 h-8 text-secondary" />,
      image: '/images/hero-medical-factory.jpg',
    },
  ];

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 -z-10 skew-x-12 transform translate-x-20"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 font-cairo">
            من نحن وماذا <span className="text-secondary">نمثل</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-3xl mx-auto font-cairo leading-relaxed">
            نحن في السراج نؤمن بأن الجودة ليست مجرد معيار، بل هي ثقافة عمل نطبقها في كل مشروع، لنكون الشريك الأمثل لنجاح استثماراتكم الصناعية.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="group bg-white rounded-3xl overflow-hidden shadow-xl shadow-slate-200/50 border border-slate-100 hover:-translate-y-2 transition-all duration-500"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-60"></div>
                <div className="absolute bottom-6 right-6 bg-white p-4 rounded-2xl shadow-lg transform -rotate-6 group-hover:rotate-0 transition-transform duration-500">
                  {feature.icon}
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-4 font-cairo group-hover:text-secondary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-slate-600 text-base leading-relaxed mb-8 font-cairo">
                  {feature.description}
                </p>
                <div className="flex items-center justify-between">
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-secondary font-bold hover:gap-4 transition-all font-cairo"
                  >
                    اكتشف المزيد
                    <span className="text-xl">←</span>
                  </a>
                  <div className="w-12 h-1 bg-slate-100 rounded-full overflow-hidden">
                    <div className="w-0 h-full bg-secondary group-hover:w-full transition-all duration-700"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats/Trust Bar */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 p-10 bg-slate-900 rounded-[40px] text-white shadow-2xl">
          <div className="text-center border-r border-white/10 last:border-0">
            <p className="text-4xl font-black text-secondary mb-2">2006</p>
            <p className="text-sm text-gray-400 font-cairo">سنة التأسيس</p>
          </div>
          <div className="text-center border-r border-white/10 last:border-0">
            <p className="text-4xl font-black text-secondary mb-2">+150</p>
            <p className="text-sm text-gray-400 font-cairo">مشروع منجز</p>
          </div>
          <div className="text-center border-r border-white/10 last:border-0">
            <p className="text-4xl font-black text-secondary mb-2">100%</p>
            <p className="text-sm text-gray-400 font-cairo">رضا العملاء</p>
          </div>
          <div className="text-center border-r border-white/10 last:border-0">
            <p className="text-4xl font-black text-secondary mb-2">+20</p>
            <p className="text-sm text-gray-400 font-cairo">شريك عالمي</p>
          </div>
        </div>
      </div>
    </section>
  );
}
