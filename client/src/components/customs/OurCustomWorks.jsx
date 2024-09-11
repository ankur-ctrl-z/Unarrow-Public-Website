import React from "react";

const OurCustomWorks = ({
  Image,
  ProjectName,
  children,
  className,
  ...props
}) => {
  return (
    <div>
      <div
        className={`w-[33rem] h-[34rem] border-2 rounded-2xl ${className}`}
        {...props}
      >
        <img
          src={Image}
          className="w-full h-full bg-cover rounded-2xl"
          alt=""
        />
        {children}
      </div>
    </div>
  );
};

export default OurCustomWorks;
