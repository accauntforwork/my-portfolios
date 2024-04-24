import React from "react";
import Button from "./Button";
function Card(props) {
  const { top, projectName, imgLink, githubLink, liveLink, technologies } =
    props;
  return (
    <div className="w-80 shadow-lg hover:shadow-blue-400 p-2 rounded-md">
      <div className="relative flex justify-center items-center">
        <img
          className="rounded-lg transition-all duration-300 hover:scale-110"
          src={imgLink}
          width={300}
          height={200}
          alt=""
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
      <h2 className="text-xl font-bold mt-2">
        {projectName}
        {top && <span className="text-yellow-500 ml-2">&#9733;</span>}
      </h2>
      <div className="flex gap-2 flex-wrap mt-4">
        {technologies.map((el, index) => (
          <span
            key={index}
            className="px-4 pb-1 rounded-lg bg-blue-500 text-white hover:bg-blue-700 cursor-pointer"
          >
            {el}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Card;
