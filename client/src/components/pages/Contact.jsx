import React, { useState } from "react";
import CenterCustomHeading from "../customs/CenterCustomHeading";
import CustomButton from "../customs/CustomButton";
const serviceInfo = [
  {
    id: 1,
    info: "Website Enquiry",
  },

  {
    id: 2,
    info: "SEO Enquiry",
  },
  {
    id: 3,
    info: "UI/UX Enquiry",
  },
  {
    id: 4,
    info: "SMM Enquiry",
  },
  {
    id: 5,
    info: "General Enquiry",
  },
];
const Contact = () => {
  const [isHover, setIsHover] = useState(null);

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
    <div className="w-full relative h-full bg-black py-32 ">
      <div className="w-11/12 mx-auto p-8">
        <div className="flex flex-col justify-center items-center ">
          <CenterCustomHeading heading={"GET IN TOUCH"} />
          <p className="text-[2.5rem] text-white font-bold font-Roboto text-center mt-5 mb-5">
            Reach Out To get A free Quote.
          </p>

          {/* parent div */}
          <div className=" flex flex-col justify-center items-center">
            {/* first div */}
            <div className="w-[75.75rem] h-[5.5rem] bg-black z-40 flex flex-col justify-center border rounded-3xl">
              <div className="flex justify-around">
                {serviceInfo.map((serv) => {
                  return (
                    <div
                      onMouseEnter={() => setIsHover(serv.id)}
                      onMouseLeave={() => setIsHover(null)}
                      className={`w-[12.18rem] h-[4rem] border rounded-full ${
                        isHover === serv.id
                          ? "bg-red-600 text-white"
                          : "bg-black text-red-600 "
                      }`}
                    >
                      <p className="text-center font-bold font-Roboto mt-5 text-[1.375rem ]">
                        {serv.info}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* second div */}
            <div className=" flex flex-col items-center justify-center w-[83.75rem] h-[46rem] -mt-10 -mb-32 bg-[#BCD4D2] border rounded-2xl">
              {/* contact form */}
              <form
                className=" text-black font-Roboto md:w-[50%] lg:w-[55%] -mt-5"
                onSubmit={formDataHandler}
              >
                <div className="flex gap-20">
                  <label className="w-full">
                    NAME
                    <br />
                    <input
                      className="mt-2 bg-transparent mb-1 focus:outline-none"
                      type="text"
                      required
                      placeholder="First Name"
                      name="firstname"
                      value={formData.firstname}
                      onChange={handleChange}
                    />
                    <div className="w-full h-[1px] bg-black"></div>
                  </label>

                  <label className="w-full">
                    <input
                      className="mt-8 bg-transparent mb-1 focus:outline-none"
                      type="text"
                      required
                      placeholder="Last Name"
                      name="lastname"
                      value={formData.lastname}
                      onChange={handleChange}
                    />
                   <div className="w-full h-[1px] bg-black"></div>
                  </label>
                </div>

                <div className="flex w-full gap-20">
                  <label className="mt-6 w-full">
                    EMAIL ADDRESS
                    <br />
                    <input
                      className="bg-transparent mt-2 mb-1 focus:outline-none"
                      type="email"
                      placeholder="tanul@unarrow.com"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                    />
                     <div className="w-full h-[1px] bg-black"></div>
                  </label>
                </div>

                <div className="flex gap-20">
                  <label className="mt-6 w-full">
                    PHONE
                    <br />
                    <input
                      className="bg-transparent mt-2 mb-1 focus:outline-none"
                      type="text"
                      required
                      placeholder="+91"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                    <div className="w-full h-[1px] bg-black"></div>
                  </label>

                  <label className="mt-6 w-full">
                    PIN CODE
                    <br />
                    <input
                      className="bg-transparent mt-2 mb-1 focus:outline-none"
                      type="text"
                      required
                      placeholder="Enter Your Pincode"
                      name="pincode"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                     <div className="w-full h-[1px] bg-black"></div>
                  </label>
                </div>

                <div className="mt-6">
                  <label className="w-full">
                    MESSAGE
                    <br />
                    <textarea
                      rows={1}
                      className="bg-transparent w-full mt-2 mb-1 focus:outline-none"
                      name="message"
                      required
                      placeholder="Type your Message......"
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                   <div className="w-full h-[1px] bg-black mt-10"></div>
                  </label>
                </div>

                <CustomButton
                  label={"SUBMIT"}
                  className={"rounded-lg mt-20 md:w-full"}
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
