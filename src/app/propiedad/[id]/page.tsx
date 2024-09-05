import Navbar from '@/components/navbar';
import { houses, House } from '../../../data/data';
import Image from 'next/image';
import Footer from '@/components/footer';
import Map from '@/components/map';
import ButtonR from '@/components/buttonr';

interface PropertyDetailProps {
  params: {
    id: string;
  };
}

async function getHouseById(id: string): Promise<House | null> {
  return houses.find(house => house.id === id) || null;
}

export async function generateStaticParams() {
  const paths = houses.map(house => ({
    id: house.id,
  }));
  
  return paths;
}

const PropertyDetail: React.FC<PropertyDetailProps> = async ({ params }) => {
  const house = await getHouseById(params.id);

  if (!house) {
    return <div className="container mx-auto p-6 text-center text-red-600">Propiedad no encontrada</div>;
  }

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-6">
        {/* Title */}
        <h1 className="text-3xl font-bold mb-4">{house.title}</h1>

        {/* Main Image */}
        <div className="relative mb-4">
          <Image
            src={house.images[0]}
            alt={house.title}
            width={1200}
            height={800}
            className="w-full h-80 object-cover rounded-lg"
          />
        </div>

        {/* Description */}
        <p className="text-lg mb-4">{house.description}</p>

        {/* Price */}
        <p className="text-xl font-bold mb-4">{house.price}</p>

        {/* Features */}
        <div className="space-y-2 mb-6">
          {house.features.map((feature, index) => (
            <p key={index} className="text-gray-700">{feature}</p>
          ))}
        </div>

        {/* Location */}
        <p className="text-gray-600 mb-4">{house.location}</p>

        {/* Additional Images */}
        <div className="flex overflow-x-auto no-scrollbar mb-6">
          {house.images.slice(1).map((image, index) => (
            <Image
              key={index}
              src={image}
              alt={`${house.title} ${index + 2}`}
              width={400}
              height={300}
              className="w-1/3 h-32 object-cover mr-2 rounded-lg"
            />
          ))}
        </div>
      </div>
      <Map />
      <Footer />
      <ButtonR />
    </>
  );
};

export default PropertyDetail;
