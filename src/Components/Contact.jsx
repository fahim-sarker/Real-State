import React from "react";
import Container from "./Container";
import Questionreusable from "./Questionreusable";
import { MdLocationPin,MdOutlineEmail } from "react-icons/md";
import Svg from "./Svg";



const Contact = () => {
  return (
    <>
      <section className="lg:py-[80px] py-[30px] lg:px-0 px-2 bg-[#E9F9FF]">
        <Container>
          <div className="lg:flex justify-between">
            <div className="lg:w-[25%] w-full">
              <a
                href="#"
                className="mb-6 block text-base font-medium text-dark dark:text-white"
              >
                CONTACT US
              </a>
              <h2 class="max-w-[260px] text-[35px] font-semibold leading-[1.14] text-dark dark:text-white">
                Let's talk about your problem.
              </h2>
              <div className="flex gap-5 lg:mt-44 mt-5">
                <Svg icon={MdLocationPin}/>
                <Questionreusable content1="Our Location" content2="401 Broadway, 24th Floor, Orchard Cloud View, London"/>
              </div>
            </div>
            <div className="lg:w-[25%] w-full">
            <div className="flex gap-5 lg:mt-80 mt-10">
                <Svg icon={MdOutlineEmail}/>
                <Questionreusable content1=" How Can We Help?" content2="info@yourdomain.com,  contact@yourdomain.com"/>
              </div>
            </div>
            <div className="lg:w-[30%] w-full lg:mt-0 mt-5">
            <div
            class=" rounded-lg bg-white px-8 py-10 shadow-testimonial dark:bg-dark-2 dark:shadow-none sm:px-10 sm:py-12 md:p-[60px] lg:p-10 lg:px-10 lg:py-12 2xl:p-[60px]">
            <h3 class="mb-8 text-2xl font-semibold text-dark dark:text-white md:text-[28px] md:leading-[1.42]">
              Send us a Message
            </h3>
            <form>
              <div class="mb-[22px]">
                <label for="fullName" class="mb-4 block text-sm text-body-color dark:text-dark-6">Full Name*</label>
                <input type="text" name="fullName" placeholder="Adam Gelius"
                  class="w-full border-0 border-b border-[#f1f1f1] bg-transparent pb-3 text-body-color placeholder:text-body-color/60 focus:border-primary focus:outline-none dark:border-dark-3 dark:text-dark-6" />
              </div>
              <div class="mb-[22px]">
                <label for="email" class="mb-4 block text-sm text-body-color dark:text-dark-6">Email*</label>
                <input type="email" name="email" placeholder="example@yourmail.com"
                  class="w-full border-0 border-b border-[#f1f1f1] bg-transparent pb-3 text-body-color placeholder:text-body-color/60 focus:border-primary focus:outline-none dark:border-dark-3 dark:text-dark-6" />
              </div>
              <div class="mb-[22px]">
                <label for="phone" class="mb-4 block text-sm text-body-color dark:text-dark-6">Phone*</label>
                <input type="text" name="phone" placeholder="+885 1254 5211 552"
                  class="w-full border-0 border-b border-[#f1f1f1] bg-transparent pb-3 text-body-color placeholder:text-body-color/60 focus:border-primary focus:outline-none dark:border-dark-3 dark:text-dark-6" />
              </div>
              <div class="mb-[30px]">
                <label for="message" class="mb-4 block text-sm text-body-color dark:text-dark-6">Message*</label>
                <textarea name="message" rows="1" placeholder="type your message here"
                  class="w-full resize-none border-0 border-b border-[#f1f1f1] bg-transparent pb-3 text-body-color placeholder:text-body-color/60 focus:border-primary focus:outline-none dark:border-dark-3 dark:text-dark-6"></textarea>
              </div>
              <div class="mb-0">
                <button type="submit"
                  class="inline-flex items-center justify-center rounded-md bg-primary px-10 py-3 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-blue-dark">
                  Send
                </button>
              </div>
            </form>
          </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Contact;
