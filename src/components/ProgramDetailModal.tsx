import React from 'react';
import { X, Calendar, Check, Clock, Monitor, ShieldCheck, ArrowLeft } from 'lucide-react';
import { Program } from '../types';

interface ProgramDetailModalProps {
  program: Program | null;
  onClose: () => void;
  onBook: (programId: string) => void;
}

export const ProgramDetailModal: React.FC<ProgramDetailModalProps> = ({
  program,
  onClose,
  onBook,
}) => {
  if (!program) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 flex flex-col relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="sticky top-0 bg-white/95 backdrop-blur-md p-6 border-b border-slate-100 flex items-center justify-between z-10">
          <div>
            <span className="text-xs font-bold text-amber-700 uppercase tracking-wider block">
              خطة ومنهاج البرنامج
            </span>
            <h3 className="text-xl font-bold text-slate-900 mt-0.5">
              {program.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors cursor-pointer"
            aria-label="إغلاق"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6">
          {/* Quick info row */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 bg-slate-50 border border-slate-200 rounded-xl text-xs">
            <div>
              <span className="text-slate-400 block mb-0.5">المدة الزمنية:</span>
              <span className="font-bold text-slate-900">{program.duration}</span>
            </div>
            <div>
              <span className="text-slate-400 block mb-0.5">نوع اللقاء:</span>
              <span className="font-bold text-slate-900">{program.format}</span>
            </div>
            <div>
              <span className="text-slate-400 block mb-0.5">الاستثمار:</span>
              <span className="font-bold text-amber-700 font-mono text-sm">{program.price}</span>
            </div>
          </div>

          {/* Description */}
          <div>
            <h4 className="text-sm font-bold text-slate-900 mb-2">عن هذا المسار التدريبي:</h4>
            <p className="text-sm text-slate-600 leading-relaxed">
              {program.summary}
            </p>
          </div>

          {/* Syllabus Roadmap */}
          {program.syllabus && program.syllabus.length > 0 && (
            <div>
              <h4 className="text-sm font-bold text-slate-900 mb-4">
                خارطة الطريق والمراحل التفصيلية:
              </h4>
              <div className="space-y-4 relative before:absolute before:top-2 before:bottom-2 before:right-4 before:w-0.5 before:bg-slate-200">
                {program.syllabus.map((step, idx) => (
                  <div key={idx} className="relative pr-9">
                    {/* Step marker */}
                    <div className="absolute right-2 top-0.5 w-4 h-4 rounded-full bg-amber-500 border-2 border-white shadow-sm flex items-center justify-center" />
                    
                    <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-2xs">
                      <span className="text-xs font-bold text-amber-700 block mb-1">
                        {step.phase}
                      </span>
                      <h5 className="text-sm font-bold text-slate-900 mb-1">
                        {step.title}
                      </h5>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* All Features Checklist */}
          <div>
            <h4 className="text-sm font-bold text-slate-900 mb-3">
              ما الذي تتضمنه باقة البرنامج؟
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {program.features.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Guarantee Note */}
          <div className="p-3.5 bg-amber-50 border border-amber-200 rounded-xl flex items-center gap-3 text-xs text-amber-900">
            <ShieldCheck className="w-5 h-5 text-amber-700 shrink-0" />
            <span>
              جميع البرامج مشمولة بضمان الرضا الكامل 100% وإمكانية الاسترداد في حال عدم مطابقة التوقعات.
            </span>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="sticky bottom-0 bg-white p-4 border-t border-slate-100 flex items-center justify-between gap-4">
          <div className="text-right">
            <span className="text-[11px] text-slate-400 block">إجمالي الاستثمار:</span>
            <span className="text-xl font-bold text-slate-950 font-mono">{program.price}</span>
          </div>

          <button
            onClick={() => {
              onClose();
              onBook(program.id);
            }}
            className="bg-slate-900 hover:bg-slate-800 text-white font-bold px-6 py-3 rounded-xl flex items-center gap-2 text-xs sm:text-sm shadow-sm transition-all cursor-pointer"
          >
            <Calendar className="w-4 h-4 text-amber-400" />
            <span>حجز موعد البرنامج الآن</span>
            <ArrowLeft className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
