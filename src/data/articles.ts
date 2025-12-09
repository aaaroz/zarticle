export interface Author {
  id: string
  name: string
  avatar: string
  bio: string
  slug: string
}

export interface Article {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  coverImage: string
  seo: {
    metaTitle: string
    metaDescription: string
  }
  author: Author
  publishedAt: string
  readingTime: number
  category: string
}

export const authors: Author[] = [
  {
    id: "1",
    name: "Sarah Chen",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
    bio: "Senior editor and writer focusing on technology, culture, and the intersection of both. Previously at The Atlantic and Wired.",
    slug: "sarah-chen",
  },
  {
    id: "2",
    name: "Marcus Williams",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    bio: "Travel writer and photographer exploring remote corners of the world. National Geographic contributor.",
    slug: "marcus-williams",
  },
  {
    id: "3",
    name: "Elena Rodriguez",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    bio: "Food and lifestyle journalist with a passion for sustainable living. James Beard Award nominee.",
    slug: "elena-rodriguez",
  },
]

export const articles: Article[] = [
  {
    id: "1",
    title: "The Art of Slow Living in a Fast-Paced World",
    slug: "art-of-slow-living",
    excerpt:
      "In an age of constant connectivity and endless notifications, discovering the transformative power of intentional slowness.",
    content: `
<p>The morning light filters through linen curtains as I sit with my first cup of coffee, steam rising in lazy spirals. There's no phone in sight, no urgent emails demanding attention. Just the quiet ritual of beginning a day with intention.</p>

<p>This wasn't always my reality. Like many of us, I spent years caught in the relentless current of modern life—always rushing, always behind, always reaching for the next thing before fully experiencing the present one.</p>

<h2>The Breaking Point</h2>

<p>It took a global pandemic and a forced pause to make me question everything. Suddenly stripped of the usual distractions, I was forced to confront an uncomfortable truth: I had been moving so fast that I'd forgotten why I was moving at all.</p>

<blockquote>The speed of life had become a substitute for the substance of life.</blockquote>

<p>The concept of slow living isn't about doing everything at a snail's pace. It's about doing things at the right pace—being present, being intentional, being fully engaged with whatever moment you're in.</p>

<h2>Practical Steps Toward Slowness</h2>

<p>Embracing slow living doesn't require a complete life overhaul. It starts with small, deliberate choices:</p>

<ul>
<li>Morning rituals without screens for the first hour</li>
<li>Single-tasking instead of constantly multitasking</li>
<li>Regular digital sabbaths to reconnect with the physical world</li>
<li>Cooking meals from scratch, savoring the process</li>
</ul>

<h3>The Ripple Effect</h3>

<p>What I've discovered is that slowness creates space—space for creativity, for connection, for the kind of deep thinking that our hyperconnected world rarely allows. In that space, I've found more clarity, more purpose, and paradoxically, more productivity than ever before.</p>

<p>The art of slow living isn't about rejecting modernity. It's about reclaiming agency over our time and attention in a world designed to capture both.</p>
    `,
    coverImage:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1200&h=800&fit=crop",
    seo: {
      metaTitle:
        "The Art of Slow Living in a Fast-Paced World | Thoughtful Essays",
      metaDescription:
        "Discover the transformative power of intentional slowness in an age of constant connectivity. Learn practical steps toward a more meaningful life.",
    },
    author: authors[0],
    publishedAt: "2024-12-08",
    readingTime: 6,
    category: "Lifestyle",
  },
  {
    id: "2",
    title: "Hidden Temples of Kyoto: A Photographer's Journey",
    slug: "hidden-temples-kyoto",
    excerpt:
      "Beyond the tourist crowds, discovering ancient sanctuaries where time moves differently and beauty reveals itself to those who wait.",
    content: `
<p>The first light of dawn in Kyoto has a quality unlike anywhere else I've photographed. It's softer somehow, filtered through morning mist that clings to the hills like silk, transforming the ancient capital into something from a woodblock print.</p>

<p>I came to Japan seeking the famous temples—Kinkaku-ji, Fushimi Inari, all the names that fill guidebooks and Instagram feeds. But what I found in the quiet corners, far from the tourist paths, changed how I think about beauty, patience, and the art of seeing.</p>

<h2>The Temple That Time Forgot</h2>

<p>It was an elderly taxi driver who first mentioned Ōbai-in, a small Zen temple tucked within the vast Daitoku-ji complex. "No tourists," he said with a knowing smile. "Only moss and silence."</p>

<blockquote>In Japan, the most profound beauty is often the most hidden—waiting for those willing to seek it.</blockquote>

<p>The temple's garden is a masterwork of restraint. Raked gravel flows around islands of moss like frozen waves. Ancient pines have been trained for centuries, their branches telling stories of patience I can barely comprehend.</p>

<h2>Learning to Wait</h2>

<p>Photography in these spaces taught me something valuable: the best images come to those who wait. I spent three mornings at a small temple in Arashiyama, arriving before dawn, watching how the light moved across weathered wood and stone.</p>

<h3>The Decisive Moment</h3>

<p>On the third morning, everything aligned. A shaft of light illuminated a single maple leaf on the moss, a monk's footsteps echoed from somewhere unseen, and I understood why the Japanese have a word—mono no aware—for the bittersweet awareness of impermanence.</p>

<p>These hidden temples of Kyoto aren't hiding at all. They're simply waiting for us to slow down enough to find them.</p>
    `,
    coverImage:
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1200&h=800&fit=crop",
    seo: {
      metaTitle:
        "Hidden Temples of Kyoto: A Photographer's Journey | Travel Stories",
      metaDescription:
        "Explore the secret sanctuaries of Kyoto beyond the tourist crowds. A photographer's intimate journey through Japan's ancient capital.",
    },
    author: authors[1],
    publishedAt: "2024-12-05",
    readingTime: 8,
    category: "Travel",
  },
  {
    id: "3",
    title: "The Revolution on Your Plate: Farm-to-Table Reimagined",
    slug: "farm-to-table-revolution",
    excerpt:
      "How a new generation of chefs and farmers are transforming our relationship with food, one harvest at a time.",
    content: `
<p>The carrot I'm holding still has dirt clinging to its roots. It was pulled from the ground less than an hour ago, and already Chef Maria Santos is explaining how she'll prepare it—simply roasted, with nothing more than good olive oil and sea salt.</p>

<p>"When food is this fresh, this alive," she says, "your job as a cook is to get out of the way."</p>

<h2>Beyond the Buzzword</h2>

<p>Farm-to-table has become such a ubiquitous term that it's nearly lost all meaning. Every restaurant claims some version of it, often with little substance behind the marketing. But visit the new wave of restaurants emerging in small towns and urban neighborhoods alike, and you'll find something genuinely different happening.</p>

<blockquote>This isn't farm-to-table as a marketing strategy. It's farm-to-table as a complete reimagining of what a restaurant can be.</blockquote>

<p>At Santos' restaurant in Portland, the menu changes not just seasonally but daily—sometimes hourly—depending on what arrives from the network of small farms she's cultivated over a decade.</p>

<h2>The Economics of Connection</h2>

<p>What makes this movement sustainable isn't idealism alone. It's a new economic model that benefits everyone involved:</p>

<ul>
<li>Farmers receive fair prices directly, cutting out middlemen</li>
<li>Restaurants access ingredients at peak freshness and flavor</li>
<li>Diners experience food as it's meant to taste</li>
<li>Communities rebuild local food systems</li>
</ul>

<h3>The Taste of Place</h3>

<p>There's a French word—terroir—that describes how a place expresses itself through its food. The soil, the climate, the human care that goes into cultivation. At these new farm-to-table establishments, you don't just taste ingredients. You taste a place, a season, a moment in time.</p>

<p>The revolution on our plates isn't about trends or Instagram aesthetics. It's about remembering something we nearly forgot: that food, at its best, is a profound connection between the land and the table.</p>
    `,
    coverImage:
      "https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=1200&h=800&fit=crop",
    seo: {
      metaTitle:
        "The Revolution on Your Plate: Farm-to-Table Reimagined | Food Culture",
      metaDescription:
        "Discover how a new generation of chefs and farmers are transforming our relationship with food through authentic farm-to-table practices.",
    },
    author: authors[2],
    publishedAt: "2024-12-01",
    readingTime: 7,
    category: "Food",
  },
  {
    id: "4",
    title: "Digital Minimalism: Reclaiming Your Attention",
    slug: "digital-minimalism-attention",
    excerpt:
      "In a world designed to capture and monetize our focus, the radical act of choosing where to direct our minds.",
    content: `
<p>I deleted Instagram on a Tuesday. Nothing dramatic happened—no existential crisis, no social media meltdown. I simply realized I'd spent two hours that morning scrolling through a feed I couldn't remember, consuming content that left me feeling worse than before I started.</p>

<p>That was eighteen months ago. What I've learned since has fundamentally changed how I think about technology, attention, and what it means to live a good life in the digital age.</p>

<h2>The Attention Economy</h2>

<p>We're living through an unprecedented experiment in human consciousness. For the first time in history, some of the world's most brilliant engineers are spending their days figuring out how to capture and hold our attention—not to inform or enlighten us, but to sell it to advertisers.</p>

<blockquote>The most valuable resource in the 21st century isn't oil or data. It's human attention, and there's a war being waged for yours.</blockquote>

<p>Digital minimalism isn't about rejecting technology. It's about being intentional with how we use it. It's about asking: Is this tool serving my values, or am I serving the tool?</p>

<h2>A Framework for Intentional Tech Use</h2>

<p>Over the past year, I've developed a simple framework for evaluating digital tools:</p>

<ul>
<li>Does this technology help me create or just consume?</li>
<li>Does it connect me meaningfully with others or just simulate connection?</li>
<li>Do I feel better or worse after using it?</li>
<li>Am I using it intentionally or out of habit?</li>
</ul>

<h3>The Surprising Benefits</h3>

<p>What I didn't expect was how much would fill the space left by endless scrolling. I read more books in the past year than in the previous five. I picked up hobbies I'd abandoned. I had conversations—real ones, not comment threads—that reminded me what human connection actually feels like.</p>

<p>Reclaiming your attention isn't easy in a world designed to steal it. But it might be the most important thing you do.</p>
    `,
    coverImage:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1200&h=800&fit=crop",
    seo: {
      metaTitle:
        "Digital Minimalism: Reclaiming Your Attention | Technology & Life",
      metaDescription:
        "Learn how to reclaim your attention in a world designed to capture it. A practical guide to intentional technology use.",
    },
    author: authors[0],
    publishedAt: "2024-11-28",
    readingTime: 6,
    category: "Technology",
  },
  {
    id: "5",
    title: "The Last Light of Patagonia",
    slug: "last-light-patagonia",
    excerpt:
      "Chasing golden hour at the end of the world, where mountains pierce the sky and solitude becomes a companion.",
    content: `
<p>The wind in Patagonia doesn't blow—it assaults. It tears across the steppe with a fury that makes you question your life choices, your gear, and your general sanity for being here at all. And yet, watching the last light of day paint Torres del Paine in shades of rose and gold, I understood why people keep coming back.</p>

<p>I'd spent three weeks in this wild corner of South America, chasing light through landscapes that seemed to exist outside of time. What I found went far beyond photographs.</p>

<h2>The Edge of the World</h2>

<p>There's a reason Patagonia has become synonymous with adventure. This is the end of the continental Americas, where the Andes make their final dramatic stand before surrendering to the Southern Ocean. The scale is almost incomprehensible—glaciers the size of cities, peaks that seem to puncture the stratosphere.</p>

<blockquote>In Patagonia, you don't conquer the landscape. You simply witness it, humbled by forces far greater than yourself.</blockquote>

<p>My first morning at the Mirador base camp, I woke at 4 AM to find the sky already beginning to lighten. The race was on.</p>

<h2>Lessons from the Trail</h2>

<p>Backpacking through this terrain teaches you things that comfortable life never can:</p>

<ul>
<li>Everything you need can fit in a 50-liter pack</li>
<li>Discomfort is temporary; regret for not trying is permanent</li>
<li>The best views come after the hardest climbs</li>
<li>Solitude is a gift, not a punishment</li>
</ul>

<h3>The Golden Hour</h3>

<p>On my last evening, I hiked to a viewpoint I'd discovered by accident—a rocky outcrop away from the crowds. As the sun descended, the granite towers caught fire, their faces glowing impossibly warm against the cold blue sky.</p>

<p>I didn't take a single photo. Some moments are meant to be absorbed, not captured.</p>
    `,
    coverImage:
      "https://images.unsplash.com/photo-1531794675286-fda85b6b6df3?w=1200&h=800&fit=crop",
    seo: {
      metaTitle: "The Last Light of Patagonia | Travel Photography & Stories",
      metaDescription:
        "Journey to the edge of the world in Patagonia, where dramatic landscapes and golden light create unforgettable moments.",
    },
    author: authors[1],
    publishedAt: "2024-11-22",
    readingTime: 7,
    category: "Travel",
  },
  {
    id: "6",
    title: "The Science of Sourdough: A Baker's Guide",
    slug: "science-of-sourdough",
    excerpt:
      "Understanding the ancient alchemy of wild fermentation, and why your grandmother's bread was better than anything from a store.",
    content: `
<p>My sourdough starter is named Margaret, after my grandmother who taught me that bread is more than sustenance—it's a living thing, a collaboration between baker and billions of microorganisms that transforms simple ingredients into something almost magical.</p>

<p>The resurgence of home baking has brought sourdough into countless kitchens, but understanding the science behind those beautiful open crumbs and complex flavors can transform a hobby into a true craft.</p>

<h2>The Living Culture</h2>

<p>A sourdough starter isn't just flour and water. It's a thriving ecosystem of wild yeasts and lactic acid bacteria, captured from the air, the flour, and your own hands. This microbial community is what gives sourdough its distinctive tang, its keeping qualities, and its deeply satisfying texture.</p>

<blockquote>Every sourdough starter is unique—a microbial fingerprint of its place and maker. That's why your bread will never taste exactly like anyone else's.</blockquote>

<p>The relationship between wild yeast and lactobacillus is symbiotic. The bacteria produce acids that create an environment where wild yeast thrives, while the yeast produces CO2 and alcohol that feed the bacteria.</p>

<h2>The Variables That Matter</h2>

<p>Consistency in sourdough comes from understanding and controlling key variables:</p>

<ul>
<li>Hydration: The ratio of water to flour affects texture and fermentation speed</li>
<li>Temperature: Fermentation is a biological process; warmer is faster, cooler is more flavorful</li>
<li>Time: Patience is the secret ingredient no recipe can replace</li>
<li>Flour selection: Different grains feed different microorganisms</li>
</ul>

<h3>The Bake</h3>

<p>The final transformation happens in the oven, where the Maillard reaction creates the crackling crust and the heat turns moisture into the steam that gives sourdough its characteristic holes.</p>

<p>Baking sourdough isn't just cooking—it's continuing a tradition that stretches back thousands of years, connecting us to every baker who ever mixed flour and water and waited for magic to happen.</p>
    `,
    coverImage:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=1200&h=800&fit=crop",
    seo: {
      metaTitle: "The Science of Sourdough: A Baker's Guide | Food & Culture",
      metaDescription:
        "Master the art and science of sourdough baking. Understand fermentation, develop your starter, and bake bread like your grandmother made.",
    },
    author: authors[2],
    publishedAt: "2024-11-18",
    readingTime: 8,
    category: "Food",
  },
]

export const getArticleBySlug = (slug: string): Article | undefined => {
  return articles.find((article) => article.slug === slug)
}

export const getArticlesByAuthor = (authorSlug: string): Article[] => {
  return articles.filter((article) => article.author.slug === authorSlug)
}

export const getAuthorBySlug = (slug: string): Author | undefined => {
  return authors.find((author) => author.slug === slug)
}
