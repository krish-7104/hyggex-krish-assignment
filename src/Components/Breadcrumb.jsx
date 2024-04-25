import React from "react";
import { GoHome } from "react-icons/go";
import { FaChevronRight } from "react-icons/fa6";

const Breadcrumb = () => {
  return (
    <div className="flex justify-start items-center mt-6 flex-wrap w-[90%] mx-auto md:w-full gap-y-1">
      <GoHome className="text-[#696671] text-lg cursor-pointer" />
      <FaChevronRight className="text-[#06286E] mx-2" size={12} />
      <span className="text-[#696671] font-medium cursor-pointer text-sm md:text-base">
        Flashcard
      </span>
      <FaChevronRight className="text-[#06286E] mx-2" size={12} />
      <span className="text-[#696671] font-medium cursor-pointer text-sm md:text-base">
        Mathematics
      </span>
      <FaChevronRight className="text-[#06286E] mx-2" size={12} />
      <span className="text-[#06286E] font-semibold text-sm md:text-base">
        Relation and Function
      </span>
    </div>
  );
};

export default Breadcrumb;
