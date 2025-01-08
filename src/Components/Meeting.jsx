import React from "react";
import Container from "./Container";

const Meeting = () => {
  return (
    <>
      <section className="lg:py-[70px] py-[30px] lg:px-0 px-2 bg-[#3758F9]">
        <Container>
          <div className="text-center">
            <h2 class="mb-2.5 text-3xl font-bold text-white md:text-[38px] md:leading-[1.44]">
              What Are You Looking For?
            </h2>
            <span class="text-3xl font-normal md:text-[40px]  text-white">
              Get Started Now
            </span>
            <p class="mx-auto mb-6 max-w-[515px] text-base leading-[1.5] text-white py-5">
              There are many variations of passages of Lorem Ipsum but the
              majority have suffered in some form.
            </p>
            <a
              href="javascript:void(0)"
              class="inline-block rounded-md border border-transparent bg-secondary px-7 py-3 text-base font-medium text-white transition hover:bg-[#0BB489] bg-green-600"
            >
              Let's have a meeting
            </a>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Meeting;
