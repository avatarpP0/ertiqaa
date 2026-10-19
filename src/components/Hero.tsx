import React from 'react';
import { Calendar, ArrowLeft, ArrowRight, ShieldCheck, Star, Sparkles, Award, Check, MessageCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { getCoachInfo } from '../data/mockData';

interface HeroProps {
  onOpenBooking: (programId?: string) => void;
  onScrollToQuiz: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onScrollToQuiz }) => {
  const { language, isRtl, t } = useLanguage();
  const coach = getCoachInfo(language);

  return (
    <section className="relative overflow-hidden bg-[#0B0F17] text-white pt-12 pb-24 lg:pt-24 lg:pb-32 border-b border-white/5">
      {/* Luxury Background Glows & Ambience */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      
      {/* Precision Blueprint Grid overlay */}
      <div 
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '48px 48px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Main Copy Column */}
          <div className={`lg:col-span-7 flex flex-col items-start ${isRtl ? 'text-right' : 'text-left'}`}>
            
            {/* Executive Eyebrow Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-500/15 to-transparent border border-amber-500/30 text-amber-300 text-xs sm:text-sm font-semibold mb-6 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>{t.heroKicker}</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-black text-white leading-[1.2] tracking-tight mb-6">
              {t.heroTitlePrefix}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500">
                {t.heroTitleHighlight}
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl font-normal">
              {t.heroSubtitle}
            </p>

            {/* Value checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10 w-full max-w-xl text-xs sm:text-sm text-slate-200">
              <div className="flex items-center gap-2.5 bg-slate-900/60 border border-white/5 p-2.5 rounded-xl">
                <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span>{t.heroBullet1}</span>
              </div>
              <div className="flex items-center gap-2.5 bg-slate-900/60 border border-white/5 p-2.5 rounded-xl">
                <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span>{t.heroBullet2}</span>
              </div>
              <div className="flex items-center gap-2.5 bg-slate-900/60 border border-white/5 p-2.5 rounded-xl">
                <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span>{t.heroBullet3}</span>
              </div>
              <div className="flex items-center gap-2.5 bg-slate-900/60 border border-white/5 p-2.5 rounded-xl">
                <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span>{t.heroBullet4}</span>
              </div>
            </div>

            {/* Primary & Secondary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
              <button
                onClick={() => onOpenBooking('strategy-session')}
                className="bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-slate-950 font-black px-7 py-3.5 rounded-xl shadow-xl shadow-amber-500/25 hover:shadow-amber-500/35 transition-all flex items-center justify-center gap-2.5 text-sm sm:text-base active:scale-98 group cursor-pointer"
              >
                <Calendar className="w-5 h-5 text-slate-950" />
                <span>{t.heroBtnBook}</span>
                {isRtl ? (
                  <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1.5 transition-transform" />
                ) : (
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                )}
              </button>

              <a
                href="https://wa.me/201149556339?text=Hello,%20I%20would%20like%20to%20inquire%20about%20booking%20a%20session"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-950/70 hover:bg-emerald-900/90 border border-emerald-500/50 text-emerald-300 hover:text-white font-bold px-5 py-3.5 rounded-xl transition-all flex items-center justify-center gap-2 text-xs sm:text-sm font-mono cursor-pointer shadow-md"
                dir="ltr"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{t.whatsappLabel} 01149556339</span>
              </a>

              <button
                onClick={onScrollToQuiz}
                className="bg-slate-900/80 hover:bg-slate-800 border border-white/10 text-slate-300 hover:text-white font-bold px-4 py-3.5 rounded-xl transition-all flex items-center justify-center gap-2 text-xs sm:text-sm cursor-pointer shadow-md"
              >
                <span>{t.heroBtnQuiz}</span>
              </button>
            </div>

            {/* Reassurance Seal */}
            <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-3 text-xs text-slate-400">
              <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
              <span>{t.heroGuaranteeNote}</span>
            </div>

          </div>

          {/* Executive Visual Showcase Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Golden Aura */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-amber-500/40 via-amber-400/20 to-blue-600/30 rounded-3xl blur-2xl opacity-60"></div>

              {/* Card Container */}
              <div className="relative bg-[#0E131F] border border-amber-500/30 rounded-3xl p-6 sm:p-7 shadow-2xl backdrop-blur-md">
                
                {/* Photo Container with Gold Trim */}
                <div className="relative mb-6 rounded-2xl overflow-hidden aspect-[4/3] bg-slate-900 border border-white/10 group">
                  <img
                    src={coach.avatar}
                    alt={coach.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E131F] via-transparent to-transparent opacity-85" />
                  
                  {/* Floating Availability Pill */}
                  <div className={`absolute top-3.5 ${isRtl ? 'right-3.5' : 'left-3.5'} bg-slate-950/85 backdrop-blur-md border border-amber-500/30 text-white text-xs px-3.5 py-1.5 rounded-full flex items-center gap-2 shadow-lg`}>
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                    <span className="font-semibold text-slate-200">{t.coachCardBadge}</span>
                  </div>

                  {/* Rating inside photo */}
                  <div className="absolute bottom-3.5 right-3.5 left-3.5 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-1.5 bg-slate-950/90 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10">
                      <div className="flex text-amber-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                        ))}
                      </div>
                      <span className="font-black text-amber-300 font-mono">{t.coachCardRating}</span>
                    </div>

                    <span className="bg-slate-950/90 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10 text-slate-200 font-semibold font-mono">
                      {t.coachCardSessions}
                    </span>
                  </div>
                </div>

                {/* Identity Information */}
                <div className={`space-y-3.5 ${isRtl ? 'text-right' : 'text-left'}`}>
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-2xl font-black text-white flex items-center gap-2">
                        <span>{coach.name}</span>
                        <Award className="w-5 h-5 text-amber-400" />
                      </h3>
                      <p className="text-amber-400 text-xs font-semibold mt-1">
                        {coach.title}
                      </p>
                    </div>
                  </div>

                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed border-t border-white/10 pt-3">
                    {t.coachCardDesc}
                  </p>

                  {/* Badges Grid */}
                  <div className="grid grid-cols-2 gap-2.5 pt-1 text-xs">
                    <div className="bg-slate-900/80 border border-white/10 p-2.5 rounded-xl">
                      <span className="text-slate-400 block text-[11px] mb-0.5">{t.coachCardAccreditation}</span>
                      <span className="text-white font-bold">{t.coachCardAccreditationVal}</span>
                    </div>
                    <div className="bg-slate-900/80 border border-white/10 p-2.5 rounded-xl">
                      <span className="text-slate-400 block text-[11px] mb-0.5">{t.coachCardFormat}</span>
                      <span className="text-emerald-400 font-bold">{t.coachCardFormatVal}</span>
                    </div>
                  </div>

                  {/* Booking Trigger on Card */}
                  <button
                    onClick={() => onOpenBooking('strategy-session')}
                    className="w-full mt-2 bg-gradient-to-r from-slate-900 to-slate-800 hover:from-slate-800 hover:to-slate-700 text-amber-400 border border-amber-500/40 font-bold py-3 rounded-xl transition-all text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer shadow-md hover:border-amber-400"
                  >
                    <Calendar className="w-4 h-4 text-amber-400" />
                    <span>{t.coachCardBtnSchedule}</span>
                  </button>
                </div>

              </div>

            </div>
          </div>

        </div>

        {/* Global Statistics Strip */}
        <div className="mt-20 pt-10 border-t border-white/10 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {coach.stats.map((stat, i) => (
            <div 
              key={i} 
              className="bg-slate-900/50 border border-white/5 rounded-2xl p-5 text-center flex flex-col items-center hover:border-amber-500/30 transition-colors"
            >
              <span className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 font-mono tracking-tight">
                {stat.value}
              </span>
              <span className="text-sm font-bold text-white mt-1.5">
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
