import { useState, useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, Clock, ChevronRight } from "lucide-react";

interface Article {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readingTime: string;
}

const Articles = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    // In a real application, this would be an API call
    // For now, we'll simulate loading the markdown files
    const loadArticles = async () => {
      const articles = [
        {
          id: 1,
          title: "Building Scalable Web Applications",
          excerpt: "Learn how to architect web applications that can scale with your user base.",
          date: "2024-02-19",
          category: "Architecture",
          readingTime: "8 min read"
        },
        {
          id: 2,
          title: "The Future of Web Development",
          excerpt: "Exploring upcoming trends and technologies in web development.",
          date: "2024-02-17",
          category: "Technology",
          readingTime: "6 min read"
        }
      ];
      setArticles(articles);
    };

    loadArticles();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-20 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-center">Articles</h1>
        <div className="space-y-8">
          {articles.map((article) => (
            <article
              key={article.id}
              className="bg-card hover:bg-accent/5 border border-border/50 rounded-lg p-6 transition-colors duration-200"
            >
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                <span className="px-3 py-1 bg-primary/10 rounded-full">
                  {article.category}
                </span>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <time>{article.date}</time>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{article.readingTime}</span>
                </div>
              </div>
              <h2 className="text-2xl font-semibold mb-3 text-foreground">
                {article.title}
              </h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {article.excerpt}
              </p>
              <Link to={`/articles/${article.id}`}>
                <Button variant="ghost" className="group">
                  Read More
                  <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </article>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Articles;