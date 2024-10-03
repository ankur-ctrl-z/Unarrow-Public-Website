import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";
import faqs from "../../assets/homeImage/faqs.png";

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

  return (
    <div className="w-full h-full relative bg-[#011415] px-5 md:px-10 lg:px-20">
      <div className="w-full mx-auto py-14">
        {/* Title Section */}
        <div className="flex flex-col items-start text-center md:text-left mb-10 md:mb-14">
          <p className="text-white text-lg font-Roboto mb-1">FAQ’s</p>
          <div className="flex items-center gap-2 mb-6 lg:gap-4 lg:ml-14">
            <div className="w-2 h-2 lg:w-4 lg:h-4 mt-1 bg-[#db4a2b]"></div>
            <h3 className="md:text-xl lg:text-[2.1875rem] text-white font-bold font-Roboto">
              Frequently Asked Questions
            </h3>
          </div>
        </div>

        {/* Content Section */}
        <div className="flex flex-col -mt-14 lg:flex-row justify-between items-start lg:items-center gap-10 lg:gap-20">
          {/* FAQs Section */}
          <div className="w-full lg:w-2/3">
            <p className="italic md:text-xl lg:text-[1.4375rem] font-serif font-normal leading-normal text-gray-300 mb-6">
              Have A Question? We Got You..
            </p>

            {/* FAQ Items */}
            <div className="flex flex-col gap-4 md:py-5">
              {Faqs.map((f) => (
                <div
                  key={f.id}
                  className="flex  md:flex-row md:items-start justify-between gap-4 border-b border-gray-600 pb-4"
                >
                  <div className="text-gray-200 text-sm md:text-2xl font-serif">
                    {f.id}.
                  </div>
                  <div className="flex-1">
                    <div className="font-normal text-gray-200 text-sm md:text-2xl leading-normal text-start">
                      {f.Question}
                    </div>
                    {visibleFaq === f.id && (
                      <div className="text-gray-400 text-xs md:text-lg mt-2">
                        {f.Answer}
                      </div>
                    )}
                  </div>
                  <div
                    className="text-lg font-semibold cursor-pointer"
                    onClick={() => toggleHandler(f.id)}
                  >
                    {visibleFaq === f.id ? (
                      <FaMinus className="text-[#db4a2b]" />
                    ) : (
                      <FaPlus className="text-[#db4a2b]" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image Section */}
          <div className="w-full lg:w-1/3">
            <img
              src={faqs}
              className="w-full h-full object-cover"
              alt="FAQs illustration"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQS;
