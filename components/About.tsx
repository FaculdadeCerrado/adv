import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="mb-10 lg:mb-0">
            <div className="relative h-64 sm:h-80 md:h-96 w-full rounded-xl overflow-hidden shadow-2xl">
               {/* Placeholder for Lawyer Image */}
               <div className="absolute inset-0 bg-slate-200 flex items-center justify-center text-slate-400">
                  <i className="fa-solid fa-user-tie text-6xl"></i>
               </div>
               <img 
                 src="https://picsum.photos/800/800?random=2" 
                 alt="Thiago Garcia Advogado" 
                 className="absolute inset-0 w-full h-full object-cover"
               />
            </div>
          </div>
          <div>
            <h2 className="text-base text-amber-600 font-semibold tracking-wide uppercase">Sobre o Escritório</h2>
            <p className="mt-2 text-3xl leading-8 font-serif font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Thiago Garcia Advocacia
            </p>
            <p className="mt-4 text-lg text-gray-500">
              Nosso escritório, estrategicamente localizado no Riacho Fundo 1, DF, é dedicado a fornecer soluções jurídicas personalizadas e eficazes. 
              Entendemos que cada caso é único e merece uma atenção detalhada e combativa.
            </p>
            <div className="mt-8 space-y-4">
               <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-slate-900 text-white">
                      <i className="fa-solid fa-gavel text-xl"></i>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg leading-6 font-medium text-slate-900">Experiência</h3>
                    <p className="mt-2 text-base text-gray-500">
                      Atuação sólida nos tribunais, focada na defesa intransigente dos interesses dos nossos clientes.
                    </p>
                  </div>
               </div>
               <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-slate-900 text-white">
                      <i className="fa-solid fa-handshake text-xl"></i>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg leading-6 font-medium text-slate-900">Confiança</h3>
                    <p className="mt-2 text-base text-gray-500">
                      Relacionamento transparente e ético com cada cliente, garantindo segurança jurídica.
                    </p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;