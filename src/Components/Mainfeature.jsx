import React from "react";
import Container from "./Container";
import Featureheaderreusable from "./Featureheaderreusable";
import Svg from "../Components/Svg";
import { IoIosGift } from "react-icons/io";
import { MdOutlineCalendarToday } from "react-icons/md";
import { IoWomanSharp } from "react-icons/io5";
import { PiDotsNineLight } from "react-icons/pi";
import Playcardreusable from "./Playcardreusable";

const Mainfeature = () => {
  return (
    <>
      <section className="lg:py-20 py-10 lg:px-0 px-2">
        <Container>
          <Featureheaderreusable
            content1="Features"
            content2="Main Features Of Play"
            content3=" There are many variations of passages of Lorem Ipsum available
                       but the majority have suffered alteration in some form."
          />
          <div className="flex flex-wrap justify-between">
            <div className="lg:w-[23%] w-[48%]">
              <Svg icon={IoIosGift} />
              <Playcardreusable
                content1="Premium Property Listings"
                content2="Discover an array of hand-picked properties that meet the highest standards of luxury and comfort."
                content3="Learn More"
              />
            </div>
            <div className="lg:w-[23%] w-[48%]">
              <Svg icon={MdOutlineCalendarToday} />
              <Playcardreusable
                content1="Personalized Property Matching"
                content2="Discover an array of hand-picked properties that meet the highest standards of luxury and comfort."
                content3="Learn More"
              />
            </div>
            <div className="lg:w-[23%] w-[48%] lg:mt-0 mt-5">
              <Svg icon={IoWomanSharp} />
              <Playcardreusable
                content1="Expert Guidance and Support"
                content2="Discover an array of hand-picked properties that meet the highest standards of luxury and comfort."
                content3="Learn More"
              />
            </div>
            <div className="lg:w-[23%] w-[48%] lg:mt-0 mt-5">
              <Svg icon={PiDotsNineLight} />
              <Playcardreusable
                content1="New Virtual Tours Service"
                content2="Discover an array of hand-picked properties that meet the highest standards of luxury and comfort."
                content3="Learn More"
              />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Mainfeature;
