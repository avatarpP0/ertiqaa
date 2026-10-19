import React, { useState } from 'react';
import { Send, CheckCircle2, ArrowUp } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { getCoachInfo, getPrograms } from '../data/mockData';

export const Footer: React.FC = () => {
  const { language, isRtl, t } = useLanguage();
  const coach = getCoachInfo(language);
  const programs = getPrograms(language);

  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setNewsletterSubscribed(true);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`bg-[#070A0F] text-slate-300 pt-20 pb-12 border-t border-white/10 ${isRtl ? 'text-right' : 'text-left'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-14 border-b border-white/10">
          
          {/* Brand & Mission (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-slate-900 border border-amber-500/40 overflow-hidden flex items-center justify-center p-1.5 shadow-lg">
                <img src="/favicon.svg" alt="Logo" className="w-full h-full object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black text-white">{t.brandTitle} | {t.brandTag}</span>
                <span className="text-xs text-amber-400 font-semibold">{t.brandSubtitle}</span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
              {t.footerBrandDesc}
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-2.5 pt-1">
              <a
                href={coach.contact.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-900 border border-white/10 text-slate-300 hover:text-amber-400 hover:border-amber-400/40 flex items-center justify-center transition-all text-xs font-bold"
                aria-label="LinkedIn"
              >
                In
              </a>
              <a
                href={coach.contact.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-900 border border-white/10 text-slate-300 hover:text-amber-400 hover:border-amber-400/40 flex items-center justify-center transition-all text-xs font-bold"
                aria-label="X / Twitter"
              >
                𝕏
              </a>
              <a
                href={coach.contact.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-900 border border-white/10 text-slate-300 hover:text-amber-400 hover:border-amber-400/40 flex items-center justify-center transition-all text-xs font-bold"
                aria-label="YouTube"
              >
                YT
              </a>
              <a
                href={`https://wa.me/201149556339`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-900 border border-white/10 text-emerald-400 hover:border-emerald-400/40 flex items-center justify-center transition-all text-xs font-bold"
                aria-label="WhatsApp"
              >
                WA
              </a>
            </div>
          </div>

          {/* Quick Nav Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3.5">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              {t.footerQuickLinks}
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="#about" className="hover:text-amber-400 transition-colors">
                  {t.navAbout}
                </a>
              </li>
              <li>
                <a href="#programs" className="hover:text-amber-400 transition-colors">
                  {t.navPrograms}
                </a>
              </li>
              <li>
                <a href="#roi-calculator" className="hover:text-amber-400 transition-colors">
                  {t.navRoi}
                </a>
              </li>
              <li>
                <a href="#diagnostic" className="hover:text-amber-400 transition-colors">
                  {t.navDiagnostic}
                </a>
              </li>
              <li>
                <a href="#insights" className="hover:text-amber-400 transition-colors">
                  {t.navInsights}
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-amber-400 transition-colors">
                  {t.navTestimonials}
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-amber-400 transition-colors">
                  {t.navFaq}
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-amber-400 transition-colors">
                  {t.navContact}
                </a>
              </li>
            </ul>
          </div>

          {/* Programs Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3.5">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              {t.footerProgramsTitle}
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              {programs.map((prog) => (
                <li key={prog.id}>
                  <a href="#programs" className="hover:text-amber-400 transition-colors block">
                    {prog.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Weekly Strategic Letter (3 cols) */}
          <div className="lg:col-span-3 space-y-3.5">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              {t.footerNewsletterTitle}
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed font-normal">
              {t.footerNewsletterDesc}
            </p>

            {newsletterSubscribed ? (
              <div className="p-3.5 bg-emerald-950/60 border border-emerald-800 rounded-2xl text-emerald-300 text-xs flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>{t.footerNewsletterSuccess}</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2.5">
                <div className="relative">
                  <input
                    type="email"
                    required
                    placeholder={t.footerNewsletterEmail}
                    dir="ltr"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className={`w-full bg-[#0E131F] border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-amber-400 ${
                      isRtl ? 'text-right' : 'text-left'
                    }`}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-black py-3 rounded-xl text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-md"
                >
                  <Send className={`w-3.5 h-3.5 ${isRtl ? 'rotate-180' : ''}`} />
                  <span>{t.footerNewsletterBtn}</span>
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Bottom Sub-footer */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-5 text-xs text-slate-400">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 text-center sm:text-right">
            <span>{t.footerRights}</span>
            <span className="hidden sm:inline text-slate-700">|</span>
            <span className="text-amber-300 font-bold bg-amber-500/10 border border-amber-500/30 px-3 py-1 rounded-full shadow-2xs">
              {t.programmerCredit}
            </span>
          </div>

          <div className="flex items-center gap-6">
            <span className="hover:text-slate-200 cursor-pointer">{t.footerPrivacy}</span>
            <span className="hover:text-slate-200 cursor-pointer">{t.footerTerms}</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-amber-400 hover:text-amber-300 cursor-pointer font-bold"
            >
              <span>{t.footerToTop}</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
