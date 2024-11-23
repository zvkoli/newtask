import React, { useState } from "react";
import Login from "../components/Login";
import { FaMoon } from "react-icons/fa";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div
      style={{ direction: "rtl" }}
      className={`w-full h-screen relative font-iranyekan ${
        darkMode ? "dark" : ""
      }`}
    >
      <div className="w-full h-full dark:bg-[#212121] p-5">
        <div className="absolute top-5 right-5">
          <Login />
        </div>

        <div className="absolute top-3 right-3">
          <button
            onClick={toggleDarkMode}
            className="h-8 w-8 p-2 shadow rounded-full flex flex-row justify-center items-center bg-blue-500 dark:bg-white"
          >
            <FaMoon className="text-white dark:text-yellow-500" />
          </button>
        </div>

        {/* تغییر رنگ پس‌زمینه و متن بر اساس مد */}
        <div
          className={`flex flex-col justify-center items-center gap-2 pt-[18rem] bg-white dark:bg-[#212121]`}
        >
          <p className="text-gray-800 dark:text-white">هوش داده مهتاب</p>
          <p className="text-blue-500 dark:text-blue-300">www.datamoon.ir</p>
        </div>
      </div>
    </div>
  );
}
