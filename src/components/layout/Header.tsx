import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Startseite", path: "/" },
  { label: "Über uns", path: "/ueber-uns" },
  { label: "Abteilungen", path: "/abteilungen" },
  { label: "News", path: "/news" },
  { label: "Termine", path: "/termine" },
  { label: "Mitgliedschaft", path: "/mitgliedschaft" },
  { label: "Kontakt", path: "/kontakt" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container-main flex items-center justify-between h-16 md:h-20">
        
        {/* Logo + Vereinsname */}
        <Link to="/" className="flex items-center gap-3">
          <img 
            src="/logo.png" 
            alt="Vereinslogo" 
            className="w-10 h-10 md:w-12 md:h-12 object-contain"
          />
          <div className="hidden sm:block">
            <p className="font-bold text-foreground leading-tight">TV Michelbach</p>
            <p className="text-xs text-muted-foreground">1903 e.V.</p>
          </div>
        </Link>

        {/* Desktop-Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                location.pathname === item.path
                  ? "bg-primary/10 text-primary"
                  : "text-foreground/70 hover:text-primary hover:bg-primary/5"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Button */}
        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menü"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <div className="lg:hidden bg-card border-t border-border">
          <nav className="container-main py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileOpen(false)}
                className={`px-4 py-3 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === item.path
                    ? "bg-primary/10 text-primary"
                    : "text-foreground/70 hover:text-primary"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
``
