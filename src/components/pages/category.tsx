import type { Article, Category } from "@/lib/strapi/types"
import ArticleCard from "../ui/article-card"

export default function CategoryView({
  categoryName,
  categories,
  articles,
}: {
  categoryName: string
  categories: Category[]
  articles: Article[]
}) {
  return (
    <div className="animate-fade-in">
      {/* Category Header */}
      <section className="bg-card border-border border-b">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-3xl">
            <nav className="text-muted-foreground mb-4 flex items-center gap-2 text-sm">
              <a href="/" className="hover:text-primary">
                Home
              </a>
              <span>/</span>
              <span>Categories</span>
              <span>/</span>
              <span className="text-primary">{categoryName}</span>
            </nav>

            <h1 className="mb-4 text-4xl font-semibold capitalize md:text-5xl">
              {categoryName}
            </h1>

            {/* <p className="text-lg text-muted-foreground"> */}
            {/*   {descriptions[categoryName]} */}
            {/* </p> */}
          </div>
        </div>
      </section>

      {/* Category Pills */}
      <section className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap gap-3">
          {categories.map((cat) => (
            <a
              key={cat.slug}
              href={`/category/${cat.slug}`}
              className={`rounded-full px-4 py-2 text-sm capitalize transition-all ${
                cat.name === categoryName
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-primary/10"
              }`}
            >
              {cat.name}
            </a>
          ))}
        </div>
      </section>

      {/* Articles */}
      <section className="container mx-auto px-4 pb-16">
        <p className="text-muted-foreground mb-8 text-sm">
          {articles.length} {articles.length === 1 ? "article" : "articles"}
        </p>

        {articles.length > 0 ? (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article, i) => (
              <div
                key={article.documentId}
                className="animate-fade-in"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <ArticleCard article={article} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-muted-foreground py-16 text-center">
            No articles in this category yet.
          </div>
        )}
      </section>
    </div>
  )
}
