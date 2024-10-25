import React from "react";
import { useState } from "react";
import CenterCustomHeading from "../customs/CenterCustomHeading";
import CustomArrow from "../customs/CustomArrow";
import { FiArrowUpRight } from "react-icons/fi";
import { FaArrowRight } from "react-icons/fa6";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const AboutServices = [
  {
    id: 1,
    Service: "Website Development",
    path:'/services/website-development',
    desc:
      "At Unarrow, we make websites that look great and work perfectly. Our team of expert developers uses the newest tools to build sites that are fast, easy to use, and show up well on .....",
  },

  {
    id: 2,
    Service:"UI/UX Designing",
    path:'/services/ui-ux-design',
    desc:
      "At Unarrow, we make websites that look great and work perfectly. Our team of expert developers uses the newest tools to build sites that are fast, easy to use, and show up well on .....",
  },
  {
    id: 3,
    Service: "SEO",
    path:'/services/seo',
    desc:
      "At Unarrow, we make websites that look great and work perfectly. Our team of expert developers uses the newest tools to build sites that are fast, easy to use, and show up well on .....",
  },
  {
    id: 4,
    Service: "Social Media Marketing",
    path:'/services/social-media-marketing',
    desc:
      "At Unarrow, we make websites that look great and work perfectly. Our team of expert developers uses the newest tools to build sites that are fast, easy to use, and show up well on .....",
  },
  {
    id: 5,
    Service: "Pay Per Click (PPC)",
    path:'/services/pay-per-click',
    desc:
      "At Unarrow, we make websites that look great and work perfectly. Our team of expert developers uses the newest tools to build sites that are fast, easy to use, and show up well on .....",
  },
  {
    id: 6,
    Service: "Website Redesigning",
    path:'/services/website-redesigning',
    desc:
      "At Unarrow, we make websites that look great and work perfectly. Our team of expert developers uses the newest tools to build sites that are fast, easy to use, and show up well on .....",
  },
];

const Services = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/contact");
  };

  return (
    <div className="w-full relative h-full bg-[#011415] py-12">
      <div className="w-11/12 mx-auto">
        <div className="mt-14 sm:mt-20 flex flex-col justify-center items-center">
          <CenterCustomHeading
            className={"text-xl lg:text-[2.1875rem] text-white font-bold font-Roboto"}
            heading={"We Offer Wide Range of Services"}
          />

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 mt-5 sm:mt-10">
            {AboutServices.map((service) => {
              return (
                <Link to={service.path}
                  onMouseEnter={() => setHoveredCard(service.id)}
                  onMouseLeave={() => setHoveredCard(null)}  
                  className={`w-[18rem] md:w-[19rem] xl:w-[25rem] mt-2 font-Roboto h-[21.375rem]  flex flex-col justify-center items-center  rounded-[2.5rem] shadow-inherit p-2 duration-100 transition-all ${
                    hoveredCard === service.id ? "bg-[#db4a2b]" : "bg-black"
                  }`}
                >
                  <h2 className="text-white max-w-[15rem] mt-5 text-center text-[1.5rem] md:text-[1.8rem] lg:text-[1.95rem] leading-8 font-bold  mb-4">
                    {service.Service}
                  </h2>
                  <p className="text-white max-w-[15rem] text-sm md:text-md ">{service.desc}</p>

                  <div  className="flex gap-3 mt-5 mb-5 ml-20">
                    <a className="text-white mt-2 text-xl underline" href="">
                      Learn More
                    </a>
                    <CustomArrow
                      icon={
                        hoveredCard === service.id ? (
                          <FaArrowRight size={24} />
                        ) : (
                          <FiArrowUpRight size={30} />
                        )
                      }
                    />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
