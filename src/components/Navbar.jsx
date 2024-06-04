import React from "react";
import Button from "./Button";
import { useState, useEffect } from "react";

// import logo from "../om-logo.png";
import sun from "/sun.svg";
import moon from "/moon.svg";

function Navbar() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  // update state on toggle
  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  // set theme state in localstorage on mount & also update localstorage on state change
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    // add custom data-theme attribute to html tag required to update theme using DaisyUI
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <a className="">
          <img className="h-10 w-10 rounded-full" src="/me.jpg" alt="" />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <details>
              <summary>Parent</summary>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a>Item 3</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end flex gap-4">
        <label className="swap swap-rotate w-8 h-8">
          <input
            type="checkbox"
            onChange={handleToggle}
            // show toggle image based on localstorage theme
            checked={theme === "light" ? false : true}
          />
          {/* light theme sun image */}
          <img src={sun} alt="light" className="w-6 h-6 swap-on" />
          {/* dark theme moon image */}
          <img src={moon} alt="dark" className="w-6 h-6 swap-off" />
        </label>
        <select className="select py-1">
          <option disabled selected>
            Uzb
          </option>
          <option>Eng</option>
          <option>Rus</option>
        </select>
        <a href="https://app.enhancv.com/share/21f9b147" target="_blank">
          <Button text="Download CS" />
        </a>
      </div>
    </div>
  );
}

export default Navbar;
