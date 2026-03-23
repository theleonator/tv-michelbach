const newsArticles = [
  { id: 1, title: "Sommersportfest 2025 – Ein voller Erfolg!", date: "15.03.2025", category: "Verein", excerpt: "Über 300 Besucher feierten bei strahlendem Sonnenschein unser jährliches Sommersportfest. Höhepunkt war der Staffellauf der Abteilungen.", content: "Das Sommersportfest des TV Michelbach war auch in diesem Jahr ein Highlight im Vereinskalender. Bei bestem Wetter kamen über 300 Besucher auf den Sportplatz, um die verschiedenen Vorführungen und Wettkämpfe zu erleben." },
  { id: 2, title: "Neue Trainingszeiten ab April", date: "10.03.2025", category: "Training", excerpt: "Ab dem 1. April gelten neue Trainingszeiten für die Abteilungen Turnen und Leichtathletik.", content: "Aufgrund der großen Nachfrage passen wir die Trainingszeiten für Turnen und Leichtathletik an. Die neuen Zeiten gelten ab dem 1. April und ermöglichen ein erweitertes Angebot für alle Altersgruppen." },
  { id: 3, title: "Judo-Team holt Bezirksmeistertitel", date: "01.03.2025", category: "Wettkampf", excerpt: "Drei Goldmedaillen und zwei Silbermedaillen – unsere Judoka überzeugten bei den Bezirksmeisterschaften.", content: "Bei den Bezirksmeisterschaften in Schwäbisch Hall zeigten unsere Judoka herausragende Leistungen. Mit drei Gold- und zwei Silbermedaillen kehrt das Team als erfolgreichster Verein nach Michelbach zurück." },
  { id: 4, title: "Showtanz-Gruppe bei Landesmeisterschaft", date: "20.02.2025", category: "Wettkampf", excerpt: "Unsere Showtanz-Jugendgruppe hat sich für die Landesmeisterschaft qualifiziert.", content: "Mit einer beeindruckenden Choreografie zum Thema 'Zeitreise' überzeugte unsere Jugend-Showtanzgruppe die Jury und sicherte sich den Startplatz bei der Landesmeisterschaft." },
  { id: 5, title: "Mitgliederversammlung 2025", date: "05.02.2025", category: "Verein", excerpt: "Einladung zur ordentlichen Mitgliederversammlung am 15. März im Vereinsheim.", content: "Alle Mitglieder sind herzlich zur Mitgliederversammlung eingeladen. Auf der Tagesordnung stehen der Jahresbericht, die Kassenlage und Neuwahlen des Vorstands." },
  { id: 6, title: "Volleyball-Team steigt in Bezirksliga auf", date: "28.01.2025", category: "Wettkampf", excerpt: "Nach einer starken Saison gelingt dem Mixed-Team der Aufstieg in die Bezirksliga.", content: "Mit 18 Siegen aus 20 Spielen sicherte sich unser Volleyball-Mixed-Team souverän den Aufstieg in die Bezirksliga. Eine großartige Mannschaftsleistung!" },
];

const News = () => (
  <div>
    <section className="gradient-hero-overlay text-primary-foreground py-20">
      <div className="container-main">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">News & Aktuelles</h1>
        <p className="text-lg text-primary-foreground/90">Neuigkeiten aus dem Vereinsleben.</p>
      </div>
    </section>

    <section className="section-padding bg-background">
      <div className="container-main">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsArticles.map((article) => (
            <article key={article.id} className="bg-card rounded-xl shadow-md card-hover overflow-hidden border border-border">
              <div className="h-44 bg-primary/10 flex items-center justify-center">
                <span className="text-primary/30 text-sm">Bild-Platzhalter</span>
              </div>
              <div className="p-6">
                <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded">{article.category}</span>
                <h3 className="font-bold text-lg mt-3 mb-2 text-foreground">{article.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{article.excerpt}</p>
                <p className="text-xs text-muted-foreground">{article.date}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default News;
