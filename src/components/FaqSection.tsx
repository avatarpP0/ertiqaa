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
    <section id="faq" className="py-24 bg-[#0B0F17] text-white border-b border-white/5 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-12">
          <span className="text-amber-400 font-bold text-xs tracking-wider uppercase bg-amber-500/10 border border-amber-500/30 px-3.5 py-1 rounded-full mb-3">
            إجابات واضحة ومباشرة
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-black text-white leading-tight">
            الأسئلة الأكثر شيوعاً
          </h2>
          <div className="w-16 h-1 bg-amber-500 rounded-full mt-4 mb-4" />
          <p className="text-slate-300 text-sm sm:text-base">
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
              className="w-full bg-[#0E131F] border border-white/10 rounded-2xl py-3.5 pr-11 pl-4 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-400 transition-all shadow-xl"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                  selectedCategory === cat.id
                    ? 'bg-amber-400 text-slate-950 font-black shadow-md'
                    : 'bg-slate-900 border border-white/10 text-slate-400 hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* FAQs Accordion */}
        <div className="space-y-3.5">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className={`border rounded-2xl transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? 'bg-[#0E131F] border-amber-400/80 shadow-2xl'
                      : 'bg-[#0E131F]/60 border-white/10 hover:border-white/20'
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full text-right p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  >
                    <span className="text-sm sm:text-base font-bold text-white leading-snug">
                      {faq.question}
                    </span>
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                        isOpen
                          ? 'bg-amber-400 text-slate-950 rotate-180'
                          : 'bg-slate-900 border border-white/10 text-slate-400'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4 stroke-[2.5]" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-slate-300 text-xs sm:text-sm leading-relaxed border-t border-white/5 animate-in fade-in duration-200 font-normal">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="text-center py-12 bg-[#0E131F] rounded-2xl border border-white/10 p-6">
              <HelpCircle className="w-8 h-8 text-slate-500 mx-auto mb-2" />
              <p className="text-sm font-bold text-slate-300">لم يتم العثور على سؤال يطابق بحثك</p>
              <p className="text-xs text-slate-500 mt-1">
                تواصل معنا مباشرة وسنجيبك في الحال.
              </p>
            </div>
          )}
        </div>

        {/* Custom inquiry CTA */}
        <div className="mt-12 p-6 rounded-3xl bg-[#0E131F] border border-amber-500/30 text-white flex flex-col sm:flex-row items-center justify-between gap-4 text-right">
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-2xl bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0 border border-amber-500/20">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-black text-white">لديك سؤال آخر لم تجد إجابته هنا؟</h4>
              <p className="text-xs text-slate-400 mt-0.5">فريق الدعم الاستشاري متاح للإجابة على جميع استفساراتك.</p>
            </div>
          </div>
          <a
            href="#contact"
            className="text-xs sm:text-sm font-black text-slate-950 bg-amber-400 hover:bg-amber-300 px-5 py-3 rounded-xl transition-colors whitespace-nowrap shadow-md"
          >
            تواصل مع المستشار
          </a>
        </div>

      </div>
    </section>
  );
};
