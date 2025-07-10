
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Calendar, Clock } from "lucide-react";
import Markdown from "react-markdown";
import NotFound from "./NotFound";
import { articles } from "@/data/articles";
import { loadArticleContent } from "@/utils/contentLoader";
import { validateRouteId } from "@/lib/validation";

const Article = () => {
  const { id } = useParams();
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);
  
  // Validate the ID parameter
  const validatedId = validateRouteId(id);
  const article = validatedId ? articles.find((a) => a.id === validatedId) : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const loadContent = async () => {
      if (article && validatedId) {
        setLoading(true);
        const articleContent = await loadArticleContent(validatedId);
        setContent(articleContent);
        setLoading(false);
      }
    };
    loadContent();
  }, [article, validatedId]);

  // Return 404 for invalid IDs or non-existent articles
  if (!validatedId || !article) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen gradient-bg">
      <Navbar />
      <main className="container mx-auto px-4 py-20">
        <article className="max-w-4xl mx-auto animate-slide-in">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 gradient-text hover-lift">
              {article.title}
            </h1>
            <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
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
          </div>
          <div className="card">
            <div className="card-content prose dark:prose-invert max-w-none">
              {loading ? (
                <div className="flex justify-center items-center py-8">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                </div>
              ) : (
                <Markdown>{content}</Markdown>
              )}
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default Article;
