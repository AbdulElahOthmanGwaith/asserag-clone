export default function ServicesSection() {
  const services = [
    {
      id: 1,
      title: 'التصميم المفاهيمي',
      items: [
        'خطة رئيسية',
        'رسومات تخطيط الغرف',
        'تدفق الأشخاص والمواد',
        'قائمة الآلات',
        'رسوم توضيحية لعمليات الإنتاج',
      ],
    },
    {
      id: 2,
      title: 'التصميم التفصيلي',
      items: [
        'التصميم الكهربائي',
        'التصميم الميكانيكي',
        'تصميم الأعمال المدنية',
        'تصميم التهوية والهواء',
        'المياه المعالجة',
      ],
    },
    {
      id: 3,
      title: 'لوحات كهربائية',
      description: 'لدى Asserag أنشطة أخرى في هذا المجال. أحد أنشطتنا هو تصنيع اللوحات الكهربائية وقنوات التوزيع.',
    },
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title">خدماتنا</h2>
        <div className="gradient-underline"></div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="p-8 bg-gray-50 rounded-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-2xl font-bold text-primary mb-6">
                {service.title}
              </h3>

              {service.items ? (
                <ul className="space-y-3">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-700">
                      <span className="text-secondary font-bold mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              )}

              <a
                href="#"
                className="text-secondary font-semibold mt-6 inline-block hover:text-opacity-80 transition-colors"
              >
                اقرأ المزيد →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
