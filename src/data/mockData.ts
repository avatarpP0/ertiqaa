import { Program, Testimonial, FaqItem, QuizQuestion, Language } from '../types';

export interface DiagnosticDimension {
  id: string;
  title: string;
  question: string;
  lowLabel: string;
  highLabel: string;
}

export interface VideoInsight {
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

export const COACH_INFO_AR = {
  name: 'د. طارق المنصور',
  title: 'مستشار استراتيجي ومدرب تنفيذي معتمد (MCC - ICF)',
  tagline: 'مساعدتك في تحويل التحديات القيادية والاستراتيجية إلى نمو مستدام وأرقام ملموسة',
  bio: 'أكثر من 15 عاماً في قيادة التحول المؤسسي واستشارات ريادة الأعمال في الشرق الأوسط والخليج العربي. رافقت ما يزيد عن 180 شركة ناشئة ومتوسطة، وقدمت أكثر من 2,400 ساعة توجيه فردي وتنفيذي للرؤساء والقيادات التنفيذية لتحقيق قرارات حاسمة ونتائج غير مسبوقة.',
  avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800',
  executiveImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800',
  certifications: [
    { title: 'ماستر كوتش معتمد MCC', issuer: 'الاتحاد الدولي للكوتشينغ (ICF - USA)' },
    { title: 'دكتوراه في الإدارة الاستراتيجية', issuer: 'جامعة مانشستر' },
    { title: 'ممارس معتمد للقيادة التحويلية', issuer: 'معهد القيادة العالمي' },
    { title: 'عضو المجلس الاستشاري', issuer: 'شبكة رواد الأعمال الخليجية' }
  ],
  stats: [
    { value: '+15', label: 'عاماً من الخبرة الاستشارية', sub: 'في الخليج والشرق الأوسط' },
    { value: '+2,400', label: 'جلسة استشارية منفذة', sub: 'بنسبة رضا 98.4%' },
    { value: '+180', label: 'شركة ورائد أعمال', sub: 'تم مرافقتهم للنمو' },
    { value: '140%', label: 'متوسط نمو الأرباح للعملاء', sub: 'خلال أول 6 أشهر' },
  ],
  mediaFeatures: [
    'بودكاست فنجان',
    'مجلة رواد الأعمال',
    'قمة القيادة الخليجية',
    'الشرق بلومبرغ',
    'فوربس الشرق الأوسط'
  ],
  contact: {
    email: 'contact@tarek-almansoor.com',
    phone: '01149556339',
    location: 'الرياض / القاهرة / دبي (متاح أونلاين عالمياً)',
    whatsapp: 'https://wa.me/201149556339?text=مرحباً،%20أود%20الاستفسار%20عن%20حجز%20جلسة%20استشارية',
    social: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
      youtube: 'https://youtube.com',
      instagram: 'https://instagram.com'
    }
  }
};

export const COACH_INFO_EN = {
  name: 'Dr. Tarek Al-Mansoor',
  title: 'Strategic Advisor & Master Certified Coach (MCC - ICF)',
  tagline: 'Transforming leadership crossroads and complex operational bottlenecks into sustainable scale and verified profitability.',
  bio: 'Over 15 years leading enterprise transformation and executive mentoring across the GCC and MENA region. Guided 180+ companies and delivered 2,400+ advisory hours to corporate executives and founders to drive high-conviction decisions and exponential growth.',
  avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800',
  executiveImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800',
  certifications: [
    { title: 'Master Certified Coach (MCC)', issuer: 'International Coaching Federation (ICF - USA)' },
    { title: 'Ph.D. in Strategic Management', issuer: 'University of Manchester' },
    { title: 'Certified Transformational Leadership', issuer: 'Global Leadership Institute' },
    { title: 'Advisory Board Member', issuer: 'Gulf Entrepreneurship Network' }
  ],
  stats: [
    { value: '+15', label: 'Years of Executive Advisory', sub: 'Across the GCC and MENA' },
    { value: '+2,400', label: 'Consulting Sessions Delivered', sub: '98.4% Client Satisfaction' },
    { value: '+180', label: 'Companies & Founders', sub: 'Empowered for Growth' },
    { value: '140%', label: 'Average Client Revenue Growth', sub: 'Within First 6 Months' },
  ],
  mediaFeatures: [
    'Fnjan Podcast',
    'Entrepreneur Magazine',
    'GCC Leadership Summit',
    'Asharq Bloomberg',
    'Forbes Middle East'
  ],
  contact: {
    email: 'contact@tarek-almansoor.com',
    phone: '01149556339',
    location: 'Riyadh / Cairo / Dubai (Available Online Globally)',
    whatsapp: 'https://wa.me/201149556339?text=Hello,%20I%20would%20like%20to%20inquire%20about%20booking%20a%20session',
    social: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
      youtube: 'https://youtube.com',
      instagram: 'https://instagram.com'
    }
  }
};

export const COACH_INFO = COACH_INFO_AR;

