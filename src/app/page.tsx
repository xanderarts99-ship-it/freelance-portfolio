import { About } from "@/components/sections/about/About";
import { BusinessSections } from "@/components/sections/business/BusinessSections";
import { Contact } from "@/components/sections/contact/Contact";
import { Hero } from "@/components/sections/hero/Hero";
import { Projects } from "@/components/sections/project/Projects";
import { Certifications } from "@/components/sections/certifications/Certifications";
import { StructuredData } from "@/components/seo/StructuredData";

const HomePage = () => {
  return (
    <main className="">
      <StructuredData />
      <Hero />
      <BusinessSections />
      <Projects />
      <About />
      <Certifications />
      <Contact />
    </main>
  );
};
export default HomePage;
