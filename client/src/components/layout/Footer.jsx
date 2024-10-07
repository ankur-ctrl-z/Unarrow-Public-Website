import React from "react";
import CustomButton from "../customs/CustomButton";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { TfiEmail } from "react-icons/tfi";
import { IoCall } from "react-icons/io5";
import { ImLocation } from "react-icons/im";

const Footer = () => {
  return (
    <div className="w-full relative  bg-[#000000]">
      <hr />
      <div className="w-11/12 mx-auto p-5">
        <div className="flex flex-col">
          {/* first part */}
          <div className="flex flex-col md:flex-row justify-between">
            <h3 className="lg:leading-[2.5rem] mb-2 max-w-md font-Roboto text-white lg:text-[2rem] leading-normal font-bold ">
              Subscribe To Get The Latest Update
            </h3>
            <div className="flex lg:w-[32rem] border-[3px] h-[3.3rem] lg:h-[3.5rem] border-red-700 rounded-xl">
              <input
                className="bg-transparent text-gray-300 focus:outline-none px-2 md:px-5 text-sm sm:text-lg"
                type="email"
                placeholder="Enter Your Email "
              />
              <CustomButton
                className={
                  "rounded-lg lg:ml-[7.44rem] lg:h-[3.2rem] border-l-2 h-[3rem]  w-[8rem] md:w-[12rem]"
                }
                label={"SUBSCRIBE"}
              />
            </div>
          </div>

          {/* second part */}
          <div className="flex  flex-col md:flex-row justify-between gap-10 mt-10">
            <div className="hidden md:block flex-col gap-3">
              <h3 className="text-[#DB4A2B] font-semibold text-2xl">
                UNARROW.
              </h3>
              <p className="text-white max-w-[12rem] font-Roboto">
                The best Digital Solution Agency in the Market.We are here to
                build your Dream website on the go..
              </p>

              {/* social-icons */}
              <div className="flex mt-4 gap-5 text-white text-3xl">
                <a
                  className="hover:text-[#DB4A2B] duration-300 transition-all"
                  href="https://www.linkedin.com/company/unarrow-digital-solutions/"
                >
                  <FaLinkedin />
                </a>
                <a
                  className="hover:text-[#DB4A2B] duration-300 transition-all"
                  href="https://wa.me/919021790600"
                >
                  <FaWhatsapp />
                </a>
                <a
                  className="hover:text-[#DB4A2B] duration-300 transition-all"
                  href="https://x.com/unarrowsolution"
                >
                  <FaSquareXTwitter />
                </a>
                <a
                  className="hover:text-[#DB4A2B] duration-300 transition-all"
                  href="https://www.instagram.com/unarrowsolutions/"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>

            {/* for mobile view */}
            <div className="flex sm:hidden w-full gap-4">
              <div className="w-[40%]">
                <h3 className="text-[#DB4A2B] mt-1 font-semibold text-lg">
                  UNARROW.
                </h3>
                <div className="flex mt-2 gap-2 text-white text-xl">
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
                </div>
              </div>

              <p className="text-white text-[9px] mt-2 w-[60%] font-Roboto">
                The best Digital Solution Agency in the Market.We are here to
                build your Dream website on the go..
              </p>
            </div>


         <div className="hidden md:block">
         <div className="font-Roboto  flex flex-col gap-2">
              <h3 className="flex text-white font-semibold text-sm lg:text-xl">
                {" "}
                ON OUR SITE
              </h3>
              <nav className="flex flex-col gap-2 text-sm lg:text-lg justify-start text-white font-normal">
                <Link
                  className="hover:text-[#DB4A2B] duration-300 transition-all"
                  to={"/"}
                >
                  Home
                </Link>
                <Link
                  className="hover:text-[#DB4A2B] duration-300 transition-all"
                  to={"/service"}
                >
                  Services
                </Link>
                <Link
                  className="hover:text-[#DB4A2B] duration-300 transition-all"
                  to={"/aboutus"}
                >
                  About Us
                </Link>
                <Link
                  className="hover:text-[#DB4A2B] duration-300 transition-all"
                  to={"/works"}
                >
                  Works
                </Link>
              </nav>
            </div>
         </div>

           <div className="hidden md:block">
           <div className="font-Roboto flex flex-col gap-2">
              <h3 className="flex text-white font-semibold text-sm lg:text-xl">
                RESOURCES
              </h3>
              <nav className="flex flex-col gap-2 text-sm lg:text-lg justify-start text-white font-normal">
                <Link
                  className="hover:text-[#DB4A2B] duration-300 transition-all"
                  to={"/careers"}
                >
                  Careers
                </Link>
                <Link
                  className="hover:text-[#DB4A2B] duration-300 transition-all"
                  to={"/blogs"}
                >
                  Blogs
                </Link>
              </nav>
            </div>
           </div>

           {/* for mobile view */}

           <div className="flex gap-10 sm:hidden">
           <div className="font-Roboto flex flex-col gap-2">
              <h3 className="flex text-white font-semibold text-sm lg:text-xl">
                {" "}
                ON OUR SITE
              </h3>
              <nav className="flex flex-col gap-2 text-sm lg:text-lg justify-start text-white font-normal">
                <Link
                  className="hover:text-[#DB4A2B] duration-300 transition-all"
                  to={"/"}
                >
                  Home
                </Link>
                <Link
                  className="hover:text-[#DB4A2B] duration-300 transition-all"
                  to={"/service"}
                >
                  Services
                </Link>
                <Link
                  className="hover:text-[#DB4A2B] duration-300 transition-all"
                  to={"/aboutus"}
                >
                  About Us
                </Link>
                <Link
                  className="hover:text-[#DB4A2B] duration-300 transition-all"
                  to={"/works"}
                >
                  Works
                </Link>
              </nav>
            </div>

            <div className="font-Roboto flex flex-col gap-2">
              <h3 className="flex text-white font-semibold text-sm lg:text-xl">
                RESOURCES
              </h3>
              <nav className="flex flex-col gap-2 text-sm lg:text-lg justify-start text-white font-normal">
                <Link
                  className="hover:text-[#DB4A2B] duration-300 transition-all"
                  to={"/careers"}
                >
                  Careers
                </Link>
                <Link
                  className="hover:text-[#DB4A2B] duration-300 transition-all"
                  to={"/blogs"}
                >
                  Blogs
                </Link>
              </nav>
            </div>
           </div>



            <div className="flex flex-col gap-2 font-Roboto">
              <h3 className="flex text-white font-semibold text-sm lg:text-xl">
                CONTACT
              </h3>
              <div className="flex justify-center items-center mr-10 gap-2 text-white text-sm lg:text-lg">
                <TfiEmail />
                <a href="mailto:sales@unarrow.com">
                  sales@unarrow.com
                </a>
              </div>

              <div className="flex justify-start items-center gap-2 text-white text-sm lg:text-lg">
                <IoCall />
                <a href="tel:+91 9021790600">+91 9021790600</a>
              </div>

              <div className="flex justify-start items-center gap-2 text-white text-sm lg:text-lg">
                <ImLocation />
                <a href="">Mumbai, Maharashtra</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* horizontal line */}
      <hr />
      {/* reservation of unarrow */}
      <div className="py-3 font-Roboto">
        <p className="text-white font-normal leading-normal md:text-lg text-center cursor-pointer ">
          2024@Unarrow.com
        </p>
      </div>
    </div>
  );
};

export default Footer;
