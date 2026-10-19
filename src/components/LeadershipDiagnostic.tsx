import React, { useState } from 'react';
import { Activity, ShieldCheck, Check, MessageCircle, ArrowLeft, ArrowRight, RefreshCw } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { getDiagnosticDimensions } from '../data/mockData';

export const LeadershipDiagnostic: React.FC = () => {
  const { language, isRtl, t } = useLanguage();
  const dimensions = getDiagnosticDimensions(language);

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
        stage: language === 'en'
          ? 'Growth Mastery & Scalable Governance Stage'
          : 'مرحلة القيادة التوسعية المنضبطة (Growth Mastery)',
        color: 'text-emerald-400',
        bgColor: 'bg-emerald-950/60 border-emerald-500/40',
        summary: language === 'en'
          ? 'You maintain strong executive systems and delegation; your next horizon is regional expansion, institutional partnerships, and board structuring.'
          : 'تمتلك أصولاً إدارية ممتازة وتفويضاً جيداً؛ التحدي القادم لديك هو فتح أسواق إقليمية وهندسة شراكات استثمارية أوسع.',
        recommendation: language === 'en'
          ? 'Elite Executive Program or Corporate Alignment Retreat'
          : 'برنامج النخبة القيادي أو ورش العمل التوسعية'
      };
    } else if (percentage >= 55) {
      return {
        stage: language === 'en'
          ? 'The Vulnerable Scale & Bottleneck Stage'
          : 'مرحلة عنق الزجاجة والنمو المحفوف بالمخاطر (The Bottleneck)',
        color: 'text-amber-400',
        bgColor: 'bg-amber-950/60 border-amber-500/40',
        summary: language === 'en'
          ? 'Your business generates top-line revenue, but you remain the sole operational engine; absent delegation and pricing logic risk severe cash drag.'
          : 'شركتك تحقق عوائد ولكنك لا تزال "المحرك الوحيد"؛ غياب نظام تفويض قوي واستراتيجية تسعير واضحة يهدد بنزيف السيولة والاحتراق الشخصي.',
        recommendation: language === 'en'
          ? 'Strategic Compass 1-on-1 to Unfreeze Bottlenecks'
          : 'جلسة البوصلة الاستراتيجية المكثفة لفك الاختناق'
      };
    } else {
      return {
        stage: language === 'en'
          ? 'Acute Friction & Operational Burnout Stage'
          : 'مرحلة التخبط التشغيلي واستنزاف السيولة (High Friction)',
        color: 'text-rose-400',
        bgColor: 'bg-rose-950/60 border-rose-500/40',
        summary: language === 'en'
          ? 'Daily fires consume your executive capacity; urgent advisory intervention is vital to triage priorities and halt compounding losses.'
          : 'تستنزف معظم يومك في إطفاء الحرائق الروتينية؛ تحتاج تدخلاً استشارياً عاجلاً لإعادة ترتيب الأولويات وتفادي تفاقم الخسائر.',
        recommendation: language === 'en'
          ? 'Emergency Diagnostic Advisory Session This Week'
          : 'استشارة تشخيصية طارئة خلال هذا الأسبوع'
      };
    }
  };

  const outcome = getAssessmentOutcome();

  const handleSendToWhatsApp = () => {
    const text = encodeURIComponent(
      language === 'en'
        ? `Hello Dr. Tarek Al-Mansoor, I took the Leadership Diagnostic Assessment on your website. My score was ${percentage}%\nStage: ${outcome.stage}\nScores: Strategy (${scores.strategy}/5) - Delegation (${scores.delegation}/5) - Finances (${scores.finances}/5) - Focus (${scores.energy}/5)\nI would like to discuss next steps with you.`
        : `مرحباً د. طارق المنصور، أجريت فحص النضج القيادي عبر المنصة، وكانت نتيجتي ${percentage}%\n` +
          `التشخيص: ${outcome.stage}\n` +
          `النقاط التفصيلية: الاستراتيجية (${scores.strategy}/5) - التفويض (${scores.delegation}/5) - المالية (${scores.finances}/5) - التوازن الذهني (${scores.energy}/5)\n` +
          `أود مناقشة خطة الحلول والاستشارة معك.`
    );
    window.open(`https://wa.me/201149556339?text=${text}`, '_blank');
  };

  return (
    <section id="diagnostic" className="py-24 bg-[#0B0F17] text-white border-b border-white/5 relative">
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 relative z-10 ${isRtl ? 'text-right' : 'text-left'}`}>
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold mb-3">
            <Activity className="w-3.5 h-3.5" />
            <span>{t.diagKicker}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-black text-white leading-tight">
            {t.diagTitle}
          </h2>
          <div className="w-16 h-1 bg-amber-500 rounded-full mt-4 mb-4" />
          <p className="text-slate-300 text-base sm:text-lg">
            {t.diagSubtitle}
          </p>
        </div>

        {/* Assessment Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Dimension Sliders (7 cols) */}
          <div className="lg:col-span-7 space-y-6 bg-[#0E131F] border border-white/10 rounded-3xl p-6 sm:p-9 shadow-2xl">
            {dimensions.map((dim) => {
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
                    {[1, 2, 3, 4, 5].map((val) => (
                      <button
                        key={val}
                        type="button"
                        onClick={() => handleScoreChange(dim.id, val)}
                        className={`py-2 rounded-xl text-xs font-bold font-mono transition-all cursor-pointer ${
                          currentVal === val
                            ? 'bg-amber-400 text-slate-950 font-black shadow-md scale-102 border-amber-300'
                            : 'bg-slate-900 border border-white/10 text-slate-300 hover:border-amber-400/50 hover:bg-slate-800'
                        }`}
                      >
                        {val}
                      </button>
                    ))}
                  </div>

                  <div className="flex justify-between text-[11px] text-slate-400 px-1">
                    <span>{dim.lowLabel}</span>
                    <span>{dim.highLabel}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Real-time Outcome Card (5 cols) */}
          <div className="lg:col-span-5 bg-[#0E131F] border border-amber-500/30 rounded-3xl p-7 sm:p-8 shadow-2xl sticky top-28">
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                {t.diagTotalScoreLabel}
              </span>
              <button
                onClick={() => setScores({ strategy: 3, delegation: 2, finances: 3, energy: 2 })}
                className="text-xs text-slate-400 hover:text-white flex items-center gap-1 cursor-pointer"
                title="Reset"
              >
                <RefreshCw className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Score Ring / Bar */}
            <div className="mb-6">
              <div className="flex items-baseline justify-between mb-2">
                <span className="text-4xl font-black text-white font-mono tracking-tight">
                  {percentage}%
                </span>
                <span className={`text-xs font-bold font-mono ${outcome.color}`}>
                  {totalPoints} / 20 {language === 'en' ? 'Points' : 'نقطة'}
                </span>
              </div>
              <div className="w-full bg-slate-900 h-2.5 rounded-full overflow-hidden border border-white/5">
                <div
                  className="bg-gradient-to-r from-amber-400 to-amber-500 h-full rounded-full transition-all duration-500"
                  style={{ width: `${percentage}%` }}
                />
              </div>
            </div>

            {/* Result Stage Badge */}
            <div className={`p-4 rounded-2xl border mb-5 ${outcome.bgColor}`}>
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-300 block mb-1">
                {t.diagStatusLabel}
              </span>
              <h4 className={`text-base font-black ${outcome.color}`}>
                {outcome.stage}
              </h4>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
              {outcome.summary}
            </p>

            <div className="bg-slate-900/80 border border-white/5 p-4 rounded-2xl mb-6">
              <span className="text-xs font-bold text-amber-300 block mb-1">
                {t.diagFastTrackLabel}
              </span>
              <p className="text-xs text-slate-200 font-semibold">
                {outcome.recommendation}
              </p>
            </div>

            {/* Direct WhatsApp Report Send */}
            <button
              onClick={handleSendToWhatsApp}
              className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3.5 px-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 text-xs sm:text-sm cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 shrink-0" />
              <span>{t.diagBtnWhatsApp}</span>
              {isRtl ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
            </button>

            <div className="mt-4 flex items-center justify-center gap-1.5 text-slate-400 text-[11px]">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>{t.diagNdaNote}</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