export const PROGRAMS_AR: Program[] = [
  {
    id: 'strategy-session',
    title: 'جلسة البوصلة الاستراتيجية 1-on-1',
    subtitle: 'جلسة تشخيصية وحاسمة لفك الاختناقات وصناعة القرار',
    category: 'individual',
    duration: '90 دقيقة مركزة',
    format: 'أونلاين مباشر عبر زووم (مشفر وسري)',
    price: '950 ر.س',
    originalPrice: '1,400 ر.س',
    badge: 'الأكثر طلباً للبداية',
    targetAudience: 'المؤسسون، الرؤساء التنفيذيون، والمدراء الذين يواجهون قراراً مصيرياً أو مرحلة تحول معقدة',
    summary: 'جلسة عمل تنفيذية مكثفة نضع فيها تحدياتك الحالية تحت المجهر، لنخرج بخريطة طريق واضحة وقابلة للتطبيق الفوري خلال 48 ساعة.',
    features: [
      'تحليل استبيان التشخيص المسبق قبل موعد الجلسة',
      'جلسة فيديو تفاعلية خاصة مدتها 90 دقيقة',
      'خطة عمل تنفيذية مفصلة (Action Plan) بصيغة PDF',
      'تسجيل مرئي كامل للجلسة + ملخص تنفيذي للمخرجات',
      'متابعة كتابية خاصة عبر واتساب لمدة 7 أيام للإجابة عن التساؤلات',
      'ضمان استرداد كامل في حال عدم الرضا بعد أول 30 دقيقة'
    ],
    syllabus: [
      {
        phase: 'قبل الجلسة',
        title: 'التشخيص المعمق وتحديد الفجوات',
        description: 'تعبئة نموذج سري لفحص الوضع المالي، التشغيلي، والتحدي المحوري لدراسته مسبقاً.'
      },
      {
        phase: 'أثناء الجلسة',
        title: 'تفكيك العوائق وهندسة الحلول',
        description: 'مناقشة مباشرة وسريعة للأولويات، اتخاذ القرارات المعلقة، وإعادة ترتيب استراتيجية النمو.'
      },
      {
        phase: 'بعد الجلسة',
        title: 'التسليم والمتابعة التطبيقية',
        description: 'استلام تقرير التوصيات التنفيذي مع مؤشرات الأداء (KPIs) ودعم المتابعة المباشر.'
      }
    ],
    isPopular: true
  },
  {
    id: 'executive-mastery',
    title: 'برنامج النخبة: قيادة التحول والنمو',
    subtitle: 'برنامج إرشاد تنفيذي مستمر لمدة 3 أشهر للقيادات العليا',
    category: 'executive',
    duration: '3 أشهر (12 جلسة أسبوعية)',
    format: 'جلسات أسبوعية أونلاين + لقاءات وجاهية اختيارية',
    price: '9,800 ر.س',
    originalPrice: '13,500 ر.س',
    badge: 'مقاعد محدودة شهرياً (4 فقط)',
    targetAudience: 'الرؤساء التنفيذيون، الشركاء المؤسسون، وقادة القطاعات الراغبون في مضاعفة أداء فرقهم ونمو أعمالهم',
    summary: 'برنامج مرافقة استشارية وثيقة وشاملة يدمج بين التطوير القيادي الشخصي، بناء الفرق عالية الإنجاز، وإعادة ضبط بوصلة العمليات والأرباح.',
    features: [
      '12 جلسة استشارية فردية (60 دقيقة أسبوعياً)',
      'خط مباشر مفتوح عبر واتساب وسلاك للمشورات السريعة والطارئة',
      'تقييم 360 درجة للقدرات القيادية ونقاط القوة والعمى المؤسسي',
      'مراجعة استراتيجية التسويق والمبيعات وبناء خطة التوسع السنوي',
      'أدوات ونماذج عمل حصرية (Dashboards & Financial Frameworks)',
      'جلسة استثنائية لمراجعة الأداء الفصلي مع فريقك القيادي'
    ],
    syllabus: [
      {
        phase: 'الشهر الأول',
        title: 'الوضوح التأسيسي والقيادة الذاتية',
        description: 'إعادة مواءمة الأهداف الشخصية والمؤسسية، التخلص من المهام المستنزفة، وتفويض الصلاحيات.'
      },
      {
        phase: 'الشهر الثاني',
        title: 'هيكلة العمليات وبناء الفريق الفعال',
        description: 'استقطاب الكفاءات، وضع مؤشرات قياس أداء صارمة ومحفزة، وحل النزاعات التنظيمية.'
      },
      {
        phase: 'الشهر الثالث',
        title: 'التوسع الاستراتيجي ومضاعفة العوائد',
        description: 'هندسة تسعير جديدة، فتح قنوات استحواذ عملاء جديدة، والاستعداد للمستثمرين أو التوسع الإقليمي.'
      }
    ]
  },
  {
    id: 'startup-scale',
    title: 'مسرّع رواد الأعمال: من الفكرة إلى الربحية',
    subtitle: 'منهجية مكثفة لأصحاب المشاريع الناشئة لتفادي التعثر المالي',
    category: 'growth',
    duration: '6 أسابيع مكثفة',
    format: 'لقاءات توجيهية + ورش تطبيقية أسبوعية',
    price: '3,450 ر.س',
    originalPrice: '4,900 ر.س',
    badge: 'عائد استثماري سريع',
    targetAudience: 'رواد الأعمال وأصحاب المتاجر والشركات التقنية في مراحل الانطلاق الأولى والنمو الأولي',
    summary: 'تجاوز مرحلة التخبط وعشوائية التسويق من خلال بناء نموذج عمل ربحي مثبت، واستراتيجية تسعير ذكية، واكتساب عملاء بتكلفة منخفضة.',
    features: [
      '6 جلسات توجيه أسبوعية مخصصة لمشروعك',
      'مراجعة دقيقة لنموذج العمل التجاري وقنوات التدفق المالي',
      'بناء عرض القيمة المقنع (Unique Value Proposition)',
      'تدقيق حملات المبيعات واستراتيجيات قمع التحويل (Sales Funnels)',
      'مكتبة قوالب العقود ونماذج الميزانية التقديرية الجاهزة',
      'دعم الاستشارات المستمر طوال فترة البرنامج'
    ],
    syllabus: [
      {
        phase: 'الأسابيع 1-2',
        title: 'التحقق من السوق وملاءمة المنتج للعميل',
        description: 'تدقيق احتياجات العملاء الفعلية وإعادة صياغة العرض لرفع معدل الشراء.'
      },
      {
        phase: 'الأسابيع 3-4',
        title: 'محرك المبيعات والاستحواذ',
        description: 'تصميم قمع مبيعات متماسك يقلل تكلفة الاستحواذ ويضاعف متوسط قيمة السلة.'
      },
      {
        phase: 'الأسابيع 5-6',
        title: 'التدفقات النقدية واستدامة الأرباح',
        description: 'إدارة السيولة النقدية، تقليل الهدر التشغيلي، ووضع خطة التوظيف الأولى.'
      }
    ]
  },
  {
    id: 'corporate-workshop',
    title: 'ورش العمل والاستشارات المؤسسية للشركات',
    subtitle: 'برامج تفاعلية مخصصة للمجالس الإدارية والفرق القيادية',
    category: 'corporate',
    duration: 'يوم أو يومين (حضوري أو عن بعد)',
    format: 'مخصص بالكامل حسب متطلبات المنظمة',
    price: 'عرض سعر مخصص',
    badge: 'للشركات والجهات',
    targetAudience: 'الشركات المتوسطة والكبرى، الهيئات الحكومية، وفرق الإدارة العليا الباحثة عن محاذاة استراتيجية',
    summary: 'معسكرات استراتيجية مغلقة تهدف لتوحيد الرؤية القيادية، تفكيك الخلافات البينية، وبناء ثقافة الإنجاز العالي مع خطط تنفيذية مدعومة بمؤشرات قياس واضحة.',
    features: [
      'تصميم مخصص بالكامل وفق تحديات وأهداف المنظمة',
      'ورش عمل تطبيقية وتفاعلية (Executive Offsite / Retreat)',
      'تحليل الثغرات التشغيلية وفجوات التواصل الإداري',
      'خريطة طريق سنوية متفق عليها ومعتمدة من مجلس الإدارة',
      'جلسات كوتشينغ متابعة دورية مع قادة الأقسام',
      'تقرير حوكمة وأثر تنفيذي شامل للإدارة العليا'
    ],
    syllabus: [
      {
        phase: 'المرحلة التحضيرية',
        title: 'المقابلات التشخيصية والاستطلاع',
        description: 'مقابلات فردية مع أعضاء الإدارة واستبيان داخلي سري لفهم نبض المنظمة بدقة.'
      },
      {
        phase: 'أيام ورشة العمل',
        title: 'تفكيك الاستراتيجية والمواءمة الجماعية',
        description: 'جلسات عصف ذهني مغلقة، تحديد الأولويات الحاسمة، وحسم النزاعات الإدارية.'
      },
      {
        phase: 'المرحلة اللاحقة',
        title: 'المتابعة وقياس مؤشرات الأداء',
        description: 'مراجعة ربع سنوية لتقييم الالتزام بالخطة ومواءمة التحديات الطارئة.'
      }
    ]
  }
];

