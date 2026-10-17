import React, { useState } from 'react';
import { X, BookOpen, Download, Check, Sparkles, ShieldCheck, FileCheck } from 'lucide-react';

interface LeadMagnetModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LeadMagnetModal: React.FC<LeadMagnetModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isDownloaded, setIsDownloaded] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && name) {
      setIsDownloaded(true);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="bg-white rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl border border-slate-200 text-right relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header gradient banner */}
        <div className="bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950 text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 left-4 w-8 h-8 rounded-full bg-slate-800 text-slate-400 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="إغلاق"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center mb-3 border border-amber-500/30">
            <BookOpen className="w-6 h-6" />
          </div>

          <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider block mb-1">
            هدية حصرية مجانية للقيادات ورواد الأعمال
          </span>
          <h3 className="text-xl font-black text-white leading-tight">
            دليل القائد التنفيذي لصناعة القرارات الحاسمة وتفويض الصلاحيات
          </h3>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {!isDownloaded ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                مصفوفة عملية ملخصة من 14 صفحة تحتوي على أفضل النماذج الرياضية والإدارية لفرز الأولويات، تفويض المهام المعقدة، وتفادي الشلل التحليلي في الأوقات الحرجة.
              </p>

              <div className="bg-stone-50 border border-slate-200 rounded-xl p-3.5 space-y-2 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>مصفوفة أيزنهاور التنفيذية للرؤساء التنفيذيين</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>بروتوكول تفويض الصلاحيات دون فقدان السيطرة</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>قائمة فحص القرارات الاستثمارية قبل الاعتماد</span>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  الاسم الكريم
                </label>
                <input
                  type="text"
                  required
                  placeholder="مثال: عبد الله العتيبي"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-stone-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  البريد الإلكتروني لإرسال النسخة
                </label>
                <input
                  type="email"
                  required
                  placeholder="ceo@company.com"
                  dir="ltr"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-stone-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500 text-right"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold py-3 rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>تحميل الدليل التنفيذي فوراً (PDF مجاني)</span>
              </button>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-400 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>لن نرسل أي رسائل مزعجة أو غير مرغوبة، خصوصيتك مصونة 100%.</span>
              </div>
            </form>
          ) : (
            <div className="text-center py-4 space-y-4 animate-in zoom-in-95 duration-200">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                <FileCheck className="w-8 h-8" />
              </div>
              <h4 className="text-lg font-bold text-slate-900">
                تم تجهيز دليلك يا {name}!
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-sm mx-auto">
                تم إرسال رابط تحميل الدليل بصيغة PDF عالية الدقة إلى بريدك الإلكتروني{' '}
                <strong className="text-slate-900 font-mono">{email}</strong>.
              </p>

              <div className="pt-2 flex flex-col gap-2">
                <button
                  onClick={() => {
                    // Simulate opening guide preview
                    alert('جاري بدء التحميل المباشر للدليل التنفيذي...');
                  }}
                  className="bg-slate-900 hover:bg-slate-800 text-white font-bold py-2.5 px-4 rounded-xl text-xs flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Download className="w-4 h-4 text-amber-400" />
                  <span>تحميل مباشر من المتصفح الآن</span>
                </button>
                <button
                  onClick={onClose}
                  className="text-xs text-slate-500 hover:text-slate-800 py-1"
                >
                  إغلاق هذه النافذة
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
