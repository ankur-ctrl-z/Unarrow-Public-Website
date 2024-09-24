import React from "react";
import CustomArrow from "../customs/CustomArrow";
import { FiArrowUpRight } from "react-icons/fi";
import CenterCustomHeading from "../customs/CenterCustomHeading";
import career from "../../assets/careerImages/career image.svg";

const Careers = () => {
  return (
    <div className="w-full relative h-full bg-[#011415] py-32">
      <div className="w-11/12 mx-auto p-8">
        <div className="flex flex-col justify-center items-center">
          <CenterCustomHeading heading={"Opportunities to Innovate and Grow"} />
          <div className="w-[30rem] h-[36rem] flex justify-center items-center">
            <img src={career} className="w-full h-full bg-cover" alt="" />
          </div>

          <p className=" w-[22rem] text-center text-[1.56rem] font-normal font-Roboto text-white leading-normal  ">There is no job Currently .. Come back later</p>
        </div>
      </div>
    </div>
  );
};

export default Careers;
