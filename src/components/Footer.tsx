// src/components/Footer.tsx
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const socialLinks = [
  { icon: <FaGithub />, url: 'https://github.com/VicxNF' },
  { icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/victor-manuel-navarro-fermin/' },
];

export const Footer = () => {
  return (
    <footer className="bg-background py-8">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        {/* Social Links */}
        <div className="flex space-x-6 mb-4 md:mb-0">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-primary transition-colors text-2xl"
            >
              {link.icon}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-text-secondary">
          <p>© {new Date().getFullYear()} Victor Manuel Navarro Fermin. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};