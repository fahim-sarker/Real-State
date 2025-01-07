import React from "react";
import Allsvg from "./Allsvg";
import { FaShower } from "react-icons/fa";
import { IoBedOutline } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";

const Dreamcardreusable = ({ image, title, price, item, location, item1 }) => {
  return (
    <>
      <div className="border border-gray-100 rounded-lg p-3">
        <img
          src={image}
          alt="image"
          className="lg:h-[250px] h-[120px] !w-full rounded-lg bg-black"
        />
        <div class="lg:p-6 p-2">
          <h4 class="lg:text-2xl text-lg font-bold cursor-pointer">{title}</h4>
          <div class="mt-2">
            <span class="lg:text-xl text-sm font-extrabold text-blue-600">{price}</span>
            /M
          </div>
          <div className="lg:flex justify-between items-center border-t-2 border-gray-100 pt-4 mt-3">
            <div className="flex items-center gap-3">
              <Allsvg Svgs={IoBedOutline} />
              <p>
                <span class="font-bold text-gray-900">3</span> {item}
              </p>
            </div>
            <div className="flex items-center lg:gap-3 gap-2">
              <Allsvg Svgs={FaShower} />
              <p>
                <span class="font-bold text-gray-900">2</span> {item1}
              </p>
            </div>
          </div>
          <h5 className="lg:text-1xl text-sm font-bold cursor-pointer pt-5 flex items-center gap-x-5">
            <Allsvg Svgs={FaLocationDot} />
            {location}
          </h5>
        </div>
      </div>
    </>
  );
};

export default Dreamcardreusable;
