import React from "react";
import { Link } from "react-router-dom";
import { TiArrowRight } from "react-icons/ti";

const CustomWork = ({ image, projectName, bgColor, path }) => {
  return (
    <div className="w-full relative h-full bg-[#011415] py-[8rem]">
      <div className="w-[18rem] md:w-[36rem] lg:w-[56rem] xl:w-[74rem] -mt-20 lg:h-[30rem] hover:scale-105 duration-300 transition-all border rounded-[2.5rem]">
        <img
          src={image}
          className="w-full h-full bg-cover rounded-[2.5rem]"
          alt=""
        />{" "}
      </div>

      <div
        className="w-[18rem] md:w-[36rem] lg:w-[56rem] xl:w-[74rem] flex justify-between lg:h-[14rem] font-Roboto -mt-28 border rounded-[2.5rem]"
        style={{ backgroundColor: bgColor }}
      >
        <div className="mt-[7rem] ml-5">
          <p className="text-lg md:text-[26px] lg:text-[2.18rem] font-bold leading-normal text-white">
            {projectName}
          </p>
          <ul className="flex gap-3 text-gray-300">
            <li>
              <div className="flex gap-2">
                <div className="h-2 w-2 md:mt-1 rounded-full bg-red-600"></div>
                <p className="font-normal text-[9px] md:text-[13px]">Branding</p>
              </div>
            </li>
            <li>
              <div className="flex gap-2">
                <div className="h-2 w-4 md:w-2 md:mt-1 rounded-full bg-red-600"></div>
                <p className="font-normal text-[9px] md:text-[13px]">
                  Web design & Development
                </p>
              </div>
            </li>
            <li>
              <div className="flex gap-2">
                <div className="h-2 w-2 mt-1 rounded-full bg-red-600"></div>
                <p className="font-normal text-[9px] md:text-[13px]">SEO</p>
              </div>
            </li>
          </ul>
        </div>
        <Link
          to={path}
          className="underline flex text-red-500 mt-[8.5rem] ml-2 md:mt-36 mr-10 text-[9px] md:text-md"
        >
          <div className="text-[8px] md:text-[12px] md:mt-2 ">Learn more</div> <TiArrowRight className="mt-1 -ml-2 md:ml-0" size={25} />
        </Link>
      </div>
    </div>
  );
};

export default CustomWork;