export const PROGRAMS_EN: Program[] = [
  {
    id: 'strategy-session',
    title: 'Strategic Compass 1-on-1 Session',
    subtitle: 'Intensive diagnostic session to resolve bottlenecks and formulate high-conviction decisions',
    category: 'individual',
    duration: '90 Focused Minutes',
    format: 'Direct Online via Zoom (Encrypted & Confidential)',
    price: '950 SAR',
    originalPrice: '1,400 SAR',
    badge: 'Most Popular Starting Point',
    targetAudience: 'Founders, CEOs, and directors confronting critical decisions or complex organizational pivots',
    summary: 'An intensive executive working session putting your current challenges under the microscope, leaving you with an actionable roadmap deployable within 48 hours.',
    features: [
      'Deep pre-session diagnostic questionnaire analysis',
      '90-minute private interactive video consultation',
      'Detailed Executive Action Plan delivered in PDF',
      'Full session video recording + executive summary',
      'Private 7-day WhatsApp advisory follow-up',
      '100% money-back guarantee if unsatisfied after 30 minutes'
    ],
    syllabus: [
      {
        phase: 'Pre-Session',
        title: 'Deep Diagnostics & Gap Analysis',
        description: 'Confidential assessment reviewing financial, operational, and core bottlenecks beforehand.'
      },
      {
        phase: 'During Session',
        title: 'Bottleneck Dissection & Solution Engineering',
        description: 'Direct priority triage, unfreezing stalled decisions, and recalibrating the growth strategy.'
      },
      {
        phase: 'Post-Session',
        title: 'Execution Deliverables & Tracking',
        description: 'Receive executive recommendations, KPIs, and direct follow-up advisory support.'
      }
    ],
    isPopular: true
  },
  {
    id: 'executive-mastery',
    title: 'Elite Executive Mastery: Leading Scale & Scale-Up',
    subtitle: '3-Month sustained executive mentorship program for C-suite and founders',
    category: 'executive',
    duration: '3 Months (12 Weekly Sessions)',
    format: 'Weekly Online Sessions + Optional In-Person Deep Dives',
    price: '9,800 SAR',
    originalPrice: '13,500 SAR',
    badge: 'Limited to 4 Leaders Monthly',
    targetAudience: 'CEOs, co-founders, and enterprise directors committed to multiplying team output and bottom-line revenue',
    summary: 'A comprehensive high-touch executive mentorship track combining personal leadership mastery, high-performance team engineering, and financial scaling.',
    features: [
      '12 private advisory sessions (60 min/week)',
      'Direct WhatsApp & Slack hotline for urgent decisions',
      '360° leadership evaluation & organizational blind spot audit',
      'Comprehensive review of sales, marketing, and annual scale strategy',
      'Proprietary executive dashboards and financial frameworks',
      'Quarterly executive review session with your leadership team'
    ],
    syllabus: [
      {
        phase: 'Month 1',
        title: 'Foundational Clarity & Self-Leadership',
        description: 'Realigning personal and enterprise goals, eliminating draining tasks, and instituting delegation.'
      },
      {
        phase: 'Month 2',
        title: 'Operational Architecture & High-Performance Teams',
        description: 'Talent attraction, defining rigorous motivating KPIs, and defusing organizational friction.'
      },
      {
        phase: 'Month 3',
        title: 'Strategic Scale & Margin Multiplication',
        description: 'Value pricing overhaul, unlocking new customer acquisition channels, and investor readiness.'
      }
    ]
  },
  {
    id: 'startup-scale',
    title: 'Founder Scale Accelerator: From Idea to Profitability',
    subtitle: 'Intensive track for startup founders to establish sustainable cash flows',
    category: 'growth',
    duration: '6 Intensive Weeks',
    format: 'Weekly Mentorship + Working Strategy Sessions',
    price: '3,450 SAR',
    originalPrice: '4,900 SAR',
    badge: 'High ROI for Startups',
    targetAudience: 'Early-stage entrepreneurs, e-commerce owners, and tech founders navigating early traction',
    summary: 'Cut through marketing chaos and cash burn by designing a validated business model, high-margin pricing, and low CAC acquisition.',
    features: [
      '6 weekly advisory sessions focused on your venture',
      'Rigorous audit of business model and cash flow streams',
      'Engineering a compelling Unique Value Proposition (UVP)',
      'Auditing sales funnels and conversion optimization',
      'Ready-to-use template repository for budgets and agreements',
      'Continuous advisory feedback throughout the 6-week cohort'
    ],
    syllabus: [
      {
        phase: 'Weeks 1-2',
        title: 'Market Validation & Product-Market Fit',
        description: 'Auditing actual customer pain points and reframing the core offering to surge conversions.'
      },
      {
        phase: 'Weeks 3-4',
        title: 'Acquisition & Sales Engine',
        description: 'Designing an optimized funnel that lowers CAC while increasing average deal size.'
      },
      {
        phase: 'Weeks 5-6',
        title: 'Cash Flow & Sustainable Margin',
        description: 'Managing runway, stopping operational leakage, and laying out the first key hires.'
      }
    ]
  },
  {
    id: 'corporate-workshop',
    title: 'Corporate Workshops & Board Advisory',
    subtitle: 'Custom interactive programs for corporate boards and executive committees',
    category: 'corporate',
    duration: '1-2 Days (Onsite or Virtual)',
    format: 'Fully Tailored to Organizational Requirements',
    price: 'Custom Proposal',
    badge: 'Corporate & Government',
    targetAudience: 'Mid-to-large enterprises, governmental entities, and executive boards seeking alignment',
    summary: 'High-impact offsites and retreats unifying leadership vision, defusing departmental silos, and fostering an execution-obsessed culture with clear governance.',
    features: [
      'Tailored design crafted around specific enterprise bottlenecks',
      'Hands-on interactive executive retreat format',
      'Operational gap analysis and management communication audit',
      'Consensus-backed annual roadmap validated by the board',
      'Structured follow-up coaching for departmental vice presidents',
      'Comprehensive executive impact and governance report'
    ],
    syllabus: [
      {
        phase: 'Preparation',
        title: 'Diagnostic Interviews & Internal Survey',
        description: 'One-on-one executive conversations and anonymous staff surveys to capture reality.'
      },
      {
        phase: 'Workshop Days',
        title: 'Strategy Deconstruction & Collective Alignment',
        description: 'Intensive closed-door sessions resolving high-stakes disputes and cementing priorities.'
      },
      {
        phase: 'Follow-up',
        title: 'Execution Governance & Milestone Auditing',
        description: 'Quarterly check-ins to monitor execution and adapt quickly to shifting conditions.'
      }
    ]
  }
];

