import AboutUs from "@/components/ui/aboutUs";
import FleetSlider from "@/components/ui/FleetSlider";
import Navbar from "@/components/ui/navbar";
import Services from "@/components/ui/services";
import Testimonial from "@/components/ui/testimoni";
import Partner from "@/components/ui/partner";
import Blog from "@/components/ui/blog";
import Contact from "@/components/ui/contact";
import Footer from "@/components/ui/footer";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <AboutUs/>
      <Partner/>
      <Services/>
      <FleetSlider/>
      <Testimonial/>
      <Blog/>
      <Contact/>
      <Footer/>
    </div>
  );
}
