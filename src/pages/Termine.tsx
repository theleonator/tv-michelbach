import { useState } from "react";
import { Calendar, MapPin, Filter } from "lucide-react";

const allEvents = [
  { title: "Frühjahrswanderung", date: "12.04.2025", month: "April", dept: "Sonstiges", location: "Treffpunkt Vereinsheim", desc: "Gemeinsame Wanderung rund um Michelbach für die ganze Familie." },
  { title: "Judo-Lehrgang", date: "19.04.2025", month: "April", dept: "Judo", location: "Judohalle Michelbach", desc: "Gasttrainer aus Stuttgart für einen Sonderlehrgang aller Altersklassen." },
  { title: "Volleyball Beach-Turnier", date: "24.05.2025", month: "Mai", dept: "Volleyball", location: "Freibadgelände", desc: "Offenes Beachvolleyball-Turnier – Anmeldung ab sofort!" },
  { title: "Showtanz-Aufführung", date: "07.06.2025", month: "Juni", dept: "Showtanz", location: "Turnhalle Michelbach", desc: "Jahresaufführung aller Showtanz-Gruppen mit anschließendem Beisammensein." },
  { title: "Sommersportfest", date: "28.06.2025", month: "Juni", dept: "Verein", location: "Sportplatz Michelbach", desc: "Unser großes Vereinsfest mit Wettkämpfen, Vorführungen und Bewirtung." },
  { title: "Leichtathletik-Sportfest", date: "12.07.2025", month: "Juli", dept: "Leichtathletik", location: "Sportplatz Michelbach", desc: "Offenes Leichtathletik-Sportfest für Kinder und Jugendliche." },
  { title: "Tischtennis-Vereinsmeisterschaft", date: "20.09.2025", month: "September", dept: "Tischtennis", location: "Sporthalle Michelbach", desc: "Vereinsinterne Tischtennis-Meisterschaften mit Siegerehrung." },
  { title: "Herbstwanderung", date: "18.10.2025", month: "Oktober", dept: "Sonstiges", location: "Wechselnder Treffpunkt", desc: "Herbstliche Wanderung mit Einkehr." },
];

const months = ["Alle", "April", "Mai", "Juni", "Juli", "September", "Oktober"];
const depts = ["Alle", "Verein", "Leichtathletik", "Judo", "Volleyball", "Showtanz", "Tischtennis", "Sonstiges"];

const Termine = () => {
  const [filterMonth, setFilterMonth] = useState("Alle");
  const [filterDept, setFilterDept] = useState("Alle");

  const filtered = allEvents.filter((e) => {
    if (filterMonth !== "Alle" && e.month !== filterMonth) return false;
    if (filterDept !== "Alle" && e.dept !== filterDept) return false;
    return true;
  });

  return (
    <div>
      <section className="gradient-hero-overlay text-primary-foreground py-20">
        <div className="container-main">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Termine & Veranstaltungen</h1>
          <p className="text-lg text-primary-foreground/90">Alle kommenden Events auf einen Blick.</p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-main">
          {/* Filters */}
          <div className="flex flex-wrap gap-4 mb-8 items-center">
            <Filter size={18} className="text-muted-foreground" />
            <select
              value={filterMonth}
              onChange={(e) => setFilterMonth(e.target.value)}
              className="border border-border rounded-lg px-3 py-2 text-sm bg-card text-foreground"
            >
              {months.map((m) => <option key={m} value={m}>{m === "Alle" ? "Alle Monate" : m}</option>)}
            </select>
            <select
              value={filterDept}
              onChange={(e) => setFilterDept(e.target.value)}
              className="border border-border rounded-lg px-3 py-2 text-sm bg-card text-foreground"
            >
              {depts.map((d) => <option key={d} value={d}>{d === "Alle" ? "Alle Abteilungen" : d}</option>)}
            </select>
          </div>

          {filtered.length === 0 ? (
            <p className="text-muted-foreground text-center py-12">Keine Termine für diese Auswahl gefunden.</p>
          ) : (
            <div className="space-y-4">
              {filtered.map((ev, i) => (
                <div key={i} className="bg-card rounded-xl p-6 shadow-md border border-border flex flex-col md:flex-row md:items-center gap-4 card-hover">
                  <div className="flex items-center gap-3 md:w-40 shrink-0">
                    <Calendar className="text-primary" size={20} />
                    <span className="font-semibold text-foreground">{ev.date}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-foreground">{ev.title}</h3>
                    <p className="text-sm text-muted-foreground">{ev.desc}</p>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground md:w-52 shrink-0">
                    <MapPin size={14} />
                    {ev.location}
                  </div>
                  <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded self-start">{ev.dept}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Termine;
