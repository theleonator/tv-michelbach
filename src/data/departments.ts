import type { LucideIcon } from "lucide-react";
import { Trophy, Users, Dumbbell, Music, TableProperties, Medal, Volleyball, Shuffle, MoreHorizontal } from "lucide-react";

export interface Department {
  slug: string;
  name: string;
  icon: LucideIcon;
  shortDesc: string;
  description: string;
  training: { group: string; day: string; time: string; location: string }[];
  trainer: string;
  trainerRole: string;
}

export const departments: Department[] = [
  {
    slug: "leichtathletik",
    name: "Leichtathletik",
    icon: Medal,
    shortDesc: "Laufen, Springen, Werfen – für alle Altersklassen.",
    description: "Die Leichtathletik-Abteilung des TV Michelbach bietet ein vielfältiges Trainingsangebot für Kinder, Jugendliche und Erwachsene. Von Sprint über Weitsprung bis hin zu Langstrecke – bei uns findet jeder seine Disziplin. Regelmäßige Teilnahmen an Wettkämpfen und Sportfesten runden unser Angebot ab.",
    training: [
      { group: "Kinder (6–10)", day: "Dienstag", time: "16:00–17:30", location: "Sportplatz Michelbach" },
      { group: "Jugend (11–17)", day: "Donnerstag", time: "17:00–18:30", location: "Sportplatz Michelbach" },
      { group: "Erwachsene", day: "Dienstag", time: "18:30–20:00", location: "Sportplatz Michelbach" },
    ],
    trainer: "Thomas Müller",
    trainerRole: "Abteilungsleiter Leichtathletik",
  },
  {
    slug: "showtanz",
    name: "Showtanz",
    icon: Music,
    shortDesc: "Rhythmus, Choreografie und jede Menge Spaß.",
    description: "Unsere Showtanz-Gruppen begeistern mit mitreißenden Choreografien bei Veranstaltungen und Wettbewerben. Von den kleinsten Tänzerinnen bis zur Erwachsenengruppe – hier wird getanzt, gelacht und gemeinsam aufgetreten.",
    training: [
      { group: "Minis (4–7)", day: "Montag", time: "15:30–16:30", location: "Turnhalle Michelbach" },
      { group: "Jugend (8–14)", day: "Mittwoch", time: "17:00–18:30", location: "Turnhalle Michelbach" },
      { group: "Erwachsene", day: "Freitag", time: "19:00–21:00", location: "Turnhalle Michelbach" },
    ],
    trainer: "Sarah Weber",
    trainerRole: "Abteilungsleiterin Showtanz",
  },
  {
    slug: "tischtennis",
    name: "Tischtennis",
    icon: TableProperties,
    shortDesc: "Schnelle Ballwechsel und spannende Ligaspiele.",
    description: "Die Tischtennis-Abteilung ist eine der ältesten des Vereins. Mit mehreren Mannschaften nehmen wir aktiv am Ligabetrieb teil. Ob Anfänger oder Fortgeschrittener – bei uns ist jeder willkommen.",
    training: [
      { group: "Jugend", day: "Mittwoch", time: "17:00–18:30", location: "Sporthalle Michelbach" },
      { group: "Erwachsene", day: "Mittwoch", time: "19:00–21:00", location: "Sporthalle Michelbach" },
      { group: "Freies Spiel", day: "Samstag", time: "14:00–16:00", location: "Sporthalle Michelbach" },
    ],
    trainer: "Klaus Schneider",
    trainerRole: "Abteilungsleiter Tischtennis",
  },
  {
    slug: "turnen",
    name: "Turnen",
    icon: Dumbbell,
    shortDesc: "Vom Kinderturnen bis zum Leistungssport.",
    description: "Turnen gehört zu den traditionsreichsten Abteilungen des TV Michelbach. Von Eltern-Kind-Turnen über Geräteturnen bis hin zu Gymnastikgruppen für Senioren bieten wir ein breites Spektrum.",
    training: [
      { group: "Eltern-Kind (1–3)", day: "Dienstag", time: "09:30–10:30", location: "Turnhalle Michelbach" },
      { group: "Kinderturnen (4–6)", day: "Donnerstag", time: "15:00–16:00", location: "Turnhalle Michelbach" },
      { group: "Geräteturnen", day: "Montag", time: "17:00–19:00", location: "Turnhalle Michelbach" },
    ],
    trainer: "Anna Fischer",
    trainerRole: "Abteilungsleiterin Turnen",
  },
  {
    slug: "judo",
    name: "Judo",
    icon: Trophy,
    shortDesc: "Kampfkunst mit Respekt und Disziplin.",
    description: "Judo fördert nicht nur körperliche Fitness, sondern auch Respekt, Fairness und Selbstvertrauen. Unsere erfahrenen Trainer begleiten Einsteiger ebenso wie ambitionierte Wettkampfsportler.",
    training: [
      { group: "Kinder (6–10)", day: "Montag", time: "16:30–17:30", location: "Judohalle Michelbach" },
      { group: "Jugend/Erwachsene", day: "Montag & Donnerstag", time: "18:00–20:00", location: "Judohalle Michelbach" },
    ],
    trainer: "Kenji Tanaka",
    trainerRole: "Abteilungsleiter Judo",
  },
  {
    slug: "volleyball",
    name: "Volleyball",
    icon: Volleyball,
    shortDesc: "Teamgeist und Spielfreude am Netz.",
    description: "Unsere Volleyball-Abteilung steht für Teamgeist und Spaß am Spiel. Mit gemischten Teams und einer aktiven Hobbygruppe ist für jeden etwas dabei – ob Ligabetrieb oder Beachvolleyball im Sommer.",
    training: [
      { group: "Mixed", day: "Dienstag", time: "20:00–22:00", location: "Sporthalle Michelbach" },
      { group: "Hobby", day: "Sonntag", time: "10:00–12:00", location: "Sporthalle Michelbach" },
    ],
    trainer: "Julia Braun",
    trainerRole: "Abteilungsleiterin Volleyball",
  },
  {
    slug: "shuffleboard",
    name: "Shuffleboard",
    icon: Shuffle,
    shortDesc: "Präzision und Geselligkeit auf der Bahn.",
    description: "Shuffleboard erfreut sich wachsender Beliebtheit im Verein. In gemütlicher Atmosphäre treffen sich Spielerinnen und Spieler aller Altersklassen zum gemeinsamen Training und zu vereinsinternen Turnieren.",
    training: [
      { group: "Alle Altersklassen", day: "Freitag", time: "18:00–20:00", location: "Vereinsheim Michelbach" },
    ],
    trainer: "Herbert Maier",
    trainerRole: "Abteilungsleiter Shuffleboard",
  },
  {
    slug: "sonstiges",
    name: "Sonstiges",
    icon: MoreHorizontal,
    shortDesc: "Weitere Sport- und Freizeitangebote.",
    description: "Neben unseren Hauptabteilungen bieten wir weitere Aktivitäten wie Wandergruppen, Lauftreffs und saisonale Sportangebote. Hier findet jeder etwas Passendes – egal ob sportlich ambitioniert oder gesellig orientiert.",
    training: [
      { group: "Lauftreff", day: "Samstag", time: "09:00–10:30", location: "Treffpunkt Vereinsheim" },
      { group: "Wandergruppe", day: "Sonntag (14-tägig)", time: "10:00", location: "Wechselnde Treffpunkte" },
    ],
    trainer: "Petra Hoffmann",
    trainerRole: "Ansprechpartnerin Breitensport",
  },
];
