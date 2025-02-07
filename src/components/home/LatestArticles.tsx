
import { ArrowRight } from "lucide-react";
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {latestArticles.map((article) => (
            <article
              key={article.id}
              className="bg-card border border-border/50 p-6 rounded-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="px-3 py-1 bg-accent text-accent-foreground rounded-full text-sm mb-3 inline-block">
                {article.category}
              </span>
              <time className="text-sm text-muted-foreground block">
                {article.date}
              </time>
              <Link to={`/articles/${article.id}`}>
                <h3 className="text-xl font-semibold mt-2 mb-3 hover:text-primary transition-colors">
                  {article.title}
                </h3>
              </Link>
              <p className="text-muted-foreground mb-4 line-clamp-2">
                {article.excerpt}
              </p>
              <div className="flex items-center justify-between">
                <Link 
                  to={`/articles/${article.id}`}
                  className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
                >
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4" />
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
