import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail } from "lucide-react";

const Kontakt = () => (
  <div>
    <section className="gradient-hero-overlay text-primary-foreground py-20">
      <div className="container-main">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Kontakt</h1>
        <p className="text-lg text-primary-foreground/90">Wir freuen uns auf Ihre Nachricht.</p>
      </div>
    </section>

    <section className="section-padding bg-background">
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Formular */}
          <div className="bg-card rounded-xl p-8 shadow-md border border-border">
            <h2 className="text-2xl font-bold mb-6 text-foreground">Nachricht senden</h2>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Vorname</label>
                  <input type="text" className="w-full border border-border rounded-lg px-4 py-3 text-sm bg-background text-foreground" placeholder="Max" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Nachname</label>
                  <input type="text" className="w-full border border-border rounded-lg px-4 py-3 text-sm bg-background text-foreground" placeholder="Mustermann" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">E-Mail</label>
                <input type="email" className="w-full border border-border rounded-lg px-4 py-3 text-sm bg-background text-foreground" placeholder="max@example.de" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Betreff</label>
                <input type="text" className="w-full border border-border rounded-lg px-4 py-3 text-sm bg-background text-foreground" placeholder="Ihre Anfrage" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Nachricht</label>
                <textarea rows={5} className="w-full border border-border rounded-lg px-4 py-3 text-sm bg-background text-foreground resize-none" placeholder="Ihre Nachricht an uns..." />
              </div>
              <Button type="submit" variant="hero">Nachricht senden</Button>
            </form>
          </div>

          {/* Kontaktinfos */}
          <div className="space-y-6">
            <div className="bg-card rounded-xl p-8 shadow-md border border-border">
              <h2 className="text-2xl font-bold mb-6 text-foreground">Kontaktdaten</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="text-primary mt-1" size={20} />
                  <div>
                    <p className="font-medium text-foreground">Adresse</p>
                    <p className="text-sm text-muted-foreground">TV Michelbach 1903 e.V.<br />Sportstraße 12<br />74544 Michelbach</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="text-primary mt-1" size={20} />
                  <div>
                    <p className="font-medium text-foreground">Telefon</p>
                    <p className="text-sm text-muted-foreground">0791 / 12 34 56</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="text-primary mt-1" size={20} />
                  <div>
                    <p className="font-medium text-foreground">E-Mail</p>
                    <p className="text-sm text-muted-foreground">info@tv-michelbach.de</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Karte Platzhalter */}
            <div className="bg-card rounded-xl overflow-hidden shadow-md border border-border">
              <div className="h-64 bg-primary/10 flex items-center justify-center">
                <span className="text-primary/40 text-sm">Karten-Platzhalter (Google Maps)</span>
              </div>
            </div>

            {/* Ansprechpartner */}
            <div className="bg-card rounded-xl p-8 shadow-md border border-border">
              <h3 className="font-bold text-foreground mb-3">Geschäftsstelle</h3>
              <p className="text-sm text-muted-foreground">Martin Bauer (1. Vorsitzender)</p>
              <p className="text-sm text-muted-foreground">Erreichbar: Mo–Fr, 9–12 Uhr</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default Kontakt;
