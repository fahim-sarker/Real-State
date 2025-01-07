import React from "react";

const Questionreusable = ({content1,content2}) => {
  return (
    <>
      <div class="w-full">
        <h3 class="mb-6 font-semibold text-dark dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
          {content1}
        </h3>
        <p class="text-base text-body-color dark:text-dark-6">
          {content2}
        </p>
      </div>
    </>
  );
};

export default Questionreusable;
