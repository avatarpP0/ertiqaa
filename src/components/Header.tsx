import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar, Phone, MessageCircle, ChevronLeft } from 'lucide-react';
import { COACH_INFO } from '../data/mockData';

interface HeaderProps {
  onOpenBooking: (programId?: string) => void;
  onOpenGuide: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking, onOpenGuide }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'عن المدرب', href: '#about' },
    { name: 'البرامج والخدمات', href: '#programs' },
    { name: 'حاسبة العائد', href: '#roi-calculator' },
    { name: 'تجارب العملاء', href: '#testimonials' },
    { name: 'الأسئلة الشائعة', href: '#faq' },
    { name: 'تواصل معنا', href: '#contact' },
  ];

  return (
    <>
      {/* 1. Clean Top Bar */}
      <div className="bg-[#070A0F] text-slate-300 text-xs py-2 px-4 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Right: Live Availability */}
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="font-medium text-slate-300 text-xs">
              استشارات وتدريب تنفيذي · مواعيد هذا الأسبوع متاحة
            </span>
          </div>

          {/* Left: Programmer Credit & Quick WhatsApp */}
          <div className="flex items-center gap-4">
            <span className="text-[11px] font-semibold text-amber-300 bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/20">
              صنع بواسطة المبرمج محمد تامر
            </span>

            <a
              href="https://wa.me/201149556339?text=مرحباً،%20أود%20الاستفسار%20عن%20حجز%20جلسة%20استشارية"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors font-mono font-bold text-xs"
              dir="ltr"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>01149556339</span>
            </a>
          </div>

        </div>
      </div>

      {/* 2. Structured Main Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0B0F17]/95 backdrop-blur-xl border-b border-white/10 shadow-2xl py-3'
            : 'bg-[#0B0F17]/90 backdrop-blur-md border-b border-white/5 py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          
          {/* Brand Logo & Title */}
          <a href="#" className="flex items-center gap-3 group shrink-0">
            <div className="w-10 h-10 rounded-xl bg-slate-900 border border-amber-500/40 p-1 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform overflow-hidden">
              <img src="/favicon.svg" alt="شعار ارتقاء" className="w-full h-full object-contain" />
            </div>
            <div className="flex flex-col text-right">
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-black text-white tracking-tight">
                  ارتقاء
                </span>
                <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider bg-amber-400/10 border border-amber-400/30 px-1.5 py-0.2 rounded">
                  ERTIQA
                </span>
              </div>
              <span className="text-[11px] text-slate-400 font-medium">
                استشارات وتدريب تنفيذي
              </span>
            </div>
          </a>

          {/* Clean Desktop Navigation (Centered & Spaced) */}
          <nav className="hidden lg:flex items-center gap-7 text-xs sm:text-sm font-semibold text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-amber-400 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-amber-400 after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTAs (WhatsApp + Primary Button) */}
          <div className="hidden sm:flex items-center gap-3">
            {/* WhatsApp Direct Button with the Phone Number */}
            <a
              href="https://wa.me/201149556339?text=مرحباً،%20أود%20الاستفسار%20عن%20حجز%20جلسة%20استشارية"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3.5 py-2.5 rounded-xl border border-emerald-500/40 bg-emerald-950/40 hover:bg-emerald-900/50 text-emerald-300 hover:text-white transition-all text-xs font-bold font-mono shadow-sm"
              dir="ltr"
              title="تواصل مباشر عبر واتساب"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>01149556339</span>
            </a>

            {/* Book Session CTA */}
            <button
              onClick={() => onOpenBooking()}
              className="bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-black text-xs sm:text-sm px-5 py-2.5 rounded-xl shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30 transition-all flex items-center gap-2 group active:scale-95 cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-slate-950" />
              <span>احجز جلستك الآن</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-slate-300 hover:text-white bg-slate-900 border border-white/10 hover:bg-slate-800 transition-colors"
            aria-label="القائمة"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#0B0F17] border-b border-white/10 px-4 pt-3 pb-6 shadow-2xl animate-in slide-in-from-top duration-200 text-right">
            <div className="flex flex-col gap-1.5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3.5 py-2.5 text-sm font-semibold text-slate-200 hover:text-amber-400 hover:bg-white/5 rounded-xl transition-colors"
                >
                  {link.name}
                </a>
              ))}
              
              <div className="pt-3 border-t border-white/10 flex flex-col gap-2.5 mt-2">
                {/* Mobile WhatsApp Button */}
                <a
                  href="https://wa.me/201149556339?text=مرحباً،%20أود%20الاستفسار%20عن%20حجز%20جلسة%20استشارية"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-emerald-950 border border-emerald-500/50 text-emerald-300 font-bold py-3 rounded-xl flex items-center justify-center gap-2 text-sm font-mono"
                  dir="ltr"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>واتساب: 01149556339</span>
                </a>

                {/* Mobile Booking Button */}
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="w-full bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-black py-3 rounded-xl flex items-center justify-center gap-2 shadow-lg text-sm"
                >
                  <Calendar className="w-4 h-4 text-slate-950" />
                  <span>احجز موعد استشارتك</span>
                </button>

                <div className="pt-2 text-center text-xs text-amber-300 font-medium bg-amber-500/10 py-1.5 rounded-lg border border-amber-500/20">
                  صنع بواسطة المبرمج محمد تامر
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
