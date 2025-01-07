import React from "react";
import Container from "./Container";
import Featureheaderreusable from "./Featureheaderreusable";
import Clientprofilereusable from "./Clientprofilereusable";
import Man from "../assets/man.png"
import Man3 from "../assets/man3.jpg"


const Client = () => {
  return (
    <>
      <section className="lg:py-[80px] py-[30px] lg:px-0 px-2">
        <Container>
          <Featureheaderreusable
            content1="Our Team Members"
            content2=" Our Clients"
            content3=" There are many variations of passages of Lorem Ipsum available
             the majority have suffered alteration in some form."
          />
          <div className="flex flex-wrap justify-between">
            <div className="lg:w-[23%] w-[48%]">
              <Clientprofilereusable 
              profile={Man}
              Name=" Melissa Tatcher"
              proffesion="Marketing Expert"
              />
            </div>
            <div className="lg:w-[23%] w-[48%]">
              <Clientprofilereusable 
              profile={Man3}
              Name=" Jekie Sanders"
              proffesion="Founder and Ceo"
              />
            </div>
            <div className="lg:w-[23%] w-[48%]">
              <Clientprofilereusable 
              profile={Man}
              Name=" Stuard Fereel"
              proffesion="Digital Marketing"
              />
            </div>
            <div className="lg:w-[23%] w-[48%]">
              <Clientprofilereusable 
              profile={Man3}
              Name="Eva Hudson"
              proffesion="Seo Expert"
              />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Client;
