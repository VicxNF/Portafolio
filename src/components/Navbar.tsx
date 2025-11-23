import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const Navbar = () => {
  const socialLinks = [
    { icon: <FaGithub />, url: "https://github.com/VicxNF" },
    {
      icon: <FaLinkedin />,
      url: "https://www.linkedin.com/in/victor-manuel-navarro-fermin/",
    },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-background/80 backdrop-blur-sm z-50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="text-2xl font-bold text-text-primary">
            Victor Navarro
          </Link>
        </div>

        <div className="hidden md:flex space-x-8 items-center flex-1 justify-center">
          <Link
            href="#about"
            className="text-text-secondary hover:text-primary transition-colors"
          >
            Sobre Mí
          </Link>
          <Link
            href="#skills"
            className="text-text-secondary hover:text-primary transition-colors"
          >
            Habilidades
          </Link>
          <Link
            href="#projects"
            className="text-text-secondary hover:text-primary transition-colors"
          >
            Proyectos
          </Link>
        </div>

        <div className="flex items-center space-x-4">
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
      </div>
    </nav>
  );
};
