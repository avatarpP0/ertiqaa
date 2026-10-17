import React from 'react';
import { CalendarCheck, FileText, Video, TrendingUp, ArrowLeft } from 'lucide-react';
import { PROCESS_STEPS } from '../data/mockData';

interface ProcessStepsProps {
  onOpenBooking: () => void;
}

export const ProcessSteps: React.FC<ProcessStepsProps> = ({ onOpenBooking }) => {
  const stepIcons = [
    <CalendarCheck className="w-6 h-6 text-amber-400" />,
    <FileText className="w-6 h-6 text-amber-400" />,
    <Video className="w-6 h-6 text-amber-400" />,
    <TrendingUp className="w-6 h-6 text-amber-400" />
  ];

  return (
    <section id="process" className="py-24 bg-[#0E131F] text-white border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <span className="text-amber-400 font-bold text-xs tracking-wider uppercase bg-amber-500/10 border border-amber-500/30 px-3.5 py-1 rounded-full mb-3">
            رحلة العميل الاستشارية
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-black text-white leading-tight">
            خطوات بسيطة ومباشرة تبدأ منها رحلة التغيير
          </h2>
          <div className="w-16 h-1 bg-amber-500 rounded-full mt-4 mb-4" />
          <p className="text-slate-300 text-base sm:text-lg">
            حرصنا على جعل آلية الحجز وبدء الاستشارة مباشرة، فورية، ومحمية بأعلى معايير الخصوصية.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {PROCESS_STEPS.map((step, idx) => (
            <div
              key={step.step}
              className="bg-[#0B0F17] border border-white/10 rounded-3xl p-7 relative flex flex-col justify-between hover:border-amber-400/40 hover:shadow-2xl transition-all group text-right"
            >
              <div>
                {/* Step number badge & icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-amber-500/20 shadow-md flex items-center justify-center group-hover:scale-105 group-hover:border-amber-400 transition-all">
                    {stepIcons[idx]}
                  </div>
                  <span className="font-mono text-3xl font-black text-slate-700 group-hover:text-amber-400/50 transition-colors">
                    {step.step}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-black text-white mb-2.5">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  {step.desc}
                </p>
              </div>

              {/* Step indicator footer */}
              <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between text-xs font-bold text-slate-400">
                <span>المرحلة {idx + 1}</span>
                {idx < PROCESS_STEPS.length - 1 ? (
                  <span className="text-amber-400 flex items-center gap-1 font-mono">
                    التالي <ArrowLeft className="w-3.5 h-3.5" />
                  </span>
                ) : (
                  <span className="text-emerald-400 font-bold">الانطلاق والنتائج</span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Fast Action CTA */}
        <div className="mt-14 text-center">
          <button
            onClick={onOpenBooking}
            className="inline-flex items-center gap-2.5 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-black px-8 py-4 rounded-xl shadow-xl shadow-amber-500/20 transition-all text-sm cursor-pointer"
          >
            <span>ابدأ الخطوة الأولى واحجز موعدك الآن</span>
            <ArrowLeft className="w-4 h-4 text-slate-950" />
          </button>
        </div>

      </div>
    </section>
  );
};
