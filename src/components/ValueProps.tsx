import React from 'react';
import { Target, ShieldCheck, Zap, MessageSquareShare, Layers, Award, Check, X } from 'lucide-react';
import { VALUE_PROPOSITIONS } from '../data/mockData';

export const ValueProps: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Target':
        return <Target className="w-5 h-5 text-amber-400" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-amber-400" />;
      case 'Zap':
        return <Zap className="w-5 h-5 text-amber-400" />;
      case 'MessageSquareShare':
        return <MessageSquareShare className="w-5 h-5 text-amber-400" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-amber-400" />;
      case 'Award':
        return <Award className="w-5 h-5 text-amber-400" />;
      default:
        return <Target className="w-5 h-5 text-amber-400" />;
    }
  };

  return (
    <section id="features" className="py-24 bg-[#0B0F17] text-white border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <span className="text-amber-400 font-bold text-xs tracking-wider uppercase bg-amber-500/10 border border-amber-500/30 px-3.5 py-1 rounded-full mb-3">
            لماذا تختار منصة ارتقاء؟
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-black text-white leading-tight">
            نتائج قيادية ومالية ملموسة، بعيداً عن التنظير
          </h2>
          <div className="w-16 h-1 bg-amber-500 rounded-full mt-4 mb-4" />
          <p className="text-slate-300 text-base sm:text-lg">
            تم بناء برامجنا خصيصاً لتمنحك الأدوات والوضوح والشجاعة لاتخاذ القرارات ذات الأثر الأعلى في عملك.
          </p>
        </div>

        {/* 6 Value Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {VALUE_PROPOSITIONS.map((prop, idx) => (
            <div
              key={idx}
              className="bg-[#0E131F] border border-white/10 rounded-3xl p-7 shadow-xl hover:border-amber-400/40 hover:shadow-2xl transition-all flex flex-col justify-between text-right"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-amber-500/20 flex items-center justify-center mb-5">
                  {getIcon(prop.icon)}
                </div>
                <h3 className="text-base font-bold text-white mb-2.5">
                  {prop.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  {prop.desc}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-white/10 flex items-center gap-1.5 text-xs text-amber-400 font-semibold">
                <span>قيمة نوعية مضمونة</span>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Section: Generic Consulting vs. Ertiqa Executive Coaching */}
        <div className="bg-[#0E131F] border border-white/10 rounded-3xl p-8 sm:p-12 shadow-2xl overflow-hidden">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block mb-1">
              المقارنة المباشرة
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              ما الفرق بين التدريب التقليدي ومنهجية د. طارق المنصور؟
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Traditional Generic Coaching */}
            <div className="bg-slate-900/50 border border-white/5 rounded-2xl p-6 sm:p-7 text-right">
              <div className="flex items-center gap-2.5 mb-5 text-slate-400 font-bold text-sm">
                <div className="w-7 h-7 rounded-full bg-slate-800 flex items-center justify-center text-slate-400">
                  <X className="w-4 h-4" />
                </div>
                <span>التدريب والاستشارات التقليدية</span>
              </div>
              <ul className="space-y-3.5 text-xs sm:text-sm text-slate-400">
                <li className="flex items-start gap-2.5">
                  <X className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  <span>نصائح عامة وقوالب جاهزة لا تناسب تحدياتك الخاصة.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <X className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  <span>تنظير أكاديمي بحت يفتقر لواقعية بيئة الأعمال والتنفيذ.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <X className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  <span>انقطاع التواصل بمجرد انتهاء وقت الجلسة دون أي مرافقة.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <X className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  <span>لا توجد مؤشرات أداء (KPIs) ولا يوجد أي ضمان مالي.</span>
                </li>
              </ul>
            </div>

            {/* Ertiqa Methodology */}
            <div className="bg-gradient-to-br from-amber-500/10 via-slate-900 to-[#0E131F] border-2 border-amber-400/80 rounded-2xl p-6 sm:p-7 shadow-xl text-right">
              <div className="flex items-center gap-2.5 mb-5 text-amber-300 font-bold text-sm">
                <div className="w-7 h-7 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center">
                  <Check className="w-4 h-4 stroke-[3]" />
                </div>
                <span>منهجية ارتقاء مع د. طارق المنصور</span>
              </div>
              <ul className="space-y-3.5 text-xs sm:text-sm text-slate-200">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>تشخيص تفصيلي مسبق وتفصيل خطة عمل خاصة لواقعك وأرقامك.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>أدوات ونماذج عمل مالية وتشغيلية قابلة للتطبيق الفوري في 48 ساعة.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>متابعة خاصة ومستمرة عبر واتساب لمراجعة القرارات أولاً بأول.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>ضمان استرداد القيمة 100% إن لم تلمس أثراً نوعياً من أول نصف ساعة.</span>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* Big Satisfaction Guarantee Badge */}
        <div className="mt-14 bg-gradient-to-r from-slate-900 to-[#0E131F] text-white rounded-3xl p-8 sm:p-10 border border-amber-500/30 flex flex-col sm:flex-row items-center justify-between gap-6 text-right">
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 rounded-2xl bg-amber-500/20 border border-amber-400/40 text-amber-400 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-9 h-9" />
            </div>
            <div>
              <h4 className="text-xl font-black text-white mb-1.5">
                ضمان الرضا واسترداد الاستثمار بنسبة 100%
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed">
                استثمارك محمي بالكامل. إذا شعرت خلال أول 30 دقيقة من جلستك أن الاستشارة لم تقدم لك الوضوح والقيمة المتوقعة، يمكنك طلب استرجاع الرسوم فوراً.
              </p>
            </div>
          </div>
          <div className="shrink-0">
            <span className="inline-block text-amber-300 font-bold border border-amber-500/40 bg-amber-500/10 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-mono shadow-sm">
              ثقة مطلقة في جودة الأثر
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
