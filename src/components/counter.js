import React from "react";
import { BiReset } from "react-icons/bi";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const Counter = () => {
  return (
    <div className="counter-wrapper">
      <h2 className="text-center text-4xl text-white">REACT REDUX</h2>
      <p className="text-2xl text-white font-[500] consolas">Counter App</p>
      <div className="line bg-white w-[70px] h-[3px] my-4"></div>

      <div className="counts w-full flex flex-col justify-center items-center mt-10">
        <div className="value-holder w-full">
          <p className="text-7xl bg-white text-[#764ABC] w-full h-auto py-4 rounded flex justify-center items-center font-[500]">
            0
          </p>
        </div>

        <div className="btns-holder mt-5 mb-16 flex gap-4 w-full">
          <button className="btn btn-decrement bg-white w-full text-2xl p-3 text-[#764ABC] rounded">
            <AiOutlineMinus className="m-auto" />
          </button>
          <button className="btn btn-decrement bg-white w-full text-2xl p-3 text-[#764ABC] rounded">
            <BiReset className="m-auto" />
          </button>
          <button className="btn btn-increment bg-white w-full text-2xl p-3 text-[#764ABC] rounded">
            <AiOutlinePlus className="m-auto" />
          </button>
        </div>

        <p className="text-white">
          Designed and Developed by{" "}
          <a
            href="https://fiverr.com/webdevmaruf"
            target="_blank"
            className="text-[#764ABC] font-[500] bg-white px-2 py-1 rounded ml-2"
            rel="noreferrer"
          >
            WebDevMaruf
          </a>
        </p>
      </div>
    </div>
  );
};

export default Counter;