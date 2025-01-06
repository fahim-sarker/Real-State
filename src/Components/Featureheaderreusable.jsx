import React from "react";

const Featureheaderreusable = ({ content1, content2, content3 }) => {
  return (
    <>
      <div class="mx-auto mb-12 max-w-[485px] text-center lg:mb-[70px]">
        <span class="mb-2 block text-lg font-popins font-semibold text-[#3758F9]">
          {content1}
        </span>
        <h2 class="mb-3 text-3xl font-bold text-black font-popins">
          {content2}
        </h2>
        <p class="text-base dark:text-dark-6 font-popins text-[15px]">
          {content3}
        </p>
      </div>
    </>
  );
};

export default Featureheaderreusable;
