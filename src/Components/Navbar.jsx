import React, { useState } from "react";
import reactLogo from "../assets/namelogo.svg";
import { BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="w-full bg-white px-5 py-4 flex justify-between items-center mx-auto re">
      <img
        src={reactLogo}
        width={140}
        className="cursor-pointer relative z-30"
      />
      {open && (
        <AiOutlineClose
          size={24}
          className="relative z-30 md:hidden block"
          onClick={() => setOpen(false)}
        />
      )}
      {!open && (
        <BiMenu
          size={26}
          className="relative z-30 md:hidden block"
          onClick={() => setOpen(true)}
        />
      )}
      <div
        className={` ${
          open ? "flex" : "hidden md:flex"
        } justify-center items-center md:flex-row flex-col bg-white h-[100vh] absolute md:static top-0 w-full md:h-auto md:w-auto left-0 z-10`}
      >
        <ul className="flex justify-center items-center md:mr-5 mb-5 md:mb-0 md:flex-row flex-col">
          <li className="font-normal text-[#3A3740] cursor-pointer p-2 mx-3">
            Home
          </li>
          <li className="font-normal text-[#3A3740] cursor-pointer p-2 mx-3">
            Flashcard
          </li>
          <li className="font-normal text-[#3A3740] cursor-pointer p-2 mx-3">
            Contact
          </li>
          <li className="font-normal text-[#3A3740] cursor-pointer p-2 mx-3">
            FAQ
          </li>
        </ul>
        <button className="rounded-[32px] bg-gradient-to-t to-[#06286E] from-[#164EC0] px-4 py-2 text-white text-sm">
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
