const Header = () => {
  return (
    <header className="bg-background/80 border-border sticky top-0 z-50 border-b backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <a href="/" className="group">
          <h1 className="font-display text-foreground text-2xl font-semibold tracking-tight">
            <span className="text-primary">z</span>Article
          </h1>
        </a>
        <nav className="flex items-center gap-8">
          <a
            href="/"
            className="font-body text-muted-foreground hover:text-foreground text-sm transition-colors"
          >
            Home
          </a>
          <a
            href="/category/lifestyle"
            className="font-body text-muted-foreground hover:text-foreground text-sm transition-colors"
          >
            Categories
          </a>
          <button className="font-body bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-4 py-2 text-sm transition-colors">
            Subscribe
          </button>
        </nav>
      </div>
    </header>
  )
}

export default Header
