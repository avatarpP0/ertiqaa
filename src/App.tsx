import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutCoach } from './components/AboutCoach';
import { ProgramMatcherQuiz } from './components/ProgramMatcherQuiz';
import { ProgramsSection } from './components/ProgramsSection';
import { ProcessSteps } from './components/ProcessSteps';
import { ValueProps } from './components/ValueProps';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingCta } from './components/FloatingCta';
import { BookingModal } from './components/BookingModal';
import { ProgramDetailModal } from './components/ProgramDetailModal';
import { Program } from './types';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
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
    <div className="min-h-screen bg-stone-50 text-slate-900 flex flex-col font-sans selection:bg-amber-200 selection:text-slate-950">
      {/* Header */}
      <Header onOpenBooking={handleOpenBooking} />

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

        {/* 4. Training Programs & Services Section */}
        <ProgramsSection
          onOpenBooking={(id) => handleOpenBooking(id)}
          onSelectProgramDetails={(program) => setSelectedProgramForDetails(program)}
        />

        {/* 5. Process & How It Works */}
        <ProcessSteps onOpenBooking={() => handleOpenBooking()} />

        {/* 6. Transformation & Value Propositions */}
        <ValueProps />

        {/* 7. Client Testimonials & Case Studies */}
        <TestimonialsSection />

        {/* 8. Frequently Asked Questions */}
        <FaqSection />

        {/* 9. Contact & Inquiries */}
        <ContactSection onOpenBooking={() => handleOpenBooking()} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Floating Action Button */}
      <FloatingCta onOpenBooking={() => handleOpenBooking()} />

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
    </div>
  );
}
