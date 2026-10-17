import React, { useState } from 'react';
import { X, Calendar, Clock, Check, User, Mail, Phone, Briefcase, FileText, ArrowLeft, ArrowRight, ShieldCheck, Download, Share2, Sparkles } from 'lucide-react';
import { Program, BookingSubmission } from '../types';
import { PROGRAMS, AVAILABLE_TIME_SLOTS, COACH_INFO } from '../data/mockData';

interface BookingModalProps {
  isOpen: boolean;
  initialProgramId?: string;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  initialProgramId,
  onClose,
}) => {
  if (!isOpen) return null;

  const [step, setStep] = useState<number>(1);
  const [selectedProgramId, setSelectedProgramId] = useState<string>(
    initialProgramId || PROGRAMS[0].id
  );

  // Generate the next 7 available dates
  const generateDates = () => {
    const dates = [];
    const daysArabic = ['الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'];
    const monthsArabic = ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'];
    
    const today = new Date();
    for (let i = 1; i <= 7; i++) {
      const d = new Date(today);
      d.setDate(today.getDate() + i);
      // Skip Fridays if preferred, but include for online coaching flexibility
      dates.push({
        fullDate: d.toISOString().split('T')[0],
        dayName: daysArabic[d.getDay()],
        dayNum: d.getDate(),
        monthName: monthsArabic[d.getMonth()],
      });
    }
    return dates;
  };

  const availableDates = generateDates();
  const [selectedDate, setSelectedDate] = useState<string>(availableDates[0].fullDate);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string>(AVAILABLE_TIME_SLOTS[0]);

  // Client Details
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    role: '',
    notes: '',
  });

  const [confirmedBooking, setConfirmedBooking] = useState<BookingSubmission | null>(null);

  const selectedProgram = PROGRAMS.find((p) => p.id === selectedProgramId) || PROGRAMS[0];

  const handleNextToStep2 = () => {
    setStep(2);
  };

  const handleNextToStep3 = () => {
    setStep(3);
  };

  const handleSubmitBooking = (e: React.FormEvent) => {
    e.preventDefault();
    const newBooking: BookingSubmission = {
      id: `ERT-${Math.floor(1000 + Math.random() * 9000)}`,
      programId: selectedProgram.id,
      programTitle: selectedProgram.title,
      date: selectedDate,
      timeSlot: selectedTimeSlot,
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      role: formData.role,
      notes: formData.notes,
      createdAt: new Date().toISOString(),
    };
    setConfirmedBooking(newBooking);
    setStep(4);
  };

  const handleResetAndClose = () => {
    setStep(1);
    setConfirmedBooking(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-slate-950/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="bg-white rounded-2xl max-w-2xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-slate-200 flex flex-col relative text-right"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-white/95 backdrop-blur-md p-5 border-b border-slate-100 flex items-center justify-between z-10">
          <div>
            <span className="text-xs font-bold text-amber-700 uppercase tracking-wider block">
              نظام الحجز المباشر · د. طارق المنصور
            </span>
            <h3 className="text-lg font-extrabold text-slate-900 mt-0.5">
              {step === 4 ? 'تم تأكيد حجزك بنجاح' : 'حجز موعد استشارة وتدريب'}
            </h3>
          </div>
          <button
            onClick={handleResetAndClose}
            className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors cursor-pointer"
            aria-label="إغلاق"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step Progress indicator (if not finished) */}
        {step < 4 && (
          <div className="px-6 pt-4 pb-2 bg-stone-50 border-b border-slate-100">
            <div className="flex items-center justify-between text-xs font-bold text-slate-500 mb-2">
              <span className={step >= 1 ? 'text-amber-700 font-extrabold' : ''}>
                1. اختيار البرنامج
              </span>
              <span className={step >= 2 ? 'text-amber-700 font-extrabold' : ''}>
                2. الموعد والتوقيت
              </span>
              <span className={step >= 3 ? 'text-amber-700 font-extrabold' : ''}>
                3. بيانات المستفيد
              </span>
            </div>
            <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
              <div
                className="bg-amber-500 h-full transition-all duration-300"
                style={{ width: `${(step / 3) * 100}%` }}
              />
            </div>
          </div>
        )}

        {/* Modal Content */}
        <div className="p-6">
          {/* STEP 1: Select Program */}
          {step === 1 && (
            <div className="space-y-4">
              <h4 className="text-sm font-bold text-slate-900 mb-3">
                حدد البرنامج أو الجلسة التي ترغب بحجزها:
              </h4>

              <div className="space-y-3">
                {PROGRAMS.map((prog) => {
                  const isSelected = selectedProgramId === prog.id;
                  return (
                    <div
                      key={prog.id}
                      onClick={() => setSelectedProgramId(prog.id)}
                      className={`p-4 rounded-xl border transition-all cursor-pointer flex items-center justify-between gap-4 ${
                        isSelected
                          ? 'border-amber-500 bg-amber-50/40 shadow-xs ring-1 ring-amber-500/50'
                          : 'border-slate-200 hover:border-slate-300 bg-white'
                      }`}
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <h5 className="font-bold text-sm text-slate-900">
                            {prog.title}
                          </h5>
                          {prog.isPopular && (
                            <span className="text-[10px] font-bold bg-amber-100 text-amber-800 px-2 py-0.5 rounded">
                              الأكثر طلباً
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-slate-500 line-clamp-1">
                          {prog.subtitle}
                        </p>
                        <div className="flex items-center gap-3 text-xs text-slate-400 font-mono">
                          <span>{prog.duration}</span>
                          <span>·</span>
                          <span className="text-emerald-700 font-bold">{prog.price}</span>
                        </div>
                      </div>

                      <div
                        className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ${
                          isSelected
                            ? 'border-amber-600 bg-amber-600 text-white'
                            : 'border-slate-300'
                        }`}
                      >
                        {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="pt-4 flex items-center justify-between">
                <span className="text-xs text-slate-500">
                  مشمولة بضمان استرداد القيمة 100%
                </span>
                <button
                  onClick={handleNextToStep2}
                  className="bg-slate-900 hover:bg-slate-800 text-white font-bold px-6 py-2.5 rounded-xl text-sm flex items-center gap-2 cursor-pointer"
                >
                  <span>متابعة للمواعيد</span>
                  <ArrowLeft className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: Select Date & Time Slot */}
          {step === 2 && (
            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-amber-600" />
                  <span>اختر اليوم المناسب:</span>
                </h4>
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-2">
                  {availableDates.map((item) => {
                    const isSelected = selectedDate === item.fullDate;
                    return (
                      <button
                        key={item.fullDate}
                        onClick={() => setSelectedDate(item.fullDate)}
                        className={`p-2.5 rounded-xl border text-center transition-all cursor-pointer flex flex-col items-center justify-center ${
                          isSelected
                            ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                            : 'bg-stone-50 border-slate-200 text-slate-700 hover:bg-stone-100'
                        }`}
                      >
                        <span className="text-[11px] block">{item.dayName}</span>
                        <span className="text-base font-extrabold font-mono my-0.5">
                          {item.dayNum}
                        </span>
                        <span className="text-[10px] text-slate-400 block">
                          {item.monthName}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-amber-600" />
                  <span>الأوقات المتاحة للجلسة (بتوقيت مكة المكرمة):</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {AVAILABLE_TIME_SLOTS.map((slot) => {
                    const isSelected = selectedTimeSlot === slot;
                    return (
                      <button
                        key={slot}
                        onClick={() => setSelectedTimeSlot(slot)}
                        className={`p-3 rounded-xl border text-right text-xs sm:text-sm font-medium transition-all flex items-center justify-between cursor-pointer ${
                          isSelected
                            ? 'bg-amber-50 border-amber-500 text-amber-950 font-bold'
                            : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300'
                        }`}
                      >
                        <span>{slot}</span>
                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800">
                          متاح
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => setStep(1)}
                  className="text-xs text-slate-600 hover:text-slate-900 font-bold flex items-center gap-1 cursor-pointer"
                >
                  <ArrowRight className="w-3.5 h-3.5" />
                  <span>الرجوع للبرنامج</span>
                </button>
                <button
                  onClick={handleNextToStep3}
                  className="bg-slate-900 hover:bg-slate-800 text-white font-bold px-6 py-2.5 rounded-xl text-sm flex items-center gap-2 cursor-pointer"
                >
                  <span>متابعة لبيانات الحجز</span>
                  <ArrowLeft className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: Client Info Form */}
          {step === 3 && (
            <form onSubmit={handleSubmitBooking} className="space-y-4">
              <div className="bg-amber-50/70 border border-amber-200/80 rounded-xl p-3 flex items-center justify-between text-xs text-amber-950">
                <div>
                  <span className="font-bold">{selectedProgram.title}</span>
                  <span className="text-amber-800 block mt-0.5">
                    {selectedDate} · {selectedTimeSlot}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="text-amber-700 underline text-xs font-bold"
                >
                  تعديل الموعد
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    الاسم الكامل <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="مثال: عبد الرحمن بن علي"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-stone-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    رقم الواتساب <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="05XXXXXXXX"
                    dir="ltr"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-stone-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500 text-right"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    البريد الإلكتروني <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    dir="ltr"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-stone-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500 text-right"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    المسمى الوظيفي / اسم الشركة
                  </label>
                  <input
                    type="text"
                    placeholder="مثال: مؤسس ورئيس تنفيذي"
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full bg-stone-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  أهم نقطة أو تحدي تود التركيز عليه في الجلسة:
                </label>
                <textarea
                  rows={3}
                  placeholder="ملاحظات تمهيدية تساعد المستشار على التحضير للجلسة..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full bg-stone-50 border border-slate-300 rounded-xl p-3 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500"
                />
              </div>

              <div className="pt-2 flex items-center justify-between border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="text-xs text-slate-600 hover:text-slate-900 font-bold flex items-center gap-1 cursor-pointer"
                >
                  <ArrowRight className="w-3.5 h-3.5" />
                  <span>تعديل الموعد</span>
                </button>
                <button
                  type="submit"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-7 py-3 rounded-xl text-sm flex items-center gap-2 cursor-pointer shadow-md"
                >
                  <Check className="w-4 h-4 stroke-[3]" />
                  <span>تأكيد الحجز النهائي</span>
                </button>
              </div>
            </form>
          )}

          {/* STEP 4: Confirmation Ticket */}
          {step === 4 && confirmedBooking && (
            <div className="text-center space-y-6 animate-in zoom-in-95 duration-200">
              
              {/* Ticket Card */}
              <div className="bg-slate-900 text-white rounded-2xl p-6 border border-slate-800 text-right relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-xl pointer-events-none" />

                <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-4">
                  <div>
                    <span className="text-[10px] text-amber-400 font-mono block">
                      رقم التذكرة المرجعية:
                    </span>
                    <span className="text-lg font-mono font-black text-white">
                      {confirmedBooking.id}
                    </span>
                  </div>
                  <div className="text-left">
                    <span className="text-[10px] text-slate-400 block">حالة الحجز:</span>
                    <span className="text-xs font-bold text-emerald-400 flex items-center gap-1">
                      <Check className="w-3.5 h-3.5" />
                      مؤكد بنجاح
                    </span>
                  </div>
                </div>

                <div className="space-y-3 text-xs sm:text-sm">
                  <div>
                    <span className="text-slate-400 text-xs block">البرنامج المحجوز:</span>
                    <h5 className="font-bold text-amber-400 text-base">
                      {confirmedBooking.programTitle}
                    </h5>
                  </div>

                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <div>
                      <span className="text-slate-400 text-[11px] block">تاريخ اللقاء:</span>
                      <span className="font-bold text-white font-mono">{confirmedBooking.date}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 text-[11px] block">توقيت الجلسة:</span>
                      <span className="font-bold text-white">{confirmedBooking.timeSlot}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <div>
                      <span className="text-slate-400 text-[11px] block">المستفيد:</span>
                      <span className="font-medium text-slate-200">{confirmedBooking.name}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 text-[11px] block">الوسيلة:</span>
                      <span className="text-emerald-400 font-medium">رابط زووم (سري وخاص)</span>
                    </div>
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-800 text-xs text-slate-300 leading-relaxed">
                  تم إرسال تفاصيل اللقاء واستبيان التشخيص المسبق إلى بريدك الإلكتروني{' '}
                  <strong className="text-amber-300 font-mono">{confirmedBooking.email}</strong>.
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={`https://wa.me/966548920100?text=${encodeURIComponent(
                    `مرحباً د. طارق، قمت بحجز ${confirmedBooking.programTitle} برقم مرجعي: ${confirmedBooking.id}. موعدي هو ${confirmedBooking.date} في ${confirmedBooking.timeSlot}. أرجو تزويدي بالاستبيان التحضيري.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-3 rounded-xl flex items-center justify-center gap-2 text-xs sm:text-sm shadow-md transition-all"
                >
                  <Phone className="w-4 h-4" />
                  <span>تأكيد الموعد عبر واتساب الآن</span>
                </a>

                <button
                  onClick={handleResetAndClose}
                  className="w-full sm:w-auto bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold px-5 py-3 rounded-xl text-xs sm:text-sm transition-colors cursor-pointer"
                >
                  إغلاق النافذة
                </button>
              </div>

            </div>
          )}
        </div>
      </div>
    </div>
  );
};
