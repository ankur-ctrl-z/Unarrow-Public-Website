import React from "react";
import CustomWork from "../customs/CustomWork";
import onetouch from "../../assets/workImage/one touch.png";
import sja from "../../assets/workImage/sja.png";
import jow from "../../assets/workImage/journeyonwheel.png";
import { FaTelegramPlane } from "react-icons/fa";


const OurMoreWorks = () => {
  return (
    <div className="w-full relative h-full bg-[#011415] py-20">
      <div className="flex -mt-5 items-center justify-center gap-4 lg:ml-14 py-5 mb-4 xl:py-14">
        <div className="w-2 h-2 lg:w-4 lg:h-4 mt-1 bg-[#db4a2b]" />
        <h3 className="text-xl lg:text-[2.1875rem] text-white font-bold font-Roboto">Our Work</h3>
        <FaTelegramPlane className="text-white" size={40} />
      </div>
      <div className="flex flex-col justify-center items-center -mb-40">
        
          <div className="-mt-10">
            <CustomWork
              image={jow}
              projectName={"journeyonwheels"}
              bgColor={"#1a8978"}
              path={'/ourworks/projects/ontouchagency'}
            />
          </div>
       

        <div className="-mt-32">
          <CustomWork
            image={onetouch}
            projectName={"onetouchagency"}
            bgColor={"#354171"}
          />
        </div>

        <div className="-mt-32">
          <CustomWork
            image={sja}
            projectName={"sjacarecenter"}
            bgColor={"#664e8a"}
          />
        </div>

        <div className="-mt-32">
          <CustomWork
            image={sja}
            projectName={"Divine Fitness"}
            bgColor={"#891a43"}
          />
        </div>
      </div>
    </div>
  );
};

export default OurMoreWorks;
