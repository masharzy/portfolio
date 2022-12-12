import { faFacebook, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Contact = () => {
  return (
    <div className="lg:h-screen lg:mb-0 mb-20 flex flex-col justify-center container mx-auto lg:px-20 px-5 pt-10">
      <h2 className="text-5xl font-extrabold text-white text-center">
        GET IN <span className="text-secondary">TOUCH</span>
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 mt-10 lg:space-x-20">
        <div className="contact-info text-white">
          <h4 className="text-3xl font-bold mb-5">DON'T BE SHY !</h4>
          <p className=" mb-5">
            Feel free to get in touch with me. I am always open to discussing
            new projects, creative ideas or opportunities to be part of your
            visions.
          </p>
          <ul className="leading-7">
            <li className="flex items-center">
              <FontAwesomeIcon
                className="text-secondary text-4xl mr-5"
                icon={faLocationDot}
              />{" "}
              <div className="info">
                <p className="text-gray-500">Address</p>
                <p className="font-semibold">
                  Lahapara, Sonargaon, Narayanganj
                </p>
              </div>
            </li>
            <li className="flex items-center">
              <FontAwesomeIcon
                className="text-secondary text-4xl mr-3"
                icon={faEnvelope}
              />{" "}
              <div className="info">
                <p className="text-gray-500">Email</p>
                <p className="font-semibold">masharzya1@gmail.com</p>
              </div>
            </li>
            <li className="flex items-center">
              <FontAwesomeIcon
                className="text-secondary text-4xl mr-3"
                icon={faPhone}
              />{" "}
              <div className="info">
                <p className="text-gray-500">Phone</p>
                <p className="font-semibold">01639722575</p>
              </div>
            </li>
          </ul>
          <div className="flex mt-5 mb-5">
            <a href="https://facebook.com/masharzy">
              {" "}
              <FontAwesomeIcon
                className="text-white text-3xl bg-slate-900 p-3 rounded-full cursor-pointer mr-3"
                icon={faFacebook}
              />
            </a>
            <a href="https://www.linkedin.com/in/mahdy-abrar-sharzy-764165241">
              {" "}
              <FontAwesomeIcon
                className="text-white text-3xl bg-slate-900 p-3 rounded-full cursor-pointer mr-3"
                icon={faLinkedin}
              />
            </a>
          </div>
        </div>
        <div className="contact-form col-span-2">
          <form
            action="https://getform.io/f/e47465b1-8444-4ecf-9feb-b67fcb88160d"
            method="POST"
          >
            <div className="grid lg:grid-cols-2 grid-cols-1 lg:space-x-3">
              <input
                type="text"
                placeholder="Your Name"
                name="name"
                className="input rounded-full bg-[#252525] mb-5 lg:mb-0"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                name="email"
                className="input rounded-full bg-[#252525]"
                required
              />
            </div>
            <div className="form-control mt-5">
              <input
                type="text"
                placeholder="Subject"
                name="subject"
                className="input rounded-full bg-[#252525]"
                required
              />
            </div>
            <div className="form-control mt-5">
              <textarea
                class="textarea rounded-3xl bg-[#252525]"
                name="message"
                rows={5}
                placeholder="Message"
                required
              ></textarea>
            </div>
            <div className="mt-5">
              <input
                type="submit"
                value="Send Message"
                className="border rounded-full px-6 py-3 cursor-pointer hover:bg-secondary transition-all duration-700 border-secondary text-white"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
