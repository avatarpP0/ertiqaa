export interface Program {
  id: string;
  title: string;
  subtitle: string;
  category: 'individual' | 'executive' | 'growth' | 'corporate';
  duration: string;
  format: string; // e.g., 'أونلاين عبر زووم' | 'حضوري أو أونلاين'
  price: string;
  originalPrice?: string;
  badge?: string;
  targetAudience: string;
  summary: string;
  features: string[];
  syllabus?: {
    phase: string;
    title: string;
    description: string;
  }[];
  isPopular?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  quote: string;
  metric: string;
  category: 'executive' | 'startup' | 'business';
  date: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'booking' | 'guarantee' | 'corporate';
}

export interface BookingSubmission {
  id: string;
  programId: string;
  programTitle: string;
  date: string;
  timeSlot: string;
  name: string;
  email: string;
  phone: string;
  role: string;
  notes?: string;
  createdAt: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: {
    label: string;
    sublabel: string;
    recommendedProgramId: string;
  }[];
}

export type Currency = 'SAR' | 'AED' | 'USD';

