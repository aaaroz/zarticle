import { strapiQuery } from "../strapi"
import type { Article, ArticleBlock } from "./types"

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  const query = /* GraphQL */ `
    query ArticleBySlug($slug: String!) {
      articles(filters: { slug: { eq: $slug } }) {
        documentId
        title
        slug
        description
        cover {
          alternativeText
          url
        }
        author {
          name
          email
          avatar {
            alternativeText
            url
          }
        }
        category {
          name
          slug
        }
        blocks {
          ... on ComponentSharedRichText {
            body
          }
          ... on ComponentSharedQuote {
            body
            title
          }
          ... on ComponentSharedMedia {
            file {
              url
              alternativeText
            }
          }
        }
      }
    }
  `
  const variables = { slug }

  const result = await strapiQuery<{ articles: Article[] }>(query, variables)

  const blocks = normalizeBlocks(result.articles[0].blocks)
  return { ...result.articles[0], blocks }
}

function normalizeBlocks(raw: any[]): ArticleBlock[] {
  return raw.filter(Boolean).map((b) => {
    if (b.file) {
      return {
        type: "media",
        file: b.file,
      }
    }

    if (b.title) {
      return {
        type: "quote",
        body: b.body,
        title: b.title,
      }
    }

    return {
      type: "rich-text",
      body: b.body ?? "",
    }
  })
}
