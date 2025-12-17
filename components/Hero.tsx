import React from 'react';

const Hero: React.FC = () => {
  return (
    <div id="home" className="relative bg-slate-900 overflow-hidden">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover opacity-20"
          src="https://picsum.photos/1920/1080?grayscale" 
          alt="Escritório de advocacia background"
        />
        <div className="absolute inset-0 bg-slate-900 mix-blend-multiply" />
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8 text-center md:text-left">
        <h1 className="text-4xl font-serif font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
          <span className="block">Defesa Estratégica</span>
          <span className="block text-amber-500">Resultados Concretos</span>
        </h1>
        <p className="mt-6 max-w-lg mx-auto md:mx-0 text-xl text-slate-300 sm:max-w-3xl">
          Compromisso com a justiça e a excelência no atendimento jurídico. 
          Atuamos com ética e transparência para proteger seus direitos no Distrito Federal e entorno.
        </p>
        <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center md:justify-start">
          <div className="space-y-4 sm:space-y-0 sm:mx-auto md:mx-0 sm:inline-grid sm:grid-cols-2 sm:gap-5">
            <a
              href="#contact"
              className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-slate-900 bg-amber-500 hover:bg-amber-600 sm:px-8 transition-colors"
            >
              Fale Conosco
            </a>
            <a
              href="#services"
              className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-slate-800 bg-opacity-60 hover:bg-opacity-70 sm:px-8 backdrop-blur-sm transition-colors"
            >
              Saiba Mais
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;