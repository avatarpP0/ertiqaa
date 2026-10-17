import React, { useState } from 'react';
import { Play, Sparkles, Clock, Eye, CheckCircle2, X, ArrowLeft, Video, Volume2 } from 'lucide-react';

interface VideoInsight {
  id: string;
  title: string;
  description: string;
  duration: string;
  platform: string;
  views: string;
  thumbnail: string;
  videoUrl: string;
  keyTakeaways: string[];
}

const INSIGHTS: VideoInsight[] = [
  {
    id: 'decision-making',
    title: 'كيف تتخذ قراراً استثمارياً حاسماً وتتجاوز الشلل التحليلي؟',
    description: 'شرح عملي لمصفوفة صناعة القرارات تحت الضغط وكيف يوازن الرؤساء التنفيذيون بين المخاطرة وحجم الفرصة.',
    duration: '4:20 دقيقة',
    platform: 'بودكاست فنجان',
    views: '142 ألف مشاهدة',
    thumbnail: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800',
    videoUrl: 'https://www.youtube.com',
    keyTakeaways: [
      'قاعدة الـ 70% من البيانات الكافية للتحرك',
      'فصل القرارات غير القابلة للرجوع (Type 1) عن المرنة (Type 2)',
      'وضع خطة احتواء فورية للسيناريو الأسوأ'
    ]
  },
  {
    id: 'pricing-mastery',
    title: 'الخطأ القاتل في تسعير المنتجات الذي يلتهم 40% من أرباحك',
    description: 'تحليل دقيق لأكبر فخ يقع فيه رواد الأعمال عند ربط السعر بالتكلفة المباشرة بدلاً من القيمة المدركة لدى العميل.',
    duration: '6:15 دقيقة',
    platform: 'ملتقى رواد الأعمال',
    views: '98 ألف مشاهدة',
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    videoUrl: 'https://www.youtube.com',
    keyTakeaways: [
      'الانتقال من تسعير التكلفة (Cost-Plus) إلى تسعير القيمة (Value-Based)',
      'هندسة باقات الخدمات لتحفيز اختيار الخيار الأعلى ربحية',
      'كيف ترفع أسعارك بنسبة 25% دون خسارة العملاء الأوفياء'
    ]
  },
  {
    id: 'team-delegation',
    title: 'قاعدة الـ 20 دقيقة لتفويض المهام وبناء فريق ينجز في غيابك',
    description: 'كيف يتحول القائد من دور "رجل الإطفاء" الذي يحل المشكلات اليومية إلى المخطط الاستراتيجي المستريح.',
    duration: '5:45 دقيقة',
    platform: 'قمة القيادة الخليجية',
    views: '115 ألف مشاهدة',
    thumbnail: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800',
    videoUrl: 'https://www.youtube.com',
    keyTakeaways: [
      'تحديد المهام التي يجب تفويضها فوراً عبر مصفوفة الوقت',
      'إعطاء الصلاحيات بدلاً من إعطاء التعليمات الحرفية',
      'بناء نظام إشعار بالنتائج بدلاً من الرقابة الخانقة'
    ]
  }
];

interface VideoInsightsProps {
  onOpenBooking: () => void;
}

