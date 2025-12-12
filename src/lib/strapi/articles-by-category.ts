import { strapiQuery } from "../strapi"
import type { Article } from "./types"

export async function getArticleByCategory(
  slug: string,
): Promise<Article[] | null> {
  const query = /* GraphQL */ `
    query ArticlesByCategory($slug: String!) {
      articles(filters: { category: { slug: { eq: $slug } } }) {
        documentId
        title
        slug
        description
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
  const variables = { slug }

  const result = await strapiQuery<{ articles: Article[] }>(query, variables)

  return result.articles
}
