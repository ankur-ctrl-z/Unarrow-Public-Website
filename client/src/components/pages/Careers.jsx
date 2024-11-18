import React from "react";
import CenterCustomHeading from "../customs/CenterCustomHeading";
import career from "../../assets/careerImages/career image.svg";

const Careers = () => {
  return (
    <div className="w-full relative h-full bg-[#011415] py-24 md:py-26 xl:py-32">
      <div className="w-11/12 mx-auto p-6 md:p-8">
        <div className="flex flex-col justify-center items-center space-y-6 md:space-y-10">
          {/* Heading */}
          <CenterCustomHeading heading={"Opportunities to Innovate and Grow"} />
          
          {/* Image Container */}
          <div className="w-[16rem] h-[24rem] md:w-[22rem] md:h-[32rem] lg:w-[28rem] lg:h-[36rem] flex justify-center items-center">
            <img src={career} className="w-full h-full object-cover" alt="Career" />
          </div>
          
          {/* Description Text */}
          <p className="w-[16rem] md:w-[20rem] lg:w-[26rem] text-center text-base md:text-lg lg:text-xl font-normal font-Roboto text-white leading-relaxed">
            There is no job currently. Come back later.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Careers;
