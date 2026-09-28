import AppointmentCTA from "@/components/AppointmentCTA";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navar";
import ServicesSection from "@/components/ServiceSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import Image from "next/image";

export default function Home() {
  return (
<>

<HeroSection/>

<ServicesSection/>
<WhyChooseUs/>
<AppointmentCTA/>


<Footer/>


</>
  );
}
