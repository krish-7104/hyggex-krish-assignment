import React, { useState } from "react";

const Menu = () => {
  const [active, setActive] = useState("Study");

  const handleItemClick = (itemName) => {
    setActive(itemName);
  };

  return (
    <ul className="flex justify-evenly items-center w-[90%] md:w-[50%] mt-8 mx-auto">
      <li
        className={`cursor-pointer ${
          active === "Study"
            ? "font-bold underline underline-offset-8 text-[#06286E]"
            : "text-[#696671] font-medium"
        }`}
        onClick={() => handleItemClick("Study")}
      >
        Study
      </li>
      <li
        className={`cursor-pointer ${
          active === "Quiz"
            ? "font-bold underline underline-offset-8 text-[#06286E]"
            : "text-[#696671] font-medium"
        }`}
        onClick={() => handleItemClick("Quiz")}
      >
        Quiz
      </li>
      <li
        className={`cursor-pointer ${
          active === "Test"
            ? "font-bold underline underline-offset-8 text-[#06286E]"
            : "text-[#696671] font-medium"
        }`}
        onClick={() => handleItemClick("Test")}
      >
        Test
      </li>
      <li
        className={`cursor-pointer ${
          active === "Game"
            ? "font-bold underline underline-offset-8 text-[#06286E]"
            : "text-[#696671] font-medium"
        }`}
        onClick={() => handleItemClick("Game")}
      >
        Game
      </li>
      <li
        className={`cursor-pointer ${
          active === "Others"
            ? "font-bold underline underline-offset-8 text-[#06286E]"
            : "text-[#696671] font-medium"
        }`}
        onClick={() => handleItemClick("Others")}
      >
        Others
      </li>
    </ul>
  );
};

export default Menu;
