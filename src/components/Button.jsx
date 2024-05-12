import React from "react";

function Button(props) {
  return (
    <span className="relative inline-flex items-center justify-start overflow-hidden font-medium transition-all bg-blue-100 rounded hover:bg-white group py-1.5 px-2.5 bg-opacity-70 cursor-pointer">
      <span className="w-56 h-48 rounded bg-blue-600 absolute bottom-0 left-0 translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
      <span className="relative w-full text-left text-blue-600 transition-colors duration-300 ease-in-out group-hover:text-white">
        {props.text}
      </span>
    </span>
  );
}

export default Button;
