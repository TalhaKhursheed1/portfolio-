export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  featured: boolean;
  image: string;
  status?: string;
  androidUrl?: string;
  iosUrl?: string;
  downloads?: string;
  gradient: string;
  accentColor?: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export const personalInfo = {
  name: "Talha K.",
  fullName: "Talha Khursheed",
  title: "React Native Developer",
  tagline:
    "Designing, building, and deploying cross-platform mobile apps with React Native & Expo — from UI/UX to App Store & Play Store release.",
  email: "talhakhursheed004@gmail.com",
  phone: "+92 315 4877918",
  location: "Gujranwala, Pakistan",
  upwork: "https://www.upwork.com/freelancers/talhak170",
  github: "https://github.com/TalhaKhursheed1",
  linkedin: "https://www.linkedin.com/in/talha-khursheed-7a0b072a5/",
  resumeUrl: "/resume.pdf",
  profileImage: "/profile.png",
  availability: "Available for React Native & mobile app projects",
};

export const heroRoles = [
  "React Native Developer",
  "Expo & Cross-Platform Expert",
  "iOS & Android Deployment",
  "Firebase & API Integration",
];

export const about = {
  bio: "Motivated and detail-oriented React Native Developer with a Bachelor's degree in Software Engineering and hands-on experience designing, developing, and deploying mobile applications. Skilled in building user-centric apps, integrating third-party APIs, and delivering high-quality solutions within deadlines. Currently at Silicon Nexus, I lead frontend development for cross-platform apps — working in Agile sprints with direct client communication.",
  highlight:
    "Deployed on both Android & iOS — production-ready mobile experiences.",
  experience: [
    {
      role: "React Native Developer",
      company: "Silicon Nexus",
      location: "Lahore, Pakistan",
      period: "Apr 2025 – Present",
    },
    {
      role: "React Native Developer",
      company: "Hixol",
      location: "Gujranwala, Pakistan",
      period: "Dec 2023 – Dec 2024",
    },
    {
      role: "React Native Developer Intern",
      company: "IT Oasis",
      location: "Gujranwala, Pakistan",
      period: "2023",
    },
  ],
};

export const stats: Stat[] = [
  { value: 10, suffix: "+", label: "Projects Delivered" },
  { value: 3, suffix: "+", label: "Years Experience" },
  { value: 10, suffix: "K+", label: "App Downloads" },
];

