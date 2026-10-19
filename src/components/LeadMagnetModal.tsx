import React, { useState } from 'react';
import { X, BookOpen, Download, Check, ShieldCheck, FileCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface LeadMagnetModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LeadMagnetModal: React.FC<LeadMagnetModalProps> = ({ isOpen, onClose }) => {
  const { language, isRtl, t } = useLanguage();
  if (!isOpen) return null;

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isDownloaded, setIsDownloaded] = useState(false);
  const [downloadProgress, setDownloadProgress] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && name) {
      setIsDownloaded(true);
    }
  };

  const handleDirectDownload = () => {
    setDownloadProgress(true);
    // Create simulated file download
    const element = document.createElement('a');
    const file = new Blob([
      `Ertiqa Executive Decision Guide - Dr. Tarek Al-Mansoor\nPrepared for: ${name} (${email})\nDate: ${new Date().toLocaleDateString()}\n\n1. Executive Priority Matrix\n2. 20-Minute Delegation Framework\n3. High-Conviction Investment Signoff Checklist\n`
    ], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = 'Ertiqa_Executive_Decision_Guide.txt';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    setTimeout(() => {
      setDownloadProgress(false);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className={`bg-white rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl border border-slate-200 relative ${isRtl ? 'text-right' : 'text-left'}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header gradient banner */}
        <div className="bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950 text-white p-6 relative">
          <button
            onClick={onClose}
            className={`absolute top-4 ${isRtl ? 'left-4' : 'right-4'} w-8 h-8 rounded-full bg-slate-800 text-slate-400 hover:text-white flex items-center justify-center transition-colors cursor-pointer`}
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center mb-3 border border-amber-500/30">
            <BookOpen className="w-6 h-6" />
          </div>

          <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider block mb-1">
            {t.guideGiftKicker}
          </span>
          <h3 className="text-xl font-black text-white leading-tight">
            {t.guideTitle}
          </h3>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {!isDownloaded ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                {t.guideDesc}
              </p>

              <div className="bg-stone-50 border border-slate-200 rounded-xl p-3.5 space-y-2 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{t.guideCheck1}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{t.guideCheck2}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{t.guideCheck3}</span>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  {t.guideNameLabel}
                </label>
                <input
                  type="text"
                  required
                  placeholder={language === 'en' ? 'e.g. John Smith' : 'مثال: عبد الله العتيبي'}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-stone-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  {t.guideEmailLabel}
                </label>
                <input
                  type="email"
                  required
                  placeholder="ceo@company.com"
                  dir="ltr"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`w-full bg-stone-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500 ${isRtl ? 'text-right' : 'text-left'}`}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold py-3 rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>{t.guideBtnDownload}</span>
              </button>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-400 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>{t.guideNoSpamNote}</span>
              </div>
            </form>
          ) : (
            <div className="text-center py-4 space-y-4 animate-in zoom-in-95 duration-200">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                <FileCheck className="w-8 h-8" />
              </div>
              <h4 className="text-lg font-bold text-slate-900">
                {t.guideSuccessTitle} {name}!
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-sm mx-auto">
                {t.guideSuccessDesc}{' '}
                <strong className="text-slate-900 font-mono">{email}</strong>.
              </p>

              <div className="pt-2 flex flex-col gap-2">
                <button
                  onClick={handleDirectDownload}
                  disabled={downloadProgress}
                  className="bg-slate-900 hover:bg-slate-800 text-white font-bold py-2.5 px-4 rounded-xl text-xs flex items-center justify-center gap-2 cursor-pointer transition-colors"
                >
                  <Download className="w-4 h-4 text-amber-400" />
                  <span>{downloadProgress ? (language === 'en' ? 'Downloading...' : 'جاري التحميل...') : t.guideBtnDirectDownload}</span>
                </button>
                <button
                  onClick={onClose}
                  className="text-xs text-slate-500 hover:text-slate-800 py-1 cursor-pointer"
                >
                  {t.guideBtnClose}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
