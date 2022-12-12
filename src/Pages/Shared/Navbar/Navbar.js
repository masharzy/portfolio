import {
  faDownload,
  faEnvelope,
  faHouse,
  faUser,
  faComments
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useLocation } from "react-router-dom";
import CustomLink from "../CustomLink/CustomLink";
import "./Navbar.css";

const Navbar = () => {
  const location = useLocation();
  const menu = (
    <>
      <div class="tooltip tooltip-left tooltip-primary" data-tip="Home">
        <CustomLink to="/">
          <FontAwesomeIcon icon={faHouse} />
        </CustomLink>
      </div>
      <div class="tooltip tooltip-left tooltip-primary" data-tip="About Me">
        <CustomLink to="/about">
          <FontAwesomeIcon icon={faUser} />
        </CustomLink>
      </div>
      <div class="tooltip tooltip-left tooltip-primary" data-tip="Projects">
        <CustomLink to="/projects">
          <img
            className="w-full"
            src="https://i.ibb.co/Q8dhsD9/project.png"
            alt=""
          />
        </CustomLink>
      </div>
      <div
        class="tooltip tooltip-left tooltip-primary"
        data-tip="Contact With Me"
      >
        <CustomLink to="/contact">
          <FontAwesomeIcon icon={faEnvelope} />
        </CustomLink>
      </div>
      <div
        class="tooltip tooltip-left tooltip-primary"
        data-tip="Blogs"
      >
        <CustomLink to="/blogs">
          <FontAwesomeIcon icon={faComments} />
        </CustomLink>
      </div>
      <div
        class={
          location.pathname === "/"
            ? "tooltip tooltip-left tooltip-info tooltip-open resume-download"
            : "tooltip tooltip-left tooltip-info "
        }
        data-tip="Download Resume"
      >
        <a
          href="https://drive.google.com/u/0/uc?id=17pUeljy2Q7uaG6yIWVMQG5BgOA1tAQSe&export=download"
          className="btn btn-circle btn-info text-white"
        >
          <FontAwesomeIcon icon={faDownload} />
        </a>
      </div>
    </>
  );
  return (
    <>
      <div className="lg:flex items-center h-screen fixed right-5 hidden z-50">
        <ul className="flex flex-col space-y-2">{menu}</ul>
      </div>
      <div className="w-full fixed bottom-0 lg:hidden bg-[#2B2A2A] z-50">
        <ul className="flex space-x-3 w-full justify-center mt-2">
          <div class="tooltip tooltip-top tooltip-primary" data-tip="Home">
            <CustomLink to="/">
              <FontAwesomeIcon icon={faHouse} />
            </CustomLink>
          </div>
          <div class="tooltip tooltip-top tooltip-primary" data-tip="About Me">
        <CustomLink to="/about">
          <FontAwesomeIcon icon={faUser} />
        </CustomLink>
      </div>
          <div class="tooltip tooltip-top tooltip-primary" data-tip="Projects">
            <CustomLink to="/projects">
              <img
                className="w-full"
                src="https://i.ibb.co/Q8dhsD9/project.png"
                alt=""
              />
            </CustomLink>
          </div>
          <div
            class="tooltip tooltip-top tooltip-primary"
            data-tip="Contact With Me"
          >
            <CustomLink to="/contact">
              <FontAwesomeIcon icon={faEnvelope} />
            </CustomLink>
          </div>
          <div
        class="tooltip tooltip-top tooltip-primary"
        data-tip="Blogs"
      >
        <CustomLink to="/blogs">
          <FontAwesomeIcon icon={faComments} />
        </CustomLink>
      </div>
          <div
            class={
              location.pathname === "/"
                ? "tooltip tooltip-top tooltip-info tooltip-open resume-download"
                : "tooltip tooltip-left tooltip-info "
            }
            data-tip="Download Resume"
          >
            <a
              href="https://drive.google.com/u/0/uc?id=17pUeljy2Q7uaG6yIWVMQG5BgOA1tAQSe&export=download"
              className="btn btn-circle btn-info text-white"
            >
              <FontAwesomeIcon icon={faDownload} />
            </a>
          </div>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
