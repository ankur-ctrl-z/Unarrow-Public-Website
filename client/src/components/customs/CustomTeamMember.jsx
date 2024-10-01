import React from 'react'

const CustomTeamMember = ({image, memberName, profession}) => {
  return (
    <div className='-ml-2 w-[140px] h-[150px] lg:w-[20.875rem] lg:h-[24.125rem] hover:scale-105 duration-500 transition-all flex-shrink-0 border-2 rounded-3xl' >
        <img src={image} loading='lazy' className='w-full h-full   bg-cover rounded-3xl' alt="" />
        <div className="flex teammember lg:w-[20rem] h-[6rem] absolute -mt-14 lg:-mt-24 ml-1 flex-col gap-1">
            <div className="text-white font-Roboto text-xs lg:text-[1.125rem] lg:ml-10 lg:mt-3 font-bold leading-normal">{memberName}</div>
            <div className="text-gray-400 font-Roboto text-xs lg:text-[1.125rem] lg:ml-10  font-normal leading-normal">{profession}</div>
        </div>
    </div>
  )
}

export default CustomTeamMember