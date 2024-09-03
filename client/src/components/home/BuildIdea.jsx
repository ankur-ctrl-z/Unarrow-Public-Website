import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { useNavigate } from "react-router";
import CustomTheams from "../customs/CustomTheams";
import img1 from "../../assets/image-1.png";
import img2 from "../../assets/image-2.png";

const BuildIdea = () => {
  const navigate = useNavigate();
  function handleCall() {
    navigate("/contact");
  }

  return (
    <div className="w-full relative h-full bg-[#011415] py-14">
      <div className="w-11/12 mx-auto">
        {/* cards-section */}
        <div className="flex justify-center gap-5 mb-10">
          <div className="flex justify-center items-center group text-[3.125rem] font-Roboto leading-normal w-[18.87rem] h-[15.0625rem] bg-black flex-shrink-0 rounded-xl">
            <p className="font-bold group-hover:scale-150 duration-500 transition-all text-white ">WE</p>
          </div>
          <div className="flex justify-center items-center group text-[3.125rem] leading-normal w-[18.87rem] h-[15.0625rem] bg-black flex-shrink-0 rounded-xl">
            <img className="w-full h-full rounded-xl opacity-80 bg-cover" src={img1} alt="" />
            <p className="text-white text-[3.125rem] group-hover:scale-150 duration-500 transition-all font-bold font-Roboto absolute">BUILD</p>
          </div>
          <div className="flex justify-center group bg-[#db4a2b] text-white items-center text-[3.125rem] w-[18.87rem] h-[15.0625rem] flex-shrink-0 rounded-xl">
            <FaArrowRight size={130} className="group-hover:scale-150 duration-500 transition-all" />
          </div>
          <div className="flex justify-center items-center group text-[3.125rem] leading-normal w-[18.87rem] h-[15.0625rem] bg-black flex-shrink-0 rounded-xl">
            <img className="w-full h-full rounded-xl opacity-80 bg-cover" src={img2} alt="" />
            <p className="text-white text-[3.125rem] group-hover:scale-150 duration-500 transition-all font-bold font-Roboto absolute">IDEAS</p>
          </div>
        </div>
      </div>

      {/* description-section */}
      <CustomTheams 
        onClick={handleCall} 
        text={
          <>
           <span className="text-gray-400">Your Website is your 24/7 Sales person</span>. 
            Don’t just settle <span className="text-gray-400"> for an ordinary one</span>. 
            Go beyond with <span className="text-[#db4a2b] animate-pulse">“Unarrow”...</span>
          </>
        } 
      />
    </div>
  );
};

export default BuildIdea;
