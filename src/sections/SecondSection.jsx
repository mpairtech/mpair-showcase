import { Button } from "@/components/ui/button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect } from "react";

const SecondSection = () => {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const textSections = document.querySelectorAll("#second-section-texts p");
    // textSections.forEach((p, i) => {
    gsap.to("#second-section-texts p", {
      opacity: 1,
      stagger: 0.3,
      scrollTrigger: {
        trigger: "#second-section",
        start: "-20% 70%",
        end: "bottom bottom",
        // markers: true,
        scrub: 1,
      },
    });
    // });
  }, []);
  return (
    <div
      id="second-section"
      className=" content-wrapper font-navFont flex flex-col gap-6 px-2 md:px-0"
    >
      <div>
        <button className="bg-[--light-blue] text-black font-navFont px-4 py-2 rounded-full ">
          About us
        </button>
      </div>
      <div
        className="md:text-4xl text-2xl flex flex-col gap-2"
        id="second-section-texts"
      >
        <p className="opacity-10 inline-block">WELCOME TO mPair</p>
        <p className="opacity-10 inline-block">
       Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        </p>
        <p className="opacity-10 inline-block">
        Lorem ipsum dolor sit amet consectetur
        </p>
        <p className="opacity-10 inline-block">
        Lorem ipsum dolor sit amet consectetur
        </p>
      </div>
      <div className="flex gap-4">
        <Button secondaryText="Get Trained">Meet the team</Button>
        <Button secondaryText="Sevices in 24h">
          Check our services
        </Button>
      </div>
    </div>
  );
};

export default SecondSection;