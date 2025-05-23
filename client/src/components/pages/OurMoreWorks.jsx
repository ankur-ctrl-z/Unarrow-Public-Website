import React from "react";
import CustomWork from "../customs/CustomWork";
import onetouch from "../pages/moreWorkImages/onetouch1.png";
import sja from "../pages/moreWorkImages/SJA.png";
import jow from "../pages/moreWorkImages/JOW.png";
import divineFitness from "../pages/moreWorkImages/Divine.png";

import { FaTelegramPlane } from "react-icons/fa";

const OurMoreWorks = () => {
  return (
    <div className="w-full relative h-full bg-[#011415] py-24">
      <div className="flex -mt-5 items-center justify-center gap-4 md:mt-5 lg:mt-8 lg:ml-14 py-5 mb-4 xl:py-14">
        <div className="w-2 h-2 lg:w-4 lg:h-4 mt-1 bg-[#db4a2b]" />
        <h3 className="text-xl lg:text-[2.1875rem] text-white font-bold font-Roboto">
          Our Work
        </h3>
        <FaTelegramPlane className="text-white text-xl lg:text-4xl" />
      </div>
      <div className="flex flex-col justify-center items-center -mb-40 ">
        <div className="-mt-10">
          <CustomWork
            image={jow}
            projectName={"journeyonwheels"}
            bgColor={"#1a8978"}
            branding={"Branding"}
            webdevelopment={"Web design"}
       
            path={"/ourworks/projects/journeyonwheels"}
          />
        </div>

        <div className="-mt-32">
          <CustomWork
            image={onetouch}
            projectName={"onetouchagency"}
            bgColor={"#354171"}
            branding={"Branding"}
            webdevelopment={"Web design & development"}
            seo={"SEO"}
            path={"/ourworks/projects/ontouchagency"}
          />
        </div>

        <div className="-mt-32">
          <CustomWork
            image={sja}
            projectName={"sjacarecenter"}
            bgColor={"#664e8a"}
            branding={"Branding"}
            webdevelopment={"Web design & development"}
            seo={"SEO"}
            path={"/ourworks/projects/sjacarecenter"}
          />
        </div>

        <div className="-mt-32 ">
          <CustomWork
            image={divineFitness}
            projectName={"Divine Fitness"}
            bgColor={"#891a43"}
            branding={"Branding"}
            webdevelopment={"Social Media Management"}
            path={"/ourworks/projects/divine-fitness"}
          />
        </div>
      </div>
    </div>
  );
};

export default OurMoreWorks;
