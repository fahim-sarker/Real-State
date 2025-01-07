import React, { useState } from "react";
import Container from "../Components/Container";
import Logo from "../assets/logo.png";
import Signupreusable from "./Signupreusable";

const Navbar = () => {
  
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };


  return (
    <>
      <section className="bg-[#3758F9] lg:py-3 py-1 fixed w-full lg:px-0 px-2">
        <Container>
          <div className="flex justify-between items-center">
            <div className="w-1/5">
              <img src={Logo} alt="Logo" className="lg:h-20 lg:w-20 h-12 w-12 rounded-full" />
            </div>
            <div className="hidden lg:flex w-3/5 justify-center">
              <ul className="flex gap-x-10">
                <li className="font-popins text-lg cursor-pointer text-white capitalize hover:text-[#F3F4F6]">
                  home
                </li>
                <li className="font-popins text-lg cursor-pointer text-white capitalize hover:text-[#F3F4F6]">
                  about
                </li>
                <li className="font-popins text-lg cursor-pointer text-white capitalize hover:text-[#F3F4F6]">
                  pricing
                </li>
                <li className="font-popins text-lg cursor-pointer text-white capitalize hover:text-[#F3F4F6]">
                  blog
                </li>
              </ul>
            </div>
            <div className="hidden lg:flex w-1/5 gap-x-3 justify-end">
              <Signupreusable label="sign in" text="text-white" />
              <Signupreusable label="sign up" bgColor="bg-white" text="black" />
            </div>
            
            <div className="lg:hidden flex items-center justify-between px-2">
              <button onClick={toggleSidebar} className="text-white text-[25px]">
                &#9776;
              </button>
            </div>
            <div
              className={`fixed inset-0 bg-black bg-opacity-50 z-50 ${
                isSidebarOpen ? "block" : "hidden"
              } lg:hidden`}
              onClick={toggleSidebar}
            >
              <div
                className={`fixed left-0 top-0 w-64 h-full bg-gray-800 p-5 transition-all duration-700 ${
                  isSidebarOpen
                    ? "transform translate-x-0 duration-700 ease-in-out"
                    : "transform -translate-x-full  duration-700 ease-in-out"
                }`}
              >
                <ul className="flex flex-col gap-y-4 text-white ml-6">
                  <li className="cursor-pointer capitalize font-popins text-[18px] hover:text-[#F3F4F6]">
                    home
                  </li>
                  <li className="cursor-pointer capitalize font-popins text-[18px] hover:text-[#F3F4F6]">
                    about
                  </li>
                  <li className="cursor-pointer capitalize font-popins text-[18px] hover:text-[#F3F4F6]">
                    pricing
                  </li>
                  <li className="cursor-pointer capitalize font-popins text-[18px] hover:text-[#F3F4F6]">
                    blog
                  </li>
                </ul>
                <div className="">
                  <Signupreusable label="sign in" text="text-white" />
                  <Signupreusable
                    label="sign up"
                    bgColor="bg-white"
                    text="black"
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Navbar;
