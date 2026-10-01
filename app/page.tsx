import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WorkSection from "@/components/WorkSection";
import AISection from "@/components/AISection";
import ExperienceSection from "@/components/ExperienceSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main" className="flex flex-col items-center">
        <Hero />
        <WorkSection />
        <AISection />
        <ExperienceSection />
        <AboutSection />
      </main>
      <Footer />
    </>
  );
}
