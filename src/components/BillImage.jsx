import React from "react";
import icons from "../data/icons";

const BillImage = ({ organization, billType }) => {
  return (
    <div className="w-full md:w-1/2 flex justify-center items-center">
      <img
        src={icons[organization]}
        alt={`${billType} icon`}
        className="w-[300px] md:w-[300px] md:h-[300px] object-contain"
      />
    </div>
  );
};

export default BillImage;
