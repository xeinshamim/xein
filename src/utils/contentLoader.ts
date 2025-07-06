
import { Article, Note } from '@/types';

// Load markdown content for articles
export const loadArticleContent = async (id: number): Promise<string> => {
  try {
    const response = await fetch(`/src/content/articles/${getArticleFilename(id)}`);
    if (!response.ok) return '';
    const content = await response.text();
    // Remove frontmatter if present
    return content.replace(/^---[\s\S]*?---\n/, '');
  } catch (error) {
    console.error(`Failed to load article content for ID ${id}:`, error);
    return '';
  }
};

// Load markdown content for notes
export const loadNoteContent = async (id: number): Promise<string> => {
  try {
    const response = await fetch(`/src/content/notes/${getNoteFilename(id)}`);
    if (!response.ok) return '';
    const content = await response.text();
    // Remove frontmatter if present
    return content.replace(/^---[\s\S]*?---\n/, '');
  } catch (error) {
    console.error(`Failed to load note content for ID ${id}:`, error);
    return '';
  }
};

// Helper function to get article filename by ID
const getArticleFilename = (id: number): string => {
  const filenames: { [key: number]: string } = {
    1: 'building-scalable-web-applications.md',
    2: 'future-of-web-development.md',
    3: 'mastering-css-grid-layout.md',
    4: 'introduction-to-web-security.md',
    5: 'optimizing-react-performance.md',
    6: 'advanced-typescript-patterns.md',
    7: 'serverless-architecture-patterns.md'
  };
  return filenames[id] || '';
};

// Helper function to get note filename by ID
const getNoteFilename = (id: number): string => {
  const filenames: { [key: number]: string } = {
    1: 'getting-started-with-react-hooks.md',
    2: 'typescript-best-practices.md',
    3: 'modern-css-layout.md'
  };
  return filenames[id] || '';
};
