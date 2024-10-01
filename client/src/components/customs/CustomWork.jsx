import React from "react";
import { Link } from "react-router-dom";
import { TiArrowRight } from "react-icons/ti";


const CustomWork = ({ image, projectName, bgColor, path }) => {
  return (
    <div className="w-full relative h-full bg-[#011415] py-32">
      <div className="lg:w-[74rem] -mt-20 lg:h-[30rem] hover:scale-105 duration-300 transition-all border rounded-[2.5rem]">
        <img
          src={image}
          className="w-full h-full bg-cover rounded-[2.5rem]"
          alt=""
        />{" "}
      </div>

     
        <div className="lg:w-[74rem] flex justify-between lg:h-[14rem] font-Roboto -mt-28 border rounded-[2.5rem]" style={{ backgroundColor: bgColor }}>

        <div className="mt-[7rem] ml-5">
          <p className="text-[2.18rem] font-bold leading-normal text-white">
            {projectName}
          </p>
          <ul className="flex gap-3 text-gray-300">
            <li>
              <div className="flex gap-2">
                <div className="h-2 w-2 mt-2 rounded-full bg-red-600"></div>
                <p className="font-normal">Branding</p>
              </div>
            </li>
            <li>
              <div className="flex gap-2">
                <div className="h-2 w-2 mt-2 rounded-full bg-red-600"></div>
                <p className="font-normal">Web design & Development</p>
              </div>
            </li>
            <li>
              <div className="flex gap-2">
                <div className="h-2 w-2 mt-2 rounded-full bg-red-600"></div>
                <p className="font-normal">SEO</p>
              </div>
            </li>
          </ul>
        </div>

        <Link to={path} className="underline flex text-red-500 mt-36 mr-10"><div>Learn more</div> <TiArrowRight className="mt-1" size={25}/></Link>
      </div>
    </div>
  );
};

export default CustomWork;
