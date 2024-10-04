import React, { useState } from "react";
import CustomArrow from "../customs/CustomArrow";
import { FiArrowUpRight } from "react-icons/fi";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const services = [
  {
    id: 1,
    serviceNo: "01",
    service: "Website Development",
    path: "/services/website-development",
    desc: "Web development is at the heart of our digital solutions, bringing your vision to life with sleek, responsive, and high-performing websites. Our team of skilled developers is proficient in the latest technologies, ensuring your site is not only visually stunning but also functionally robust. We focus on creating user-friendly experiences that engage your audience and drive conversions.",
  },
  {
    id: 2,
    serviceNo: "02",
    service: "Social Media Marketing",
    path: "/services/social-media-marketing",
    desc: "Social media management is a crucial aspect of our digital solutions, designed to elevate your brand's online presence. Our team of social media experts crafts strategic campaigns that resonate with your target audience and drive engagement. We manage your profiles across various platforms, ensuring consistent messaging and timely interactions.",
  },
  {
    id: 3,
    serviceNo: "03",
    path: "/services/seo",
    service: "Search Engine Optimization",
    desc: "Search Engine Optimization (SEO) is a cornerstone of our digital solutions, designed to enhance your online visibility and drive organic traffic. Our team of SEO specialists employs advanced techniques to improve your website's ranking on major search engines. We conduct thorough keyword research and optimize your content to ensure it meets the latest algorithm requirements.",
  },
];

const Services = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full relative h-full bg-[#011415]">
      <div className="w-11/12 mx-auto">
        <div className="lg:py-5">
          <p className="text-white text-[9px] lg:text-lg font-Roboto lg:ml-[5.6rem] lg:mb-1">
            Design, Identity, Visibility
          </p>
          <div className="flex items-center gap-2 mb-6 lg:gap-4 lg:ml-14 ">
            <div className="w-2 h-2 lg:w-4 lg:h-4 mt-1 bg-[#db4a2b]"></div>
            <h3 className="text-xl lg:text-[2.1875rem] text-white font-bold font-Roboto">
              Services We Offer
            </h3>
          </div>

          <div className=" flex flex-col lg:mt-10">
            <Slider {...settings}>
              {services.map((s) => (
                <Link
                  to={s.path}
                  key={s.id}
                  onMouseEnter={() => setHoveredCard(s.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className="flex flex-col items-center border md:w-[10rem] md:h-[35rem] lg:w-[10rem] lg:mb-10 rounded-3xl hover:bg-[#db4a2b] hover:[transform: rotateY(10deg) rotateX(10deg) scale(1.05)] duration-300 transition-all shadow-[rgba(50, 50, 93, 0.25) 0px 30px 50px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 26px -18px inset] bg-[#000000] p-1"
                >
                  <p className="text-[rgba(255,255,255,0.5)] -mt-2 font-Roboto text-[30px] lg:text-[3.75rem] font-normal leading-normal ml-[14rem] lg:ml-[19rem]">
                    {s.serviceNo}
                  </p>
                  <h2 className="text-white text-center ml-[4.5rem] mb-1 -mt-4 max-w-[120px] lg:max-w-sm font-Roboto text-[17px] lg:text-[2.1875rem] font-bold leading-normal p-3">
                    {s.service}
                  </h2>
                  <p className="text-white text-[14px] font-Roboto max-w-[240px] text-start ml-7 md:ml-36">
                    {s.desc}
                  </p>
                  <div className="lg:ml-[20rem] ml-[14rem] mb-1">
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
