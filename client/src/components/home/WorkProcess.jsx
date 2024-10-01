import React from "react";
import img1 from "../../assets/homeImage/office.png";
import img2 from "../../assets/homeImage/mindstorming.png";
import img3 from "../../assets/homeImage/projectIdea.png";

const workProcessData = [
  {
    id: 1,
    serviceNo: "01",
    service: "Project Idea",
    img: img3,
    desc:
      "Lorem ipsum dolor sit amet consectetur. Placerat consequat scelerisque pellentesque semper cursus ut. Viverra et at diam ut.",
  },
  {
    id: 2,
    serviceNo: "02",
    service: "Brainstorming",
    img: img2,
    desc:
      "Lorem ipsum dolor sit amet consectetur. Placerat consequat scelerisque pellentesque semper cursus ut. Viverra et at diam ut.",
  },
  {
    id: 3,
    serviceNo: "03",
    service: "Execution",
    img: img1,
    desc:
      "Lorem ipsum dolor sit amet consectetur. Placerat consequat scelerisque pellentesque semper cursus ut. Viverra et at diam ut.",
  },
];

const WorkProcess = () => {
  return (
    <section className="w-full relative h-full bg-[#011415] py-12">
      <div className="w-11/12 mx-auto">
        <header className="mb-5 lg:mb-14 -mt-5">
          <div className="flex items-center gap-2 lg:gap-4 lg:ml-14">
            <div className="w-2 h-2 lg:w-4 lg:h-4 mt-1 bg-[#db4a2b]"></div>
            <h1 className="text-xl lg:text-[2.1875rem] text-white font-bold font-Roboto">
              Our Work Process
            </h1>
          </div>
        </header>

        {/* work process */}
        <div className="flex flex-col justify-center items-center lg:gap-10 -mt-10">
          {workProcessData.map((work) => (
            <article
              key={work.id}
              className="flex justify-between items-center mt-2 text-start w-full max-w-[72rem] p-8 border-b-2 hover:border-[#db4a2b] transition-all duration-200 rounded-2xl"
            >
              <div className="text-[rgba(255,255,255,0.5)] text-start font-Roboto text-[30px] lg:text-[3.75rem] font-normal">
                {work.serviceNo}
              </div>
              <div className="text-white font-Roboto max-w-[13.5rem] text-center md:text-left text-[20px] lg:text-[2.1875rem] font-bold">
                {work.service}
              </div>
              <div className="hidden lg:block text-white font-Roboto max-w-md text-center md:text-left">
                {work.desc}
              </div>

              <div className="w-[30px] h-[30px]">
                <img src={work.img} className="w-full h-full bg-cover" alt="" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;