export const projects: Project[] = [
  {
    id: "kasastay",
    title: "KasaStay",
    description:
      "Bilingual travel & hospitality platform for Cameroon with 3 role-based interfaces (Client, Owner, Agent). Social logins (Google, Apple, Facebook), Firebase chat, push notifications, Google Maps property navigation, and secure payments.",
    tags: [
      "React Native",
      "Firebase",
      "Google Maps",
      "OAuth",
      "Push Notifications",
      "RTK Query",
    ],
    featured: true,
    image: "/projects/kasastay.png",
    androidUrl:
      "https://play.google.com/store/apps/details?id=com.kasastay&hl=en",
    iosUrl: "https://apps.apple.com/us/app/kasastay/id6748743521",
    downloads: "10K+",
    accentColor: "#10b981",
    gradient: "from-emerald-600/20 to-teal-600/20",
  },
  {
    id: "ardent-training",
    title: "Ardent Training: RYA Theory",
    description:
      "Premium RYA sailing theory courses with 100% offline access, HD video lessons, live instructor chat, mock exams, and social learning features. Built for recreational and professional seafarers worldwide.",
    tags: [
      "React Native",
      "Expo",
      "Offline Storage",
      "API Integration",
      "Push Notifications",
    ],
    featured: true,
    image: "/projects/ardent-training.png",
    androidUrl:
      "https://play.google.com/store/apps/details?id=com.ardent_training.android&hl=en",
    iosUrl:
      "https://apps.apple.com/us/app/ardent-training-rya-theory/id6503692601",
    downloads: "1K+",
    accentColor: "#06b6d4",
    gradient: "from-cyan-600/20 to-blue-600/20",
  },
  {
    id: "multi-restaurant",
    title: "MultiRestaurant App",
    description:
      "Multi-tenant restaurant platform with a customer mobile app for browsing menus, placing orders, and tracking deliveries — plus a dedicated tablet app for kitchen staff with real-time order queues, prep status, and thermal printer integration. Currently in active development, launching soon.",
    tags: [
      "React Native",
      "Expo",
      "Multi-Tenant",
      "Tablet App",
      "RTK Query",
      "WebSockets",
      "Thermal Printer",
    ],
    featured: true,
    status: "Coming Soon",
    image: "/projects/multi-restaurant.png",
    accentColor: "#f97316",
    gradient: "from-orange-600/20 to-amber-600/20",
  },
  {
    id: "deliver-cart",
    title: "Deliver Cart",
    description:
      "E-commerce mobile app with RTK Query for API data fetching, Redux Toolkit & Redux Persist for cart/checkout state, and Stripe integration for secure payments for guest and logged-in users.",
    tags: [
      "React Native",
      "Redux Toolkit",
      "RTK Query",
      "Stripe SDK",
      "Redux Persist",
    ],
    featured: true,
    image: "/projects/deliver-cart.png",
    gradient: "from-violet-600/20 to-indigo-600/20",
  },
  {
    id: "rishta-auntie",
    title: "Rishta Auntie",
    description:
      "Relationship app with onboarding screens for video/picture uploads, Redux Toolkit state management, and OneSignal push notifications on both iOS and Android platforms.",
    tags: [
      "React Native",
      "Redux Toolkit",
      "OneSignal",
      "API Integration",
      "CRUD Operations",
    ],
    featured: false,
    image: "/projects/rishta-auntie.png",
    gradient: "from-pink-600/20 to-rose-600/20",
  },
  {
    id: "chat-app",
    title: "Real-Time Chat App",
    description:
      "Self-built demo chat application with Socket.io for real-time group communication, group creation/management, and full frontend-backend socket integration.",
    tags: ["React Native", "WebSockets", "Socket.io", "Real-Time Chat"],
    featured: false,
    image: "/projects/chat-app.png",
    gradient: "from-purple-600/20 to-violet-600/20",
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Mobile Development",
    skills: [
      "React Native",
      "Expo",
      "JavaScript",
      "TypeScript",
      "iOS Deployment",
      "Android Deployment",
      "TestFlight Builds",
      "Xcode",
    ],
  },
  {
    title: "State & Backend",
    skills: [
      "Redux Toolkit",
      "RTK Query",
      "Firebase Cloud Firestore",
      "Firebase Realtime Database",
      "API Integration",
      "RESTful APIs",
      "WebSockets",
      "OAuth",
    ],
  },
  {
    title: "Integrations & Services",
    skills: [
      "Stripe SDK",
      "PayPal",
      "Google Maps API",
      "Push Notifications (Firebase)",
      "OneSignal",
      "Location-Based Services",
      "Thermal Printer",
      "Social Logins",
    ],
  },
  {
    title: "Web & Tools",
    skills: [
      "React",
      "Next.js",
      "Postman",
      "Git & GitHub",
      "Sentry",
      "Agile/Scrum",
      "Source Tree",
    ],
  },
];

export const services: Service[] = [
  {
    title: "React Native App Development",
    description:
      "End-to-end cross-platform mobile apps with React Native & Expo — UI/UX, navigation, state management, and role-based interfaces.",
    icon: "mobile",
  },
  {
    title: "iOS & Android Deployment",
    description:
      "Full App Store & Play Store deployment — TestFlight builds, Xcode configuration, build issue resolution, and production releases.",
    icon: "deploy",
  },
  {
    title: "API & Firebase Integration",
    description:
      "RESTful API integration, Firebase Firestore/Realtime Database, OAuth social logins, and real-time data sync.",
    icon: "integration",
  },
  {
    title: "Payment Gateway Integration",
    description:
      "Secure payment flows with Stripe SDK and PayPal — checkout, subscriptions, and guest/logged-in user handling.",
    icon: "payment",
  },
  {
    title: "Push Notifications",
    description:
      "Firebase Cloud Messaging and OneSignal integration for targeted push notifications on iOS and Android.",
    icon: "notification",
  },
  {
    title: "Maps & Location Services",
    description:
      "Google Maps API integration, geolocation, property navigation, and location-based features for mobile apps.",
    icon: "map",
  },
];

export const navLinks = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
];

export const heroTechOrbit = ["Expo", "RN", "Firebase", "RTK", "Stripe", "Maps"];

export const marqueeTech = [
  "React Native",
  "Expo",
  "TypeScript",
  "Firebase",
  "Redux Toolkit",
  "RTK Query",
  "Stripe",
  "Google Maps",
  "OneSignal",
  "WebSockets",
  "OAuth",
  "iOS",
  "Android",
];

export const liveApps = projects.filter((p) => p.androidUrl && p.iosUrl);
