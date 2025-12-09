import type { Article } from "@/data/articles";
import ArticleCard from "../ui/article-card";

interface Props {
  article: Article;
  relatedArticles: any[];
  formattedDate: string;
}

const ArticlePage = ({ article, relatedArticles, formattedDate }: Props) => {
  return (
    <article className="animate-fade-in">
      {/* Hero */}
      <header className="container mx-auto px-4 pt-8 pb-12">
        <div className="max-w-3xl mx-auto text-center">
          <a
            href="/"
            className="inline-block text-xs font-body font-semibold text-primary mb-4 uppercase tracking-wider hover:underline"
          >
            {article.category}
          </a>

          <h1 className="font-display text-3xl md:text-5xl font-semibold text-foreground leading-tight mb-6 text-balance">
            {article.title}
          </h1>

          <p className="font-body text-lg text-muted-foreground mb-8">
            {article.excerpt}
          </p>

          <div className="flex items-center justify-center gap-4">
            <a href={`/author/${article.author.slug}`}>
              <img
                src={article.author.avatar}
                alt={article.author.name}
                className="w-12 h-12 rounded-full object-cover"
              />
            </a>
            <div className="text-left">
              <a
                href={`/author/${article.author.slug}`}
                className="font-body font-semibold text-foreground hover:text-primary transition-colors"
              >
                {article.author.name}
              </a>
              <p className="font-body text-sm text-muted-foreground">
                {formattedDate} · {article.readingTime} min read
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Cover */}
      <div className="container mx-auto px-4 mb-12">
        <div className="max-w-4xl mx-auto">
          <img
            src={article.coverImage}
            alt={article.title}
            className="w-full aspect-[16/9] object-cover rounded-xl shadow-card"
          />
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 mb-16">
        <div
          className="max-w-2xl mx-auto article-content"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
      </div>

      {/* Author */}
      <div className="container mx-auto px-4 mb-16">
        <div className="max-w-2xl mx-auto border-t border-b border-border py-8">
          <div className="flex items-start gap-4">
            <a href={`/author/${article.author.slug}`}>
              <img
                src={article.author.avatar}
                alt={article.author.name}
                className="w-16 h-16 rounded-full object-cover"
              />
            </a>
            <div>
              <p className="font-body text-xs text-muted-foreground uppercase tracking-wider mb-1">
                Written by
              </p>

              <a
                href={`/author/${article.author.slug}`}
                className="font-display text-xl font-semibold text-foreground hover:text-primary transition-colors"
              >
                {article.author.name}
              </a>

              <p className="font-body text-muted-foreground mt-2">
                {article.author.bio}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Related */}
      {relatedArticles.length > 0 && (
        <section className="container mx-auto px-4 pb-16">
          <h2 className="font-display text-2xl font-semibold text-foreground mb-8 text-center">
            More in {article.category}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {relatedArticles.map((related) => (
              <ArticleCard key={related.id} article={related} />
            ))}
          </div>
        </section>
      )}
    </article>
  );
};

export default ArticlePage;
