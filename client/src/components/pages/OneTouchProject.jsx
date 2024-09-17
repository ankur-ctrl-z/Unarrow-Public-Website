import React from "react";
import CenterCustomHeading from "../customs/CenterCustomHeading";
import CustomOverlappingCards from "../customs/CustomOverlappingCards";
import about2 from "../../assets/aboutUsImage/about2.png";
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

const OneTouchProject = () => {
  const navigate = useNavigate();
  function handleCall() {
    navigate("/contact");
  }

  return (
    <div className="w-full relative h-full bg-black py-32 overflow-x-clip">
      <div className="w-11/12 mx-auto p-8">
        <div>
          <CenterCustomHeading heading={"Onetouchagency"} />
          <p className="text-white font-bold text-[1.8rem] font-Roboto">
            Project Types
          </p>
          <div className="max-w-[12.7rem]">
            <hr />
          </div>
          <div className="flex gap-10">
            {Services.map((s) => {
              return (
                <div className="flex gap-5 justify-center items-center">
                  <div className="h-4 w-4 bg-red-600 rounded-full"></div>
                  <p className=" text-white font-Roboto mt-2 mb-2 font-normal text-xl">
                    {s.service}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="w-full h-[40rem] mt-10">
            <CustomOverlappingCards
              className={"w-[83.75rem] h-[40rem]"}
              image={about2}
            />
          </div>

          <p className="text-white font-Roboto font-bold text-[1.8rem] mt-20">
            About Project
          </p>
          <hr />

          <div className="flex flex-col justify-start items-center">
            <div className="flex w-full gap-5 ml-14 mt-5">
              <p className="text-white font-Roboto font-bold text-[1.8rem] mt-14">
                Project Summary
              </p>
              <div className="w-[0.0625rem] h-[10rem] bg-gray-500"></div>
              <p className="max-w-[60rem] text-gray-500 text-[0.935rem] font-normal leading-normal font-Roboto">
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

            <div className="flex w-full gap-5 mt-5">
              <p className="text-white font-Roboto font-bold text-[1.8rem] mt-14">
                Problem Statement
              </p>
              <div className="w-[0.0625rem] h-[10rem] bg-gray-500"></div>
              <p className="max-w-[60rem] text-gray-500 text-[0.935rem] font-normal leading-normal font-Roboto">
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

            <div className="flex w-full gap-5 ml-[19.8rem] mt-5">
              <p className="text-white font-Roboto font-bold text-[1.8rem] mt-14 -ml-[5rem]">
                Solution
              </p>
              <div className="w-[0.0625rem] h-[10rem] bg-gray-500  ml-[5rem]"></div>
              <p className="max-w-[60rem] text-gray-500 text-[0.935rem] font-normal leading-normal font-Roboto">
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
      <ClientsFeedback />

      {/* custom Theam-section */}
      <div className="w-full flex -mb-[8rem] flex-col justify-center items-center py-10 bg-[#664d8a]">
        <div className="text-center text-white max-w-[66rem] py-2 font-Roboto text-[5rem] mb-2 leading-[3rem] font-bold">
          Have a Project In Mind ??
        </div>

        <div
          onClick={handleCall}
          className="flex justify-center items-center w-[12rem] mt-8"
        >
          <CustomButton label={"Consult Now"} />
          <CustomArrow icon={<FiArrowUpRight />} />
        </div>
      </div>
    </div>
  );
};

export default OneTouchProject;
