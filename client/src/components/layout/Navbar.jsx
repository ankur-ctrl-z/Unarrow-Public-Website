import CustomButton from "../customs/CustomButton";
import CustomArrow from "../customs/CustomArrow";
import { TiArrowRight } from "react-icons/ti";
import { useNavigate } from "react-router";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import logo from '../../assets/home/Unarrow.svg'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleCall = () => {
    navigate("/contact");
  };

  return (
    <>
      {/* navbar */}
      <div className="w-full fixed top-0 bg-black left-0 py-5 lg:py-6 z-50">
        <div style={{background:"rgba(216, 216, 216, 0.34)"}} className="w-[94%] text-center mx-auto h-14 md:h-[4.4rem] lg:h-[5rem] rounded-full py-4 p-5">
          <div className="flex justify-between">
            <div className="flex gap-2">
              {/* logo */}
              <Link
                to={"/"}
                className="text-[#DB4A2B] flex flex-col  -mt-5 -ml-2 lg:text-[2.2rem]">
                <p className="font-extrabold mt-1 md:mt-3 lg:mt-[3px] ml-2 text-[1.8rem] lg:text-[2.5rem] lg:ml-5 font-Archivo">unarrow.</p>
                <p className=" text-[9.5px] ml-14 -mt-2 lg:text-[12px] font-semibold lg:-mt-3 lg:ml-[5.8rem] italic ">DIGITAL SOLUTIONS</p>
          
              </Link>
            </div>

            <div className="flex flex-col md:flex-row items-center">
              {/* hamburger-icon */}
              <div className="flex items-center md:hidden mt-4 mr-1">
                <button
                  onClick={toggleMenu}
                  className="text-gray-800 focus:outline-none"
                >
                  {isOpen ? (
                    <div className="h-11 w-11 flex justify-center items-center bg-red-600 rounded-full">
                      {" "}
                      <RxCross2 className="text-3xl text-white flex justify-end" />
                    </div>
                  ) : (
                    <div className="h-11 w-11 flex justify-center items-center -mt-[1.7rem] bg-red-600 rounded-full">
                      <RxHamburgerMenu className="text-3xl text-white flex justify-end" />
                    </div>
                  )}
                </button>
              </div>

              <div className="hidden md:block">
                <ul className="flex flex-row lg:gap-5 xl:gap-6 justify-center text-white font-semibold">
                  <li className="font-semibold text-sm lg:text-lg xl:text-[22px] p-0 md:p-2">
                  <Link
                    className="hover:text-[#DB4A2B] mt-[5px] mr-1 duration-300 transition-all"
                    to={"/"}
                  >
                    Home
                  </Link>
                  </li>
             
                  <li className="font-semibold text-sm lg:text-lg xl:text-[22px] p-0 md:p-2">
                    <Link
                      className="hover:text-[#DB4A2B] duration-300 transition-all"
                      to={"/services"}
                    >
                      Services
                    </Link>
                  </li>

                  <li className="font-semibold text-sm  lg:text-lg xl:text-[22px] p-0 md:p-2">
                    <Link
                      className="hover:text-[#DB4A2B] duration-300 transition-all"
                      to={"/aboutus"}
                    >
                      About Us
                    </Link>
                  </li>

                  <>
                    <li className="font-semibold text-sm lg:text-lg xl:text-[22px] p-0 md:p-2">
                      <Link
                        className="hover:text-[#DB4A2B] duration-300 transition-all"
                        to={"careers"}
                      >
                        Careers
                      </Link>
                    </li>

                    {/* button */}
                    <div
                      onClick={handleCall}
                      className="flex justify-center items-center  "
                    >
                      <CustomButton label={"Book a Call"} />
                      <CustomArrow icon={<TiArrowRight />} />
                    </div>
                  </>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          onClick={toggleMenu}
          className={`fixed inset-0 w-full md:hidden bg-black rounded-md z-50 ${
            isOpen ? " " : "translate-x-0"
          }`}
        >
          <div className="flex justify-end mt-8 mb-2 mr-5">
            {isOpen ? (
              <RxCross2
                onClick={toggleMenu}
                className="text-white -mt-5 text-3xl"
              />
            ) : (
              <></>
            )}
          </div>

          <div className="flex">
            <div className="w-[5.625rem] -mt-14 bg-red-600 h-[130vh]">
          
         
             <div className="text-white text-lg -rotate-90 grid place-items-center h-80">
                  <a href="tel:91 8433700215">+918433700215</a>
                </div>

                <div className="text-white text-xl -rotate-90 grid place-items-center h-80">
                  <a href="mailto:tanul@unarrow.com">tanul@unarrow.com</a>
                </div>
             </div>

            
        
            <div className="flex flex-col items-center mt-10">
              <ul className=" flex text-3xl text-white gap-4 flex-col md:-mt-1 lg:mt-0 md:flex-row lg:gap-4 items-center cursor-pointer">
                <Link
                  className="hover:text-[#DB4A2B] duration-300 transition-all"
                  to={"/"}
                >
                  Home
                </Link>
                <li className="font-semibold  lg:text-lg p-0 md:p-2">
                  <Link
                    className="hover:text-[#DB4A2B] duration-300 transition-all"
                    to={"/services"}
                  >
                    Services
                  </Link>
                </li>

                <li className="font-semibold lg:text-lg p-0 md:p-2">
                  <Link
                    className="hover:text-[#DB4A2B] duration-300 transition-all"
                    to={"/aboutus"}
                  >
                    About Us
                  </Link>
                </li>

                <>
                  <li className="font-semibold lg:text-lg p-0 md:p-2">
                    <Link
                      className="hover:text-[#DB4A2B] duration-300 transition-all"
                      to={"careers"}
                    >
                      Careers
                    </Link>
                  </li>
                </>
              </ul>

              <div className="mt-40">
                <div className="text-white text-center">
                  Digital Solutions So Good, Even the Internet's Jealous!
                </div>
                <div className="flex justify-center mt-10 gap-4 text-white text-3xl">
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
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
