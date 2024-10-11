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

  // Handle form submission
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

  // Update form state
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
      <div className="w-full bg-[#011415] py-14 px-4 sm:px-8 lg:px-28">
        <div className="w-full md:w-11/12 mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-10">
            {/* Left Section */}
            <div className="flex flex-col font-Roboto md:w-1/2 gap-6">
              {/* Header */}
              <div className="flex items-center gap-2 mb-4">
                <div className="w-4 h-4 bg-[#db4a2b]"></div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl text-white font-bold">
                  Get In Touch
                </h3>
              </div>

              {/* Description */}
              <p className="text-sm sm:text-base lg:text-lg text-white leading-normal max-w-md">
                Our Friendly Team Is Always Here to Hear You...
              </p>

              {/* Contact Information */}
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <TfiEmail className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
                  <a
                    href="mailto:tanul@unarrow.com"
                    className="text-sm sm:text-base lg:text-lg text-gray-400"
                  >
                    tanul@unarrow.com
                  </a>
                </div>
                <div className="flex flex-col lg:flex-row gap-4">
                  <div className="flex items-center gap-3">
                    <IoCall className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
                    <a
                      href="tel:+91 8433700215"
                      className="text-sm sm:text-base lg:text-[17px] text-gray-400"
                    >
                      +91 8433700215
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <IoCall className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
                    <a
                      href="tel:+91 8433700215"
                      className="text-sm sm:text-base lg:text-[17px] text-gray-400"
                    >
                      +91 8433700215
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Section - Form */}
            <form
              className="w-full md:w-1/2 border border-gray-600 rounded-lg p-4 text-white"
              onSubmit={formDataHandler}
            >
              {/* Form Fields */}
              <div className="flex flex-col gap-6">
                {/* First and Last Name */}
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="w-full">
                    <label>
                      FIRST NAME
                      <br />
                      <input
                        className="mt-2 bg-transparent w-full border-b border-gray-400 focus:outline-none"
                        type="text"
                        required
                        placeholder="First Name"
                        name="firstname"
                        value={formData.firstname}
                        onChange={handleChange}
                      />
                    </label>
                  </div>
                  <div className="w-full">
                    <label>
                      LAST NAME
                      <br />
                      <input
                        className="mt-2 bg-transparent w-full border-b border-gray-400 focus:outline-none"
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
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="w-full">
                    <label>
                      EMAIL ADDRESS
                      <br />
                      <input
                        className="mt-2 bg-transparent w-full border-b border-gray-400 focus:outline-none"
                        type="email"
                        required
                        placeholder="Email Address"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </label>
                  </div>
                  <div className="w-full">
                    <label>
                      PHONE
                      <br />
                      <input
                        className="mt-2 bg-transparent w-full border-b border-gray-400 focus:outline-none"
                        type="tel"
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
                <div>
                  <label>
                    MESSAGE
                    <br />
                    <textarea
                      className="mt-2 bg-transparent w-full border-b border-gray-400 focus:outline-none"
                      name="message"
                      required
                      placeholder="Type your message..."
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <div className="mt-8">
                <CustomButton label="SUBMIT" className="w-full lg:w-1/3" />
              </div>
            </form>
          </div>
        </div>
      </div>

      <CardSlider />
    </>
  );
};

export default Contact;
