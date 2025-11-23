import Image from "next/image";

const projectsData = [
  {
    title: "RecipeFinder",
    description:
      "Página web para buscar recetas, guardarlas en favoritos y descubrir nuevas ideas culinarias. Permite explorar recetas, buscarlas por nombre o ingredientes, y gestionar una lista de favoritos.",
    image: "/comida.jpg",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "API", "Favoritos"],
    liveUrl: "https://recipefinder-eight-ecru.vercel.app/",
    repoUrl: "https://github.com/VicxNF/RecipeFinder",
  },
  {
    title: "Linkin Park Analyzer",
    description:
      "Página web para analizar mas a profundidad las letras de la banda mundialmente conocida Linkin Park. Permite seleccionar partes de la letra de distintas canciones del grupo y analizarlas profundamente a través de Inteligencia Artificial.",
    image: "/linkinpark.jpg",
    tags: ["React", "Flask", "CSS", "API", "Inteligencia Artificial"],
    liveUrl: "https://linkin-park-analyzer.vercel.app/",
    repoUrl: "https://github.com/VicxNF/linkin-park-analyzer",
  },
  {
    title: "Boda Andrea y Yorguis",
    description:
      "Sitio web conmemorativo para la boda de Andrea y Yorguis. Incluye historia de la pareja, galería de fotos, formulario de confirmación de asistencia, detalles de logística (fecha, horario y alojamiento), lista de regalos y contacto para consultas. Diseño responsive y fácil de usar para que los invitados puedan informarse y compartir recuerdos.",
    image: "/Boda.png",
    tags: ["React", "Vite", "CSS", "API"],
    liveUrl: "https://boda-andrea-yorguis.vercel.app/",
    repoUrl: "https://github.com/VicxNF/Boda-Andrea-Yorguis",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-text-primary">PORTAFOLIO</h2>
          <p className="text-lg text-primary font-semibold">
            Mis Casos de Estudio
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="bg-card rounded-lg overflow-hidden shadow-lg group"
            >
              <div className="relative h-56">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Abrir ${project.title} en nueva pestaña`}
                  className="absolute inset-0"
                >
                  <Image
                    src={project.image}
                    alt={`Imagen del proyecto ${project.title}`}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-500 group-hover:scale-110"
                  />
                </a>
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-primary/20 text-primary text-xs font-semibold px-2.5 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl font-bold text-text-primary mb-2">
                  {project.title}
                </h3>
                <p className="text-text-secondary mb-4">
                  {project.description}
                </p>
                <div className="flex space-x-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary font-semibold hover:underline"
                  >
                    Ver Proyecto →
                  </a>
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-secondary hover:underline"
                  >
                    Ver Código
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
