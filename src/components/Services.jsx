import React from 'react';

const Services = () => {
  return (
    <div className="max-w-4xl mx-auto py-24">
      <div className="relative bg-darker/60 backdrop-blur-xl rounded-2xl p-8 border border-gray-800">
        {/* Esquinas decorativas (ajustadas a tu paleta) */}
        <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-primary rounded-tl-2xl"></div>
        <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-secondary rounded-tr-2xl"></div>
        <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-accent rounded-bl-2xl"></div>
        <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-primary rounded-br-2xl"></div>

        <div className="relative">
          {/* Badge de "Launch Offer" */}
          <div className="absolute -top-12 left-0 px-6 py-2 bg-gradient-to-r from-primary to-accent rounded-full text-sm text-white">
            Launch Offer
          </div>

          {/* Título principal */}
          <h2 className="text-3xl font-bold mb-2 text-text">SERVICES</h2>

          {/* Subtítulo con tu oferta */}
          <h3 className="text-2xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-t from-primary via-secondary to-accent">
            Landing Page Profesional — USD 135
          </h3>

          {/* Lista con tu texto exacto */}
          <ul className="text-lg text-textDark mb-8 space-y-2">
            <li>• Diseño moderno y responsive</li>
            <li>• Copy orientado a conversión</li>
            <li>• Integración con WhatsApp o email</li>
            <li>• Página rápida y optimizada</li>
            <li>• Entrega en 48–72 horas</li>
            <li>• 1 ronda de cambios incluida</li>
          </ul>

          {/* Botón de conversión */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="mailto:emanuelybalo.contacto@gmail.com?subject=Request%20Landing%20Page&body=Hola%2C%20me%20interesa%20la%20Landing%20Page%20Profesional%20por%20USD%20135.%20%C2%A1Gracias%21"
              className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-t from-primary via-secondary to-accent hover:opacity-90 transition-opacity text-white font-bold"
            >
              Request Landing Page
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                className="group-hover:rotate-12 transition-transform duration-300"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;