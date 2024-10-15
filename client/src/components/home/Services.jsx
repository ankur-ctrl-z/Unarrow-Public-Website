import React, { useState } from "react";
import CustomArrow from "../customs/CustomArrow";
import { FiArrowUpRight } from "react-icons/fi";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "../styles/headerCss.css";

const services = [
  {
    id: 1,
    serviceNo: "01",
    service: "Website Development",
    path: "/services/website-development",
    desc:
      "Web development is at the heart of our digital solutions, bringing your vision to life with sleek, responsive, and high-performing websites. Our team of skilled developers is proficient in the latest technologies, ensuring your site is not only visually stunning but also functionally robust.",
  },
  {
    id: 2,
    serviceNo: "02",
    service: "Social Media Marketing",
    path: "/services/social-media-marketing",
    desc:
      "Social media management is a crucial aspect of our digital solutions, designed to elevate your brand's online presence. Our team of social media experts crafts strategic campaigns that resonate with your target audience and drive engagement.",
  },
  {
    id: 3,
    serviceNo: "03",
    path: "/services/seo",
    service: "Search Engine Optimization",
    desc:
      "Search Engine Optimization (SEO) is a cornerstone of our digital solutions, designed to enhance your online visibility and drive organic traffic. Our team of SEO specialists employs advanced techniques to improve your website's ranking on major search engines.",
  },
];

const Services = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  // Slick Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1, // Ensures it scrolls one slide at a time
    centerMode: false, // Disable center mode to avoid cutting cards
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full relative h-full bg-[#011415] py-10">
      <div className="w-11/12 mx-auto">
        <div className="lg:py-5">
          <p className="text-white text-[9px] lg:text-lg font-Roboto lg:ml-[5.6rem] lg:mb-1">
            Design, Identity, Visibility
          </p>
          <div className="flex items-center gap-2 mb-6 lg:gap-4 lg:ml-14">
            <div className="w-2 h-2 lg:w-4 lg:h-4 mt-1 bg-[#db4a2b]"></div>
            <h3 className="text-xl lg:text-[2.1875rem] text-white font-bold font-Roboto">
              Services We Offer
            </h3>
          </div>

          {/* Slider Container */}
          <div className="flex justify-center items-cneter">
            <Slider {...settings} className="services-slider w-full flex justify-center items-center">
              {services.map((s) => (
                <Link to={s.path} key={s.id}>
                  <div
                    onMouseEnter={() => setHoveredCard(s.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                    className="border md:h-[27rem] lg:w-[18rem] xl:w-[25rem] xl:h-[30rem] xl:ml-10 p-5 m-5 flex flex-col rounded-3xl hover:bg-[#db4a2b] duration-300 transition-all shadow-[rgba(50, 50, 93, 0.25) 0px 30px 50px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 26px -18px inset] bg-[#000000]"
                  >
                    {/* Service Number */}
                    <p className="text-[rgba(255,255,255,0.5)] text-end font-Roboto text-[2rem] -mt-3 md:text-[2.5rem] xl:text-[3.75rem] font-normal leading-none">
                      {s.serviceNo}
                    </p>

                    <div className="flex flex-col items-center justify-center">
                      {/* Service Title */}
                      <h2 className="text-gray-300 font-Roboto text-center w-[10rem] md:w-[14rem] lg:w-[15rem] xl:w-[16rem]  mx-auto text-[20px] md:text-[1.5rem] xl:text-[2.1875rem] font-bold leading-normal mb-2">
                        {s.service}
                      </h2>

                      {/* Service Description */}
                      <p className="text-gray-400 text-[12px] w-[14rem] h-[12rem] lg:w-[16rem] xl:w-[20rem] md:text-[14px] xl:text-[16px] font-Roboto leading-relaxed">
                        {s.desc}
                      </p>
                    </div>

                    {/* Arrow Button */}
                    <div className="flex justify-end mt-5">
                      <CustomArrow
                        icon={
                          hoveredCard === s.id ? (
                            <FaArrowRight size={24} />
                          ) : (
                            <FiArrowUpRight size={30} />
                          )
                        }
                      />
                    </div>
                  </div>
                </Link>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
