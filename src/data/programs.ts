export interface ProgramCurriculumModule {
  title: string;
  topics: string[];
}

export interface ProgramTestimonial {
  name: string;
  role: string;
  content: string;
  before: string;
  after: string;
  metric: string;
  improvement: string;
}

export interface ProgramFAQ {
  q: string;
  a: string;
}

export interface ProgramData {
  slug: string;
  name: string;
  tagline: string;
  price: string;
  classes: string;
  description: string;
  accentBg: string;
  heroStats: { value: string; label: string }[];
  forWhom: { title: string; desc: string }[];
  curriculum: ProgramCurriculumModule[];
  features: string[];
  outcomes: { value: string; label: string; desc: string }[];
  testimonials: ProgramTestimonial[];
  faqs: ProgramFAQ[];
}

export const programsData: ProgramData[] = [
  {
    slug: 'cbse-plan',
    name: 'CBSE Plan',
    tagline: 'Master Every Chapter Before Your Board Exams',
    price: '₹1,299',
    classes: 'Classes 8-10',
    description:
      'The CBSE Plan covers the complete NCERT syllabus for Classes 8, 9, and 10 using AI-powered spaced repetition that schedules every chapter for review at exactly the right time. Our Metacognition Engine continuously tracks retention gaps across all five core subjects and rebuilds your child\'s study plan daily so nothing slips through before board exams.',
    accentBg: '#FDF3E7',
    heroStats: [
      { value: '4,847+', label: 'Students enrolled' },
      { value: '91%', label: 'Grade improvement' },
      { value: '30 days', label: 'To see results' },
      { value: '4.8/5', label: 'Parent rating' },
    ],
    forWhom: [
      {
        title: 'Class 10 Board Exam Students',
        desc: 'Built for students preparing for CBSE Class 10 boards, with full coverage of every chapter, past-paper patterns, and AI-based mock tests timed to your board schedule.',
      },
      {
        title: 'Class 9 Students Building a Strong Base',
        desc: 'Class 9 forms the foundation for boards. This plan ensures every NCERT concept is retained properly so Class 10 revision becomes consolidation, not reteaching.',
      },
      {
        title: 'Class 8 Students Starting Early',
        desc: 'Get a head start on the entire middle school syllabus. Students who join in Class 8 arrive at boards with 2+ years of spaced retention advantage over their peers.',
      },
    ],
    curriculum: [
      {
        title: 'Mathematics',
        topics: [
          'Number Systems & Real Numbers',
          'Polynomials & Factorisation',
          'Linear Equations in Two Variables',
          'Quadratic Equations & Roots',
          'Arithmetic Progressions',
          'Triangles, Circles & Constructions',
        ],
      },
      {
        title: 'Science',
        topics: [
          'Chemical Reactions & Equations',
          'Acids, Bases and Salts',
          'Life Processes & Biological Systems',
          'Light, Electricity & Magnetic Effects',
          'Natural Resources & Sustainability',
        ],
      },
      {
        title: 'Social Studies',
        topics: [
          'Nationalism in India & Modern History',
          'Democracy & Political Systems',
          'Resources & Development (Geography)',
          'Economic Development & Sectors',
        ],
      },
      {
        title: 'English',
        topics: [
          'Literature: First Flight & Footprints Without Feet',
          'Grammar: Tenses, Voice, Reported Speech',
          'Writing Skills: Letters, Notices, Essays',
          'Reading Comprehension & Unseen Passages',
        ],
      },
      {
        title: 'Revision Strategy',
        topics: [
          'Spaced Repetition Scheduling per Subject',
          'Board Exam Pattern Analysis & Mock Tests',
          'Common Error Analysis & Correction Drills',
          'Exam-Week 72-Hour Retention Revision Plan',
        ],
      },
    ],
    features: [
      'Complete NCERT coverage for Classes 8, 9 and 10',
      'AI gap assessment after every chapter, not just at the end',
      'Board exam simulation with CBSE-patterned full-length mock tests',
      'Subject-wise retention dashboards for Maths, Science, SST and English',
      'Spaced repetition schedules that adapt daily based on quiz performance',
      'Weekly parent reports showing chapter-wise retention scores',
      'Live doubt resolution sessions with subject experts',
      'Multilingual support in Hindi, Tamil, Telugu, Kannada and English',
    ],
    outcomes: [
      {
        value: '91%',
        label: 'Grade Improvement Rate',
        desc: 'Nine out of ten students on the CBSE Plan improve their end-term scores within the first semester.',
      },
      {
        value: '3.2x',
        label: 'Better Retention vs Self-Study',
        desc: 'AI-scheduled spaced revision delivers over 3x the retention compared to traditional re-reading notes the night before.',
      },
      {
        value: '27 days',
        label: 'Average Time to First Visible Improvement',
        desc: 'Most students and parents notice a measurable improvement in quiz scores and chapter recall within the first month.',
      },
    ],
    testimonials: [
      {
        name: 'Priya Krishnamurthy',
        role: 'Class 10 student, Bengaluru',
        content:
          'I used to forget everything within a week of studying a chapter. After two months on the CBSE Plan, I can still recall Quadratic Equations I studied in October. My board mock score went from 61 to 86, and my teacher could not believe it.',
        before: '61%',
        after: '86%',
        metric: 'Board Mock Score',
        improvement: '25%',
      },
      {
        name: 'Ramesh Iyer',
        role: 'Parent of Class 10 student, Chennai',
        content:
          'The parent dashboard shows me my son\'s retention score for every chapter, not just whether he opened the app. We caught a weak spot in Chemical Reactions three months before boards. He\'s now consistently above 85 in Science.',
        before: '58%',
        after: '85%',
        metric: 'Science Score',
        improvement: '27%',
      },
    ],
    faqs: [
      {
        q: 'Does the CBSE Plan cover the full NCERT syllabus for Classes 8, 9, and 10?',
        a: 'Yes. The CBSE Plan includes complete chapter-by-chapter coverage aligned to the latest NCERT textbooks for Classes 8, 9, and 10. Every topic, from polynomials to life processes to democracy, is mapped into the AI spaced repetition system.',
      },
      {
        q: 'How does the AI know which chapters my child needs to revise first?',
        a: 'After each chapter, your child takes a short diagnostic quiz. The AI analyses the results to identify exact concept gaps and schedules targeted revision at the optimal time before those concepts are forgotten, based on the Ebbinghaus forgetting curve.',
      },
      {
        q: 'My child is in Class 9, is it too early to join the CBSE Plan?',
        a: 'Class 9 is actually the perfect time to start. Students who build strong retention habits in Class 9 arrive at Class 10 boards with a solid foundation, which means less panic and more confidence. Our data shows Class 9 joiners perform 18% better in Class 10 boards than students who join in Class 10 itself.',
      },
      {
        q: 'Are the mock tests similar to the actual CBSE board exam format?',
        a: 'Yes. Our mock tests are designed to match the CBSE board exam pattern precisely, section structure, mark distribution, question types, and time limits. Students also get detailed error analysis after each mock so they know exactly where to focus.',
      },
    ],
  },

  {
    slug: 'math-genius',
    name: 'Math Genius Maker',
    tagline: 'From Struggling to Scoring 90+ in Maths',
    price: '₹999',
    classes: 'Classes 8-12',
    description:
      'Math Genius Maker starts with a comprehensive diagnostic that pinpoints exactly where each student\'s understanding breaks down, from fractions in Class 8 all the way to differentiation in Class 12. The AI then builds a personalised learning path that rebuilds foundations first and progressively advances to higher-order problem solving, ensuring no concept gap is left to widen.',
    accentBg: '#FCEEF1',
    heroStats: [
      { value: '3,210+', label: 'Students enrolled' },
      { value: '88%', label: 'Score improvement' },
      { value: '6 weeks', label: 'To see real change' },
      { value: '4.7/5', label: 'Student rating' },
    ],
    forWhom: [
      {
        title: 'Students Scoring Below 60 in Maths',
        desc: 'If your child dreads Maths and consistently scores under 60, this program identifies the exact chapter where their understanding broke down and rebuilds from there, no more blind re-reading.',
      },
      {
        title: 'Students Aiming for 90+ in Board Exams',
        desc: 'Already decent at Maths but stuck at 75-80? The Genius Maker closes the gap to 90+ through targeted accuracy drills, speed practice, and board-specific question pattern training.',
      },
      {
        title: 'Class 11 & 12 Students Tackling Advanced Topics',
        desc: 'Calculus, vectors, and complex numbers require a rock-solid foundation. This plan connects Class 11 and 12 advanced topics directly back to the base concepts students need to master first.',
      },
    ],
    curriculum: [
      {
        title: 'Number Systems & Algebra',
        topics: [
          'Real Numbers & Irrational Numbers',
          'Polynomials: Zeroes, Factors, Division Algorithm',
          'Linear Equations: Graphical & Algebraic Methods',
          'Quadratic Equations: Discriminant & Nature of Roots',
          'Arithmetic & Geometric Progressions',
          'Complex Numbers & Binomial Theorem (Class 11-12)',
        ],
      },
      {
        title: 'Geometry & Mensuration',
        topics: [
          'Triangles: Congruence, Similarity, Pythagoras',
          'Circles: Tangents, Chords, Angles in Semicircle',
          'Coordinate Geometry: Distance, Section Formula, Area',
          'Surface Areas & Volumes: Cones, Cylinders, Spheres',
          'Constructions & Proofs',
        ],
      },
      {
        title: 'Trigonometry',
        topics: [
          'Trigonometric Ratios & Standard Angles',
          'Complementary Angles & Applications',
          'Heights & Distances: Real-World Problems',
          'Inverse Trigonometric Functions (Class 12)',
          'Trigonometric Identities & Proofs',
        ],
      },
      {
        title: 'Statistics & Probability',
        topics: [
          'Mean, Median & Mode for Grouped Data',
          'Cumulative Frequency: Ogive Curves',
          'Probability: Classical & Empirical Approach',
          'Conditional Probability & Bayes Theorem (Class 12)',
        ],
      },
      {
        title: 'Advanced Calculus (Class 11-12)',
        topics: [
          'Limits & Continuity',
          'Differentiation: Rules, Chain Rule, Implicit',
          'Applications of Derivatives: Maxima, Minima, Tangents',
          'Integration: Definite & Indefinite Integrals',
          'Differential Equations: Formation & Solutions',
        ],
      },
    ],
    features: [
      'Comprehensive 60-minute diagnostic test to map every concept gap',
      'Personalised learning path rebuilt from the exact breakdown point',
      'Daily problem-solving practice with adaptive difficulty scaling',
      'Speed and accuracy drills for CBSE and competitive exam patterns',
      'Step-by-step solution walkthroughs with AI error analysis',
      'Chapter-wise mastery checkpoints before advancing',
      'Foundation-to-advanced progression for Classes 8 through 12',
      'Formula revision sheets and quick-reference cards per chapter',
    ],
    outcomes: [
      {
        value: '88%',
        label: 'Students Improve Maths Scores',
        desc: 'Over 88% of enrolled students see measurable score improvement within their first two school tests after joining.',
      },
      {
        value: '24 marks',
        label: 'Average Score Increase',
        desc: 'Students on the Math Genius Maker gain an average of 24 marks in their next Maths exam, across Classes 8 to 12.',
      },
      {
        value: '5x',
        label: 'Faster Concept Mastery',
        desc: 'AI-targeted practice on weak concepts closes knowledge gaps 5x faster than generic textbook re-reading.',
      },
    ],
    testimonials: [
      {
        name: 'Arjun Nair',
        role: 'Class 10 student, Kochi',
        content:
          'Maths was my nightmare subject. I failed my Class 9 annual exam and was terrified for boards. The diagnostic showed my problem was fractions from Class 7, not Class 10 at all. After fixing the foundation, everything else clicked. I scored 78 in my Class 10 pre-boards and 84 in the actual boards.',
        before: '38%',
        after: '84%',
        metric: 'Maths Score',
        improvement: '46%',
      },
      {
        name: 'Sneha Patel',
        role: 'Class 12 student, Ahmedabad',
        content:
          'I was stuck at 72 in Maths for two years despite coaching. The AI found that my trigonometry identities were shaky, which was affecting my calculus. Three months of targeted practice and I got 91 in my Class 12 boards, enough for engineering at my first choice college.',
        before: '72%',
        after: '91%',
        metric: 'Class 12 Maths',
        improvement: '19%',
      },
    ],
    faqs: [
      {
        q: 'Does the Math Genius Maker work for students who are very far behind in Maths?',
        a: 'Absolutely. In fact, that is exactly who it is designed for. The diagnostic test identifies the precise chapter or concept where understanding broke down, which is often much earlier than the student\'s current class. The AI rebuilds from that point so the student has a solid foundation before tackling current-year content.',
      },
      {
        q: 'Does this program cover both CBSE board Maths and competitive exam Maths (JEE, NEET)?',
        a: 'The program is primarily aligned to CBSE board Maths for Classes 8 through 12. The advanced modules for Class 11 and 12 cover topics that overlap significantly with JEE Foundation, including calculus, vectors, and complex numbers, making it useful preparation for competitive exams as well.',
      },
      {
        q: 'How much time does a student need to spend per day on this program?',
        a: 'We recommend 30 to 45 minutes per day for consistent progress. The AI study plan adapts to the student\'s available time. Students with less time still make progress, just at a slightly slower pace. Consistency matters more than long sessions.',
      },
      {
        q: 'My child is already getting 75 in Maths. Can this program help reach 90+?',
        a: 'Yes. Students in the 70-80 range are usually missing specific accuracy and speed skills, or have gaps in 2-3 chapters that pull their overall score down. The diagnostic pinpoints these precisely, and targeted practice on those areas typically moves students from 75 to 90+ within a semester.',
      },
    ],
  },

  {
    slug: 'english-mastery',
    name: 'English Mastery',
    tagline: 'Build Confidence in English, Grammar to Writing',
    price: '₹999',
    classes: 'All Classes (8-12)',
    description:
      'English Mastery builds a systematic, structured path through every skill Indian students need, from eliminating common grammar errors to writing fluent essays, letters, and comprehension answers that score full marks. The program uses spaced repetition for vocabulary and grammar rules, and gives detailed AI feedback on each writing submission to build genuine fluency rather than rote correctness.',
    accentBg: '#E7F6FB',
    heroStats: [
      { value: '2,940+', label: 'Students enrolled' },
      { value: '85%', label: 'Improvement in writing scores' },
      { value: '8 weeks', label: 'To confident writing' },
      { value: '4.6/5', label: 'Student rating' },
    ],
    forWhom: [
      {
        title: 'Students Who Struggle with Grammar & Tenses',
        desc: 'If tense errors, preposition mistakes, or subject-verb agreement issues are costing marks in every paper, this plan gives structured grammar practice with instant AI correction and explanation.',
      },
      {
        title: 'Students Who Find Writing Tasks Difficult',
        desc: 'Letters, essays, notices, and story writing require a specific structure. English Mastery teaches each writing format step by step with AI feedback on every attempt, not just a model answer to copy.',
      },
      {
        title: 'Students Preparing for Literature-Based Board Questions',
        desc: 'Board exams test comprehension and analytical writing about NCERT literature. This plan builds the skills to answer extract-based questions, character analysis, and theme questions for full marks.',
      },
    ],
    curriculum: [
      {
        title: 'Grammar Foundations',
        topics: [
          'Parts of Speech: Nouns, Pronouns, Verbs, Adjectives',
          'Tenses: All 12 Tenses with Practice Patterns',
          'Voice: Active and Passive Transformations',
          'Reported Speech: Commands, Statements, Questions',
          'Subject-Verb Agreement & Common Error Patterns',
        ],
      },
      {
        title: 'Writing Skills',
        topics: [
          'Formal & Informal Letter Writing Formats',
          'Notice, Invitation & Message Writing',
          'Essay & Paragraph Writing: Argumentative & Descriptive',
          'Story Writing: Plot Structure & Narrative Techniques',
        ],
      },
      {
        title: 'Reading Comprehension',
        topics: [
          'Identifying Main Idea, Supporting Details & Inference',
          'Factual & Inferential Question Strategies',
          'Vocabulary in Context: Synonyms & Antonyms',
          'Note-Making & Summary Writing from Long Passages',
          'Unseen Passage Practice with Time Management',
        ],
      },
      {
        title: 'Literature & Poetry',
        topics: [
          'NCERT First Flight & Footprints Without Feet: Class 10',
          'Hornbill & Snapshots: Class 11 Literature',
          'Flamingo & Vistas: Class 12 Literature',
          'Poetry Analysis: Figures of Speech, Tone & Theme',
        ],
      },
      {
        title: 'Communication Skills',
        topics: [
          'Spoken English Confidence: Common Scenarios',
          'Pronunciation & Accent Reduction Patterns',
          'Debate & Extempore Speaking Structure',
          'Email & Formal Communication Writing',
        ],
      },
    ],
    features: [
      'Complete grammar syllabus from Classes 8 to 12 with adaptive drills',
      'AI feedback on every writing submission, not just model answers',
      'Spaced repetition vocabulary builder: 500+ high-frequency words',
      'Board-pattern writing practice for all formats (letters, essays, notices)',
      'Literature chapter-wise comprehension questions with answer guidance',
      'Reading comprehension timed practice for unseen passages',
      'Weekly writing challenges with detailed AI rubric scoring',
      'Speaking confidence module with self-recording and playback review',
    ],
    outcomes: [
      {
        value: '85%',
        label: 'Writing Score Improvement',
        desc: 'Eight in ten students see their English writing scores improve by at least one full grade within two months of consistent practice.',
      },
      {
        value: '94%',
        label: 'Grammar Accuracy After 6 Weeks',
        desc: 'Students practising with the adaptive grammar engine reach above 90% accuracy on common error patterns within six weeks.',
      },
      {
        value: '2 grades',
        label: 'Average Jump in Reading Comprehension',
        desc: 'Students who were scoring C and D in reading comprehension consistently improve to B and A after the structured approach in this program.',
      },
    ],
    testimonials: [
      {
        name: 'Kavitha Suresh',
        role: 'Class 9 student, Hyderabad',
        content:
          'English was always my weakest subject, I used to confuse tenses and my essays were just random sentences strung together. After two months, I got 92 in my school grammar test and my class teacher commented that my writing has "a clear structure" for the first time. That meant the world to me.',
        before: '55%',
        after: '88%',
        metric: 'English Score',
        improvement: '33%',
      },
      {
        name: 'Ashwin Reddy',
        role: 'Class 12 student, Pune',
        content:
          'Board exam writing sections were terrifying, I never knew the right format for letters or essays. English Mastery taught me a structured approach for every writing type. I went from dreading Section B to actually looking forward to it. Scored 34/40 in the board writing section.',
        before: '62%',
        after: '85%',
        metric: 'English Board Score',
        improvement: '23%',
      },
    ],
    faqs: [
      {
        q: 'Is English Mastery useful for students in both Class 8 and Class 12?',
        a: 'Yes. The program is structured in progressive levels, from foundational grammar for Classes 8 and 9, through board exam writing and literature analysis for Classes 10, 11, and 12. The AI places each student at the right entry level based on an initial assessment, so a Class 12 student will not waste time on basics they already know.',
      },
      {
        q: 'How does the AI give feedback on writing? Is it accurate?',
        a: 'Students type or upload their writing submissions into the platform. The AI analyses the submission against a rubric covering grammar accuracy, structure, vocabulary range, and relevance to the prompt. It highlights specific errors with explanations and gives an overall band score similar to what a teacher would give. It is not a replacement for a human teacher but it is available 24/7 and gives feedback in under 30 seconds.',
      },
      {
        q: 'Does this program cover NCERT literature for Class 10 and Class 12 boards?',
        a: 'Yes. The Literature & Poetry module covers the key chapters from First Flight, Footprints Without Feet, Hornbill, Snapshots, Flamingo, and Vistas, all aligned to the latest CBSE syllabus. We provide chapter-wise comprehension questions, extract-based questions, and character or theme analysis guidance.',
      },
      {
        q: 'My child is already decent in grammar but weak in writing. Can they join for just the writing sections?',
        a: 'The program is designed to work as a whole, but students who are strong in grammar naturally spend less time on that module and the AI will advance them faster through foundation sections. The Writing Skills and Reading Comprehension modules are substantial on their own and will give even grammar-confident students real improvement in their scored writing tasks.',
      },
    ],
  },

  {
    slug: 'sat-prep',
    name: 'SAT Prep Pass',
    tagline: 'Target 1400+ SAT Score with AI-Guided Prep',
    price: '₹999',
    classes: 'Classes 10-12',
    description:
      'SAT Prep Pass gives Indian students a systematic, AI-guided path to the 1400+ score range that top US universities expect, covering the digital SAT format in full, from College Board-aligned Maths and Evidence-Based Reading to the strategic time management techniques that separate strong scorers from great ones. Every practice session is analysed to update a personalised weak-area target list so no study hour is wasted.',
    accentBg: '#F0EDFC',
    heroStats: [
      { value: '1,620+', label: 'Students enrolled' },
      { value: '1400+', label: 'Target score we train for' },
      { value: '12 weeks', label: 'To full exam readiness' },
      { value: '4.7/5', label: 'Student rating' },
    ],
    forWhom: [
      {
        title: 'Class 12 Students Applying to US Colleges This Cycle',
        desc: 'If your college applications are due within the next 6 to 12 months, this plan builds your SAT score quickly and systematically with full digital SAT mock tests and score projections.',
      },
      {
        title: 'Class 11 Students Planning Ahead',
        desc: 'Starting SAT prep in Class 11 gives you two full attempts before applications are due. This program builds a thorough foundation while your school workload is still manageable.',
      },
      {
        title: 'Students Who Took the SAT and Want to Improve Their Score',
        desc: 'Already scored between 1100 and 1350 and need to push higher? The diagnostic pinpoints exactly which question types are costing you points so your retake prep is surgical, not generic.',
      },
    ],
    curriculum: [
      {
        title: 'SAT Mathematics',
        topics: [
          'Heart of Algebra: Linear Equations & Inequalities',
          'Problem Solving & Data Analysis: Ratios, Percentages, Statistics',
          'Advanced Math: Quadratics, Polynomials, Functions',
          'Geometry & Trigonometry: Circles, Angles, Area, Coordinate Geometry',
          'Calculator & No-Calculator Section Strategies',
        ],
      },
      {
        title: 'Evidence-Based Reading',
        topics: [
          'Information & Ideas: Main Purpose, Central Ideas, Details',
          'Rhetoric: Word Meaning in Context, Author\'s Method',
          'Synthesis: Cross-Text Connections & Evidence Support',
          'Vocabulary in Context: High-Frequency SAT Words',
        ],
      },
      {
        title: 'Writing & Language',
        topics: [
          'Standard English Conventions: Grammar, Punctuation',
          'Expression of Ideas: Transitions, Sentence Combining, Relevance',
          'Rhetorical Revision: Concision, Precision, Supporting Evidence',
          'Passage-Editing Under Timed Conditions',
        ],
      },
      {
        title: 'Test Strategy & Timing',
        topics: [
          'Digital SAT Interface & Adaptive Module Strategy',
          'Section-by-Section Time Management Techniques',
          'Process of Elimination & Educated Guessing',
          'Full-Length Digital SAT Mock Tests with Score Analysis',
        ],
      },
    ],
    features: [
      'Complete Digital SAT coverage: Maths, Reading, Writing & Language',
      '10 full-length adaptive digital SAT mock tests with College Board-style scoring',
      'AI weak-area targeting after every practice session',
      'Section-by-section time management drills and pacing strategies',
      '500+ curated SAT practice questions organised by difficulty level',
      'Score progression tracker and projected improvement timeline',
      'Essay and Reading evidence-chain practice for extended response questions',
      'College application support guide: score targets by university and major',
    ],
    outcomes: [
      {
        value: '187 pts',
        label: 'Average Score Improvement',
        desc: 'Students who complete the full 12-week SAT Prep Pass program improve their SAT score by an average of 187 points from their diagnostic baseline.',
      },
      {
        value: '74%',
        label: 'Students Reach 1350+',
        desc: 'Nearly three in four students who complete all mock tests and targeted practice modules achieve a 1350 or higher on their next official SAT attempt.',
      },
      {
        value: '12 weeks',
        label: 'Full Exam Readiness',
        desc: 'A student starting from 1150 can reach exam-ready confidence in the 1400+ range within three months of consistent daily practice sessions.',
      },
    ],
    testimonials: [
      {
        name: 'Rohan Sharma',
        role: 'Class 12 student, Delhi',
        content:
          'I scored 1190 on my first attempt and was devastated, because my target college wanted 1400+. The SAT Prep Pass diagnosed that I was losing most points in Reading passage evidence questions. Six weeks of targeted practice later, I retook the SAT and scored 1410. Completely changed my college options.',
        before: '1190',
        after: '1410',
        metric: 'SAT Score',
        improvement: '+220 pts',
      },
      {
        name: 'Ananya Menon',
        role: 'Class 11 student, Bengaluru',
        content:
          'I started SAT prep in Class 11 with the Prep Pass and my first real score was 1380, which I wasn\'t expecting at all. The mock tests were very close to the actual digital SAT. The time management strategies alone saved me at least 50 points. I used to run out of time in Reading.',
        before: '1140',
        after: '1380',
        metric: 'SAT Score',
        improvement: '+240 pts',
      },
    ],
    faqs: [
      {
        q: 'Is this prep for the new digital SAT or the old paper format?',
        a: 'This program is fully aligned to the new digital SAT format introduced by College Board in 2024. All practice questions, mock tests, and strategy sessions are built around the adaptive digital format, including the two-stage adaptive module structure where the second module adjusts difficulty based on your first module performance.',
      },
      {
        q: 'My child has never studied for the SAT before. Is this program suitable for complete beginners?',
        a: 'Yes. The program begins with a full diagnostic test that establishes a baseline score and identifies the weakest areas across all sections. Complete beginners typically start with the foundational modules before moving into timed practice. Most students with a baseline around 1050 to 1200 can reach the 1350 to 1450 range within 10 to 14 weeks of consistent practice.',
      },
      {
        q: 'How is the SAT Math different from CBSE Maths, and will this program bridge the gap?',
        a: 'SAT Math focuses heavily on applied reasoning and data analysis rather than pure computation, which surprises many CBSE students who are strong in traditional Maths. The program specifically covers SAT-style problem types that differ from CBSE patterns, including multi-step data interpretation, scatterplot analysis, and real-world function modelling. Students with a strong CBSE Maths background typically find the SAT Math section easier to master quickly.',
      },
      {
        q: 'How many mock tests are included, and are they similar to the actual digital SAT?',
        a: 'The SAT Prep Pass includes 10 full-length adaptive digital mock tests. These are designed to replicate the College Board digital SAT experience: same section timing, same adaptive difficulty structure, and College Board-aligned scoring. Each mock test is followed by a detailed performance report showing section scores, question-type accuracy, and an updated target practice list.',
      },
    ],
  },
];

export function getProgramBySlug(slug: string): ProgramData | undefined {
  return programsData.find((p) => p.slug === slug);
}
