import React from 'react'

const CustomBuildIdea = ({children, image, clasName, text, icon , ...props}) => {
  return (
    <div  className={`flex justify-center items-center group w-[75px] h-[65px] lg:text-[3.125rem] leading-normal lg:w-[18.87rem] lg:h-[15.0625rem] flex-shrink-0 rounded-md ${clasName}`} {...props}>
        <img loading='lazy' className='w-full h-full rounded-md opacity-80 bg-cover' src={image} alt="" />
        <p className="text-white text-[18px] lg:text-[3.125rem] group-hover:scale-125 lg:group-hover:scale-150 duration-500 transition-all font-medium lg:font-bold font-Roboto absolute">{text}</p>
        <p className="text-white lg:text-[3.125rem] group-hover:scale-125 duration-500 transition-all font-bold font-Roboto absolute">{icon}</p>
        {children}
    </div>
  )
}

export default CustomBuildIdea