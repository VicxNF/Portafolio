export const Footer = () => {
  return (
    <footer className="bg-background py-8">
      <div className="container mx-auto px-6 flex justify-center">
        <div className="text-text-secondary text-center">
          <p>
            © {new Date().getFullYear()} Victor Manuel Navarro Fermin. Todos los
            derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
