import { FaUser, FaEnvelope, FaBriefcase } from "react-icons/fa";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-text-primary">CONTACTO</h2>
          <p className="text-lg text-primary font-semibold">
            ¿Buscas potenciar tu presencia online? Estoy aquí para ayudarte 🙂
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-background p-8 rounded-lg shadow-lg">
            <FaUser size={40} className="text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-text-primary mb-2">
              Victor Navarro
            </h3>
            <p className="text-text-secondary">
              Desarrollador Web (Full-Stack)
            </p>
          </div>

          <div className="bg-background p-8 rounded-lg shadow-lg">
            <FaEnvelope size={40} className="text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-text-primary mb-2">Email</h3>
            <a
              href="mailto:tu-email@ejemplo.com"
              className="text-text-secondary hover:text-primary transition-colors"
            >
              victormanuelnf12@gmail.com
            </a>
          </div>

          <div className="bg-background p-8 rounded-lg shadow-lg">
            <FaBriefcase size={40} className="text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-text-primary mb-2">
              Freelance
            </h3>
            <p className="text-text-secondary">Disponible ahora mismo</p>
          </div>
        </div>
      </div>
    </section>
  );
};
