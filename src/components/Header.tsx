import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar, Phone, Sparkles, ShieldCheck, BookOpen } from 'lucide-react';
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
    { name: 'البرامج التدريبية', href: '#programs' },
    { name: 'حاسبة العائد', href: '#roi-calculator' },
    { name: 'منهجية العمل', href: '#process' },
    { name: 'النتائج والمميزات', href: '#features' },
    { name: 'آراء العملاء', href: '#testimonials' },
    { name: 'الأسئلة الشائعة', href: '#faq' },
    { name: 'تواصل معنا', href: '#contact' },
  ];

  return (
    <>
      {/* Top Notification Bar */}
      <div className="bg-slate-900 text-slate-200 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="font-medium text-slate-100">
              متاح للحجز المباشر هذا الأسبوع
            </span>
            <span className="hidden sm:inline text-slate-400">·</span>
            <span className="hidden sm:inline text-slate-300">
              جلسات أونلاين خاصة مع د. طارق المنصور (MCC - ICF)
            </span>
          </div>

          <div className="flex items-center gap-3 sm:gap-4 text-slate-300">
            <span className="text-[11px] text-amber-300 font-semibold bg-slate-800/90 px-2 py-0.5 rounded border border-slate-700/80">
              صنع بواسطة المبرمج محمد تامر
            </span>
            <a
              href={COACH_INFO.contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-400 transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span className="hidden md:inline font-mono text-[11px]" dir="ltr">
                {COACH_INFO.contact.phone}
              </span>
            </a>
            <div className="hidden sm:flex items-center gap-1 text-amber-400 text-[11px] font-medium">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>ضمان استرداد 100%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200 py-3.5'
            : 'bg-white border-b border-slate-100 py-4'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-slate-900 shadow-sm border border-slate-800 group-hover:scale-105 transition-transform overflow-hidden flex items-center justify-center p-1">
              <img src="/favicon.svg" alt="شعار ارتقاء" className="w-full h-full object-contain" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-black text-slate-900 tracking-tight">
                  ارتقاء
                </span>
                <span className="text-xs font-semibold text-amber-600 border border-amber-200/80 bg-amber-50/80 px-1.5 py-0.2 rounded">
                  ERTIQA
                </span>
              </div>
              <span className="text-[11px] text-slate-500 font-medium flex items-center gap-1">
                <span>استشارات وتدريب تنفيذي</span>
                <span className="hidden sm:inline">·</span>
                <span className="hidden sm:inline text-amber-700 font-bold">صنع بواسطة المبرمج محمد تامر</span>
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-600">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-slate-950 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-amber-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenGuide}
              className="hidden xl:flex items-center gap-1.5 text-xs text-amber-900 bg-amber-50 hover:bg-amber-100/80 border border-amber-200/80 px-3 py-2.5 rounded-xl font-bold transition-all cursor-pointer"
            >
              <BookOpen className="w-3.5 h-3.5 text-amber-700" />
              <span>دليل القرارات (مجاني)</span>
            </button>

            <button
              onClick={() => onOpenBooking()}
              className="bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm px-5 py-2.5 rounded-xl shadow-sm hover:shadow transition-all flex items-center gap-2 group active:scale-95 cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-amber-400 group-hover:rotate-12 transition-transform" />
              <span>احجز جلستك الآن</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none"
            aria-label="القائمة"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top duration-200">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-base font-medium text-slate-700 hover:text-amber-700 hover:bg-amber-50/50 rounded-lg transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="w-full bg-slate-900 text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 shadow-sm text-sm"
                >
                  <Calendar className="w-4 h-4 text-amber-400" />
                  <span>احجز جلسة استشارية</span>
                </button>
                <a
                  href={COACH_INFO.contact.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full border border-emerald-300 text-emerald-800 bg-emerald-50/60 font-semibold py-2.5 rounded-xl flex items-center justify-center gap-2 text-sm"
                >
                  <Phone className="w-4 h-4" />
                  <span>محادثة واتساب سريعة</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
