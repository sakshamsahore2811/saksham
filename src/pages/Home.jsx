import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Socials from "../components/Socials";
import { Link } from "react-router-dom";
import arrow from '../images/arrow.png';
import project1 from '../images/project1.png';
import project2 from '../images/project2.png';
import project3 from '../images/project3.png';

export default function Home() {
  const text = "|";
  const text2 = "<div className={styles.navbar}>";
  const [darkmode, setDarkmode] = useState(false);
  function handleClick() {
    setDarkmode(!darkmode);
  }
  return (
    <>
      <div
        className={
          darkmode ? " bg-white text-slate-900" : "bg-slate-900 text-white" 
        }
      >
        
        <div className="flex text-xl justify-between">
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
              <a href="#projects">Projects</a>
            </div>
            <div className="hover:text-green-700">
              <a href="#socials">Socials</a>
            </div>
            <div className="hover:text-green-700">
              <a href="https://wa.me/9464259511" target="_blank">Whatsapp</a>
            </div>
          </div>
        </div>

        <div className="flex justify-center animate-slideIn">
          <div className="text-4xl font-thin p-48">
            Hi, I am{" "}
            <span className="text-green-700 hover:underline underline-offset-8">
              Saksham
            </span>
            <br />
            <span className="text-2xl font-thin">
              I think, design and build stuff
            </span>
            <br/>
            <span className="">
              <button className="bg-red-500 m-2 text-base text-white font-bold rounded-md p-1">HTML</button>
            </span>
            <span className="">
              <button className="bg-blue-500 m-2 text-base text-white font-bold rounded-md p-1">CSS</button>
            </span>
            <span className="">
              <button className="bg-yellow-500 m-2 text-base text-white font-bold rounded-md p-1">JavaScript</button>
            </span>
            <span className="">
              <button className="bg-green-500 m-2 text-base text-white font-bold rounded-md p-1">ReactJS</button>
            </span>
            <br/>
            <span className="">
              <button className="bg-orange-500 m-2 text-base text-white font-bold rounded-md p-1">ExpressJS</button>
            </span>
            <span className="">
              <button className="bg-blue-300 m-2 text-base text-white font-bold rounded-md p-1">Python</button>
            </span>
            <span className="">
              <button className="bg-violet-500 m-2 text-base text-white font-bold rounded-md p-1">TailwindCSS</button>
            </span>
            <br/>
            <span className="">
              <button className="bg-gray-500 m-2 text-base text-white font-bold rounded-md p-1">SQL</button>
            </span>
            <span className="">
              <button className="bg-black m-2 text-base text-white font-bold rounded-md p-1">Next.js</button>
            </span>
          </div>
          <div className="p-32">
            <div className="font-thin border-white m-6 shadow-slate-300 shadow-md border-2 rounded-md p-3 hover:text-slate-500">
              <a
                href="https://drive.google.com/file/d/1G8cBg6p26-TQCPLX-UBFis-PWpIHWInT/view"
                target="_blank"
              >
                 <div className="flex gap-1 items-center">
                <div>Hire me{" "}</div>
                <div><span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
                    />
                  </svg>
                </span>
                </div>
                <div>| <span className="text-purple-300">Resume</span></div>
                </div>
              </a>
            </div>
            <div className="font-thin  border-white m-6 shadow-slate-300 shadow-md border-2 rounded-md p-3 hover:text-slate-500">
              <a href="https://www.leetcode.com/u/saksham2811" target="_blank">
              <div className="flex gap-1 items-center">
                <div>My coding{" "}</div>
                <div><span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z"
                    />
                  </svg>
                </span>{" "}</div>
                <div>| <span className="text-blue-300">Leetcode</span></div>
                </div>
              </a>
            </div>
            <div className="font-thin border-white m-6 shadow-slate-300 shadow-md border-2 rounded-md p-3 hover:text-slate-500">
              <a href="https://www.instagram.com/sakshamsahore" target="_blank">
                <div className="flex gap-1 items-center">
                <div>My life{" "}</div>
                <div><span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 0 1-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-3.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-1.5A1.125 1.125 0 0 1 18 18.375M20.625 4.5H3.375m17.25 0c.621 0 1.125.504 1.125 1.125M20.625 4.5h-1.5C18.504 4.5 18 5.004 18 5.625m3.75 0v1.5c0 .621-.504 1.125-1.125 1.125M3.375 4.5c-.621 0-1.125.504-1.125 1.125M3.375 4.5h1.5C5.496 4.5 6 5.004 6 5.625m-3.75 0v1.5c0 .621.504 1.125 1.125 1.125m0 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m1.5-3.75C5.496 8.25 6 7.746 6 7.125v-1.5M4.875 8.25C5.496 8.25 6 8.754 6 9.375v1.5m0-5.25v5.25m0-5.25C6 5.004 6.504 4.5 7.125 4.5h9.75c.621 0 1.125.504 1.125 1.125m1.125 2.625h1.5m-1.5 0A1.125 1.125 0 0 1 18 7.125v-1.5m1.125 2.625c-.621 0-1.125.504-1.125 1.125v1.5m2.625-2.625c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125M18 5.625v5.25M7.125 12h9.75m-9.75 0A1.125 1.125 0 0 1 6 10.875M7.125 12C6.504 12 6 12.504 6 13.125m0-2.25C6 11.496 5.496 12 4.875 12M18 10.875c0 .621-.504 1.125-1.125 1.125M18 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m-12 5.25v-5.25m0 5.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125m-12 0v-1.5c0-.621-.504-1.125-1.125-1.125M18 18.375v-5.25m0 5.25v-1.5c0-.621.504-1.125 1.125-1.125M18 13.125v1.5c0 .621.504 1.125 1.125 1.125M18 13.125c0-.621.504-1.125 1.125-1.125M6 13.125v1.5c0 .621-.504 1.125-1.125 1.125M6 13.125C6 12.504 5.496 12 4.875 12m-1.5 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M19.125 12h1.5m0 0c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h1.5m14.25 0h1.5"
                    />
                  </svg>
                </span>{" "}</div>
                <div>| <span className="text-orange-300">Instagram</span></div>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="text-center text-4xl font-thin">About me</div>
        <div className=" pt-10 text-center text-xl font-thin">
          I have always been a keen observer and a doer rather than a thinker,<br/>
          throughout my college and school life, I always tried to learn and implement<br/>
          new things and think of newer ways to acheive better and optimal results,<br/>
          which I now apply to my coding side as well.
        </div>
        <div id="projects" className="text-3xl font-thin text-center pt-20 p-10">
          Projects
          <div className="flex justify-center">
          <div className="p-5 m-5 text-base bg-slate-400 w-fit rounded-md">
            <a href="https://productivo-application.vercel.app/" target="_blank">
            <img src={project1} height={200} width={300}/>
            Productivo AI | Productivity tracking application<br/>
            <span className="text-green-700 font-bold">ReactJS | CSS | JavaScript</span>
            </a>
          </div>
          
          <div className="p-5 m-5 text-base bg-slate-400 w-fit rounded-md">
            <a href="https://github.com/sakshamsahore2811/Face-Secure?tab=readme-ov-file" target="_blank">
            <img src={project2} height={200} width={300}/>
            Face Secure | Face ID security application<br/>
            <span className="text-green-700 font-bold">Python | BootstrapCSS | Tensorflow</span>
            </a>
          </div>
           <div className="p-5 m-5 text-base bg-slate-400 w-fit rounded-md">
            <a href="https://github.com/sakshamsahore2811/Face-Secure?tab=readme-ov-file" target="_blank">
            <img src={project3} height={200} width={300}/>
            Enlister | Job portal application<br/>
            <span className="text-green-700 font-bold">Python | ReactJS | Supabase</span>
            </a>
          </div>
          </div>
        </div>
        <div id="socials" className="pl-10 font-thin text-3xl flex">
          <div><img src={arrow} height={150} width={200}/></div>
          <div className="pt-10 text-green-700 hover:line-through">Let's connect ?</div>
        </div>
        <div className="p-3 font-thin text-base text-center">
          Saksham Sharma 2024 • Have a great day ! • sakshamsahore@gmail.com
        </div>
      </div>

      <Socials />
    </>
  );
}
