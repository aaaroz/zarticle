import { useState, useCallback } from "react";
import { articles } from "@/data/articles";
import ArticleCard from "../ui/article-card";

const ARTICLES_PER_PAGE = 4;

const HomePage = () => {
  const [visibleCount, setVisibleCount] = useState(ARTICLES_PER_PAGE);
  const [isLoading, setIsLoading] = useState(false);

  const featuredArticle = articles[0];
  const remainingArticles = articles.slice(1);
  const visibleArticles = remainingArticles.slice(0, visibleCount - 1);
  const hasMore = visibleCount < articles.length;

  const loadMore = useCallback(() => {
    setIsLoading(true);
    setTimeout(() => {
      setVisibleCount((prev) =>
        Math.min(prev + ARTICLES_PER_PAGE, articles.length)
      );
      setIsLoading(false);
    }, 500);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-12 pb-16">
        <div className="max-w-3xl mb-12">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight mb-4 animate-slide-up">
            Stories that <span className="text-primary">matter</span>
          </h1>
          <p
            className="font-body text-lg text-muted-foreground animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            Thoughtful essays on living well, exploring the world, and finding
            meaning in the everyday.
          </p>
        </div>

        {/* Featured Article */}
        <ArticleCard article={featuredArticle} featured />
      </section>

      {/* Article Grid */}
      <section className="container mx-auto px-4 pb-16">
        <h2 className="font-display text-2xl font-semibold text-foreground mb-8">
          Latest Stories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleArticles.map((article, index) => (
            <div key={article.id} style={{ animationDelay: `${index * 0.1}s` }}>
              <ArticleCard article={article} />
            </div>
          ))}
        </div>

        {hasMore && (
          <div className="text-center mt-12">
            <button
              onClick={loadMore}
              disabled={isLoading}
              className="font-body px-8 py-3 border-2 border-foreground text-foreground rounded-full hover:bg-foreground hover:text-background transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Loading...
                </span>
              ) : (
                "Load More Stories"
              )}
            </button>
          </div>
        )}
      </section>

      {/* Newsletter Section */}
      <section className="bg-card py-16">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2 className="font-display text-3xl font-semibold text-foreground mb-4">
            Never miss a story
          </h2>
          <p className="font-body text-muted-foreground mb-8">
            Get our best essays delivered straight to your inbox every week. No
            spam, just thoughtful content.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-full border border-border bg-background font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-primary text-primary-foreground font-body font-semibold rounded-full hover:bg-primary/90 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default HomePage;