export const PROGRAMS = PROGRAMS_AR;

export const PROCESS_STEPS_AR = [
  {
    step: '01',
    title: 'اختيار البرنامج وحجز الموعد',
    desc: 'اختر الجلسة الفردية أو البرنامج الأنسب لتطلعاتك، وحدد اليوم والوقت الملائمين لك مباشرة عبر التقويم التفاعلي.'
  },
  {
    step: '02',
    title: 'تعبئة استبيان التشخيص السري',
    desc: 'تعبئة نموذج مركز بأسئلة دقيقة حول واقع مشروعك، أهدافك، وأكبر المعوقات الحالية، ليدرسه المستشار قبل اللقاء.'
  },
  {
    step: '03',
    title: 'انطلاق الجلسة الاستشارية',
    desc: 'لقاء فيديو خاص ومحمي نركز فيه بالكامل على تفكيك المشكلات، دراسة الخيارات الاستراتيجية، وصناعة الحلول.'
  },
  {
    step: '04',
    title: 'استلام خطة العمل والمتابعة',
    desc: 'الحصول على خارطة طريق مكتوبة تشمل الأولويات، مؤشرات الإنجاز، ودعم استشاري للمتابعة حتى تحقيق الأثر الملموس.'
  }
];

export const PROCESS_STEPS_EN = [
  {
    step: '01',
    title: 'Select Track & Reserve Slot',
    desc: 'Choose your desired individual session or multi-week program and select your preferred slot directly on the live schedule.'
  },
  {
    step: '02',
    title: 'Complete Confidential Audit',
    desc: 'Fill out a concise, targeted pre-session questionnaire detailing your company metrics and obstacles for advance study.'
  },
  {
    step: '03',
    title: 'Engage in the Advisory Session',
    desc: 'Private, high-focus encrypted video session tackling your core strategic hurdles, clarifying options, and locking in decisions.'
  },
  {
    step: '04',
    title: 'Receive Action Plan & Follow-Up',
    desc: 'Gain a tangible, written execution roadmap with defined milestones and dedicated advisory support to ensure results.'
  }
];

export const PROCESS_STEPS = PROCESS_STEPS_AR;

export const VALUE_PROPOSITIONS_AR = [
  {
    icon: 'Target',
    title: 'تركيز صارم على الأرقام والنتائج',
    desc: 'نبتعد عن التنظير والكلام العام؛ كل استشارة تترجم فوراً إلى خطوات عملية، مؤشرات أداء، وعائد حقيقي على الاستثمار.'
  },
  {
    icon: 'ShieldCheck',
    title: 'سرية تامة واتفاقية حماية بيانات (NDA)',
    desc: 'جميع بياناتك المالية، قراراتك الداخلية، وأسرار عملك تخضع لأعلى معايير الأمان والسرية المهنية الدولية.'
  },
  {
    icon: 'Zap',
    title: 'حلول مخصصة لواقع السوق المحلي',
    desc: 'خبرة متجذرة في بيئة الأعمال السعودية والخليجية والأنظمة المحلية لضمان حلول واقعية قابلة للتنفيذ.'
  },
  {
    icon: 'MessageSquareShare',
    title: 'دعم ومرافقة مستمرة بين الجلسات',
    desc: 'لست وحدك بعد انتهاء الجلسة؛ قناة تواصل خاصة معك للإجابة على الأسئلة الطارئة ومراجعة مسودات القرارات.'
  },
  {
    icon: 'Layers',
    title: 'أدوات ونماذج عمل تنفيذية جاهزة',
    desc: 'وصول مباشر لأكثر من 30 قالباً احترافياً في التسعير، إدارة التدفقات، قياس أداء الفريق، والعروض الاستثمارية.'
  },
  {
    icon: 'Award',
    title: 'ضمان الرضا الكامل 100%',
    desc: 'إذا لم تشعر بوضوح غير مسبوق وقيمة مضافة حقيقية خلال أول 30 دقيقة من جلستك الأولى، تسترد كامل المبلغ فوراً.'
  }
];

