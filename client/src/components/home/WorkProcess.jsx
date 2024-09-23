import React from "react";
import { useNavigate } from "react-router-dom";

const workProcessData = [
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
  const navigate = useNavigate();

  const learnMoreHandler = (path) => {
    navigate(path);
  };

  return (
    <div className="w-full relative h-full bg-[#011415] py-12">
      <div className="w-11/12 mx-auto">
        <div className="mb-14">
          <div className="flex items-center gap-4 ml-14">
            <div className="w-4 h-4 mt-1 bg-[#db4a2b]"></div>
            <h3 className="text-4xl text-white font-bold font-Roboto">
              Our Work Process
            </h3>
          </div>
        </div>

        {/* work process */}
        <div className="flex flex-col justify-center -mt-10 items-center gap-10">
          {workProcessData.map((work) => (
            <div
              key={work.id}
              className="flex flex-col md:flex-row justify-between items-center w-full max-w-[72rem] p-8 border-b-2 hover:border-[#db4a2b] duration-200 transition-all rounded-2xl"
            >
              <div className="text-[rgba(255,255,255,0.5)] font-Roboto text-[3.75rem] font-normal">
                {work.serviceNo}
              </div>
              <div className="text-white font-Roboto text-[2.1875rem] font-bold">
                {work.service}
              </div>
              <div className="text-white font-Roboto max-w-md text-center md:text-left">
                {work.desc}
              </div>
              <button
                onClick={() => learnMoreHandler(work.path)}
                className="underline text-[#db4a2b] font-Roboto"
              >
                Learn more
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkProcess;
