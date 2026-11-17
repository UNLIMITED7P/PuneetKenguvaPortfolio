export interface EducationItem {
  id: string;
  category: string;
  title: string;
  institution: string;
  program: string;
  period: string;
  description: string;
  footerLeft: string;
  footerRight: string;
  featured?: boolean;
}

export interface TimelineItem {
  year: string;
  milestone: string;
  institution: string;
  description: string;
}

export interface CuriosityItem {
  number: string;
  title: string;
  description: string;
  tools?: string;
}

export interface ProjectItem {
  id: string;
  number: string;
  name: string;
  category: string;
  shortDescription: string;
  role: string;
  year: string;
  tools: string;
  image: string;
  imageAlt: string;
  overview: string;
  focusAreas: string[];
  outcomeNote: string;
}

export interface ExperienceItem {
  year: string;
  role: string;
  organization: string;
  highlights: string[];
}

export interface ActivityGroup {
  category: string;
  items: string[];
}

export interface ThinkingNote {
  id: string;
  category: string;
  title: string;
  shortDescription: string;
  readTime: string;
  date: string;
  paragraphs: string[];
}

export const SITE_META = {
  name: 'Puneet Kenguva',
  initials: 'PK',
  positioning: 'Dual-Degree Candidate · B.Arch (UVCE) & BBA DBE (IIM Bangalore)',
  eyebrow: 'DUAL-DEGREE CANDIDATE · B.ARCH (UVCE) & BBA DBE (IIM BANGALORE)',
  heroStatement:
    'Bridging architecture, spatial design, and digital business through studio practice and entrepreneurship.',
  heroIntro:
    'Based in Bengaluru, I am pursuing a Bachelor of Architecture at UVCE alongside a BBA in Digital Business & Entrepreneurship at IIM Bangalore—combining masterplanning, physical modeling, visual media, and emerging digital ventures.',
  location: 'Bengaluru, India',
  portraitPath: '/assets/aistudio/IMG_0979__copy___1__3cd8f9a7.png',
  resumePdfPath: '/assets/aistudio/Puneet_Kenguva_Resume_32b56c09.pdf',
  phonePlaceholder: '[Phone Number]',
  email: 'Puneetkenguva@gmail.com',
  linkedinPlaceholder: '[LinkedIn URL]',
  githubPlaceholder: '[GitHub URL]',
  copyrightYear: '2026',
};

export const ABOUT_CONTENT = {
  sectionLabel: '01 / A LITTLE ABOUT ME',
  heading: 'Curiosity is the starting point.',
  leadStatement:
    'I study how physical spaces are shaped—and how digital businesses are built to sustain ideas.',
  paragraphs: [
    'As a dual-degree candidate in Bengaluru, my week moves between architectural design studios at University Visvesvaraya College of Engineering (UVCE) and business coursework at the Indian Institute of Management Bangalore (IIMB).',
    'Whether drafting a 20-acre masterplan, constructing handmade scale models, capturing RAW photography, or coordinating student cohorts through NASA India and Youth Can Lead, I enjoy working where structured craft meets organizational execution.',
  ],
  metadata: [
    {label: 'CURRENTLY', value: 'B.Arch (UVCE) & BBA DBE (IIMB)'},
    {label: 'FOCUS', value: 'Architecture · Digital Business · Visual Media'},
    {label: 'BASED IN', value: SITE_META.location},
  ],
};

