import { useParams } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock } from "lucide-react";
import Markdown from "react-markdown";
import Comments from "@/components/Comments";
import NotFound from "./NotFound";
import { articles } from "@/data/articles";

const Article = () => {
  const { id } = useParams();
  const article = articles.find((a) => a.id === Number(id));

  if (!article) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen gradient-bg">
      <Navbar />
      <main className="container mx-auto px-4 py-20">
        <article className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 gradient-text">{article.title}</h1>
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
          <Card className="mb-12">
            <CardContent className="p-8">
              <div className="prose dark:prose-invert max-w-none">
                <Markdown>{article.content}</Markdown>
              </div>
            </CardContent>
          </Card>
          <Comments className="mt-12" />
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default Article;