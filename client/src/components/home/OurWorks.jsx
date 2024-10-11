import React from "react";
import Slider from "react-slick";
import { FaTelegramPlane } from "react-icons/fa";
import onetouch from "../../assets/workImage/one touch.png";
import sja from "../../assets/workImage/sja.png";
import jow from "../../assets/workImage/journeyonwheel.png";
import CustomButton from "../customs/CustomButton";
import { Link } from "react-router-dom";

const OurWorks = () => {
  // Slick settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
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
    <div className="w-full relative h-full bg-[#011415] pb-14 -mt-10">
      <div className="w-11/12 mx-auto">
        <div>
          <div className="flex items-center justify-center gap-2 lg:gap-4 lg:ml-14 lg:py-14">
            <div className="w-2 h-2 lg:w-4 lg:h-4 mt-1 bg-[#db4a2b]"></div>
            <h3 className="text-xl lg:text-[2.1875rem] text-white font-bold font-Roboto">
              Our Work
            </h3>
            <FaTelegramPlane className="text-white text-xl" />
          </div>

          {/* for small devices */}
          <div className="lg:hidden mt-10 mb-10">
            <Slider {...settings}>
              {/* One Touch Image */}
              <div className="p-2">
                <a href="https://sjacarecenter.com/">
                  <div className="lg:w-[35rem] lg:h-[30rem] border rounded-3xl">
                    <img
                      loading="lazy"
                      src={onetouch}
                      className="w-full h-full bg-cover rounded-3xl"
                      alt="One Touch Agency"
                    />
                  </div>

                  <div className="flex flex-col gap-1 font-Roboto mt-1">
                    <h3 className="lg:text-[2.18rem] font-bold leading-normal text-white">
                      Onetouch Agency
                    </h3>
                    <ul className="flex gap-3 text-gray-300">
                      <li>
                        <div className="flex gap-2">
                          <div className="h-2 w-2 mt-[2px] lg:mt-2 rounded-full bg-red-600"></div>
                          <p className="font-normal text-[9px]">Branding</p>
                        </div>
                      </li>
                      <li>
                        <div className="flex gap-2">
                          <div className="h-2 w-2 mt-[2px] lg:mt-2  rounded-full bg-red-600"></div>
                          <p className="font-normal text-[9px]">
                            Web design & Development
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="flex gap-2">
                          <div className="h-2 w-2 mt-[2px] lg:mt-2 rounded-full bg-red-600"></div>
                          <p className="font-normal text-[9px]">SEO</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </a>
              </div>

              {/* SJA Image */}
              <div className="p-2">
                <a href="https://onetouchagency.com/">
                  <div className="h-[17.5rem] md:h-[21rem] lg:w-[35rem] lg:h-[30rem] border rounded-3xl">
                    <img
                      loading="lazy"
                      src={sja}
                      className="w-full h-full bg-cover rounded-3xl"
                      alt="SJA Care Center"
                    />
                  </div>

                  <div className="flex flex-col gap-1 font-Roboto mt-1">
                    <h3 className="lg:text-[2.18rem] font-bold leading-normal text-white">
                      SJA Care Center
                    </h3>
                    <ul className="flex gap-3 text-gray-300">
                      <li>
                        <div className="flex gap-2">
                          <div className="h-2 w-2 mt-[2px] lg:mt-2 rounded-full bg-red-600"></div>
                          <p className="font-normal text-[9px]">Branding</p>
                        </div>
                      </li>
                      <li>
                        <div className="flex gap-2">
                          <div className="h-2 w-2 mt-[2px] lg:mt-2 rounded-full bg-red-600"></div>
                          <p className="font-normal text-[9px]">
                            Web design & Development
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="flex gap-2">
                          <div className="h-2 w-2 mt-[2px] lg:mt-2 rounded-full bg-red-600"></div>
                          <p className="font-normal text-[9px]">SEO</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </a>
              </div>

              {/* Journey on Wheel Image */}
              <div className="p-2">
                <a href="https://journeyonwheel.com/">
                  <div className="lg:w-[74rem] lg:h-[30rem] border rounded-3xl">
                    <img
                      loading="lazy"
                      src={jow}
                      className="w-full h-full bg-cover rounded-3xl"
                      alt="Journey on Wheel"
                    />
                  </div>

                  <div className="flex flex-col gap-1 font-Roboto mt-1">
                    <h3 className="lg:text-[2.18rem] font-bold leading-normal text-white">
                      Journey on Wheels
                    </h3>
                    <ul className="flex gap-3 text-gray-300">
                      <li>
                        <div className="flex gap-2">
                          <div className="h-2 w-2 mt-[2px] lg:mt-2 rounded-full bg-red-600"></div>
                          <p className="font-normal text-[9px]">Branding</p>
                        </div>
                      </li>
                      <li>
                        <div className="flex gap-2">
                          <div className="h-2 w-2 mt-[2px] lg:mt-2 rounded-full bg-red-600"></div>
                          <p className="font-normal text-[9px]">
                            Web design & Development
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="flex gap-2">
                          <div className="h-2 w-2 mt-[2px] lg:mt-2 rounded-full bg-red-600"></div>
                          <p className="font-normal text-[9px]">SEO</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </a>
              </div>
            </Slider>
          </div>

          {/* for larger device */}
          <div className="hidden lg:block mb-10">
            <div className="flex flex-col justify-center items-center">
              <div className="flex gap-5">
                {/* One Touch Image */}
                <div className="p-2">
                  <a href="https://sjacarecenter.com/">
                    <div className="lg:w-[28rem] lg:h-[28rem] xl:w-[34rem] border rounded-3xl">
                      <img
                        loading="lazy"
                        src={onetouch}
                        className="w-full h-full bg-cover rounded-3xl"
                        alt="SJA Care Center"
                      />
                    </div>
                  </a>

                  <div className="flex flex-col gap-1 font-Roboto mt-1">
                    <h3 className="lg:text-[2.18rem] font-bold leading-normal text-white">
                     SJA Care Center
                    </h3>
                    <ul className="flex gap-3 text-gray-300">
                      <li>
                        <div className="flex gap-2">
                          <div className="h-2 w-2 lg:h-4 lg:w-4  mt-[2px] rounded-full bg-red-600"></div>
                          <p className="font-normal text-[9px] lg:text-[13px]">
                            Branding
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="flex gap-2">
                          <div className="h-2 w-2 lg:h-4 lg:w-4 mt-[2px] rounded-full bg-red-600"></div>
                          <p className="font-normal text-[9px] lg:text-[13px]">
                            Web design & Development
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="flex gap-2">
                          <div className="h-2 w-2 mt-[2px] lg:h-4 lg:w-4  rounded-full bg-red-600"></div>
                          <p className="font-normal text-[9px] lg:text-[13px]">
                            SEO
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* SJA Image */}
                <div className="p-2">
                  <a href="https://onetouchagency.com/">
                    <div className="h-[17.5rem] lg:w-[28rem] lg:h-[28rem] xl:w-[34rem] border rounded-3xl">
                      <img
                        loading="lazy"
                        src={sja}
                        className="w-full h-full bg-cover rounded-3xl"
                        alt="one touch agency"
                      />
                    </div>
                  </a>

                  <div className="flex flex-col gap-1 font-Roboto mt-1">
                    <h3 className="lg:text-[2.18rem] font-bold leading-normal text-white">
                     One Touch Agency
                    </h3>
                    <ul className="flex gap-3 text-gray-300">
                      <li>
                        <div className="flex gap-2">
                          <div className="h-2 w-2 lg:h-4 lg:w-4  mt-[2px] rounded-full bg-red-600"></div>
                          <p className="font-normal text-[9px] lg:text-[13px]">
                            Branding
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="flex gap-2">
                          <div className="h-2 w-2 lg:h-4 lg:w-4 mt-[2px] rounded-full bg-red-600"></div>
                          <p className="font-normal text-[9px] lg:text-[13px]">
                            Web design & Development
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="flex gap-2">
                          <div className="h-2 w-2 mt-[2px] lg:h-4 lg:w-4  rounded-full bg-red-600"></div>
                          <p className="font-normal text-[9px] lg:text-[13px]">
                            SEO
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Journey on Wheel Image */}
              <div className="p-2">
                <a href="https://journeyonwheel.com/">
                  <div className=" lg:[68rem] xl:w-[72rem] lg:h-[30rem]  border rounded-3xl">
                    <img
                      loading="lazy"
                      src={jow}
                      className="w-full h-full bg-cover rounded-3xl"
                      alt="Journey on Wheel"
                    />
                  </div>
                </a>

                <div className="flex flex-col gap-1 font-Roboto mt-1">
                  <h3 className="lg:text-[2.18rem] font-bold leading-normal text-white">
                    Journey On Wheel
                  </h3>
                  <ul className="flex gap-3 text-gray-300">
                    <li>
                      <div className="flex gap-2">
                        <div className="h-2 w-2 lg:h-4 lg:w-4  mt-[2px] rounded-full bg-red-600"></div>
                        <p className="font-normal text-[9px] lg:text-[13px]">
                          Branding
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="flex gap-2">
                        <div className="h-2 w-2 lg:h-4 lg:w-4 mt-[2px] rounded-full bg-red-600"></div>
                        <p className="font-normal text-[9px] lg:text-[13px]">
                          Web design & Development
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="flex gap-2">
                        <div className="h-2 w-2 mt-[2px] lg:h-4 lg:w-4  rounded-full bg-red-600"></div>
                        <p className="font-normal text-[9px] lg:text-[13px]">
                          SEO
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Link to={"/ourworks"}>
        <CustomButton
          label={"Show More"}
          className={
            "w-full rounded-none  lg:text-[1.45rem] mt-[3rem] -mb-8 h-[3.2rem] lg:h-[4rem]"
          }
        />
      </Link>
    </div>
  );
};

export default OurWorks;
