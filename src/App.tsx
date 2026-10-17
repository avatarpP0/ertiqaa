import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutCoach } from './components/AboutCoach';
import { ProgramMatcherQuiz } from './components/ProgramMatcherQuiz';
import { ProgramsSection } from './components/ProgramsSection';
import { RoiCalculator } from './components/RoiCalculator';
import { LeadershipDiagnostic } from './components/LeadershipDiagnostic';
import { VideoInsights } from './components/VideoInsights';
import { ProcessSteps } from './components/ProcessSteps';
import { ValueProps } from './components/ValueProps';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingCta } from './components/FloatingCta';
import { BookingModal } from './components/BookingModal';
import { ProgramDetailModal } from './components/ProgramDetailModal';
import { LeadMagnetModal } from './components/LeadMagnetModal';
import { RecentBookingTicker } from './components/RecentBookingTicker';
import { Program } from './types';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isGuideOpen, setIsGuideOpen] = useState(false);
  const [bookingProgramId, setBookingProgramId] = useState<string | undefined>(undefined);
  const [selectedProgramForDetails, setSelectedProgramForDetails] = useState<Program | null>(null);

  const handleOpenBooking = (programId?: string) => {
    setBookingProgramId(programId);
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
    setBookingProgramId(undefined);
  };

  const handleScrollToQuiz = () => {
    const quizElem = document.getElementById('quiz');
    if (quizElem) {
      quizElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0F17] text-slate-100 flex flex-col font-sans selection:bg-amber-400 selection:text-slate-950">
      {/* Header */}
      <Header
        onOpenBooking={handleOpenBooking}
        onOpenGuide={() => setIsGuideOpen(true)}
      />

      {/* Main Landing Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          onOpenBooking={handleOpenBooking}
          onScrollToQuiz={handleScrollToQuiz}
        />

        {/* 2. About Coach Section */}
        <AboutCoach onOpenBooking={() => handleOpenBooking()} />

        {/* 3. Interactive Program Matcher Quiz */}
        <ProgramMatcherQuiz onOpenBooking={(id) => handleOpenBooking(id)} />

        {/* 4. Training Programs & Services Section (With Currency Switcher) */}
        <ProgramsSection
          onOpenBooking={(id) => handleOpenBooking(id)}
          onSelectProgramDetails={(program) => setSelectedProgramForDetails(program)}
        />

        {/* 5. Interactive ROI & Value Calculator */}
        <RoiCalculator onOpenBooking={() => handleOpenBooking()} />

        {/* 6. Interactive Leadership Diagnostic Assessment */}
        <LeadershipDiagnostic />

        {/* 7. Executive Video & Audio Insights Reel */}
        <VideoInsights onOpenBooking={() => handleOpenBooking()} />

        {/* 8. Process & How It Works */}
        <ProcessSteps onOpenBooking={() => handleOpenBooking()} />

        {/* 9. Transformation & Value Propositions */}
        <ValueProps />

        {/* 10. Client Testimonials & Case Studies */}
        <TestimonialsSection />

        {/* 11. Frequently Asked Questions */}
        <FaqSection />

        {/* 12. Contact & Inquiries */}
        <ContactSection onOpenBooking={() => handleOpenBooking()} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Floating Action Button */}
      <FloatingCta onOpenBooking={() => handleOpenBooking()} />

      {/* Social Proof Live Activity Ticker */}
      <RecentBookingTicker />

      {/* Interactive Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        initialProgramId={bookingProgramId}
        onClose={handleCloseBooking}
      />

      {/* Program Syllabus & Detail Modal */}
      <ProgramDetailModal
        program={selectedProgramForDetails}
        onClose={() => setSelectedProgramForDetails(null)}
        onBook={(id) => {
          setSelectedProgramForDetails(null);
          handleOpenBooking(id);
        }}
      />

      {/* Free Executive Guide Lead Magnet Modal */}
      <LeadMagnetModal
        isOpen={isGuideOpen}
        onClose={() => setIsGuideOpen(false)}
      />
    </div>
  );
}
