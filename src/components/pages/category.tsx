import ArticleCard from "../ui/article-card";

const descriptions = {
  Lifestyle: "Essays on intentional living, balance, and meaningful habits.",
  Travel: "Stories and reflections from journeys across the globe.",
  Food: "Exploring flavors, traditions, and culinary creativity.",
  Technology: "Perspectives on digital tools, innovation, and the future.",
};

export default function CategoryView({ categoryName, categories, articles }) {
  return (
    <div className="animate-fade-in">
      {/* Category Header */}
      <section className="bg-card border-b border-border">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-3xl">
            <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
              <a href="/" className="hover:text-primary">Home</a>
              <span>/</span>
              <span>Categories</span>
              <span>/</span>
              <span className="text-primary">{categoryName}</span>
            </nav>

            <h1 className="text-4xl md:text-5xl font-semibold mb-4">
              {categoryName}
            </h1>

            <p className="text-lg text-muted-foreground">
              {descriptions[categoryName]}
            </p>
          </div>
        </div>
      </section>

      {/* Category Pills */}
      <section className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap gap-3">
          {categories.map((cat) => (
            <a
              key={cat}
              href={`/category/${cat.toLowerCase()}`}
              className={`px-4 py-2 rounded-full text-sm transition-all ${
                cat === categoryName
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-primary/10"
              }`}
            >
              {cat}
            </a>
          ))}
        </div>
      </section>

      {/* Articles */}
      <section className="container mx-auto px-4 pb-16">
        <p className="text-sm text-muted-foreground mb-8">
          {articles.length} {articles.length === 1 ? "article" : "articles"}
        </p>

        {articles.length > 0 ? (
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article, i) => (
              <div
                key={article.id}
                className="animate-fade-in"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <ArticleCard article={article} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 text-muted-foreground">
            No articles in this category yet.
          </div>
        )}
      </section>
    </div>
  );
}
