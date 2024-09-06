import React from 'react';
import Image from 'next/image';

const ServicesSection = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-6 md:px-12">
        {/* Título y Descripción General */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Servicios de Primera Clase para tu Hogar
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            En Leal Busca Tu Casa, estamos dedicados a ofrecer un servicio excepcional en cada paso del proceso inmobiliario. Desde la compra de tu primera casa hasta la venta de tu propiedad actual, nuestro equipo de expertos está aquí para ayudarte a lograr tus objetivos con confianza y tranquilidad.
          </p>
        </div>

        {/* Servicios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Servicio 1 */}
          <div className="bg-white p-6 rounded-3xl shadow-lg flex flex-col items-center text-center">
            <div className="relative w-full h-48 mb-4">
              <Image
                src="/images/luxury-condos/image4.jpeg" // Cambia la ruta de la imagen según corresponda
                alt="Compra de Propiedades"
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 rounded-t-lg"></div>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3 relative z-10">
              Compra de Propiedades
            </h3>
            <p className="text-gray-600 relative z-10">
              Encuentra la casa de tus sueños con nuestra asesoría personalizada. Te guiamos en cada paso del proceso para asegurar una compra segura y satisfactoria.
            </p>
          </div>

          {/* Servicio 2 */}
          <div className="bg-white p-6 rounded-3xl shadow-lg flex flex-col items-center text-center">
            <div className="relative w-full h-48 mb-4">
              <Image
                src="/images/i-loft-cabo/image3.jpeg" // Cambia la ruta de la imagen según corresponda
                alt="Venta de Propiedades"
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 rounded-t-lg"></div>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3 relative z-10">
              Venta de Propiedades
            </h3>
            <p className="text-gray-600 relative z-10">
              Aprovecha nuestra experiencia para vender tu propiedad al mejor precio. Nos encargamos de todo, desde la evaluación hasta la negociación, para que obtengas el mejor valor.
            </p>
          </div>

          {/* Servicio 3 */}
          <div className="bg-white p-6 rounded-4xl shadow-lg flex flex-col items-center text-center">
            <div className="relative w-full h-48 mb-4">
              <Image
                src="/images/itower/image1.jpeg" // Cambia la ruta de la imagen según corresponda
                alt="Asesoría en Inversiones"
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 rounded-t-lg"></div>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3 relative z-10">
              Asesoría en Inversiones
            </h3>
            <p className="text-gray-600 relative z-10">
              Obtén asesoramiento experto sobre inversiones inmobiliarias. Te ayudamos a identificar oportunidades y maximizar el rendimiento de tus inversiones en el mercado.
            </p>
          </div>
        </div>

        {/* Llamada a la Acción */}
        <div className="text-center mt-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            ¿Listo para Dar el Siguiente Paso?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Contáctanos hoy mismo para discutir tus necesidades y descubrir cómo podemos ayudarte a alcanzar tus metas inmobiliarias. Nuestro equipo está listo para ofrecerte el mejor servicio posible.
          </p>
          <a href="https://api.whatsapp.com/send/?phone=%2B526241177448" className="inline-block bg-blue-500 text-white font-semibold py-3 px-6 rounded-3xl shadow-lg hover:bg-blue-600 transition duration-300 ease-in-out">
            Contáctanos
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
