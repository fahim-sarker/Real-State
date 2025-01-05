import React from "react";

const Signupreusable = ({ label, bgColor,text }) => {
  return (
    <>
      <button
        className={`px-5 py-2 ${text} font-popins text-[20px] rounded-lg ${bgColor} hover:bg-opacity-80 transition duration-300`}
      >
        {label}
      </button>
    </>
  );
};

export default Signupreusable;
