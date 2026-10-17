import React from 'react';
import { Award, BookOpen, Briefcase, CheckCircle, ChevronLeft, Quote, Sparkles } from 'lucide-react';
import { COACH_INFO } from '../data/mockData';

interface AboutCoachProps {
  onOpenBooking: () => void;
}

export const AboutCoach: React.FC<AboutCoachProps> = ({ onOpenBooking }) => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <span className="text-amber-600 font-bold text-xs tracking-wider uppercase bg-amber-50 border border-amber-200 px-3 py-1 rounded-full mb-3">
            المستشار والمدرب التنفيذي
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
            شريكك الاستراتيجي في صناعة التحول والنجاح المستدام
          </h2>
          <div className="w-16 h-1 bg-amber-500 rounded-full mt-4 mb-5" />
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            خبرة أكثر من 15 عاماً في مرافقة القيادات ورواد الأعمال، ندمج بين التفكير الاستراتيجي العالمي وواقع بيئة الأعمال العربية.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Visual Column / Executive Image & Milestones */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-slate-100">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800"
                alt="د. طارق المنصور - مستشار تنفيذي"
                className="w-full h-[440px] object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 right-6 left-6 text-white">
                <span className="text-amber-400 text-xs font-semibold block mb-1">
                  الرسالة والرؤية
                </span>
                <p className="text-sm font-medium leading-relaxed italic">
                  "القيادة الفعالة ليست كثرة القرارات، بل وضوح الرؤية والشجاعة في تنفيذ ما يصنع الفارق الحقيقي في نتائج المنظمة."
                </p>
                <span className="text-xs text-slate-300 block mt-2 font-mono">
                  — د. طارق المنصور
                </span>
              </div>
            </div>

            {/* Media badges */}
            <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl">
              <span className="text-xs font-bold text-slate-500 uppercase block mb-3">
                ظهور ومشاركات إعلامية وفكرية
              </span>
              <div className="flex flex-wrap items-center gap-2">
                {COACH_INFO.mediaFeatures.map((media, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-semibold text-slate-700 bg-white border border-slate-200 px-3 py-1.5 rounded-lg shadow-2xs"
                  >
                    {media}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Bio & Credentials Details */}
          <div className="lg:col-span-7 space-y-8">
            <div className="prose prose-slate max-w-none">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                من هو د. طارق المنصور؟
              </h3>
              <p className="text-slate-600 leading-relaxed text-base mb-4">
                خبير ومستشار استراتيجي، يحمل درجة الدكتوراه في الإدارة الاستراتيجية، وحاصل على أعلى اعتماد دولي في التوجيه القيادي (MCC - Master Certified Coach) من الاتحاد الدولي للكوتشينغ بالولايات المتحدة الأمريكية.
              </p>
              <p className="text-slate-600 leading-relaxed text-base">
                خلال مسيرته، أشرف على توجيه أكثر من 180 شركة ناشئة ومتوسطة في قطاعات التقنية، التجارة والتجزئة، الخدمات اللوجستية، والاستشارات، إلى جانب تقديم جلسات كوتشينغ مخصصة لرؤساء تنفيذيين ونواب وزراء وقيادات مجالس إدارات.
              </p>
            </div>

            {/* Certifications Grid */}
            <div>
              <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-2">
                <Award className="w-4 h-4 text-amber-600" />
                <span>الاعتمادات والمؤهلات الأكاديمية</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {COACH_INFO.certifications.map((cert, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3.5 rounded-xl border border-slate-200 bg-stone-50/70 hover:bg-stone-50 transition-colors"
                  >
                    <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle className="w-4 h-4" />
                    </div>
                    <div>
                      <h5 className="text-sm font-bold text-slate-900">
                        {cert.title}
                      </h5>
                      <span className="text-xs text-slate-500">
                        {cert.issuer}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Guiding Principles */}
            <div className="p-5 rounded-2xl bg-amber-50/60 border border-amber-200/80">
              <h4 className="text-sm font-bold text-amber-950 mb-2 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-600" />
                <span>المنهجية المتبعة في التدريب والاستشارة</span>
              </h4>
              <ul className="text-xs sm:text-sm text-amber-900 space-y-2 list-none p-0">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-600" />
                  <span><strong>لا قوالب جاهزة:</strong> كل جلسة تصمم بالكامل بناءً على بيانات وتحديات واقعك الخاص.</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-600" />
                  <span><strong>مؤشرات أداء رقمية:</strong> لا نكتفي بالارتياح النفسي، بل نحدد أرقام نمو قابلة للقياس.</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-600" />
                  <span><strong>أمان وسرية قصوى:</strong> بيئة آمنة للتحدث بصراحة عن أعمق التحديات التنظيمية والشخصية.</span>
                </li>
              </ul>
            </div>

            {/* Action */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenBooking}
                className="bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm px-6 py-3 rounded-xl shadow-sm hover:shadow transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>طلب استشارة أو جلسة خاصة</span>
                <ChevronLeft className="w-4 h-4" />
              </button>
              <a
                href={COACH_INFO.contact.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-slate-900 text-sm font-medium flex items-center gap-1.5 underline underline-offset-4"
              >
                <span>عرض الصفحة الرسمية على لينكد إن</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
