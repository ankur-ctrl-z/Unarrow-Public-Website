import React, { useState } from "react";
import { TfiEmail } from "react-icons/tfi";
import { IoCall } from "react-icons/io5";
import CustomButton from "../customs/CustomButton";
import CardSlider from "./CardSlider";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    message: "",
  });

  const formDataHandler = (event) => {
    event.preventDefault();
    console.log(formData);
    setFormData({
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
      <div className="w-full relative h-full bg-[#011415] py-14 lg:px-28 px-5">
        <div className="w-full lg:w-11/12 mx-auto">
          <div className="flex md:p-20 -mt-10 md:-mt-20 flex-col md:flex-row lg:justify-between items-center">
            {/* Left Section */}
            <div className="flex flex-col font-Roboto md:w-[45%]  lg:w-1/2 md:-mt-20 mt-10  gap-4">
              <div className="flex items-center gap-2 mb-6 lg:gap-4 lg:ml-0">
                <div className="w-4 h-4 lg:w-4 lg:h-4 bg-[#db4a2b]"></div>
                <h3 className="text-2xl lg:text-[2.1875rem] text-white font-bold font-Roboto">
                  Get In Touch
                </h3>
              </div>

              <p className="w-[18rem] md:w-[15rem] lg:w-[24rem] text-sm -mt-5 lg:text-lg font-normal font-Roboto leading-normal text-[#fff]">
                Our Friendly Team Is Always Here to Hear You...
              </p>

              <div className="flex flex-col md:flex-row lg:flex-col border-none rounded-xl w-full lg:w-full">
                <div className="flex border m-1 md:border-none border-white rounded-xl  flex-col lg:w-full gap-2">
                  <div className="flex md:mr-[16rem] items-center justify-center md:justify-center gap-3 mt-4 lg:mt-2 lg:ml-0">
                    <TfiEmail className="w-6 h-6 lg:w-[1.8rem] lg:h-[1.8rem] text-white" />
                    <a
                      className="font-Roboto font-normal text-xs md:text-md lg:text-lg leading-normal text-gray-400"
                      href="mailto:tanul@unarrow.com"
                    >
                      tanul@unarrow.com
                    </a>
                  </div>

                  <div className="flex ml-3 lg:mt-5 md:flex-col gap-5 mb-2">
                    <div className="flex items-center gap-3">
                      <IoCall className="w-4 h-4 lg:w-[1.8rem] lg:h-[1.8rem] text-white" />
                      <a
                        className="font-Roboto text-xs md:text-lg leading-normal text-gray-400"
                        href="tel:+91 8433700215"
                      >
                        +91 8433700215
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <IoCall className="w-4 h-4 lg:w-[1.8rem] lg:h-[1.8rem] text-white" />
                      <a
                        className="font-Roboto text-xs md:text-lg leading-normal text-gray-400"
                        href="tel:+91 8433700215"
                      >
                        +91 8433700215
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Section - Form */}
            <form
              className="text-white border md:border-none rounded-xl p-3 font-Roboto text-sm lg:text-lg w-full lg:w-[65%] mt-5 lg:mt-0"
              onSubmit={formDataHandler}
            >
              <div className="w-full text-sm lg:text-lg flex flex-col gap-6">
                {/* First and Last Name */}
                <div className="w-full flex flex-col md:flex-row lg:flex-row gap-6 lg:gap-10">
                  <div className="w-full lg:w-1/2">
                    <label>
                      FIRST NAME
                      <br />
                      <input
                        className="mt-2 bg-transparent w-full mb-1 focus:outline-none border-b border-gray-400"
                        type="text"
                        required
                        placeholder="First Name"
                        name="firstname"
                        value={formData.firstname}
                        onChange={handleChange}
                      />
                    </label>
                  </div>

                  <div className="w-full lg:w-1/2">
                    <label>
                      LAST NAME
                      <br />
                      <input
                        className="mt-2 bg-transparent w-full mb-1 focus:outline-none border-b border-gray-400"
                        type="text"
                        required
                        placeholder="Last Name"
                        name="lastname"
                        value={formData.lastname}
                        onChange={handleChange}
                      />
                    </label>
                  </div>
                </div>

                {/* Email and Phone */}
                <div className="w-full flex flex-col lg:flex-row gap-6 lg:gap-10">
                  <div className="w-full lg:w-1/2">
                    <label>
                      EMAIL ADDRESS
                      <br />
                      <input
                        className="bg-transparent w-full mt-2 mb-1 focus:outline-none border-b border-gray-400"
                        type="email"
                        required
                        placeholder="tanul@unarrow.com"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </label>
                  </div>

                  <div className="w-full lg:w-1/2">
                    <label>
                      PHONE
                      <br />
                      <input
                        className="bg-transparent w-full mt-2 mb-1 focus:outline-none border-b border-gray-400"
                        type="text"
                        required
                        placeholder="+91"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </label>
                  </div>
                </div>

                {/* Message */}
                <div className="w-full">
                  <label className="w-full">
                    MESSAGE
                    <br />
                    <textarea
                      className="bg-transparent w-full mt-2 focus:outline-none border-gray-400"
                      name="message"
                      required
                      placeholder="Type your Message..."
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                  </label>
                  <div className=""> <hr /></div>
                </div>
              </div>

              {/* Submit Button */}
              <CustomButton
                label={"SUBMIT"}
                className={"rounded-lg w-full lg:w-1/3 mt-8"}
              />
            </form>
          </div>
        </div>
      </div>

      <CardSlider />
    </>
  );
};

export default Contact;
