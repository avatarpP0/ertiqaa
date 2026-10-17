import React from 'react';
import { Award, BookOpen, Briefcase, CheckCircle, ChevronLeft, Quote, Sparkles, Check } from 'lucide-react';
import { COACH_INFO } from '../data/mockData';

interface AboutCoachProps {
  onOpenBooking: () => void;
}

export const AboutCoach: React.FC<AboutCoachProps> = ({ onOpenBooking }) => {
  return (
    <section id="about" className="py-24 bg-[#0E131F] text-white border-b border-white/5 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-amber-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <span className="text-amber-400 font-bold text-xs tracking-wider uppercase bg-amber-500/10 border border-amber-500/30 px-3.5 py-1 rounded-full mb-3">
            المستشار والمدرب التنفيذي
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-black text-white leading-tight">
            شريكك الاستراتيجي في صناعة التحول والنجاح المستدام
          </h2>
          <div className="w-16 h-1 bg-amber-500 rounded-full mt-4 mb-5" />
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            خبرة أكثر من 15 عاماً في مرافقة القيادات ورواد الأعمال، ندمج بين التفكير الاستراتيجي العالمي وواقع بيئة الأعمال العربية.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Visual Column / Executive Image & Milestones */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-3xl overflow-hidden border border-amber-500/30 shadow-2xl bg-slate-900 group">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800"
                alt="د. طارق المنصور - مستشار تنفيذي"
                className="w-full h-[460px] object-cover object-top group-hover:scale-102 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E131F] via-[#0E131F]/30 to-transparent" />
              
              <div className="absolute bottom-6 right-6 left-6 text-white text-right">
                <span className="text-amber-400 text-xs font-bold block mb-1">
                  الرسالة والرؤية
                </span>
                <p className="text-sm font-medium leading-relaxed italic text-slate-200">
                  "القيادة الفعالة ليست كثرة القرارات، بل وضوح الرؤية والشجاعة في تنفيذ ما يصنع الفارق الحقيقي في نتائج المنظمة."
                </p>
                <span className="text-xs text-amber-300/80 block mt-2 font-mono">
                  — د. طارق المنصور
                </span>
              </div>
            </div>

            {/* Media badges */}
            <div className="bg-slate-900/70 border border-white/10 p-5 rounded-2xl text-right">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-3">
                ظهور ومشاركات فكرية وإعلامية
              </span>
              <div className="flex flex-wrap items-center gap-2">
                {COACH_INFO.mediaFeatures.map((media, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-bold text-slate-200 bg-[#0B0F17] border border-white/10 px-3.5 py-1.5 rounded-xl shadow-2xs hover:border-amber-400/40 transition-colors"
                  >
                    {media}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Bio & Credentials Details */}
          <div className="lg:col-span-7 space-y-8 text-right">
            <div>
              <h3 className="text-2xl sm:text-3xl font-black text-white mb-4">
                من هو د. طارق المنصور؟
              </h3>
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base mb-4 font-normal">
                خبير ومستشار استراتيجي، يحمل درجة الدكتوراه في الإدارة الاستراتيجية، وحاصل على أعلى اعتماد دولي في التوجيه القيادي (MCC - Master Certified Coach) من الاتحاد الدولي للكوتشينغ بالولايات المتحدة الأمريكية.
              </p>
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base font-normal">
                خلال مسيرته، أشرف على توجيه أكثر من 180 شركة ناشئة ومتوسطة في قطاعات التقنية، التجارة والتجزئة، الخدمات اللوجستية، والاستشارات، إلى جانب تقديم جلسات كوتشينغ مخصصة لرؤساء تنفيذيين ونواب وزراء وقيادات مجالس إدارات.
              </p>
            </div>

            {/* Certifications Grid */}
            <div>
              <h4 className="text-sm font-bold text-amber-400 uppercase tracking-wider mb-4 flex items-center gap-2 justify-end">
                <span>الاعتمادات والمؤهلات الأكاديمية</span>
                <Award className="w-4 h-4 text-amber-400" />
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {COACH_INFO.certifications.map((cert, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-4 rounded-2xl border border-white/10 bg-slate-900/60 hover:bg-slate-900 hover:border-amber-400/30 transition-all text-right"
                  >
                    <div className="w-9 h-9 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-4 h-4 stroke-[3]" />
                    </div>
                    <div>
                      <h5 className="text-sm font-bold text-white">
                        {cert.title}
                      </h5>
                      <span className="text-xs text-slate-400 mt-0.5 block">
                        {cert.issuer}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Guiding Principles */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-amber-500/10 to-transparent border border-amber-500/30 text-right">
              <h4 className="text-sm font-bold text-amber-300 mb-3 flex items-center gap-2 justify-end">
                <span>المنهجية المتبعة في التدريب والاستشارة</span>
                <Sparkles className="w-4 h-4 text-amber-400" />
              </h4>
              <ul className="text-xs sm:text-sm text-slate-200 space-y-2.5 list-none p-0">
                <li className="flex items-center gap-2.5 justify-end">
                  <span><strong>لا قوالب جاهزة:</strong> كل جلسة تصمم بالكامل بناءً على بيانات وتحديات واقعك الخاص.</span>
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                </li>
                <li className="flex items-center gap-2.5 justify-end">
                  <span><strong>مؤشرات أداء رقمية:</strong> لا نكتفي بالارتياح النفسي، بل نحدد أرقام نمو قابلة للقياس.</span>
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                </li>
                <li className="flex items-center gap-2.5 justify-end">
                  <span><strong>أمان وسرية قصوى:</strong> بيئة آمنة للتحدث بصراحة عن أعمق التحديات التنظيمية والشخصية.</span>
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                </li>
              </ul>
            </div>

            {/* Actions */}
            <div className="pt-2 flex flex-wrap items-center gap-4 justify-start">
              <button
                onClick={onOpenBooking}
                className="bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-black text-sm px-7 py-3.5 rounded-xl shadow-lg shadow-amber-500/20 transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>طلب استشارة أو جلسة خاصة</span>
                <ChevronLeft className="w-4 h-4" />
              </button>
              <a
                href={COACH_INFO.contact.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-white text-sm font-semibold flex items-center gap-1.5 underline underline-offset-4"
              >
                <span>عرض الملف الرسمي على لينكد إن</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
