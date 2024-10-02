import React from 'react'

const CustomButton = ({children, className,label, onclick, disabled, ...props}) => {
  return (
    <button className={`bg-[#db4a2b] flex justify-center items-center py-3 w-36 h-10 lg:h-12 text-white font-bold text-md lg:text-lg rounded-full ${className}`} {...props} label={label} onClick={onclick} disabled={disabled}>
        {label}
        {children}
    </button>
  )
}

export default CustomButton;