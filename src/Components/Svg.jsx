import React from "react";

const Svg = ({ icon: Icon }) => {
  return (
    <>
      <div className="bg-[#3758F9] h-[70px] w-[70px] rounded-lg flex justify-center items-center mb-12 cursor-pointer group">
        <Icon className=" h-[35px] w-[35px] text-white group-hover:rotate-180 duration-300" />
      </div>
    </>
  );
};

export default Svg;
