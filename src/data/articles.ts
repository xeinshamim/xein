
import { Article } from "@/types";
import { loadAllArticles } from "@/utils/contentLoader";

// Default articles data - will be replaced by markdown data when available
const defaultArticles: Article[] = [
  {
    id: 1,
    title: "Building Scalable Web Applications",
    content: "",
    excerpt: "Learn how to architect web applications that can scale with your user base.",
    date: "2024-02-19",
    category: "Architecture",
    readingTime: "8 min read"
  },
  {
    id: 2,
    title: "The Future of Web Development",
    content: "",
    excerpt: "Exploring upcoming trends and technologies in web development.",
    date: "2024-02-17",
    category: "Technology",
    readingTime: "6 min read"
  },
  {
    id: 3,
    title: "Mastering CSS Grid Layout",
    content: "",
    excerpt: "A comprehensive guide to mastering CSS Grid Layout for modern web development.",
    date: "2024-02-15",
    category: "CSS",
    readingTime: "10 min read"
  },
  {
    id: 4,
    title: "Introduction to Web Security",
    content: "",
    excerpt: "Learn the fundamentals of web security and how to protect your applications.",
    date: "2024-02-13",
    category: "Security",
    readingTime: "12 min read"
  },
  {
    id: 5,
    title: "Optimizing React Performance",
    content: "",
    excerpt: "Learn advanced techniques for optimizing React application performance.",
    date: "2024-02-11",
    category: "React",
    readingTime: "15 min read"
  },
  {
    id: 6,
    title: "Advanced TypeScript Patterns",
    content: "",
    excerpt: "Explore advanced TypeScript patterns and improve your type system knowledge.",
    date: "2024-02-09",
    category: "TypeScript",
    readingTime: "10 min read"
  },
  {
    id: 7,
    title: "Serverless Architecture Patterns",
    content: "",
    excerpt: "Understand serverless architecture patterns and best practices.",
    date: "2024-02-07",
    category: "Architecture",
    readingTime: "8 min read"
  }
];

// Dynamic articles loading
let articlesCache: Article[] | null = null;

export const getArticles = async (): Promise<Article[]> => {
  if (articlesCache) return articlesCache;
  
  try {
    const markdownArticles = await loadAllArticles();
    articlesCache = markdownArticles.length > 0 ? markdownArticles : defaultArticles;
    return articlesCache;
  } catch (error) {
    console.error('Failed to load articles from markdown:', error);
    return defaultArticles;
  }
};

// For synchronous access (fallback)
export const articles = defaultArticles;
