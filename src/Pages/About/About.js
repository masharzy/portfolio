import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import ProfilePicture from "../../images/pp.png";
import "./About.css";

const About = () => {
  return (
    <div className="container mx-auto pt-10 mb-20">
      <h2 className="text-white text-5xl text-center font-[900]">
        ABOUT <span className="text-secondary">ME</span>
      </h2>
      <div class="hero mb-20 mt-10">
        <div class="hero-content flex-col-reverse justify-between lg:flex-row-reverse lg:px-40">
          <div className="text-left">
            <p class="py-6 text-base">
              I'm a Front-End Developer located in Bangladesh. I have a serious
              passion for UI effects, animations and creating intuitive, dynamic
              user experiences.
              <br />
              <br />
              Well-organised person, problem solver, independent employee with
              high attention to detail. outdoor activities, TV series and
              English literature.
              <br />
              <br />
              Interested in the entire frontend spectrum and working on
              ambitious projects with positive people.
            </p>
            <a href="https://drive.google.com/u/0/uc?id=17pUeljy2Q7uaG6yIWVMQG5BgOA1tAQSe&export=download" class="btn btn-secondary text-white px-10 rounded-full">
              Download Resume
              <FontAwesomeIcon className="ml-2" icon={faArrowRight} />
            </a>
          </div>
          <img
            src={ProfilePicture}
            class="w-96 h-96 object-cover block mr-10"
            alt=""
          />
        </div>
      </div>
      <h1 class="text-4xl font-bold mt-2 text-white text-center my-10">My Skills</h1>
      <div className="grid lg:grid-cols-4 grid-cols-1 space-y-10 px-40">
        <div className="flex flex-col justify-center items-center">
          <div
            className="radial-progress after:hidden text-secondary font-bold text-xl before:bg-[#252525]"
            style={{ "--value": 98, "--size": "8rem", "--thickness": "10px" }}
          >
            98%
          </div>
          <p className="text-center my-4">HTML</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div
            className="radial-progress after:hidden text-secondary font-bold text-xl before:bg-[#181818]"
            style={{ "--value": 95, "--size": "8rem", "--thickness": "10px" }}
          >
            95%
          </div>
          <p className="text-center my-4">CSS</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div
            className="radial-progress after:hidden text-secondary font-bold text-xl before:bg-[#181818]"
            style={{ "--value": 96, "--size": "8rem", "--thickness": "10px" }}
          >
            96%
          </div>
          <p className="text-center my-4">TailwindCSS</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div
            className="radial-progress after:hidden text-secondary font-bold text-xl before:bg-[#181818]"
            style={{ "--value": 90, "--size": "8rem", "--thickness": "10px" }}
          >
            90%
          </div>
          <p className="text-center my-4">JavaScript</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div
            className="radial-progress after:hidden text-secondary font-bold text-xl before:bg-[#181818]"
            style={{ "--value": 94, "--size": "8rem", "--thickness": "10px" }}
          >
            94%
          </div>
          <p className="text-center my-4">ReactJS</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div
            className="radial-progress after:hidden text-secondary font-bold text-xl before:bg-[#181818]"
            style={{ "--value": 60, "--size": "8rem", "--thickness": "10px" }}
          >
            60%
          </div>
          <p className="text-center my-4">NodeJS</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div
            className="radial-progress after:hidden text-secondary font-bold text-xl before:bg-[#181818]"
            style={{ "--value": 70, "--size": "8rem", "--thickness": "10px" }}
          >
            70%
          </div>
          <p className="text-center my-4">ExpressJS</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div
            className="radial-progress after:hidden text-secondary font-bold text-xl before:bg-[#181818]"
            style={{ "--value": 68, "--size": "8rem", "--thickness": "10px" }}
          >
            68%
          </div>
          <p className="text-center my-4">MongoDB</p>
        </div>
      </div>
    </div>
  );
};

export default About;
