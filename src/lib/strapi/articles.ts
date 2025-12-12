import { strapiQuery } from "../strapi"
import type { Article } from "./types"

export async function getArticles(): Promise<Article[]> {
  const query = /* GraphQL */ `
    query Articles {
      articles {
        documentId
        title
        description
        slug
        cover {
          url
          alternativeText
        }
        author {
          name
          email
          avatar {
            alternativeText
            url
          }
        }
        publishedAt
        category {
          name
          slug
        }
      }
    }
  `

  const result = await strapiQuery<{ articles: Article[] }>(query)

  return result.articles
}
