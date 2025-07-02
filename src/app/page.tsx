import AboutUs from "@/components/ui/aboutUs";
import FleetSlider from "@/components/ui/FleetSlider";
import Navbar from "@/components/ui/navbar";
import Image from "next/image";
import Head from 'next/head';
import Services from "@/components/ui/services";
import Testimonial from "@/components/ui/testimoni";
import Partner from "@/components/ui/partner";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <AboutUs/>
      <Partner/>
      <Services/>
      <FleetSlider/>
      <Testimonial/>
    </div>
  );
}
