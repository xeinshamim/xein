import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "@/pages/Index";
import About from "@/pages/About";
import Articles from "@/pages/Articles";
import Article from "@/pages/Article";
import Notes from "@/pages/Notes";
import Note from "@/pages/Note";
import Projects from "@/pages/Projects";
import ProjectDemo from "@/pages/ProjectDemo";
import Contact from "@/pages/Contact";
import Privacy from "@/pages/Privacy";
import Imprint from "@/pages/Imprint";
import NotFound from "@/pages/NotFound";
import { useTheme } from "@/components/theme-provider";

function App() {
  const { theme } = useTheme();

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:id" element={<Article />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/notes/:id" element={<Note />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/demos/:demoType" element={<ProjectDemo />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/imprint" element={<Imprint />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;