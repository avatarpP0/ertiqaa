import React, { useState, useEffect } from 'react';
import { CheckCircle2, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const RECENT_ACTIVITIES_AR = [
  { name: 'م. فيصل', city: 'الرياض', program: 'جلسة البوصلة الاستراتيجية', time: 'قبل 18 دقيقة' },
  { name: 'د. منى', city: 'دبي', program: 'برنامج النخبة للقيادة التنفيذية', time: 'قبل 42 دقيقة' },
  { name: 'أ. عبد العزيز', city: 'جدة', program: 'مسرّع رواد الأعمال والنمو', time: 'قبل ساعة' },
  { name: 'م. خالد', city: 'الدمام', program: 'جلسة البوصلة الاستراتيجية', time: 'قبل ساعتين' },
];

const RECENT_ACTIVITIES_EN = [
  { name: 'Eng. Faisal', city: 'Riyadh', program: 'Strategic Compass 1-on-1', time: '18 mins ago' },
  { name: 'Dr. Mona', city: 'Dubai', program: 'Elite Executive Mastery', time: '42 mins ago' },
  { name: 'Abdulaziz M.', city: 'Jeddah', program: 'Founder Scale Accelerator', time: '1 hour ago' },
  { name: 'Eng. Khalid', city: 'Dammam', program: 'Strategic Compass 1-on-1', time: '2 hours ago' },
];

export const RecentBookingTicker: React.FC = () => {
  const { language, isRtl } = useLanguage();
  const activities = language === 'en' ? RECENT_ACTIVITIES_EN : RECENT_ACTIVITIES_AR;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Show after 4 seconds
    const initialTimer = setTimeout(() => {
      if (!isDismissed) setIsVisible(true);
    }, 4000);

    // Rotate every 12 seconds
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % activities.length);
        if (!isDismissed) setIsVisible(true);
      }, 800);
    }, 12000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, [isDismissed, activities.length]);

  if (isDismissed || !isVisible) return null;

  const current = activities[currentIndex];

  return (
    <div className={`fixed bottom-20 ${isRtl ? 'left-4 text-right' : 'right-4 text-left'} z-30 max-w-xs sm:max-w-sm bg-[#0E131F]/95 backdrop-blur-xl border border-amber-500/30 rounded-2xl p-4 shadow-2xl animate-in slide-in-from-bottom-5 duration-300 flex items-start gap-3.5`}>
      <div className="w-8 h-8 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5 border border-amber-500/30">
        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
      </div>

      <div className="flex-1 text-xs">
        <div className="flex items-center justify-between">
          <span className="font-bold text-white">
            {current.name} ({current.city})
          </span>
          <span className="text-[10px] text-amber-400 font-mono">
            {current.time}
          </span>
        </div>
        <p className="text-slate-300 mt-1">
          {language === 'en' ? (
            <>Just reserved <strong className="text-amber-300">{current.program}</strong></>
          ) : (
            <>قام بحجز <strong className="text-amber-300">{current.program}</strong></>
          )}
        </p>
      </div>

      <button
        onClick={() => setIsDismissed(true)}
        className="text-slate-400 hover:text-slate-200 p-1 cursor-pointer"
        aria-label="Close"
      >
        <X className="w-3.5 h-3.5" />
      </button>
    </div>
  );
};
