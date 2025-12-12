import type { Article } from "@/lib/strapi/types"

interface ArticleCardProps {
  article: Article
  featured?: boolean
}

const ArticleCard = ({ article, featured = false }: ArticleCardProps) => {
  const formattedDate = new Date(article.publishedAt).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    },
  )

  if (featured) {
    return (
      <article className="group animate-fade-in">
        <a href={`/article/${article.slug}`} className="block">
          <div className="relative mb-6 aspect-video overflow-hidden rounded-xl">
            <img
              src={article.cover.url}
              alt={article.cover.alternativeText}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="from-foreground/60 absolute inset-0 bg-linear-to-t to-transparent" />
            <div className="absolute right-0 bottom-0 left-0 p-6 md:p-8">
              <span className="bg-primary text-primary-foreground font-body mb-3 inline-block rounded-full px-3 py-1 text-xs font-semibold">
                {article.category.name}
              </span>
              <h2 className="font-display mb-3 text-2xl leading-tight font-semibold text-white md:text-4xl">
                {article.title}
              </h2>
              <p className="font-body line-clamp-2 max-w-2xl text-white/80">
                {article.description}
              </p>
            </div>
          </div>
        </a>
        <div className="flex items-center gap-4">
          <a href={`/author/${article.author.name}`}>
            <img
              src={article.author.avatar.url}
              alt={article.author.avatar.alternativeText}
              className="h-10 w-10 rounded-full object-cover"
            />
          </a>
          <div>
            <a
              href={`/author/${article.author.name}`}
              className="font-body text-foreground hover:text-primary text-sm font-semibold transition-colors"
            >
              {article.author.name}
            </a>
            <p className="font-body text-muted-foreground text-xs">
              {formattedDate} · 15 min read
            </p>
          </div>
        </div>
      </article>
    )
  }

  return (
    <article className="group animate-fade-in">
      <a href={`/article/${article.slug}`} className="block">
        <div className="shadow-card group-hover:shadow-card-hover relative mb-4 aspect-4/3 overflow-hidden rounded-lg transition-shadow duration-300">
          <img
            src={article.cover.url}
            alt={article.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <span className="font-body text-primary mb-2 inline-block text-xs font-semibold tracking-wider uppercase">
          {article.category.name}
        </span>
        <h3 className="font-display text-foreground group-hover:text-primary mb-2 text-xl leading-snug font-semibold transition-colors">
          {article.title}
        </h3>
        <p className="font-body text-muted-foreground mb-4 line-clamp-2 text-sm">
          {article.description}
        </p>
      </a>
      <div className="flex items-center gap-3">
        <a href={`/author/${article.author.name}`}>
          <img
            src={article.author.avatar.url}
            alt={article.author.name}
            className="h-8 w-8 rounded-full object-cover"
          />
        </a>
        <div>
          <a
            href={`/author/${article.author.name}`}
            className="font-body text-foreground hover:text-primary text-xs font-semibold transition-colors"
          >
            {article.author.name}
          </a>
          <p className="font-body text-muted-foreground text-xs">
            {formattedDate}
          </p>
        </div>
      </div>
    </article>
  )
}

export default ArticleCard
