import React, { useState } from 'react';
import { Sparkles, Check, ArrowLeft, RotateCcw, Calendar, CheckCircle2 } from 'lucide-react';
import { QUIZ_QUESTIONS, PROGRAMS } from '../data/mockData';

interface ProgramMatcherQuizProps {
  onOpenBooking: (programId: string) => void;
}

export const ProgramMatcherQuiz: React.FC<ProgramMatcherQuizProps> = ({ onOpenBooking }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [resultProgramId, setResultProgramId] = useState<string | null>(null);

  const handleSelectOption = (recommendedProgramId: string) => {
    const updatedAnswers = [...answers, recommendedProgramId];
    setAnswers(updatedAnswers);

    if (currentQuestionIndex < QUIZ_QUESTIONS.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      const frequencyMap: Record<string, number> = {};
      updatedAnswers.forEach((id) => {
        frequencyMap[id] = (frequencyMap[id] || 0) + 1;
      });

      let highestScore = 0;
      let winningProgramId = 'strategy-session';
      for (const [id, count] of Object.entries(frequencyMap)) {
        if (count > highestScore) {
          highestScore = count;
          winningProgramId = id;
        }
      }
      setResultProgramId(winningProgramId);
    }
  };

  const handleReset = () => {
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setResultProgramId(null);
  };

  const matchedProgram = resultProgramId
    ? PROGRAMS.find((p) => p.id === resultProgramId) || PROGRAMS[0]
    : null;

  const currentQ = QUIZ_QUESTIONS[currentQuestionIndex];

  return (
    <section id="quiz" className="py-20 bg-[#0B0F17] text-white relative overflow-hidden border-b border-white/5">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>مساعد التوجيه الاستراتيجي الذكي</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            محتار في اختيار البرنامج الأنسب؟
          </h2>
          <p className="text-slate-300 text-sm mt-3">
            أجب على 3 أسئلة سريعة (أقل من دقيقة) لنتعرف على واقعك ونرشح لك الحل الأسرع والأكثر فاعلية لتحقيق أهدافك.
          </p>
        </div>

        {/* Quiz Container */}
        <div className="bg-[#0E131F] border border-white/10 rounded-3xl p-7 sm:p-10 shadow-2xl backdrop-blur-md">
          {!resultProgramId ? (
            <div>
              {/* Progress Bar */}
              <div className="flex items-center justify-between text-xs text-slate-400 mb-3 font-semibold">
                <span>
                  السؤال {currentQuestionIndex + 1} من {QUIZ_QUESTIONS.length}
                </span>
                <span className="font-mono text-amber-400">
                  {Math.round(((currentQuestionIndex + 1) / QUIZ_QUESTIONS.length) * 100)}%
                </span>
              </div>
              <div className="w-full bg-slate-900 h-2 rounded-full overflow-hidden mb-8 border border-white/5">
                <div
                  className="bg-gradient-to-r from-amber-400 to-amber-500 h-full transition-all duration-300 rounded-full"
                  style={{
                    width: `${((currentQuestionIndex + 1) / QUIZ_QUESTIONS.length) * 100}%`
                  }}
                />
              </div>

              {/* Question Text */}
              <h3 className="text-xl sm:text-2xl font-black text-white mb-6 text-right leading-snug">
                {currentQ.question}
              </h3>

              {/* Options */}
              <div className="grid grid-cols-1 gap-3.5">
                {currentQ.options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSelectOption(option.recommendedProgramId)}
                    className="w-full text-right p-5 rounded-2xl border border-white/10 bg-slate-900/60 hover:bg-slate-900 hover:border-amber-400/80 hover:shadow-xl transition-all group flex items-start justify-between cursor-pointer"
                  >
                    <div>
                      <span className="block text-sm sm:text-base font-bold text-slate-100 group-hover:text-amber-300 transition-colors">
                        {option.label}
                      </span>
                      <span className="block text-xs text-slate-400 mt-1">
                        {option.sublabel}
                      </span>
                    </div>
                    <div className="w-7 h-7 rounded-full border border-white/10 flex items-center justify-center shrink-0 mt-1 group-hover:border-amber-400 group-hover:bg-amber-400/10 transition-colors">
                      <ArrowLeft className="w-3.5 h-3.5 text-slate-400 group-hover:text-amber-400 group-hover:-translate-x-0.5 transition-transform" />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            /* Result Screen */
            <div className="text-center py-2 animate-in fade-in zoom-in-95 duration-300">
              <div className="w-14 h-14 bg-amber-400/20 text-amber-400 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-amber-400/30">
                <Check className="w-7 h-7 stroke-[2.5]" />
              </div>

              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block mb-1">
                البرنامج الموصى به لواقعك وتحدياتك
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white mb-2">
                {matchedProgram?.title}
              </h3>
              <p className="text-sm text-slate-300 max-w-lg mx-auto mb-6">
                {matchedProgram?.summary}
              </p>

              {/* Feature Highlights of Matched Program */}
              <div className="bg-slate-900 border border-white/10 rounded-2xl p-6 text-right max-w-xl mx-auto mb-6">
                <span className="text-xs font-bold text-slate-300 block mb-3.5">
                  أهم المخرجات التي ستحصل عليها:
                </span>
                <div className="space-y-2.5 text-xs sm:text-sm text-slate-200">
                  {matchedProgram?.features.slice(0, 3).map((feat, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                  <div>
                    <span className="text-slate-400 block text-[11px]">الاستثمار المقدر:</span>
                    <span className="text-amber-400 font-black text-lg font-mono">
                      {matchedProgram?.price}
                    </span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[11px]">المدة الزمنية:</span>
                    <span className="text-white font-bold">
                      {matchedProgram?.duration}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={() => onOpenBooking(matchedProgram!.id)}
                  className="w-full sm:w-auto bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-black px-8 py-3.5 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 text-sm cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>تأكيد حجز هذا البرنامج الآن</span>
                </button>
                <button
                  onClick={handleReset}
                  className="w-full sm:w-auto text-slate-400 hover:text-white px-5 py-3.5 rounded-xl border border-white/10 hover:bg-slate-900 transition-colors flex items-center justify-center gap-1.5 text-xs cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>إعادة الاختبار من البداية</span>
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
