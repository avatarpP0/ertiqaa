import React, { useState, useEffect } from 'react';
import { Calendar, CheckCircle2, X } from 'lucide-react';

const RECENT_ACTIVITIES = [
  { name: 'م. فيصل', city: 'الرياض', program: 'جلسة البوصلة الاستراتيجية', time: 'قبل 18 دقيقة' },
  { name: 'د. منى', city: 'دبي', program: 'برنامج النخبة للقيادة التنفيذية', time: 'قبل 42 دقيقة' },
  { name: 'أ. عبد العزيز', city: 'جدة', program: 'مسرّع رواد الأعمال والنمو', time: 'قبل ساعة' },
  { name: 'م. خالد', city: 'الدمام', program: 'جلسة البوصلة الاستراتيجية', time: 'قبل ساعتين' },
];

export const RecentBookingTicker: React.FC = () => {
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
        setCurrentIndex((prev) => (prev + 1) % RECENT_ACTIVITIES.length);
        if (!isDismissed) setIsVisible(true);
      }, 800);
    }, 12000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, [isDismissed]);

  if (isDismissed || !isVisible) return null;

  const current = RECENT_ACTIVITIES[currentIndex];

  return (
    <div className="fixed bottom-20 left-4 z-30 max-w-xs sm:max-w-sm bg-white/95 backdrop-blur-md border border-slate-200/90 rounded-2xl p-3.5 shadow-xl text-right animate-in slide-in-from-bottom-5 duration-300 flex items-start gap-3">
      <div className="w-8 h-8 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0 mt-0.5">
        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
      </div>

      <div className="flex-1 text-xs">
        <div className="flex items-center justify-between">
          <span className="font-bold text-slate-900">
            {current.name} ({current.city})
          </span>
          <span className="text-[10px] text-slate-400 font-mono">
            {current.time}
          </span>
        </div>
        <p className="text-slate-600 mt-0.5">
          قام بحجز <strong className="text-amber-800">{current.program}</strong>
        </p>
      </div>

      <button
        onClick={() => setIsDismissed(true)}
        className="text-slate-400 hover:text-slate-600 p-1 cursor-pointer"
        aria-label="إغلاق التنبيه"
      >
        <X className="w-3.5 h-3.5" />
      </button>
    </div>
  );
};
