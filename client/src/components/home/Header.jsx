import React from "react";
import CustomButton from "../customs/CustomButton";
import CustomArrow from "../customs/CustomArrow";
import { FiArrowUpRight } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';
import '../styles/headerCss.css'

const Header = () => {
  const navigate = useNavigate();
  const handleCall = () => {
    console.log("hello from header");
    navigate("/contact");
  };

  return (
    <div className="headerBackgroundImage h-screen w-full bg-cover relative">
        <div className="flex gap-10">

      
      <div className="flex flex-col gap-4 text-white ml-32 py-32">
        <h1 className="text-4xl max-w-xl leading-[4.5rem] mt-20 font-bold text-[3.75rem] font-Roboto">
          Crafting Digital Paths, One Brand at a Time
        </h1>
        <p className="text-lg max-w-sm font-Roboto">
          The best Digital Solution Agency in the Market. We are here to build
          your Dream website on the go.
        </p>

        <div
          onClick={handleCall}
          className="flex w-[12rem] ml-10 cursor-pointer"
        >
          <CustomButton label={"Book a Call"} />
          <CustomArrow icon={<FiArrowUpRight />} />
        </div>
      </div>

      <div className="w-[50rem] h-[43.125rem] mt-16">
        <img src={gif} className="w-full h-full bg-contain" alt="" />
      </div>

      </div>
    </div>
  );
};

export default Header;
