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
      // Calculate most common recommended program id
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
    <section id="quiz" className="py-16 bg-slate-900 text-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-amber-400 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>مساعد التوجيه الذكي</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            محتار في اختيار البرنامج الأنسب؟
          </h2>
          <p className="text-slate-300 text-sm mt-2">
            أجب على 3 أسئلة سريعة (أقل من دقيقة) لنتعرف على واقعك ونرشح لك الحل الأسرع والأكثر فاعلية لتحقيق أهدافك.
          </p>
        </div>

        {/* Quiz Container */}
        <div className="bg-slate-800/90 border border-slate-700/80 rounded-2xl p-6 sm:p-8 shadow-2xl backdrop-blur-sm">
          {!resultProgramId ? (
            <div>
              {/* Progress Bar */}
              <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
                <span>
                  السؤال {currentQuestionIndex + 1} من {QUIZ_QUESTIONS.length}
                </span>
                <span className="font-mono">
                  {Math.round(((currentQuestionIndex + 1) / QUIZ_QUESTIONS.length) * 100)}%
                </span>
              </div>
              <div className="w-full bg-slate-700 h-1.5 rounded-full overflow-hidden mb-6">
                <div
                  className="bg-amber-400 h-full transition-all duration-300"
                  style={{
                    width: `${((currentQuestionIndex + 1) / QUIZ_QUESTIONS.length) * 100}%`
                  }}
                />
              </div>

              {/* Question Text */}
              <h3 className="text-lg sm:text-xl font-bold text-white mb-6 text-right leading-snug">
                {currentQ.question}
              </h3>

              {/* Options */}
              <div className="grid grid-cols-1 gap-3">
                {currentQ.options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSelectOption(option.recommendedProgramId)}
                    className="w-full text-right p-4 rounded-xl border border-slate-700 bg-slate-900/60 hover:bg-slate-900 hover:border-amber-400/80 hover:shadow-md transition-all group flex items-start justify-between cursor-pointer"
                  >
                    <div>
                      <span className="block text-sm sm:text-base font-bold text-slate-100 group-hover:text-amber-300 transition-colors">
                        {option.label}
                      </span>
                      <span className="block text-xs text-slate-400 mt-1">
                        {option.sublabel}
                      </span>
                    </div>
                    <div className="w-6 h-6 rounded-full border border-slate-600 flex items-center justify-center shrink-0 mt-1 group-hover:border-amber-400 group-hover:bg-amber-400/10">
                      <ArrowLeft className="w-3.5 h-3.5 text-slate-400 group-hover:text-amber-400 group-hover:-translate-x-0.5 transition-transform" />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            /* Result Screen */
            <div className="text-center py-2 animate-in fade-in zoom-in-95 duration-300">
              <div className="w-12 h-12 bg-amber-400/20 text-amber-400 rounded-full flex items-center justify-center mx-auto mb-4 border border-amber-400/30">
                <Check className="w-6 h-6" />
              </div>

              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block mb-1">
                البرنامج الموصى به لواقعك وتحدياتك
              </span>
              <h3 className="text-2xl font-black text-white mb-2">
                {matchedProgram?.title}
              </h3>
              <p className="text-sm text-slate-300 max-w-lg mx-auto mb-6">
                {matchedProgram?.summary}
              </p>

              {/* Feature Highlights of Matched Program */}
              <div className="bg-slate-900/80 border border-slate-700/80 rounded-xl p-5 text-right max-w-xl mx-auto mb-6">
                <span className="text-xs font-bold text-slate-300 block mb-3">
                  أهم المخرجات التي ستحصل عليها:
                </span>
                <div className="space-y-2 text-xs sm:text-sm text-slate-200">
                  {matchedProgram?.features.slice(0, 3).map((feat, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-4 pt-4 border-t border-slate-800 flex items-center justify-between text-xs">
                  <div>
                    <span className="text-slate-400 block text-[11px]">الاستثمار المقدر:</span>
                    <span className="text-amber-400 font-bold text-base font-mono">
                      {matchedProgram?.price}
                    </span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[11px]">المدة الزمنية:</span>
                    <span className="text-white font-medium">
                      {matchedProgram?.duration}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={() => onOpenBooking(matchedProgram!.id)}
                  className="w-full sm:w-auto bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-7 py-3 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 text-sm cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>تأكيد حجز هذا البرنامج الآن</span>
                </button>
                <button
                  onClick={handleReset}
                  className="w-full sm:w-auto text-slate-400 hover:text-white px-4 py-3 rounded-xl border border-slate-700 hover:bg-slate-800 transition-colors flex items-center justify-center gap-1.5 text-xs cursor-pointer"
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
