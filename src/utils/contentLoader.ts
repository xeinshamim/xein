
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
    id: note.attributes.id,
    title: note.attributes.title,
    excerpt: note.attributes.excerpt,
    date: note.attributes.date,
    tags: note.attributes.tags,
    content: note.html
  }));
};

export const loadArticles = async () => {
  const articles = import.meta.glob('../content/articles/*.md', { eager: true });
  return Object.entries(articles).map(([_, article]: [string, any]) => ({
    id: article.attributes.id,
    title: article.attributes.title,
    excerpt: article.attributes.excerpt,
    date: article.attributes.date,
    category: article.attributes.category,
    readingTime: article.attributes.readingTime,
    content: article.html
  }));
};
