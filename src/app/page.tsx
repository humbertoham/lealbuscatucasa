import AgentCard from "@/components/AgentCard";
import ButtonR from "@/components/buttonr";
import Footer from "@/components/footer";
import HeroSection from "@/components/herot";
import Map from "@/components/map";
import Navbar from "@/components/navbar";
import Testimonials from "@/components/opinions";
import SearchPropertiesSection from "@/components/prop";
import ServicesSection from "@/components/serv";
import Image from "next/image";


export default function Home() {
  return (
    
  <>
    <Navbar/>
    <HeroSection/>
    <AgentCard/>
    <ServicesSection/>
    <SearchPropertiesSection/>
    
  <Map/>

    <Footer/>
  
  <ButtonR/>
  </>
  );
}
