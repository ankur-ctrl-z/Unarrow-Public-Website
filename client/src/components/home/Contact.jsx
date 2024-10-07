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

  // Update form state
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
 
    const data = {
     firstName : formData.firstname,
     LastName : formData.lastname,
     email : formData.email,
     phone : formData.phone,
     message : formData.message,
   };
 
   try {
     const response = await axios.post('/submit', data)
     if (response.status === 201) {
       console.log('Message saved successfully')
     } else {
       console.log('Failed to save message')
     }
   } catch (error) {
     console.error('Error:', error)
   }
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
>>>>>>> upstream/main
              </div>
            </div>

            {/* Right Section - Form */}
            <form
              className="text-white border md:border-none rounded-xl p-3 font-Roboto text-sm lg:text-lg w-full lg:w-[65%] mt-5 lg:mt-0"
              onSubmit={formDataHandler}
>>>>>>> upstream/main
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

                  <div className="w-full lg:w-1/2">
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
>>>>>>> upstream/main
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
