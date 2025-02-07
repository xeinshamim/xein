
import { useState, useEffect } from "react";
import { ArrowRight, Calendar, Tag } from "lucide-react";
import { Link } from "react-router-dom";
import { loadNotes } from "@/utils/contentLoader";
import type { NoteMeta } from "@/utils/contentLoader";

const LatestNotes = () => {
  const [latestNotes, setLatestNotes] = useState<NoteMeta[]>([]);

  useEffect(() => {
    const fetchNotes = async () => {
      const notes = await loadNotes();
      const sortedNotes = notes
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .slice(0, 3);
      setLatestNotes(sortedNotes);
    };

    fetchNotes();
  }, []);

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold">Latest Notes</h2>
          <Link to="/notes">
            <button className="group inline-flex items-center text-primary hover:text-primary/80 transition-colors">
              View All
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </Link>
        </div>
        <div className="space-y-6">
          {latestNotes.map((note) => (
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
              <h3 className="text-2xl font-semibold mb-3 group">
                <Link
                  to={`/notes/${note.id}`}
                  className="hover:text-primary transition-colors"
                >
                  {note.title}
                </Link>
              </h3>
              <p className="text-muted-foreground mb-4 line-clamp-2">
                {note.excerpt}
              </p>
              <Link to={`/notes/${note.id}`} className="inline-flex items-center text-primary hover:text-primary/80 transition-colors">
                Read More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestNotes;
