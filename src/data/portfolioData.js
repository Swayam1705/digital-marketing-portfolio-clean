/* =============================================================================
 *
 *  👉  EDIT THIS FILE FIRST.
 *
 *  This is the ONLY file you normally need to touch to personalize the site.
 *  Every component on the website reads its content from this file — you do
 *  NOT need to edit component files for normal content updates.
 *
 *  HOW TO USE IT
 *  -------------
 *  - Replace every [SQUARE BRACKETED] placeholder with your own information.
 *  - Add / remove items by copying the block they live in (e.g. one project
 *    object) and following the same shape.
 *  - Keep the quotes, commas and braces intact.
 *  - Do not invent metrics — only enter results you can stand behind.
 *
 *  See CUSTOMIZATION.md (in the project root) for a step-by-step guide.
 *
 * ========================================================================== */

export const portfolioData = {
  /* --------------------------------------------------------------------------
   *  PERSONAL / HERO
   * ------------------------------------------------------------------------ */
  personal: {
    name: "Samruddhi Shukla",
    role: "DIGITAL MARKETING FREELANCER",

    // One sentence that defines your personal brand (shown under your name).
    tagline: "Turning ideas into Brands people remember.",

    // 1–2 sentences for the hero section.
    intro:
      "Passionate about content strategy, SEO, and consumer psychology. I help brands build a stronger digital presence through thoughtful content, social media, SEO and performance marketing.",

    // 100–150 word biography used in the About section.
    bio: "I'm a digital marketing freelancer who enjoys turning ideas into meaningful digital experiences. From content and social media to SEO and performance marketing, I combine creativity with strategy to help brands show up online with confidence.",

    // Replace this path with your own photo, e.g. "/images/my-profile.jpg"
    profileImage: "/images/about/SS_PORTFOLIO_IMAGE.jpeg",
    profileAlt: "Placeholder profile portrait illustration",

    email: "samruddhishukla1510@gmail.com",
    phone: "+91 98695 83814",
    location: "[Dombivali, India]",

    // Short snapshot chips shown beside the biography.
    focusAreas: [
      "Social Media Marketing",
      "SEO",
      "Google & Meta Ads",
      "Email Marketing",
      "Content Creation",
      "Canva Design",
      "WordPress",
      "Analytics & Performance Tracking", 
    ],

    // Put your PDF in public/resume/ and keep this path in sync.
    resume: "/resume/Samruddhi Shukla Resume.pdf",
  },

  /* --------------------------------------------------------------------------
   *  SOCIAL LINKS
   *  Add or remove platforms freely. `url` is where the icon/link goes.
   *  Common platforms (LinkedIn, Instagram, Behance, GitHub, X, YouTube)
   *  automatically get a matching icon in the footer/contact section.
   * ------------------------------------------------------------------------ */
  socials: [
    {
      platform: "LinkedIn",
      label: "[SAMRUDDHI SHUKLA]",
      url: "https://www.linkedin.com/in/samruddhi-shukla-57b16a340?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    },
    {
      platform: "Instagram",
      label: "[SAMCREATES.15]",
      url: "https://www.instagram.com/samcreates.15?stkn=ZnRtcWRhYmJ6a3Rz",
    },
    {
      platform: "Facebook",
      label: "[SAMRUDDHI SHUKLA]",
      url: "https://www.facebook.com/share/19aWayWeTn/?stkn=ZnRtcWRhYmJ6a3Rz",
    },
  ],

  /* --------------------------------------------------------------------------
   *  "WHAT I BELIEVE" — positioning statements, NOT claims of experience.
   * ------------------------------------------------------------------------ */
  beliefs: [
    {
      number: "01",
      title: "CURIOSITY",
      text: "Good marketing starts with better questions.",
    },
    {
      number: "02",
      title: "CREATIVITY",
      text: "Strategy gives creativity a direction.",
    },
    {
      number: "03",
      title: "MEASUREMENT",
      text: "Ideas become stronger when we learn from the data.",
    },
  ],

  /* --------------------------------------------------------------------------
   *  ABOUT — short personal journey timeline.
   *  Keep entries chronological (oldest first or newest first — be consistent).
   * ------------------------------------------------------------------------ */
  journey: [
    {
      period: "2025 — Discovering Digital Marketing",
      title: "Milestone — Started exploring Digital Marketing",
      description: "Began learning how brands use social media, content and digital platforms to connect with their audience.",
    },
    {
      period: "2026 — Practical Projects & Campaigns",
      title: "Milestone — Turning Learning into Practice",
      description: "Worked on brand research, marketing campaigns, social media creatives, paid advertising and content strategies through practical projects.",
    },
    {
      period: "Present — Building My Digital Marketing Career",
      title: "Where I am now",
      description: "Currently pursuing my BTech along with a Diploma in Digital Marketing, while building my portfolio and developing my skills as a Digital Marketing Freelancer.",
    },
  ],

  /* --------------------------------------------------------------------------
   *  MARKETING TOOLKIT — skills grouped by category.
   *  No fake percentages: skills are presented as a categorical toolkit.
   *  `icon` options: pen | trending | palette | chart
   *  Tap/click a skill to reveal its description.
   * ------------------------------------------------------------------------ */
    skillGroups: [
    {
      category: "CONTENT",
      tagline: "Messages people actually want to spend time with.",
      icon: "pen",
      items: [
        {
          name: "Social Media Marketing",
          description:
            "Planning monthly content calendars, writing captions, and building community engagement across Instagram, LinkedIn, and TikTok.",
        },
        {
          name: "Content Strategy",
          description:
            "Researching audience pain points, defining content pillars, and mapping out posting schedules that stay consistent.",
        },
        {
          name: "Copywriting",
          description:
            "Writing high-converting captions, carousel scripts, email newsletters, and short-form video scripts matched to brand voice.",
        },
      ],
    },
    {
      category: "GROWTH",
      tagline: "Getting the right work in front of the right people.",
      icon: "trending",
      items: [
        {
          name: "SEO Fundamentals",
          description:
            "Keyword research using Ubersuggest and AnswerThePublic, on-page optimization with meta tags, headers, and search intent mapping.",
        },
        {
          name: "Email Marketing",
          description:
            "Setting up welcome sequences, newsletters, and basic subscriber segmentation using Mailchimp and MailerLite.",
        },
        {
          name: "Meta Ads Basics",
          description:
            "Campaign setup in Meta Ads Manager for lead generation and traffic objectives, including audience targeting and A/B testing.",
        },
      ],
    },
    {
      category: "BRAND",
      tagline: "A recognizable, consistent point of view.",
      icon: "palette",
      items: [
        {
          name: "Visual Branding",
          description:
            "Designing social media graphics, templates, and brand style guides using Canva Pro and Adobe Express.",
        },
        {
          name: "Short-Form Video",
          description:
            "Editing Reels, TikToks, and YouTube Shorts using CapCut — from hook writing to final export.",
        },
        {
          name: "Audience Research",
          description:
            "Building audience personas, analyzing competitor positioning, and aligning messaging to the right demographic.",
        },
      ],
    },
    {
      category: "DATA",
      tagline: "Letting results shape the next decision.",
      icon: "chart",
      items: [
        {
          name: "Analytics & Tracking",
          description:
            "Reading dashboards in Google Analytics 4 and Meta Insights to understand traffic sources, engagement, and conversions.",
        },
        {
          name: "Performance Reporting",
          description:
            "Creating monthly performance decks with clear KPIs, visual charts, and actionable next-step recommendations.",
        },
        {
          name: "A/B Testing",
          description:
            "Running simple split tests on ad creatives, email subject lines, and landing page copy to find what performs best.",
        },
      ],
    },
  ],
  /* --------------------------------------------------------------------------
   *  PROJECTS — your proof of work. Clicking a card opens a full case study.
   *  Copy a whole block to add another project; delete a block to remove one.
   *  Use only outcomes/metrics that are REAL — otherwise leave the learning.
   * ------------------------------------------------------------------------ */
      projects: [
    {
      title: "Matcha Mood — Summer Special",
      client: "Matcha Mood (concept)",
      category: "Social Media",
      image: "/images/projects/project-01-matcha-mood.png", 
      description: "A bright summer promotional creative built around matcha-based drinks, using fresh green tones, product-focused imagery, a seasonal offer, and a clear purchase CTA.",
      tools: ["Canva", "Photoshop", "Social Media Design"],
    },
    {
      title: "Watermelon Cooling Gel Face Wash — Summer Special",
      client: "Dot & Key (concept)",
      category: "Beauty & Skincare",
      image: "/images/projects/project-02-dot-key-watermelon-gel.png", 
      description: "A product-focused skincare visual highlighting a watermelon cooling gel face wash through a fresh pink composition, product placement, and splash imagery.",
      tools: ["Canva", "Photoshop", "Product Composition", "Social Media Design"],
    },
    {
      title: "Eat Better. Live Simpler.",
      client: "IKEA (concept)",
      category: "Food & Lifestyle",
      image: "/images/projects/project-03-ikea-eat-better.png", 
      description: "A lifestyle-oriented promotional creative combining food photography, nutritional information, sustainability messaging, and a clear product offer.",
      tools: ["Canva", "Photoshop", "Layout Design", "Infographic Design"],
    },
    {
      title: "Monsoon Blend — Coffee Lovers Campaign",
      client: "Starbucks (concept)",
      category: "Social Media",
      image: "/images/projects/project-04-starbucks-monsoon-blend.png", 
      description: "A premium seasonal coffee campaign using a dark atmospheric composition to communicate a monsoon-themed blend and its tasting notes.",
      tools: ["Photoshop", "Canva", "Typography", "Campaign Design"],
    },
    {
      title: "Watermelon Cooling Gel Face Wash — Blue Variant",
      client: "Dot & Key (concept)",
      category: "Beauty & Skincare",
      image: "/images/projects/project-05-dot-key-watermelon-gel-blue.png", 
      description: "A second product creative exploring a cooler visual treatment for the same skincare concept, using blue tones and product-centered composition.",
      tools: ["Canva", "Photoshop", "Product Composition", "Social Media Design"],
    },
    {
      title: "2 Minutes of Happiness",
      client: "Maggi (concept)",
      category: "Food & Beverage",
      image: "/images/projects/project-06-maggi-two-minutes.png", 
      description: "A nostalgic food-poster concept built around comfort, warmth, and the familiar instant-noodle experience, using an illustrated retro-inspired visual style.",
      tools: ["Canva", "Photoshop", "Illustration", "Poster Design"],
    },
    {
      title: "Some Places Welcome You. Others Remember You.",
      client: "Airbnb (concept)",
      category: "Travel & Hospitality",
      image: "/images/projects/project-07-airbnb-welcome-you.png", 
      description: "A warm hospitality concept focused on emotional storytelling, comfort, belonging, and memorable travel experiences rather than simply promoting a destination.",
      tools: ["Canva", "Photoshop", "Image Composition", "Brand Storytelling"],
    },
    {
      title: "Music Colors Every Moment",
      client: "Spotify (concept)",
      category: "Music & Entertainment",
      image: "/images/projects/project-08-spotify-music-colors.png", 
      description: "A vibrant music campaign concept connecting sound with color, energy, movement, and personal expression through an expressive headphone-centered composition.",
      tools: ["Photoshop, Canva, Digital Composition, Campaign Design"],
    },
    {
      title: "Mint Lemonade — Taste of Freshness",
      client: "Brand Concept",
      category: "Food & Beverage",
      image: "/images/projects/project-09-mint-lemonade.png", 
      description: "A refreshing beverage poster centered on mint, lemon, ice, and water textures, using a green palette to communicate freshness and summer appeal.",
      tools: ["Canva", "Photoshop", "Product Composition", "Poster Design"],
    },
    {
      title: "Open Your Soundtrack",
      client: "Spotify (concept)",
      category: "Music & Entertainment",
      image: "/images/projects/project-10-spotify-open-your-soundtrack.png", 
      description: "A colorful promotional concept presenting music as a personalized world of moods, playlists, genres, and experiences.",
      tools: ["Canva", "Photoshop", "Social Media Design", "Campaign Concepting"],
    },
    {
      title: "The Calm Inside the Storm",
      client: "Starbucks (concept)",
      category: "Food & Beverage",
      image: "/images/projects/project-11-starbucks-calm-storm.png", 
      description: "A cinematic coffee campaign concept pairing rainy monsoon surroundings with a warm Starbucks moment to communicate calm, comfort, and seasonal atmosphere.",
      tools: ["Photoshop", "Canva", "Art Direction", "Campaign Design"],
    },
    {
      title: "Puma — Product",
      client: "PUMA (concept)",
      category: "Fashion & Sportswear",
      image: "/images/projects/project-12-puma-shoes.png", 
      description: "A minimalist sportswear product composition using oversized typography and floating footwear imagery to create a bold, performance-oriented visual.",
      tools: ["Photoshop", "Canva", "Typography", "Product Advertising"],
    }
  ],
  
  /* --------------------------------------------------------------------------
   *  PERFORMANCE THINKING — a funnel diagram with slots for REAL metrics.
   *  Leave the metric placeholders until you have actual numbers.
   * ------------------------------------------------------------------------ */
  funnel: [
    {
      stage: "REACH",
      question: "Who saw it?",
      metric: "[ADD REACH METRIC]",
      signals: "Impressions · reach · views",
    },
    {
      stage: "ENGAGEMENT",
      question: "Who interacted?",
      metric: "[ADD ENGAGEMENT METRIC]",
      signals: "Likes · comments · shares · clicks",
    },
    {
      stage: "CONVERSION",
      question: "Who acted?",
      metric: "[ADD CONVERSION METRIC]",
      signals: "Sign-ups · purchases · downloads",
    },
    {
      stage: "RETENTION",
      question: "Who came back?",
      metric: "[ADD RETENTION METRIC]",
      signals: "Return visits · repeats · subscribers",
    },
  ],

  /* --------------------------------------------------------------------------
   *  EDUCATION — chronological cards in the "Learning in motion" timeline.
   * ------------------------------------------------------------------------ */
  education: [
    {
      institution: "[INSTITUTION / UNIVERSITY]",
      program: "[PROGRAM / DEGREE NAME]",
      period: "[YEARS OR 'PRESENT']",
      description:
        "[OPTIONAL: RELEVANT COURSEWORK, SPECIALIZATION OR ACADEMIC FOCUS.]",
    },
    {
      institution: "[EARLIER INSTITUTION — DELETE IF NOT NEEDED]",
      program: "[PROGRAM / QUALIFICATION]",
      period: "[YEARS]",
      description: "[OPTIONAL DESCRIPTION.]",
    },
  ],

  /* --------------------------------------------------------------------------
   *  EXPERIENCE — internships, freelance, student clubs, part-time work...
   * ------------------------------------------------------------------------ */
  experience: [
    {
      organization: "[ORGANIZATION, CLUB OR FREELANCE CONTEXT]",
      role: "[ROLE — e.g. MARKETING INTERN]",
      period: "[DATES OR 'PRESENT']",
      description:
        "[WHAT YOU WERE RESPONSIBLE FOR AND WHAT YOU LEARNED — KEEP IT HONEST.]",
    },
    {
      organization: "[ORGANIZATION, CLUB OR FREELANCE CONTEXT]",
      role: "[ROLE — DELETE THIS ENTRY IF NOT NEEDED]",
      period: "[DATES]",
      description: "[WHAT YOU DID AND WHAT YOU LEARNED.]",
    },
  ],

  /* --------------------------------------------------------------------------
   *  SERVICES — areas you can offer OR are actively developing.
   *  Wording on the page is careful: these are capabilities, not guarantees.
   *  `icon` options: megaphone | newspaper | search | mail | palette
   *                  pen | target | chart
   * ------------------------------------------------------------------------ */
    services: [
    {
      title: "Social Media Management",
      icon: "megaphone",
      description:
        "Building monthly content calendars, scheduling posts, and engaging with communities across Instagram, LinkedIn, and TikTok.",
      link: "#contact",
    },
    {
      title: "Content Creation & Copywriting",
      icon: "pen",
      description:
        "Writing compelling captions, educational carousel copy, short video scripts, and email newsletters tailored to brand voice.",
      link: "#contact",
    },
    {
      title: "Visual Asset & Poster Design",
      icon: "palette",
      description:
        "Designing aesthetic, high-converting social graphics, flyers, presentation decks, and brand templates using Canva Pro & Adobe Express.",
      link: "#contact",
    },
    {
      title: "SEO & Keyword Research",
      icon: "search",
      description:
        "Conducting search-intent keyword research, writing SEO-optimized blog outlines, and optimizing on-page meta tags & headers.",
      link: "#contact",
    },
    {
      title: "Meta Ads Campaign Setup",
      icon: "target",
      description:
        "Setting up targeted traffic and lead-generation campaigns in Meta Ads Manager with creative A/B testing and budget monitoring.",
      link: "#contact",
    },
    {
      title: "Performance Reporting",
      icon: "chart",
      description:
        "Tracking key metrics with Google Analytics 4 & Meta Insights and turning data into actionable monthly summary decks.",
      link: "#contact",
    },
  ],
  /* --------------------------------------------------------------------------
   *  BLOG / WRITING — set `featured: true` on ONE post for the large card.
   * ------------------------------------------------------------------------ */
  blogPosts: [
    {
      featured: true,
      title: "[FEATURED ARTICLE TITLE — YOUR BIGGEST CURRENT LEARNING]",
      category: "Strategy",
      readTime: "[X] min read",
      excerpt:
        "[2–3 SENTENCE EXCERPT THAT EXPLAINS THE IDEA AND WHY IT MATTERS TO OTHER MARKETERS.]",
      image: "/images/blog-placeholder-1.svg",
      alt: "Placeholder blog illustration: notebook and idea spark",
      link: "#",
    },
    {
      title: "[ARTICLE TITLE]",
      category: "Analytics",
      readTime: "[X] min read",
      excerpt: "[ONE-SENTENCE EXCERPT FROM THE ARTICLE.]",
      image: "/images/blog-placeholder-2.svg",
      alt: "Placeholder blog illustration: magnifier over a chart",
      link: "#",
    },
    {
      title: "[ARTICLE TITLE]",
      category: "Content",
      readTime: "[X] min read",
      excerpt: "[ONE-SENTENCE EXCERPT FROM THE ARTICLE.]",
      image: "/images/blog-placeholder-3.svg",
      alt: "Placeholder blog illustration: connected content channels",
      link: "#",
    },
  ],
}
