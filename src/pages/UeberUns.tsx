import { Users, Heart, Award, MapPin } from "lucide-react";

const vorstand = [
  { name: "Martin Bauer", role: "1. Vorsitzender" },
  { name: "Sabine Keller", role: "2. Vorsitzende" },
  { name: "Wolfgang Stein", role: "Kassenwart" },
  { name: "Claudia Roth", role: "Schriftführerin" },
];

const UeberUns = () => (
  <div>
    {/* Hero */}
    <section className="gradient-hero-overlay text-primary-foreground py-20">
      <div className="container-main">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Über uns</h1>
        <p className="text-lg text-primary-foreground/90 max-w-xl">Tradition, Gemeinschaft und sportliche Vielfalt seit 1903.</p>
      </div>
    </section>

    {/* Geschichte */}
    <section className="section-padding bg-background">
      <div className="container-main max-w-3xl">
        <h2 className="text-3xl font-bold mb-6">Unsere Geschichte</h2>
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>Der Turnverein Michelbach wurde im Jahr 1903 von einer Gruppe sportbegeisterter Bürger gegründet. Was als kleine Turngruppe begann, wuchs über die Jahrzehnte zu einem vielseitigen Breitensportverein heran.</p>
          <p>In den 1950er Jahren wurden die ersten zusätzlichen Abteilungen gegründet – Leichtathletik und Tischtennis bereicherten das Vereinsangebot. Die 1970er brachten den Bau der neuen Sporthalle und damit erweiterte Trainingsmöglichkeiten.</p>
          <p>Heute zählt der TV Michelbach über 800 Mitglieder in acht Abteilungen und ist einer der aktivsten Sportvereine der Region. Wir sind stolz auf unsere Geschichte und blicken voller Energie in die Zukunft.</p>
        </div>
      </div>
    </section>

    {/* Mission / Werte */}
    <section className="section-padding bg-muted">
      <div className="container-main">
        <h2 className="text-3xl font-bold text-center mb-10">Unsere Werte</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: Users, title: "Gemeinschaft", desc: "Sport verbindet Menschen. Bei uns zählt das Miteinander mehr als der Wettkampf." },
            { icon: Heart, title: "Ehrenamt", desc: "Über 50 ehrenamtliche Helfer tragen täglich zum Vereinsleben bei – mit Herz und Engagement." },
            { icon: Award, title: "Vielfalt", desc: "Acht Abteilungen für alle Altersgruppen – vom Kleinkind bis zum Senior finden alle ihr Sportangebot." },
          ].map((v, i) => (
            <div key={i} className="bg-card rounded-xl p-8 shadow-md text-center border border-border">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <v.icon className="text-primary" size={28} />
              </div>
              <h3 className="font-bold text-lg mb-2 text-foreground">{v.title}</h3>
              <p className="text-sm text-muted-foreground">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Vorstand */}
    <section className="section-padding bg-background">
      <div className="container-main">
        <h2 className="text-3xl font-bold text-center mb-10">Unser Vorstand</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {vorstand.map((v, i) => (
            <div key={i} className="text-center">
              <div className="w-24 h-24 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-primary font-bold text-2xl">{v.name.charAt(0)}</span>
              </div>
              <h3 className="font-bold text-foreground">{v.name}</h3>
              <p className="text-sm text-muted-foreground">{v.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Sportstätten */}
    <section className="section-padding bg-muted">
      <div className="container-main">
        <h2 className="text-3xl font-bold text-center mb-10">Unsere Sportstätten</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { name: "Sporthalle Michelbach", desc: "Moderne Halle für Turnen, Tischtennis, Volleyball und Judo." },
            { name: "Sportplatz Michelbach", desc: "Rasenplatz mit 400m-Laufbahn für Leichtathletik und Vereinsfeste." },
          ].map((s, i) => (
            <div key={i} className="bg-card rounded-xl overflow-hidden shadow-md border border-border">
              <div className="h-48 bg-primary/10 flex items-center justify-center">
                <MapPin className="text-primary/30" size={48} />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-foreground text-lg">{s.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default UeberUns;
