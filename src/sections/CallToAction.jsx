import CircleBackground from "@/components/shared/CircleBackground";
import Container from "@/components/shared/Container";
import Title from "@/components/shared/Title";
import React from "react";

const CallToAction = () => {
  return (
    <section
      id="get-free-shares-today"
      className="relative overflow-hidden bg-black py-20 sm:py-28"
    >
      <div className="absolute left-20 top-1/2 -translate-y-1/2 sm:left-1/2 sm:-translate-x-1/2">
        <CircleBackground color="#fff" className="animate-spin-slower" />
      </div>
      <Container className="relative">
        <div className="mx-auto max-w-md sm:text-center">
          <Title
            title="Get your first tips today"
            className="text-3xl text-white sm:text-4xl"
          />
          <p className="mt-4 text-lg text-gray-300">
            It takes 30 seconds to sign up. Download the app and create an
            account today and we will send you a tip guaranteed to double your
            first investment.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default CallToAction;
