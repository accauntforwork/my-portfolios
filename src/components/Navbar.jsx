import React from "react";
import Button from "./Button";

function Navbar() {
  return (
    <div className="flex justify-between items-center shadow-lg px-4 py-2 sticky top-0 z-10 bg-white">
      <img className="h-10 w-10 rounded-full" src="/me.jpg" alt="" />

      <div className="flex gap-8 items-center">
        <form class="max-w-sm mx-auto">
          <select
            id="countries"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-4 py-1 "
          >
            <option value="Eng" selected>
              Eng
            </option>
            <option value="Uzb">Uzb</option>
            <option value="Rus">Rus</option>
          </select>
        </form>

        <a href="https://app.enhancv.com/share/21f9b147" target="_blank">
          <Button text="Download CS" />
        </a>
      </div>
    </div>
  );
}

export default Navbar;
