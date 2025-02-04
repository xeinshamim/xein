import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const LatestNotes = () => {
  const notes = [
    {
      id: 1,
      title: "Getting Started with React",
      excerpt: "Learn the basics of React and how to build your first component.",
      date: "2024-02-20",
    },
    {
      id: 2,
      title: "Understanding TypeScript",
      excerpt: "A comprehensive guide to TypeScript fundamentals.",
      date: "2024-02-18",
    },
    {
      id: 3,
      title: "Modern CSS Techniques",
      excerpt: "Exploring the latest CSS features and best practices.",
      date: "2024-02-15",
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold">Latest Notes</h2>
          <Link to="/notes">
            <Button variant="ghost" className="group">
              View All
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {notes.map((note) => (
            <article
              key={note.id}
              className="glass p-6 rounded-lg transition-transform hover:-translate-y-1"
            >
              <time className="text-sm text-muted-foreground">{note.date}</time>
              <h3 className="text-xl font-semibold mt-2 mb-3">{note.title}</h3>
              <p className="text-muted-foreground mb-4">{note.excerpt}</p>
              <Link to={`/notes/${note.id}`}>
                <Button variant="link" className="p-0">
                  Read More
                </Button>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestNotes;