import React from "react";
import CustomArrow from "../customs/CustomArrow";
import CustomButton from "../customs/CustomButton";
import { FiArrowUpRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const CustomTheams = ({ text,className }) => {
  const navigate = useNavigate();
  function handleCall() {
    navigate("/contact");
  }

  return (
    <div className="w-full p-2 lg:py-10 bg-[#354171]">
      <div className="text-white lg:max-w-[66rem] p-2 lg:ml-[8rem] font-Roboto text-[20px]  lg:text-[2.5rem] lg:leading-[3rem] font-bold">
        {text}
      </div>

      <div onClick={handleCall} className="flex w-[12rem] mt-3 lg:mt-8 ml-16 lg:ml-32">
        <CustomButton label={"Book a call"} />
        <CustomArrow icon={<FiArrowUpRight />} />
      </div>
    </div>
  );
};

export default CustomTheams;
