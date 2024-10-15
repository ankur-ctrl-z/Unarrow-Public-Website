import React from 'react';

const CustomTeamMember = ({ image, memberName, profession }) => {
  return (
    <div className="w-full h-[12rem] md:w-[10.8rem] md:h-[14rem] lg:w-[14.5rem] xl:w-[20rem] xl:h-[24rem]  lg:ml-0 lg:h-[20rem] hover:scale-105 duration-500 transition-all flex-shrink-0 border-2 rounded-3xl relative overflow-hidden">
      {/* Image container now takes full width and height */}
      <img
        src={image}
        loading="lazy"
        className="w-full h-full object-cover rounded-3xl"
        alt={memberName}
      />
  
      <div className="absolute bottom-0 left-0 w-full bg-opacity-60 bg-black py-4 px-3 lg:px-6 rounded-b-3xl">
        <div className="text-white font-Roboto text-sm lg:text-xl font-bold leading-snug">
          {memberName}
        </div>
        <div className="text-gray-400 font-Roboto text-xs lg:text-lg font-normal leading-snug">
          {profession}
        </div>
      </div>
    </div>
  );
};

export default CustomTeamMember;
