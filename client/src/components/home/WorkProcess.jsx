import React from "react";
import CustomButton from "../customs/CustomButton";
import { useNavigate } from "react-router-dom"; // Add this line if using React Router for navigation

const workprocess = [
  {
    id: 1,
    serviceNo: "01",
    service: "Project Idea",
    path: "/learnmore",
    desc: "Lorem ipsum dolor sit amet consectetur. Placerat consequat scelerisque pellentesque semper cursus ut. Viverra et at diam ut.",
  },
  {
    id: 2,
    serviceNo: "02",
    path: "/learnmore",
    service: "Brainstorming",
    desc: "Lorem ipsum dolor sit amet consectetur. Placerat consequat scelerisque pellentesque semper cursus ut. Viverra et at diam ut.",
  },
  {
    id: 3,
    serviceNo: "03",
    path: "/learnmore",
    service: "Execution",
    desc: "Lorem ipsum dolor sit amet consectetur. Placerat consequat scelerisque pellentesque semper cursus ut. Viverra et at diam ut.",
  },
];

const WorkProcess = () => {
  const navigate = useNavigate(); // Add this line for navigation
  function learnMoreHandler(path){
    navigate(path);
  }
  return (
    <div className="w-full relative h-full bg-[#011415]">
      <div className="w-11/12 mx-auto p-5">
        <div>
          <div className="flex items-center gap-4 ml-14 mb-14">
            <div className="w-4 h-4 mt-1 bg-[#db4a2b]"></div>
            <h3 className="text-4xl text-white font-bold font-Roboto">
              Our Work Process
            </h3>
          </div>

          {/* work process */}
          <div className="-mt-10 flex flex-col justify-center items-center">
            {workprocess.map((work) => {
              return (
                <div
                  key={work.id}
                  className="flex flex-col md:flex-row justify-start items-start gap-8 md:gap-28 max-w-[80rem] border-b-2 rounded-2xl py-8"
                >
                  <div className="flex justify-start text-[rgba(255,255,255,0.5)] font-Roboto text-[3.75rem] font-normal leading-normal">
                    {work.serviceNo}
                  </div>
                  <div className="text-start text-white font-Roboto text-[2.1875rem] font-bold leading-normal p-3">
                    {work.service}
                  </div>
                  <div className="text-start text-white font-Roboto max-w-md">
                    {work.desc}
                  </div>
                  <CustomButton
                    label={"Learn More"}
                    className={"bg-inherit text-[#db4a2b] underline"}
                    onClick={() =>learnMoreHandler(work.path)} // Updated for navigation
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkProcess;