export const VALUE_PROPOSITIONS_EN = [
  {
    icon: 'Target',
    title: 'Strict Focus on Hard Numbers & Outcomes',
    desc: 'No vague theories; every session translates immediately into actionable steps, concrete KPIs, and measurable ROI.'
  },
  {
    icon: 'ShieldCheck',
    title: 'Strict Confidentiality & NDA Protection',
    desc: 'All internal financials, strategic decisions, and proprietary data are protected under international confidentiality standards.'
  },
  {
    icon: 'Zap',
    title: 'Grounding in Middle East Market Realities',
    desc: 'Deep acumen in GCC and Saudi enterprise dynamics and regulation, ensuring solutions that work on the ground.'
  },
  {
    icon: 'MessageSquareShare',
    title: 'Direct Advisory Hotline Between Sessions',
    desc: 'You are not left alone after the call; private communication channel to vet urgent decisions and review contract drafts.'
  },
  {
    icon: 'Layers',
    title: 'Ready-to-Deploy Executive Frameworks',
    desc: 'Direct access to 30+ proprietary templates covering pricing algorithms, cash runway, team scorecards, and pitch decks.'
  },
  {
    icon: 'Award',
    title: '100% Risk-Free Satisfaction Guarantee',
    desc: 'If you do not experience profound clarity and unmistakable value in the first 30 minutes, your investment is refunded instantly.'
  }
];

export const VALUE_PROPOSITIONS = VALUE_PROPOSITIONS_AR;

export const TESTIMONIALS_AR: Testimonial[] = [
  {
    id: '1',
    name: 'م. فهد القحطاني',
    role: 'المؤسس والرئيس التنفيذي',
    company: 'منصة سداد فنتك للتقنية المالية',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300',
    rating: 5,
    quote: 'كانت شركتنا تمر بأزمة نمو وتشتت في اتخاذ القرار بين التوسع الإقليمي أو التركيز على السوق المحلي. بعد 3 جلسات فقط مع د. طارق، تمكنا من إعادة هيكلة الأولويات ومضاعفة الإيرادات بنسبة 140% خلال 6 أشهر.',
    metric: 'نمو الإيرادات 140% وتوفير 250k ر.س',
    category: 'startup',
    date: 'منذ أسبوعين'
  },
  {
    id: '2',
    name: 'د. سارة الراشد',
    role: 'نائب الرئيس للتطوير المؤسسي',
    company: 'مجموعة الرعاية الطبية الحديثة',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300',
    rating: 5,
    quote: 'برنامج النخبة القيادي أحدث فارقاً جذرياً في أسلوب إدارتي وتواصلي مع مجلس الإدارة. النماذج التنفيذية التي زودنا بها د. طارق ساعدتني على تفويض المهام وتوفير أكثر من 15 ساعة أسبوعياً من وقتي.',
    metric: 'ترقية تنفيذية وإعادة هيكلة 4 إدارات',
    category: 'executive',
    date: 'منذ شهر'
  },
  {
    id: '3',
    name: 'أ. عبد الله الشمري',
    role: 'رائد أعمال وشريك مؤسس',
    company: 'سلسلة متاجر نماء للمنتجات العضوية',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300',
    rating: 5,
    quote: 'كنت على وشك إغلاق فرعين بسبب النزيف المالي وعدم وضوح الرؤية. جلسة البوصلة الاستراتيجية ثم المتابعة لمدة 6 أسابيع أعادت التوازن للتدفقات النقدية وحققت أول شهر ربحي لنا منذ عامين.',
    metric: 'تحول من الخسارة إلى صافي ربح 18%',
    category: 'business',
    date: 'منذ 3 أشهر'
  },
  {
    id: '4',
    name: 'أ. نورة السليمان',
    role: 'مديرة قطاع التسويق والنمو',
    company: 'تطبيق وصل اللوجستي',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=300',
    rating: 5,
    quote: 'أسلوب التوجيه ليس مجرد نصائح عامة، بل تدريب مبني على بيانات حقيقية ونماذج رياضية واستراتيجية تلهمك لاتخاذ القرارات دون تردد. أنصح بشدة أي قيادي يسعى للأثر الحقيقي.',
    metric: 'انخفاض تكلفة الاستحواذ بنسبة 35%',
    category: 'startup',
    date: 'منذ 4 أشهر'
  }
];

export const TESTIMONIALS_EN: Testimonial[] = [
  {
    id: '1',
    name: 'Eng. Fahad Al-Qahtani',
    role: 'Founder & CEO',
    company: 'Sadad FinTech Solutions',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300',
    rating: 5,
    quote: 'Our company suffered from growth bottlenecks and fractured executive focus. Following 3 intensive sessions with Dr. Tarek, we restructured our product priority matrix and surged revenues by 140% in 6 months.',
    metric: '+140% Revenue Growth & $65k Saved',
    category: 'startup',
    date: '2 weeks ago'
  },
  {
    id: '2',
    name: 'Dr. Sarah Al-Rashed',
    role: 'VP of Organizational Transformation',
    company: 'Modern Healthcare Group',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300',
    rating: 5,
    quote: 'The Elite Executive Program radically enhanced my strategic alignment with our board of directors. The decision frameworks Dr. Tarek instituted freed up over 15 hours weekly for true visionary leadership.',
    metric: 'Board Promotion & Restructured 4 Divisions',
    category: 'executive',
    date: '1 month ago'
  },
  {
    id: '3',
    name: 'Abdullah Al-Shammari',
    role: 'Serial Entrepreneur & Co-founder',
    company: 'Namaa Organic Retail Chain',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300',
    rating: 5,
    quote: 'I was on the verge of shuttering two branches due to cash burn. The Strategic Compass session and 6 weeks of dedicated tracking reversed negative cash flows, yielding our first profitable quarter in 2 years.',
    metric: 'Shifted from Deficit to 18% Net Profit',
    category: 'business',
    date: '3 months ago'
  },
  {
    id: '4',
    name: 'Noura Al-Sulaiman',
    role: 'Head of Growth & Marketing',
    company: 'Wasel Logistics Tech',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=300',
    rating: 5,
    quote: 'Dr. Tarek’s methodology isn’t generic theory—it’s high-precision advisory grounded in real data and rigorous commercial logic. It instills absolute conviction to execute without hesitation.',
    metric: 'Reduced Customer Acquisition Cost by 35%',
    category: 'startup',
    date: '4 months ago'
  }
];

export const TESTIMONIALS = TESTIMONIALS_AR;

