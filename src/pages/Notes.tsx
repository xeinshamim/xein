
import { useState, useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { FileText, Calendar, Tag } from "lucide-react";
import { loadNotes } from "@/utils/contentLoader";
import type { NoteMeta } from "@/utils/contentLoader";

const Notes = () => {
  const [notes, setNotes] = useState<NoteMeta[]>([]);

  useEffect(() => {
    const fetchNotes = async () => {
      const loadedNotes = await loadNotes();
      setNotes(loadedNotes);
    };

    fetchNotes();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">Notes</h1>
          <div className="space-y-8">
            {notes.map((note) => (
              <article
                key={note.id}
                className="bg-card hover:bg-accent/5 border border-border/50 rounded-lg p-6 transition-all duration-200 hover:-translate-y-1"
              >
                <div className="flex flex-wrap gap-2 mb-4">
                  {note.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center px-3 py-1 bg-primary/10 rounded-full text-sm"
                    >
                      <Tag className="w-3 h-3 mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <Calendar className="w-4 h-4" />
                  <time>{note.date}</time>
                </div>
                <h2 className="text-2xl font-semibold mb-3 group">
                  <Link
                    to={`/notes/${note.id}`}
                    className="hover:text-primary transition-colors"
                  >
                    {note.title}
                  </Link>
                </h2>
                <p className="text-muted-foreground mb-4 line-clamp-2">
                  {note.excerpt}
                </p>
                <Link to={`/notes/${note.id}`}>
                  <Button variant="ghost" className="group">
                    Read More
                    <FileText className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Notes;
