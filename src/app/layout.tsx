import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme/theme-provider";
import DockDemo from "@/components/navigation/portfolio-dock";
import "./globals.css";
import { Space_Mono, Roboto } from "next/font/google";

// For headings - Cardo is an elegant serif font
const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"], // Cardo is available in regular and bold
  display: "swap",
  variable: "--font-space-mono",
});

// For body text - Roboto is clean and highly readable
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.olomukoro.uk"),
  title: {
    default:
      "Alexander Olomukoro | Freelance Web Developer & AI Integration Specialist",
    template: "%s | Alexander Olomukoro",
  },
  description:
    "Freelance web developer helping startups and growing businesses launch fast websites, CMS-powered company sites, SaaS landing pages, and AI-enabled web tools.",
  applicationName: "Alexander Olomukoro Portfolio",
  authors: [{ name: "Alexander Olomukoro", url: "https://www.olomukoro.uk" }],
  creator: "Alexander Olomukoro",
  publisher: "Alexander Olomukoro",
  keywords: [
    "freelance web developer",
    "Next.js developer",
    "React developer",
    "CMS website developer",
    "SaaS landing page developer",
    "AI integration developer",
    "Nigeria freelance developer",
    "web developer for startups",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.olomukoro.uk",
    siteName: "Alexander Olomukoro",
    title:
      "Alexander Olomukoro | Freelance Web Developer & AI Integration Specialist",
    description:
      "Websites, CMS platforms, SaaS landing pages, and AI-enabled web tools built with clear communication and production-ready execution.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Alexander Olomukoro freelance web and AI development services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Alexander Olomukoro | Freelance Web Developer & AI Integration Specialist",
    description:
      "I build websites, CMS platforms, SaaS landing pages, and AI-enabled web tools for clients who want clarity from discovery to launch.",
    images: ["/opengraph-image"],
    creator: "@xandersavage7",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${spaceMono.variable} ${roboto.variable}`}
    >
      <body className="relative min-h-screen font-sans">
        <ThemeProvider>
          {children}
          <div className="fixed bottom-8 left-0 right-0 flex justify-center z-50">
            <DockDemo />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
