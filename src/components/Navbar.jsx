import React from "react";
import Button from "./Button";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import sun from "/sun.svg";
import moon from "/moon.svg";

function Navbar() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <a className="">
          <img className="h-10 w-10 rounded-full" src="/me.jpg" alt="" />
        </a>
      </div>
      <div className="navbar-end flex gap-4">
        <label className="swap swap-rotate w-8 h-8">
          <input
            type="checkbox"
            onChange={handleToggle}
            checked={theme === "light" ? false : true}
          />
          <img src={sun} alt="light" className="w-6 h-6 swap-on" />
          <img src={moon} alt="dark" className="w-6 h-6 swap-off" />
        </label>
        <select
          id="selectLanguage"
          className="select py-1"
          onChange={(e) => changeLanguage(e.target.value)}
        >
          <option value="uz" selected>
            Uzb
          </option>
          <option value="en">Eng</option>
          <option value="ru">Rus</option>
        </select>
        <a
          href="https://app.enhancv.com/share/21f9b147"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button text={t("downloadBtn")} />
        </a>
      </div>
    </div>
  );
}

export default Navbar;
