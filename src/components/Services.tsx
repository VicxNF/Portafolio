import { FaCode, FaPaintBrush, FaServer } from "react-icons/fa";

const servicesData = [
  {
    icon: <FaPaintBrush size={40} className="text-primary" />,
    title: "Diseño UI/UX",
    description:
      "Diseño interfaces intuitivas y atractivas, enfocándome en la experiencia de usuario y una estética moderna.",
  },
  {
    icon: <FaCode size={40} className="text-primary" />,
    title: "Desarrollo Front-End",
    description:
      "Transformo diseños en código real. Especializado en React, Next.js y TypeScript para crear aplicaciones web rápidas y dinámicas.",
  },
  {
    icon: <FaServer size={40} className="text-primary" />,
    title: "Desarrollo Back-End",
    description:
      "Construyo la lógica del servidor y las APIs necesarias para dar vida a las aplicaciones, utilizando tecnologías como Node.js y Express.",
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-text-primary">QUÉ HAGO</h2>
          <p className="text-lg text-primary font-semibold">Mis Servicios</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-lg shadow-lg flex flex-col items-center text-center 
            border border-card hover:border-primary transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-2xl font-bold text-text-primary mb-3">
                {service.title}
              </h3>
              <p className="text-text-secondary">{service.description}</p>
              <a
                href="#contact"
                className="mt-6 text-primary font-semibold hover:underline"
              >
                Contáctame →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
