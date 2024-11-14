import React, { useState } from "react";
import CustomButton from "../customs/CustomButton";
import { FaWhatsapp, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { TfiEmail } from "react-icons/tfi";
import { IoCall } from "react-icons/io5";
import { ImLocation } from "react-icons/im";
import axios from "axios";
import toast from "react-hot-toast";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const base_url = import.meta.env.VITE_BASE_URL;

  const subscribeHandleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      toast.error("Enter your email to subscribe!");
      setEmailError("");
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError("Invalid email address");
      return;
    } else {
      setEmailError("");
    }

    try {
      const response = await axios.post(`${base_url}/api/subscribe`, {
        email,
      });

      toast.success(response.data.message);
      setEmailError("");
      setEmail("");
    }catch (error) {
      if (error.response) {
        // Conflict error
        if (error.response.status === 409) {
          toast.error(error.response.data.message);
          return;
        }

        // Internal server error
        if (error.response.status === 500) {
          toast.error("Internal server error. Please try again later.");
          return;
        }
      } else {
        // If no response is received or a network error occurs
        toast.error("Something went wrong. Please try again.");
      }
    }
  };

  return (
    <div className="w-full relative bg-[#000000]">
      <hr />
      <div className="w-11/12 mx-auto p-5">
        <div className="flex flex-col">
          {/* first part */}
          <div className="flex flex-col md:flex-row justify-between">
            <h3 className="lg:leading-[2.5rem] mb-2 max-w-md font-Roboto text-white lg:text-[2rem] leading-normal font-bold">
              Subscribe To Get The Latest Update
            </h3>
            <form
              onSubmit={subscribeHandleSubmit}
              className="flex lg:w-[32rem] border-[3px] h-[3.3rem] lg:h-[3.5rem] border-red-700 rounded-xl"
            >
              <input
                className="bg-transparent text-gray-300 focus:outline-none px-2 md:px-5 text-sm sm:text-lg"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Your Email"
              />
              <CustomButton
                type="submit"
                className="rounded-lg lg:ml-[7.44rem] lg:h-[3.2rem] border-l-2 h-[3rem] w-[8rem] md:w-[12rem]"
                label={"SUBSCRIBE"}
              />
            </form>
          </div>
          {/* email error */}
          {emailError && <p className="text-red-600 md:ml-[14rem] lg:ml-[24.5rem] xl:ml-[53rem] lg:-mt-5">{emailError}</p>}

          {/* second part */}
          <div className="flex flex-col md:flex-row justify-between gap-10 mt-10">
            <div className="hidden md:block flex-col gap-3">
              <h3 className="text-[#DB4A2B] font-semibold text-2xl">UNARROW.</h3>
              <p className="text-white max-w-[12rem] font-Roboto">
                The best Digital Solution Agency in the Market. We are here to build your Dream website on the go..
              </p>

              {/* social icons */}
              <div className="flex mt-4 gap-5 text-white text-3xl">
                <a
                  className="hover:text-[#DB4A2B] duration-300 transition-all"
                  href="https://www.linkedin.com/company/unarrow-digital-solutions"
                >
                  <FaLinkedin />
                </a>
                <a
                  className="hover:text-[#DB4A2B] duration-300 transition-all"
                  href="https://wa.me/919021790600"
                >
                  <FaWhatsapp />
                </a>
                {/* <a
                  className="hover:text-[#DB4A2B] duration-300 transition-all"
                  href=""
                >
                  <FaSquareXTwitter />
                </a> */}
                <a
                  className="hover:text-[#DB4A2B] duration-300 transition-all"
                  href="https://www.instagram.com/unarrowsolutions"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>

            {/* for mobile view */}
            <div className="flex sm:hidden w-full gap-4">
              <div className="w-[40%]">
                <h3 className="text-[#DB4A2B] mt-1 font-semibold text-lg">UNARROW.</h3>
                <div className="flex mt-2 gap-2 text-white text-xl">
                  <a className="hover:text-blue-600 duration-300 transition-all" href="https://www.linkedin.com/company/unarrow-digital-solutions">
                    <FaLinkedin />
                  </a>
                  <a className="hover:text-green-600 duration-300 transition-all" href="https://wa.me/919021790600">
                    <FaWhatsapp />
                  </a>
                  {/* <a className="hover:text-gray-900 duration-300 transition-all" href="">
                    <FaSquareXTwitter />
                  </a> */}
                  <a className="hover:text-orange-700 duration-300 transition-all" href="https://www.instagram.com/unarrowsolutions">
                    <FaInstagram />
                  </a>
                </div>
              </div>
              <p className="text-white text-[9px] mt-2 w-[60%] font-Roboto">
                The best Digital Solution Agency in the Market. We are here to build your Dream website on the go..
              </p>
            </div>

            <div className="hidden md:block">
              <div className="font-Roboto flex flex-col gap-2">
                <h3 className="flex text-white font-semibold text-sm lg:text-xl">ON OUR SITE</h3>
                <nav className="flex flex-col gap-2 text-sm lg:text-lg justify-start text-white font-normal">
                  <Link className="hover:text-[#DB4A2B] duration-300 transition-all" to={"/"}>Home</Link>
                  <Link className="hover:text-[#DB4A2B] duration-300 transition-all" to={"/services"}>Services</Link>
                  <Link className="hover:text-[#DB4A2B] duration-300 transition-all" to={"/aboutus"}>About Us</Link>
                  <Link className="hover:text-[#DB4A2B] duration-300 transition-all" to={"/ourworks"}>Works</Link>
                </nav>
              </div>
            </div>

            <div className="hidden md:block">
              <div className="font-Roboto flex flex-col gap-2">
                <h3 className="flex text-white font-semibold text-sm lg:text-xl">RESOURCES</h3>
                <nav className="flex flex-col gap-2 text-sm lg:text-lg justify-start text-white font-normal">
                  <Link className="hover:text-[#DB4A2B] duration-300 transition-all" to={"/careers"}>Careers</Link>
                  <Link className="hover:text-[#DB4A2B] duration-300 transition-all" >Blogs</Link>
                </nav>
              </div>
            </div>

            {/* for mobile view */}
            <div className="flex gap-10 sm:hidden">
              <div className="font-Roboto flex flex-col gap-2">
                <h3 className="flex text-white font-semibold text-sm lg:text-xl">ON OUR SITE</h3>
                <nav className="flex flex-col gap-2 text-sm lg:text-lg justify-start text-white font-normal">
                  <Link className="hover:text-[#DB4A2B] duration-300 transition-all" to={"/"}>Home</Link>
                  <Link className="hover:text-[#DB4A2B] duration-300 transition-all" to={"/services"}>Services</Link>
                  <Link className="hover:text-[#DB4A2B] duration-300 transition-all" to={"/aboutus"}>About Us</Link>
                  <Link className="hover:text-[#DB4A2B] duration-300 transition-all" to={"/ourworks"}>Works</Link>
                </nav>
              </div>

              <div className="font-Roboto flex flex-col gap-2">
                <h3 className="flex text-white font-semibold text-sm lg:text-xl">RESOURCES</h3>
                <nav className="flex flex-col gap-2 text-sm lg:text-lg justify-start text-white font-normal">
                  <Link className="hover:text-[#DB4A2B] duration-300 transition-all" to={"/careers"}>Careers</Link>
                  <Link className="hover:text-[#DB4A2B] duration-300 transition-all" >Blogs</Link>
                </nav>
              </div>
            </div>

            <div className="flex flex-col gap-2 font-Roboto">
              <h3 className="flex text-white font-semibold text-sm lg:text-xl">
                CONTACT
              </h3>
              <div className="flex justify-center -ml-24 md:ml-0 items-center  gap-2 text-white text-sm lg:text-lg">
                <TfiEmail />
                <a href="mailto:info@unarrow.com">
                  info@unarrow.com
                </a>
              </div>

              <div className="flex justify-start items-center gap-2 text-white text-sm lg:text-lg">
                <IoCall />
                <a href="tel:+91 9021790600">+91 9021790600 | +91 6394522829</a>
              </div>

              <div className="flex justify-start items-center gap-2 text-white text-sm lg:text-lg">
                <ImLocation />
                <a href="https://maps.app.goo.gl/QZ747fSeJ89J3Kdz5" target="_blank">Mumbai, Maharashtra</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="border-1 border-gray-600" />
      <div className="w-full text-center p-5 text-gray-300 text-sm">
        <p>© 2024 UNARROW. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
