import React, { useState } from 'react';
import { Calendar, Check, Clock, Monitor, Star, Info } from 'lucide-react';
import { Program } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { getPrograms } from '../data/mockData';

interface ProgramsSectionProps {
  onOpenBooking: (programId: string) => void;
  onSelectProgramDetails: (program: Program) => void;
}

export const ProgramsSection: React.FC<ProgramsSectionProps> = ({
  onOpenBooking,
  onSelectProgramDetails
}) => {
  const { language, isRtl, t } = useLanguage();
  const programs = getPrograms(language);

  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [currency, setCurrency] = useState<'SAR' | 'AED' | 'USD'>('SAR');

  const categories = language === 'en' ? [
    { id: 'all', name: 'All Programs & Tracks' },
    { id: 'individual', name: '1-on-1 Advisory' },
    { id: 'executive', name: 'Executive Leadership' },
    { id: 'growth', name: 'Venture Acceleration' },
    { id: 'corporate', name: 'Corporate & Boards' },
  ] : [
    { id: 'all', name: 'جميع البرامج والخدمات' },
    { id: 'individual', name: 'استشارات فردية 1-on-1' },
    { id: 'executive', name: 'برامج القيادة التنفيذية' },
    { id: 'growth', name: 'تسريع نمو المشاريع' },
    { id: 'corporate', name: 'استشارات وورش الشركات' },
  ];

  const getConvertedPrice = (prog: Program) => {
    if (prog.price.includes('مخصص') || prog.price.toLowerCase().includes('custom')) {
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
      ? programs
      : programs.filter((p) => p.category === activeCategory);

  return (
    <section id="programs" className="py-24 bg-[#0B0F17] text-white border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12">
          <span className="text-amber-400 font-bold text-xs tracking-wider uppercase bg-amber-500/10 border border-amber-500/30 px-3.5 py-1 rounded-full mb-3">
            {t.programsKicker}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-black text-white leading-tight">
            {t.programsTitle}
          </h2>
          <div className="w-16 h-1 bg-amber-500 rounded-full mt-4 mb-4" />
          <p className="text-slate-300 text-base sm:text-lg">
            {t.programsSubtitle}
          </p>

          {/* Luxury Currency Switcher */}
          <div className="mt-8 flex items-center gap-2 bg-slate-900/90 border border-white/10 px-4 py-2 rounded-2xl shadow-xl text-xs">
            <span className="text-slate-400 font-bold">{t.programsCurrencyLabel}</span>
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={() => setCurrency('SAR')}
                className={`px-3 py-1.5 rounded-xl font-bold transition-all cursor-pointer ${
                  currency === 'SAR' ? 'bg-amber-400 text-slate-950 shadow-md font-black' : 'text-slate-300 hover:text-white'
                }`}
              >
                SAR (ر.س)
              </button>
              <button
                type="button"
                onClick={() => setCurrency('AED')}
                className={`px-3 py-1.5 rounded-xl font-bold transition-all cursor-pointer ${
                  currency === 'AED' ? 'bg-amber-400 text-slate-950 shadow-md font-black' : 'text-slate-300 hover:text-white'
                }`}
              >
                AED (د.إ)
              </button>
              <button
                type="button"
                onClick={() => setCurrency('USD')}
                className={`px-3 py-1.5 rounded-xl font-bold transition-all cursor-pointer ${
                  currency === 'USD' ? 'bg-amber-400 text-slate-950 shadow-md font-black' : 'text-slate-300 hover:text-white'
                }`}
              >
                USD ($)
              </button>
            </div>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center justify-center mb-14 overflow-x-auto pb-2 scrollbar-none">
          <div className="inline-flex items-center p-1.5 bg-slate-900 border border-white/10 rounded-2xl gap-1">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2.5 text-xs sm:text-sm font-bold rounded-xl transition-all cursor-pointer whitespace-nowrap ${
                    isActive
                      ? 'bg-amber-400 text-slate-950 shadow-md font-black'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
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
            const prices = getConvertedPrice(program);
            return (
              <div
                key={program.id}
                className={`rounded-3xl transition-all duration-300 flex flex-col justify-between ${
                  program.isPopular
                    ? 'bg-[#0E131F] border-2 border-amber-400/80 shadow-2xl relative'
                    : 'bg-[#0E131F] border border-white/10 hover:border-amber-400/40 shadow-xl'
                } p-7 sm:p-9 ${isRtl ? 'text-right' : 'text-left'}`}
              >
                {/* Popular Ribbon */}
                {program.isPopular && (
                  <div className={`absolute -top-3.5 ${isRtl ? 'right-8' : 'left-8'} bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 text-xs font-black px-4 py-1 rounded-full shadow-lg flex items-center gap-1.5`}>
                    <Star className="w-3.5 h-3.5 fill-slate-950" />
                    <span>{t.programsPopularBadge}</span>
                  </div>
                )}

                <div>
                  {/* Clean unboxed metadata header */}
                  <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400 mb-4 pt-1">
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-amber-400" />
                      <span className="text-slate-300">{program.duration}</span>
                    </span>
                    <span aria-hidden="true" className="text-slate-600">·</span>
                    <span className="flex items-center gap-1.5">
                      <Monitor className="w-3.5 h-3.5 text-slate-400" />
                      <span className="text-slate-300">{program.format}</span>
                    </span>
                    {program.badge && (
                      <>
                        <span aria-hidden="true" className="text-slate-600">·</span>
                        <span className="text-amber-400 font-semibold">{program.badge}</span>
                      </>
                    )}
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-2xl font-black text-white mb-2">
                    {program.title}
                  </h3>
                  <p className="text-slate-300 text-xs sm:text-sm font-medium mb-5 leading-relaxed">
                    {program.subtitle}
                  </p>

                  {/* Target Audience Box */}
                  <div className="bg-slate-900/80 border border-white/5 rounded-2xl p-4 mb-6 text-xs text-slate-300">
                    <span className="font-bold text-amber-300 block mb-1">
                      {t.programsTargetAudience}
                    </span>
                    <p className="leading-relaxed text-slate-400">
                      {program.targetAudience}
                    </p>
                  </div>

                  {/* Summary */}
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                    {program.summary}
                  </p>

                  {/* Features Deliverables List */}
                  <div className="border-t border-white/10 pt-6 mb-6">
                    <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block mb-3.5">
                      {t.programsKeyFeatures}
                    </span>
                    <ul className="space-y-3 text-xs sm:text-sm text-slate-200">
                      {program.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-3 h-3 stroke-[3]" />
                          </div>
                          <span className="leading-snug text-slate-300">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer Pricing & CTA Area */}
                <div className="border-t border-white/10 pt-6 mt-2">
                  <div className="flex items-baseline justify-between mb-5">
                    <div>
                      <span className="text-xs text-slate-400 block mb-1">
                        {t.programsInvestmentRequired}
                      </span>
                      <div className="flex items-baseline gap-2.5">
                        <span className="text-3xl font-black text-amber-400 font-mono">
                          {prices.current}
                        </span>
                        {prices.original && (
                          <span className="text-sm text-slate-500 line-through font-mono">
                            {prices.original}
                          </span>
                        )}
                      </div>
                    </div>

                    {program.syllabus && (
                      <button
                        onClick={() => onSelectProgramDetails(program)}
                        className="text-xs text-amber-400 hover:text-amber-300 font-bold underline underline-offset-4 flex items-center gap-1 cursor-pointer"
                      >
                        <Info className="w-3.5 h-3.5" />
                        <span>{t.programsViewSyllabus}</span>
                      </button>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <button
                      onClick={() => onOpenBooking(program.id)}
                      className="w-full bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-black py-3.5 px-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 text-xs sm:text-sm cursor-pointer"
                    >
                      <Calendar className="w-4 h-4 text-slate-950" />
                      <span>{t.programsBtnBook}</span>
                    </button>

                    {program.syllabus ? (
                      <button
                        onClick={() => onSelectProgramDetails(program)}
                        className="w-full bg-slate-900 hover:bg-slate-800 border border-white/10 text-slate-200 font-bold py-3.5 px-4 rounded-xl transition-all text-xs sm:text-sm cursor-pointer"
                      >
                        <span>{t.programsBtnTimeline}</span>
                      </button>
                    ) : (
                      <a
                        href="#contact"
                        className="w-full bg-slate-900 hover:bg-slate-800 border border-white/10 text-slate-200 font-bold py-3.5 px-4 rounded-xl transition-all text-xs sm:text-sm text-center flex items-center justify-center"
                      >
                        <span>{t.programsBtnCustom}</span>
                      </a>
                    )}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Corporate custom banner */}
        <div className={`mt-14 bg-gradient-to-r from-slate-900 to-[#0E131F] border border-amber-500/30 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 ${isRtl ? 'text-right' : 'text-left'}`}>
          <div className="space-y-1.5">
            <h4 className="text-lg font-black text-white">
              {t.programsCorporateTitle}
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              {t.programsCorporateDesc}
            </p>
          </div>
          <a
            href="#contact"
            className="shrink-0 bg-amber-400 hover:bg-amber-300 text-slate-950 font-black px-6 py-3 rounded-xl shadow-md text-xs sm:text-sm transition-colors whitespace-nowrap"
          >
            {t.programsBtnCustomQuote}
          </a>
        </div>

      </div>
    </section>
  );
};
