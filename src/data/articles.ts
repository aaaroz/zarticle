import type { Article, Author, Category } from "@/lib/strapi/types"

export const authors: Author[] = [
  {
    name: "Sarah Chen",
    email: "sarah@me.com",
    avatar: {
      url: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
      alternativeText: "Sarah Chen",
    },
  },
  {
    name: "Marcus Williams",
    email: "marcus@me.com",
    avatar: {
      url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      alternativeText: "Marcus Will",
    },
  },
  {
    name: "Elena Rodriguez",
    email: "elena@me.com",
    avatar: {
      url: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      alternativeText: "Elena R",
    },
  },
]

export const categories: Category[] = [
  { name: "Lifestyle", slug: "lifestyle" },
  { name: "Travel", slug: "travel" },
  { name: "Food", slug: "food" },
  { name: "Technology", slug: "technology" },
]

export const articles: Article[] = [
  {
    documentId: "1",
    title: "The Art of Slow Living in a Fast-Paced World",
    slug: "art-of-slow-living",
    description:
      "In an age of constant connectivity and endless notifications, discovering the transformative power of intentional slowness.",
    blocks: [
      {
        type: "rich-text",
        body: `
The morning light filters through linen curtains as I sit with my first cup of coffee, steam rising in lazy spirals. There's no phone in sight, no urgent emails demanding attention. Just the quiet ritual of beginning a day with intention.

This wasn't always my reality. Like many of us, I spent years caught in the relentless current of modern life—always rushing, always behind, always reaching for the next thing before fully experiencing the present one.

## The Breaking Point

It took a global pandemic and a forced pause to make me question everything. Suddenly stripped of the usual distractions, I realized I'd been moving so fast that I'd forgotten why I was moving at all.

> The speed of life had become a substitute for the substance of life.

Slow living isn't about doing everything slowly. It's about doing things at the right pace—being present, intentional, and engaged with the moment.

## Practical Steps Toward Slowness

Embracing slow living starts with small, deliberate choices:

- Morning rituals without screens  
- Single-tasking over multitasking  
- Scheduled digital sabbaths  
- Cooking meals from scratch and savoring the process  

### The Ripple Effect

Slowness creates space—space for creativity, connection, deep thinking, clarity, and purpose. In that space, productivity becomes a by-product, not the goal.

Slow living isn't a rejection of modernity. It's a reclamation of agency.
`,
      },
    ],
    cover: {
      url: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1200&h=800&fit=crop",
      alternativeText: "Art slow living",
    },
    author: authors[0],
    publishedAt: "2024-12-08",
    createdAt: "2024-12-08",
    updatedAt: "2024-12-08",
    category: {
      name: "Lifestyle",
      slug: "lifestyle",
    },
  },
  {
    documentId: "2",
    title: "Hidden Temples of Kyoto: A Photographer's Journey",
    slug: "hidden-temples-kyoto",
    description:
      "Beyond the tourist crowds, discovering ancient sanctuaries where time moves differently and beauty reveals itself to those who wait.",
    blocks: [
      {
        type: "rich-text",

        body: `
The first light of dawn in Kyoto feels different—soft, mist-filtered, turning the ancient capital into something that resembles an old woodblock print.

I came seeking the famous temples. But what I found in quiet corners, far from tourists, changed how I think about beauty and patience.

## The Temple That Time Forgot

An elderly taxi driver pointed me toward Ōbai-in. “No tourists,” he said. “Only moss and silence.”

> In Japan, the most profound beauty is often the most hidden.

Its garden is minimalism perfected—raked gravel, islands of moss, ancient pines shaped for centuries.

## Learning to Wait

Photography in these temples taught me to wait for light, shadow, and silence.

### The Decisive Moment

On the third morning in Arashiyama, everything aligned: a single maple leaf lit by dawn, the sound of a monk’s footsteps, and a feeling the Japanese call *mono no aware*—the bittersweet awareness of impermanence.

These temples aren’t hiding. They’re waiting for us to slow down.
`,
      },
    ],
    cover: {
      url: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1200&h=800&fit=crop",
      alternativeText: "Hidden Temples of Kyoto",
    },
    author: authors[1],
    publishedAt: "2024-12-05",
    createdAt: "2024-12-05",
    updatedAt: "2024-12-05",
    category: {
      name: "Travel",
      slug: "travel",
    },
  },
  {
    documentId: "3",
    title: "The Revolution on Your Plate: Farm-to-Table Reimagined",
    slug: "farm-to-table-revolution",
    description:
      "How a new generation of chefs and farmers are transforming our relationship with food, one harvest at a time.",
    blocks: [
      {
        type: "rich-text",

        body: `
The carrot I'm holding still has soil on it—pulled from the ground less than an hour ago. Chef Maria Santos plans to roast it simply with olive oil and salt.

## Beyond the Buzzword

Farm-to-table is often used as marketing. But the new generation of chefs is doing something real—menus changing daily, even hourly, based on what farms deliver.

> This isn't branding. It's a reimagining of what a restaurant can be.

## The Economics of Connection

This movement works because:

- Farmers get fair prices  
- Restaurants get peak-fresh ingredients  
- Diners get real flavor  
- Communities rebuild local food systems  

### The Taste of Place

French calls it *terroir*: the taste of soil, climate, and care. These restaurants let you taste a place, a season, and a moment.

This revolution isn’t a trend—it’s a reconnection to land and food.
`,
      },
    ],
    cover: {
      url: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=1200&h=800&fit=crop",
      alternativeText: "Farm to Table Revolution",
    },
    author: authors[2],
    publishedAt: "2024-12-01",
    createdAt: "2024-12-01",
    updatedAt: "2024-12-01",
    category: {
      name: "Food",
      slug: "food",
    },
  },
  {
    documentId: "4",
    title: "Digital Minimalism: Reclaiming Your Attention",
    slug: "digital-minimalism-attention",
    description:
      "A practical and philosophical look at reclaiming control of your focus in a world engineered to capture it.",
    blocks: [
      {
        type: "rich-text",
        body: `
I deleted Instagram on a Tuesday. Nothing dramatic. Just a realization that two hours of scrolling left me worse than before.

## The Attention Economy

We're part of an experiment where companies fight to capture our attention—not to enlighten us, but to monetize us.

> The most valuable resource today isn’t oil or data. It’s attention.

Digital minimalism isn’t anti-tech. It’s intentional tech.

## A Framework for Intentional Use

Ask yourself:

- Does this help me create or only consume?  
- Does it connect me or simulate connection?  
- Do I feel better after using it?  
- Am I using it intentionally?  

### The Surprising Benefits

More books. Old hobbies revived. Real conversations. Clearer thinking.

Reclaiming attention is hard. It’s also crucial.
`,
      },
    ],
    cover: {
      url: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1200&h=800&fit=crop",
      alternativeText: "Digital Minimalism",
    },
    author: authors[0],
    publishedAt: "2024-11-28",
    createdAt: "2024-11-28",
    updatedAt: "2024-11-28",
    category: {
      name: "Technology",
      slug: "technology",
    },
  },
  {
    documentId: "5",
    title: "The Last Light of Patagonia",
    slug: "last-light-patagonia",
    description:
      "Chasing golden hour at the end of the world, where mountains pierce the sky and solitude becomes a companion.",
    blocks: [
      {
        type: "rich-text",

        body: `
The wind in Patagonia doesn’t blow—it attacks. Yet as the mountains turn gold at sunset, everything makes sense.

## The Edge of the World

Patagonia is raw, massive, ancient. Glaciers like cities. Peaks that stab the sky.

> Here, you don’t conquer the landscape—you witness it.

## Lessons from the Trail

The wilderness teaches:

- Everything you need fits in a 50L pack  
- Discomfort fades; regret doesn’t  
- The best views follow the hardest climbs  
- Solitude is a gift  

### The Golden Hour

My last evening: a hidden viewpoint, granite towers glowing fire-red, and no photos taken.

Some moments are meant to be absorbed.
`,
      },
    ],
    cover: {
      url: "https://images.unsplash.com/photo-1600211906168-fbc6df476b1c?w=1200&h=800&fit=crop",
      alternativeText: "Last Light of Patagonia",
    },
    author: authors[1],
    publishedAt: "2024-11-22",
    createdAt: "2024-11-22",
    updatedAt: "2024-11-22",
    category: {
      name: "Travel",
      slug: "travel",
    },
  },
  {
    documentId: "6",
    title: "The Science of Sourdough: A Baker's Guide",
    slug: "science-of-sourdough",
    description:
      "Understanding the ancient alchemy behind wild fermentation and the craft of true sourdough baking.",
    blocks: [
      {
        type: "rich-text",
        body: `
My sourdough starter is named Margaret. Bread is alive—a collaboration between baker and microorganisms.

## The Living Culture

A starter is a whole ecosystem of wild yeast and lactic acid bacteria.

> Every starter is a microbial fingerprint of its maker and environment.

The yeast and bacteria support each other, creating flavor, texture, and rise.

## The Variables That Matter

Control gives consistency:

- Hydration  
- Temperature  
- Time  
- Flour type  

### The Bake

Heat brings the Maillard reaction, crust, aroma, and the airy crumb we love.

Sourdough isn’t just food. It’s tradition—thousands of years old.
`,
      },
    ],
    cover: {
      url: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=1200&h=800&fit=crop",
      alternativeText: "Sourdough Guide",
    },
    author: authors[2],
    publishedAt: "2024-11-18",
    createdAt: "2024-11-18",
    updatedAt: "2024-11-18",
    category: {
      name: "Food",
      slug: "food",
    },
  },
]

export const getArticleBySlug = (slug: string): Article | undefined =>
  articles.find((a) => a.slug === slug)

export const getArticlesByAuthor = (authorName: string): Article[] =>
  articles.filter((a) => a.author.name === authorName)

export const getAuthorBySlug = (name: string): Author | undefined =>
  authors.find((a) => a.name === name)
