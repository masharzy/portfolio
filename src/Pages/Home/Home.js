import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Home = () => {
  return (
    <div className='h-screen lg:h-screen md:h-auto py-5 lg:py-0 flex flex-col justify-center bg-[url("https://wpocean.com/html/tf/elito-live/assets/images/slider/slide-1.jpg")] bg-cover lg:pl-40 px-4 relative'>
      <div className="absolute bg-[#313131] left-0 right-0 top-0 bottom-0 opacity-40"></div>
      <div className="banner-body z-30 lg:w-[50%]">
        <h2 className="text-white text-5xl lg:text-8xl font-bold">
          <span className="text-secondary text-3xl lg:text-6xl">Hello,</span>
          <br />I Am Sharzy.
        </h2>
        <h4 className="text-[#59C378] text-2xl lg:text-4xl font-semibold my-4">
          Frontend Developer
        </h4>
        <p className="text-white mb-3">
          Hello, I'm Mahdy Abrar Sharzy, a passionate web developer. I develop
          web applications. My core skill is based on JavaScript and I love to
          do most things using JavaScript.
        </p>
        <div className="content">
          <a  rel="noreferrer" target="_blank" href="https://drive.google.com/file/d/17pUeljy2Q7uaG6yIWVMQG5BgOA1tAQSe/view" className="btn btn-primary text-white px-10 rounded-full">
            Get Resume <FontAwesomeIcon className="ml-2" icon={faArrowRight} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
