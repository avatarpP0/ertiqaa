import React, { useState } from 'react';
import { Calendar, Check, ChevronLeft, Clock, Monitor, Sparkles, Star, Users, Info } from 'lucide-react';
import { Program } from '../types';
import { PROGRAMS } from '../data/mockData';

interface ProgramsSectionProps {
  onOpenBooking: (programId: string) => void;
  onSelectProgramDetails: (program: Program) => void;
}

export const ProgramsSection: React.FC<ProgramsSectionProps> = ({
  onOpenBooking,
  onSelectProgramDetails
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const [currency, setCurrency] = useState<'SAR' | 'AED' | 'USD'>('SAR');

  const categories = [
    { id: 'all', name: 'جميع البرامج والخدمات' },
    { id: 'individual', name: 'استشارات فردية 1-on-1' },
    { id: 'executive', name: 'برامج القيادة التنفيذية' },
    { id: 'growth', name: 'تسريع نمو المشاريع' },
    { id: 'corporate', name: 'استشارات وورش الشركات' },
  ];

  const getConvertedPrice = (prog: Program) => {
    if (prog.price.includes('مخصص')) {
      return { current: prog.price, original: undefined };
    }
    if (currency === 'AED') {
      if (prog.id === 'strategy-session') return { current: '930 د.إ', original: '1,370 د.إ' };
      if (prog.id === 'executive-mastery') return { current: '9,600 د.إ', original: '13,200 د.إ' };
      if (prog.id === 'startup-scale') return { current: '3,380 د.إ', original: '4,800 د.إ' };
    }
    if (currency === 'USD') {
      if (prog.id === 'strategy-session') return { current: '$255 USD', original: '$375 USD' };
      if (prog.id === 'executive-mastery') return { current: '$2,600 USD', original: '$3,600 USD' };
      if (prog.id === 'startup-scale') return { current: '$920 USD', original: '$1,300 USD' };
    }
    return { current: prog.price, original: prog.originalPrice };
  };

  const filteredPrograms =
    activeCategory === 'all'
      ? PROGRAMS
      : PROGRAMS.filter((p) => p.category === activeCategory);

  return (
    <section id="programs" className="py-20 lg:py-28 bg-stone-50 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12">
          <span className="text-amber-700 font-bold text-xs tracking-wider uppercase bg-amber-100/70 border border-amber-200 px-3 py-1 rounded-full mb-3">
            البرامج والخدمات الاستشارية
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
            حلول مصممة لمضاعفة أثرك القيادي وعوائد أعمالك
          </h2>
          <div className="w-16 h-1 bg-amber-500 rounded-full mt-4 mb-4" />
          <p className="text-slate-600 text-base sm:text-lg">
            سواء كنت بحاجة لجلسة قرار حاسمة أو مرافقة استشارية مستمرة على مدار أشهر، 
            نقدم مسارات مدروسة تضمن تحقيق نتائج نوعية وملموسة.
          </p>

          {/* Currency Switcher */}
          <div className="mt-6 flex items-center gap-2 bg-white border border-slate-200 px-3 py-1.5 rounded-xl shadow-2xs text-xs">
            <span className="text-slate-500 font-bold">العملة المعروضة:</span>
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={() => setCurrency('SAR')}
                className={`px-2.5 py-1 rounded-lg font-bold transition-all cursor-pointer ${
                  currency === 'SAR' ? 'bg-slate-900 text-amber-400' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                ر.س (SAR)
              </button>
              <button
                type="button"
                onClick={() => setCurrency('AED')}
                className={`px-2.5 py-1 rounded-lg font-bold transition-all cursor-pointer ${
                  currency === 'AED' ? 'bg-slate-900 text-amber-400' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                د.إ (AED)
              </button>
              <button
                type="button"
                onClick={() => setCurrency('USD')}
                className={`px-2.5 py-1 rounded-lg font-bold transition-all cursor-pointer ${
                  currency === 'USD' ? 'bg-slate-900 text-amber-400' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                $ (USD)
              </button>
            </div>
          </div>
        </div>

        {/* Category Tabs (Segmented Control buttons) */}
        <div className="flex items-center justify-center mb-12 overflow-x-auto pb-2 scrollbar-none">
          <div className="inline-flex items-center p-1.5 bg-slate-200/70 rounded-xl border border-slate-300/80 gap-1">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                    isActive
                      ? 'bg-white text-slate-900 shadow-sm'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
                  }`}
                >
                  {cat.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredPrograms.map((program) => {
            return (
              <div
                key={program.id}
                className={`rounded-2xl transition-all duration-200 flex flex-col justify-between ${
                  program.isPopular
                    ? 'bg-white border-2 border-amber-500/80 shadow-xl relative'
                    : 'bg-white border border-slate-200 shadow-sm hover:shadow-md'
                } p-6 sm:p-8`}
              >
                {/* Popular Banner */}
                {program.isPopular && (
                  <div className="absolute -top-3.5 right-6 bg-amber-500 text-slate-950 text-xs font-black px-3.5 py-1 rounded-full shadow-sm flex items-center gap-1.5">
                    <Star className="w-3.5 h-3.5 fill-slate-950" />
                    <span>البرنامج الأكثر طلباً للمبتدئين</span>
                  </div>
                )}

                <div>
                  {/* Clean unboxed metadata header */}
                  <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 mb-3 pt-1">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-amber-600" />
                      <span>{program.duration}</span>
                    </span>
                    <span aria-hidden="true">·</span>
                    <span className="flex items-center gap-1">
                      <Monitor className="w-3.5 h-3.5 text-slate-400" />
                      <span>{program.format}</span>
                    </span>
                    {program.badge && (
                      <>
                        <span aria-hidden="true">·</span>
                        <span className="text-amber-700 font-semibold">{program.badge}</span>
                      </>
                    )}
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-2">
                    {program.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm font-medium mb-4 leading-relaxed">
                    {program.subtitle}
                  </p>

                  {/* Target Audience Box */}
                  <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-3.5 mb-5 text-xs text-slate-700">
                    <span className="font-bold text-slate-900 block mb-1">
                      الفئة المستهدفة:
                    </span>
                    <p className="leading-relaxed text-slate-600">
                      {program.targetAudience}
                    </p>
                  </div>

                  {/* Summary */}
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                    {program.summary}
                  </p>

                  {/* Features Deliverables List */}
                  <div className="border-t border-slate-100 pt-5 mb-6">
                    <span className="text-xs font-bold text-slate-900 uppercase tracking-wider block mb-3">
                      أبرز المخرجات والمميزات المشمولة:
                    </span>
                    <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                      {program.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-3 h-3 stroke-[2.5]" />
                          </div>
                          <span className="leading-snug">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer Pricing & CTA Area */}
                <div className="border-t border-slate-200 pt-6 mt-2">
                  <div className="flex items-baseline justify-between mb-5">
                    <div>
                      <span className="text-xs text-slate-500 block mb-0.5">
                        الاستثمار المطلوب:
                      </span>
                      <div className="flex items-baseline gap-2">
                        {(() => {
                          const prices = getConvertedPrice(program);
                          return (
                            <>
                              <span className="text-2xl sm:text-3xl font-extrabold text-slate-950 font-mono">
                                {prices.current}
                              </span>
                              {prices.original && (
                                <span className="text-xs sm:text-sm text-slate-400 line-through font-mono">
                                  {prices.original}
                                </span>
                              )}
                            </>
                          );
                        })()}
                      </div>
                    </div>

                    {program.syllabus && (
                      <button
                        onClick={() => onSelectProgramDetails(program)}
                        className="text-xs text-amber-700 hover:text-amber-800 font-bold underline underline-offset-4 flex items-center gap-1 cursor-pointer"
                      >
                        <Info className="w-3.5 h-3.5" />
                        <span>عرض المنهاج والجدول</span>
                      </button>
                    )}
                  </div>

                  {/* Dual Action Buttons */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <button
                      onClick={() => onOpenBooking(program.id)}
                      className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 px-4 rounded-xl shadow-sm transition-all flex items-center justify-center gap-2 text-xs sm:text-sm cursor-pointer group"
                    >
                      <Calendar className="w-4 h-4 text-amber-400" />
                      <span>حجز هذا البرنامج</span>
                    </button>

                    {program.syllabus ? (
                      <button
                        onClick={() => onSelectProgramDetails(program)}
                        className="w-full bg-white hover:bg-slate-50 border border-slate-300 text-slate-700 font-semibold py-3 px-4 rounded-xl transition-all text-xs sm:text-sm cursor-pointer"
                      >
                        <span>تفاصيل الخطة الزمنية</span>
                      </button>
                    ) : (
                      <a
                        href="#contact"
                        className="w-full bg-white hover:bg-slate-50 border border-slate-300 text-slate-700 font-semibold py-3 px-4 rounded-xl transition-all text-xs sm:text-sm text-center flex items-center justify-center"
                      >
                        <span>طلب تفصيل خاص</span>
                      </a>
                    )}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Custom enterprise note */}
        <div className="mt-12 bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-right">
            <h4 className="text-base font-bold text-slate-900">
              هل تمثل شركة أو جهة حكومية تبحث عن برنامج مخصص بالكامل؟
            </h4>
            <p className="text-xs sm:text-sm text-slate-600">
              نصمم ورش عمل استراتيجية ومخيمات تدريبية للقيادات التنفيذية ومجالس الإدارة مع خطط متابعة سنوية.
            </p>
          </div>
          <a
            href="#contact"
            className="shrink-0 bg-stone-100 hover:bg-stone-200 text-slate-900 font-bold px-5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm transition-colors"
          >
            طلب عرض فني ومالي مخصص
          </a>
        </div>

      </div>
    </section>
  );
};
