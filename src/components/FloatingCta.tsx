import React, { useState, useEffect } from 'react';
import { Calendar, MessageCircle, Phone } from 'lucide-react';
import { COACH_INFO } from '../data/mockData';

interface FloatingCtaProps {
  onOpenBooking: () => void;
}

export const FloatingCta: React.FC<FloatingCtaProps> = ({ onOpenBooking }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show only after scrolling down 300px
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 z-30 flex items-center gap-2 animate-in slide-in-from-bottom duration-300">
      {/* WhatsApp Quick Icon */}
      <a
        href={COACH_INFO.contact.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center shadow-xl hover:scale-105 transition-all shrink-0 border border-emerald-400/40"
        aria-label="تواصل عبر واتساب"
        title="تواصل مباشر عبر واتساب"
      >
        <MessageCircle className="w-6 h-6" />
      </a>

      {/* Book Session Trigger Button */}
      <button
        onClick={onOpenBooking}
        className="flex-1 sm:flex-none bg-slate-900/95 hover:bg-slate-900 backdrop-blur-md text-white border border-slate-700/80 font-bold px-5 py-3 rounded-full shadow-2xl flex items-center justify-center gap-2 text-xs sm:text-sm hover:scale-102 transition-all cursor-pointer ring-1 ring-amber-400/40"
      >
        <Calendar className="w-4 h-4 text-amber-400 animate-pulse" />
        <span>احجز جلسة استشارية</span>
      </button>
    </div>
  );
};
