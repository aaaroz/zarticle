import ReactMarkdown from "react-markdown"

import type { Article } from "@/lib/strapi/types"
import ArticleCard from "../ui/article-card"

interface Props {
  article: Article
  relatedArticles: any[]
  formattedDate: string
}

const ArticlePage = ({ article, relatedArticles, formattedDate }: Props) => {
  return (
    <article className="animate-fade-in">
      {/* Hero */}
      <header className="container mx-auto px-4 pt-8 pb-12">
        <div className="mx-auto max-w-3xl text-center">
          <a
            href="/"
            className="font-body text-primary mb-4 inline-block text-xs font-semibold tracking-wider uppercase hover:underline"
          >
            {article.category.name}
          </a>

          <h1 className="font-display text-foreground mb-6 text-3xl leading-tight font-semibold text-balance md:text-5xl">
            {article.title}
          </h1>

          <p className="font-body text-muted-foreground mb-8 text-lg">
            {article.description}
          </p>

          <div className="flex items-center justify-center gap-4">
            <a href={`/author/${article.author.name}`}>
              <img
                src={article.author.avatar.url}
                alt={article.author.avatar.alternativeText}
                className="h-12 w-12 rounded-full object-cover"
              />
            </a>
            <div className="text-left">
              <a
                href={`/author/${article.author.name}`}
                className="font-body text-foreground hover:text-primary font-semibold transition-colors"
              >
                {article.author.name}
              </a>
              <p className="font-body text-muted-foreground text-sm">
                {formattedDate} · 15 min read
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Cover */}
      <div className="container mx-auto mb-12 px-4">
        <div className="mx-auto max-w-4xl">
          <img
            src={article.cover.url}
            alt={article.cover.alternativeText}
            className="shadow-card aspect-[16/9] w-full rounded-xl object-cover"
          />
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto mb-16 px-4">
        {article.blocks.map((block, i) => {
          switch (block.type) {
            case "rich-text":
              return (
                <div className="prose prose-neutral dark:prose-invert mx-auto max-w-2xl">
                  <ReactMarkdown
                    components={{
                      h1: ({ node, ...props }) => (
                        <h1
                          className="mt-8 mb-4 text-3xl leading-tight font-bold tracking-tight"
                          {...props}
                        />
                      ),
                      h2: ({ node, ...props }) => (
                        <h2
                          className="mt-8 mb-3 text-2xl leading-snug font-semibold tracking-tight"
                          {...props}
                        />
                      ),
                      h3: ({ node, ...props }) => (
                        <h3
                          className="mt-6 mb-2 text-xl font-semibold"
                          {...props}
                        />
                      ),
                      p: ({ node, ...props }) => (
                        <p className="my-4 leading-relaxed" {...props} />
                      ),
                      ul: ({ node, ...props }) => (
                        <ul
                          className="my-4 list-disc space-y-2 pl-6"
                          {...props}
                        />
                      ),
                      li: ({ node, ...props }) => (
                        <li className="leading-relaxed" {...props} />
                      ),
                      blockquote: ({ node, ...props }) => (
                        <blockquote
                          className="border-primary my-6 border-l-4 pl-4 text-neutral-900 italic"
                          {...props}
                        />
                      ),
                      img: ({ node, ...props }) => (
                        <img
                          className="shadow-card my-6 rounded-xl"
                          {...props}
                        />
                      ),
                    }}
                  >
                    {block.body}
                  </ReactMarkdown>
                </div>
              )

            case "media":
              return (
                <div className="mx-auto max-w-2xl">
                  <img
                    key={i}
                    src={block.file.url}
                    alt={block.file.alternativeText ?? ""}
                    className="shadow-card aspect-[16/9] w-full rounded-xl object-cover"
                  />
                </div>
              )

            default:
              return null
          }
        })}
      </div>

      {/* Author */}
      <div className="container mx-auto mb-16 px-4">
        <div className="border-border mx-auto max-w-2xl border-t border-b py-8">
          <div className="flex items-start gap-4">
            <a href={`/author/${article.author.name}`}>
              <img
                src={article.author.avatar.url}
                alt={article.author.avatar.alternativeText}
                className="h-16 w-16 rounded-full object-cover"
              />
            </a>
            <div>
              <p className="font-body text-muted-foreground mb-1 text-xs tracking-wider uppercase">
                Written by
              </p>

              <a
                href={`/author/${article.author.name}`}
                className="font-display text-foreground hover:text-primary text-xl font-semibold transition-colors"
              >
                {article.author.name}
              </a>

              <p className="font-body text-muted-foreground mt-2">
                Cheers for sharing this article with us. We really appreciate
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Related */}
      {relatedArticles.length > 0 && (
        <section className="container mx-auto px-4 pb-16">
          <h2 className="font-display text-foreground mb-8 text-center text-2xl font-semibold">
            More in {article.category.name}
          </h2>

          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
            {relatedArticles.map((related) => (
              <ArticleCard key={related.id} article={related} />
            ))}
          </div>
        </section>
      )}
    </article>
  )
}

export default ArticlePage
