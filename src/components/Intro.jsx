import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
function Intro() {
  return (
    <center>
      <div className=" flex flex-col max-w-[740px] font-semibold">
        <h1 className=" md:text-[72px] md:leading-[78px] text-[40px] leading-10">
          <span className=" text-[#7559ff] ">AI-powered video</span> creations
          at scale
        </h1>
        <div>
          <p className=" mt-6 md:text-[24px] text-[16px] text-[rgb(23 17 54)] font-normal max-w-[450px]">
            Effortlessly produce studio quality videos with AI-generated avatars
            and voices.
          </p>
        </div>

        <div className="flex flex-col mt-6">
          <div className=" flex items-center justify-center gap-1 ">
            <div className="bg-[#6648f9] text-[16px] font-medium text-white w-[195px]  items-center justify-center gap-1 px-[14px] py-4 rounded-lg hidden md:flex">
              <button className="">Get started for free</button>
              <IoIosArrowRoundForward />
            </div>
            <div className="bg-[#6648f9] text-[16px] font-medium text-white w-[120px] flex items-center justify-center gap-1 px-[14px] py-4 rounded-lg md:hidden">
              <button className="">Demo</button>
              <IoIosArrowRoundForward />
            </div>
          </div>

          <button className="text-[12px] text-gray-600 font-semibold mt-1">
            No card needed
          </button>
        </div>
      </div>
    </center>
  );
}

export default Intro;
