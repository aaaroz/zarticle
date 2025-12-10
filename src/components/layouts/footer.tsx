const Footer = () => {
  return (
    <footer className="bg-card border-border mt-20 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="col-span-1 md:col-span-2">
            <a href="/" className="mb-4 inline-block">
              <h2 className="font-display text-foreground text-2xl font-semibold">
                <span className="text-primary">z</span>Article
              </h2>
            </a>
            <p className="font-body text-muted-foreground max-w-sm">
              Thoughtful essays and stories on living well, exploring the world,
              and savoring life's simple pleasures.
            </p>
          </div>
          <div>
            <h3 className="font-display text-foreground mb-4 text-sm font-semibold tracking-wider uppercase">
              Categories
            </h3>
            <ul className="space-y-2">
              {["Lifestyle", "Travel", "Food", "Technology"].map((category) => (
                <li key={category}>
                  <a
                    href="/"
                    className="font-body text-muted-foreground hover:text-primary text-sm transition-colors"
                  >
                    {category}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-display text-foreground mb-4 text-sm font-semibold tracking-wider uppercase">
              Connect
            </h3>
            <ul className="space-y-2">
              {["Twitter", "Instagram", "Newsletter", "RSS Feed"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="font-body text-muted-foreground hover:text-primary text-sm transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>
        </div>
        <div className="border-border mt-12 border-t pt-8 text-center">
          <p className="font-body text-muted-foreground text-sm">
            © {new Date().getFullYear()} zArticle. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
