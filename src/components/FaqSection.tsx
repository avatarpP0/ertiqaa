import React, { useState } from 'react';
import { ChevronDown, Search, HelpCircle, MessageSquare } from 'lucide-react';
import { FAQS } from '../data/mockData';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('f1');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'جميع الأسئلة' },
    { id: 'general', label: 'الاستشارة والبرامج' },
    { id: 'booking', label: 'المواعيد والتنفيذ' },
    { id: 'guarantee', label: 'الضمان والاسترجاع' },
    { id: 'corporate', label: 'الشركات والفواتير' },
  ];

  const filteredFaqs = FAQS.filter((faq) => {
    const matchesCategory =
      selectedCategory === 'all' || faq.category === selectedCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-stone-50 border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-12">
          <span className="text-amber-700 font-bold text-xs tracking-wider uppercase bg-amber-100/70 border border-amber-200 px-3 py-1 rounded-full mb-3">
            إجابات واضحة ومباشرة
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
            الأسئلة الأكثر شيوعاً
          </h2>
          <div className="w-16 h-1 bg-amber-500 rounded-full mt-4 mb-4" />
          <p className="text-slate-600 text-sm sm:text-base">
            كل ما تود معرفته عن آلية حجز الجلسات، الضمان المالي، وطريقة تنفيذ البرامج التدريبية.
          </p>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="mb-8 space-y-4">
          {/* Search Input */}
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute right-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="ابحث عن سؤالك هنا (مثلاً: ضمان، موعد، شركات، زووم)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-slate-300 rounded-xl py-3 pr-11 pl-4 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500 transition-all shadow-2xs"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                  selectedCategory === cat.id
                    ? 'bg-slate-900 text-white'
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* FAQs Accordion */}
        <div className="space-y-3">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className={`border rounded-xl transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? 'bg-white border-amber-400/80 shadow-xs'
                      : 'bg-white border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full text-right p-5 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  >
                    <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      {faq.question}
                    </span>
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                        isOpen
                          ? 'bg-amber-100 text-amber-800 rotate-180'
                          : 'bg-slate-100 text-slate-500'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 animate-in fade-in duration-200">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="text-center py-12 bg-white rounded-xl border border-slate-200 p-6">
              <HelpCircle className="w-8 h-8 text-slate-400 mx-auto mb-2" />
              <p className="text-sm font-bold text-slate-700">لم يتم العثور على سؤال يطابق بحثك</p>
              <p className="text-xs text-slate-500 mt-1">
                تواصل معنا مباشرة عبر واتساب وسنجيبك في الحال.
              </p>
            </div>
          )}
        </div>

        {/* Still have questions CTA */}
        <div className="mt-10 p-5 rounded-2xl bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-slate-800 text-amber-400 flex items-center justify-center shrink-0 border border-slate-700">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">لديك سؤال آخر لم تجد إجابته هنا؟</h4>
              <p className="text-xs text-slate-300">فريق الدعم الاستشاري متاح للإجابة على جميع استفساراتك.</p>
            </div>
          </div>
          <a
            href="#contact"
            className="text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 px-4 py-2.5 rounded-xl transition-colors whitespace-nowrap"
          >
            تواصل مع المستشار
          </a>
        </div>

      </div>
    </section>
  );
};
