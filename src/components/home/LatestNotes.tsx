
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { getNotes } from "@/data/notes";
import { useState, useEffect } from "react";

const LatestNotes = () => {
  const [latestNotes, setLatestNotes] = useState<any[]>([]);

  useEffect(() => {
    const loadLatestNotes = async () => {
      try {
        const notes = await getNotes();
        const latest = [...notes]
          .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
          .slice(0, 3);
        setLatestNotes(latest);
      } catch (error) {
        console.error('Failed to load latest notes:', error);
      }
    };
    loadLatestNotes();
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {latestNotes.map((note) => (
            <article
              key={note.id}
              className="bg-card hover:bg-accent/5 border border-border/50 p-6 rounded-lg transition-all duration-200 hover:-translate-y-1 animate-fade-in"
            >
              <div className="flex flex-wrap gap-2 mb-3">
                {note.tags.slice(0, 2).map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-accent text-accent-foreground rounded-full text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <time className="text-sm text-muted-foreground">{note.date}</time>
              <Link to={`/notes/${note.id}`}>
                <h3 className="text-xl font-semibold mt-2 mb-3 hover:text-[#0EA5E9] transition-colors duration-300">
                  {note.title}
                </h3>
              </Link>
              <p className="text-muted-foreground mb-4 line-clamp-2">
                {note.excerpt}
              </p>
              <Link 
                to={`/notes/${note.id}`}
                className="inline-flex items-center text-primary hover:text-primary/80 transition-colors group"
              >
                Read More
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestNotes;
