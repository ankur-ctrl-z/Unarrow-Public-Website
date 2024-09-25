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
    <div className="w-full py-10 bg-[#354171]">
      <div className="text-white max-w-[66rem] py-2 ml-[8rem] font-Roboto text-[2.5rem] leading-[3rem] font-bold">
        {text}
      </div>

      <div onClick={handleCall} className="flex w-[12rem] mt-8 ml-32">
        <CustomButton label={"Book a call"} />
        <CustomArrow icon={<FiArrowUpRight />} />
      </div>
    </div>
  );
};

export default CustomTheams;
