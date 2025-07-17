// src/components/Hero.tsx
import Image from 'next/image';

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Columna de Texto */}
          <div className="flex flex-col gap-4">
            <span className="text-primary font-semibold">HOLA, SOY</span>
            <h1 className="text-5xl md:text-7xl font-bold text-text-primary">
              VICTOR MANUEL NAVARRO FERMIN
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-text-secondary">
              Desarrollador Full-Stack & Web
            </h2>
            <p className="text-text-secondary mt-2">
              Soy un apasionado desarrollador de [Santiago de Chile], enfocado en crear
              aplicaciones web modernas y funcionales. Me especializo en el ecosistema de
              React, incluyendo Next.js y TypeScript.
            </p>
            <a href="#contact" className="bg-primary text-background font-bold py-3 px-8 rounded-full w-fit mt-4 hover:bg-opacity-90 transition-all shadow-lg hover:shadow-primary">
              Contactar
            </a>
          </div>

          {/* Columna de Imagen */}
          <div className="relative flex justify-center items-center">
            {/* El círculo verde detrás */}
            <div className="absolute w-4/5 h-4/5 bg-primary/20 rounded-full blur-3xl shadow-primary -z-10"></div>
            
            {/* Tu Imagen - ¡RECUERDA CAMBIARLA! */}
            <Image
              src="/fotoperfil.jpg" // Cambia esto a la ruta de tu imagen
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