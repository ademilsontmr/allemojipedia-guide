import { Link } from "react-router-dom";
import { Search, Menu, Sun, Moon } from "lucide-react";
import { useState, forwardRef } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@/hooks/use-theme";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { theme, setTheme } = useTheme();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/?search=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur h-16">
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2 font-bold text-xl">
          <span className="emoji text-2xl w-8 h-8 flex items-center justify-center">📚</span>
          <span className="hidden sm:inline">Allemojipedia</span>
        </Link>

        <form onSubmit={handleSearch} className="flex-1 max-w-md">
          <div className="relative h-10">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="search"
              placeholder="Search emojis..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full h-full rounded-lg border border-input bg-search-bg py-2 pl-10 pr-4 text-sm outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
        </form>

        <nav className="hidden md:flex items-center gap-6 h-10">
          <Link to="/categories" className="text-sm font-medium hover:text-primary transition-colors">Categories</Link>
          <Link to="/people" className="text-sm font-medium hover:text-primary transition-colors">People</Link>
          <Link to="/emoji-comparisons" className="text-sm font-medium hover:text-primary transition-colors">Emoji Comparisons</Link>
          <Link to="/flag-quiz" className="text-sm font-medium hover:text-primary transition-colors">Flag Quiz</Link>
          <Link to="/blog" className="text-sm font-medium hover:text-primary transition-colors">Blog</Link>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="relative inline-flex items-center justify-center p-2 hover:bg-accent rounded-md">
                <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")}>
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>
                System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>

        <div className="flex md:hidden items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="relative inline-flex items-center justify-center p-2 hover:bg-accent rounded-md">
                <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")}>
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>
                System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <button className="p-2 hover:bg-accent rounded-md">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Menu</span>
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4 mt-8">
                <Link
                  to="/categories"
                  className="text-lg font-medium hover:text-primary transition-colors py-2"
                  onClick={handleNavClick}
                >
                  Categories
                </Link>
                <Link
                  to="/people"
                  className="text-lg font-medium hover:text-primary transition-colors py-2"
                  onClick={handleNavClick}
                >
                  People
                </Link>
                <Link
                  to="/emoji-comparisons"
                  className="text-lg font-medium hover:text-primary transition-colors py-2"
                  onClick={handleNavClick}
                >
                  Emoji Comparisons
                </Link>
                <Link
                  to="/flag-quiz"
                  className="text-lg font-medium hover:text-primary transition-colors py-2"
                  onClick={handleNavClick}
                >
                  Flag Quiz
                </Link>
                <Link
                  to="/blog"
                  className="text-lg font-medium hover:text-primary transition-colors py-2"
                  onClick={handleNavClick}
                >
                  Blog
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};
export const Footer = forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>((props, ref) => (
  <footer ref={ref} className="border-t border-border bg-muted/30 py-8 mt-12" {...props}>
    <div className="container-page">
      <div className="grid gap-8 md:grid-cols-4">
        <div>
          <h3 className="font-semibold mb-3 flex items-center gap-2">
            <span className="emoji text-xl">📚</span>
            Allemojipedia
          </h3>
          <p className="text-sm text-muted-foreground">Your complete emoji encyclopedia with meanings, examples, and copy-paste functionality.</p>
        </div>
        <div>
          <div className="font-medium mb-3">Categories</div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/category/smileys-and-emotion" className="hover:text-foreground">Smileys & Emotion</Link></li>
            <li><Link to="/category/people-and-body" className="hover:text-foreground">People & Body</Link></li>
            <li><Link to="/category/animals-and-nature" className="hover:text-foreground">Animals & Nature</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-medium mb-3">Resources</div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/categories" className="hover:text-foreground">All Categories</Link></li>
            <li><Link to="/people" className="hover:text-foreground">People Hub</Link></li>
            <li><Link to="/emoji-comparisons" className="hover:text-foreground">Emoji Comparisons</Link></li>
            <li><Link to="/flag-quiz" className="hover:text-foreground">Flag Quiz</Link></li>
            <li><Link to="/blog" className="hover:text-foreground">Blog</Link></li>
            <li><Link to="/sitemap" className="hover:text-foreground">Sitemap</Link></li>
            <li><Link to="/about" className="hover:text-foreground">About Us</Link></li>
            <li><Link to="/privacy" className="hover:text-foreground">Privacy Policy</Link></li>
            <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-medium mb-3">About</div>
          <p className="text-sm text-muted-foreground">© 2026 Allemojipedia. All emoji meanings and content provided for educational purposes.</p>
        </div>
      </div>
    </div>
  </footer>
));

Footer.displayName = "Footer";
export const Breadcrumbs = ({
  items
}: {
  items: {
    label: string;
    href?: string;
  }[];
}) => <nav aria-label="Breadcrumb" className="mb-6">
    <ol className="flex items-center gap-2 text-sm text-muted-foreground" itemScope itemType="https://schema.org/BreadcrumbList">
      {items.map((item, i) => <li key={i} className="flex items-center gap-2" itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
          {i > 0 && <span>/</span>}
          {item.href ? <Link to={item.href} itemProp="item" className="hover:text-foreground"><span itemProp="name">{item.label}</span></Link> : <span itemProp="name" className="text-foreground">{item.label}</span>}
          <meta itemProp="position" content={String(i + 1)} />
        </li>)}
    </ol>
  </nav>;
export const Layout = ({
  children
}: {
  children: React.ReactNode;
}) => <div className="min-h-screen flex flex-col">
    <Header />
    <main className="flex-1">{children}</main>
    <Footer />
  </div>;
