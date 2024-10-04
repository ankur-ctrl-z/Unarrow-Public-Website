import React from "react";
import CustomButton from "../customs/CustomButton";
import CustomArrow from "../customs/CustomArrow";
import { FiArrowUpRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import gif from "../../assets/homeImage/gif.gif";
import "../styles/headerCss.css";

const Header = () => {
  const navigate = useNavigate();
  const handleCall = () => {
    console.log("hello from header");
    navigate("/contact");
  };

  return (
    <div className="headerBackgroundImage h-screen w-full bg-cover relative -mb-[12rem] lg:mb-0">
      <div className="w-11/12 mx-auto flex lg:gap-10 ">
        <div className="flex flex-col w-[185px] lg:w-full gap-4 text-white lg:ml-32 py-10 lg:py-32">
          <h1 className="text-[24px] xl:max-w-xl leading-[2rem]  mt-20 font-bold lg:text-[3.75rem] lg:leading-[4rem] font-Roboto">
            Crafting Digital Paths, One Brand at a Time
          </h1>
          <p className="lg:text-lg text-[11px] lg:max-w-sm font-Roboto">
           Digital Solutions So Good, Even the Internet's Jealous!
          </p>

          <div
            onClick={handleCall}
            className="flex w-[11.5rem] lg:w-[12rem] lg:ml-10 cursor-pointer"
          >
            <CustomButton label={"Book a Call"} />
            <CustomArrow icon={<FiArrowUpRight />} />
          </div>
        </div>

        <div className=" w-[40rem] h-[15rem] lg:w-[100rem] lg:h-[43.125rem] mt-16 lg:mt-16">
          <img src={gif} className="w-full h-full bg-contain" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