export const FAQS_AR: FaqItem[] = [
  {
    id: 'f1',
    question: 'ما هو الفرق بين الكوتشينغ والاستشارة مع د. طارق؟',
    answer: 'ندمج بين المدرستين بأعلى كفاءة: الكوتشينغ التنفيذي يركز على تمكينك كقائد واستخراج أفضل ما لديك لحل المشكلات المعقدة، بينما الاستشارة تقدم لك إجابات وخبرات وحلولاً إدارية وتسويقية جاهزة ومبنية على دراسة السوق.',
    category: 'general'
  },
  {
    id: 'f2',
    question: 'كيف تتم الجلسات وهل هي مسجلة؟',
    answer: 'تتم الجلسات أونلاين عبر منصة زووم (Zoom) مشفرة بالكامل لراحتك من أي مكان بالعالم. بعد انتهاء الجلسة، يتم تزويدك بتسجيل الفيديو الكامل للرجوع إليه مع ملخص تنفيذي لأهم القرارات وخطة العمل بصيغة PDF.',
    category: 'booking'
  },
  {
    id: 'f3',
    question: 'ما هي آلية ضمان استرداد الرسوم بنسبة 100%؟',
    answer: 'ثقتنا في جودة القيمة التي ستحصل عليها مطلقة. إذا شعرت خلال أول 30 دقيقة من الجلسة أن الاستشارة لا تناسب تطلعاتك أو لم تقدم لك الفائدة المتوقعة، يمكنك إبلاغ المستشار مباشرة وسيتم استرجاع كامل المبلغ لحسابك دون طرح أي أسئلة.',
    category: 'guarantee'
  },
  {
    id: 'f4',
    question: 'هل يمكن إصدار فاتورة ضريبية رسمية للشركات؟',
    answer: 'نعم بالتأكيد، يتم إصدار فواتير ضريبية معتمدة وموجهة لشركتك أو مؤسستك تشمل كافة البيانات النظامية والضريبية لتسهيل إجراءات الصرف المحاسبي الداخلي.',
    category: 'corporate'
  },
  {
    id: 'f5',
    question: 'كيف يتم الحفاظ على سرية المعلومات وأسرار العمل؟',
    answer: 'نوقع اتفاقية عدم إفصاح وحماية سرية البيانات (NDA) رسمية مع كل عميل قبل بدء أول جلسة. جميع تفاصيل شركتك، أرقامك المالية، وخططك التوسعية تظل سرية ومحمية بنسبة 100%.',
    category: 'general'
  },
  {
    id: 'f6',
    question: 'ماذا لو أردت تغيير موعد الجلسة بعد تأكيده؟',
    answer: 'يمكنك إعادة جدولة موعدك بسهولة عبر الرابط المرفق في بريدك الإلكتروني أو عبر إرسال رسالة واتساب قبل 24 ساعة على الأقل من الموعد المحدد واختيار موعد بديل مناسب دون أي رسوم إضافية.',
    category: 'booking'
  }
];

export const FAQS_EN: FaqItem[] = [
  {
    id: 'f1',
    question: 'What is the distinction between coaching and advisory with Dr. Tarek?',
    answer: 'We synthesize both disciplines: executive coaching sharpens your personal leadership capabilities and decision hygiene, while strategic advisory delivers tested institutional playbooks and growth solutions tailored to your market.',
    category: 'general'
  },
  {
    id: 'f2',
    question: 'How are sessions conducted, and are they recorded?',
    answer: 'Sessions take place via private, high-security Zoom rooms, easily accessible worldwide. Upon completion, you receive the complete HD recording, along with an executive roadmap deliverable in PDF format.',
    category: 'booking'
  },
  {
    id: 'f3',
    question: 'How does the 100% Money-Back Guarantee work?',
    answer: 'We operate with absolute confidence in our outcomes. If during the initial 30 minutes you do not perceive immense clarity and ROI, simply let Dr. Tarek know and your investment is refunded promptly without dispute.',
    category: 'guarantee'
  },
  {
    id: 'f4',
    question: 'Can you issue formal corporate VAT tax invoices?',
    answer: 'Yes, fully compliant VAT-registered tax invoices are automatically issued for corporate entities and governmental agencies to streamline company expense approvals.',
    category: 'corporate'
  },
  {
    id: 'f5',
    question: 'How is proprietary corporate data kept confidential?',
    answer: 'We execute a mutual Non-Disclosure Agreement (NDA) prior to our first deep dive. All financials, organizational challenges, and proprietary roadmap details are guarded under stringent security protocols.',
    category: 'general'
  },
  {
    id: 'f6',
    question: 'Can I reschedule my appointment after booking?',
    answer: 'Yes, you may reschedule freely up to 24 hours prior to the scheduled slot via the automated email confirmation link or by messaging our WhatsApp support line.',
    category: 'booking'
  }
];

export const FAQS = FAQS_AR;

