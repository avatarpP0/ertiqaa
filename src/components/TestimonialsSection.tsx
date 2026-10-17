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
    <section id="testimonials" className="py-20 lg:py-28 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12">
          <span className="text-amber-700 font-bold text-xs tracking-wider uppercase bg-amber-50 border border-amber-200 px-3 py-1 rounded-full mb-3">
            قصص النجاح والأثر
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
            ماذا يقول قادة الأعمال بعد الجلسات والبرامج؟
          </h2>
          <div className="w-16 h-1 bg-amber-500 rounded-full mt-4 mb-4" />
          <p className="text-slate-600 text-base sm:text-lg">
            تجارب حقيقية من رؤساء تنفيذيين ورواد أعمال أحدثوا نقلات نوعية في مسيرتهم وأعمالهم.
          </p>
        </div>

        {/* Filter Controls (Segmented clean buttons) */}
        <div className="flex items-center justify-center mb-12 overflow-x-auto pb-2 scrollbar-none">
          <div className="inline-flex items-center p-1 bg-slate-100 rounded-xl border border-slate-200 gap-1">
            {filters.map((filter) => {
              const isActive = activeFilter === filter.id;
              return (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id as any)}
                  className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                    isActive
                      ? 'bg-white text-slate-900 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {filter.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredTestimonials.map((item) => (
            <div
              key={item.id}
              className="bg-stone-50/70 border border-slate-200 rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:bg-white hover:shadow-md transition-all relative"
            >
              <div>
                {/* Metric Strip at Top of Card */}
                <div className="flex items-center justify-between mb-5 border-b border-slate-200/80 pb-4">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-lg">
                    <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{item.metric}</span>
                  </div>

                  {/* Stars */}
                  <div className="flex text-amber-500">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>

                {/* Quote */}
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-6 italic">
                  "{item.quote}"
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-200/60">
                <div className="flex items-center gap-3">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-11 h-11 rounded-full object-cover border border-slate-300"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                      <span>{item.name}</span>
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                    </h4>
                    <span className="text-xs text-slate-500 block">
                      {item.role} · {item.company}
                    </span>
                  </div>
                </div>

                <span className="text-[11px] text-slate-400">
                  {item.date}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Aggregate Credibility Callout */}
        <div className="mt-12 text-center p-6 bg-slate-50 border border-slate-200 rounded-2xl max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-around gap-4 text-xs sm:text-sm text-slate-600">
          <div>
            <span className="font-extrabold text-slate-900 text-lg block font-mono">4.96 / 5.0</span>
            <span>متوسط تقييم الجلسات</span>
          </div>
          <div className="hidden sm:block w-px h-8 bg-slate-300" />
          <div>
            <span className="font-extrabold text-slate-900 text-lg block font-mono">98.4%</span>
            <span>يوصون بالجلسات لزملائهم</span>
          </div>
          <div className="hidden sm:block w-px h-8 bg-slate-300" />
          <div>
            <span className="font-extrabold text-slate-900 text-lg block font-mono">82%</span>
            <span>كرروا الاشتراك في برامج متقدمة</span>
          </div>
        </div>

      </div>
    </section>
  );
};
