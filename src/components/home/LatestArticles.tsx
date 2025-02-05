import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { articles } from "@/data/articles";

const LatestArticles = () => {
  // Get the 3 most recent articles
  const latestArticles = [...articles]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  return (
    <section className="py-20 px-4 bg-muted/50">
      <div className="container mx-auto max-w-6xl">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold">Latest Articles</h2>
          <Link to="/articles">
            <Button variant="ghost" className="group">
              View All
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {latestArticles.map((article) => (
            <article
              key={article.id}
              className="glass p-6 rounded-lg transition-transform hover:-translate-y-1"
            >
              <span className="px-3 py-1 bg-primary/10 rounded-full text-sm mb-3 inline-block">
                {article.category}
              </span>
              <time className="text-sm text-muted-foreground block">
                {article.date}
              </time>
              <h3 className="text-xl font-semibold mt-2 mb-3">
                {article.title}
              </h3>
              <p className="text-muted-foreground mb-4 line-clamp-2">
                {article.excerpt}
              </p>
              <div className="flex items-center justify-between">
                <Link to={`/articles/${article.id}`}>
                  <Button variant="link" className="p-0">
                    Read More
                  </Button>
                </Link>
                <span className="text-sm text-muted-foreground">
                  {article.readingTime}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestArticles;