import React from 'react';
import { Target, ShieldCheck, Zap, MessageSquareShare, Layers, Award, Check, X } from 'lucide-react';
import { VALUE_PROPOSITIONS } from '../data/mockData';

export const ValueProps: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Target':
        return <Target className="w-5 h-5 text-amber-600" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-amber-600" />;
      case 'Zap':
        return <Zap className="w-5 h-5 text-amber-600" />;
      case 'MessageSquareShare':
        return <MessageSquareShare className="w-5 h-5 text-amber-600" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-amber-600" />;
      case 'Award':
        return <Award className="w-5 h-5 text-amber-600" />;
      default:
        return <Target className="w-5 h-5 text-amber-600" />;
    }
  };

  return (
    <section id="features" className="py-20 lg:py-28 bg-stone-50 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <span className="text-amber-700 font-bold text-xs tracking-wider uppercase bg-amber-100/70 border border-amber-200 px-3 py-1 rounded-full mb-3">
            لماذا تختار منصة ارتقاء؟
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
            نتائج قيادية ومالية ملموسة، بعيداً عن التنظير
          </h2>
          <div className="w-16 h-1 bg-amber-500 rounded-full mt-4 mb-4" />
          <p className="text-slate-600 text-base sm:text-lg">
            تم بناء برامجنا خصيصاً لتمنحك الأدوات والوضوح والشجاعة لاتخاذ القرارات ذات الأثر الأعلى في عملك.
          </p>
        </div>

        {/* 6 Value Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {VALUE_PROPOSITIONS.map((prop, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200 rounded-2xl p-6 shadow-2xs hover:shadow-md hover:border-amber-300 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-11 h-11 rounded-xl bg-amber-50 border border-amber-200/80 flex items-center justify-center mb-4">
                  {getIcon(prop.icon)}
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  {prop.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {prop.desc}
                </p>
              </div>

              <div className="mt-4 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs text-amber-700 font-semibold">
                <span>قيمة نوعية مضمونة</span>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Section: Generic Consulting vs. Ertiqa Executive Coaching */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-sm overflow-hidden">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">
              المقارنة المباشرة
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
              ما الفرق بين التدريب التقليدي ومنهجية د. طارق المنصور؟
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Traditional Generic Coaching */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 sm:p-6 opacity-85">
              <div className="flex items-center gap-2 mb-4 text-slate-500 font-bold text-sm">
                <div className="w-6 h-6 rounded-full bg-slate-200 flex items-center justify-center text-slate-600">
                  <X className="w-3.5 h-3.5" />
                </div>
                <span>التدريب والاستشارات التقليدية</span>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span>نصائح عامة وقوالب جاهزة لا تناسب تحدياتك الخاصة.</span>
                </li>
                <li className="flex items-start gap-2">
                  <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span>تنظير أكاديمي بحت يفتقر لواقعية بيئة الأعمال والتنفيذ.</span>
                </li>
                <li className="flex items-start gap-2">
                  <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span>انقطاع التواصل بمجرد انتهاء وقت الجلسة دون أي مرافقة.</span>
                </li>
                <li className="flex items-start gap-2">
                  <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span>لا توجد مؤشرات أداء (KPIs) ولا يوجد أي ضمان مالي.</span>
                </li>
              </ul>
            </div>

            {/* Ertiqa Methodology */}
            <div className="bg-gradient-to-br from-amber-50/70 to-white border-2 border-amber-400/80 rounded-xl p-5 sm:p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-4 text-amber-900 font-bold text-sm">
                <div className="w-6 h-6 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span>منهجية ارتقاء مع د. طارق المنصور</span>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-800">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>تشخيص تفصيلي مسبق وتفصيل خطة عمل خاصة لواقعك وأرقامك.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>أدوات ونماذج عمل مالية وتشغيلية قابلة للتطبيق الفوري في 48 ساعة.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>متابعة خاصة ومستمرة عبر واتساب لمراجعة القرارات أولاً بأول.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>ضمان استرداد القيمة 100% إن لم تلمس أثراً نوعياً من أول نصف ساعة.</span>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* Big Satisfaction Guarantee Badge */}
        <div className="mt-12 bg-slate-900 text-white rounded-2xl p-6 sm:p-8 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-right">
            <div className="w-16 h-16 rounded-2xl bg-amber-500/20 border border-amber-400/40 text-amber-400 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white mb-1">
                ضمان الرضا واسترداد الاستثمار بنسبة 100%
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed">
                استثمارك محمي بالكامل. إذا شعرت خلال أول 30 دقيقة من جلستك أن الاستشارة لم تقدم لك الوضوح والقيمة المتوقعة، يمكنك طلب استرجاع الرسوم فوراً.
              </p>
            </div>
          </div>
          <div className="shrink-0">
            <span className="inline-block text-amber-400 font-bold border border-amber-500/40 bg-amber-500/10 px-4 py-2 rounded-xl text-xs sm:text-sm font-mono">
              ثقة مطلقة في جودة الأثر
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
