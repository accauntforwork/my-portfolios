import React from "react";
import Marquee from "react-fast-marquee";
import arr from "../videoData.json";
import { useTranslation } from "react-i18next";

function Slider() {
  const { t } = useTranslation();
  return (
    <div className="px-8">
      <h2 className=" font-bold text-xl pl-4 py-6">{t("latestVideo")}</h2>
      <Marquee pauseOnHover="true" className="py-3 overflow-hidden ">
        <div className="flex w-full">
          {arr?.map((vid) => (
            <a
              className="flex flex-col justify-center items-center pt-1 mr-52 cursor-pointer relative"
              key={vid.id}
              href={vid.link}
              target="_blank"
            >
              <img
                className="h-[200px] bg-transparent relative rounded-lg blur-sm"
                src={vid.img}
                alt=""
              />
              <div className="absolute top-0 left-0 flex gap-0">
                <p className="text-center bg-slate-500 p-2 rounded-l-lg">
                  {vid.title}
                </p>
                <p className="text-center bg-blue-500 p-2 rounded-r-lg">
                  {vid.duration}
                </p>
              </div>
              <div className="absolute flex justify-center items-center bg-blue-500 p-2 rounded-md blur-3xl hover:blur-0">
                {vid.description}
              </div>
            </a>
          ))}
        </div>
      </Marquee>
    </div>
  );
}

export default Slider;
