import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";
import faqs from '../../assets/homeImage/faqs.png'

const Faqs = [
  {
    id: 1,
    Question: "What services does your digital agency offer?",
    Answer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, impedit.",
  },
  {
    id: 2,
    Question: "How do you approach a new project?",
    Answer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, impedit.",
  },
  {
    id: 3,
    Question: "Do you offer ongoing support and maintenance?",
    Answer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, impedit.",
  },
  {
    id: 4,
    Question: "Do you provide content creation services?",
    Answer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, impedit.",
  },
  {
    id: 5,
    Question: "How can I get started with your agency?",
    Answer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, impedit.",
  },
];

const FAQS = () => {
  const [visibleFaq, setVisibleFaq] = useState(null);

  const toggleHandler = (id) => {
    setVisibleFaq(visibleFaq === id ? null : id);
  };

  const [formData, setFormData] = useState({
    firstname: "",
    email: "",
    questions: "",
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
        <div className="">
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

              {/* FAQS-start from here */}
              <div className="flex flex-col font-Roboto gap-1 py-5">
                {Faqs.map((f) => {
                  return (
                    <div
                      key={f.id}
                      className="flex justify-between gap-10 mt-2 mb-2"
                    >
                      <div className="text-[23px] text-gray-200 font-normal font-serif">
                        {f.id}.
                      </div>

                      <div className="flex-1">
                        <hr/>
                        <div className="font-normal text-gray-200 text-2xl leading-normal text-start">
                          {f.Question}
                        </div>
                      </div>

                      <div className="flex flex-col gap-2 text-xl font-semibold">
                        {visibleFaq === f.id ? (
                          <FaMinus
                            className="mt-1 cursor-pointer text-[#db4a2b]"
                            onClick={() => toggleHandler(f.id)}
                          />
                        ) : (
                          <FaPlus
                            className="mt-1 cursor-pointer text-[#db4a2b]"
                            onClick={() => toggleHandler(f.id)}
                          />
                        )}

                        {visibleFaq === f.id && (
                          <div className="text-lg font-normal -ml-[37.4rem] w-[591px] text-gray-400 mt-2">
                            {f.Answer}
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* <div>
              <p className="font-Roboto text-white text-[1.5625rem] leading-normal font-bold">
                Ask A Different Question
              </p>

              <form
                onSubmit={formDataHandler}
                className="font-Roboto py-5 flex flex-col gap-2 "
              >
                <label className="text-white w-full">
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
                    className="bg-transparent mb-1 mt-2 focus:outline-none"
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
                  <textarea rows={1} 
                    className="bg-transparent w-full mt-2 focus:outline-none"
                    name="questions"
                    required
                    placeholder="Questions......"
                    value={formData.questions}
                    onChange={handleChange}
                  ></textarea>
                  <hr />
                </label>

                <CustomButton className={"mt-5 rounded-lg"} label={"SUBMIT"} />
              </form>
            </div> */}

            <div className="w-[30rem] h-[31.6876rem] -mt-[10rem]">
              <img src={faqs} className="w-full h-full bg-cover" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQS;
