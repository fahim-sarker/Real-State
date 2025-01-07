import React from "react";
import Container from "../Components/Container";
import Herobuttonreusable from "./Herobuttonreusable";

const Hero = () => {
  return (
    <>
      <section className="lg:py-[300px] py-[100px] bg-heroimg bg-center bg-cover">
        <Container>
          <h1 className="mb-6 text-3xl font-bold text-white lg:text-5xl lg:leading-[1.2] font-popins text-center">
            We'll build house of your dream
          </h1>
          <p className="mb-9 font-popins font-medium text-white sm:text-lg sm:leading-[1.44] lg:w-[650px] mx-auto text-center">
            We have 9000 more review and our customers trust on out property and
            quality products.
          </p>
          <div className="flex justify-center gap-x-3 pb-10">
            <Herobuttonreusable label="book now" />
            <Herobuttonreusable label="contact us" />
          </div>
        </Container>
      </section>
    </>
  );
};

export default Hero;
