import Header from "@/components/Header";
import WorkSection from "@/components/WorkSection";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Work · Selected Projects",
  description: "Featured design systems, product UX, and engineering projects.",
};

export default function WorkPage() {
  return (
    <>
      <Header />
      <main id="main" className="w-full flex flex-col items-center pt-24 sm:pt-32 min-h-[85vh]">
        <WorkSection />
      </main>
      <Footer />
    </>
  );
}
