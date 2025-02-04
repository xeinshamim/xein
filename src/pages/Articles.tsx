import { articles } from "@/data/articles";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Articles = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8">Articles</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <article
              key={article.id}
              className="glass p-6 rounded-lg transition-transform hover:-translate-y-1"
            >
              <div className="flex justify-between items-center mb-4">
                <span className="px-3 py-1 bg-primary/10 rounded-full text-sm">
                  {article.category}
                </span>
                <span className="text-sm text-muted-foreground">
                  {article.readingTime}
                </span>
              </div>
              <time className="text-sm text-muted-foreground">
                {article.date}
              </time>
              <h2 className="text-xl font-semibold mt-2 mb-3">{article.title}</h2>
              <p className="text-muted-foreground mb-4">{article.excerpt}</p>
              <Link to={`/articles/${article.id}`}>
                <Button variant="link" className="p-0">
                  Read More
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