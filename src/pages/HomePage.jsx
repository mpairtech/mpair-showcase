import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import HeroSection from "@/sections/HeroSection";
import GallerySection from "@/sections/GallerySection";
import SecondSection from "@/sections/SecondSection";

const HomePage = () => {
  return <div className="">
          {/* <HeroSection /> */}
          <SecondSection />
          <GallerySection />
  </div>;
};

export default HomePage;
