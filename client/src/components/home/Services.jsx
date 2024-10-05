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
    desc: "Web development is at the heart of our digital solutions, bringing your vision to life with sleek, responsive, and high-performing websites. Our team of skilled developers is proficient in the latest technologies, ensuring your site is not only visually stunning but also functionally robust.",
  },
  {
    id: 2,
    serviceNo: "02",
    service: "Social Media Marketing",
    path: "/services/social-media-marketing",
    desc: "Social media management is a crucial aspect of our digital solutions, designed to elevate your brand's online presence. Our team of social media experts crafts strategic campaigns that resonate with your target audience and drive engagement.",
  },
  {
    id: 3,
    serviceNo: "03",
    path: "/services/seo",
    service: "Search Engine Optimization",
    desc: "Search Engine Optimization (SEO) is a cornerstone of our digital solutions, designed to enhance your online visibility and drive organic traffic. Our team of SEO specialists employs advanced techniques to improve your website's ranking on major search engines.",
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
    slidesToScroll: 1,
    centerMode: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerMode: false,
          dots: true,
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

          <div className="flex flex-col md:mt-10 p-2">
            <Slider {...settings}>
              {services.map((s) => (
                <Link
                  to={s.path}
                  key={s.id}
                  onMouseEnter={() => setHoveredCard(s.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className="border md:h-[25rem] lg:h-[31rem] space-x-2 lg:mb-10 mr-5 rounded-3xl hover:bg-[#db4a2b] hover:rotate-0 duration-300 transition-all shadow-[rgba(50, 50, 93, 0.25) 0px 30px 50px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 26px -18px inset] bg-[#000000] p-6"
                >
                  {/* Service Number */}
                  <p className="text-[rgba(255,255,255,0.5)] -mt-2 font-Roboto text-[2.5rem] md:ml-[15rem] md:text-[3rem] lg:text-[3.75rem] font-normal leading-none">
                    {s.serviceNo}
                  </p>
                  
                  {/* Service Title */}
                  <h2 className="text-white text-center max-w-[15rem] text-[17px] md:text-[1.5rem] lg:text-[2.1875rem] font-bold leading-normal mb-4">
                    {s.service}
                  </h2>
                  
                  {/* Service Description */}
                  <p className="text-white text-[12px] md:text-[14px] lg:text-[16px] font-Roboto leading-relaxed mb-6">
                    {s.desc}
                  </p>

                  {/* Arrow Button */}
                  <div className="flex justify-end">
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
