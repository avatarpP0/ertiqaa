import React from 'react';
import { CalendarCheck, FileText, Video, TrendingUp, ArrowLeft } from 'lucide-react';
import { PROCESS_STEPS } from '../data/mockData';

interface ProcessStepsProps {
  onOpenBooking: () => void;
}

export const ProcessSteps: React.FC<ProcessStepsProps> = ({ onOpenBooking }) => {
  const stepIcons = [
    <CalendarCheck className="w-6 h-6 text-amber-600" />,
    <FileText className="w-6 h-6 text-amber-600" />,
    <Video className="w-6 h-6 text-amber-600" />,
    <TrendingUp className="w-6 h-6 text-amber-600" />
  ];

  return (
    <section id="process" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <span className="text-amber-700 font-bold text-xs tracking-wider uppercase bg-amber-50 border border-amber-200 px-3 py-1 rounded-full mb-3">
            رحلة العميل
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
            خطوات بسيطة وسلسة تبدأ منها رحلة التغيير
          </h2>
          <div className="w-16 h-1 bg-amber-500 rounded-full mt-4 mb-4" />
          <p className="text-slate-600 text-base sm:text-lg">
            حرصنا على جعل آلية الحجز وبدء الاستشارة مباشرة، فورية، ومحمية بأعلى معايير الخصوصية.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {PROCESS_STEPS.map((step, idx) => (
            <div
              key={step.step}
              className="bg-stone-50/80 border border-slate-200 rounded-2xl p-6 relative flex flex-col justify-between hover:bg-stone-50 hover:shadow-md transition-all group"
            >
              <div>
                {/* Step number badge & icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 shadow-2xs flex items-center justify-center group-hover:scale-105 transition-transform">
                    {stepIcons[idx]}
                  </div>
                  <span className="font-mono text-3xl font-black text-slate-300 group-hover:text-amber-500/50 transition-colors">
                    {step.step}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>

              {/* Step indicator footer */}
              <div className="pt-6 mt-6 border-t border-slate-200/60 flex items-center justify-between text-xs font-semibold text-slate-400">
                <span>المرحلة {idx + 1}</span>
                {idx < PROCESS_STEPS.length - 1 ? (
                  <span className="text-amber-600 flex items-center gap-1 font-mono">
                    التالي <ArrowLeft className="w-3.5 h-3.5" />
                  </span>
                ) : (
                  <span className="text-emerald-600 font-bold">الانطلاق والنتائج</span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Fast Action CTA */}
        <div className="mt-12 text-center">
          <button
            onClick={onOpenBooking}
            className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold px-7 py-3.5 rounded-xl shadow-md transition-all text-sm cursor-pointer"
          >
            <span>ابدأ الخطوة الأولى واحجز موعدك الآن</span>
            <ArrowLeft className="w-4 h-4 text-amber-400" />
          </button>
        </div>

      </div>
    </section>
  );
};
