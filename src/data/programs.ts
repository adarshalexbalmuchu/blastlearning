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
    name: 'CBSE Full Syllabus',
    tagline: 'The syllabus your coaching class covers. The retention it does not check for.',
    price: '₹1,299',
    classes: 'Classes 6-12',
    description:
      'A coaching class can teach History, Geography, and Economics on schedule and still leave a student unable to recall most of it by the next test. CBSE Full Syllabus runs the full curriculum, Class 6 through 12, on a study system built around what actually makes a concept stay learned.',
    accentBg: '#FDF3E7',
    heroStats: [
      { value: '₹1,299', label: 'per month' },
      { value: '14 days', label: 'free trial' },
      { value: 'Class 6-12', label: 'all grades' },
      { value: '7 subjects', label: 'covered' },
    ],
    forWhom: [
      {
        title: 'Class 6 through Class 12, All Core Subjects',
        desc: 'History, Political Science, Geography, Economics, Chemistry, Physics, and Biology, taught through AI-driven, self-paced modules rather than a fixed classroom timetable. Grade 10 is the primary focus for this year, given board exam timing, though the course runs the full Class 6 to 12 range.',
      },
      {
        title: 'Students Whose Coaching Moves at the Syllabus Pace',
        desc: 'A coaching class can stay on schedule while a student falls behind on retention. CBSE Full Syllabus is built for the student whose notes are complete but whose recall is not, because those are different problems with different solutions.',
      },
      {
        title: 'Students Preparing for Class 10 Board Exams',
        desc: 'Grade 10 is the primary deployment focus. The course covers every subject at the depth and format the CBSE board examiner expects, with spaced retrieval scheduled around the board exam calendar, not the school calendar.',
      },
    ],
    curriculum: [
      {
        title: 'History',
        topics: [
          'The Rise of Nationalism in Europe',
          'Nationalism in India: Non-Cooperation and Civil Disobedience',
          'The Making of a Global World',
          'The Age of Industrialisation',
          'Print Culture and the Modern World',
          'Spaced retrieval sessions across all 5 weeks, 6 sessions total',
        ],
      },
      {
        title: 'Political Science',
        topics: [
          'Power Sharing and Federalism',
          'Democracy and Diversity',
          'Gender, Religion, and Caste',
          'Popular Struggles and Movements',
          'Political Parties and Outcomes of Democracy',
          'Spaced retrieval sessions across all 5 weeks, 6 sessions total',
        ],
      },
      {
        title: 'Geography',
        topics: [
          'Resources and Development',
          'Forest and Wildlife Resources',
          'Water Resources',
          'Agriculture: Types, Distribution, Technology',
          'Minerals and Energy Resources',
          'Manufacturing Industries',
          'Lifelines of the National Economy',
          'Spaced retrieval sessions across all 7 weeks',
        ],
      },
      {
        title: 'Economics',
        topics: [
          'Development: What It Is and How It Is Measured',
          'Sectors of the Indian Economy',
          'Money and Credit',
          'Globalisation and the Indian Economy',
          'Spaced retrieval sessions across all 4 weeks',
        ],
      },
      {
        title: 'Physics',
        topics: [
          'Light: Reflection and Refraction',
          'Human Eye and the Colourful World',
          'Electricity: Current, Resistance, Circuits',
          'Magnetic Effects of Electric Current',
          'Spaced retrieval sessions across all 4 weeks',
        ],
      },
      {
        title: 'Chemistry',
        topics: [
          'Chemical Reactions and Equations',
          'Acids, Bases and Salts',
          'Metals and Non-metals',
          'Carbon and Its Compounds',
          'Periodic Classification of Elements',
          'Spaced retrieval sessions across all 5 weeks',
        ],
      },
      {
        title: 'Biology',
        topics: [
          'Life Processes: Nutrition, Respiration, Transport, Excretion',
          'Control and Coordination',
          'How Do Organisms Reproduce?',
          'Heredity and Evolution',
          'Our Environment and Natural Resource Management',
          'Spaced retrieval sessions across all 5 weeks',
        ],
      },
    ],
    features: [
      'GAP Assessment on enrolment across all seven subjects',
      'AI Tutor: personalised study plans, 24/7 doubt resolution, adaptive quizzes, progress dashboards',
      'Study Buddy pairing for joint practice and peer explanation across all seven subjects',
      'Mind Coach skill-building, with particular relevance to sustained focus across a full academic year',
      'Live intervention when a student\'s progress signals they need it, not on a fixed weekly schedule',
      '14-day free trial with full access, no credit card required',
      '20% discount when enrolled in two or more courses',
    ],
    outcomes: [
      {
        value: '7 subjects',
        label: 'Each Tracked Separately',
        desc: 'The parent dashboard shows progress across all seven subjects individually, so a parent can see that Geography is moving well while Chemistry needs attention, rather than a single blended score.',
      },
      {
        value: '3.2x',
        label: 'Better Retention vs Re-Reading',
        desc: 'Spaced retrieval scheduled at the moment recall starts to fade delivers over three times the durable retention compared to re-reading and highlighting.',
      },
      {
        value: 'Day 1',
        label: 'GAP Found, Plan Built',
        desc: 'The GAP Assessment identifies exactly where a student\'s understanding of each subject diverges from what the current chapter assumes, and the AI builds the path from that point on day one.',
      },
    ],
    testimonials: [
      {
        name: 'Priya Krishnamurthy',
        role: 'Class 10 student · Bengaluru',
        content:
          'I used to forget everything within a week of studying a chapter. After two months on the CBSE Full Syllabus, I can still recall Chemical Reactions I studied in October. My board mock score went from 61 to 86, and my teacher could not believe it.',
        before: '61%',
        after: '86%',
        metric: 'Board Mock Score',
        improvement: '25%',
      },
      {
        name: 'Ramesh Iyer',
        role: 'Parent · Class 10 student, Chennai',
        content:
          'The parent dashboard shows my son\'s retention score for every chapter across every subject, not just whether he opened the app. We caught a weak spot in Geography three months before boards. He is now consistently above 85 in all subjects.',
        before: '58%',
        after: '85%',
        metric: 'Overall Score',
        improvement: '27%',
      },
    ],
    faqs: [
      {
        q: 'Which subjects does CBSE Full Syllabus cover?',
        a: 'The course covers all seven core subjects: History, Political Science, Geography, Economics, Physics, Chemistry, and Biology. Each subject has its own pacing — Geography runs across 7 weeks because its breadth requires it; Economics runs 4 weeks because its density compresses differently. The pacing reflects the subject, not an administrative convenience.',
      },
      {
        q: 'How does the course handle the difference between coaching pace and retention pace?',
        a: 'The AI Tutor separates the two. It tracks what a student has covered versus what they have actually retained, and schedules retrieval practice at the moment recall starts to fade — not on the coaching class calendar. A student can be on schedule with their school timetable and still behind on retention, and the GAP Assessment finds that gap on day one.',
      },
      {
        q: 'My child is in Class 9. Is it too early to start?',
        a: 'Class 9 is a strong entry point. Students who begin building retention habits in Class 9 arrive at Class 10 boards with a two-year spaced retrieval advantage. The course content scales to the enrolled class, so a Class 9 student works through Class 9 material at the depth the board exam will require.',
      },
      {
        q: 'What does the 14-day free trial include?',
        a: 'Full access to the GAP Assessment, AI Tutor sessions across all seven subjects, spaced retrieval scheduling, and the parent dashboard. No credit card is required to start. At the end of 14 days you decide whether to continue at Rs 1,299 per month.',
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
    name: 'English Mastery Pass',
    tagline: 'Comprehension that holds up under a question, not just a re-read.',
    price: '₹999',
    classes: 'CBSE / ICSE / SAT',
    description:
      'Most students can summarise a passage back to you. Far fewer can infer what it implies, defend a reading against a counterargument, or answer a question the passage never states outright. English Mastery Pass builds that second skill specifically, the one CBSE and ICSE board exams test and the one the SAT reading section is built around entirely.',
    accentBg: '#E7F6FB',
    heroStats: [
      { value: '₹999', label: 'per month' },
      { value: '14 days', label: 'free trial' },
      { value: 'CBSE / ICSE', label: 'board aligned' },
      { value: 'SAT', label: 'compatible' },
    ],
    forWhom: [
      {
        title: 'CBSE and ICSE Board Students',
        desc: 'Board comprehension sections now test inference and interpretation far more than they test summary. This program is built around that shift, so every passage and question type students practise maps directly to what board examiners actually award marks for.',
      },
      {
        title: 'Students on an International Pathway',
        desc: 'The analytical reading skill that lifts a CBSE or ICSE English score is exactly what the SAT reading section measures. A student preparing for one is, without extra work, preparing for the other.',
      },
      {
        title: 'Students Whose Summaries Are Accurate but Marks Are Not',
        desc: 'If a student can retell a passage perfectly but still loses marks on comprehension questions, the gap is inferential reading, not effort or understanding. That is the specific skill this program targets.',
      },
    ],
    curriculum: [
      {
        title: 'Inference & Implied Meaning',
        topics: [
          'What the passage states vs what it implies',
          'Reading between the lines: drawing supported conclusions',
          'Answering questions the passage never answers directly',
          'Identifying a writer\'s unstated assumption',
          'Distinguishing inference from speculation',
          'Defending a reading with textual evidence',
          'Multiple correct-looking answers: eliminating the wrong inference',
          'Timed inference practice on unseen passages',
        ],
      },
      {
        title: 'Vocabulary in Context',
        topics: [
          'Meaning from context without a dictionary',
          'Connotation vs denotation: how word choice shifts meaning',
          'High-frequency academic vocabulary for board and SAT',
          'Vocabulary questions as inference problems',
          'Prefixes, roots and suffixes for unfamiliar words',
          'Figurative language: metaphor, irony, understatement',
          'Tone words and their effect on meaning',
          'Spaced retrieval vocabulary sessions',
        ],
      },
      {
        title: 'Rhetorical Analysis',
        topics: [
          'Identifying a writer\'s purpose and intended audience',
          'How structure and organisation carry meaning',
          'Argument vs narration vs exposition: recognising the mode',
          'Evidence types: anecdote, data, analogy, authority',
          'Evaluating whether evidence actually supports a claim',
          'Counterargument recognition and authorial response',
          'Point of view and its effect on what gets said',
          'Board-style short-answer rhetorical questions',
        ],
      },
      {
        title: 'Comparative Reading',
        topics: [
          'Reading two passages on the same topic',
          'Identifying agreement, disagreement, and partial overlap',
          'SAT paired passage question types',
          'CBSE/ICSE multi-extract comprehension formats',
          'Synthesising two writers\' positions into a single answer',
          'When writers agree on facts but disagree on interpretation',
          'Using one passage to qualify or extend another',
          'Timed dual-passage practice',
        ],
      },
      {
        title: 'Exam Application',
        topics: [
          'CBSE comprehension paper: question type mapping',
          'ICSE comprehension paper: question type mapping',
          'SAT Reading section: question category breakdown',
          'Time allocation per passage and per question',
          'Annotation habits that speed up re-reading',
          'Common wrong-answer traps and how to spot them',
          'Building a second-read habit without wasting time',
          'Full-length timed comprehension mock practice',
        ],
      },
    ],
    features: [
      'GAP Assessment: identifies where reading defaults to summary instead of inference',
      'AI Tutor: adaptive practice passages with instant feedback on why each answer is right or wrong',
      'Spaced Retrieval: passages and question types resurface at intervals timed to prevent forgetting',
      'Study Buddy: joint reading discussion partner for practising why a reading is or is not justified',
      'Mind Coach: pacing and focus coaching for comprehension sections under timed exam conditions',
      'SAT-compatible content for students on an international admissions pathway',
      '14-day free trial, no credit card required',
      '20% discount when enrolled in two or more Blast Learning courses',
    ],
    outcomes: [
      {
        value: '2 levels',
        label: 'Comprehension Band Improvement',
        desc: 'Students who enter scoring at summary level consistently move to inference level within one term of structured practice, translating directly to higher board marks.',
      },
      {
        value: '89%',
        label: 'Board Comprehension Score Improvement',
        desc: 'Among students who complete the program, 89% show measurable improvement in their next school or board comprehension assessment.',
      },
      {
        value: '1 course',
        label: 'Prepares Two Exams',
        desc: 'The inference and rhetorical analysis skills built here apply directly to both board comprehension sections and the SAT reading test, no separate prep track needed.',
      },
    ],
    testimonials: [
      {
        name: 'Kavitha Suresh',
        role: 'Class 9 student · Hyderabad',
        content:
          'I used to read every passage twice and still lose marks on the inference questions. The program taught me what those questions are actually asking for. Within six weeks my comprehension scores were consistent for the first time.',
        before: '55%',
        after: '84%',
        metric: 'Comprehension Score',
        improvement: '29%',
      },
      {
        name: 'Rohan Kapoor',
        role: 'Class 11 student · Delhi',
        content:
          'I was preparing for SAT alongside boards and could not figure out why my reading scores were low when I felt I understood the passages. The distinction between what a passage states and what it implies changed how I approach every question now.',
        before: '520',
        after: '680',
        metric: 'SAT Reading',
        improvement: '+160',
      },
    ],
    faqs: [
      {
        q: 'What is the difference between summary-level reading and inference-level reading?',
        a: 'A student reading at summary level can accurately retell what a passage says. A student reading at inference level can answer questions about what the passage implies, what the writer assumes without stating, and what conclusion a specific piece of evidence supports. Board exams and the SAT both test the second skill, but most students practise only the first.',
      },
      {
        q: 'Is this program useful if my child is preparing for CBSE boards and not the SAT?',
        a: 'Yes. The primary alignment is to CBSE and ICSE board comprehension sections. The SAT compatibility is a benefit that arises from the method, not a separate track. Students not planning the SAT still follow the same program and see the same improvement in board scores.',
      },
      {
        q: 'My child already reads a lot. Why are their comprehension scores still average?',
        a: 'Reading for pleasure and reading analytically under exam conditions are different skills. A student who reads widely tends to be good at getting the gist of a passage but may still default to summary when a question asks for inference. The program specifically trains the switch from gist to analytical reading.',
      },
      {
        q: 'How does the AI Tutor give feedback on comprehension answers?',
        a: 'When a student selects or writes a comprehension answer, the AI identifies whether the answer is based on what the passage states or what it implies, and whether the inference is supported by the text. It does not just mark right or wrong; it explains the type of reasoning the question required and where the student\'s answer diverged from that.',
      },
      {
        q: 'What does the 14-day free trial include?',
        a: 'The full program, including the GAP Assessment, AI Tutor sessions, spaced retrieval practice, and Study Buddy access. No credit card is required to start. At the end of 14 days you decide whether to continue at Rs 999 per month.',
      },
    ],
  },

  {
    slug: 'sat-prep',
    name: 'SAT Prep Pass',
    tagline: 'The SAT rewards students who see it as a system, not a content test.',
    price: '₹999',
    classes: 'CBSE / ICSE / International',
    description:
      'A student can know the math and still lose marks to the Digital SAT\'s structure, because the test measures pattern recognition under a specific architecture as much as it measures verbal and quantitative knowledge. SAT Prep Pass teaches that architecture directly, using a diagnostic-first approach where practice tests measure standing rather than teach new content.',
    accentBg: '#F0EDFC',
    heroStats: [
      { value: '₹999', label: 'per month' },
      { value: '14 days', label: 'free trial' },
      { value: 'Digital SAT', label: 'fully aligned' },
      { value: '1400+', label: 'target range' },
    ],
    forWhom: [
      {
        title: 'Students Preparing for the Digital SAT',
        desc: 'Both verbal and quantitative sections, covered through a diagnostic-first method that locates exactly where a student\'s score is being held back before any content practice begins.',
      },
      {
        title: 'Students Whose Practice Test Scores Have Plateaued',
        desc: 'The ceiling on most SAT plateaus is architectural literacy, not subject knowledge the student is missing. If a student has drilled practice problems but the score is not moving, the gap is in how they read the test\'s structure, and that is what this course targets specifically.',
      },
      {
        title: 'International Pathway Families',
        desc: 'Students who need SAT preparation alongside board exam preparation, or instead of it. The inferential reading and pattern-recognition skills built here complement CBSE and ICSE preparation rather than competing with it.',
      },
    ],
    curriculum: [
      {
        title: 'Reading and Writing — Inference and Rhetoric',
        topics: [
          'Information and Ideas: main purpose, central claims, details',
          'Craft and Structure: word meaning in context, text structure',
          'Expression of Ideas: transitions, sentence precision, relevance',
          'Cross-text Connections: evidence support across paired passages',
          'Standard English Conventions: grammar and punctuation under time',
          'Vocabulary in context: high-frequency SAT words by question type',
          'Pattern recognition across recurring question architectures',
          'Timed section practice with adaptive difficulty progression',
        ],
      },
      {
        title: 'Mathematics — Pattern and Application',
        topics: [
          'Algebra: linear equations, inequalities, systems',
          'Advanced Math: quadratics, polynomials, functions, equivalent expressions',
          'Problem Solving and Data Analysis: ratios, percentages, statistics, probability',
          'Geometry and Trigonometry: circles, angles, area, coordinate geometry',
          'Calculator and no-calculator section strategies',
          'Multi-step data interpretation and real-world function modelling',
          'SAT-specific problem types that diverge from CBSE Maths patterns',
          'Full adaptive module practice: Module 1 and Module 2 difficulty calibration',
        ],
      },
      {
        title: 'Test Architecture and Strategy',
        topics: [
          'Digital SAT adaptive structure: how Module 2 difficulty is set',
          'Section-by-section time allocation and pacing checkpoints',
          'Process of elimination applied to each question type',
          'Pattern recognition drills: recurring wrong-answer constructions',
          'Full-length digital SAT mock tests used as measurement, not instruction',
          'Score analysis after each mock: section scores, question-type accuracy',
          'Pacing under the strict section clock without losing known patterns',
          'Pre-test routines and focus management for a timed exam environment',
        ],
      },
    ],
    features: [
      'GAP Assessment on enrolment: locates exactly which question types and patterns are holding the score back',
      'AI Tutor: adaptive practice calibrated to the edge of current capability, not a fixed question bank',
      'Spaced Retrieval: question-type patterns resurface at the interval where recall starts to soften',
      'Study Buddy: synchronised practice sets with a human partner for peer explanation under test conditions',
      'Mind Coach: focus and pacing judgment for a timed, sectioned, high-stakes exam format',
      'Diagnostic-first practice tests used as measurement instruments, not primary instruction vehicles',
      '14-day free trial, no credit card required',
      '20% discount when enrolled in two or more courses',
    ],
    outcomes: [
      {
        value: '187 pts',
        label: 'Average Score Improvement',
        desc: 'Students who complete the full SAT Prep Pass program improve their SAT score by an average of 187 points from their diagnostic baseline.',
      },
      {
        value: '74%',
        label: 'Students Reach 1350+',
        desc: 'Nearly three in four students who complete all mock tests and targeted practice modules achieve a 1350 or higher on their next official SAT attempt.',
      },
      {
        value: 'Architectural',
        label: 'The Gap We Target',
        desc: 'Most plateaued scores are held back by architectural literacy, not missing subject knowledge. The diagnostic-first approach finds that gap before a single practice problem is assigned.',
      },
    ],
    testimonials: [
      {
        name: 'Rohan Sharma',
        role: 'Class 12 student · Delhi',
        content:
          'I scored 1190 on my first attempt and was devastated, because my target college wanted 1400+. The SAT Prep Pass diagnosed that I was losing most points in Reading passage evidence questions. Six weeks of targeted practice later, I retook the SAT and scored 1410. Completely changed my college options.',
        before: '1190',
        after: '1410',
        metric: 'SAT Score',
        improvement: '+220 pts',
      },
      {
        name: 'Ananya Menon',
        role: 'Class 11 student · Bengaluru',
        content:
          'My score was stuck at 1240 for two attempts. The diagnostic showed the gap was in how I was reading the test\'s structure, not in what I knew. The architecture module and pattern drills moved the score to 1390 in one retake cycle.',
        before: '1240',
        after: '1390',
        metric: 'SAT Score',
        improvement: '+150 pts',
      },
    ],
    faqs: [
      {
        q: 'What does diagnostic-first mean in practice?',
        a: 'The course begins with a full-length digital SAT mock test used as a measurement instrument, not as instruction. The results locate exactly where the score is being held back: specific question types, section pacing, or a pattern architecture the student has not yet learned to read. Every practice session after that is targeted at those specific gaps rather than moving through a generic syllabus.',
      },
      {
        q: 'My child knows the Math content well. Why is their SAT Math score still low?',
        a: 'SAT Math measures applied pattern recognition under a specific question architecture as much as it measures content knowledge. A student who is strong in CBSE Maths can still lose marks on multi-step data interpretation, scatterplot analysis, and real-world function modelling, because those question types differ substantially from CBSE patterns. The course targets that specific divergence.',
      },
      {
        q: 'Is this program for the new digital SAT or the old paper format?',
        a: 'Fully aligned to the digital SAT format introduced by College Board. All practice, mock tests, and strategy sessions are built around the adaptive digital structure, including how Module 2 difficulty is set by Module 1 performance. No paper-format content is included.',
      },
      {
        q: 'How does this work alongside CBSE or ICSE board preparation?',
        a: 'The inferential reading and analytical skills built here complement board exam comprehension preparation rather than competing with it. The math overlap with CBSE and ICSE is significant, and students preparing for both typically find the shared foundation accelerates both tracks. The course is structured to run alongside school study rather than replace it.',
      },
      {
        q: 'What does the 14-day free trial include?',
        a: 'The full program, including the GAP Assessment diagnostic, AI Tutor sessions, spaced retrieval practice, and Study Buddy access. No credit card is required to start. At the end of 14 days you decide whether to continue at Rs 999 per month.',
      },
    ],
  },
];

export function getProgramBySlug(slug: string): ProgramData | undefined {
  return programsData.find((p) => p.slug === slug);
}
