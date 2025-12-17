import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="bg-slate-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          
          <div>
            <h2 className="text-base text-amber-500 font-semibold tracking-wide uppercase">Contato</h2>
            <p className="mt-2 text-3xl font-serif font-extrabold tracking-tight sm:text-4xl">
              Fale Conosco
            </p>
            <p className="mt-4 text-slate-300 text-lg">
              Entre em contato para agendar uma consulta ou tirar suas dúvidas. Estamos prontos para defender seus direitos.
            </p>

            <div className="mt-8 space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <i className="fa-solid fa-location-dot text-amber-500 text-xl mt-1"></i>
                </div>
                <div className="ml-4">
                  <p className="text-lg font-medium text-white">Endereço</p>
                  <p className="mt-1 text-slate-300">
                    CLN 07 bloco A sala 306<br />
                    Riacho Fundo 1 - DF
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <i className="fa-solid fa-envelope text-amber-500 text-xl mt-1"></i>
                </div>
                <div className="ml-4">
                  <p className="text-lg font-medium text-white">Email</p>
                  <a href="mailto:thiagogarcia_adv@yahoo.com.br" className="mt-1 text-slate-300 hover:text-amber-400 transition-colors block">
                    thiagogarcia_adv@yahoo.com.br
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <i className="fa-brands fa-whatsapp text-amber-500 text-xl mt-1"></i>
                </div>
                <div className="ml-4">
                  <p className="text-lg font-medium text-white">Atendimento Online</p>
                  <p className="mt-1 text-slate-300">
                    Disponível em horário comercial
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-1 overflow-hidden h-80 md:h-auto min-h-[300px]">
            {/* Embedded Google Maps Placeholder - centered roughly on Riacho Fundo 1 based on address description */}
            <iframe 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              loading="lazy" 
              allowFullScreen 
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3837.986636758763!2d-48.0166!3d-15.8576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTXCsDUxJzI3LjQiUyA0OMKwMDEnMDAuMCJX!5e0!3m2!1spt-BR!2sbr!4v1600000000000`}
              title="Localização do Escritório"
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;