export const QUIZ_QUESTIONS_AR: QuizQuestion[] = [
  {
    id: 1,
    question: 'ما هو التحدي الأكثر إلحاحاً الذي يواجهك في عملك الآن؟',
    options: [
      {
        label: 'متردد في اتخاذ قرار استثماري أو وظيفي مصيري',
        sublabel: 'أحتاج إلى وضوح خارجي ورأي خبير محايد لفك التردد',
        recommendedProgramId: 'strategy-session'
      },
      {
        label: 'أشعر بالاحتراق وأغرق في التفاصيل التشغيلية اليومية',
        sublabel: 'الفريق يعتمد عليّ في كل شيء وأحتاج لتفويض فعال وهيكلة',
        recommendedProgramId: 'executive-mastery'
      },
      {
        label: 'المشروع يتعثر في المبيعات وتكلفة اكتساب العملاء مرتفعة',
        sublabel: 'أحتاج لنموذج عمل ربحي وتدفقات نقدية مستقرة وسريعة',
        recommendedProgramId: 'startup-scale'
      },
      {
        label: 'ضعف التنسيق والنزاعات البينية داخل الفريق القيادي بالشركة',
        sublabel: 'نحتاج ورشة عمل استراتيجية لتوحيد الرؤية ومواءمة الأهداف',
        recommendedProgramId: 'corporate-workshop'
      }
    ]
  },
  {
    id: 2,
    question: 'ما هي طبيعة دورك ومرحلة عملك الراهنة؟',
    options: [
      {
        label: 'رئيس تنفيذي أو شريك مؤسس لشركة قائمة',
        sublabel: 'لدينا فريق عمل وعمليات تشغيلية نشطة نسعى لتوسيعها',
        recommendedProgramId: 'executive-mastery'
      },
      {
        label: 'رائد أعمال في المراحل الأولى (سنة 1-3)',
        sublabel: 'أبحث عن إثبات نموذج العمل التجاري وتوليد أرباح مستدامة',
        recommendedProgramId: 'startup-scale'
      },
      {
        label: 'قيادي تنفيذي أو مدير إدارة عليا في قطاع خاص أو حكومي',
        sublabel: 'أسعى لتطوير حضوري القيادي وتأثيري في صناعة القرار',
        recommendedProgramId: 'strategy-session'
      },
      {
        label: 'عضو مجلس إدارة أو ممثل لجهة ترغب بتطوير فريقها بالكامل',
        sublabel: 'نبحث عن برنامج تدريبي أو استشاري مؤسسي مخصص',
        recommendedProgramId: 'corporate-workshop'
      }
    ]
  },
  {
    id: 3,
    question: 'ما هو الأثر الذي تتطلع لتحقيقه خلال الـ 90 يوماً القادمة؟',
    options: [
      {
        label: 'حسم قرار محوري وبناء خطة عمل واضحة قابلة للتنفيذ الفوري',
        sublabel: 'الهدف: الوضوح التام وراحة البال خلال أقل من أسبوع',
        recommendedProgramId: 'strategy-session'
      },
      {
        label: 'إعادة هيكلة الإدارة ومضاعفة نمو الأرباح مع توفير 15 ساعة أسبوعياً',
        sublabel: 'الهدف: تحول نوعي مستدام في الأداء والقيادة التنفيذية',
        recommendedProgramId: 'executive-mastery'
      },
      {
        label: 'الوصول للربحية الصافية وبناء محرك مبيعات متماسك',
        sublabel: 'الهدف: استقرار السيولة النقدية وتفادي شبح التعثر المالي',
        recommendedProgramId: 'startup-scale'
      },
      {
        label: 'محاذاة الفريق التنفيذي واعتماد خارطة طريق استراتيجية سنوية',
        sublabel: 'الهدف: كفاءة تشغيلية جماعية وثقافة عمل عالية الإنجاز',
        recommendedProgramId: 'corporate-workshop'
      }
    ]
  }
];

export const QUIZ_QUESTIONS_EN: QuizQuestion[] = [
  {
    id: 1,
    question: 'What is the single most pressing hurdle confronting you currently?',
    options: [
      {
        label: 'Hesitating over a pivotal strategic or investment crossroad',
        sublabel: 'I require external clarity and an objective expert assessment to unfreeze action',
        recommendedProgramId: 'strategy-session'
      },
      {
        label: 'Experiencing burnout and trapped inside day-to-day operations',
        sublabel: 'My team depends on me for everything; I need delegation and clean structure',
        recommendedProgramId: 'executive-mastery'
      },
      {
        label: 'Struggling with sluggish sales and high customer acquisition cost',
        sublabel: 'I need a profitable business model and consistent, positive cash flow',
        recommendedProgramId: 'startup-scale'
      },
      {
        label: 'Friction, silos, and misalignment across our executive leadership',
        sublabel: 'We require a structured retreat to align goals and unify team momentum',
        recommendedProgramId: 'corporate-workshop'
      }
    ]
  },
  {
    id: 2,
    question: 'Which profile best describes your current organizational role?',
    options: [
      {
        label: 'CEO or Managing Partner of an established company',
        sublabel: 'We have an active organization and operations that need disciplined scale',
        recommendedProgramId: 'executive-mastery'
      },
      {
        label: 'Founder of an early-stage startup (Years 1 to 3)',
        sublabel: 'Focused on validating commercial viability and generating sustained margins',
        recommendedProgramId: 'startup-scale'
      },
      {
        label: 'C-Suite Executive or Director in Corporate / Government',
        sublabel: 'Aiming to elevate executive presence, board communication, and impact',
        recommendedProgramId: 'strategy-session'
      },
      {
        label: 'Board Member or Enterprise Representative seeking team upskilling',
        sublabel: 'Looking for a bespoke corporate workshop or retreat for our executives',
        recommendedProgramId: 'corporate-workshop'
      }
    ]
  },
  {
    id: 3,
    question: 'What definitive milestone do you intend to achieve in the next 90 days?',
    options: [
      {
        label: 'Resolve a critical decision and deploy a verified 48-hour action plan',
        sublabel: 'Target: Total clarity and peace of mind within 7 days',
        recommendedProgramId: 'strategy-session'
      },
      {
        label: 'Restructure executive operations and reclaim 15 hours weekly',
        sublabel: 'Target: Enduring leadership transformation and bottom-line expansion',
        recommendedProgramId: 'executive-mastery'
      },
      {
        label: 'Achieve net operating profit and institutionalize a predictable sales engine',
        sublabel: 'Target: Cash flow security and avoiding wasteful burn',
        recommendedProgramId: 'startup-scale'
      },
      {
        label: 'Align the C-suite and validate our annual corporate strategic roadmap',
        sublabel: 'Target: Collective operational synergy and an execution culture',
        recommendedProgramId: 'corporate-workshop'
      }
    ]
  }
];

export const QUIZ_QUESTIONS = QUIZ_QUESTIONS_AR;

export const DIAGNOSTIC_DIMENSIONS_AR: DiagnosticDimension[] = [
  {
    id: 'strategy',
    title: '1. وضوح القرارات والأولويات الاستراتيجية',
    question: 'ما مدى وضوح أهدافك السنوية وقدرتك على اتخاذ القرارات المصيرية دون تردد؟',
    lowLabel: 'تشتت وتردد في حسم الأمور',
    highLabel: 'وضوح استراتيجي وحسم سريع'
  },
  {
    id: 'delegation',
    title: '2. تفويض الصلاحيات واستقلالية الفريق',
    question: 'هل تسير الأعمال والعمليات بسلاسة حين تغيب عن العمل لمدة أسبوعين متواصلين؟',
    lowLabel: 'تتوقف الأعمال فور غيابي',
    highLabel: 'فريق مستقل ينجز بكفاءة تامة'
  },
  {
    id: 'finances',
    title: '3. استقرار التدفقات النقدية وهوامش الربحية',
    question: 'ما مدى انتظام السيولة النقدية وتفادي أزمات الرواتب والتسليم للعملاء؟',
    lowLabel: 'نزيف سيولة وضغط مالي مستمر',
    highLabel: 'تدفقات ثابتة وهوامش ربح متصاعدة'
  },
  {
    id: 'energy',
    title: '4. التوازن الذهني وراحة البال القيادية',
    question: 'هل تمتلك وقتاً صافياً للتفكير الاستراتيجي وحياتك الشخصية بعيداً عن ضغط العمل؟',
    lowLabel: 'احتراق ذهني وإرهاق يومي',
    highLabel: 'صفاء ذهني وتوازن استثنائي'
  }
];

