import React from "react";
import Features from "./../Features/Features";

//44-4 Simple Pricing Option Using React And Tailwind
//44-5 Responsive Pricing Card With Tailwind And React Icons

const PriceOption = ({ option }) => {
  console.log(option);
  const { id, itemName, price, features } = option;
  return (
    <div className="bg-cyan-300 rounded-lg p-5 text-center flex flex-col">
      <h2 className="my-5">
        <span className="text-7xl">{price}</span>
        <span className="text-3xl">/Month</span>
      </h2>
      <h4 className="text-5xl">{itemName}</h4>
      <div className="text-start flex-grow">
        {features.map((featur, index) => (
          <Features key={index} featur={featur}></Features>
        ))}
      </div>
      <button className="bg-blue-600 w-full p-5 rounded-xl font-extrabold">
        Buy Now
      </button>
    </div>
  );
};

export default PriceOption;
