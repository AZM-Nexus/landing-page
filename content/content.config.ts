export interface StatBlock {
  value: string;
  label: string;
}

export interface PortfolioCard {
  title: string;
  description: string;
  imageUrl: string;
  badge: string;
  iconName: string;
}

export interface OperationsCard {
  title: string;
  description: string;
  status: "Active" | "In Progress";
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
}

export interface ContactDetail {
  icon: string;
  label: string;
  value: string;
  href?: string;
}

export const COMMON_CONTENT = {
  wordmark: "AZM Nexus",
  copyright: "© 2026 AZM Nexus Limited. All rights reserved.",
};

export const NAV_CONTENT = {
  ctaText: "Partner With Us",
  links: [
    { label: "About Us", href: "#about" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Operations", href: "#operations" },
    { label: "Team", href: "#team" },
    { label: "Contact", href: "#contact" },
  ],
};

export const HERO_CONTENT = {
  label: "DIVERSIFIED. EXECUTION-DRIVEN. NATIONAL.",
  headline: "Building Enterprises That Move Nigeria Forward",
  subtext: "AZM Nexus Limited is a diversified holding company with active operations across technology, digital health, agriculture, trade, and digital asset sectors — delivering measurable progress across Nigerian markets.",
  ctaPrimary: "Explore Our Portfolio",
  ctaSecondary: "Contact Our Team",
  stats: [
    { value: "6", label: "Business Sectors" },
    { value: "National", label: "Operating Footprint" },
    { value: "Active", label: "Operations Status" },
  ],
  // TODO: replace with actual image
  backgroundImage: "/images/Hero_Image.jpeg",
};

export const PORTFOLIO_CONTENT = {
  label: "WHAT WE DO",
  title: "Our Business Portfolio",
  subtext: "We strategically operate across high-impact sectors, ensuring stability, compliance, and growth in every venture.",
  cards: [
    {
      title: "Technology Services",
      description: "Delivering robust digital infrastructure and enterprise solutions. We build scalable technology to support modern business operations.",
      imageUrl: "/images/Technology_Services.jpeg",
      badge: "Active Sector",
      iconName: "Monitor",
    },
    {
      title: "Digital Health",
      description: "Innovating healthcare delivery through digital platforms. Enhancing accessibility and operational efficiency in medical services.",
      imageUrl: "/images/Digital_Health.jpeg",
      badge: "Active Sector",
      iconName: "Stethoscope",
    },
    {
      title: "Agriculture & Agribusiness",
      description: "Investing in sustainable farming and agricultural processing. Securing food supply chains and driving rural economic growth.",
      imageUrl: "/images/Agriculture_and_Agribusiness.jpeg",
      badge: "Active Sector",
      iconName: "Sprout",
    },
    {
      title: "General Trade & Household Retail",
      description: "Managing diverse retail operations and household goods distribution. Meeting consumer needs with reliable supply networks.",
      imageUrl: "/images/General_Trade_and_Household_Retail.jpeg",
      badge: "Active Sector",
      iconName: "Store",
    },
    {
      title: "Bulk Agricultural Trade",
      description: "Facilitating large-scale movement of agricultural commodities. Ensuring efficient logistics and market access.",
      imageUrl: "/images/Bulk_Agricultural_Trade.jpeg",
      badge: "Active Sector",
      iconName: "Truck",
    },
    {
      title: "P2P Digital Asset Trading",
      description: "Providing secure platforms for peer-to-peer asset exchange. Navigating the digital economy with compliance and trust.",
      imageUrl: "/images/P2P_Digital_Asset_Trading.jpeg",
      badge: "Active Sector",
      iconName: "RefreshCw",
    },
  ],
};

export const OPERATIONS_CONTENT = {
  label: "OPERATIONAL PROGRESS",
  title: "Visible Progress Across Every Sector",
  subtext: "We keep operational momentum visible across core sectors, tracking deployment status and execution milestones.",
  legend: "Active indicates fully operational businesses, while In Progress indicates initiatives moving toward launch.",
  cards: [
    {
      title: "Agriculture",
      description: "Supply chain established and initial harvests processed, driving farm-to-market distribution.",
      status: "Active",
    },
    {
      title: "Trade",
      description: "Distribution networks are operational across key regions, enabling reliable goods movement.",
      status: "Active",
    },
    {
      title: "Tech/Health",
      description: "Platform development and partner onboarding continue as the service prepares for launch.",
      status: "In Progress",
    },
    {
      title: "Digital Assets",
      description: "Trading protocols are live, with compliance frameworks being reinforced for scale.",
      status: "Active",
    },
  ] as OperationsCard[],
};

export const TICKER_CONTENT = [
  "Technology Services",
  "Digital Health",
  "Agriculture & Agribusiness",
  "General Trade",
  "Bulk Agricultural Trade",
  "P2P Digital Asset Trading",
  "Lagos & Beyond",
  "Execution-Driven",
];

export const TEAM_CONTENT = {
  label: "OUR PEOPLE",
  title: "Leadership & Key Contributors",
  subtext: "A capable, experienced team managing AZM Nexus's diversified operations with focus and accountability.",
  members: [
    { name: "[Executive Name]", role: "Chief Executive Officer", bio: "Strategic direction and corporate governance oversight.", imageUrl: "" },
    { name: "[Executive Name]", role: "Head of Technology", bio: "Managing digital infrastructure and tech service deployment.", imageUrl: "" },
    { name: "[Executive Name]", role: "Head of Agriculture & Trade", bio: "Directing supply chains and agricultural bulk logistics.", imageUrl: "" },
    { name: "[Executive Name]", role: "Digital Asset Operations Lead", bio: "Overseeing P2P trading platforms and compliance protocols.", imageUrl: "" },
  ],
  footerText: "More team members coming soon →",
};

export const CONTACT_CONTENT = {
  title: "Let's Build Something Together",
  subtext: "Whether you are a partner, investor, institution, or client — we welcome serious inquiries across all our business sectors.",
  details: [
    {
      icon: "MapPin",
      label: "Corporate Office",
      value: "Lagos, Nigeria",
      href: "https://www.google.com/maps/search/?api=1&query=Lagos%2C+Nigeria",
    },
    {
      icon: "Mail",
      label: "Email Inquiries",
      value: "info@azmnexus.com",
      href: "mailto:info@azmnexus.com",
    },
    {
      icon: "Phone",
      label: "Direct Line",
      value: "+234 901 557 1955",
      href: "tel:+2349015571955",
    },
  ],
  form: {
    fullNameLabel: "Full Name",
    fullNamePlaceholder: "Enter your full name",
    emailLabel: "Email Address",
    emailPlaceholder: "Enter your email address",
    companyLabel: "Company / Organisation",
    companyPlaceholder: "Organization name",
    inquiryTypeLabel: "Inquiry Type",
    inquiryTypeOptions: ["Partnership", "Investment", "Service Request", "General"],
    messageLabel: "Message",
    messagePlaceholder: "How can we assist you?",
    submitButton: "Send Inquiry",
  },
};

export const FOOTER_LINKS = [
  { label: "About", href: "#about" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];