export const DIAGNOSTIC_DIMENSIONS_EN: DiagnosticDimension[] = [
  {
    id: 'strategy',
    title: '1. Strategic Clarity & Decision Velocity',
    question: 'How clear are your strategic priorities and your ability to decide without paralyzing hesitation?',
    lowLabel: 'Scattered focus & chronic hesitation',
    highLabel: 'Crystal strategic clarity & high speed'
  },
  {
    id: 'delegation',
    title: '2. Delegation Protocol & Team Autonomy',
    question: 'Do critical enterprise operations run smoothly when you step away for two full weeks?',
    lowLabel: 'Haults immediately in my absence',
    highLabel: 'Autonomous team delivering smoothly'
  },
  {
    id: 'finances',
    title: '3. Cash Runway & Margin Resilience',
    question: 'How consistent is operating cash flow and avoidance of liquidity crunches or payroll strain?',
    lowLabel: 'Cash burn & acute financial pressure',
    highLabel: 'Predictable cash flows & rising margins'
  },
  {
    id: 'energy',
    title: '4. Executive Energy & Mental Equanimity',
    question: 'Do you retain dedicated time for reflective visioning and personal equilibrium away from daily fires?',
    lowLabel: 'Constant burnout & daily exhaustion',
    highLabel: 'Deep mental serenity & peak focus'
  }
];

export const VIDEO_INSIGHTS_AR: VideoInsight[] = [
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

export const VIDEO_INSIGHTS_EN: VideoInsight[] = [
  {
    id: 'decision-making',
    title: 'How to Execute Decisive Strategic Decisions & Avoid Analysis Paralysis',
    description: 'An executive breakdown of the decision matrix under pressure, balancing upside with calculated downside risk.',
    duration: '4:20 mins',
    platform: 'Fnjan Podcast',
    views: '142k Views',
    thumbnail: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800',
    videoUrl: 'https://www.youtube.com',
    keyTakeaways: [
      'The 70% data threshold for timely execution',
      'Separating irreversible Type 1 decisions from agile Type 2 choices',
      'Formulating worst-case containment roadmaps beforehand'
    ]
  },
  {
    id: 'pricing-mastery',
    title: 'The Fatal Pricing Error Cannibalizing 40% of Your Enterprise Margins',
    description: 'A deep audit into why business owners stay trapped in cost-plus pricing rather than monetizing client perceived value.',
    duration: '6:15 mins',
    platform: 'Entrepreneur Keynote',
    views: '98k Views',
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    videoUrl: 'https://www.youtube.com',
    keyTakeaways: [
      'Transitioning from Cost-Plus to Value-Based monetization',
      'Architecting package tiers to steer clients to the highest-margin tier',
      'Lifting prices by 25% without churn among high-value clients'
    ]
  },
  {
    id: 'team-delegation',
    title: 'The 20-Minute Delegation Rule: Building Teams That Execute in Your Absence',
    description: 'How leaders graduate from being 24/7 corporate firefighters to serene architects of growth.',
    duration: '5:45 mins',
    platform: 'GCC Leadership Summit',
    views: '115k Views',
    thumbnail: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800',
    videoUrl: 'https://www.youtube.com',
    keyTakeaways: [
      'Diagnosing tasks to delegate immediately via priority grids',
      'Granting true boundary autonomy rather than microscopic instructions',
      'Instituting result dashboards instead of suffocating micro-monitoring'
    ]
  }
];

export const AVAILABLE_TIME_SLOTS_AR = [
  '10:00 ص - 11:30 ص',
  '01:00 م - 02:30 م',
  '04:30 م - 06:00 م',
  '07:30 م - 09:00 م',
];

export const AVAILABLE_TIME_SLOTS_EN = [
  '10:00 AM - 11:30 AM',
  '01:00 PM - 02:30 PM',
  '04:30 PM - 06:00 PM',
  '07:30 PM - 09:00 PM',
];

export const AVAILABLE_TIME_SLOTS = AVAILABLE_TIME_SLOTS_AR;

// Localized accessor functions
export const getCoachInfo = (lang: Language) => (lang === 'en' ? COACH_INFO_EN : COACH_INFO_AR);
export const getPrograms = (lang: Language): Program[] => (lang === 'en' ? PROGRAMS_EN : PROGRAMS_AR);
export const getProcessSteps = (lang: Language) => (lang === 'en' ? PROCESS_STEPS_EN : PROCESS_STEPS_AR);
export const getValueProps = (lang: Language) => (lang === 'en' ? VALUE_PROPOSITIONS_EN : VALUE_PROPOSITIONS_AR);
export const getTestimonials = (lang: Language): Testimonial[] => (lang === 'en' ? TESTIMONIALS_EN : TESTIMONIALS_AR);
export const getFaqs = (lang: Language): FaqItem[] => (lang === 'en' ? FAQS_EN : FAQS_AR);
export const getQuizQuestions = (lang: Language): QuizQuestion[] => (lang === 'en' ? QUIZ_QUESTIONS_EN : QUIZ_QUESTIONS_AR);
export const getDiagnosticDimensions = (lang: Language): DiagnosticDimension[] => (lang === 'en' ? DIAGNOSTIC_DIMENSIONS_EN : DIAGNOSTIC_DIMENSIONS_AR);
export const getVideoInsights = (lang: Language): VideoInsight[] => (lang === 'en' ? VIDEO_INSIGHTS_EN : VIDEO_INSIGHTS_AR);
export const getTimeSlots = (lang: Language): string[] => (lang === 'en' ? AVAILABLE_TIME_SLOTS_EN : AVAILABLE_TIME_SLOTS_AR);
