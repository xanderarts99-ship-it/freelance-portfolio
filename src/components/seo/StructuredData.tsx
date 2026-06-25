const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Alexander Olomukoro",
  url: "https://www.olomukoro.uk",
  image: "https://www.olomukoro.uk/profile-optimized.webp",
  email: "mailto:swankylex@gmail.com",
  founder: {
    "@type": "Person",
    name: "Alexander Olomukoro",
    jobTitle: "Freelance Web Developer and AI Integration Specialist",
    url: "https://www.olomukoro.uk",
    sameAs: [
      "https://github.com/xandersavage",
      "https://www.linkedin.com/in/alexander-olomukoro-699255199/",
      "https://x.com/xandersavage7",
    ],
  },
  areaServed: ["Nigeria", "United States", "United Kingdom", "Worldwide"],
  priceRange: "$$",
  serviceType: [
    "Company websites",
    "CMS websites",
    "SaaS landing pages",
    "AI workflow prototypes",
    "Web application development",
  ],
  description:
    "Freelance web and AI development service for businesses that need websites, CMS platforms, SaaS landing pages, and AI-enabled web tools.",
};

export function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
