import React from "react";
import CenterCustomHeading from "../customs/CenterCustomHeading";
import sja from "../pages/moreWorkImages/SJA.png";
import ClientsFeedback from "../home/ClientsFeedback";
import CustomArrow from "../customs/CustomArrow";
import CustomButton from "../customs/CustomButton";
import { FiArrowUpRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const Services = [
  {
    id: 1,
    service: "UI/UX designing",
  },

  {
    id: 2,
    service: "Development",
  },

  {
    id: 3,
    service: "SEO",
  },

  {
    id: 4,
    service: "Branding",
  },
];

const SJACareProject = () => {
  const navigate = useNavigate();
  function handleCall() {
    navigate("/contact");
  }

  return (
    <div className="w-full relative h-full bg-black py-32 overflow-x-clip">
      <div className="w-11/12 mx-auto p-2  mb-5 lg:p-8">
        <div>
          <CenterCustomHeading
            className={"-mt-10 md:py-5 mb-2"}
            heading={"SJA care center"}
          />
          <p className="text-white mb-2 font-bold text-sm lg:text-2xl xl:text-[1.8rem] font-Roboto">
            Project Types
          </p>
          <div className="max-w-[6.5rem] lg:max-w-[10.5rem] xl:max-w-[12.5rem]">
            <hr />
          </div>
          <div className="flex gap-2 lg:gap-10">
            {Services.map((s) => {
              return (
                <div className="flex gap-2 lg:gap-5 justify-center items-center">
                  <div className="w-2 h-2 lg:h-4 lg:w-4 bg-red-600 rounded-full"></div>
                  <p className="text-white font-Roboto mt-2 mb-2 font-normal text-[9px] lg:text-xl">
                    {s.service}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="flex justify-center items-center mt-[8rem] lg:py-14 xl:py-24 mb-[17rem] ">
            <div className="w-[18rem] md:w-[43rem] md:h-[20rem] md:mt-24 lg:w-[58rem] xl:w-[82.5rem] h-[230px] lg:h-[26rem] xl:h-[32rem] absolute border-2 hover:scale-105 duration-300 transition-all rounded-2xl z-30 m-auto ">
              <img
                src={sja}
                loading="lazy"
                className="w-full h-full bg-cover rounded-2xl"
                alt="This is an about image"
              />
            </div>
            <div className="w-[18rem] md:w-[43rem] md:h-[20rem] md:mt-24 lg:w-[58rem] xl:w-[82.5rem] h-[230px] lg:h-[26rem] xl:h-[31rem] absolute hover:scale-105 duration-300 transition-all mt-5 -ml-5 bg-[#db4a2b] rounded-2xl"></div>
          </div>

          <p className="text-white text-center mb-5 md:py-24 md:-mb-16 font-Roboto font-bold lg:text-[1.8rem] -mt-32">
            About Project
          </p>
          <hr />

          <div className="flex flex-col justify-start items-center">
            <div className="flex flex-col lg:flex-row w-full gap-5 -mt-10">
              <p className="text-white lg:mt-28  font-Roboto font-bold lg:text-[1.8rem] mt-14">
                Project Summary
              </p>
              <div className="hidden lg:ml-2 xl:ml-7 lg:h-[14rem] xl:h-[10rem] lg:block lg:mt-[4.2rem] w-[0.0625rem] h-[12rem] bg-gray-500"></div>
              <p className="lg:max-w-[60rem] text-gray-500 text-sm -mt-2 lg:text-[0.935rem] lg:mt-16 font-normal leading-normal font-Roboto">
                Lorem ipsum dolor sit amet consectetur. Integer pellentesque
                aliquam aliquet proin. Ullamcorper pulvinar maecenas est nunc
                elementum vel eu sit consectetur. Adipiscing imperdiet massa
                gravida lectus facilisis. Odio viverra tortor vitae risus
                convallis orci. Dolor gravida nunc cursus pharetra congue
                adipiscing turpis elit. Ut lorem sagittis interdum facilisis vel
                consequat aliquet sit aliquam. Viverra ultricies morbi feugiat
                elit duis risus. Turpis consequat viverra fringilla vitae id
                felis fringilla mauris. Nibh sit ut orci imperdiet ipsum arcu.
                lorem sagittis interdum facilisis vel consequat aliquet sit
                aliquam. Viverra ultricies morbi feugiat elit duis risus. Turpis
                consequat viverra fringilla vitae id felis fringilla mauris.
                Nibh sit ut orci imperdiet ipsum arcu.
              </p>
            </div>

            {/* horizontal line */}

            <div className="w-full bg-white mt-4">
              <hr />
            </div>

            <div className="flex flex-col lg:flex-row w-full gap-5 -mt-10">
              <p className="text-white lg:mt-28 font-Roboto font-bold lg:text-[1.8rem] mt-14">
                Problem Statement
              </p>
              <div className="hidden  lg:block lg:mt-[4.2rem]  w-[0.0625rem] lg:h-[14rem] xl:h-[10rem] bg-gray-500"></div>
              <p className="max-w-[60rem] text-gray-500 text-sm -mt-2 lg:mt-16 lg:text-[0.935rem] font-normal leading-normal font-Roboto">
                Lorem ipsum dolor sit amet consectetur. Integer pellentesque
                aliquam aliquet proin. Ullamcorper pulvinar maecenas est nunc
                elementum vel eu sit consectetur. Adipiscing imperdiet massa
                gravida lectus facilisis. Odio viverra tortor vitae risus
                convallis orci. Dolor gravida nunc cursus pharetra congue
                adipiscing turpis elit. Ut lorem sagittis interdum facilisis vel
                consequat aliquet sit aliquam. Viverra ultricies morbi feugiat
                elit duis risus. Turpis consequat viverra fringilla vitae id
                felis fringilla mauris. Nibh sit ut orci imperdiet ipsum arcu.
                lorem sagittis interdum facilisis vel consequat aliquet sit
                aliquam. Viverra ultricies morbi feugiat elit duis risus. Turpis
                consequat viverra fringilla vitae id felis fringilla mauris.
                Nibh sit ut orci imperdiet ipsum arcu.
              </p>
            </div>

            {/* horizontal line */}

            <div className="w-full bg-white mt-4">
              <hr />
            </div>

            <div className="flex flex-col lg:flex-row w-full gap-5 -mt-10">
              <p className="text-white lg:mt-28 font-Roboto font-bold lg:text-[1.8rem] mt-14">
                Solutions
              </p>
              <div className="hidden lg:block lg:ml-2 xl:ml-[9rem] lg:mt-[4.2rem] w-[0.0625rem] lg:h-[14rem] xl:h-[10rem] bg-gray-500"></div>
              <p className="max-w-[60rem] text-gray-500 text-sm -mt-2 lg:mt-16 lg:text-[0.935rem] font-normal leading-normal font-Roboto">
                Lorem ipsum dolor sit amet consectetur. Integer pellentesque
                aliquam aliquet proin. Ullamcorper pulvinar maecenas est nunc
                elementum vel eu sit consectetur. Adipiscing imperdiet massa
                gravida lectus facilisis. Odio viverra tortor vitae risus
                convallis orci. Dolor gravida nunc cursus pharetra congue
                adipiscing turpis elit. Ut lorem sagittis interdum facilisis vel
                consequat aliquet sit aliquam. Viverra ultricies morbi feugiat
                elit duis risus. Turpis consequat viverra fringilla vitae id
                felis fringilla mauris. Nibh sit ut orci imperdiet ipsum arcu.
                lorem sagittis interdum facilisis vel consequat aliquet sit
                aliquam. Viverra ultricies morbi feugiat elit duis risus. Turpis
                consequat viverra fringilla vitae id felis fringilla mauris.
                Nibh sit ut orci imperdiet ipsum arcu.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* client-feedback */}
      <ClientsFeedback />

      {/* custom Theam-section */}
      <div className="w-full flex -mb-[8rem] flex-col justify-center items-center py-10 bg-[#664d8a]">
        <div className="text-center text-white max-w-[66rem]  font-Roboto text-2xl lg:text-[4rem] mt-2 xl:text-[5rem] leading-[3rem] font-bold">
          Have a Project In Mind ??
        </div>

        <div
          onClick={handleCall}
          className="flex justify-center mt-5 lg:mt-16 items-center w-[12rem] "
        >
          <CustomButton label={"Consult Now"} />
          <CustomArrow icon={<FiArrowUpRight />} />
        </div>
      </div>
    </div>
  );
};

export default SJACareProject;