export const EDUCATION_CONTENT = {
  sectionLabel: '02 / ACADEMIC FOUNDATION',
  heading: 'Education, beyond the classroom.',
  subtext:
    'An interdisciplinary academic path pairing five-year architectural training with digital business and entrepreneurship.',
  items: [
    {
      id: 'dual-degree',
      category: 'DUAL-DEGREE PATH',
      title: 'Puneet Kenguva',
      program: 'B.Arch (UVCE) & BBA in Digital Business & Entrepreneurship (IIM Bangalore)',
      institution: 'Bengaluru, India',
      period: 'Ongoing',
      description:
        'Pursuing two concurrent undergraduate tracks—developing spatial, technical, and studio discipline in architecture while building analytical fluency in digital ventures, strategy, and entrepreneurship.',
      footerLeft: 'INTERDISCIPLINARY TRACK',
      footerRight: 'ACTIVE',
      featured: true,
    },
    {
      id: 'uvce-barch',
      category: 'ARCHITECTURE',
      title: 'University Visvesvaraya College of Engineering (UVCE)',
      program: 'Bachelor of Architecture (B.Arch)',
      institution: 'Bengaluru, India',
      period: '3rd Year (Ongoing)',
      description:
        'Core studio training in masterplanning, architectural drafting, terrain visualization, physical scale modeling, and spatial problem-solving.',
      footerLeft: 'UVCE BENGALURU',
      footerRight: '3RD YEAR',
    },
    {
      id: 'iimb-bba',
      category: 'DIGITAL BUSINESS',
      title: 'Indian Institute of Management Bangalore (IIMB)',
      program: 'BBA in Digital Business & Entrepreneurship (DBE)',
      institution: 'Bengaluru, India',
      period: '1st Year (Ongoing)',
      description:
        'Exploring digital business models, entrepreneurial execution, market strategy, and technology-driven value creation.',
      footerLeft: 'IIM BANGALORE',
      footerRight: '1ST YEAR',
    },
  ] as EducationItem[],
  schoolFoundations: [
    {
      institution: 'BASE PU College, Bengaluru',
      qualification: 'Class 12 (Pre-University)',
      standing: 'Distinction (First Class)',
    },
    {
      institution: 'Kamala High School',
      qualification: 'Class 10 (Secondary)',
      standing: 'Distinction (First Class)',
    },
  ],
};

export const TIMELINE_ITEMS: TimelineItem[] = [
  {
    year: 'FOUNDATION',
    milestone: 'Secondary & Pre-University',
    institution: 'Kamala High School & BASE PU College, Bengaluru',
    description:
      'Completed Class 10 and Class 12 (Pre-University) with Distinction (First Class), building a strong analytical foundation.',
  },
  {
    year: '2024 – PRESENT',
    milestone: 'Architecture & Student Leadership',
    institution: 'UVCE Bengaluru · Youth Can Lead · NASA India',
    description:
      'Entered the B.Arch program at UVCE (now in 3rd Year), mentored cohorts at Youth Can Lead, and stepped into unit leadership with NASA India.',
  },
  {
    year: '2025 – PRESENT',
    milestone: 'Dual-Degree Expansion',
    institution: 'IIM Bangalore (BBA DBE) & UVCE',
    description:
      'Added the BBA in Digital Business & Entrepreneurship at IIM Bangalore alongside architectural studio work and MUN leadership.',
  },
];

export const CURIOSITY_ITEMS: CuriosityItem[] = [
  {
    number: '01',
    title: 'ARCHITECTURE & SPATIAL',
    description:
      'Designing human-centered spaces, large-scale masterplans, and 3D terrain studies grounded in physical context.',
    tools: 'AutoCAD · Archicad · Revit · QGIS (Qgis2threejs)',
  },
  {
    number: '02',
    title: 'MODELING & 3D DIGITIZATION',
    description:
      'Bridging tactile handmade architectural scale models with accessible 3D scanning and rendering workflows.',
    tools: 'Physical Scale Modeling · Polycam · Scaniverse',
  },
  {
    number: '03',
    title: 'DIGITAL BUSINESS & STRATEGY',
    description:
      'Understanding digital ventures, sponsorship outreach, and how entrepreneurial thinking turns concepts into lasting initiatives.',
    tools: 'IIMB DBE · Strategy · Venture Foundations',
  },
  {
    number: '04',
    title: 'DESIGN & VISUAL MEDIA',
    description:
      'Crafting clear visual communication across graphic layouts, architectural presentation boards, and editorial photography.',
    tools: 'Adobe Photoshop · Illustrator · Canva · Manual & RAW Photography',
  },
  {
    number: '05',
    title: 'DIGITAL & WEB TECH',
    description:
      'Building clean web interfaces, experimenting with scripting workflows, and keeping up with generative AI tools.',
    tools: 'HTML/CSS · Python · GitHub · Generative AI',
  },
  {
    number: '06',
    title: 'LEADERSHIP & ENDURANCE',
    description:
      'Developing composure and clarity through Model UN diplomacy, cohort mentoring, collegiate sports, and distance running.',
    tools: 'NASA India · Youth Can Lead · Half-Marathon & 10K',
  },
];

