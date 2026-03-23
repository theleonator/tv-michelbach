import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="gradient-footer text-primary-foreground">
    <div className="container-main py-12 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center">
              <span className="font-bold text-sm">TV</span>
            </div>
            <div>
              <p className="font-bold leading-tight">TV Michelbach 1903 e.V.</p>
            </div>
          </div>
          <p className="text-sm text-primary-foreground/80 leading-relaxed">
            Seit über 120 Jahren bewegen wir Menschen in Michelbach – mit Leidenschaft, Gemeinschaft und sportlicher Vielfalt.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Navigation</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/80">
            <li><Link to="/" className="hover:text-primary-foreground transition-colors">Startseite</Link></li>
            <li><Link to="/ueber-uns" className="hover:text-primary-foreground transition-colors">Über uns</Link></li>
            <li><Link to="/abteilungen" className="hover:text-primary-foreground transition-colors">Abteilungen</Link></li>
            <li><Link to="/news" className="hover:text-primary-foreground transition-colors">News</Link></li>
            <li><Link to="/termine" className="hover:text-primary-foreground transition-colors">Termine</Link></li>
            <li><Link to="/kontakt" className="hover:text-primary-foreground transition-colors">Kontakt</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Kontakt</h4>
          <div className="text-sm text-primary-foreground/80 space-y-1">
            <p>TV Michelbach 1903 e.V.</p>
            <p>Sportstraße 12</p>
            <p>74544 Michelbach</p>
            <p className="mt-3">info@tv-michelbach.de</p>
            <p>Tel: 0791 / 12 34 56</p>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/20 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
        <p>© 2025 TV Michelbach 1903 e.V. Alle Rechte vorbehalten.</p>
        <div className="flex gap-4">
          <Link to="/impressum" className="hover:text-primary-foreground transition-colors">Impressum</Link>
          <Link to="/datenschutz" className="hover:text-primary-foreground transition-colors">Datenschutz</Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
