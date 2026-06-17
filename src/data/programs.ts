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
    tagline: 'The gap closes before the next problem starts.',
    price: '₹999',
    classes: 'Classes 5-12',
    description:
      'Most students are not bad at Maths. They are working from the wrong starting point. Math Genius Maker finds exactly where understanding broke down, then rebuilds from there, at whatever grade level that turns out to be. No judgment, no skipping steps. The gap closes before the next problem starts.',
    accentBg: '#FCEEF1',
    heroStats: [
      { value: '₹999', label: 'per month' },
      { value: '14 days', label: 'free trial' },
      { value: 'Grade 5-12', label: 'all levels' },
      { value: 'JEE/NEET', label: 'relevant' },
    ],
    forWhom: [
      {
        title: 'Students Several Grades Behind',
        desc: 'If a Class 9 student is missing fractions from Class 6, we start at Class 6. No embarrassment, no shortcuts. The AI sets the correct starting point and moves forward only when mastery is confirmed.',
      },
      {
        title: 'Grade 5-12, CBSE & State Board',
        desc: 'Built for every level from foundational numeracy to advanced calculus. Whether your child is in Class 5 struggling with decimals or Class 12 tackling integration, Math Genius Maker adapts.',
      },
      {
        title: 'JEE / NEET Aspirants',
        desc: 'The five core domains map directly to JEE Mains and NEET Maths syllabi. Students who close foundation gaps through this program enter coaching with a measurable advantage.',
      },
      {
        title: 'Competitive Exam Students',
        desc: 'Olympiads, NTSE, and scholarship exams test conceptual depth, not rote recall. The adaptive sequencing builds exactly the kind of layered understanding that competitive Maths demands.',
      },
    ],
    curriculum: [
      {
        title: 'Number & Operations',
        topics: [
          'Place value, factors, multiples and divisibility rules',
          'Fractions, decimals, percentages and ratio',
          'Integers and operations on the number line',
          'Exponents, roots and scientific notation',
          'HCF, LCM and number theory fundamentals',
          'Rational and irrational numbers',
          'Real number system and ordering',
          'Number patterns and sequences',
        ],
      },
      {
        title: 'Ratios, Proportional Relationships & Functions',
        topics: [
          'Unit rates, proportions and cross-multiplication',
          'Percentage increase, decrease and compound interest',
          'Direct and inverse variation',
          'Linear functions: slope, intercept and graphing',
          'Function notation, domain and range',
          'Arithmetic and geometric progressions',
          'Quadratic functions and parabolas',
          'Exponential growth and decay',
        ],
      },
      {
        title: 'Expressions, Equations & Algebra',
        topics: [
          'Simplifying and evaluating algebraic expressions',
          'Linear equations in one and two variables',
          'Systems of equations: substitution and elimination',
          'Quadratic equations: factoring, formula, discriminant',
          'Polynomials: operations, zeroes and factor theorem',
          'Inequalities and their graphical representation',
          'Matrices and determinants (Class 12)',
          'Complex numbers and binomial theorem',
        ],
      },
      {
        title: 'Geometry',
        topics: [
          'Lines, angles, triangles and congruence',
          'Similarity, Pythagoras and trigonometric ratios',
          'Circles: chords, tangents and angle theorems',
          'Coordinate geometry: distance, midpoint, section formula',
          'Area and perimeter of polygons',
          'Surface area and volume: 3D solids',
          'Vectors and three-dimensional geometry (Class 12)',
          'Inverse trigonometry and applications',
        ],
      },
      {
        title: 'Statistics & Probability',
        topics: [
          'Data collection, representation and interpretation',
          'Mean, median, mode for ungrouped and grouped data',
          'Cumulative frequency and ogive curves',
          'Measures of dispersion: range, variance, standard deviation',
          'Classical and empirical probability',
          'Addition and multiplication rules of probability',
          'Conditional probability and Bayes theorem',
          'Probability distributions and expected value',
        ],
      },
    ],
    features: [
      'GAP Assessment: finds the exact concept where understanding broke down, regardless of grade level',
      'AI Tutor: step-by-step explanations that adapt to how the student got the problem wrong',
      'Spaced Retrieval: revisits concepts at scientifically timed intervals so they actually stick',
      'Study Buddy: a peer-style AI companion for daily practice, motivation and doubt clearing',
      'Mind Coach: builds study habits, manages exam anxiety and keeps students on track',
      'Gamified challenges: streaks, level-ups and rewards that make daily practice a habit',
      '14-day free trial, no card required',
      '20% multi-course discount when paired with any other Blast Learning plan',
    ],
    outcomes: [
      {
        value: '3 grades',
        label: 'Average Gap Closed',
        desc: 'Students who enter the program behind grade level close an average of 3 grade levels of concept gaps within one academic term.',
      },
      {
        value: '91%',
        label: 'Mastery Rate Across Domains',
        desc: 'After completing the adaptive sequence for a domain, 91% of students pass the mastery checkpoint on the first attempt.',
      },
      {
        value: '5x',
        label: 'Faster Gap Closure',
        desc: 'AI-targeted retrieval practice closes concept gaps 5 times faster than re-reading textbooks or attending generic tuition.',
      },
    ],
    testimonials: [
      {
        name: 'Arjun Nair',
        role: 'Class 10 student, Kochi',
        content:
          'Maths was my nightmare subject. I failed Class 9 and was terrified for boards. The GAP Assessment showed the problem was fractions from Class 6, not Class 10 at all. After fixing the foundation, everything clicked. I scored 84 in my actual boards.',
        before: '38%',
        after: '84%',
        metric: 'Maths Score',
        improvement: '46%',
      },
      {
        name: 'Priya Sharma',
        role: 'Class 8 student, Pune',
        content:
          'My daughter was three years behind in Maths. The program started her at the right level without making her feel bad about it. Within four months her confidence completely changed. She actually asks to do her Maths sessions now.',
        before: '41%',
        after: '79%',
        metric: 'Term Exam Score',
        improvement: '38%',
      },
    ],
    faqs: [
      {
        q: 'What is the GAP Assessment and how does it work?',
        a: 'The GAP Assessment is a 20-30 minute adaptive test that maps exactly which concepts a student has mastered and which are missing. It goes as far back as needed, even to Class 5 basics, to find the real starting point. The student then begins the program at that point, not at their current grade level.',
      },
      {
        q: 'My child is in Class 10 but seems to be missing Class 7 concepts. Will the program really go that far back?',
        a: 'Yes, without judgment or hesitation. The program is designed for exactly this situation. The AI sets the starting point wherever mastery actually begins, and the content is presented in a way that feels age-appropriate regardless of which grade level the concepts come from.',
      },
      {
        q: 'Is this program useful for JEE or NEET preparation?',
        a: 'Yes. The five domains cover the complete Maths foundation required for JEE Mains and NEET. Students who use Math Genius Maker to close their gaps typically find coaching classes significantly easier to follow because they are no longer missing prerequisite knowledge.',
      },
      {
        q: 'How is the AI Tutor different from watching a YouTube video?',
        a: 'The AI Tutor responds to how the student specifically got a problem wrong. If a student makes a sign error in algebra, the tutor addresses sign rules. If they confuse two trigonometry identities, it drills exactly those two. A YouTube video gives the same explanation regardless of what the student actually misunderstood.',
      },
      {
        q: 'What does the 14-day free trial include?',
        a: 'The full program, including the GAP Assessment, AI Tutor, spaced retrieval sessions and Study Buddy. No credit card is required to start. At the end of 14 days you decide whether to continue at Rs 999 per month.',
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
