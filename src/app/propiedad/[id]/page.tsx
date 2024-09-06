// PropertyDetail.tsx

import Navbar from '@/components/navbar';
import { houses, House } from '../../../data/data';
import Footer from '@/components/footer';
import Map from '@/components/map';
import ClientSidePropertyDetail from '@/components/clients';

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
        <ClientSidePropertyDetail house={house} />
      </div>
      <Map />
      <Footer />
      <div className="fixed bottom-4 zin right-4">
        <a href="https://api.whatsapp.com/send/?phone=%2B526241232598" target="_blank" rel="noopener noreferrer">
          <img className="wpp" src={house.images[1]} alt="WhatsApp" />
        </a>
      </div>
    </>
  );
};

export default PropertyDetail;
