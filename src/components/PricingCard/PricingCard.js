import React from "react";
import Features from "../Features/Features";

const PricingCard = ({ product }) => {
  const { features } = product;
  return (
    <div className="bg-indigo-200 p-10 m-5 rounded-md">
      <h1>
        <span className="text-6xl font-bold text-white">{product.price}</span>
        <span className="text-3xl text-white">/m</span>
      </h1>
      <p className="text-5xl font-semibold mt-2">{product.name}</p>
      {features.map((feature, inx) => (
        <Features key={inx} feature={feature}></Features>
      ))}
    </div>
  );
};

export default PricingCard;
