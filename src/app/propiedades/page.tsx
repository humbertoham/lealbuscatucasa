import ButtonR from "@/components/buttonr";
import Footer from "@/components/footer";
import Map from "@/components/map";
import Navbar from "@/components/navbar";
import Image from "next/image";

import { houses } from '../../data/data';
import PropertyList from "@/components/propertylist";

export default function Home() {
  return (
    
  <>
    <Navbar/>
    <PropertyList houses={houses}/>
  <Map/>

    <Footer/>
  
  <ButtonR/>
  </>
  );
}
