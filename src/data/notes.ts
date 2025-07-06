
import type { Note } from '@/types';

export const notes: Note[] = [
  {
    id: 1,
    title: "Getting Started with React Hooks",
    content: "", // Content will be loaded dynamically from markdown file
    excerpt: "Learn the fundamentals of React Hooks and how to implement them in your projects.",
    date: "2024-02-20",
    tags: ["React", "Hooks", "JavaScript"],
  },
  {
    id: 2,
    title: "TypeScript Best Practices",
    content: "", // Content will be loaded dynamically from markdown file
    excerpt: "Essential TypeScript patterns and practices for writing better code.",
    date: "2024-02-18",
    tags: ["TypeScript", "JavaScript", "Programming"],
  },
  {
    id: 3,
    title: "Modern CSS Layout Techniques",
    content: "", // Content will be loaded dynamically from markdown file
    excerpt: "Explore modern CSS layout techniques including Grid and Flexbox.",
    date: "2024-02-15",
    tags: ["CSS", "Web Design", "Layout"],
  }
];
