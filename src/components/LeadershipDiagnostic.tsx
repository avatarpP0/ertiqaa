import React, { useState } from 'react';
import { Activity, ShieldCheck, Check, Sparkles, MessageCircle, ArrowLeft, RefreshCw, Award } from 'lucide-react';
import { COACH_INFO } from '../data/mockData';

interface DiagnosticDimension {
  id: string;
  title: string;
  question: string;
  lowLabel: string;
  highLabel: string;
}

const DIMENSIONS: DiagnosticDimension[] = [
  {
    id: 'strategy',
    title: '1. وضوح القرارات والأولويات الاستراتيجية',
    question: 'ما مدى وضوح أهدافك السنوية وقدرتك على اتخاذ القرارات المصيرية دون تردد؟',
    lowLabel: 'تشتت وتردد في حسم الأمور',
    highLabel: 'وضوح استراتيجي وحسم سريع'
  },
  {
    id: 'delegation',
    title: '2. تفويض الصلاحيات واستقلالية الفريق',
    question: 'هل تسير الأعمال والعمليات بسلاسة حين تغيب عن العمل لمدة أسبوعين متواصلين؟',
    lowLabel: 'تتوقف الأعمال فور غيابي',
    highLabel: 'فريق مستقل ينجز بكفاءة تامة'
  },
  {
    id: 'finances',
    title: '3. استقرار التدفقات النقدية وهوامش الربحية',
    question: 'ما مدى انتظام السيولة النقدية وتفادي أزمات الرواتب والتسليم للعملاء؟',
    lowLabel: 'نزيف سيولة وضغط مالي مستمر',
    highLabel: 'تدفقات ثابتة وهوامش ربح متصاعدة'
  },
  {
    id: 'energy',
    title: '4. التوازن الذهني وراحة البال القيادية',
    question: 'هل تمتلك وقتاً صافياً للتفكير الاستراتيجي وحياتك الشخصية بعيداً عن ضغط العمل؟',
    lowLabel: 'احتراق ذهني وإرهاق يومي',
    highLabel: 'صفاء ذهني وتوازن استثنائي'
  }
];

