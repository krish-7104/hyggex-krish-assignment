import React from "react";
import { GoHome } from "react-icons/go";
import { FaChevronRight } from "react-icons/fa6";

const Breadcrumb = () => {
  return (
    <div className="flex justify-start items-center mt-6">
      <GoHome className="text-[#696671] text-lg" />
      <FaChevronRight className="text-[#06286E] mx-2" size={12} />
      <span className="text-[#696671] font-medium">Flashcard</span>
      <FaChevronRight className="text-[#06286E] mx-2" size={12} />
      <span className="text-[#696671] font-medium">Mathematics</span>
      <FaChevronRight className="text-[#06286E] mx-2" size={12} />
      <span className="text-[#06286E] font-semibold">
        Relation and Function
      </span>
    </div>
  );
};

export default Breadcrumb;
