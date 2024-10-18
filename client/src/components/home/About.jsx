import React from "react";
import aboutImage from "../../assets/aboutUsImage/about1.png";
import CustomArrow from "../customs/CustomArrow";
import CustomButton from "../customs/CustomButton";
import { FiArrowUpRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import CustomOverlappinCard from "../customs/CustomOverlappingCards";

const About = () => {
  const navigate = useNavigate();
  function handleCall() {
    navigate("/aboutus");
  }
  return (
    <>

    {/* for small device */}
      <div className="md:hidden w-full relative h-full py-10 bg-[#011415]">
        <div className="w-11/12 mx-auto p-2">
          <div className="flex flex-col -ml-2 mb-3">
            <p className="text-white text-[9px] lg:text-lg font-Roboto lg:ml-[5.6rem] lg:mb-1">
              Designing Tomorrow Today
            </p>
            <div className="flex items-center gap-2 mb-6 lg:gap-4 lg:ml-14">
              <div className="w-2 h-2 lg:w-4 lg:h-4 mt-1 bg-[#db4a2b]"></div>
              <h3 className="text-xl lg:text-[2.1875rem] text-white font-bold font-Roboto">
                About Us
              </h3>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center">
            <div className="h-[100px] flex justify-center items-center -mt-16 mr-[15rem] mb-20 z-10">
              <CustomOverlappinCard image={aboutImage} />
            </div>

            <p className="w-[280px] text-[13px] mt-[9rem] mb-3 lg:max-w-lg text-white font-Roboto lg:text-[1.5rem] font-normal leading-normal">
              Welcome to “Unarrow”, where innovation meets excellence in digital
              solutions. As a leading player in the industry, we pride ourselves
              on delivering cutting-edge technology and unparalleled service.
              Our team of experts is dedicated to transforming your digital
              landscape with tailor-made solutions that drive growth and
              efficiency.
            </p>
           

            <div onClick={handleCall} className="flex mt-2 justify-start w-[12rem] lg:ml-16">
              <CustomButton label={"Learn More"} />
              <CustomArrow icon={<FiArrowUpRight />} />
            </div>
            </div>
        </div>
      </div>

      {/* for large view */}
      <div className="hidden md:block w-full relative h-full py-10 bg-[#011415]">
        <div className="w-11/12 mx-auto">
          <div className="flex flex-col md:flex-row gap-5 md:gap-10  md:-ml-[10rem] lg:gap-40 lg:ml-20 justify-center">
            {/* Left Section */}
            <div className="w-1/2 md:-ml-20">
              <div className="flex flex-col -ml-2">
                <p className="text-white text-[9px] lg:text-lg font-Roboto lg:ml-[5.6rem] lg:mb-1">
                  Designing Tomorrow Today
                </p>
                <div className="flex items-center gap-2 mb-6 lg:gap-4 lg:ml-14">
                  <div className="w-2 h-2 lg:w-4 lg:h-4 mt-1 bg-[#db4a2b]"></div>
                  <h3 className="text-xl lg:text-[2.1875rem] text-white font-bold font-Roboto">
                    About Us
                  </h3>
                </div>
              </div>

              <p className="w-[280px] text-[13px] mt-20 md:-mt-1 md:w-[20rem] lg:w-[30rem] text-white font-Roboto lg:text-[1.2rem] xl:ml-[4rem] xl:text-[1.5rem] font-normal leading-normal">
                Welcome to “Unarrow”, where innovation meets excellence in
                digital solutions. As a leading player in the industry, we pride
                ourselves on delivering cutting-edge technology and unparalleled
                service. Our team of experts is dedicated to transforming your
                digital landscape with tailor-made solutions that drive growth
                and efficiency.
              </p>

              <div
                onClick={handleCall}
                className="flex w-[12rem] mt-10 lg:ml-16"
              >
                <CustomButton label={"Learn More"} />
                <CustomArrow icon={<FiArrowUpRight />} />
              </div>
            </div>

            {/* Right Section */}

            <div className="h-[100px] md:[50px] ml-5 lg:w-1/2 mb-20 z-10">
              <CustomOverlappinCard image={aboutImage} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
