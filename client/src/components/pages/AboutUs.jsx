import React from "react";
import { useState } from "react";
import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import CenterCustomHeading from "../customs/CenterCustomHeading";
import about2 from "../../assets/aboutUsImage/about2.png";
import CustomArrow from "../customs/CustomArrow";
import { FiArrowUpRight } from "react-icons/fi";
import { FaArrowRight } from "react-icons/fa6";
import Tanul from "../../assets/TeamMemberImage/Tanul.png";
import Abhishek from "../../assets/TeamMemberImage/Abhishek.png";
import Ankur from "../../assets/TeamMemberImage//Ankur.png";
import Prateek from "../../assets/TeamMemberImage/Prateek.png";
import OurWorks from "../home/OurWorks";
import CustomButton from "../customs/CustomButton";
import { useNavigate } from "react-router";

const AboutServices = [
  {
    id: 1,
    Service: "Website Development",
    desc:
      "At Unarrow, we make websites that look great and work perfectly. Our team of expert developers uses the newest tools to build sites that are fast, easy to use, and show up well on .....",
  },

  {
    id: 2,
    Service: "UI/UX Designing",
    desc:
      "At Unarrow, we make websites that look great and work perfectly. Our team of expert developers uses the newest tools to build sites that are fast, easy to use, and show up well on .....",
  },
  {
    id: 3,
    Service: "SEO",
    desc:
      "At Unarrow, we make websites that look great and work perfectly. Our team of expert developers uses the newest tools to build sites that are fast, easy to use, and show up well on .....",
  },
  {
    id: 4,
    Service: "Social Media Marketing",
    desc:
      "At Unarrow, we make websites that look great and work perfectly. Our team of expert developers uses the newest tools to build sites that are fast, easy to use, and show up well on .....",
  },
  {
    id: 5,
    Service: "Pay Per Click (PPC)",
    desc:
      "At Unarrow, we make websites that look great and work perfectly. Our team of expert developers uses the newest tools to build sites that are fast, easy to use, and show up well on .....",
  },
  {
    id: 6,
    Service: "Website Redesigning",
    desc:
      "At Unarrow, we make websites that look great and work perfectly. Our team of expert developers uses the newest tools to build sites that are fast, easy to use, and show up well on .....",
  },
];
const AboutUs = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/contact");
  };

  return (
    <div className="w-full relative h-full bg-[#011415] py-24 md:py-8 lg:py-24 xl:py-28">
      <div className="w-11/12 mx-auto p-20">
        <div className="">
          <p className="z-10 absolute text-center -mt-20 text-3xl text-white font-bold font-Roboto leading-normal md:ml-[14.5rem] md:mt-3 md:text-[3.5rem] lg:mt-5 lg:text-[4rem] lg:ml-[16rem] lg:tracking-[0.875rem] xl:ml-[33rem] xl: xl:text-[8rem]">
            About Us
          </p>

          <div className="absolute w-[6rem] h-[6rem] -mt-[6.3rem] -ml-[4.5rem] md:-ml-[6.8rem] md:-mt-4 lg:-ml-[5rem] lg:-mt-[5rem] lg:w-[9rem] lg:h-[9rem] xl:w-[12.5rem] xl:h-[12.5rem] bg-red-600 rounded-full"></div>

          <div className="flex gap-10">
            {/* left-section */}
            <div className="w-1/2 -ml-20 mt-4">
              <div className="w-[18rem] h-[13rem] md:w-[22rem] md:h-[20rem] lg:w-[20rem] lg:h-[26rem] lg:ml-[5rem] xl:w-[40rem] xl:h-[34rem] absolute  border-2 border-white rounded-xl">
                <img
                  src={about2}
                  className="w-full h-full bg-cover rounded-xl"
                  alt=""
                />
              </div>
            </div>

            {/* right-section */}
            <div className="w-[16rem] md:ml-[23rem] mt-[15.5rem] lg:w-1/2 text-sm lg:mt-[17rem] xl:mt-[21rem]">
              <p className="font-Roboto -ml-10 md:-mt-[10rem] lg:max-w-[40rem] lg:text-[1rem] xl:text-[1.25rem] text-xs leading-normal text-white">
                Hey there! Welcome to Unarrow, the best digital marketing and
                website development agency in Mumbai! We make amazing websites
                and cool marketing plans to help your business grow. Our team
                uses the latest tricks to make your site fast and easy to find
                on Google. We also handle your social media to keep things fun
                and exciting. Want to be a star online and get more customers?
                Unarrow is here to make that happen! Scale Your Buisness Online
                Get a Free Consultation From our Experts...
              </p>

              {/* social-icons */}
              <div className="flex -ml-10 mt-6 gap-5 text-white text-3xl lg:text-4xl">
                <a
                  className="hover:text-[#DB4A2B] duration-300 transition-all"
                  href=""
                >
                  <FaLinkedin />
                </a>
                <a
                  className="hover:text-[#DB4A2B] duration-300 transition-all"
                  href=""
                >
                  <FaWhatsapp />
                </a>
                <a
                  className="hover:text-[#DB4A2B] duration-300 transition-all"
                  href=""
                >
                  <FaSquareXTwitter />
                </a>
                <a
                  className="hover:text-[#DB4A2B] duration-300 transition-all"
                  href=""
                >
                  <FaInstagram />
                </a>

                <div className="mt-2 lg:ml-10 w-[9.375rem] h-[10px] bg-red-600"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* happy custome section */}
      <div className="w-full bg-[#2c3b3c] h-[12rem] md:h-[9rem]">
        <div className="flex flex-col-reverse md:flex-row items-center md:justify-around">
          <div className="flex flex-col">
            <div className="flex items-center mt-3 gap-5 font-Roboto">
              <p className="font-bold text-xl lg:text-[2rem] xl:text-[3rem] text-white">
                100 +
              </p>
              <p className=" text-xl lg:text-[2.0625rem] text-white font-normal">
                Project Completed
              </p>
            </div>

            <div className="flex items-center lg:mt-6 gap-8 font-Roboto">
              <p className="font-bold text-xl lg:text-[2rem] xl:text-[3rem] text-white">
                95 +
              </p>
              <p className="text-xl lg:text-[2.0625rem] text-white font-normal">
                Happy Customer
              </p>
            </div>
          </div>

          <div className="flex lg:flex-row mt-3">
            <div className="w-[5.2rem] h-[5.2rem] lg:w-[6.4375rem] lg:h-[6.4375rem] rounded-full border">
              <img
                className="w-full h-full bg-cover rounded-full"
                src={Tanul}
                alt=""
              />
            </div>
            <div className="w-[5.2rem] h-[5.2rem] -ml-5 lg:w-[6.4375rem] lg:h-[6.4375rem] rounded-full border">
              {" "}
              <img
                className="w-full h-full bg-cover rounded-full"
                src={Abhishek}
                alt=""
              />
            </div>
            <div className="w-[5.2rem] h-[5.2rem] -ml-5 lg:w-[6.4375rem] lg:h-[6.4375rem] rounded-full border">
              {" "}
              <img
                className="w-full h-full bg-cover rounded-full"
                src={Ankur}
                alt=""
              />
            </div>
            <div className="w-[5.2rem] h-[5.2rem] -ml-5 lg:w-[6.4375rem] lg:h-[6.4375rem] rounded-full border">
              {" "}
              <img
                className="w-full h-full bg-cover rounded-full"
                src={Prateek}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      {/* <OurWorks/> */}

      <div className="flex -mb-7 flex-col w-full h-[11rem] lg:h-[20rem] lg:-mb-32 items-center bg-[#6F5294] ">
        <p className="font-Roboto text-2xl text-white font-bold lg:max-w-[50rem] text-center mt-5 mb-5 lg:mt-10 lg:mb-10 lg:leading-[4.5rem] lg:text-[4rem]">
          Ready To Elevate Your Brand Online ?
        </p>
        <CustomButton label={"Let’s Talk"} onclick={handleClick} />
      </div>
    </div>
  );
};

export default AboutUs;
