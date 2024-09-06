import React from 'react';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="relative w-full h-screen bg-gray-200">
      {/* Fondo de Imagen con Overlay */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/images/luxury-condos/image1.jpeg" // Cambia la ruta de la imagen según corresponda
          alt="Fondo de hero"
          layout="fill"
          objectFit="cover"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-40"></div> {/* Overlay */}
      </div>

      {/* Contenido Principal */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center px-6 md:px-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 max-w-3xl mx-auto">
            Encuentra Tu Hogar Ideal
          </h1>
          <p className="text-lg md:text-2xl text-white mb-8 max-w-2xl mx-auto">
            Con más de dos décadas de experiencia, ofrecemos las mejores propiedades y asesoría personalizada para ayudarte a encontrar el hogar de tus sueños.
          </p>
          <a href="/propiedades" className="inline-block bg-blue-500 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300 ease-in-out">
            Buscar Propiedades
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
