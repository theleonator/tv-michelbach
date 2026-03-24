const Hero = () => {
  return (
    <section
      className="relative w-full h-[60vh] min-h-[400px] flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/hero-sports.jpg')" }}
    >
      {/* Dunkler Overlay für Lesbarkeit */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Inhalt */}
      <div className="relative z-10 text-center px-4">
        <img
          src="/logo.png"
          alt="TV Michelbach Logo"
          className="mx-auto w-24 h-24 drop-shadow-xl mb-6"
        />

        <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-2xl">
          TV Michelbach 1903 e.V.
        </h1>

        <p className="mt-4 text-lg md:text-xl text-white/90 max-w-2xl mx-auto drop-shadow">
          Bewegung. Gemeinschaft. Leidenschaft.  
        </p>

        <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/abteilungen"
            className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold shadow hover:bg-primary/90 transition"
          >
            Unsere Abteilungen
          </a>
          <a
            href="/mitgliedschaft"
            className="bg-white/90 backdrop-blur px-6 py-3 rounded-lg font-semibold shadow hover:bg-white transition"
          >
            Mitglied werden
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
``
