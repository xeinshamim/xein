import { useParams } from "react-router-dom";
import { notes } from "@/data/notes";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Markdown from "react-markdown";
import NotFound from "./NotFound";

const Note = () => {
  const { id } = useParams();
  const note = notes.find((n) => n.id === Number(id));

  if (!note) {
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
              <Markdown>{note.content}</Markdown>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default Note;