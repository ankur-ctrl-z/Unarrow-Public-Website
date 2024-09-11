import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { useNavigate } from "react-router";
import CustomTheams from "../customs/CustomTheams";
import img1 from "../../assets/aboutUsImage/image-1.png";
import img2 from "../../assets/aboutUsImage/image-2.png";
import CustomBuildIdea from "../customs/CustomBuildIdea";

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
          <CustomBuildIdea
            clasName={"bg-black rounded-xl border-none"}
            text={"WE"}
          />
          <CustomBuildIdea image={img1} text={"BUILD"} />
         
          <CustomBuildIdea clasName={'bg-red-600'}
            icon={
              <FaArrowRight
                size={130}
                className="group-hover:scale-150 duration-500 transition-all"
              />
            }
          />
          <CustomBuildIdea image={img2} text={"IDEAS"} />
        </div>
      </div>

      {/* description-section */}
      <CustomTheams
        onClick={handleCall}
        text={
          <>
            <span className="text-gray-400">
              Your Website is your 24/7 Sales person
            </span>
            . Don’t just settle{" "}
            <span className="text-gray-400"> for an ordinary one</span>. Go
            beyond with{" "}
            <span className="text-[#db4a2b] animate-pulse">“Unarrow”...</span>
          </>
        }
      />
    </div>
  );
};

export default BuildIdea;
