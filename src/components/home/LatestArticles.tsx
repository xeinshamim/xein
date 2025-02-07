
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { articles } from "@/data/articles";

const LatestArticles = () => {
  // Get the 3 most recent articles
  const latestArticles = [...articles]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  return (
    <section className="py-20 px-4 bg-accent/5">
      <div className="container mx-auto max-w-6xl">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold">Latest Articles</h2>
          <Link to="/articles">
            <button className="group inline-flex items-center text-primary hover:text-primary/80 transition-colors">
              View All
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </Link>
        </div>
        <div className="space-y-6">
          {latestArticles.map((article) => (
            <article
              key={article.id}
              className="bg-card hover:bg-accent/5 border border-border/50 rounded-lg p-6 transition-all duration-200 hover:-translate-y-1"
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
              <h3 className="text-2xl font-semibold mb-3 text-foreground">
                <Link 
                  to={`/articles/${article.id}`}
                  className="hover:text-primary transition-colors"
                >
                  {article.title}
                </Link>
              </h3>
              <p className="text-muted-foreground mb-4 line-clamp-2">
                {article.excerpt}
              </p>
              <Link
                to={`/articles/${article.id}`}
                className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
              >
                Read More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestArticles;
