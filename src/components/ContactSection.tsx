import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, MessageCircle, Clock, MapPin, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { getCoachInfo } from '../data/mockData';

interface ContactSectionProps {
  onOpenBooking: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenBooking }) => {
  const { language, isRtl, t } = useLanguage();
  const coach = getCoachInfo(language);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: language === 'en' ? 'Inquiry about Advisory or Training' : 'طلب استشارة أو برنامج تدريبي',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const subjectOptions = language === 'en' ? [
    'Inquiry about Advisory or Training',
    'Corporate Workshop or Board Advisory',
    'Reserve 1-on-1 Strategic Compass Session',
    'General Partnership or Media Inquiry'
  ] : [
    'طلب استشارة أو برنامج تدريبي',
    'استفسار عن برامج وورش الشركات',
    'حجز جلسة استراتيجية 1-on-1',
    'استفسار عام أو شراكة أعمال'
  ];

  return (
    <section id="contact" className="py-24 bg-[#0E131F] text-white border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <span className="text-amber-400 font-bold text-xs tracking-wider uppercase bg-amber-500/10 border border-amber-500/30 px-3.5 py-1 rounded-full mb-3">
            {t.contactKicker}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-black text-white leading-tight">
            {t.contactTitle}
          </h2>
          <div className="w-16 h-1 bg-amber-500 rounded-full mt-4 mb-4" />
          <p className="text-slate-300 text-base sm:text-lg">
            {t.contactSubtitle}
          </p>
        </div>

        <div className={`grid grid-cols-1 lg:grid-cols-12 gap-12 ${isRtl ? 'text-right' : 'text-left'}`}>
          
          {/* Contact Details & Info (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#0B0F17] text-white rounded-3xl p-7 sm:p-9 space-y-6 shadow-2xl border border-white/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

              <div>
                <h3 className="text-2xl font-black text-white mb-2">
                  {t.contactOfficeTitle}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  {t.contactOfficeDesc}
                </p>
              </div>

              {/* Direct channels */}
              <div className="space-y-3.5 pt-2 text-xs sm:text-sm">
                <a
                  href={`mailto:${coach.contact.email}`}
                  className="flex items-center gap-3.5 text-slate-200 hover:text-amber-400 transition-colors p-3 rounded-2xl bg-slate-900/80 border border-white/5"
                >
                  <div className="w-10 h-10 rounded-xl bg-slate-800 text-amber-400 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 block">{t.contactEmailLabel}</span>
                    <span className="font-mono text-slate-200 text-xs sm:text-sm">{coach.contact.email}</span>
                  </div>
                </a>

                <a
                  href={coach.contact.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 text-slate-200 hover:text-emerald-400 transition-colors p-3 rounded-2xl bg-slate-900/80 border border-white/5"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-950/80 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-800/40">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 block">{t.contactWhatsappLabel}</span>
                    <span className="font-mono text-slate-200 text-xs sm:text-sm" dir="ltr">{coach.contact.phone}</span>
                  </div>
                </a>

                <div className="flex items-center gap-3.5 text-slate-200 p-3 rounded-2xl bg-slate-900/80 border border-white/5">
                  <div className="w-10 h-10 rounded-xl bg-slate-800 text-amber-400 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 block">{t.contactLocationLabel}</span>
                    <span className="text-xs sm:text-sm">{coach.contact.location}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 text-slate-200 p-3 rounded-2xl bg-slate-900/80 border border-white/5">
                  <div className="w-10 h-10 rounded-xl bg-slate-800 text-amber-400 flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 block">{t.contactHoursLabel}</span>
                    <span className="text-xs sm:text-sm">{t.contactHoursValue}</span>
                  </div>
                </div>
              </div>

              {/* Direct Instant Booking Prompt */}
              <div className="pt-4 border-t border-white/10">
                <span className="text-xs text-slate-400 block mb-2.5">
                  {language === 'en' ? 'Looking to reserve an instant calendar slot?' : 'تريد حجز موعد مباشر وفوري؟'}
                </span>
                <button
                  onClick={onOpenBooking}
                  className="w-full bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-black py-3.5 rounded-xl text-xs sm:text-sm shadow-lg transition-all cursor-pointer"
                >
                  {t.contactBtnOpenCalendar}
                </button>
              </div>

            </div>

            {/* Privacy note */}
            <div className="flex items-center gap-2.5 p-4 bg-[#0B0F17] border border-white/10 rounded-2xl text-xs text-slate-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>{t.contactPrivacyNote}</span>
            </div>
          </div>

          {/* Inquiry Form (7 cols) */}
          <div className="lg:col-span-7 bg-[#0B0F17] border border-white/10 rounded-3xl p-7 sm:p-9 shadow-2xl">
            <h3 className="text-2xl font-black text-white mb-2">
              {t.contactFormTitle}
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mb-6 font-normal">
              {t.contactFormDesc}
            </p>

            {isSubmitted ? (
              <div className="p-10 text-center bg-slate-900 border border-emerald-500/40 rounded-2xl space-y-4 animate-in fade-in duration-300">
                <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/30">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h4 className="text-2xl font-bold text-white">
                  {t.contactFormSuccessTitle}
                </h4>
                <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed font-normal">
                  {t.contactFormSuccessDesc}
                </p>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({ name: '', email: '', phone: '', subject: subjectOptions[0], message: '' });
                  }}
                  className="text-xs text-amber-400 font-bold underline underline-offset-4 cursor-pointer mt-2"
                >
                  {t.contactFormAnother}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1.5">
                      {t.contactFormName} <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={language === 'en' ? 'e.g. John Smith' : 'مثال: أحمد عبد الله'}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#0E131F] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1.5">
                      {t.contactFormPhone} <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="01149556339"
                      dir="ltr"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={`w-full bg-[#0E131F] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-400 ${
                        isRtl ? 'text-right' : 'text-left'
                      }`}
                    />
                  </div>
                </div>

                {/* Email & Subject */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1.5">
                      {t.contactFormEmail} <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@example.com"
                      dir="ltr"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full bg-[#0E131F] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-400 ${
                        isRtl ? 'text-right' : 'text-left'
                      }`}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1.5">
                      {t.contactFormSubject}
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full bg-[#0E131F] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-400"
                    >
                      {subjectOptions.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1.5">
                    {t.contactFormMessage} <span className="text-rose-400">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder={language === 'en' ? 'Briefly describe your company, current challenge, or target milestone...' : 'اكتب نبذة مختصرة عن مجالك، التحديات التي تواجهها، أو الهدف الذي تود تحقيقه...'}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#0E131F] border border-white/10 rounded-xl p-4 text-sm text-white focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-400"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-black py-4 px-6 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 text-sm cursor-pointer disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <span>{t.contactFormSubmitting}</span>
                  ) : (
                    <>
                      <Send className={`w-4 h-4 text-slate-950 ${isRtl ? 'rotate-180' : ''}`} />
                      <span>{t.contactFormSubmit}</span>
                    </>
                  )}
                </button>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
