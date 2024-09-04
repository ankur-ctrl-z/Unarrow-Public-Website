import React from "react";
import { useState } from "react";
import CustomButton from "../customs/CustomButton";

const FAQS = () => {
  const [formData, setFormData] = useState({
    firstname: "",

    email: "",

    message: "",
  });

  const formDataHandler = (event) => {
    event.preventDefault();
    console.log(formData);
    setFormData({
      firstname: "",
      email: "",
      questions: "",
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
    <div className="w-full h-full relative bg-[#011415]">
      <div className="w-11/12 mx-auto py-14">
        <div>
          <div className="flex flex-col -ml-6 ">
            <p className="text-white text-lg font-Roboto ml-[5.6rem] mb-1">
              FAQ’s
            </p>
            <div className="flex items-center gap-4 ml-14 mb-14">
              <div className="w-4 h-4 mt-1 bg-[#db4a2b]"></div>
              <h3 className="text-4xl text-white font-bold font-Roboto">
                Frequently Asked Questions
              </h3>
            </div>
          </div>

          {/* bottom-section */}
          <div className="flex justify-evenly">
            <div>
              <p className="italic text-[1.4375rem] font-serif font-normal leading-normal text-gray-300">
                Have A Question? We Got You..
              </p>

              {/* FAQS-start from here*/}
              <div className="text-white text-2xl mt-10 flex justify-center items-center">
                we have to implement FAQ's ,so ignore this{" "}
              </div>
            </div>

            <div>
              <p className="font-Roboto text-white text-[1.5625rem] leading-normal font-bold">
                Ask A Different Questions
              </p>

              <form
                onSubmit={formDataHandler}
                className="font-Roboto py-5 flex flex-col gap-2 "
                action=""
              >
                <label className=" text-white w-full">
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
                  <hr />
                </label>

                <label className="mt-6 text-white w-full">
                  EMAIL ADDRESS
                  <br />
                  <input
                    className="bg-transparent mb-1 focus:outline-none"
                    type="email"
                    required
                    placeholder="tanul@unarrow.com"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <hr />
                </label>

                <label className="w-full mt-5 text-white">
                  QUESTIONS
                  <br />
                  <textarea
                    className="bg-transparent focus:outline-none"
                    name="questions"
                    required
                    placeholder="Questions......"
                    value={formData.questions}
                    onChange={handleChange}
                  ></textarea>
                  <hr className="" />
                </label>

                <CustomButton className={'mt-5 rounded-lg'} label={"SUBMIT"} />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQS;
