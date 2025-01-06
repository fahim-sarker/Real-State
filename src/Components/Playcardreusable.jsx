import React from "react";

const Playcardreusable = ({ content1, content2, content3 }) => {
  return (
    <>
      <h4 class="mb-3 text-xl font-bold text-dark dark:text-white font-popins">
        {content1}
      </h4>
      <p class="mb-8 text-body-color dark:text-dark-6 lg:mb-9 font-popins text-[17px]">
        {content2}
      </p>
      <a
        href="#"
        class="text-base font-medium text-dark font-popins hover:text-[#3758F9] dark:text-white dark:hover:text-[#3758F9]"
      >
        {content3}
      </a>
    </>
  );
};

export default Playcardreusable;
