
export interface Note {
  id: number;
  title: string;
  content: string;
  excerpt: string;
  date: string;
  tags: string[];
}

export interface Article {
  id: number;
  title: string;
  content: string;
  excerpt: string;
  date: string;
  category: string;
  readingTime: string;
}
