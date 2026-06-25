export interface Metric {
  label: string;
  value: string;
}

export interface ProjectTestimonial {
  quote: string;
  attribution: string;
  status: "approved" | "placeholder" | "pending";
}

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  thumbnailUrl: string;
  images: string[];
  technologies: string[];
  features: string[];
  challenges?: string[];
  solutions?: string[];
  githubUrl?: string;
  liveUrl?: string;
  streamlitUrl?: string;
  status: "completed" | "in-progress";
  isFeatured: boolean;
  category: string[];
  type: "web" | "ml" | "fullstack" | "ai";
  metrics?: Metric[];
  isClientWork?: boolean;
  visibilityStatus?: "public" | "limited" | "private";
  permissionStatus?: "approved" | "limited" | "owned" | "pending";
  projectType?: string;
  serviceCategory?: string;
  clientContext?: string;
  businessProblem?: string;
  solutionSummary?: string;
  deliverables?: string[];
  processNotes?: string[];
  outcome?: string;
  testimonialStatus?: string;
  testimonial?: ProjectTestimonial;
  screenshotStatus?: string;
}

export const projects: Project[] = [
  {
    id: "rammies-vacation",
    title: "Rammies Vacation",
    shortDescription:
      "Direct-booking vacation rental platform for a Texas-based home rental client.",
    fullDescription:
      "Rammies Vacation is a full-stack rental platform built to help a Texas home-rental business present curated properties, accept direct bookings, manage availability, collect reviews, and run key admin workflows without relying on a generic marketplace.",
    thumbnailUrl: "/case-studies/rammies-vacation/desktop-1.webp",
    images: [
      "/case-studies/rammies-vacation/desktop-1.webp",
      "/case-studies/rammies-vacation/desktop-2.webp",
      "/case-studies/rammies-vacation/desktop-3.webp",
      "/case-studies/rammies-vacation/desktop-4.webp",
      "/case-studies/rammies-vacation/mobile-1.webp",
      "/case-studies/rammies-vacation/mobile-2.webp",
      "/case-studies/rammies-vacation/mobile-3.webp",
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL",
      "Stripe",
      "NextAuth",
      "Cloudinary",
      "Resend",
      "Vercel",
    ],
    features: [
      "Guest-facing rental website for properties in Katy and Fulshear, Texas",
      "Property listing cards, detail pages, amenities, pricing, and availability flows",
      "Direct checkout/payment intent workflow with Stripe",
      "Admin area for properties, bookings, reviews, pricing, and blocked dates",
      "Review request and featured testimonial workflow",
      "Email notifications and client-owned account handoff",
    ],
    challenges: [
      "The client needed a trustworthy booking experience without depending entirely on marketplace platforms.",
      "The product moved beyond a simple brochure site into booking, reviews, admin, and payment workflows.",
      "New feature ideas appeared during the build, so the launch scope needed careful communication.",
    ],
    solutions: [
      "Built a full-stack direct-booking platform with guest-facing pages and internal admin tooling.",
      "Implemented structured property, review, booking, pricing, and payment flows instead of a loose static site.",
      "Handled feedback rounds visibly and guided the client through account ownership, deployment, and handoff.",
    ],
    liveUrl: "https://www.rammiesvacation.com/",
    status: "completed",
    isFeatured: true,
    category: ["Client Work", "Rental Platform", "CMS Website"],
    type: "fullstack",
    isClientWork: true,
    visibilityStatus: "public",
    permissionStatus: "approved",
    projectType: "Direct-booking vacation rental platform",
    serviceCategory: "Custom Website + Booking System",
    clientContext: "Foreign client based in Texas running a home rental service.",
    businessProblem:
      "The client needed a credible web platform that could present properties clearly, support direct booking, collect reviews, and reduce dependence on third-party marketplace presentation.",
    solutionSummary:
      "I built a custom rental website with property browsing, booking/payment flows, admin management tools, SEO basics, and a guided handoff process.",
    deliverables: [
      "Responsive rental platform",
      "Property listing and detail pages",
      "Booking, pricing, and availability workflows",
      "Stripe payment intent integration",
      "Admin dashboard for properties, bookings, reviews, and settings",
      "Client-owned hosting and account handoff",
    ],
    processNotes: [
      "Started with a discovery call and proposal plan.",
      "Built the first version, shared it for review, and implemented feedback in rounds.",
      "Separated mid-project feature requests from the agreed launch scope where needed.",
      "Helped the client create and own the accounts required for deployment, payments, email, and operations.",
    ],
    outcome:
      "The client received a live direct-booking platform with property browsing, admin operations, payments, reviews, and a guided handoff for future management.",
    testimonialStatus: "Approved for public portfolio use.",
    testimonial: {
      quote:
        "Alexander communicated clearly throughout the project, made the review process easy, and helped us understand the tools needed to manage the site after launch.",
      attribution: "Rammies Vacation client",
      status: "approved",
    },
    screenshotStatus:
      "Optimized desktop and mobile screenshots are approved for public portfolio use.",
  },
  {
    id: "fosh-estate",
    title: "Fosh Estate",
    shortDescription:
      "Sanity-backed real estate website for listings, trust-building, and property inquiries.",
    fullDescription:
      "Fosh Estate is a real estate website built to present estate phases, explain buyer guidance, show operating areas, and give prospective buyers a more credible path from discovery to inquiry.",
    thumbnailUrl: "/case-studies/fosh-estate/desktop-1.webp",
    images: [
      "/case-studies/fosh-estate/desktop-1.webp",
      "/case-studies/fosh-estate/desktop-2.webp",
      "/case-studies/fosh-estate/desktop-3.webp",
      "/case-studies/fosh-estate/mobile-1.webp",
      "/case-studies/fosh-estate/mobile-2.webp",
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Sanity",
      "Mapbox",
      "Vercel",
    ],
    features: [
      "Real estate homepage with brand positioning and featured estate phases",
      "Property listing and detail routes for available land opportunities",
      "Sanity content model for listings and homepage content",
      "Location/coverage map experience for operating areas",
      "Trust, amenities, services, founder/about, and contact sections",
      "Robots, sitemap, metadata, and launch SEO basics",
    ],
    challenges: [
      "The site needed to make a real estate brand feel credible quickly.",
      "The content had to educate buyers on land selection, inspection, and ownership readiness.",
      "The client needed room to manage property content as the business grows.",
    ],
    solutions: [
      "Built a focused real estate site around listings, buyer guidance, trust, and direct inquiry.",
      "Used Sanity so listing and homepage content can evolve without rebuilding the site.",
      "Added location, property, and contact flows that make the buyer journey easier to understand.",
    ],
    liveUrl: "https://www.foshestate.com/",
    status: "completed",
    isFeatured: true,
    category: ["Client Work", "Real Estate", "Company Website"],
    type: "web",
    isClientWork: true,
    visibilityStatus: "public",
    permissionStatus: "approved",
    projectType: "Real estate CMS website",
    serviceCategory: "Growth Website + CMS",
    clientContext:
      "Real estate client needing a stronger public website for credibility, listings, buyer education, and inquiries.",
    businessProblem:
      "The client needed a website that could make the business easier to trust, explain available estate phases, and help buyers take the next step with more confidence.",
    solutionSummary:
      "I designed and built a responsive Sanity-backed real estate website with property routes, trust content, operating-area context, contact paths, and launch SEO setup.",
    deliverables: [
      "Responsive real estate website",
      "Homepage, about, properties, property detail, and contact routes",
      "Sanity schema and studio setup for listings",
      "Operating-area and map content",
      "Inquiry and contact paths",
      "SEO metadata, sitemap, and robots setup",
    ],
    processNotes: [
      "Clarified the brand promise, buyer trust points, and primary inquiry path.",
      "Structured content around estate phases, services, amenities, operating areas, and contact.",
      "Connected the build to Sanity so property content can be updated more safely.",
      "Prepared the site for launch with metadata, responsive views, and core crawler files.",
    ],
    outcome:
      "The client received a public-facing real estate website that supports referrals, property discovery, buyer education, and inbound inquiries.",
    testimonialStatus: "Approved for public portfolio use.",
    testimonial: {
      quote:
        "The website gave our real estate brand a cleaner, more credible online presence and made it easier for prospects to understand our offers and reach out.",
      attribution: "Fosh Estate team",
      status: "approved",
    },
    screenshotStatus:
      "Optimized desktop and mobile screenshots are approved for public portfolio use.",
  },
  {
    id: "threhills-equipments",
    title: "Three Hills Equipment",
    shortDescription:
      "Heavy construction equipment website with inventory, inquiry, and admin-ready foundations.",
    fullDescription:
      "Three Hills Equipment is a construction equipment website built to present heavy machinery professionally, guide buyers toward inventory, and create clearer inquiry paths for a Lagos-based equipment supplier.",
    thumbnailUrl: "/case-studies/threehills-equipments/desktop-1.webp",
    images: [
      "/case-studies/threehills-equipments/desktop-1.webp",
      "/case-studies/threehills-equipments/desktop-2.webp",
      "/case-studies/threehills-equipments/desktop-3.webp",
      "/case-studies/threehills-equipments/mobile-1.webp",
      "/case-studies/threehills-equipments/mobile-2.webp",
      "/case-studies/threehills-equipments/mobile-3.webp",
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "React Hook Form",
      "Resend",
      "Vercel",
    ],
    features: [
      "Bold video-led homepage for a heavy equipment supplier",
      "Inventory route for excavators, bulldozers, and construction machinery",
      "Machine detail structure for browsing specific equipment",
      "WhatsApp and contact inquiry paths",
      "Supabase-backed admin foundation for inventory management",
      "Email/contact workflow using structured form validation",
    ],
    challenges: [
      "The business needed to look credible in a market where buyers want proof and speed.",
      "The website needed to make inventory and contact actions obvious.",
      "The build needed enough backend structure for future inventory updates without becoming overcomplicated.",
    ],
    solutions: [
      "Built a direct homepage and inventory experience around equipment visuals, urgency, and inquiry.",
      "Added clear CTAs for inventory browsing and WhatsApp/contact conversations.",
      "Used Supabase and admin components as a foundation for managing equipment records.",
    ],
    liveUrl: "https://www.threehillsequipment.com/",
    status: "completed",
    isFeatured: true,
    category: ["Client Work", "Equipment", "Company Website"],
    type: "web",
    isClientWork: true,
    visibilityStatus: "public",
    permissionStatus: "approved",
    projectType: "Equipment inventory website",
    serviceCategory: "Growth Website + CMS",
    clientContext:
      "Heavy construction equipment supplier needing a stronger public web presence for trust, inventory visibility, and inquiries.",
    businessProblem:
      "The client needed a clearer digital presence that could present equipment professionally and move interested buyers toward inventory or contact quickly.",
    solutionSummary:
      "I built a responsive equipment website with a visual hero, inventory route, machine browsing structure, WhatsApp/contact CTAs, and an admin-ready data foundation.",
    deliverables: [
      "Responsive equipment company website",
      "Video-led homepage",
      "Inventory and machine detail routes",
      "Contact and WhatsApp inquiry paths",
      "Supabase/admin foundation",
      "Deployment-ready build",
    ],
    processNotes: [
      "Clarified the strongest first action: view inventory or contact the business.",
      "Built the homepage around heavy-equipment visuals and direct positioning.",
      "Created inventory/admin structure so the website can grow beyond a static company page.",
      "Used feedback rounds to refine presentation and contact paths.",
    ],
    outcome:
      "The client received a professional public website that can support credibility, inventory discovery, and lead conversations.",
    testimonialStatus: "Approved for public portfolio use.",
    testimonial: {
      quote:
        "The website presents our equipment business more professionally and gives prospects a clearer way to view inventory and contact us.",
      attribution: "Three Hills Equipment team",
      status: "approved",
    },
    screenshotStatus:
      "Optimized desktop and mobile screenshots are approved for public portfolio use.",
  },
  {
    id: "palma-wallet",
    title: "Palma Wallet",
    shortDescription:
      "Fintech landing page for a Nigeria-focused non-custodial crypto wallet.",
    fullDescription:
      "Palma Wallet is a secure, non-custodial crypto wallet product. I designed and built the landing page to explain the product clearly, create trust, and move visitors toward App Store and Google Play downloads.",
    thumbnailUrl: "/case-studies/palma-wallet/desktop-1.webp",
    images: [
      "/case-studies/palma-wallet/desktop-1.webp",
      "/case-studies/palma-wallet/desktop-2.webp",
      "/case-studies/palma-wallet/desktop-3.webp",
      "/case-studies/palma-wallet/mobile-1.webp",
      "/case-studies/palma-wallet/mobile-2.webp",
      "/case-studies/palma-wallet/mobile-3.webp",
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Motion",
      "Cobe",
      "TSParticles",
      "Vercel",
    ],
    features: [
      "Product landing page for a fintech wallet",
      "Clear self-custody and financial freedom messaging",
      "Phone mockup with real product UI preview",
      "App Store and Google Play CTA paths",
      "Feature, map, about, and testimonial-style sections",
      "Modern motion/detailing without losing mobile readability",
    ],
    challenges: [
      "Communicating crypto wallet value to users who may not want technical jargon.",
      "Building trust for a fintech product from the first screen.",
      "Making the page feel polished while staying conversion-focused.",
    ],
    solutions: [
      "Led with a simple promise and direct app download actions.",
      "Used product UI previews, trust sections, and focused copy to explain the wallet.",
      "Kept the page responsive, visual, and easy to scan on mobile.",
    ],
    liveUrl: "https://palmawallet.vercel.app/",
    status: "completed",
    isFeatured: true,
    category: ["Web", "Fintech", "Landing Page"],
    type: "web",
    visibilityStatus: "public",
    permissionStatus: "approved",
    projectType: "SaaS/product landing page",
    serviceCategory: "SaaS Landing Page",
    clientContext:
      "Fintech product needing a polished public landing page that explains the wallet and sends users to mobile app downloads.",
    businessProblem:
      "The product needed a clearer first impression, better product education, and direct download paths for users evaluating the wallet.",
    solutionSummary:
      "I built a visual product landing page with a clear hero, app download CTAs, product UI preview, trust-building sections, and responsive design.",
    deliverables: [
      "Landing page design and build",
      "Responsive frontend",
      "Product feature sections",
      "Download CTA path",
      "Deployment support",
    ],
    outcome:
      "The landing page supports product credibility, user education, and mobile app download discovery.",
    testimonialStatus: "Approved for public portfolio use.",
    testimonial: {
      quote:
        "The landing page communicates Palma Wallet clearly and gives users a smoother path to understand the product and download the app.",
      attribution: "Palma Wallet team",
      status: "approved",
    },
    screenshotStatus:
      "Optimized desktop and mobile screenshots are approved for public portfolio use.",
  },
  {
    id: "ai-contract-tool",
    title: "AI Contract Agreement Tool",
    shortDescription:
      "In-progress AI web tool for generating contract agreements from guided inputs.",
    fullDescription:
      "A personal startup product focused on helping users generate contract agreements through a structured web workflow. The project demonstrates my ability to combine product thinking, web development, AI workflows, and document-generation logic.",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1470&q=80",
    images: [
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1470&q=80",
    ],
    technologies: ["Next.js", "React", "TypeScript", "AI SDK", "Tailwind CSS"],
    features: [
      "Guided document-generation workflow",
      "AI-assisted contract drafting",
      "Structured inputs for better outputs",
      "Dashboard-style product interface",
      "Reusable document schema thinking",
      "Startup-focused product iteration",
    ],
    challenges: [
      "Turning a broad legal-document idea into a guided product flow.",
      "Balancing AI speed with structure and user control.",
      "Designing outputs that feel useful rather than generic.",
    ],
    solutions: [
      "Used a wizard flow to collect better context.",
      "Structured generation around document types and schemas.",
      "Iterated interface and output quality through product testing.",
    ],
    status: "in-progress",
    isFeatured: true,
    category: ["AI", "Startup", "Web App"],
    type: "ai",
    projectType: "AI web application",
    serviceCategory: "AI Workflow Prototype",
    solutionSummary:
      "A product-grade AI workflow that turns user inputs into a generated contract document experience.",
    deliverables: [
      "AI generation workflow",
      "Wizard-style UI",
      "Document schema design",
      "Web app interface",
      "Product iteration",
    ],
    outcome:
      "This project demonstrates the AI integration direction I can bring into client work.",
  },
  {
    id: "breast-cancer-microservice",
    title: "Breast Cancer Diagnostic Microservice",
    shortDescription:
      "Production-grade ML microservice with FastAPI backend and Streamlit frontend for tumor classification.",
    fullDescription:
      "An end-to-end production ML system built with a decoupled microservice architecture. The FastAPI backend handles validation, feature selection, and model serving, while the Streamlit frontend provides an interactive diagnostic interface.",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1470&q=80",
    images: [
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&w=1470&q=80",
    ],
    technologies: [
      "Python",
      "FastAPI",
      "Streamlit",
      "scikit-learn",
      "Pydantic v2",
      "Random Forest",
      "Render",
    ],
    features: [
      "Decoupled FastAPI backend and Streamlit frontend",
      "Strict input validation with Pydantic v2",
      "Optimized feature selection",
      "Singleton pattern for efficient model serving",
      "Cloud deployment on Render and Streamlit Cloud",
      "Interactive diagnostic interface",
    ],
    challenges: [
      "Designing a clean architecture for ML serving.",
      "Ensuring robust input validation for sensitive data.",
      "Optimizing inference latency on free-tier cloud deployments.",
    ],
    solutions: [
      "Implemented service-oriented API boundaries.",
      "Used Pydantic v2 for strict schema validation.",
      "Loaded the model once through a singleton pattern.",
    ],
    githubUrl: "https://github.com/xandersavage/breast-cancer-model-api",
    streamlitUrl: "https://github.com/xandersavage/breast-cancer-model-streamlit",
    status: "completed",
    isFeatured: true,
    category: ["ML", "Healthcare", "Microservice"],
    type: "ml",
    metrics: [
      { label: "Model", value: "Random Forest" },
      { label: "Architecture", value: "Microservice" },
      { label: "Deployment", value: "Render + Streamlit" },
    ],
  },
  {
    id: "pneumonia-cnn",
    title: "Pneumonia Detection CNN",
    shortDescription:
      "Deep learning CNN classifying pneumonia from 5,800+ chest X-ray images with 97% ROC-AUC.",
    fullDescription:
      "A convolutional neural network built to detect pneumonia from chest X-ray images, with preprocessing, augmentation, callbacks, and evaluation artifacts for model performance review.",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&w=1470&q=80",
    images: [
      "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1470&q=80",
    ],
    technologies: ["Python", "TensorFlow", "Keras", "CNN", "scikit-learn", "Plotly"],
    features: [
      "Custom CNN architecture",
      "Image augmentation for generalization",
      "Early stopping and learning-rate scheduling",
      "Classification report and confusion matrix",
      "ROC-AUC evaluation",
      "Interactive model-performance visuals",
    ],
    challenges: [
      "Handling class imbalance between NORMAL and PNEUMONIA images.",
      "Preventing overfitting on a medical image dataset.",
      "Optimizing recall for a sensitive diagnostic use case.",
    ],
    solutions: [
      "Applied data augmentation to expand training variation.",
      "Used BatchNormalization and EarlyStopping.",
      "Evaluated decision trade-offs with recall and ROC-AUC.",
    ],
    githubUrl: "https://github.com/xandersavage/cnn-pneumonia-prediction",
    status: "completed",
    isFeatured: false,
    category: ["ML", "Deep Learning", "Healthcare"],
    type: "ml",
    metrics: [
      { label: "ROC-AUC", value: "0.97" },
      { label: "Test Accuracy", value: "83%" },
      { label: "Recall", value: "99%" },
    ],
  },
  {
    id: "telco-churn-pipeline",
    title: "Telco Customer Churn Pipeline",
    shortDescription:
      "Classification pipeline comparing 10+ algorithms with GridSearchCV hyperparameter tuning.",
    fullDescription:
      "A classification pipeline for predicting telecom churn, benchmarking multiple classifiers with preprocessing, hyperparameter tuning, and performance visualizations.",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1470&q=80",
    images: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1415&q=80",
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=1476&q=80",
    ],
    technologies: ["Python", "scikit-learn", "XGBoost", "CatBoost", "Plotly", "Pandas"],
    features: [
      "10+ classifiers benchmarked",
      "Reusable preprocessing pipeline",
      "GridSearchCV hyperparameter tuning",
      "Accuracy, precision, recall, and F1 evaluation",
      "Confusion matrix analysis",
      "Business-friendly model comparison visuals",
    ],
    challenges: [
      "Comparing classifiers fairly with consistent preprocessing.",
      "Managing grid-search cost across many models.",
      "Explaining model trade-offs clearly.",
    ],
    solutions: [
      "Built a unified sklearn pipeline.",
      "Used cross-validation for consistent model evaluation.",
      "Created visual charts to communicate results.",
    ],
    githubUrl:
      "https://github.com/xandersavage/end-to-end-classification-with-model-tuning",
    status: "completed",
    isFeatured: false,
    category: ["ML", "Classification", "Business Intelligence"],
    type: "ml",
    metrics: [
      { label: "Models", value: "10+" },
      { label: "Optimization", value: "GridSearchCV" },
      { label: "Validation", value: "StratifiedKFold" },
    ],
  },
  {
    id: "portfolio-website",
    title: "This Portfolio",
    shortDescription:
      "The portfolio and business website you are viewing now.",
    fullDescription:
      "This site presents my web development and AI integration work. It is maintained as a personal business website rather than a featured client case study.",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?auto=format&fit=crop&w=1470&q=80",
    images: [
      "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1510&q=80",
      "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=1528&q=80",
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "MagicUI", "Motion"],
    features: [
      "Business-focused homepage",
      "Service and process sections",
      "Case-study project model",
      "SEO metadata and crawler files",
      "Responsive layout",
      "Animated portfolio interactions",
    ],
    challenges: [
      "Keeping the original visual style while changing the business positioning.",
      "Presenting client work clearly without approved screenshots yet.",
      "Improving conversion without adding a fake form.",
    ],
    solutions: [
      "Preserved the dark hero and motion language.",
      "Added screenshot and testimonial status fields.",
      "Moved contact to direct inquiry paths.",
    ],
    githubUrl: "https://github.com/xandersavage/portfolio-website",
    liveUrl: "https://www.olomukoro.uk/",
    status: "completed",
    isFeatured: false,
    category: ["Web", "Portfolio", "Business Website"],
    type: "web",
  },
];

export default projects;