export const PROJECT_ITEMS: ProjectItem[] = [
  {
    id: 'cultural-interpretation-centre',
    number: '01',
    name: 'Cultural Interpretation Centre Masterplan',
    category: 'ARCHITECTURE STUDIO',
    shortDescription:
      'Designed a 20-acre masterplan (~18,000–20,000 m² BUA) with CAD floor plans for a 155.8 m × 155.8 m administrative block and 3D terrain visualization.',
    role: 'Architecture Studio Designer',
    year: 'B.Arch Studio',
    tools: 'AutoCAD · QGIS · Qgis2threejs',
    image: '/src/assets/images/cultural_centre_masterplan_1794933928699.jpg',
    imageAlt:
      'Architectural studio masterplan drawing with topographic contours, courtyard pavilion plan, and basswood massing blocks',
    overview:
      'An architectural studio masterplan spanning a 20-acre site with approximately 18,000–20,000 m² of built-up area (BUA). The work paired detailed CAD floor planning for a 155.8 m × 155.8 m administrative block with topographic terrain modeling.',
    focusAreas: [
      'Site zoning and circulation across a 20-acre cultural campus (~18,000–20,000 m² BUA)',
      'Detailed CAD floor plan drafting for the 155.8 m × 155.8 m administrative block',
      '3D terrain visualization and spatial context mapping using QGIS and Qgis2threejs',
    ],
    outcomeNote:
      'Developed as part of the Bachelor of Architecture studio curriculum at UVCE, Bengaluru.',
  },
  {
    id: 'scale-modeling-digitization',
    number: '02',
    name: 'Physical Architectural Scale Modeling & 3D Digitization',
    category: 'ARCHITECTURE EXPLORATION',
    shortDescription:
      'Constructed handmade architectural scale models and explored 3D scanning and digital rendering workflows using Polycam and Scaniverse.',
    role: 'Model Maker & Researcher',
    year: 'Ongoing Exploration',
    tools: 'Physical Modeling · Polycam · Scaniverse',
    image: '/src/assets/images/physical_scale_model_3d_1794933929723.jpg',
    imageAlt:
      'Handcrafted basswood architectural physical scale model next to a 3D photogrammetry mesh scan on a studio workbench',
    overview:
      'An ongoing exploration connecting tactile architectural craft with mobile photogrammetry and LiDAR scanning—translating physical handmade scale models into inspectable digital 3D artifacts.',
    focusAreas: [
      'Hand-built physical architectural scale models studying massing, proportion, and light',
      '3D spatial capture and mesh cleanup workflows via Polycam and Scaniverse',
      'Bridging physical studio models with digital presentation and archival formats',
    ],
    outcomeNote:
      'Independent architectural exploration bridging traditional studio craft with 3D digitization.',
  },
];

export const EXPERIENCE_ITEMS: ExperienceItem[] = [
  {
    year: '2025 – Present',
    role: 'Unit Designee (UD)',
    organization: 'National Association of Students of Architecture (NASA India)',
    highlights: [
      'Served as assistant and successor to the Unit Secretary, coordinating architectural student initiatives and unit operations.',
    ],
  },
  {
    year: '2 Years',
    role: 'Cohort Mentor, MUN Chair & Sponsorship Outreach',
    organization: 'Youth Can Lead (YCL)',
    highlights: [
      'Mentored student cohorts across a two-year tenure and led sponsorship outreach across various events.',
      'Served as MUN Chair at Youth Can Lead and received the Best Candidate of the Batch award.',
    ],
  },
];

