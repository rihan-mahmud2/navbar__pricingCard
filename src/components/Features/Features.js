import React from "react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

const Features = ({ feature }) => {
  return (
    <div className="flex items-center mt-5">
      <CheckCircleIcon className="h-6 w-6 text-green-500" />
      <span className="ml-2">{feature}</span>
    </div>
  );
};

export default Features;
