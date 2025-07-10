import { Article, Note } from '@/types';

// Parse frontmatter from markdown content
const parseFrontmatter = (content: string) => {
  const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---\n/);
  if (!frontmatterMatch) return { frontmatter: {}, content };
  
  const frontmatterText = frontmatterMatch[1];
  const frontmatter: any = {};
  
  frontmatterText.split('\n').forEach(line => {
    const [key, ...values] = line.split(':');
    if (key && values.length) {
      const value = values.join(':').trim();
      if (value.startsWith('"') && value.endsWith('"')) {
        frontmatter[key.trim()] = value.slice(1, -1);
      } else if (value.startsWith('[') && value.endsWith(']')) {
        frontmatter[key.trim()] = value.slice(1, -1).split(',').map(v => v.trim().replace(/"/g, ''));
      } else {
        frontmatter[key.trim()] = isNaN(Number(value)) ? value : Number(value);
      }
    }
  });
  
  return {
    frontmatter,
    content: content.replace(/^---\n[\s\S]*?\n---\n/, '')
  };
};

// Load markdown content for articles
export const loadArticleContent = async (id: number): Promise<string> => {
  try {
    const filename = getArticleFilename(id);
    if (!filename) {
      console.warn(`No filename mapping found for article ID ${id}`);
      return '';
    }
    
    const response = await fetch(`/content/articles/${filename}`);
    if (!response.ok) return '';
    const content = await response.text();
    const { content: markdownContent } = parseFrontmatter(content);
    return markdownContent;
  } catch (error) {
    console.error(`Failed to load article content for ID ${id}:`, error);
    return '';
  }
};

// Load markdown content for notes
export const loadNoteContent = async (id: number): Promise<string> => {
  try {
    const filename = getNoteFilename(id);
    if (!filename) {
      console.warn(`No filename mapping found for note ID ${id}`);
      return '';
    }
    
    const response = await fetch(`/content/notes/${filename}`);
    if (!response.ok) return '';
    const content = await response.text();
    const { content: markdownContent } = parseFrontmatter(content);
    return markdownContent;
  } catch (error) {
    console.error(`Failed to load note content for ID ${id}:`, error);
    return '';
  }
};

// Load and parse all articles from markdown files
export const loadAllArticles = async (): Promise<Article[]> => {
  const articleFiles = [
    'building-scalable-web-applications.md',
    'future-of-web-development.md',  
    'mastering-css-grid-layout.md',
    'introduction-to-web-security.md',
    'optimizing-react-performance.md',
    'advanced-typescript-patterns.md',
    'serverless-architecture-patterns.md'
  ];

  const articles: Article[] = [];
  
  for (const filename of articleFiles) {
    try {
      const response = await fetch(`/content/articles/${filename}`);
      if (response.ok) {
        const content = await response.text();
        const { frontmatter } = parseFrontmatter(content);
        
        if (frontmatter.id) {
          articles.push({
            id: frontmatter.id,
            title: frontmatter.title || '',
            content: '',
            excerpt: frontmatter.excerpt || '',
            date: frontmatter.date || '',
            category: frontmatter.category || '',
            readingTime: frontmatter.readingTime || ''
          });
        }
      }
    } catch (error) {
      console.error(`Failed to load article ${filename}:`, error);
    }
  }
  
  return articles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

// Load and parse all notes from markdown files
export const loadAllNotes = async (): Promise<Note[]> => {
  const noteFiles = [
    'getting-started-with-react-hooks.md',
    'typescript-best-practices.md',
    'modern-css-layout.md',
    // Add your new note's filename here!
    'beautiful-lines-for-coders.md' // <--- ADD THIS LINE (or whatever your file is named)
  ];

  const notes: Note[] = [];
  
  for (const filename of noteFiles) {
    try {
      const response = await fetch(`/content/notes/${filename}`);
      if (response.ok) {
        const content = await response.text();
        const { frontmatter } = parseFrontmatter(content);
        
        if (frontmatter.id) {
          notes.push({
            id: frontmatter.id,
            title: frontmatter.title || '',
            content: '',
            excerpt: frontmatter.excerpt || '',
            date: frontmatter.date || '',
            tags: frontmatter.tags || []
          });
        }
      }
    } catch (error) {
      console.error(`Failed to load note ${filename}:`, error);
    }
  }
  
  return notes.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

// Helper function to get article filename by ID with bounds checking
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
  
  // Only return filename if ID exists in our mapping
  return filenames[id] || '';
};

// Helper function to get note filename by ID with bounds checking
const getNoteFilename = (id: number): string => {
  const filenames: { [key: number]: string } = {
    1: 'getting-started-with-react-hooks.md',
    2: 'typescript-best-practices.md',
    3: 'modern-css-layout.md',
    // Add your new note's ID and filename here if it has a specific ID mapping
    // For example, if your new note has id: 4
    4: 'beautiful-lines-for-coders.md' // <--- ADD THIS LINE (and update ID if needed)
  };
  
  // Only return filename if ID exists in our mapping
  return filenames[id] || '';
};