export const VideoInsights: React.FC<VideoInsightsProps> = ({ onOpenBooking }) => {
  const [selectedVideo, setSelectedVideo] = useState<VideoInsight | null>(null);

  return (
    <section id="insights" className="py-24 bg-[#0E131F] text-white border-b border-white/5 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-right">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <span className="text-amber-400 font-bold text-xs tracking-wider uppercase bg-amber-500/10 border border-amber-500/30 px-3.5 py-1 rounded-full mb-3">
            محتوى فكري واستشاري
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-black text-white leading-tight">
            شاهد واستمع لمقتطفات من الجلسات والندوات
          </h2>
          <div className="w-16 h-1 bg-amber-500 rounded-full mt-4 mb-4" />
          <p className="text-slate-300 text-base sm:text-lg">
            إضاءات عملية وسريعة تلخص أهم المفاهيم القيادية والاستراتيجية التي نناقشها داخل الجلسات الاستشارية.
          </p>
        </div>

        {/* Video Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {INSIGHTS.map((video) => (
            <div
              key={video.id}
              className="bg-[#0B0F17] border border-white/10 rounded-3xl overflow-hidden hover:border-amber-400/40 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Thumbnail Container */}
                <div 
                  onClick={() => setSelectedVideo(video)}
                  className="relative aspect-video overflow-hidden cursor-pointer bg-slate-900"
                >
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F17] via-transparent to-transparent" />
                  
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                      <Play className="w-6 h-6 fill-slate-950 mr-0.5" />
                    </div>
                  </div>

                  {/* Duration & Platform Badge */}
                  <div className="absolute bottom-3 right-3 left-3 flex items-center justify-between text-[11px] font-bold text-white">
                    <span className="bg-slate-950/80 px-2.5 py-1 rounded-lg backdrop-blur-md border border-white/10 flex items-center gap-1 font-mono">
                      <Clock className="w-3 h-3 text-amber-400" />
                      {video.duration}
                    </span>
                    <span className="bg-slate-950/80 px-2.5 py-1 rounded-lg backdrop-blur-md border border-white/10 text-amber-300">
                      {video.platform}
                    </span>
                  </div>
                </div>

                {/* Card Details */}
                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs text-slate-400 mb-2 font-mono">
                    <Eye className="w-3.5 h-3.5 text-slate-500" />
                    <span>{video.views}</span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 leading-snug group-hover:text-amber-300 transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
                    {video.description}
                  </p>
                </div>
              </div>

              {/* Action */}
              <div className="px-6 pb-6 pt-2 border-t border-white/5 flex items-center justify-between">
                <button
                  onClick={() => setSelectedVideo(video)}
                  className="text-xs font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1.5 cursor-pointer"
                >
                  <span>مشاهدة المقتطف وأهم النقاط</span>
                  <ArrowLeft className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Video Preview Modal */}
        {selectedVideo && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200"
            onClick={() => setSelectedVideo(null)}
          >
            <div 
              className="bg-[#0E131F] rounded-3xl max-w-2xl w-full border border-amber-500/30 shadow-2xl overflow-hidden relative text-right"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Top Bar */}
              <div className="p-5 border-b border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider block">
                    {selectedVideo.platform} · {selectedVideo.duration}
                  </span>
                  <h4 className="text-base sm:text-lg font-black text-white mt-0.5">
                    {selectedVideo.title}
                  </h4>
                </div>
                <button
                  onClick={() => setSelectedVideo(null)}
                  className="w-9 h-9 rounded-full bg-slate-900 border border-white/10 text-slate-400 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Simulated Player View */}
              <div className="relative aspect-video bg-black flex items-center justify-center group overflow-hidden">
                <img
                  src={selectedVideo.thumbnail}
                  alt={selectedVideo.title}
                  className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E131F] via-transparent to-transparent opacity-90" />
                
                <div className="absolute flex flex-col items-center text-center p-6 space-y-3">
                  <div className="w-16 h-16 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center shadow-2xl">
                    <Play className="w-7 h-7 fill-slate-950 mr-0.5" />
                  </div>
                  <span className="text-xs font-bold text-white bg-slate-900/90 border border-white/10 px-3 py-1 rounded-full backdrop-blur-md">
                    مقتطف استشاري مرئي مباشر
                  </span>
                </div>
              </div>

              {/* Key Takeaways */}
              <div className="p-6 space-y-4">
                <h5 className="text-sm font-bold text-amber-300">
                  الخلاصات التنفيذية المستفادة من هذا المقتطف:
                </h5>
                <div className="space-y-2.5">
                  {selectedVideo.keyTakeaways.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-3 bg-slate-900/70 border border-white/5 p-3 rounded-xl text-xs sm:text-sm text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>

                {/* Modal CTA */}
                <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <span className="text-xs text-slate-400">
                    تريد مناقشة هذا التحدي في واقع شركتك؟
                  </span>
                  <button
                    onClick={() => {
                      setSelectedVideo(null);
                      onOpenBooking();
                    }}
                    className="w-full sm:w-auto bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-black px-6 py-2.5 rounded-xl text-xs sm:text-sm shadow-md transition-all cursor-pointer"
                  >
                    حجز جلسة استشارية خاصة
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
