import React from "react";
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import { BiSolidQuoteAltRight } from "react-icons/bi";

const ClientsReviewCard = ({ img, feedback, clientName, clientProfession }) => {
  return (
    <>
      <div className="hidden md:block w-full relative h-full">
        <div className="w-11/12 mx-auto md:mb-[3rem]">
          <div className="flex ">
            {/* left-part */}
            <div className="flex xl:ml-[10rem]">
              <div>
                <div className="md:w-[10rem] md:h-[19rem] md:mt-[4.5rem] ml-[4.2rem] lg:w-[10.975rem] lg:mt-[4rem] lg:ml-[4.1rem] lg:h-[23rem]  inset-0 bg-[#364271] rounded-xl"></div>
                <div
                  loading="lazy"
                  className="md:w-[12rem] md:h-[16rem] lg:w-[14rem] lg:h-[19rem] xl:ml-[16.3rem]  flex flex-col inset-0 mt-[6rem] md:ml-[5rem] absolute justify-center items-center bg-gray-300 rounded-lg"
                >
                  <img
                    src={img}
                    className="w-[10rem] md:h-[12rem] lg:w-[12rem] -mt-5 lg:h-[12.0625rem] flex-shrink-0"
                    alt=""
                  />
                  <p className="text-black text-sm lg:text-[1.2rem] font-bold">
                    {clientName}
                  </p>
                  <p className="font-serif text-gray-700 text-[9px] lg:text-[0.9375rem] font-normal leading-normal text-center">
                    {clientProfession}
                  </p>
                </div>
              </div>
              <div className="hidden md:block md:w-[16rem] lg:w-[21.875rem] md:h-[0.535rem] lg:h-[0.635rem] mt-[7rem] bg-white"></div>
            </div>

            {/* right-part */}
            <div className ="flex lg:max-w-lg xl:max-w-2xl md:mt-[16rem] md:-ml-[12rem] lg:mt-[16rem] lg:ml-[40rem] xl:ml-[70rem] gap-5">
               <BiSolidQuoteAltLeft className="text-gray-400 text-4xl lg:text-6xl -mt-8 lg:-mt-14"/>
              <p className ="text-xs lg:text-lg w-[20rem] lg:w-[38rem] text-white font-Roboto font-normal">
                {feedback}
              </p>
                <BiSolidQuoteAltRight className="text-gray-400 text-4xl lg:text-6xl md:mt-14 md:-ml-14 lg:mt-[6rem] xl:mt-[9rem]"/>
            </div>
          </div>
        </div>
      </div>


      {/* for only mobile view */}
      <div className=" md:hidden w-full relative h-full py-12 -mb-12">
        <div className="w-11/12 mx-auto">
          <div className="flex">
            {/* left-part */}
            <div className="flex">
              <div className="">
                <div className="w-[20rem] lg:w-[10.975rem] lg:h-[24.5rem] inset-0  bg-[#364271] rounded-xl"></div>
                <div
                  loading="lazy"
                  className="w-[10rem] h-[12rem] lg:w-[18.437rem] lg:h-[19rem] flex flex-col inset-0 mt-[6rem] ml-[9.2rem] absolute justify-center items-center bg-gray-300 rounded-lg"
                >
                  <img
                    src={img}
                    className="w-[8rem] h-[8rem] lg:w-[14rem] lg:h-[12.0625rem] flex-shrink-0"
                    alt=""
                  />
                  <p className="text-black text-sm lg:text-[1.2rem] font-bold">
                    {clientName}
                  </p>
                  <p className="font-serif text-gray-700 text-[9px] lg:text-[0.9375rem] font-normal leading-normal text-center">
                    {clientProfession}
                  </p>
                </div>
              </div>
              <div className="hidden md:block w-[21.875rem] h-[0.635rem] ml-10 mt-16 bg-white"></div>
            </div>

            {/* right-part */}
            <div className="mt-[15.5rem] ml-20 ">
              <BiSolidQuoteAltLeft className="text-gray-400 -ml-5 text-4xl " />

              <p className="text-xs tex-center text-center w-[15rem] text-white font-Roboto font-normal">
                {feedback}
              </p>

              <BiSolidQuoteAltRight className="text-gray-400 text-4xl -mt-2 ml-[13rem]" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClientsReviewCard;
