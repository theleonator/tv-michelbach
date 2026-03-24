import { useState } from "react";
import { departments } from "@/data/departments";
import { ArrowRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const Abteilungen = () => {
  const [selectedDept, setSelectedDept] = useState<any>(null);
  const [open, setOpen] = useState(false);

  function openDepartment(dept: any) {
    setSelectedDept(dept);
    setOpen(true);
  }

  return (
    <div>
      {/* HERO */}
      <section className="gradient-hero-overlay text-primary-foreground py-20">
        <div className="container-main">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Unsere Abteilungen
          </h1>
          <p className="text-lg text-primary-foreground/90 max-w-xl">
            Acht Sportarten – ein Verein. Entdecke dein Angebot.
          </p>
        </div>
      </section>

      {/* ABTEILUNGEN GRID */}
      <section className="section-padding bg-background">
        <div className="container-main">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((dept) => (
              <div
                key={dept.slug}
                onClick={() => openDepartment(dept)}
                className="cursor-pointer group bg-card rounded-xl p-8 shadow-md card-hover border border-border"
              >
                <div className="w-16 h-16 mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <dept.icon className="text-primary" size={32} />
                </div>

                <h3 className="text-xl font-bold text-foreground mb-2">
                  {dept.name}
                </h3>

                <p className="text-sm text-muted-foreground mb-4">
                  {dept.shortDesc}
                </p>

                <span className="text-primary font-medium text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                  Infos anzeigen <ArrowRight size={14} />
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INFO MODAL */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-3xl">
          {selectedDept && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl">
                  {selectedDept.name}
                </DialogTitle>
              </DialogHeader>

              {/* Beschreibung */}
              <p className="text-muted-foreground mb-6">
                {selectedDept.description}
              </p>

              {/* Leiter */}
              <div className="grid md:grid-cols-2 gap-8 mb-6">
                {selectedDept.head && (
                  <div>
                    <h3 className="font-semibold mb-1">Abteilungsleiter</h3>
                    <p className="text-foreground">
                      {selectedDept.head.name}
                    </p>
                  </div>
                )}

                {selectedDept.coach && (
                  <div>
                    <h3 className="font-semibold mb-1">Übungsleiter</h3>
                    <p className="text-foreground">
                      {selectedDept.coach.name}
                    </p>
                  </div>
                )}
              </div>

              {/* Trainingszeiten */}
              {selectedDept.trainingTimes && (
                <div>
                  <h3 className="font-semibold mb-3">Trainingszeiten</h3>

                  <div className="overflow-x-auto">
                    <table className="w-full text-sm border">
                      <thead>
                        <tr className="bg-muted">
                          <th className="text-left py-2 px-3">Tag</th>
                          <th className="text-left py-2 px-3">Zeit</th>
                          <th className="text-left py-2 px-3">Ort</th>
                        </tr>
                      </thead>

                      <tbody>
                        {selectedDept.trainingTimes.map(
                          (training: any, index: number) => (
                            <tr key={index} className="border-t">
                              <td className="py-2 px-3">{training.day}</td>
                              <td className="py-2 px-3">{training.time}</td>
                              <td className="py-2 px-3">
                                {training.location}
                              </td>
                            </tr>
                          )
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Abteilungen;
