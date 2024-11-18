import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";
import faqs from "../../assets/homeImage/faqs.png";

const Faqs = [
  {
    id: 1,
    Question: "What services does your digital agency offer?",
    Answer:
      "At Unarrow Digital Solutions, we offer a comprehensive range of digital marketing and development services tailored to help businesses grow online. Our services include website design and development, social media management, SEO, content creation, paid advertising, and ongoing digital strategy consultation. We work with clients across diverse industries to build and elevate their online presence.",
  },
  {
    id: 2,
    Question: "How do you approach a new project?",
    Answer:
      "We start each project with a detailed consultation to understand your goals, brand, and audience. After establishing a clear roadmap, we brainstorm creative solutions and develop a customized strategy. Throughout each stage design, implementation, and optimization our team collaborates closely with you to ensure the project reflects your vision and meets your expectations.",
  },
  {
    id: 3,
    Question: "Do you offer ongoing support and maintenance?",
    Answer:
      "Yes, we provide ongoing support and maintenance to keep your digital assets performing at their best. Whether it’s managing website updates, monitoring social media, optimizing for SEO, or running analytics, our team is here to ensure your online presence remains strong and up-to-date.",
  },
  {
    id: 4,
    Question: "Do you provide content creation services?",
    Answer:
      "Absolutely. We specialize in creating engaging, tailored content for your brand, including blog posts, social media content, graphics, and multimedia. Our content creation services are designed to align with your brand’s tone and message, helping you connect effectively with your target audience.",
  },
  {
    id: 5,
    Question: "How can I get started with your agency?",
    Answer:
      "Getting started with us is easy! Simply reach out via our contact form, email, or phone, and we will schedule a free consultation to discuss your needs and goals. Our team will guide you through the process, answer any questions, and help develop a personalized plan to kickstart your digital journey with us.",
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
          <p className="text-white text-[9px] sm:text-[10px] font-Roboto mb-2">FAQ’s</p>
          <div className="flex items-center gap-2 mb-6 lg:gap-4">
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
