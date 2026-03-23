import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, ArrowRight, ChevronRight } from "lucide-react";
import { departments } from "@/data/departments";
import heroImage from "@/assets/hero-sports.jpg";

const newsItems = [
  { id: 1, title: "Sommersportfest 2025 – Ein voller Erfolg!", date: "15.03.2025", excerpt: "Über 300 Besucher feierten bei strahlendem Sonnenschein unser jährliches Sommersportfest. Höhepunkt war der Staffellauf der Abteilungen.", category: "Verein" },
  { id: 2, title: "Neue Trainingszeiten ab April", date: "10.03.2025", excerpt: "Ab dem 1. April gelten neue Trainingszeiten für die Abteilungen Turnen und Leichtathletik. Alle Details finden Sie hier.", category: "Training" },
  { id: 3, title: "Judo-Team holt Bezirksmeistertitel", date: "01.03.2025", excerpt: "Drei Goldmedaillen und zwei Silbermedaillen – unsere Judoka überzeugten bei den Bezirksmeisterschaften in Schwäbisch Hall.", category: "Wettkampf" },
];

const events = [
  { title: "Frühjahrswanderung", date: "12. April 2025", location: "Treffpunkt Vereinsheim", desc: "Gemeinsame Wanderung rund um Michelbach für die ganze Familie." },
  { title: "Volleyball Beach-Turnier", date: "24. Mai 2025", location: "Freibadgelände", desc: "Offenes Beachvolleyball-Turnier mit Anmeldung ab sofort." },
  { title: "Sommersportfest", date: "28. Juni 2025", location: "Sportplatz Michelbach", desc: "Unser großes Vereinsfest mit Wettkämpfen, Vorführungen und gemütlichem Beisammensein." },
];

const trainers = [
  { name: "Thomas Müller", role: "Leichtathletik", desc: "Seit 15 Jahren als Trainer aktiv, lizenzierter DLV-Trainer." },
  { name: "Sarah Weber", role: "Showtanz", desc: "Ausgebildete Tanzpädagogin mit Leidenschaft für Choreografie." },
  { name: "Kenji Tanaka", role: "Judo", desc: "3. Dan Judo, nationale Wettkampferfahrung." },
];

const Index = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center">
        <img src={heroImage} alt="TV Michelbach Sportanlage" className="absolute inset-0 w-full h-full object-cover" width={1920} height={900} />
        <div className="absolute inset-0 gradient-hero-overlay" />
        <div className="relative container-main py-20 text-primary-foreground">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 max-w-2xl leading-tight">
            Bewegung. Gemeinschaft. Leidenschaft.
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-xl">
            Seit 1903 vereinen wir Sport, Spaß und Zusammenhalt im Herzen von Michelbach.
          </p>
          <Link to="/abteilungen">
            <Button variant="hero" size="lg">
              Unsere Abteilungen entdecken
              <ArrowRight size={18} />
            </Button>
          </Link>
        </div>
      </section>

      {/* Abteilungen Grid */}
      <section className="section-padding bg-background">
        <div className="container-main">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-3">Unsere Abteilungen</h2>
          <p className="text-muted-foreground text-center mb-10 max-w-xl mx-auto">Acht Abteilungen – ein Verein. Finde deine Sportart!</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {departments.map((dept) => (
              <Link
                key={dept.slug}
                to={`/abteilungen/${dept.slug}`}
                className="group bg-card rounded-xl p-6 shadow-md card-hover text-center border border-border"
              >
                <div className="w-14 h-14 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <dept.icon className="text-primary" size={28} />
                </div>
                <h3 className="font-semibold text-foreground">{dept.name}</h3>
                <p className="text-xs text-muted-foreground mt-1 hidden md:block">{dept.shortDesc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Vereinsvorstellung */}
      <section className="section-padding bg-muted">
        <div className="container-main max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Willkommen beim TV Michelbach</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Seit über 120 Jahren ist der TV Michelbach 1903 e.V. ein fester Bestandteil des sportlichen und gesellschaftlichen Lebens in Michelbach. Mit acht Abteilungen bieten wir ein breites Angebot für alle Altersgruppen – vom Kleinkind bis zum Senior. Bei uns steht die Freude an Bewegung und Gemeinschaft im Mittelpunkt. Werde Teil unserer Vereinsfamilie!
          </p>
        </div>
      </section>

      {/* News Teaser */}
      <section className="section-padding bg-background">
        <div className="container-main">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl md:text-4xl font-bold">Aktuelles</h2>
            <Link to="/news" className="text-primary font-medium flex items-center gap-1 hover:underline">
              Alle News <ChevronRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {newsItems.map((item) => (
              <article key={item.id} className="bg-card rounded-xl shadow-md card-hover overflow-hidden border border-border">
                <div className="h-40 bg-primary/10 flex items-center justify-center">
                  <span className="text-primary/40 text-sm">Bild-Platzhalter</span>
                </div>
                <div className="p-6">
                  <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded">{item.category}</span>
                  <h3 className="font-bold mt-3 mb-2 text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{item.excerpt}</p>
                  <p className="text-xs text-muted-foreground">{item.date}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Termine */}
      <section className="section-padding bg-muted">
        <div className="container-main">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl md:text-4xl font-bold">Termine & Events</h2>
            <Link to="/termine" className="text-primary font-medium flex items-center gap-1 hover:underline">
              Alle Termine <ChevronRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {events.map((ev, i) => (
              <div key={i} className="bg-card rounded-xl p-6 shadow-md card-hover border border-border">
                <div className="flex items-center gap-2 text-primary mb-3">
                  <Calendar size={18} />
                  <span className="font-semibold text-sm">{ev.date}</span>
                </div>
                <h3 className="font-bold text-foreground mb-2">{ev.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{ev.desc}</p>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <MapPin size={14} />
                  {ev.location}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trainer */}
      <section className="section-padding bg-background">
        <div className="container-main">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Unsere Trainer</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {trainers.map((t, i) => (
              <div key={i} className="bg-card rounded-xl p-6 shadow-md card-hover border border-border text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold text-xl">{t.name.charAt(0)}</span>
                </div>
                <h3 className="font-bold text-foreground">{t.name}</h3>
                <p className="text-sm text-primary font-medium">{t.role}</p>
                <p className="text-sm text-muted-foreground mt-2">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kontakt Teaser */}
      <section className="section-padding gradient-hero-overlay text-primary-foreground">
        <div className="container-main text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Kontakt aufnehmen</h2>
          <p className="text-lg text-primary-foreground/90 mb-2">TV Michelbach 1903 e.V. · Sportstraße 12 · 74544 Michelbach</p>
          <p className="text-primary-foreground/80 mb-8">info@tv-michelbach.de · Tel: 0791 / 12 34 56</p>
          <Link to="/kontakt">
            <Button variant="hero" size="lg">
              Mehr erfahren
              <ArrowRight size={18} />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
