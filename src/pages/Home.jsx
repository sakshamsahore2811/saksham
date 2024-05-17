import React from "react";
import Navbar from "../components/Navbar";
import { Tilt } from "react-tilt";
import ss from "../images/ss.png";
import { motion } from "framer-motion";

export default function Home() {
  const defaultOptions = {
    reverse: false, // reverse the tilt direction
    max: 35, // max tilt rotation (degrees)
    perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1.1, // 2 = 200%, 1.5 = 150%, etc..
    speed: 1000, // Speed of the enter/exit transition
    transition: true, // Set a transition on enter/exit.
    axis: null, // What axis should be disabled. Can be X or Y.
    reset: true, // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)",
    delay: 8 // Easing on enter/exit.
  };
  return (
    <div>
      <Navbar />
      <div className="p-36">
        <div className="flex gap-20">
          <div className="flexitem">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <div className="flex gap-2">
                <div className="text-4xl">Hi, I am</div>{" "}
                <div className="text-purple-400 text-4xl">Saksham Sharma</div>
              </div>
              <div className="text-3xl">A passionate Frontend Developer</div>
              <div className="text-base pt-5">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima{" "}
                <br />
                soluta odit blanditiis, magnam placeat illo voluptatum, dolore
                perferendis
                <br />
                eligendi autem odio! Repellat corporis quas perspiciatis
                debitis,
                <br />
                adipisci labore maiores ea.
              </div>
              <button className="bg-purple-400 text-white p-3 rounded-md mr-3 mt-3">
                <a
                  href="https://www.github.com/sakshamsahore2811"
                  target="_blank"
                >
                  See Projects
                </a>
              </button>
              <button className="bg-white border-2 hover:bg-purple-400 hover:text-white border-purple-400 text-purple-400 p-3 rounded-md mt-3">
                <a
                  href="https://www.linkedin.com/in/saksham-2811"
                  target="_blank"
                >
                  Hire me
                </a>
              </button>
            </motion.div>
          </div>
          <div className="flexitem">
            <Tilt options={defaultOptions} style={{ height: 250, width: 250 }}>
              <div>
                <img src={ss} />
              </div>
            </Tilt>
          </div>
        </div>
      </div>
    </div>
  );
}
