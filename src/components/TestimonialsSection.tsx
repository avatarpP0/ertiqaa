import React, { useState } from 'react';
import { Star, Quote, CheckCircle2, TrendingUp, Building2 } from 'lucide-react';
import { TESTIMONIALS } from '../data/mockData';

export const TestimonialsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'startup' | 'executive' | 'business'>('all');

  const filters = [
    { id: 'all', label: 'جميع التجارب' },
    { id: 'startup', label: 'شركات ناشئة وتقنية' },
    { id: 'executive', label: 'قيادات تنفيذية وإدارية' },
    { id: 'business', label: 'تجارة وتجزئة وأعمال' },
  ];

  const filteredTestimonials =
    activeFilter === 'all'
      ? TESTIMONIALS
      : TESTIMONIALS.filter((t) => t.category === activeFilter);

  return (
    <section id="testimonials" className="py-24 bg-[#0E131F] text-white border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12">
          <span className="text-amber-400 font-bold text-xs tracking-wider uppercase bg-amber-500/10 border border-amber-500/30 px-3.5 py-1 rounded-full mb-3">
            قصص النجاح والأثر
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-black text-white leading-tight">
            ماذا يقول قادة الأعمال بعد الجلسات والبرامج؟
          </h2>
          <div className="w-16 h-1 bg-amber-500 rounded-full mt-4 mb-4" />
          <p className="text-slate-300 text-base sm:text-lg">
            تجارب حقيقية من رؤساء تنفيذيين ورواد أعمال أحدثوا نقلات نوعية في مسيرتهم وأعمالهم.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="flex items-center justify-center mb-14 overflow-x-auto pb-2 scrollbar-none">
          <div className="inline-flex items-center p-1.5 bg-slate-900 border border-white/10 rounded-2xl gap-1">
            {filters.map((filter) => {
              const isActive = activeFilter === filter.id;
              return (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id as any)}
                  className={`px-4 py-2.5 text-xs sm:text-sm font-bold rounded-xl transition-all cursor-pointer whitespace-nowrap ${
                    isActive
                      ? 'bg-amber-400 text-slate-950 shadow-md font-black'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
                  }`}
                >
                  {filter.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredTestimonials.map((item) => (
            <div
              key={item.id}
              className="bg-[#0B0F17] border border-white/10 rounded-3xl p-7 sm:p-9 flex flex-col justify-between hover:border-amber-400/40 hover:shadow-2xl transition-all relative text-right"
            >
              <div>
                {/* Metric Strip at Top of Card */}
                <div className="flex items-center justify-between mb-6 border-b border-white/10 pb-4">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-800/80 px-3 py-1 rounded-xl">
                    <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{item.metric}</span>
                  </div>

                  {/* Stars */}
                  <div className="flex text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                </div>

                {/* Quote */}
                <p className="text-slate-200 text-sm sm:text-base leading-relaxed mb-6 italic font-normal">
                  "{item.quote}"
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center justify-between pt-5 border-t border-white/10">
                <div className="flex items-center gap-3">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-amber-500/40"
                  />
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-white flex items-center gap-1.5">
                      <span>{item.name}</span>
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                    </h4>
                    <span className="text-xs text-slate-400 block mt-0.5">
                      {item.role} · {item.company}
                    </span>
                  </div>
                </div>

                <span className="text-[11px] text-slate-500 font-mono">
                  {item.date}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Aggregate Credibility Callout */}
        <div className="mt-14 text-center p-7 bg-[#0B0F17] border border-white/10 rounded-3xl max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-around gap-6 text-xs sm:text-sm text-slate-300">
          <div>
            <span className="font-black text-amber-400 text-2xl block font-mono">4.96 / 5.0</span>
            <span className="text-slate-400 mt-1 block">متوسط تقييم الجلسات</span>
          </div>
          <div className="hidden sm:block w-px h-10 bg-white/10" />
          <div>
            <span className="font-black text-amber-400 text-2xl block font-mono">98.4%</span>
            <span className="text-slate-400 mt-1 block">يوصون بالجلسات لزملائهم</span>
          </div>
          <div className="hidden sm:block w-px h-10 bg-white/10" />
          <div>
            <span className="font-black text-amber-400 text-2xl block font-mono">82%</span>
            <span className="text-slate-400 mt-1 block">كرروا الاشتراك في برامج متقدمة</span>
          </div>
        </div>

      </div>
    </section>
  );
};
