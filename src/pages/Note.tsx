
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { notes } from "@/data/notes";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Markdown from "react-markdown";
import NotFound from "./NotFound";
import { loadNoteContent } from "@/utils/contentLoader";
import { validateRouteId } from "@/lib/validation";

const Note = () => {
  const { id } = useParams();
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);
  
  // Validate the ID parameter
  const validatedId = validateRouteId(id);
  const note = validatedId ? notes.find((n) => n.id === validatedId) : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const loadContent = async () => {
      if (note && validatedId) {
        setLoading(true);
        const noteContent = await loadNoteContent(validatedId);
        setContent(noteContent);
        setLoading(false);
      }
    };
    loadContent();
  }, [note, validatedId]);

  // Return 404 for invalid IDs or non-existent notes
  if (!validatedId || !note) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen gradient-bg">
      <Navbar />
      <main className="container mx-auto px-4 py-20">
        <article className="max-w-4xl mx-auto animate-slide-in">
          <div className="mb-8">
            <div className="flex flex-wrap gap-2 mb-4">
              {note.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-primary/10 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
            <time className="text-sm text-muted-foreground block mb-2">
              {note.date}
            </time>
            <h1 className="text-4xl font-bold gradient-text hover-lift">
              {note.title}
            </h1>
          </div>
          <div className="card">
            <div className="card-content prose dark:prose-invert max-w-none">
              {loading ? (
                <div className="flex justify-center items-center py-8">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                </div>
              ) : (
                <Markdown>{content}</Markdown>
              )}
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default Note;
