import Image from "next/image";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-4">
            <span className="text-primary font-semibold">HOLA, SOY</span>
            <h1 className="text-5xl md:text-7xl font-bold text-text-primary">
              VICTOR MANUEL NAVARRO FERMIN
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-text-secondary">
              Desarrollador Full-Stack & Web
            </h2>
            <p className="text-text-secondary mt-2">
              Ingeniero en Informática y desarrollador web de Santiago de Chile,
              con formación en gestión de proyectos y riesgos y experiencia en
              metodologías ágiles como Scrum. Me especializo en el ecosistema de
              React (incluyendo Next.js y TypeScript) y cuento con experiencia
              en Python, HTML, Angular y desarrollo de aplicaciones web modernas
              y funcionales. Me destaco por ser proactivo, organizado y con una
              alta capacidad de trabajo en equipo. Busco oportunidades para
              aplicar mis conocimientos, seguir aprendiendo y crear soluciones
              tecnológicas de impacto. En mi tiempo libre disfruto de la música,
              el animé, el manga y el fútbol, pasatiempos que enriquecen mi
              creatividad.
            </p>
          </div>

          <div className="relative flex justify-center items-center">
            <div className="absolute w-4/5 h-4/5 bg-primary/20 rounded-full blur-3xl shadow-primary -z-10"></div>

            <Image
              src="/fotoperfil.jpg"
              alt="Foto de [Tu Nombre]"
              width={400}
              height={400}
              className="rounded-full z-10 border-4 border-card object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
