import React from "react";
import Marquee from "react-fast-marquee";
import arr from "../videoData.json";

function Slider() {
  return (
    <div className="">
      <h2 className="text-black font-bold text-xl pl-4 py-6">
        My lastest videos
      </h2>
      <Marquee pauseOnHover="true" className="py-3 overflow-hidden ">
        <div className="flex w-full">
          {arr?.map((vid) => (
            <a
              className="flex flex-col justify-center items-center pt-1 text-white mr-52 cursor-pointer relative"
              key={vid.id}
              href={vid.link}
              target="_blank"
            >
              <img
                className="h-[200px] bg-transparent relative rounded-lg blur-sm"
                src={vid.img}
                alt=""
              />
              <p className="text-center pt-3 absolute text-black bg-">
                {vid.title}
              </p>
              <p className="text-black"></p>
            </a>
          ))}
        </div>
      </Marquee>
    </div>
  );
}

export default Slider;
