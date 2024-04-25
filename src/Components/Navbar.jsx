import React from "react";
import reactLogo from "../assets/logo.svg";

const Navbar = () => {
  return (
    <nav className="w-full bg-white px-5 py-4 flex justify-between items-center mx-auto">
      <img src={reactLogo} width={140} />
      <div className="flex justify-center items-center">
        <ul className="flex justify-center items-center mr-5">
          <li className="font-normal text-[#3A3740] p-2 mx-3">Home</li>
          <li className="font-normal text-[#3A3740] p-2 mx-3">Flashcard</li>
          <li className="font-normal text-[#3A3740] p-2 mx-3">Contact</li>
          <li className="font-normal text-[#3A3740] p-2 mx-3">FAQ</li>
        </ul>
        <button className="rounded-[32px] bg-gradient-to-t to-[#06286E] from-[#164EC0] px-4 py-2 text-white text-sm">
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
