import React, { useState } from 'react';
import { Calculator, TrendingUp, Clock, DollarSign, ArrowLeft, Sparkles, CheckCircle2 } from 'lucide-react';

interface RoiCalculatorProps {
  onOpenBooking: () => void;
}

export const RoiCalculator: React.FC<RoiCalculatorProps> = ({ onOpenBooking }) => {
  // Annual Revenue in SAR
  const [annualRevenue, setAnnualRevenue] = useState<number>(1500000);
  // Team size
  const [teamSize, setTeamSize] = useState<number>(12);
  // Focus area
  const [focusArea, setFocusArea] = useState<'sales' | 'operations' | 'leadership'>('sales');

  // Multipliers based on focus area
  const focusMultipliers = {
    sales: { growthPercent: 0.18, hoursReclaimedPerMonth: 22 },
    operations: { growthPercent: 0.14, hoursReclaimedPerMonth: 34 },
    leadership: { growthPercent: 0.12, hoursReclaimedPerMonth: 40 },
  };

  const currentMultiplier = focusMultipliers[focusArea];

  // Estimated ROI calculation
  const estimatedAnnualGrowth = Math.round(annualRevenue * currentMultiplier.growthPercent);
  const estimatedHoursSavedYearly = currentMultiplier.hoursReclaimedPerMonth * 12;
  const estimatedInvestment = 9800; // Benchmark program cost
  const roiMultiplier = Math.max(2, Math.round(estimatedAnnualGrowth / estimatedInvestment));

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('ar-SA').format(val) + ' ر.س';
  };

  return (
    <section id="roi-calculator" className="py-20 bg-slate-900 text-white relative overflow-hidden border-b border-slate-800">
      {/* Background radial gradients */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-amber-400 text-xs font-semibold mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>حاسبة الأثر والجدوى الاستثمارية</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
            احسب العائد المالي والزمني المتوقع على استشارتك
          </h2>
          <div className="w-16 h-1 bg-amber-500 rounded-full mx-auto mt-4 mb-4" />
          <p className="text-slate-300 text-sm sm:text-base">
            الاستشارة التنفيذية ليست تكلفة، بل استثمار يعود بأضعاف قيمته في تنظيم العمليات وتفادي الأخطاء المكلفة.
          </p>
        </div>

        {/* Interactive Calculator Body */}
        <div className="bg-slate-800/80 border border-slate-700 rounded-2xl p-6 sm:p-10 shadow-2xl backdrop-blur-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Controls Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-right">
            
            {/* Control 1: Revenue Slider */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs sm:text-sm font-bold text-slate-200">
                  حجم إيراداتك السنوية الحالية التقريبية:
                </span>
                <span className="font-mono text-amber-400 font-extrabold text-base sm:text-lg">
                  {formatCurrency(annualRevenue)}
                </span>
              </div>
              <input
                type="range"
                min={300000}
                max={15000000}
                step={100000}
                value={annualRevenue}
                onChange={(e) => setAnnualRevenue(Number(e.target.value))}
                className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-amber-500"
              />
              <div className="flex justify-between text-[11px] text-slate-400 mt-1 font-mono">
                <span>300 ألف ر.س</span>
                <span>15 مليون ر.س+</span>
              </div>
            </div>

            {/* Control 2: Team Size Slider */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs sm:text-sm font-bold text-slate-200">
                  حجم فريق العمل أو المنظمة:
                </span>
                <span className="font-mono text-amber-400 font-extrabold text-base sm:text-lg">
                  {teamSize} فرد
                </span>
              </div>
              <input
                type="range"
                min={2}
                max={80}
                step={1}
                value={teamSize}
                onChange={(e) => setTeamSize(Number(e.target.value))}
                className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-amber-500"
              />
              <div className="flex justify-between text-[11px] text-slate-400 mt-1 font-mono">
                <span>فريق صغير (2)</span>
                <span>شركة متوسطة (80+)</span>
              </div>
            </div>

            {/* Control 3: Focus Area */}
            <div>
              <span className="block text-xs sm:text-sm font-bold text-slate-200 mb-2.5">
                المجال ذو الأولوية القصوى لديك الآن:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                <button
                  type="button"
                  onClick={() => setFocusArea('sales')}
                  className={`p-3 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                    focusArea === 'sales'
                      ? 'bg-amber-500 text-slate-950 border-amber-500 shadow-md'
                      : 'bg-slate-900/60 border-slate-700 text-slate-300 hover:border-slate-600'
                  }`}
                >
                  توسيع المبيعات وهوامش الربح
                </button>
                <button
                  type="button"
                  onClick={() => setFocusArea('operations')}
                  className={`p-3 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                    focusArea === 'operations'
                      ? 'bg-amber-500 text-slate-950 border-amber-500 shadow-md'
                      : 'bg-slate-900/60 border-slate-700 text-slate-300 hover:border-slate-600'
                  }`}
                >
                  وقف الهدر التشغيلي والتفويض
                </button>
                <button
                  type="button"
                  onClick={() => setFocusArea('leadership')}
                  className={`p-3 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                    focusArea === 'leadership'
                      ? 'bg-amber-500 text-slate-950 border-amber-500 shadow-md'
                      : 'bg-slate-900/60 border-slate-700 text-slate-300 hover:border-slate-600'
                  }`}
                >
                  صناعة القرار وحل النزاعات
                </button>
              </div>
            </div>

          </div>

          {/* Results Summary Card (5 cols) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-slate-950 border border-amber-500/40 rounded-2xl p-6 sm:p-7 shadow-xl relative text-right">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-4">
              <span className="text-xs font-bold text-slate-400 uppercase">
                الأثر التقديري المتوقع
              </span>
              <span className="text-xs font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-800/80 px-2 py-0.5 rounded">
                مبني على نتائج عملاء سابقين
              </span>
            </div>

            <div className="space-y-4">
              <div>
                <span className="text-xs text-slate-400 block">
                  النمو أو التوفير السنوي المحتمل:
                </span>
                <span className="text-3xl font-black text-amber-400 font-mono tracking-tight block mt-0.5">
                  +{formatCurrency(estimatedAnnualGrowth)}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="bg-slate-800/60 p-3 rounded-xl border border-slate-800">
                  <span className="text-[11px] text-slate-400 block">ساعات قيادية موفرة:</span>
                  <span className="font-extrabold text-white font-mono text-base">
                    +{estimatedHoursSavedYearly} ساعة/سنة
                  </span>
                </div>
                <div className="bg-slate-800/60 p-3 rounded-xl border border-slate-800">
                  <span className="text-[11px] text-slate-400 block">مضاعف الاستثمار (ROI):</span>
                  <span className="font-extrabold text-emerald-400 font-mono text-base">
                    {roiMultiplier}x أضعاف
                  </span>
                </div>
              </div>

              <p className="text-xs text-slate-400 leading-relaxed pt-2">
                * الحسابات تقديرية وتستند إلى متوسط نتائج العملاء الذين طبقوا خطط العمل التنفيذية المعتمدة خلال أول 90 يوماً.
              </p>

              <button
                onClick={onOpenBooking}
                className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold py-3.5 px-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 text-sm cursor-pointer mt-4"
              >
                <span>احجز جلستك وابدأ بمضاعفة عوائدك</span>
                <ArrowLeft className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
