import React, { useState } from "react";
import { BiChevronDown } from "react-icons/bi";

const Accordian = ({ title, description, open, setOpen, index }) => {
  const toggleAccordion = () => {
    setOpen(open === index ? 0 : index);
  };

  return (
    <>
      <div className="w-full rounded-md bg-gradient-to-r mt-4 from-[#217EEC] to-[#082299] p-[2px]">
        <div className="flex h-full w-full items-center justify-center bg-white rounded">
          <div
            className="w-full text-left flex justify-between items-center px-4 py-2 focus:outline-none text-[#28262C] cursor-pointer select-none font-medium rounded-md"
            onClick={toggleAccordion}
          >
            {title}
            <BiChevronDown
              size={25}
              className={`text-[#28262C] ${
                open === index ? "rotate-180" : "rotate-0"
              }`}
            />
          </div>
        </div>
      </div>
      {open === index && (
        <div className="px-4 py-2 mt-2 text-[#28262C]">
          <p className="text-gray-800 text-sm">{description}</p>
        </div>
      )}
    </>
  );
};

export default Accordian;
