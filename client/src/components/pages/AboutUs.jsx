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
import OurWorks from '../home/OurWorks'
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

  const handleClick=()=>{
      navigate('/contact')
  }

  return (
    <div className="w-full relative h-full bg-[#011415] py-32">
      <div className="w-11/12 mx-auto p-20">
        <div className="">
          <p className="z-10 absolute -mt-3 ml-[23rem] text-center text-[8rem] text-white font-bold font-Roboto leading-normal tracking-[0.875rem]">
            About Us
          </p>

          <div className="absolute -ml-[5rem] -mt-[5rem] w-[12.5rem] h-[12.5rem] bg-red-600 rounded-full"></div>
          <div className="flex gap-10 ">
            {/* left-section */}
            <div className="w-1/2 ">
              <div className="w-[33.75rem] h-[34rem] absolute  border-2 border-white rounded-xl">
                <img
                  src={about2}
                  className="w-full h-full bg-cover rounded-xl"
                  alt=""
                />
              </div>
            </div>

            {/* right-section */}
            <div className="w-1/2 mt-[12rem]">
              {/* <p className="text-center text-[5rem] mr-28 text-white font-bold font-Roboto leading-normal">About Us</p> */}
              <p className="font-Roboto max-w-[40rem] text-[1.25rem] leading-normal text-white">
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
              <div className="flex mt-6 gap-5 text-white text-4xl">
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

                <div className="mt-2  ml-10 w-[9.375rem] h-[10px] bg-red-600"></div>
              </div>
            </div>
          </div>
        </div>

     
      </div>

      {/* happy custome section */}
      <div className="w-full bg-[#2c3b3c] h-[12rem]">
        <div className="flex items-center justify-around">
          <div className="flex flex-col">
            <div className="flex items-center mt-3 gap-5 font-Roboto">
              <p className="font-bold text-[4rem] text-white">100 +</p>
              <p className="text-[2.0625rem] text-white font-normal">
                Project Completed
              </p>
            </div>

            <div className="flex items-center -mt-8 gap-5 font-Roboto">
              <p className="font-bold text-[4rem] text-white">95 +</p>
              <p className="text-[2.0625rem] text-white font-normal">
                Happy Customer
              </p>
            </div>
          </div>

          <div className="flex mt-3">
            <div className="w-[6.4375rem] h-[6.4375rem] rounded-full border">
              <img
                className="w-full h-full bg-cover rounded-full"
                src={Tanul}
                alt=""
              />
            </div>
            <div className="w-[6.4375rem] -ml-6 h-[6.4375rem] rounded-full border">
              {" "}
              <img
                className="w-full h-full bg-cover rounded-full"
                src={Abhishek}
                alt=""
              />
            </div>
            <div className="w-[6.4375rem] -ml-6 h-[6.4375rem] rounded-full border">
              {" "}
              <img
                className="w-full h-full bg-cover rounded-full"
                src={Ankur}
                alt=""
              />
            </div>
            <div className="w-[6.4375rem] -ml-6 h-[6.4375rem] rounded-full border">
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

      <OurWorks/>

      <div className="flex flex-col w-full h-[20rem] -mb-32 items-center bg-[#6F5294] ">
          <p className="font-Roboto text-white font-bold max-w-[50rem] text-center mt-10 mb-10 leading-[4.5rem] text-[4rem]">Ready To Elevate Your Brand Online ?</p>
          <CustomButton label={'Let’s Talk'} onclick={handleClick}/>
      </div>
    </div>
  );
};

export default AboutUs;
