import React from "react";
import PriceOption from "../PriceOption/PriceOption";
//44-4 Simple Pricing Option Using React And Tailwind
//44-5 Responsive Pricing Card With Tailwind And React Icons

const PriceOptionsss = () => {
  const priceOptionsss = [
    {
      id: "1",
      itemName: "Dumbbells",
      price: 50.99,
      features: [
        "Various weights available",
        "Non-slip grip",
        "Durable construction",
      ],
    },
    {
      id: "2",
      itemName: "Yoga Mat",
      price: 25.49,
      features: ["Eco-friendly material", "Non-slip surface", "Easy to clean"],
    },
    {
      id: "3",
      itemName: "Treadmill",
      price: 799.99,
      features: [
        "Adjustable speed and incline",
        "Built-in workout programs",
        "Heart rate monitor",
      ],
    },
    {
      id: "4",
      itemName: "Resistance Bands",
      price: 15.99,
      features: [
        "Different resistance levels",
        "Portable and lightweight",
        "Versatile for various exercises",
      ],
    },
    {
      id: "5",
      itemName: "Exercise Ball",
      price: 29.99,
      features: [
        "Anti-burst design",
        "Includes pump for inflation",
        "Improves balance and core strength",
      ],
    },
  ];

  return (
    <div>
      <h2 className="text-5xl">Best Prices in the town</h2>
      <div className="grid md:grid-cols-3 gap-5 m-10">
        {priceOptionsss.map((option) => (
          <PriceOption key={option.id} option={option}></PriceOption>
        ))}
      </div>
    </div>
  );
};

export default PriceOptionsss;
