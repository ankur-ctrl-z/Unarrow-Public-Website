import React from "react";
import { FaTelegramPlane } from "react-icons/fa";
import onetouch from "../../assets/one touch.png";
import sja from "../../assets/sja.png";
import jow from "../../assets/journeyonwheel.png";
import CustomButton from "../customs/CustomButton";

const OurWorks = () => {
  return (
    
    <div className="w-full relative h-full bg-[#011415] pb-14">
      <div className="w-11/12 mx-auto">
        <div>
          <div className="flex items-center justify-center gap-4 ml-14 py-14">
            <div className="w-4 h-4 mt-1 bg-[#db4a2b]"></div>
            <h3 className="text-4xl text-white font-bold font-Roboto">
              Our Work
            </h3>
            <FaTelegramPlane className="text-white" size={40} />
          </div>

          {/* work-image */}
          <div className="flex flex-col justify-center items-center">
            <div className="flex gap-10">

              {/* one-touch-image */}
              <div>
                <div className="w-[35rem] h-[30rem] border rounded-3xl">
                  <img loading='lazy'
                    src={onetouch}
                    className="w-full h-full bg-cover rounded-3xl"
                    alt=""
                  />
                </div>

                <div className="flex flex-col gap-1 font-Roboto mt-1">
                  <h3 className="text-[2.18rem] font-bold leading-normal text-white">
                    Onetouch Agency
                  </h3>
                  <ul className="flex gap-3 text-gray-300">
                    <li>Branding</li>
                    <li>Web design & Development</li>
                    <li>SEO</li>
                  </ul>
                </div>
              </div>


            {/* sja-image */}
              <div>
                <div className="w-[35rem] h-[30rem] border rounded-3xl">
                  <img loading='lazy'
                    src={sja}
                    className="w-full h-full bg-cover rounded-3xl"
                    alt=""
                  />
                </div>

                <div className="flex flex-col gap-1 font-Roboto mt-1">
                  <h3 className="text-[2.18rem] font-bold leading-normal text-white">
                    sjacare center
                  </h3>
                  <ul className="flex gap-3 text-gray-300">
                    <li>Branding</li>
                    <li>Web design & Development</li>
                    <li>SEO</li>
                  </ul>
                </div>
              </div>
            </div>


          {/* journeyonwheel-image */}
            <div className="mt-10">
              <div className="w-[74rem] h-[30rem] border rounded-xl">
                <img loading='lazy'
                  src={jow}
                  className="w-full h-full bg-cover rounded-3xl"
                  alt=""
                />
              </div>
              <div className="flex flex-col gap-1 font-Roboto mt-1">
                <h3 className="text-[2.18rem] font-bold leading-normal text-white">
                  Journeyonwheels
                </h3>
                <ul className="flex gap-3 text-gray-300">
                  <li>Branding</li>
                  <li>Web design & Development</li>
                  <li>SEO</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>

      <CustomButton label={'Show More'} className={'w-full rounded-none text-[1.45rem] mt-5 h-[4rem]'}/>
    </div>
  );
};

export default OurWorks;
