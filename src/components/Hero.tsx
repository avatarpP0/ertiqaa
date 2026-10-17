import React from 'react';
import { Calendar, ArrowLeft, ShieldCheck, CheckCircle2, Star, Sparkles, Award } from 'lucide-react';
import { COACH_INFO } from '../data/mockData';

interface HeroProps {
  onOpenBooking: (programId?: string) => void;
  onScrollToQuiz: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onScrollToQuiz }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white pt-12 pb-20 lg:pt-20 lg:pb-28">
      {/* Subtle Background Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Subtle Grid overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, #fff 1px, transparent 1px)`,
          backgroundSize: '32px 32px'
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Main Copy / Left in RTL (Content column) */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Kicker Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/80 text-amber-400 text-xs sm:text-sm font-semibold mb-6 shadow-inner">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>استشارات استراتيجية وتطوير تنفيذي رفيع المستوى</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-black text-white leading-[1.25] tracking-tight mb-6">
              حوّل رؤيتك القيادية إلى{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-l from-amber-200 via-amber-400 to-amber-500">
                قرارات حاسمة ونمو ربحي مستدام
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl font-normal">
              نرافق الرؤساء التنفيذيين، رواد الأعمال، وأصحاب المشاريع لفك اختناقات العمل، 
              بناء فرق عالية الإنجاز، ومضاعفة الأرباح عبر منهجية استشارية مجربة تجمع بين 
              العمق الأكاديمي وحلول السوق الواقعية.
            </p>

            {/* Value bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 w-full max-w-xl text-sm text-slate-200">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>جلسات فردية مركزة 1-on-1 أونلاين</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>خطة عمل تنفيذية مفصلة لكل عميل</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>سرية تامة واتفاقية حماية بيانات (NDA)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>ضمان استرداد كامل للاستثمار 100%</span>
              </div>
            </div>

            {/* Call to Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <button
                onClick={() => onOpenBooking('strategy-session')}
                className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold px-7 py-3.5 rounded-xl shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30 transition-all flex items-center justify-center gap-2.5 text-base active:scale-98 group cursor-pointer"
              >
                <Calendar className="w-5 h-5 text-slate-950" />
                <span>احجز جلستك الاستراتيجية</span>
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onScrollToQuiz}
                className="bg-slate-800/80 hover:bg-slate-800 border border-slate-700 text-white font-semibold px-5 py-3.5 rounded-xl transition-all flex items-center justify-center gap-2 text-sm hover:border-slate-600 cursor-pointer"
              >
                <span>حدّد البرنامج الأنسب لك (اختبار 45 ثانية)</span>
              </button>
            </div>

            {/* Trust Quote / Reassurance */}
            <div className="mt-8 pt-6 border-t border-slate-800/80 flex items-center gap-3 text-xs text-slate-400">
              <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
              <span>
                ضمان كامل: إذا لم تلمس وضوحاً نوعياً في أول 30 دقيقة من اللقاء، تسترد استثمارك فوراً.
              </span>
            </div>

          </div>

          {/* Executive Card / Right in RTL */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Back Card Glow */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-amber-500 to-blue-600 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition duration-1000"></div>

              {/* Coach Profile Card */}
              <div className="relative bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-7 shadow-2xl">
                
                {/* Image + Live Tag */}
                <div className="relative mb-6 rounded-xl overflow-hidden aspect-[4/3] bg-slate-800">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800"
                    alt={COACH_INFO.name}
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
                  
                  {/* Floating Availability Pill */}
                  <div className="absolute top-3 right-3 bg-slate-950/80 backdrop-blur-md border border-slate-700/80 text-white text-xs px-3 py-1.5 rounded-lg flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                    <span className="font-medium">مواعيد هذا الأسبوع متاحة</span>
                  </div>

                  {/* Rating inside image */}
                  <div className="absolute bottom-3 right-3 left-3 flex items-center justify-between text-xs text-white">
                    <div className="flex items-center gap-1 bg-slate-900/90 backdrop-blur-md px-2.5 py-1 rounded-md border border-slate-700">
                      <div className="flex text-amber-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                        ))}
                      </div>
                      <span className="font-bold text-amber-400 font-mono">5.0</span>
                    </div>

                    <span className="bg-slate-900/90 backdrop-blur-md px-2.5 py-1 rounded-md border border-slate-700 text-slate-300">
                      +2,400 جلسة موثقة
                    </span>
                  </div>
                </div>

                {/* Identity Details */}
                <div className="space-y-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-white flex items-center gap-2">
                        <span>{COACH_INFO.name}</span>
                        <Award className="w-5 h-5 text-amber-400" />
                      </h3>
                      <p className="text-amber-400 text-xs font-medium mt-0.5">
                        {COACH_INFO.title}
                      </p>
                    </div>
                  </div>

                  <p className="text-slate-300 text-xs leading-relaxed border-t border-slate-800 pt-3">
                    مستشار معتمد للقيادات التنفيذية ومؤسسي الشركات في الخليج العربي. 
                    متخصص في هندسة النمو، فك النزاعات الإدارية، وتطوير استراتيجيات التوسع المؤسسي.
                  </p>

                  {/* Highlights Mini Grid */}
                  <div className="grid grid-cols-2 gap-2 pt-2 text-xs">
                    <div className="bg-slate-800/60 border border-slate-800 p-2.5 rounded-lg">
                      <span className="text-slate-400 block text-[11px]">الاعتماد الدولي</span>
                      <span className="text-white font-semibold">ماستر كوتش MCC</span>
                    </div>
                    <div className="bg-slate-800/60 border border-slate-800 p-2.5 rounded-lg">
                      <span className="text-slate-400 block text-[11px]">طريقة اللقاء</span>
                      <span className="text-emerald-400 font-semibold">زووم مباشر خاص</span>
                    </div>
                  </div>

                  {/* Quick Card Action */}
                  <button
                    onClick={() => onOpenBooking('strategy-session')}
                    className="w-full mt-2 bg-slate-800 hover:bg-slate-700 text-amber-400 border border-amber-500/30 font-semibold py-2.5 rounded-xl transition-all text-xs flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>عرض جدول المواعيد والأسعار</span>
                  </button>
                </div>

              </div>

            </div>
          </div>

        </div>

        {/* Global Statistics Strip */}
        <div className="mt-16 pt-10 border-t border-slate-800/80 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {COACH_INFO.stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center text-center p-3">
              <span className="text-3xl sm:text-4xl font-extrabold text-amber-400 font-mono tracking-tight">
                {stat.value}
              </span>
              <span className="text-sm font-bold text-white mt-1">
                {stat.label}
              </span>
              <span className="text-xs text-slate-400 mt-0.5">
                {stat.sub}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
