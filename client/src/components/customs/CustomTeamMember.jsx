import React from 'react'

const CustomTeamMember = ({image, memberName, profession}) => {
  return (
    <div className='w-[20.875rem] h-[24.125rem] flex-shrink-0 border-2 rounded-3xl' >
        <img src={image} className='w-full h-full bg-cover rounded-3xl' alt="" />
        <div className="flex teammember w-[20rem] h-[6rem] absolute -mt-24 ml-1 flex-col gap-1">
            <div className="text-white font-Roboto text-[1.125rem] ml-10 mt-3 font-bold leading-normal">{memberName}</div>
            <div className="text-gray-400 font-Roboto text-[1.125rem] ml-10  font-normal leading-normal">{profession}</div>
        </div>
    </div>
  )
}

export default CustomTeamMember