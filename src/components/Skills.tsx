// src/components/Skills.tsx
import {
    FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaGitAlt
  } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiPostgresql, SiAngular, SiDjango, SiPython } from 'react-icons/si';

// ¡Personaliza esta lista con tus habilidades!
// Busca más iconos en: https://react-icons.github.io/react-icons/
const skillsData = [
  { name: 'HTML5', icon: <FaHtml5 size={50} />, level: 4 },
  { name: 'CSS3', icon: <FaCss3Alt size={50} />, level: 4 },
  { name: 'TailwindCSS', icon: <SiTailwindcss size={50} />, level: 3 },
  { name: 'JavaScript', icon: <FaJsSquare size={50} />, level: 3 },
  { name: 'TypeScript', icon: <SiTypescript size={50} />, level: 3 },
  { name: 'React', icon: <FaReact size={50} />, level: 3 },
  { name: 'Next.js', icon: <SiNextdotjs size={50} />, level: 3 },
  { name: 'PostgreSQL', icon: <SiPostgresql size={50} />, level: 2 },
  { name: 'Git', icon: <FaGitAlt size={50} />, level: 3 },
  { name: 'Angular', icon: <SiAngular size={50} />, level: 3 },
  { name: 'Python', icon: <SiPython size={50} />, level: 4 },
  { name: 'Django', icon: <SiDjango size={50} />, level: 4 },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Título de la sección */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-text-primary">HABILIDADES</h2>
          <p className="text-lg text-primary font-semibold">Mis Tecnologías</p>
        </div>

        {/* Grid de iconos de habilidades */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8">
          {skillsData.map((skill, index) => (
            <div 
              key={index} 
              className="bg-card p-6 rounded-lg flex flex-col items-center justify-center gap-4 transform transition-transform duration-300 hover:scale-110 hover:bg-primary/10"
            >
              <div className="text-primary">
                {skill.icon}
              </div>
              <span className="font-semibold text-text-secondary">{skill.name}</span>
              {/* Puntos de nivel */}
              <div className="flex gap-2 mt-2 justify-center">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span
                    key={i}
                    className={`inline-block w-4 h-4 rounded-full border ${i < skill.level ? 'bg-cyan-400 border-cyan-400' : 'bg-gray-700 border-gray-700'}`}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};