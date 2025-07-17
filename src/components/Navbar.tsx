// src/components/Navbar.tsx
import Link from 'next/link';

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-background/80 backdrop-blur-sm z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-text-primary">
          Victor Navarro
        </Link>
        <div className="hidden md:flex space-x-8 items-center">
          <Link href="#about" className="text-text-secondary hover:text-primary transition-colors">Sobre Mí</Link>
          <Link href="#skills" className="text-text-secondary hover:text-primary transition-colors">Habilidades</Link>
          <Link href="#projects" className="text-text-secondary hover:text-primary transition-colors">Proyectos</Link>
        </div>
        <Link href="#contact" className="bg-primary text-background font-bold py-2 px-6 rounded-full hover:bg-opacity-90 transition-all">
          Contáctame
        </Link>
      </div>
    </nav>
  );
};