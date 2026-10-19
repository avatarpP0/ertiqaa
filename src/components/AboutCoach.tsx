import React from 'react';
import { Award, ChevronLeft, ChevronRight, Sparkles, Check } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { getCoachInfo } from '../data/mockData';

interface AboutCoachProps {
  onOpenBooking: () => void;
}

export const AboutCoach: React.FC<AboutCoachProps> = ({ onOpenBooking }) => {
  const { language, isRtl, t } = useLanguage();
  const coach = getCoachInfo(language);

  return (
    <section id="about" className="py-24 bg-[#0E131F] text-white border-b border-white/5 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-amber-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <span className="text-amber-400 font-bold text-xs tracking-wider uppercase bg-amber-500/10 border border-amber-500/30 px-3.5 py-1 rounded-full mb-3">
            {t.aboutKicker}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-black text-white leading-tight">
            {t.aboutTitle}
          </h2>
          <div className="w-16 h-1 bg-amber-500 rounded-full mt-4 mb-5" />
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            {t.aboutSubtitle}
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Visual Column / Executive Image & Milestones */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-3xl overflow-hidden border border-amber-500/30 shadow-2xl bg-slate-900 group">
              <img
                src={coach.executiveImage}
                alt={coach.name}
                className="w-full h-[460px] object-cover object-top group-hover:scale-102 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E131F] via-[#0E131F]/30 to-transparent" />
              
              <div className={`absolute bottom-6 right-6 left-6 text-white ${isRtl ? 'text-right' : 'text-left'}`}>
                <span className="text-amber-400 text-xs font-bold block mb-1">
                  {t.aboutMissionTitle}
                </span>
                <p className="text-sm font-medium leading-relaxed italic text-slate-200">
                  {t.aboutMissionQuote}
                </p>
                <span className="text-xs text-amber-300/80 block mt-2 font-mono">
                  — {coach.name}
                </span>
              </div>
            </div>

            {/* Media badges */}
            <div className={`bg-slate-900/70 border border-white/10 p-5 rounded-2xl ${isRtl ? 'text-right' : 'text-left'}`}>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-3">
                {t.aboutMediaTitle}
              </span>
              <div className="flex flex-wrap items-center gap-2">
                {coach.mediaFeatures.map((media, idx) => (
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
          <div className={`lg:col-span-7 space-y-8 ${isRtl ? 'text-right' : 'text-left'}`}>
            <div>
              <h3 className="text-2xl sm:text-3xl font-black text-white mb-4">
                {t.aboutWhoIs}
              </h3>
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base mb-4 font-normal">
                {t.aboutBio1}
              </p>
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base font-normal">
                {t.aboutBio2}
              </p>
            </div>

            {/* Certifications Grid */}
            <div>
              <h4 className={`text-sm font-bold text-amber-400 uppercase tracking-wider mb-4 flex items-center gap-2 ${isRtl ? 'justify-end' : 'justify-start'}`}>
                {isRtl ? (
                  <>
                    <span>{t.aboutCredsTitle}</span>
                    <Award className="w-4 h-4 text-amber-400" />
                  </>
                ) : (
                  <>
                    <Award className="w-4 h-4 text-amber-400" />
                    <span>{t.aboutCredsTitle}</span>
                  </>
                )}
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {coach.certifications.map((cert, idx) => (
                  <div
                    key={idx}
                    className={`flex items-start gap-3 p-4 rounded-2xl border border-white/10 bg-slate-900/60 hover:bg-slate-900 hover:border-amber-400/30 transition-all ${isRtl ? 'text-right' : 'text-left'}`}
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
            <div className={`p-6 rounded-2xl bg-gradient-to-br from-amber-500/10 to-transparent border border-amber-500/30 ${isRtl ? 'text-right' : 'text-left'}`}>
              <h4 className={`text-sm font-bold text-amber-300 mb-3 flex items-center gap-2 ${isRtl ? 'justify-end' : 'justify-start'}`}>
                {isRtl ? (
                  <>
                    <span>{t.aboutMethodTitle}</span>
                    <Sparkles className="w-4 h-4 text-amber-400" />
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4 text-amber-400" />
                    <span>{t.aboutMethodTitle}</span>
                  </>
                )}
              </h4>
              <ul className="text-xs sm:text-sm text-slate-200 space-y-2.5 list-none p-0">
                <li className={`flex items-center gap-2.5 ${isRtl ? 'justify-end' : 'justify-start'}`}>
                  {isRtl ? (
                    <>
                      <span>{t.aboutMethod1}</span>
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                    </>
                  ) : (
                    <>
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                      <span>{t.aboutMethod1}</span>
                    </>
                  )}
                </li>
                <li className={`flex items-center gap-2.5 ${isRtl ? 'justify-end' : 'justify-start'}`}>
                  {isRtl ? (
                    <>
                      <span>{t.aboutMethod2}</span>
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                    </>
                  ) : (
                    <>
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                      <span>{t.aboutMethod2}</span>
                    </>
                  )}
                </li>
                <li className={`flex items-center gap-2.5 ${isRtl ? 'justify-end' : 'justify-start'}`}>
                  {isRtl ? (
                    <>
                      <span>{t.aboutMethod3}</span>
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                    </>
                  ) : (
                    <>
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                      <span>{t.aboutMethod3}</span>
                    </>
                  )}
                </li>
              </ul>
            </div>

            {/* Actions */}
            <div className={`pt-2 flex flex-wrap items-center gap-4 ${isRtl ? 'justify-start' : 'justify-start'}`}>
              <button
                onClick={onOpenBooking}
                className="bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-black text-sm px-7 py-3.5 rounded-xl shadow-lg shadow-amber-500/20 transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>{t.aboutBtnConsult}</span>
                {isRtl ? <ChevronLeft className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
              </button>
              <a
                href={coach.contact.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-white text-sm font-semibold flex items-center gap-1.5 underline underline-offset-4"
              >
                <span>{t.aboutBtnLinkedIn}</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