export const LeadershipDiagnostic: React.FC = () => {
  const [scores, setScores] = useState<Record<string, number>>({
    strategy: 3,
    delegation: 2,
    finances: 3,
    energy: 2
  });

  const handleScoreChange = (dimensionId: string, value: number) => {
    setScores((prev) => ({ ...prev, [dimensionId]: value }));
  };

  const totalPoints = Object.values(scores).reduce((a, b) => a + b, 0);
  const percentage = Math.round((totalPoints / 20) * 100);

  const getAssessmentOutcome = () => {
    if (percentage >= 80) {
      return {
        stage: 'مرحلة القيادة التوسعية المنضبطة (Growth Mastery)',
        color: 'text-emerald-400',
        bgColor: 'bg-emerald-950/60 border-emerald-500/40',
        summary: 'تمتلك أصولاً إدارية ممتازة وتفويضاً جيداً؛ التحدي القادم لديك هو فتح أسواق إقليمية وهندسة شراكات استثمارية أوسع.',
        recommendation: 'برنامج النخبة القيادي أو ورش العمل التوسعية'
      };
    } else if (percentage >= 55) {
      return {
        stage: 'مرحلة عنق الزجاجة والنمو المحفوف بالمخاطر (The Bottleneck)',
        color: 'text-amber-400',
        bgColor: 'bg-amber-950/60 border-amber-500/40',
        summary: 'شركتك تحقق عوائد ولكنك لا تزال "المحرك الوحيد"؛ غياب نظام تفويض قوي واستراتيجية تسعير واضحة يهدد بنزيف السيولة والاحتراق الشخصي.',
        recommendation: 'جلسة البوصلة الاستراتيجية المكثفة لفك الاختناق'
      };
    } else {
      return {
        stage: 'مرحلة التخبط التشغيلي واستنزاف السيولة (High Friction)',
        color: 'text-rose-400',
        bgColor: 'bg-rose-950/60 border-rose-500/40',
        summary: 'تستنزف معظم يومك في إطفاء الحرائق الروتينية؛ تحتاج تدخلاً استشارياً عاجلاً لإعادة ترتيب الأولويات وتفادي تفاقم الخسائر.',
        recommendation: 'استشارة تشخيصية طارئة خلال هذا الأسبوع'
      };
    }
  };

  const outcome = getAssessmentOutcome();

  const handleSendToWhatsApp = () => {
    const text = encodeURIComponent(
      `مرحباً د. طارق المنصور، أجريت فحص النضج القيادي عبر المنصة، وكانت نتيجتي ${percentage}%\n` +
      `التشخيص: ${outcome.stage}\n` +
      `النقاط التفصيلية: الاستراتيجية (${scores.strategy}/5) - التفويض (${scores.delegation}/5) - المالية (${scores.finances}/5) - التوازن الذهني (${scores.energy}/5)\n` +
      `أود مناقشة خطة الحلول والاستشارة معك.`
    );
    window.open(`https://wa.me/201149556339?text=${text}`, '_blank');
  };

  return (
    <section id="diagnostic" className="py-24 bg-[#0B0F17] text-white border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-right">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold mb-3">
            <Activity className="w-3.5 h-3.5" />
            <span>فحص الأداء المؤسسي السريع</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-black text-white leading-tight">
            أداة تقييم النضج القيادي وفك اختناقات العمل
          </h2>
          <div className="w-16 h-1 bg-amber-500 rounded-full mt-4 mb-4" />
          <p className="text-slate-300 text-base sm:text-lg">
            قيّم 4 ركائز حاسمة في شركتك خلال دقيقة واحدة، واكتشف العائق الخفي الذي يعطل نموك.
          </p>
        </div>

        {/* Assessment Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Dimension Sliders / Left in layout (7 cols) */}
          <div className="lg:col-span-7 space-y-6 bg-[#0E131F] border border-white/10 rounded-3xl p-6 sm:p-9 shadow-2xl">
            {DIMENSIONS.map((dim) => {
              const currentVal = scores[dim.id];
              return (
                <div key={dim.id} className="border-b border-white/5 pb-6 last:border-b-0 last:pb-0">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs sm:text-sm text-slate-400 font-bold">
                      {dim.title}
                    </span>
                    <span className="text-amber-400 font-bold font-mono text-sm bg-slate-900 border border-white/10 px-2.5 py-0.5 rounded-lg">
                      {currentVal} / 5
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-white font-medium mb-3">
                    {dim.question}
                  </p>

                  {/* 1 to 5 Interactive Scale Buttons */}
                  <div className="grid grid-cols-5 gap-2 mb-2">
                    {[1, 2, 3, 4, 5].map((num) => {
                      const isSelected = currentVal === num;
                      return (
                        <button
                          key={num}
                          type="button"
                          onClick={() => handleScoreChange(dim.id, num)}
                          className={`py-2 rounded-xl text-xs font-black transition-all cursor-pointer font-mono ${
                            isSelected
                              ? 'bg-amber-400 text-slate-950 shadow-md scale-102'
                              : 'bg-slate-900/80 border border-white/5 text-slate-400 hover:text-white hover:border-white/20'
                          }`}
                        >
                          {num}
                        </button>
                      );
                    })}
                  </div>

                  <div className="flex justify-between text-[11px] text-slate-500 font-medium">
                    <span>{dim.lowLabel}</span>
                    <span>{dim.highLabel}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Diagnostic Result Card (5 cols) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-[#0E131F] border-2 border-amber-500/40 rounded-3xl p-7 sm:p-8 shadow-2xl text-right sticky top-28">
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-5">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                مؤشر النضج القيادي الإجمالي
              </span>
              <span className="text-2xl font-black text-amber-400 font-mono">
                {percentage}%
              </span>
            </div>

            {/* Score Bar */}
            <div className="w-full bg-slate-950 h-2.5 rounded-full overflow-hidden mb-6 border border-white/10">
              <div
                className="bg-gradient-to-r from-amber-400 to-amber-500 h-full transition-all duration-300 rounded-full"
                style={{ width: `${percentage}%` }}
              />
            </div>

            {/* Classification Card */}
            <div className={`p-4 rounded-2xl border ${outcome.bgColor} mb-5`}>
              <span className="text-[11px] text-slate-400 block mb-1">تصنيف الحالة الراهنة:</span>
              <h4 className={`text-base font-black ${outcome.color} mb-2 leading-snug`}>
                {outcome.stage}
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed font-normal">
                {outcome.summary}
              </p>
            </div>

            {/* Recommended Action */}
            <div className="bg-slate-950/80 border border-white/10 rounded-2xl p-4 mb-6 text-xs text-slate-300">
              <span className="text-slate-400 block mb-1">المسار الأسرع لحل الاختناق:</span>
              <strong className="text-white block text-sm">{outcome.recommendation}</strong>
            </div>

            {/* Direct WhatsApp Report Dispatch */}
            <button
              onClick={handleSendToWhatsApp}
              className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-black py-3.5 px-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 text-xs sm:text-sm cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>إرسال تقريري لواتساب (01149556339) لمناقشته</span>
            </button>

            <span className="text-[11px] text-slate-400 block text-center mt-3">
              استشارة سرية ومحمية باتفاقية عدم إفصاح (NDA).
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};
