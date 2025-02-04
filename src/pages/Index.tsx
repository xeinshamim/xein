import Hero from "@/components/home/Hero";
import LatestNotes from "@/components/home/LatestNotes";
import LatestArticles from "@/components/home/LatestArticles";
import AboutPreview from "@/components/home/AboutPreview";
import ProjectsPreview from "@/components/home/ProjectsPreview";
import Contact from "@/components/home/Contact";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <LatestNotes />
        <LatestArticles />
        <AboutPreview />
        <ProjectsPreview />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;