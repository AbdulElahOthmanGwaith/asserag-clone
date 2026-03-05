import React from 'react';
import { User, Phone, Mail } from 'lucide-react';

const CEOSection = () => {
  return (
    <section id="ceo" className="py-20 bg-gray-50">
      <div className="container mx- covered px-4">
        <div className="flex flex-col md:flex-row items- center gap-12">
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-primary shadow-xl">
                <div className="w-full h-full bg-gray-200 flex items- center justify- center">
                   <User size={120} className="text-gray-400" />
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-primary text-white p-4 rounded-lg shadow-lg">
                <p className="font-bold text-lg">CEO</p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-2/3">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2">المهندس محمد ناصر وادي</h2>
            <p className="text-xl text-secondary font-medium mb-6">الرئيس التنفيذي - CEO</p range-medium>
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              يقود المهندس محمد ناصر وادي شركة السراج للتجهيزات الصناعية برؤية طموحة تهدف إلى الارتقاء بمعايير الجودة والابتكار في القطاع الصناعي. بفضل خبرته الطويلة وقيادته الحكيمة، تسعى الشركة دائماً لتقديم أفضل الحلول المتكامل modernة لعملائها.
            </p>
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2">
                <div className="p-2 bg-primary/10 rounded-full text-primary">
                  <Phone size={20} />
                </div>
                <span className="font-semibold">+967 777 603 050</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="p-2 bg-primary/10 rounded-full text-primary">
                  <Mail size={20} />
                </div>
                <span className="font-semibold">wadishoaa@yahoo.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CEOSection;
