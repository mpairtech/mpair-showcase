import React from "react";
import DesktopFeature, { FeatureMobile } from "./DesktopFeature";
import Container from "@/components/shared/Container";
import Title from "@/components/shared/Title";

const Feature = () => {
  return (
    <section
      id="features"
      aria-label="Features for investing all your money"
      className="bg-gray-900 py-20 sm:py-32"
    >
      <Container>
        <div className="max-w-2xl mx-auto lg:mx-0 lg:max-w-3xl">
          <Title
            title="Ship it like you own it"
            className="text-white text-2xl"
          />
          <p className="mt-2 text-lg text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
            cupiditate voluptate officiis incidunt, accusamus voluptatibus
            voluptatem, quia, quos doloribus quibusdam quod.
          </p>
        </div>
      </Container>
      {/* Desktop View */}
      <div className="hidden md:mt-20 md:block max-w-screen-xl mx-auto">
        <DesktopFeature />
      </div>
      {/* Mobile View */}
      <div className="mt-16 md:hidden">
        <FeatureMobile />
      </div>
    </section>
  );
};

export default Feature;
