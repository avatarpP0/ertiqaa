import React, { useState } from 'react';
import { Play, Clock, Eye, CheckCircle2, X, ArrowLeft, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { getVideoInsights, VideoInsight } from '../data/mockData';

interface VideoInsightsProps {
  onOpenBooking: () => void;
}

export const VideoInsights: React.FC<VideoInsightsProps> = ({ onOpenBooking }) => {
  const { language, isRtl, t } = useLanguage();
  const insights = getVideoInsights(language);
  const [selectedVideo, setSelectedVideo] = useState<VideoInsight | null>(null);

  return (
    <section id="insights" className="py-24 bg-[#0E131F] text-white border-b border-white/5 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className={`max-w-7xl mx-auto px-4 sm:px-6 relative z-10 ${isRtl ? 'text-right' : 'text-left'}`}>
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <span className="text-amber-400 font-bold text-xs tracking-wider uppercase bg-amber-500/10 border border-amber-500/30 px-3.5 py-1 rounded-full mb-3">
            {t.insightsKicker}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-black text-white leading-tight">
            {t.insightsTitle}
          </h2>
          <div className="w-16 h-1 bg-amber-500 rounded-full mt-4 mb-4" />
          <p className="text-slate-300 text-base sm:text-lg">
            {t.insightsSubtitle}
          </p>
        </div>

        {/* Video Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {insights.map((video) => (
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
                  <span>{t.insightsWatchTakeaways}</span>
                  {isRtl ? <ArrowLeft className="w-3.5 h-3.5" /> : <ArrowRight className="w-3.5 h-3.5" />}
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
              className={`bg-[#0E131F] rounded-3xl max-w-2xl w-full border border-amber-500/30 shadow-2xl overflow-hidden relative ${isRtl ? 'text-right' : 'text-left'}`}
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
                    {language === 'en' ? 'Direct Advisory Media Excerpt' : 'مقتطف استشاري مرئي مباشر'}
                  </span>
                </div>
              </div>

              {/* Key Takeaways */}
              <div className="p-6 space-y-4">
                <h5 className="text-sm font-bold text-amber-300">
                  {t.insightsTakeawaysHeader}
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
                    {t.insightsDiscussProblem}
                  </span>
                  <button
                    onClick={() => {
                      setSelectedVideo(null);
                      onOpenBooking();
                    }}
                    className="w-full sm:w-auto bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-black px-6 py-2.5 rounded-xl text-xs sm:text-sm shadow-md transition-all cursor-pointer"
                  >
                    {t.insightsBtnBookPrivate}
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
