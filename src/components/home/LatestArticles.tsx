import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const LatestArticles = () => {
  const articles = [
    {
      id: 1,
      title: "Building Scalable Web Applications",
      excerpt: "Learn how to architect web applications that scale.",
      date: "2024-02-19",
    },
    {
      id: 2,
      title: "The Future of Web Development",
      excerpt: "Exploring upcoming trends and technologies.",
      date: "2024-02-17",
    },
    {
      id: 3,
      title: "Optimizing React Performance",
      excerpt: "Tips and tricks for faster React applications.",
      date: "2024-02-14",
    },
  ];

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
          {articles.map((article) => (
            <article
              key={article.id}
              className="glass p-6 rounded-lg transition-transform hover:-translate-y-1"
            >
              <time className="text-sm text-muted-foreground">
                {article.date}
              </time>
              <h3 className="text-xl font-semibold mt-2 mb-3">
                {article.title}
              </h3>
              <p className="text-muted-foreground mb-4">{article.excerpt}</p>
              <Link to={`/articles/${article.id}`}>
                <Button variant="link" className="p-0">
                  Read More
                </Button>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestArticles;