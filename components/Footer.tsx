import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Thiago Garcia Advocacia. Todos os direitos reservados.
          </p>
          <p className="text-xs mt-1 text-slate-600">
            OAB/DF
          </p>
        </div>
        <div className="flex space-x-6">
          <a href="#" className="hover:text-white transition-colors">
            <span className="sr-only">Facebook</span>
            <i className="fa-brands fa-facebook text-xl"></i>
          </a>
          <a href="#" className="hover:text-white transition-colors">
            <span className="sr-only">Instagram</span>
            <i className="fa-brands fa-instagram text-xl"></i>
          </a>
          <a href="#" className="hover:text-white transition-colors">
            <span className="sr-only">LinkedIn</span>
            <i className="fa-brands fa-linkedin text-xl"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;