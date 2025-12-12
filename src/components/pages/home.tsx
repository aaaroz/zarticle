import { useCallback, useState } from "react"

import type { Article } from "@/lib/strapi/types"
import ArticleCard from "../ui/article-card"

const ARTICLES_PER_PAGE = 4

interface HomePageProps {
  articles?: Article[]
}
const HomePage: React.FC<HomePageProps> = ({ articles }) => {
  const [visibleCount, setVisibleCount] = useState(ARTICLES_PER_PAGE)
  const [isLoading, setIsLoading] = useState(false)

  const featuredArticle = articles[0]
  const remainingArticles = articles.slice(1)
  const visibleArticles = remainingArticles.slice(0, visibleCount - 1)
  const hasMore = visibleCount < articles.length

  const loadMore = useCallback(() => {
    setIsLoading(true)
    // Simulate loading delay
    setTimeout(() => {
      setVisibleCount((prev) =>
        Math.min(prev + ARTICLES_PER_PAGE, articles.length),
      )
      setIsLoading(false)
    }, 500)
  }, [])
  return (
    <>
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-12 pb-16">
        <div className="mb-12 max-w-3xl">
          <h1 className="font-display text-foreground animate-slide-up mb-4 text-4xl leading-tight font-semibold md:text-5xl lg:text-6xl">
            Stories that <span className="text-primary">matter</span>
          </h1>
          <p
            className="font-body text-muted-foreground animate-fade-in text-lg"
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
        <h2 className="font-display text-foreground mb-8 text-2xl font-semibold">
          Latest Stories
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {visibleArticles.map((article, index) => (
            <div
              key={article.documentId}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ArticleCard article={article} />
            </div>
          ))}
        </div>

        {hasMore && (
          <div className="mt-12 text-center">
            <button
              onClick={loadMore}
              disabled={isLoading}
              className="font-body border-foreground text-foreground hover:bg-foreground hover:text-background rounded-full border-2 px-8 py-3 transition-colors duration-300 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {isLoading ? (
                <span className="flex items-center gap-2">
                  <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24">
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
        <div className="container mx-auto max-w-2xl px-4 text-center">
          <h2 className="font-display text-foreground mb-4 text-3xl font-semibold">
            Never miss a story
          </h2>
          <p className="font-body text-muted-foreground mb-8">
            Get our best essays delivered straight to your inbox every week. No
            spam, just thoughtful content.
          </p>
          <form className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="border-border bg-background font-body text-foreground placeholder:text-muted-foreground focus:ring-primary flex-1 rounded-full border px-4 py-3 focus:ring-2 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-primary text-primary-foreground font-body hover:bg-primary/90 rounded-full px-6 py-3 font-semibold transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  )
}

export default HomePage
