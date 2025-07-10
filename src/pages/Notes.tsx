import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getNotes } from "@/data/notes"; // IMPORTANT: Changed to import 'getNotes' function
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Markdown from "react-markdown";
import NotFound from "./NotFound";
import { loadNoteContent } from "@/utils/contentLoader";
import { validateRouteId } from "@/lib/validation";
import type { Note as NoteType } from '@/types'; // Import Note type to avoid conflict with component name

const Note = () => {
  const { id } = useParams();
  const [content, setContent] = useState("");
  const [loadingContent, setLoadingContent] = useState(true); // Renamed to avoid conflict with loadingNotes
  const [allNotes, setAllNotes] = useState<NoteType[]>([]); // State to hold all loaded notes
  const [loadingNotes, setLoadingNotes] = useState(true); // State for loading all notes
  
  // Validate the ID parameter
  const validatedId = validateRouteId(id);

  // Effect to load all notes (including Markdown ones)
  useEffect(() => {
    const fetchAllNotes = async () => {
      setLoadingNotes(true);
      const fetchedNotes = await getNotes(); // Call the async function to get all notes
      setAllNotes(fetchedNotes);
      setLoadingNotes(false);
    };
    fetchAllNotes();
  }, []); // Run once on component mount

  // Find the specific note from the loaded 'allNotes'
  // This will re-evaluate when allNotes or validatedId changes
  const note = allNotes.find((n) => n.id === validatedId);

  // Effect to scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Effect to load the content of the specific note
  useEffect(() => {
    const loadIndividualNoteContent = async () => {
      // Only load content if allNotes are loaded, a note is found, and validatedId exists
      if (!loadingNotes && note && validatedId) {
        setLoadingContent(true);
        const noteContent = await loadNoteContent(validatedId);
        setContent(noteContent);
        setLoadingContent(false);
      }
    };
    loadIndividualNoteContent();
  }, [loadingNotes, note, validatedId]); // Dependencies: re-run when notes are loaded or note/id changes

  // Show loading state for notes list first
  if (loadingNotes) {
    return (
      <div className="min-h-screen gradient-bg flex justify-center items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  // Return 404 for invalid IDs or non-existent notes after all notes have been loaded
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
              {loadingContent ? ( // Use loadingContent for individual note content
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
