import { strapiQuery } from "../strapi"
import type { Category } from "./types"

export async function getCategories(): Promise<Category[]> {
  const query = /* GraphQL */ `
    query Categories {
      categories {
        name
        slug
      }
    }
  `

  const result = await strapiQuery<{
    categories: Category[]
  }>(query)

  return result.categories
}
