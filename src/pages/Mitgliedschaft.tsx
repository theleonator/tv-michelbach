import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check, FileText, ArrowRight } from "lucide-react";

const benefits = [
  "Zugang zu allen Trainingsangeboten deiner Abteilung",
  "Vergünstigte Teilnahme an Vereinsveranstaltungen",
  "Nutzung aller Sportstätten des Vereins",
  "Versicherungsschutz über den Landessportbund",
  "Gemeinschaft und neue Kontakte in Michelbach",
  "Mitbestimmungsrecht bei der Mitgliederversammlung",
];

const beitraege = [
  { kategorie: "Kinder (bis 6 Jahre)", betrag: "30 €/Jahr" },
  { kategorie: "Kinder & Jugendliche (7–17)", betrag: "60 €/Jahr" },
  { kategorie: "Erwachsene", betrag: "96 €/Jahr" },
  { kategorie: "Familienbeitrag", betrag: "160 €/Jahr" },
  { kategorie: "Passive Mitglieder", betrag: "36 €/Jahr" },
];

const Mitgliedschaft = () => (
  <div>
    <section className="gradient-hero-overlay text-primary-foreground py-20">
      <div className="container-main">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Mitgliedschaft</h1>
        <p className="text-lg text-primary-foreground/90">Werde Teil der TV Michelbach Familie!</p>
      </div>
    </section>

    {/* Vorteile */}
    <section className="section-padding bg-background">
      <div className="container-main max-w-4xl">
        <h2 className="text-3xl font-bold mb-8 text-center">Deine Vorteile</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {benefits.map((b, i) => (
            <div key={i} className="flex items-start gap-3 bg-card rounded-xl p-5 border border-border shadow-sm">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                <Check className="text-primary" size={16} />
              </div>
              <p className="text-foreground">{b}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Beiträge */}
    <section className="section-padding bg-muted">
      <div className="container-main max-w-2xl">
        <h2 className="text-3xl font-bold mb-8 text-center">Mitgliedsbeiträge</h2>
        <div className="bg-card rounded-xl shadow-md border border-border overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-primary/10">
                <th className="text-left px-6 py-4 font-semibold text-foreground">Kategorie</th>
                <th className="text-right px-6 py-4 font-semibold text-foreground">Beitrag</th>
              </tr>
            </thead>
            <tbody>
              {beitraege.map((b, i) => (
                <tr key={i} className="border-t border-border">
                  <td className="px-6 py-4 text-foreground">{b.kategorie}</td>
                  <td className="px-6 py-4 text-right font-semibold text-primary">{b.betrag}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="section-padding bg-background">
      <div className="container-main text-center max-w-2xl">
        <h2 className="text-3xl font-bold mb-4">Jetzt Mitglied werden!</h2>
        <p className="text-muted-foreground mb-8">Lade den Mitgliedsantrag herunter, fülle ihn aus und gib ihn bei deinem Trainer oder der Geschäftsstelle ab.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="hero" size="lg">
            <FileText size={18} />
            Mitgliedsantrag (PDF)
          </Button>
          <Link to="/kontakt">
            <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/5">
              Kontakt aufnehmen <ArrowRight size={16} />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  </div>
);

export default Mitgliedschaft;
