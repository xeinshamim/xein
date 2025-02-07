
export interface ContentMeta {
  id: number;
  title: string;
  excerpt: string;
  date: string;
}

export interface NoteMeta extends ContentMeta {
  tags: string[];
}

export interface ArticleMeta extends ContentMeta {
  category: string;
  readingTime: string;
}

export const loadNotes = async () => {
  const notes = import.meta.glob('../content/notes/*.md', { eager: true });
  return Object.entries(notes).map(([_, note]: [string, any]) => ({
    id: note.frontmatter.id,
    title: note.frontmatter.title,
    excerpt: note.frontmatter.excerpt,
    date: note.frontmatter.date,
    tags: note.frontmatter.tags,
    content: note.default
  }));
};

export const loadArticles = async () => {
  const articles = import.meta.glob('../content/articles/*.md', { eager: true });
  return Object.entries(articles).map(([_, article]: [string, any]) => ({
    id: article.frontmatter.id,
    title: article.frontmatter.title,
    excerpt: article.frontmatter.excerpt,
    date: article.frontmatter.date,
    category: article.frontmatter.category,
    readingTime: article.frontmatter.readingTime,
    content: article.default
  }));
};
