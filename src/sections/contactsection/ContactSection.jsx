import { Button } from "@/components/ui/button";
import React from "react";
import FadeIn from "../services/FadeIn";
import Container from "../services/Container";
import Offices from "./Offices";
import { Phone } from 'lucide-react';

const ContactSection = () => {
  return (
    <Container className=" my-20">
      <FadeIn className="-mx-6 rounded-4xl bg-neutral-950 px-6 py-20 sm:mx-0 sm:py-32 md:px-12  rounded-3xl">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl font-medium text-white [text-wrap:balance] sm:text-4xl">
            Tell us about your project
          </h2>
          <div className="mt-6 flex">
            <Button variant="outline">
              <Phone size={18}/>
              <span className="ml-2">Say Hello</span>
            </Button>
          </div>
          <div className="mt-10 border-t border-white/10 pt-10">
            <h3 className="font-display text-base font-semibold text-white">
              Our offices
            </h3>
            <Offices
              invert
              className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2"
            />
          </div>
        </div>
      </FadeIn>
    </Container>
  );
};

export default ContactSection;
