import React from "react";

const LeftCustomHeading = ({children, className, heading, ...props }) => {
  return (
    <div
      {...props}
      className={`flex justify-start gap-4 mt-1 -ml-6 ${className}`}
    >
      <div className="w-4 h-4 mt-4 bg-[#db4a2b]"></div>
      <h3 className="text-lg leading-normal lg:text-[2rem] text-white font-bold lg:leading-10 font-Roboto">
        {heading}
        {children}
      </h3>
    </div>
  );
};

export default LeftCustomHeading;
