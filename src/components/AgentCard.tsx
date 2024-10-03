import React from 'react';
import Image from 'next/image';

const AgentSection = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-6 md:px-12">
        {/* Contenedor general con dos columnas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Columna izquierda: Título y descripción general */}
          <div className="text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Hola, me llamo Eduardo Leggs
            </h2>
            <p className="text-lg md:text-xl text-gray-600 mb-6">
              Soy un agente inmobiliario con varios años de experiencia en la industria. Mi pasión es ayudar a mis clientes 
              a encontrar la propiedad perfecta, guiándolos a lo largo de todo el proceso de compra o venta de bienes raíces.
              Desde la búsqueda de nuevas oportunidades de inversión hasta la venta de propiedades, trabajo arduamente para 
              asegurarme de que mis clientes obtengan el mejor trato posible.
            </p>
            <p className="text-lg md:text-xl text-gray-600">
              Mi enfoque es ofrecer una atención personalizada y garantizar que cada cliente se sienta cómodo y seguro en cada 
              paso. Ya sea que estés buscando tu primera casa, quieras vender tu propiedad o explorar nuevas inversiones, 
              estoy aquí para ayudarte a alcanzar tus metas inmobiliarias.
            </p>
          </div>

          {/* Columna derecha: Foto e información de contacto */}
          <div className="flex flex-col items-center md:items-start">
            <div className="relative w-40 h-40 mb-4">
              <Image
                src="/images/profile.png" // Cambia esta ruta a la imagen de Eduardo Leggs
                alt="Eduardo Leggs"
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Eduardo Leggs</h3>
            <p className="text-gray-600 mb-4 text-center md:text-left">
              Agente inmobiliario experto en la compra, venta e inversión de propiedades. 
              Enfocado en brindar soluciones personalizadas para cada cliente.
            </p>
            <div className="mt-4">
              <p className="text-gray-800 font-bold">Contacto:</p>
              <a
                href="mailto:eduardoleggs.leal@gmail.com"
                className="text-blue-500 hover:text-blue-700"
              >
                eduardoleggs.leal@gmail.com
              </a>
              <a
                href="https://api.whatsapp.com/send/?phone=%2B526241177448"
                className="text-blue-500 block hover:text-blue-700"
              >
                +52 624 117 7448
              </a>
            </div>
          </div>
        </div>

        {/* Llamada a la acción */}
        <div className="text-center mt-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            ¿Listo para encontrar tu nueva casa?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            No dudes en contactarme para discutir cómo puedo ayudarte a alcanzar tus metas en bienes raíces. 
            Estoy disponible para responder tus preguntas y comenzar tu búsqueda hoy mismo.
          </p>
          <a
            href="mailto:eduardoleggs.leal@gmail.com"
            className="inline-block bg-blue-500 text-white font-semibold py-3 px-6 rounded-3xl shadow-lg hover:bg-blue-600 transition duration-300 ease-in-out"
          >
            Contáctame
          </a>
        </div>
      </div>
    </section>
  );
};

export default AgentSection;
