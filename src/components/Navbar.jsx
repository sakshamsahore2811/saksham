import React, { useState } from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  const text = "|";
  const text2 = "<div className={styles.navbar}>";
  const [darkmode, setDarkmode] = useState(false);
  function handleClick() {
    setDarkmode(!darkmode);
  }
  return (
    <div
      className={
        darkmode
          ? "flex text-xl justify-between bg-slate-900 text-white"
          : "flex text-xl justify-between bg-white text-slate-900"
      }
    >
      <div className="p-3">
        {text2}
        <span className="blinking-cursor">{text}</span>
      </div>

      <div className="flex gap-10 p-3">
        <button onClick={handleClick}>
          {darkmode ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
              />
            </svg>
          )}
        </button>
        <div className="hover:text-green-700">
          <Link to="/work">Work</Link>
        </div>
        <div>
          <Link to="/experience">Experience</Link>
        </div>
        <div>
          <Link to="/guestbook">Guestbook</Link>
        </div>
        <div>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </div>
  );
}
