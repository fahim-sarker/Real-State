import React from "react";
import Allsvg from "./Allsvg";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Clientprofilereusable = ({ profile, Name, proffesion }) => {
  return (
    <>
      <div className="group">
        <div className="lg:group-hover:scale-105 duration-300 mb-8 rounded-xl bg-white px-5 lg:pb-10 pb-5 lg:pt-16 pt-10 shadow-medium">
          <div class="relative z-10 mx-auto mb-5 h-[120px] w-[120px] duration-300 group-hover:opacity-50">
            <img
              src={profile}
              alt="profile"
              className='class="!h-[120px] w-[120px] rounded-full'
            />
          </div>
          <div class="text-center">
            <h4 class="mb-1 lg:text-lg text-sm font-semibold text-dark dark:text-white">
              {Name}
            </h4>
            <p class="mb-5 text-sm text-body-color dark:text-dark-6">
              {proffesion}
            </p>
            <div className="flex justify-center gap-5 cursor-pointer">
              <Allsvg Svgs={FaFacebookF} />
              <Allsvg Svgs={FaInstagram} />
              <Allsvg Svgs={FaWhatsapp} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Clientprofilereusable;
