
import { useState, useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, Clock, ChevronRight } from "lucide-react";
import { loadArticles } from "@/utils/contentLoader";
import type { ArticleMeta } from "@/utils/contentLoader";

const Articles = () => {
  const [articles, setArticles] = useState<ArticleMeta[]>([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const loadedArticles = await loadArticles();
      setArticles(loadedArticles);
    };

    fetchArticles();
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
                <Link
                  to={`/articles/${article.id}`}
                  className="hover:text-primary transition-colors"
                >
                  {article.title}
                </Link>
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
