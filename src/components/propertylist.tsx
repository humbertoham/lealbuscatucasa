import React from 'react';
import PropertyCard from './propertycard';
import { House } from '../data/data';

interface PropertyListProps {
  houses: House[];
}

const PropertyList: React.FC<PropertyListProps> = ({ houses }) => {
  return (
    <div className=" mul  mx-auto p-5 sm:p-10 md:p-16">

    <h2 className="mb-4 text-3xl sm:text-4xl mx-6 text-black text-center font-bold">Listado de Propiedades</h2>
    <div className="container mx-auto p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
         
      {houses.map(house => (
        <PropertyCard key={house.id} house={house} />
      ))}
    </div> </div>
  );
};

export default PropertyList;
