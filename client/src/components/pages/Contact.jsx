import React, { useState } from "react";
import CenterCustomHeading from "../customs/CenterCustomHeading";
import CustomButton from "../customs/CustomButton";
import axios from 'axios'
import toast from "react-hot-toast";

const serviceInfo = [
  { id: 1, info: "Website Enquiry" },
  { id: 2, info: "SEO Enquiry" },
  { id: 3, info: "UI/UX Enquiry" },
  { id: 4, info: "SMM Enquiry" },
  { id: 5, info: "General Enquiry" },
  { id: 6, info: "Consulting Enquiry" }, // Added a sixth service to balance the layout
];

const Contact = () => {

  const [errMessage, setErrMessage] =useState('');
  const [isHover, setIsHover] = useState(null);
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    pinCode:"",
    message: "",
  });

  const formDataHandler = async(event) => {
    event.preventDefault();

    

    const {firstname, lastname, email, phone, pinCode, message} = formData;

    if(!firstname|| !lastname || !email || !phone || !pinCode || !message){
      toast.error('All fiels are required!')
      return;
    }

   
    try {
      const response = await axios.post('http://localhost:4000/api/book-call',{
        firstname, lastname, email, phone, pinCode, message
      })
      toast.success(response.data.message);
      setFormData( 
        {
        firstname:"",
        lastname: "",
        email: "",
        phone: "",
        pinCode:"",
        message: "",
        }
      )

    } catch (error) {
      if (error.response && error.response.status === 409) {
        // toast.error(error.response.data.message);
        setErrMessage(error.response.data.message)
        return;
      }
      // internal server error
      else if (error.response && error.response.status === 500) {
        // toast.error(error.response.data.message);
        setErrMessage(error.response.data.message);
        return;
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="w-full relative h-full bg-black py-10 md:py-20 ">
      <div className="w-11/12 mx-auto p-4 md:p-8">
        <div className="flex flex-col justify-center items-center space-y-5">
          {/* Heading */}
          <CenterCustomHeading className={'mt-5 -mb-3 md:-mt-5 lg:mt-5'} heading={"GET IN TOUCH"} />
          <p className="text-xl md:text-2xl lg:text-3xl text-white font-bold font-Roboto text-center -mt-20 ">
            Reach Out To Get A Free Quote.
          </p>

          {/* Parent Div */}
          <div className="w-full flex flex-col items-center ">
            {/* Service Options Container */}
            <div className="w-[16.5rem] md:w-[40.1rem] lg:w-[41.1rem] absolute xl:w-[62.5rem] bg-black border border-white rounded-3xl py-2 px-3">
              <div className="grid grid-cols-3 lg:grid-cols-6 gap-1">
                {serviceInfo.map((serv) => (
                  <div
                    key={serv.id}
                    onMouseEnter={() => setIsHover(serv.id)}
                    onMouseLeave={() => setIsHover(null)}
                    className={`w-full px-[3px] h-7 md:h-9 lg:h-[48px] border rounded-full flex items-center justify-center transition-colors duration-300 ${
                      isHover === serv.id
                        ? "bg-red-600 text-white shadow-lg"
                        : "bg-black text-red-600 border-white"
                    }`}
                  >
                    <p className="text-[8px] md:text-[14px] font-semibold font-Roboto text-center">
                      {serv.info}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form Container */}
            <div className="w-[16.5rem] md:w-[40.1rem] mt-[3.6rem] lg:mt-[2rem] lg:w-3/4 bg-[#BCD4D2] border rounded-2xl p-6 md:p-10 lg:p-12">
              <form
                className="flex flex-col space-y-6 md:space-y-8 lg:space-y-10 text-black font-Roboto"
                onSubmit={formDataHandler}
              >
                {/* Name Fields */}
                <div className="grid text-black grid-cols-1 md:grid-cols-2 gap-6">
                  <label className="w-full text-sm md:text-md">
                    FIRST NAME
                    <br />
                    <input
                      className="w-full text-black bg-transparent md:mt-2 mb-1 focus:outline-none border-b border-b-black"
                      type="text"
                      required
                      placeholder="First Name"
                      name="firstname"
                      value={formData.firstname}
                      onChange={handleChange}
                    />
                  </label>

                  <label className="w-full -mt-4 sm:mt-0 text-sm md:text-md">
                    LAST NAME
                    <br />
                    <input
                      className="w-full bg-transparent md:mt-2 mb-1 focus:outline-none border-b border-b-black"
                      type="text"
                      required
                      placeholder="Last Name"
                      name="lastname"
                      value={formData.lastname}
                      onChange={handleChange}
                    />
                  </label>
                </div>

                {/* Email Field */}
                <div className="w-full -mt-4 text-sm md:text-md">
                  <label className="w-full">
                    EMAIL ADDRESS
                    <br />
                    <input
                      className="w-full bg-transparent md:mt-2 mb-1 focus:outline-none border-b border-b-black"
                      type="email"
                      placeholder="you@example.com"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </label>
                  <p className="text-red-400 text-lg">{errMessage}</p>
                </div>

                {/* Phone & Pincode Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <label className="w-full -mt-4 text-sm md:text-md">
                    PHONE
                    <br />
                    <input
                      className="w-full bg-transparent md:mt-2 mb-1 focus:outline-none border-b border-b-black"
                      type="text"
                      required
                      placeholder="+91"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </label>

                  <label className="w-full -mt-4 text-sm md:text-md">
                    PIN CODE
                    <br />
                    <input
                      className="w-full bg-transparent md:mt-2 mb-1 focus:outline-none border-b border-b-black"
                      type="text"
                      required
                      placeholder="Enter Your Pincode"
                      name="pinCode"
                      value={formData.pinCode}
                      onChange={handleChange}
                    />
                  </label>
                </div>

                {/* Message Field */}
                <div className="w-full">
                  <label className="w-full -mt-4 text-sm md:text-md">
                    MESSAGE
                    <br />
                    <textarea
                      rows={3}
                      className="w-full bg-transparent -mb-4 md:mt-2 focus:outline-none border-b border-b-black"
                      name="message"
                      required
                      placeholder="Type your message..."
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                  </label>
                </div>

                {/* Submit Button */}
                <CustomButton label={"SUBMIT"} className="rounded-lg md:w-full" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
