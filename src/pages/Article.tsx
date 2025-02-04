import { useParams } from "react-router-dom";
import { articles } from "@/data/articles";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import Markdown from "react-markdown";
import { NotFound } from "./NotFound";

const Article = () => {
  const { id } = useParams();
  const article = articles.find((a) => a.id === Number(id));

  if (!article) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 py-20">
        <article className="max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <span className="px-3 py-1 bg-primary/10 rounded-full text-sm">
                {article.category}
              </span>
              <span className="text-sm text-muted-foreground">
                {article.readingTime}
              </span>
            </div>
            <time className="text-sm text-muted-foreground block mb-2">
              {article.date}
            </time>
            <h1 className="text-4xl font-bold mb-8">{article.title}</h1>
          </div>
          <Card>
            <CardContent className="p-6 prose dark:prose-invert max-w-none">
              <Markdown>{article.content}</Markdown>
            </CardContent>
          </Card>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default Article;