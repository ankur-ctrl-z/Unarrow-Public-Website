import React from "react";
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import { BiSolidQuoteAltRight } from "react-icons/bi";

const ClientsReviewCard = ({ img, feedback, clientName, clientProfession }) => {
  return (
    <div className="w-full relative h-full py-14">
      <div className="w-11/12 mx-auto flex justify-center ml-32 py-14">
        <div className="flex justify-between items-center">
          {/* left-part */}
          <div className="flex flex-col md:flex-row">
            <div>
              <div className="w-[10rem] lg:w-[10.975rem] lg:h-[24.5rem] inset-0  bg-[#364271] rounded-xl"></div>
              <div
                loading="lazy"
                className="w-[96px] h-[150px] lg:w-[18.437rem] lg:h-[19rem] flex flex-col inset-0 mt-[9.7rem] ml-[9.2rem] absolute justify-center items-center bg-gray-300 rounded-lg"
              >
                <img
                  src={img}
                  className="w-[7rem] lg:w-[14rem] lg:h-[12.0625rem] flex-shrink-0"
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
          <div className="flex mt-40 lg:-ml-60 gap-5">
            <div>
              <BiSolidQuoteAltLeft
                
                className="text-gray-400 text-4xl lg:text-6xl lg:-mt-14 "
              />
            </div>
            <p className="text-xs lg:text-lg w-[30rem] lg:w-[38rem] text-white font-Roboto font-normal">
              {feedback}
            </p>
            <div>
              <BiSolidQuoteAltRight
               
                className="text-gray-400 text-4xl lg:text-6xl mt-12 -ml-14"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientsReviewCard;
