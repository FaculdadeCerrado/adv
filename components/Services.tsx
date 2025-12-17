import React from 'react';

const services = [
  {
    title: 'Direito Civil',
    description: 'Resolução de conflitos de natureza civil, contratos, indenizações e responsabilidade civil.',
    icon: 'fa-scale-balanced',
  },
  {
    title: 'Direito de Família',
    description: 'Divórcios, pensão alimentícia, guarda de menores, inventários e partilhas.',
    icon: 'fa-users',
  },
  {
    title: 'Direito Trabalhista',
    description: 'Defesa de direitos de trabalhadores e empregadores, rescisões e acordos.',
    icon: 'fa-briefcase',
  },
  {
    title: 'Direito Penal',
    description: 'Acompanhamento em delegacias, defesa em processos criminais e tribunal do júri.',
    icon: 'fa-handcuffs',
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-amber-600 font-semibold tracking-wide uppercase">Áreas de Atuação</h2>
          <p className="mt-2 text-3xl leading-8 font-serif font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Soluções Jurídicas Completas
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Oferecemos assessoria jurídica especializada em diversas áreas do direito para atender suas necessidades.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border-t-4 border-amber-500">
              <div className="p-6">
                <div className="flex items-center justify-center w-12 h-12 bg-slate-100 rounded-full mb-4 mx-auto text-slate-900">
                  <i className={`fa-solid ${service.icon} text-xl`}></i>
                </div>
                <h3 className="text-lg font-bold text-slate-900 text-center mb-2">{service.title}</h3>
                <p className="text-gray-600 text-center text-sm">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;