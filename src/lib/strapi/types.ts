interface Image {
  url: string
  alternativeText: string
}

export interface Author {
  name: string
  email: string
  avatar: Image | null
}

// types Article
export interface Article {
  documentId: string
  title: string
  slug: string

  createdAt: string
  updatedAt: string
  publishedAt: string | null

  description: string | null
  cover: Image | null
  category: Category | null
  author: Author | null

  blocks: ArticleBlock[]
}
export type RichTextBlock = {
  type: "rich-text"
  body: string
}

export type QuoteBlock = {
  type: "quote"
  body: string
  title: string
}

export type MediaBlock = {
  type: "media"
  file: {
    url: string
    alternativeText: string | null
  }
}

export type ArticleBlock = RichTextBlock | QuoteBlock | MediaBlock

// types Category
export interface Category {
  name: string
  slug: string
}
