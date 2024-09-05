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
    return <div>Propiedad no encontrada</div>;
  }

  return (<>
    <Navbar/>
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{house.title}</h1>
      <Image src={house.images[0]} alt={house.title} width={1200} height={800} className="w-full h-80 object-cover mb-4" />
      <p className="text-lg mb-4">{house.description}</p>
      <p className="text-xl font-bold mb-4">{house.price}</p>
      <div className="space-y-2">
        {house.features.map((feature, index) => (
          <p key={index} className="text-gray-700">{feature}</p>
        ))}
      </div>
    </div>
    <Map/>
    <Footer/>
    <ButtonR/>
    </>
  );
};

export default PropertyDetail;
