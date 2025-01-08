import React from "react";
import Container from "./Container";
import Meeting from "../assets/meeting1.jpeg"
import office from "../assets/office.jpg"

const About = () => {
  return (
    <>
      <section className="lg:py-[80px] py-10 lg:px-0 px-2 bg-gray-100">
        <Container>
          <div className="lg:flex justify-between">
            <div className="lg:w-[45%] w-full">
              <div class="mb-12 max-w-[540px] lg:mb-0 ">
                <h2 class="mb-5 lg:text-start text-center text-3xl font-bold leading-tight text-dark dark:text-white sm:text-[40px] sm:leading-[1.2]">
                  Innovative Tools for Real Estate Excellence
                </h2>
                <p class="mb-10 text-base leading-relaxed text-body-color dark:text-dark-6">
                  The main ‘thrust’ is to focus on educating our clients on how
                  to best navigate the real estate market with interactive
                  guides and personalized consultations led by industry experts.
                  <br />
                  <br />
                  The main ‘thrust' is to focus on educating attendees on how to
                  best protect highly vulnerable business applications with
                  interactive panel.
                </p>

                <a
                  href="javascript:void(0)"
                  class="inline-flex items-center justify-center rounded-md border border-primary bg-primary px-7 py-3 text-center text-base font-medium text-white hover:border-blue-dark hover:bg-blue-dark"
                >
                  Know More
                </a>
              </div>
            </div>
            <div className="lg:w-[50%] w-full flex justify-between">
                <div className="w-[48%] ">
                    <img src={Meeting} alt="Meeting" className="mb-4 sm:mb-8 sm:h-[400px] md:h-[540px] lg:h-[400px] xl:h-[500px] rounded-lg"/>
                </div>
                <div className="w-[48%]">
                <div class="mb-4 sm:mb-8 sm:h-[220px] md:h-[346px] lg:mb-4 lg:h-[225px] xl:mb-8 xl:h-[310px]">
                  <img src={office} alt="office"
                    class="h-full w-full object-cover object-center rounded-lg" />
                </div>

                <div
                  class="relative mb-4 flex items-center justify-center overflow-hidden bg-primary px-6 py-12 sm:mb-8 sm:h-[160px] sm:p-5 lg:mb-4 xl:mb-8 sm:w-full lg:mt-0 mt-8 lg:mr-0">
                  <div>
                    <span class="block text-5xl font-extrabold text-white">
                      09
                    </span>
                    <span class="block text-base font-semibold text-white">
                      We have
                    </span>
                    <span class="block text-base font-medium text-white text-opacity-70">
                      Years of experience
                    </span>
                  </div>
                </div>
                </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default About;
