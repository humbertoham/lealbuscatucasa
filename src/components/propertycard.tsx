import React from 'react';
import Link from 'next/link';
import { House } from '../data/data';

interface PropertyCardProps {
  house: House;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ house }) => {
  return (
    <div className="border rounded-3xl shadow-lg overflow-hidden">
        <div className="relative">
        <Link href={`/propiedad/${house.id}`}>
      <img src={house.images[0]} alt={house.title} className="w-full h-60 object-cover" />
      <div
                    className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25">
                </div>
      </Link>
      </div>
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{house.title}</h2>
        <p className="text-gray-700 mb-4">{house.description}</p>
        <p className="text-lg font-bold mb-2">{house.price}</p>
        <Link href={`/propiedad/${house.id}`}>
          <p className="text-blue-500 hover:underline">Ver más</p>
        </Link>
      </div>
    </div>


    



  );
};

export default PropertyCard;
