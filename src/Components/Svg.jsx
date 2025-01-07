import React from "react";

const Svg = ({ icon: Icon }) => {
  return (
    <>
      <div className="bg-[#3758F9] lg:h-[70px] lg:w-[70px] h-[40px] w-[40px] rounded-lg flex justify-center items-center mb-12 cursor-pointer group">
        <Icon className=" lg:h-[35px] lg:w-[35px] h-[20px] w-[20px] text-white group-hover:rotate-180 duration-300" />
      </div>
    </>
  );
};

export default Svg;
