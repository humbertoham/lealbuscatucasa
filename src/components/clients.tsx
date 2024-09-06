'use client';

import React from 'react';
import Image from 'next/image';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import Slider from 'react-slick';
import 'react-photo-view/dist/react-photo-view.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface House {
  id: string;
  title: string;
  description: string;
  bedrooms?: number;
  bathrooms?: number;
  features: string[];
  price: string;
  images: string[];
  location: string;
}

interface ClientSidePropertyDetailProps {
  house: House;
}

const ClientSidePropertyDetail: React.FC<ClientSidePropertyDetailProps> = ({ house }) => {
  const thumbnailSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
          breakpoint: 1280, // Para pantallas grandes (lg)
          settings: {
            slidesToShow: 3, // Muestra 3 imágenes en pantallas grandes
          },
        },
        {
          breakpoint: 768, // Para pantallas medianas (md)
          settings: {
            slidesToShow: 4, // Muestra 2 imágenes en pantallas medianas
          },
        },
        {
          breakpoint: 600, // Para pantallas pequeñas (sm)
          settings: {
            slidesToShow: 3, // Muestra 1 imagen en pantallas pequeñas
          },
        },
      ],
  };

  return (
    <div className="container mx-auto  p-0 md:p-6 flex flex-col md:flex-row bg-white shadow-lg rounded-lg">
      {/* Carousel section */}
      <div className="w-full md:w-1/2 p-4">
        <PhotoProvider>
          {/* Main Image */}
          <div className="w-full h-64 md:h-[400px] relative mb-4">
            <PhotoView src={house.images[0]}>
              <Image
                src={house.images[0]}
                alt={`Main image of ${house.title}`}
                layout="fill"
                objectFit="cover"
                className="rounded-md cursor-pointer"
              />
            </PhotoView>
          </div>

          {/* Thumbnail Carousel */}
          <Slider {...thumbnailSettings} className="w-full">
            {house.images.slice(2).map((image, index) => (
              <div key={index} className='px-2' > {/* Cambié de px-2 a pr-1 */}
                <PhotoView src={image}>
                  <Image
                    src={image}
                    alt={`Image ${index + 2} of ${house.title}`}
                    width={150}
                    height={100}
                    className="object-cover rounded-md cursor-pointer"
                  />
                </PhotoView>
              </div>
            ))}
          </Slider>
        </PhotoProvider>
      </div>

      {/* Property details section */}
      <div className="w-full md:w-1/2 p-4">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">{house.title}</h1>
        <p className="text-lg text-gray-600 mb-4">{house.description}</p>
        <p className="text-lg font-semibold text-blue-600 mb-2">Price: {house.price}</p>
        {house.bedrooms && (
          <p className="text-md text-gray-700">Cuartos: {house.bedrooms}</p>
        )}
        {house.bathrooms && (
          <p className="text-md text-gray-700">Baños: {house.bathrooms}</p>
        )}
        <p className="text-md text-gray-700 mb-4">Locación: {house.location}</p>

        <ul className="list-disc list-inside text-gray-600">
          {house.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
        <div className="text-center mt-7 mb-5">
              <a
                href="https://api.whatsapp.com/send/?phone=%2B526241177448"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-300 ease-in-out  text-base">
                  Contáctanos
                </button>
              </a>
            </div>
      </div>
      
    </div>
  );
};

export default ClientSidePropertyDetail;
