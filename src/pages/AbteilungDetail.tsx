import { useParams, Link } from "react-router-dom";
import { departments } from "@/data/departments";
import { ArrowLeft, MapPin, User } from "lucide-react";

const AbteilungDetail = () => {
  const { slug } = useParams();
  const dept = departments.find((d) => d.slug === slug);

  if (!dept) {
    return (
      <div className="section-padding container-main text-center">
        <h1 className="text-3xl font-bold mb-4">Abteilung nicht gefunden</h1>
        <Link to="/abteilungen" className="text-primary hover:underline">Zurück zur Übersicht</Link>
      </div>
    );
  }

  return (
    <div>
      <section className="gradient-hero-overlay text-primary-foreground py-20">
        <div className="container-main">
          <Link to="/abteilungen" className="inline-flex items-center gap-1 text-primary-foreground/80 hover:text-primary-foreground mb-4 text-sm">
            <ArrowLeft size={16} /> Alle Abteilungen
          </Link>
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-primary-foreground/20 flex items-center justify-center">
              <dept.icon size={32} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">{dept.name}</h1>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-main max-w-4xl">
          <p className="text-lg text-muted-foreground leading-relaxed mb-12">{dept.description}</p>

          {/* Trainingszeiten */}
          <h2 className="text-2xl font-bold mb-6">Trainingszeiten</h2>
          <div className="overflow-x-auto mb-12">
            <table className="w-full text-sm border border-border rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-primary/10">
                  <th className="text-left px-4 py-3 font-semibold text-foreground">Gruppe</th>
                  <th className="text-left px-4 py-3 font-semibold text-foreground">Tag</th>
                  <th className="text-left px-4 py-3 font-semibold text-foreground">Uhrzeit</th>
                  <th className="text-left px-4 py-3 font-semibold text-foreground">Ort</th>
                </tr>
              </thead>
              <tbody>
                {dept.training.map((t, i) => (
                  <tr key={i} className="border-t border-border">
                    <td className="px-4 py-3 text-foreground">{t.group}</td>
                    <td className="px-4 py-3 text-muted-foreground">{t.day}</td>
                    <td className="px-4 py-3 text-muted-foreground">{t.time}</td>
                    <td className="px-4 py-3 text-muted-foreground flex items-center gap-1"><MapPin size={14} />{t.location}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Trainer */}
          <h2 className="text-2xl font-bold mb-6">Ansprechpartner</h2>
          <div className="bg-card rounded-xl p-6 shadow-md border border-border flex items-center gap-4 mb-12">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
              <User className="text-primary" size={28} />
            </div>
            <div>
              <h3 className="font-bold text-foreground">{dept.trainer}</h3>
              <p className="text-sm text-muted-foreground">{dept.trainerRole}</p>
            </div>
          </div>

          {/* Galerie Platzhalter */}
          <h2 className="text-2xl font-bold mb-6">Galerie</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-40 bg-primary/5 rounded-xl flex items-center justify-center border border-border">
                <span className="text-primary/30 text-sm">Bild {i}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AbteilungDetail;
