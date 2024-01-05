import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import HeroSection from "@/sections/HeroSection";
import GallerySection from "@/sections/GallerySection";
import Feature from "@/sections/Feature";
import CallToAction from "@/sections/CallToAction";
import Services from "@/sections/services/Services";
import ContactSection from "@/sections/contactsection/ContactSection";
import Projects from "@/sections/projects/Projects";

const HomePage = () => {
  return <div className="">
          <HeroSection />
          <GallerySection />
          <Services />
          <ContactSection />
          <Feature />
          <Projects />
          <CallToAction />
  </div>;
};

export default HomePage;
