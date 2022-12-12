import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Modal.css";

// import required modules
import { Pagination, Navigation } from "swiper";

const Modal = ({ details }) => {
  const { title, description, liveLink, clientSideCode, serverSideCode, imageOne, imageTwo, imageThree } =
    details;
  return (
    <div>
      <input type="checkbox" id="my-modal" class="modal-toggle" />
      <div class="modal">
        <div class="modal-box w-11/12 max-w-5xl py-10 cursor-default">
          <label
            for="my-modal"
            class="btn btn-sm btn-circle absolute right-4 top-4"
          >
            ✕
          </label>
      <div className="flex flex-wrap space-x-10 justify-center items-center">
        <div className="project-images">
        <Swiper
        spaceBetween={30}
        hashNavigation={{
          watchState: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        loop={true}
        className="project-details-slider"
      >
        <SwiperSlide data-hash="slide1"><img className="w-full rounded-md" src={imageOne} alt="" /></SwiperSlide>
        <SwiperSlide data-hash="slide2"><img className="w-full rounded-md" src={imageTwo} alt="" /></SwiperSlide>
        <SwiperSlide data-hash="slide2"><img className="w-full rounded-md" src={imageThree} alt="" /></SwiperSlide>
      </Swiper>
        </div>
        <div className="project-info">
        <h3 class="font-bold text-lg">{title}</h3>
          <p class="py-4">{description}</p>
          <p>
            Live Link:{" "}
            <a className="text-blue-600 link link-hover" href={liveLink}>
              {liveLink}
            </a>
          </p>
          <p>
            {serverSideCode ? "Client Side Code Link: " : "Code Link: "} 
            <a className="text-blue-600 link link-hover" href={clientSideCode}>
              {clientSideCode}
            </a>
          </p>
          <p>
            {serverSideCode ? "Server Side Code Link: " : ""}
            <a className="text-blue-600 link link-hover" href={serverSideCode}>
              {serverSideCode}
            </a>
          </p>
        </div>
      </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
