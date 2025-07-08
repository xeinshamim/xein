
import { getArticles } from "@/data/articles";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { FileText, Calendar, Clock, Tag } from "lucide-react";
import { useState, useEffect } from "react";

const Articles = () => {
  const [articles, setArticles] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadArticles = async () => {
      try {
        const articlesData = await getArticles();
        setArticles(articlesData);
      } catch (error) {
        console.error('Failed to load articles:', error);
      } finally {
        setLoading(false);
      }
    };
    loadArticles();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">Articles</h1>
          {loading ? (
            <div className="flex justify-center items-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
            </div>
          ) : (
            <div className="space-y-8">
              {articles.map((article) => (
              <article
                key={article.id}
                className="bg-card hover:bg-accent/5 border border-border/50 rounded-lg p-6 transition-all duration-200 hover:-translate-y-1"
              >
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <span className="inline-flex items-center px-3 py-1 bg-primary/10 rounded-full text-sm">
                    <Tag className="w-3 h-3 mr-1" />
                    {article.category}
                  </span>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <time>{article.date}</time>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{article.readingTime}</span>
                  </div>
                </div>
                <h2 className="text-2xl font-semibold mb-3">
                  <Link
                    to={`/articles/${article.id}`}
                    className="hover:text-[#0EA5E9] transition-colors duration-300"
                  >
                    {article.title}
                  </Link>
                </h2>
                <p className="text-muted-foreground mb-4 line-clamp-2">
                  {article.excerpt}
                </p>
                <Link to={`/articles/${article.id}`}>
                  <Button variant="ghost" className="group">
                    Read More
                    <FileText className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </article>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Articles;
