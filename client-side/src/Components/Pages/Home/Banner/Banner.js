import { Toolbar } from "@mui/material";
import React from "react";
import Typewriter from "typewriter-effect";
import "./Banner.css";

const Banner = () => {
  return (
    <div>
      <section id="hero" className="d-flex flex-column justify-content-center">
        <Toolbar />
        <div data-aos="fade-up" className="hero-container container ">
          <h1 className="banner-logo">Shajibul Alam Shihab</h1>
          <h1 className="banner-skills">
            <span>Have skills of </span>
            <span className="skills">
              <Typewriter
                options={{
                  autoStart: true,
                  loop: true,
                  delay: 90,
                  strings: [
                    "JavaScript",
                    "React.js",
                    "HTML",
                    "CSS",
                    "C (BASIC)",
                    "C++ With OOP",
                    "Java",
                    "MongoDB",
                    "MySQL",
                  ],
                }}
              ></Typewriter>
            </span>
          </h1>
        </div>
      </section>
    </div>
  );
};

export default Banner;
