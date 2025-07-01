import AboutUs from "@/components/ui/aboutUs";
import FleetSlider from "@/components/ui/FleetSlider";
import Navbar from "@/components/ui/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <AboutUs/>
      <FleetSlider/>
    </div>
  );
}
