import React from 'react'

const CenterCustomHeading = ({children , className , heading, ...props}) => {
  return (
    <div {...props} className={`flex justify-center items-center gap-4 ${className}`} {...props}>
    <div className="w-4 h-4 mt-1 bg-[#db4a2b]"></div>
    <h3 className="text-4xl text-white font-bold font-Roboto">
      {heading}
      {children}
    </h3>
  </div>
  )
}

export default CenterCustomHeading