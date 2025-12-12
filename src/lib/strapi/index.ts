const STRAPI_URL = import.meta.env.STRAPI_URL ?? "http://localhost:1337/graphql"

export async function strapiQuery<T>(query: string, variables = {}) {
  try {
    const res = await fetch(STRAPI_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query, variables }),
    })

    if (!res.ok) {
      throw new Error(`HTTP ${res.status}: ${await res.text()}`)
    }

    const json = await res.json()

    if (json.errors) {
      console.error("GraphQL errors:", json.errors)
      throw new Error(json.errors[0]?.message || "GraphQL request failed")
    }

    return json.data as T
  } catch (err) {
    console.error("STRAPI QUERY ERROR:", err)
    throw err
  }
}
