import React from "react";
import logo from "../assets/logo.svg";
import namelogo from "../assets/onlyname.svg";
import { GrAdd } from "react-icons/gr";

const Footer = () => {
  return (
    <footer className="my-5 flex justify-between items-center flex-col-reverse md:flex-row">
      <div className="flex items-center mt-4 md:mt-0 cursor-pointer">
        <div
          className="rounded-full p-3 mr-5"
          style={{
            boxShadow: "0 0 10px #051A9160",
          }}
        >
          <img src={logo} width={40} height={40} className="aspect-square" />
        </div>
        <div className="relative">
          <p className="text-[#696671] text-[10px] font-bold mb-1">
            Published By
          </p>
          <img src={namelogo} width={90} />
        </div>
      </div>
      <div className="flex justify-center items-center mt-4 md:mt-0 cursor-pointer">
        <span className="flex justify-center items-center p-2 rounded-full bg-gradient-to-b from-[#06286E] to-[#164EC0]">
          <GrAdd className="text-white cursor-pointer" size={20} />
        </span>
        <p className="text-transparent font-semibold bg-gradient-to-b from-[#06286E] to-[#164EC0] bg-clip-text ml-2 text-lg">
          Create Flashcard
        </p>
      </div>
    </footer>
  );
};

export default Footer;
