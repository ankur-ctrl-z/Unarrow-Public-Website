import React, { useEffect, useState } from "react";
import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import about2 from "../../assets/aboutUsImage/about_image.png";
import Tanul from "../../assets/TeamMemberImage/Tanul.jpg";
import Abhishek from "../../assets/TeamMemberImage/abhishek_gupta.jpg";
import Ankur from "../../assets/TeamMemberImage//Ankur.jpg";
import Prateek from "../../assets/TeamMemberImage/pratik_pandey.jpg";
import CustomButton from "../customs/CustomButton";
import { useNavigate } from "react-router";
import CountUp from "react-countup"; // Import CountUp
import VisibilitySensor from "react-visibility-sensor"; // Import VisibilitySensor

const AboutUs = () => {
  const [startCount, setStartCount] = useState(false);
  const navigate = useNavigate();

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, [isVisible]);

  const handleClick = () => {
    navigate("/contact");
  };

  return (
    <div className="w-full relative h-full bg-[#011415] py-24 md:py-8 lg:py-24 xl:py-28">
      <div className="w-11/12 mx-auto p-20">
        <div className="py-5">
          <p className="z-10 absolute text-center ml-6 -mt-16 text-3xl text-white font-bold font-Roboto leading-normal md:ml-[14.5rem] md:mt-3 md:text-[3.5rem] lg:mt-5 lg:text-[4rem] lg:ml-[16rem] lg:tracking-[0.875rem] xl:ml-[33rem] xl:text-[6rem]">
            About Us
          </p>

          <div className="absolute w-[5rem] h-[5rem] -mt-[5rem] -ml-[2rem] md:-ml-[6.8rem] md:-mt-4 lg:-ml-[5rem] lg:-mt-[4rem] lg:w-[9rem] lg:h-[9rem] xl:w-[12.5rem] xl:h-[12.5rem] bg-red-600 rounded-full"></div>

          <div className="flex justify-center lg:-ml-20 gap-10 ">
            {/* left-section */}
            <div className="w-1/2 mt-4">
              <div className="w-[18rem] h-[13rem] md:w-[22rem] md:h-[20rem] lg:w-[20rem] lg:h-[26rem] lg:ml-[5rem] xl:w-[40rem] xl:h-[34rem] absolute border-2 border-white rounded-xl">
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
                Unarrow is here to make that happen! Scale Your Business Online
                Get a Free Consultation From our Experts...
              </p>

              {/* social-icons */}
              <div className="flex -ml-10 mt-6 gap-5 text-white text-3xl lg:text-4xl">
                <a
                  className="hover:text-blue-600 duration-300 transition-all"
                  href=""
                >
                  <FaLinkedin />
                </a>
                <a
                  className="hover:text-green-600 duration-300 transition-all"
                  href=""
                >
                  <FaWhatsapp />
                </a>
                <a
                  className="duration-300 transition-all"
                  href=""
                >
                  <FaSquareXTwitter />
                </a>
                <a
                  className="hover:text-orange-700 duration-300 transition-all"
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

      {/* happy customer section */}
      <div className="w-full bg-[#2c3b3c] h-[12rem] md:h-[9rem]">
        <div className="flex flex-col-reverse md:flex-row items-center md:justify-around">
          <div className="flex flex-col  lg:gap-5">
            <div className="flex items-center mt-3 gap-5 font-Roboto">
              {/* Use CountUp with VisibilitySensor for animation */}
              <VisibilitySensor partialVisibility>
                {({ isVisible }) => (
                  <h1 className="text-xl lg:text-[2.0625rem] text-white font-normal">
                    <CountUp
                      start={0}
                      end={500}
                      duration={4}
                      redraw={true}
                      delay={0}
                      useEasing={true}
                      useGrouping={true}
                      separator=","
                      startOnMount={isVisible}
                    />
                    + <br />
                  </h1>
                )}
              </VisibilitySensor>

              <p className="text-xl lg:text-[2.0625rem] text-white font-normal">
                Project Completed
              </p>
            </div>

            <div className="flex items-center mt-3 gap-5 font-Roboto">
              <VisibilitySensor partialVisibility>
                {({ isVisible }) => (
                  <h1 className="text-xl lg:text-[2.0625rem] text-white font-normal">
                    <CountUp
                      start={0}
                      end={95}
                      duration={4}
                      redraw={true}
                      delay={0}
                      useEasing={true}
                      useGrouping={true}
                      separator=","
                      startOnMount={isVisible}
                    />
                    + <br />
                  </h1>
                )}
              </VisibilitySensor>

              <p className="text-xl lg:text-[2.0625rem] text-white font-normal">
                Happy Customers
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
              <img
                className="w-full h-full bg-cover rounded-full"
                src={Abhishek}
                alt=""
              />
            </div>
            <div className="w-[5.2rem] h-[5.2rem] -ml-5 lg:w-[6.4375rem] lg:h-[6.4375rem] rounded-full border">
              <img
                className="w-full h-full bg-cover rounded-full"
                src={Ankur}
                alt=""
              />
            </div>
            <div className="w-[5.2rem] h-[5.2rem] -ml-5 lg:w-[6.4375rem] lg:h-[6.4375rem] rounded-full border">
              <img
                className="w-full h-full bg-cover rounded-full"
                src={Prateek}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      {/* Call to action section */}
      <div className="flex -mb-24 sm:-mb-7 flex-col w-full h-[11rem] lg:h-[20rem] lg:-mb-32 items-center bg-[#6F5294] ">
        <p className="font-Roboto text-2xl text-white font-bold lg:max-w-[50rem] text-center mt-5 mb-5 lg:mt-10 lg:mb-10 lg:leading-[4.5rem] lg:text-[4rem]">
          Ready To Elevate Your Brand Online?
        </p>
        <CustomButton label={"Let’s Talk"} onclick={handleClick} />
      </div>
    </div>
  );
};

export default AboutUs;
