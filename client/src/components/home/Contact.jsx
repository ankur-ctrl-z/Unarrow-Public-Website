import React, { useState } from "react";
import { TfiEmail } from "react-icons/tfi";
import { IoCall } from "react-icons/io5";
import CustomButton from "../customs/CustomButton";
import CardSlider from "./CardSlider";
import axios from "axios";
import toast from "react-hot-toast";

const Contact = () => {
  // backend base url
  const base_url = import.meta.env.VITE_BASE_URL;

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  // error message showing
  const [phoneError, setPhoneError] = useState("");
  const [emailErorr, setEmailError] = useState("");

  // Handle form submission
  const formDataHandler = async (event) => {
    event.preventDefault();

    const { firstName, lastName, email, phone, message } = formData;

    if (!firstName || !lastName || !email || !phone || !message) {
      toast.error("All fields are required!");
      return;
    }

    // Validate phone number (must be exactly 10 digits)
    if (phone.length !== 10 || !/^\d+$/.test(phone)) {
      setPhoneError("Phone number must be 10 digits");
      return;
    } else {
      setPhoneError("");
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
      const response = await axios.post(`${base_url}/api/submit-form`, {
        firstName,
        lastName,
        email,
        phone,
        message,
      });
      toast.success(response.data.message);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
      return;
    } catch (error) {
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
      {/* for large devices */}
      <div className="hidden md:block w-full bg-[#011415] py-14 px-4 sm:px-8 lg:px-28">
        <div className="w-full md:w-11/12 mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-10">
            {/* Left Section */}
            <div className="flex lg:-mt-[5rem] flex-col font-Roboto md:w-1/2 gap-6">
              {/* Header */}
              <div className="flex items-center gap-2 mb-4">
                <div className="w-4 h-4 bg-[#db4a2b]"></div>
                <h3 className="text-xl sm:text-2xl lg:text-5xl text-white font-bold">
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
                    className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-400"
                  >
                    tanul@unarrow.com
                  </a>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <IoCall className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
                    <a
                      href="tel:+91 8433700215"
                      className="text-sm sm:text-base lg:text-[17px] xl:text-xl text-gray-400"
                    >
                      +91 8433700215
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <IoCall className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
                    <a
                      href="tel:+91 8433700215"
                      className="text-sm sm:text-base lg:text-[17px] xl:text-xl text-gray-400"
                    >
                      +91 8433700215
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Section - Form */}
            <form
              className="w-full md:w-2/3 border-gray-600 rounded-lg p-4 text-white"
              onSubmit={formDataHandler}
            >
              {/* Form Fields */}
              <div className="flex flex-col font-Roboto gap-6">
                {/* First and Last Name */}
                <div className="flex flex-col text-[18px] md:flex-row gap-6 lg:gap-20">
                  <div className="w-full">
                    <label>
                      FIRST NAME
                      <br />
                      <input
                        className="mt-2 bg-transparent w-full border-b border-gray-400 focus:outline-none"
                        type="text"
                        required
                        placeholder="First Name"
                        name="firstName"
                        value={formData.firstName}
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
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                      />
                    </label>
                  </div>
                </div>

                {/* Email and Phone */}
                <div className="flex flex-col text-[18px] md:flex-row gap-6 lg:gap-20">
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
                    <p className="text-red-400 text-sm">{emailErorr}</p>
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
                    <p className="text-red-400 text-sm">{phoneError}</p>
                  </div>
                </div>

                {/* Message */}
                <div className="text-[18px]">
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
              <div className="mt-8 ">
                <CustomButton label="SUBMIT" className="w-full lg:w-1/3" />
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* for small devices */}
      <div className="md:hidden w-full bg-[#011415] py-10 px-4 sm:px-8 lg:px-28">
        <div className="w-full md:w-11/12 mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-10">
            {/* Left Section */}
            <div className="flex lg:-mt-[5rem] flex-col font-Roboto md:w-1/2 gap-6">
              {/* Header */}
              <div className="flex items-center ml-5 gap-2">
                <div className="w-2 h-2 bg-[#db4a2b]"></div>
                <h3 className="text-xl sm:text-2xl lg:text-5xl text-white font-bold">
                  Get In Touch
                </h3>
              </div>

              {/* Description */}
              <p className="text-[12px] text-center -mt-2 sm:text-base lg:text-lg text-white leading-normal">
                Our Friendly Team Is Always Here to Hear You...
              </p>

              {/* Contact Information */}
              <div className="border rounded-[1.8rem]">
                <div className="flex border-b py-2 items-center mt-3 flex-col gap-4 ">
                  <div className="flex items-center gap-3">
                    <TfiEmail className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
                    <a
                      href="mailto:tanul@unarrow.com"
                      className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-400"
                    >
                      tanul@unarrow.com
                    </a>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex items-center gap-1">
                      <IoCall className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
                      <a
                        href="tel:+91 8433700215"
                        className="text-sm sm:text-base lg:text-[17px] xl:text-xl text-gray-400"
                      >
                        +91 8433700215 ,
                      </a>
                    </div>
                    <div className="flex items-center gap-1">
                      <a
                        href="tel:+91 8433700215"
                        className="text-sm sm:text-base lg:text-[17px] xl:text-xl text-gray-400"
                      >
                        +91 8433700215
                      </a>
                    </div>
                  </div>
                </div>

                {/* Right Section - Form */}
                <form
                  className="w-full md:w-2/3 border-gray-600 rounded-lg p-4 text-white"
                  onSubmit={formDataHandler}
                >
                  {/* Form Fields */}
                  <div className="flex flex-col font-Roboto gap-6">
                    {/* First and Last Name */}
                    <div className="flex text-[15px] md:flex-row gap-10 lg:gap-20">
                      <div className="w-full">
                        <label>
                          FIRST NAME
                          <br />
                          <input
                            className="mt-2 bg-transparent w-full border-b border-gray-400 focus:outline-none"
                            type="text"
                            required
                            placeholder="First Name"
                            name="firstName"
                            value={formData.firstName}
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
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                          />
                        </label>
                      </div>
                    </div>

                    {/* Email and Phone */}
                    <div className="flex text-[15px] md:flex-row gap-6 lg:gap-20">
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
                        <p className="text-red-400 text-sm">{emailErorr}</p>
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
                        <p className="text-red-400 text-sm">{phoneError}</p>
                      </div>
                    </div>

                    {/* Message */}
                    <div className="text-[15px]">
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
                  <div className="mt-8 ">
                    <CustomButton
                      label="SUBMIT"
                      className="w-full rounded-xl lg:w-1/3"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CardSlider />
    </>
  );
};

export default Contact;
