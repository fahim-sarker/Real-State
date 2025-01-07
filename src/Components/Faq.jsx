import React from "react";
import Container from "./Container";
import Featureheaderreusable from "./Featureheaderreusable";
import Svg from "../Components/Svg";
import Questionreusable from "../Components/Questionreusable";
import { CiCircleQuestion } from "react-icons/ci";

const Faq = () => {
  return (
    <>
      <section className="lg:py-[80px] py-[40px] lg:px-0 px-2">
        <Container>
          <Featureheaderreusable
            content1=" FAQ"
            content2="Any Questions? Look Here"
            content3="There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form."
          />
          <div className="lg:flex flex-wrap justify-between items-center">
            <div className="lg:w-[48%] w-full flex justify-between gap-5">
              <Svg icon={CiCircleQuestion} />
              <Questionreusable
                content1="Is TailGrids Well-documented?"
                content2="It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content ui/ux strategy that we do writing your first blog post."
              />
            </div>
            <div className="lg:w-[48%] w-full flex justify-between gap-5 lg:mt-0 mt-10">
            <Svg icon={CiCircleQuestion} />
              <Questionreusable
                content1="Is TailGrids Well-documented?"
                content2="It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content ui/ux strategy that we do writing your first blog post."
              />
            </div>
            <div className="lg:w-[48%] w-full flex justify-between gap-5 mt-10">
            <Svg icon={CiCircleQuestion} />
              <Questionreusable
                content1="Is TailGrids Well-documented?"
                content2="It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content ui/ux strategy that we do writing your first blog post."
              />
            </div>
            <div className="lg:w-[48%] w-full flex justify-between gap-5 mt-10">
            <Svg icon={CiCircleQuestion} />
              <Questionreusable
                content1="Is TailGrids Well-documented?"
                content2="It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content ui/ux strategy that we do writing your first blog post."
              />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Faq;