export const ACTIVITY_GROUPS: ActivityGroup[] = [
  {
    category: 'MODEL UNITED NATIONS (MUN)',
    items: [
      'Best Delegate at UVCE College MUN (2025)',
      'MUN Chair at Youth Can Lead (YCL)',
      'Delegate at BMSMUN (2025)',
    ],
  },
  {
    category: 'COLLEGIATE SPORTS & RUNNING',
    items: [
      'Multiple medalist in college sports',
      'Wipro Bengaluru Marathon Half-Marathon finisher (2026)',
      'TCS World 10K Bengaluru participant (2024, 2026)',
    ],
  },
  {
    category: 'CLUBS & CONFERENCES',
    items: [
      'Active member of Eco Club',
      'Council of Architecture Samvaad 2.0 participant',
      'Growthschool Generative AI Workshops',
    ],
  },
];

export const THINKING_NOTES: ThinkingNote[] = [
  {
    id: 'interdisciplinary-learning',
    category: 'EDUCATION',
    title: 'WHY INTERDISCIPLINARY LEARNING MATTERS',
    shortDescription:
      'Reflections on studying Architecture alongside Digital Business—and how spatial thinking sharpens venture judgment.',
    readTime: '3 min read',
    date: 'Note 01',
    paragraphs: [
      'Most real problems do not arrive neatly labeled as purely spatial or purely commercial. Designing a 20-acre masterplan requires understanding human flow and constraints; building a digital business requires framing systems with the same clarity.',
      'Pursuing B.Arch at UVCE alongside a BBA in Digital Business & Entrepreneurship at IIM Bangalore forces a productive kind of translation between studio critique and business strategy.',
      'The goal is not to dilute either discipline, but to recognize how structure from one field clarifies blind spots in the other.',
    ],
  },
  {
    id: 'physical-to-digital-craft',
    category: 'ARCHITECTURE',
    title: 'FROM HANDMADE MODELS TO 3D DIGITIZATION',
    shortDescription:
      'What building physical architectural scale models teaches that screens alone miss—and how 3D scanning bridges both.',
    readTime: '3 min read',
    date: 'Note 02',
    paragraphs: [
      'Cutting board and assembling a physical scale model forces an immediate honesty about proportion, shadow, and structural logic. Every millimeter carries weight in a way that infinite zoom on a monitor can conceal.',
      'At the same time, tools like Polycam and Scaniverse allow physical craft to travel digitally—making handmade studio studies easy to inspect, share, and archive.',
      'Working across both physical and digital mediums keeps the tactile intuition of studio practice intact while embracing modern workflows.',
    ],
  },
  {
    id: 'what-technology-cant-solve',
    category: 'PERSPECTIVE',
    title: "WHAT TECHNOLOGY CAN'T SOLVE",
    shortDescription:
      'On the limits of software tools, and why context, restraint, and human observation remain irreplaceable.',
    readTime: '4 min read',
    date: 'Note 03',
    paragraphs: [
      'Modern CAD, GIS, and generative tools lower the friction of producing outputs, which makes it tempting to treat every challenge as a software problem. Yet speed rarely rescues a weak premise.',
      'Whether framing a photograph manually in RAW or structuring an architectural layout, deciding what belongs and what should be left out still demands patience and human judgment.',
      'Tools amplify intent. Without thoughtful observation underneath, faster execution only multiplies noise.',
    ],
  },
  {
    id: 'endurance-and-leadership',
    category: 'PRACTICE',
    title: 'LESSONS FROM MUN & LONG-DISTANCE RUNNING',
    shortDescription:
      'How mentoring cohorts, chairing debates, and training for half-marathons shape consistency in student life.',
    readTime: '3 min read',
    date: 'Note 04',
    paragraphs: [
      'Balancing two demanding degree programs leaves little room for erratic habits. Training for events like the Wipro Bengaluru Half-Marathon and TCS World 10K reinforces that steady pacing outperforms short bursts of intensity.',
      'Similarly, mentoring student cohorts at Youth Can Lead and coordinating operations at NASA India taught me that leadership is mostly clear communication, reliability, and helping others do their best work.',
      'Growth outside the classroom quietly sets the standard for everything inside it.',
    ],
  },
];

export const EXPLORING_TOPICS: string[] = [
  'Architecture',
  'Masterplanning',
  'Digital Business',
  'Entrepreneurship',
  '3D Digitization',
  'Visual Media',
  'Generative AI',
];
