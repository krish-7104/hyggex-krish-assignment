import React, { useState } from "react";
import { MdLightbulbOutline } from "react-icons/md";
import { HiMiniSpeakerWave } from "react-icons/hi2";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import resetSvg from "../assets/reset.svg";
import fullscreenSvg from "../assets/fullscreen.svg";

const MainCard = () => {
  const [total, setTotal] = useState(10);
  const [count, setCount] = useState(1);

  const handlePrev = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleNext = () => {
    if (count < total) {
      setCount(count + 1);
    }
  };

  return (
    <section className=" w-[90%] md:w-[45%]  mx-auto my-8">
      <div
        className="w-full h-[40vh] md:h-[45vh] rounded-[35px] flex justify-center items-center flex-col relative"
        style={{
          background:
            "linear-gradient(222.94deg, #051A91 -4.31%, #061C93 14.41%, #2284F1 81.88%, #1F80EB 103.81%)",
        }}
      >
        <div className="flex justify-between items-center w-[90%] pt-5 mx-auto absolute top-0">
          <MdLightbulbOutline className="text-white text-2xl cursor-pointer" />
          <HiMiniSpeakerWave className="text-white text-2xl cursor-pointer" />
        </div>
        <p className="cardData text-white font-bold text-2xl md:text-3xl">
          9 + 6 + 7x - 2x - 3
        </p>
      </div>
      <div className="w-[90%] flex justify-between items-center mt-10 md:mt-5 mx-auto select-none">
        <img
          src={resetSvg}
          width={22}
          className="cursor-pointer"
          onClick={() => setCount(1)}
        />
        <div className="flex justify-center items-center">
          <span
            className="flex justify-center items-center p-2 rounded-full bg-gradient-to-b from-[#06286E] to-[#164EC0]"
            onClick={handlePrev}
          >
            <FaChevronLeft className="text-white cursor-pointer" size={21} />
          </span>
          <p className="mx-5 md:mx-10 font-semibold text-[#212B37]">
            {count + "/" + total}
          </p>{" "}
          <span
            className="flex justify-center items-center p-2 rounded-full bg-gradient-to-b from-[#06286E] to-[#164EC0]"
            onClick={handleNext}
          >
            <FaChevronRight className="text-white cursor-pointer" size={21} />
          </span>
        </div>
        <img src={fullscreenSvg} width={22} className="cursor-pointer" />
      </div>
    </section>
  );
};

export default MainCard;
