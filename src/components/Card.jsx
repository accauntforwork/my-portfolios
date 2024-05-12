import React, { useState } from "react";
import Button from "./Button";
function Card(props) {
  const {
    top,
    projectName,
    imgLink,
    githubLink,
    liveLink,
    technologies,
    newest,
  } = props;

  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 5000);

  return (
    <div className="w-80 shadow-lg hover:shadow-blue-400 p-2 rounded-md">
      {loading ? (
        <div className="skeleton w-[300px] h-[180px] rounded-md"></div>
      ) : (
        <div className="relative flex justify-center items-center">
          <img
            className="rounded-lg transition-all duration-300 hover:scale-110"
            src={imgLink}
            width={300}
            height={200}
            alt="img card logo"
          />

          <div className="absolute flex gap-2">
            <a href={githubLink} target="_blank" rel="noreferrer">
              <Button text="Github" />
            </a>
            <a href={liveLink} target="_blank" rel="noreferrer">
              <Button text="Live demo" />
            </a>
          </div>
        </div>
      )}

      <h2 className="text-xl font-bold mt-2 flex gap-2 items-center">
        {loading ? (
          <div className="skeleton w-[80%] h-7 rounded-md"></div>
        ) : (
          projectName
        )}

        {top &&
          (loading ? (
            <div className="skeleton h-7 w-7 rounded-md"></div>
          ) : (
            <span className="text-yellow-500 ml-2">⭐</span>
          ))}
        {newest &&
          (loading ? (
            <div className="skeleton h-7 w-7 rounded-md"></div>
          ) : (
            <span className="text-yellow-500 ml-2">🆕</span>
          ))}
      </h2>
      <div className="flex gap-2 flex-wrap mt-4">
        {technologies.map((el, index) => (
          <span
            key={index}
            className={`px-4 pb-1 rounded-lg  hover:bg-blue-700 cursor-pointer ${
              loading ? "skeleton text-transparent" : "bg-blue-500 text-white"
            }`}
          >
            {el}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Card;
