
import type { Note } from '@/types';
import { loadAllNotes } from "@/utils/contentLoader";

// Default notes data - will be replaced by markdown data when available
const defaultNotes: Note[] = [
  {
    id: 1,
    title: "Getting Started with React Hooks",
    content: "",
    excerpt: "Learn the fundamentals of React Hooks and how to implement them in your projects.",
    date: "2024-02-20",
    tags: ["React", "Hooks", "JavaScript"],
  },
  {
    id: 2,
    title: "TypeScript Best Practices",
    content: "",
    excerpt: "Essential TypeScript patterns and practices for writing better code.",
    date: "2024-02-18",
    tags: ["TypeScript", "JavaScript", "Programming"],
  },
  {
    id: 3,
    title: "Modern CSS Layout Techniques",
    content: "",
    excerpt: "Explore modern CSS layout techniques including Grid and Flexbox.",
    date: "2024-02-15",
    tags: ["CSS", "Web Design", "Layout"],
  },
  {
    id: 4,
    title: "Youre Awesome" ,
    content: "",
    excerpt: "Youre doing your best." ,
    date: "2025-07-11" ,
    tags: ["best", "awesome"],
  }
];

// Dynamic notes loading
let notesCache: Note[] | null = null;

export const getNotes = async (): Promise<Note[]> => {
  if (notesCache) return notesCache;
  
  try {
    const markdownNotes = await loadAllNotes();
    notesCache = markdownNotes.length > 0 ? markdownNotes : defaultNotes;
    return notesCache;
  } catch (error) {
    console.error('Failed to load notes from markdown:', error);
    return defaultNotes;
  }
};

// For synchronous access (fallback)
export const notes = defaultNotes;
