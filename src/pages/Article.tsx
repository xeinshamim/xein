import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock } from "lucide-react";
import Markdown from "react-markdown";
import NotFound from "./NotFound";

interface Article {
  id: number;
  title: string;
  content: string;
  date: string;
  category: string;
  readingTime: string;
}

const Article = () => {
  const { id } = useParams();
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real application, this would fetch the markdown file
    // For now, we'll simulate loading the content
    const loadArticle = async () => {
      try {
        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 500));
        
        const article = {
          id: Number(id),
          title: "Building Scalable Web Applications",
          content: `# Building Scalable Web Applications\n\nCreating scalable web applications requires careful planning...`,
          date: "2024-02-19",
          category: "Architecture",
          readingTime: "8 min read"
        };
        
        setArticle(article);
      } catch (error) {
        console.error("Error loading article:", error);
      } finally {
        setLoading(false);
      }
    };

    loadArticle();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <main className="container mx-auto px-4 py-20">
          <div className="animate-pulse space-y-4">
            <div className="h-8 bg-muted rounded w-3/4 mx-auto"></div>
            <div className="h-4 bg-muted rounded w-1/4 mx-auto"></div>
            <div className="h-64 bg-muted rounded max-w-4xl mx-auto"></div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!article) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-20">
        <article className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
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
          <Card>
            <CardContent className="p-8">
              <div className="prose dark:prose-invert max-w-none">
                <Markdown>{article.content}</Markdown>
              </div>
            </CardContent>
          </Card>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default Article;