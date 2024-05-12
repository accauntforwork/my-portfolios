import React from "react";
import Button from "./Button";

function Navbar() {
  return (
    <div className="flex justify-between items-center shadow-lg p-4 sticky top-0 z-10 bg-white">
      <img className="h-10 w-10 rounded-full" src="/me.jpg" alt="" />
      <a href="" target="_blank">
        <Button text="Download CS" />
      </a>
    </div>
  );
}

export default Navbar;
