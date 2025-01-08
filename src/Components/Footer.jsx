import React from "react";
import Container from "./Container";
import Logo from "../assets/logo.png";
import Office from "../assets/office.jpg"

const Footer = () => {
  return (
    <>
      <section className="py-[40px] lg:px-0 px-2 bg-[#090E34]">
        <Container>
          <div className="flex flex-wrap justify-between">
            <div className="lg:w-[20%] w-full">
              <img src={Logo} alt="Logo" className="h-20 w-20 rounded-full mb-6 lg:mx-0 mx-auto" />
              <p class="lg:max-w-[270px] text-base text-white">
                We create digital experiences for brands and companies by using
                technology.
              </p>
            </div>
            <div className="lg:w-[20%] w-[48%] mt-2">
            <h4 class="mb-9 text-lg font-semibold text-white">About Us</h4>
            <ul>
              <li>
                <a href="javascript:void(0)" class="mb-3 inline-block text-base  text-white hover:text-primary">
                  Home
                </a>
              </li>
              <li>
                <a href="javascript:void(0)" class="mb-3 inline-block text-base text-white hover:text-primary">
                  Features
                </a>
              </li>
              <li>
                <a href="javascript:void(0)" class="mb-3 inline-block text-base text-white hover:text-primary">
                  About
                </a>
              </li>

            </ul>
            </div>
            <div className="lg:w-[20%] w-[48] mt-2">
            <h4 class="mb-9 text-lg font-semibold text-white">Features</h4>
            <ul>
              <li>
                <a href="javascript:void(0)" class="mb-3 inline-block text-base text-white hover:text-primary">
                  How it works
                </a>
              </li>
              <li>
                <a href="javascript:void(0)" class="mb-3 inline-block text-base text-white hover:text-primary">
                  Privacy policy
                </a>
              </li>
              <li>
                <a href="javascript:void(0)" class="mb-3 inline-block text-base text-white hover:text-primary">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="javascript:void(0)" class="mb-3 inline-block text-base text-white hover:text-primary">
                  Refund policy
                </a>
              </li>
            </ul>
            </div>
            <div className="lg:w-[30%] w-full">
            <h4 class="mb-9 text-lg font-semibold text-white">Latest blog</h4>
            <div class="flex flex-col gap-8">
              <a href="blog-details.html" class="group flex items-center gap-[22px]">
                <div class="overflow-hidden rounded">
                  <img src={Office} alt="Office" className="h-[70px] w-[70px]"/>
                </div>
                <span class="max-w-[180px] text-base text-gray-200 group-hover:text-white">
                  I think really important to design with...
                </span>
              </a>
              <a href="blog-details.html" class="group flex items-center gap-[22px]">
                <div class="overflow-hidden rounded">
                  <img src={Office} alt="Office" className="h-[70px] w-[70px]"/>
                </div>
                <span class="max-w-[180px] text-base text-gray-200 group-hover:text-white">
                  Recognizing the need is the primary...
                </span>
              </a>
            </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Footer;
