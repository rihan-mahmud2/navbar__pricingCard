import React from "react";
import PricingCard from "../PricingCard/PricingCard";

const Pricing = () => {
  const products = [
    {
      id: 1,
      name: "Free",
      price: 0,
      features: [
        "Awesome Features",
        "Excellent Features",
        "Baje Features",
        "Ajayra Features",
      ],
    },
    {
      id: 2,
      name: "Premium",
      price: 9.99,
      features: [
        "Medium Features",
        "Excellent Features",
        "Baje Features",
        "Ajayra Features",
      ],
    },
    {
      id: 1,
      name: "Medium",
      price: 16.99,
      features: [
        "Prmium Features",
        "Excellent Features",
        "Baje Features",
        "Ajayra Features",
      ],
    },
  ];
  return (
    <div>
      <h1 className="p-10 bg-indigo-200 text-5xl font-bold text-white">
        Best Deal of the day
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3">
        {products.map((product) => (
          <PricingCard key={product.id} product={product}></PricingCard>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
