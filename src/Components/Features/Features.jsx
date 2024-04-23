import React from "react";
import { FaCheck } from "react-icons/fa";
//44-5 Responsive Pricing Card With Tailwind And React Icons

const Features = ({ featur }) => {
  console.log(featur);
  return (
    <div>
      <h1 className="flex justify-center text-start items-center">
        <FaCheck className="mr-2" />
        {featur}
      </h1>
    </div>
  );
};

export default Features;
