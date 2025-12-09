
import { type Article } from "@/data/articles";

interface ArticleCardProps {
  article: Article;
  featured?: boolean;
}

const ArticleCard = ({ article, featured = false }: ArticleCardProps) => {
  const formattedDate = new Date(article.publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  if (featured) {
    return (
      <article className="group animate-fade-in">
        <a href={`/article/${article.slug}`} className="block">
          <div className="relative overflow-hidden rounded-xl aspect-[16/9] mb-6">
            <img
              src={article.coverImage}
              alt={article.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-xs font-body font-semibold rounded-full mb-3">
                {article.category}
              </span>
              <h2 className="font-display text-2xl md:text-4xl font-semibold text-white mb-3 leading-tight">
                {article.title}
              </h2>
              <p className="font-body text-white/80 line-clamp-2 max-w-2xl">
                {article.excerpt}
              </p>
            </div>
          </div>
        </a>
        <div className="flex items-center gap-4">
          <a href={`/author/${article.author.slug}`}>
            <img
              src={article.author.avatar}
              alt={article.author.name}
              className="w-10 h-10 rounded-full object-cover"
            />
          </a>
          <div>
            <a 
              href={`/author/${article.author.slug}`}
              className="font-body text-sm font-semibold text-foreground hover:text-primary transition-colors"
            >
              {article.author.name}
            </a>
            <p className="font-body text-xs text-muted-foreground">
              {formattedDate} · {article.readingTime} min read
            </p>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="group animate-fade-in">
      <a href={`/article/${article.slug}`} className="block">
        <div className="relative overflow-hidden rounded-lg aspect-[4/3] mb-4 shadow-card group-hover:shadow-card-hover transition-shadow duration-300">
          <img
            src={article.coverImage}
            alt={article.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <span className="inline-block text-xs font-body font-semibold text-primary mb-2 uppercase tracking-wider">
          {article.category}
        </span>
        <h3 className="font-display text-xl font-semibold text-foreground mb-2 leading-snug group-hover:text-primary transition-colors">
          {article.title}
        </h3>
        <p className="font-body text-muted-foreground text-sm line-clamp-2 mb-4">
          {article.excerpt}
        </p>
      </a>
      <div className="flex items-center gap-3">
        <a href={`/author/${article.author.slug}`}>
          <img
            src={article.author.avatar}
            alt={article.author.name}
            className="w-8 h-8 rounded-full object-cover"
          />
        </a>
        <div>
          <a 
            href={`/author/${article.author.slug}`}
            className="font-body text-xs font-semibold text-foreground hover:text-primary transition-colors"
          >
            {article.author.name}
          </a>
          <p className="font-body text-xs text-muted-foreground">
            {formattedDate}
          </p>
        </div>
      </div>
    </article>
  );
};

export default ArticleCard;
