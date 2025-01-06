import React from "react";
import Container from "./Container";
import Featureheaderreusable from "./Featureheaderreusable";
import Dreamcardreusable from "./Dreamcardreusable";

const Available = () => {
  return (
    <>
      <section className="py-20">
        <Container>
          <Featureheaderreusable
            content1="Properties"
            content2="Grab your Dream Property"
            content3=" There are many variations of passages of Lorem Ipsum available
            but the majority have suffered alteration in some form."
          />
          <Dreamcardreusable/>
        </Container>
      </section>
    </>
  );
};

export default Available;
