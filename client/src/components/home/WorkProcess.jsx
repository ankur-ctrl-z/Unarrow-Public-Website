import React from "react";

const workProcessData = [
  {
    id: 1,
    serviceNo: "01",
    service: "Project Idea",
    desc: "Lorem ipsum dolor sit amet consectetur. Placerat consequat scelerisque pellentesque semper cursus ut. Viverra et at diam ut.",
  },
  {
    id: 2,
    serviceNo: "02",
    service: "Brainstorming",
    desc: "Lorem ipsum dolor sit amet consectetur. Placerat consequat scelerisque pellentesque semper cursus ut. Viverra et at diam ut.",
  },
  {
    id: 3,
    serviceNo: "03",
    service: "Execution",
    desc: "Lorem ipsum dolor sit amet consectetur. Placerat consequat scelerisque pellentesque semper cursus ut. Viverra et at diam ut.",
  },
];

const WorkProcess = () => {
  return (
    <section className="w-full relative h-full bg-[#011415] py-12">
      <div className="w-11/12 mx-auto">
        <header className="mb-14">
          <div className="flex items-center gap-4 ml-14">
            <div className="w-4 h-4 mt-1 bg-[#db4a2b]"></div>
            <h1 className="text-4xl text-white font-bold font-Roboto">
              Our Work Process
            </h1>
          </div>
        </header>

        {/* work process */}
        <div className="flex flex-col justify-center items-center gap-10 -mt-10">
          {workProcessData.map((work) => (
            <article
              key={work.id}
              className="flex flex-col md:flex-row justify-between items-center text-start w-full max-w-[72rem] p-8 border-b-2 hover:border-[#db4a2b] transition-all duration-200 rounded-2xl"
            >
              <div className="text-[rgba(255,255,255,0.5)] text-start font-Roboto text-[3.75rem] font-normal">
                {work.serviceNo}
              </div>
              <div className="text-white font-Roboto max-w-[13.5rem] text-center md:text-left text-[2.1875rem] font-bold">
                {work.service}
              </div>
              <div className="text-white font-Roboto max-w-md text-center md:text-left">
                {work.desc}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;
