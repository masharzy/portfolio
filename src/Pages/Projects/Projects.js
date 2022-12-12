import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "./Projects.css";
import Modal from "./Modal/Modal";
import whatCar from "../../images/whatcar.png";
import doctorsPortal from "../../images/doctors.png";
import { Pagination, Navigation } from "swiper";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Projects = () => {
  const [details, setDetails] = useState({
    title: "",
    description: "",
    liveLink: "",
    clientSideCode: "",
    serverSideCode: "",
    imageOne: "",
    imageTwo: "",
    imageThree: "",
  });
  return (
    <div className="lg:h-screen h-auto py-20 lg:py-0 flex flex-col justify-center">
      <h2 className="text-5xl font-extrabold text-white text-center">
        MY <span className="text-secondary">PROJECTS</span>
      </h2>
      <Swiper
        effect={"coverflow"}
        navigation={true}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        style={{
          "--swiper-pagination-color": "#fff",
        }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        pagination={{
          clickable: true,
        }}
        className="h-[550px]"
        loop={true}
      >
        <SwiperSlide className="w-full">
          <div class="card bg-base-100 shadow-xl">
            <figure>
              <img src="https://i.ibb.co/DMMWqB7/toptool.png" alt="" />
            </figure>
            <div class="card-body">
              <div class="">
                <button class="mr-2 bg-[#FF1D4F] text-white px-4 py-1 rounded-full mb-2">
                  React
                </button>
                <button class="mr-2 bg-[#FF1D4F] text-white px-4 py-1 rounded-full mb-2">
                  React Router
                </button>
                <button class="mr-2 bg-[#FF1D4F] text-white px-4 py-1 rounded-full mb-2">
                  Firebase
                </button>
                <button class="mr-2 bg-[#FF1D4F] text-white px-4 py-1 rounded-full mb-2">
                  Daisy UI
                </button>
                <button class="mr-2 bg-[#FF1D4F] text-white px-4 py-1 rounded-full mb-2">
                  SwiperJs
                </button>
                <button class="mr-2 bg-[#FF1D4F] text-white px-4 py-1 rounded-full mb-2">
                  Heroku
                </button>
              </div>
              <h2 class="card-title my-2">TOPTOOL</h2>
              <div class="card-actions">
                <label
                  for="my-modal"
                  class="btn modal-button btn-primary w-full text-white rounded-full"
                  onClick={() =>
                    setDetails({
                      title: "TOPTOOL",
                      description: (
                        <>
                          <p>This website is for manufacturer company</p>
                          <li>
                            Users can order or cancel unpaid order raw materials
                            like Screw Driver, Hackshaw etc.
                          </li>
                          <li>Stripe payment service integration. </li>
                          <li>
                            An admin can confirm orders, add items, manage
                            items.
                          </li>
                        </>
                      ),
                      liveLink: "https://toptool-10b7d.web.app",
                      clientSideCode:
                        "https://github.com/masharzy/toptool-client",
                      serverSideCode:
                        "https://github.com/masharzy/toptool-server",
                      imageOne: "https://i.ibb.co/DMMWqB7/toptool.png",
                      imageTwo: "https://i.ibb.co/MCJ2Kch/Screenshot-8.png",
                      imageThree: "https://i.ibb.co/HGXYZQg/Screenshot-9.png",
                    })
                  }
                >
                  Details
                </label>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-full">
          <div class="card bg-base-100 shadow-xl">
            <figure>
              <img src="https://i.ibb.co/8b4Pc5H/keepstock.png" alt="" />
            </figure>
            <div class="card-body">
              <div class="">
                <button class="mr-2 bg-indigo-600 text-white px-4 py-1 rounded-full mb-2">
                  React
                </button>
                <button class="mr-2 bg-indigo-600 text-white px-4 py-1 rounded-full mb-2">
                  React Router
                </button>
                <button class="mr-2 bg-indigo-600 text-white px-4 py-1 rounded-full mb-2">
                  Firebase
                </button>
                <button class="mr-2 bg-indigo-600 text-white px-4 py-1 rounded-full mb-2">
                  SwiperJs
                </button>
              </div>
              <h2 class="card-title my-2">Keep Stock</h2>
              <div class="card-actions">
                <label
                  for="my-modal"
                  class="btn modal-button btn-primary w-full text-white rounded-full"
                  onClick={() =>
                    setDetails({
                      title: "Keep Stock",
                      description: (
                        <>
                          <p>
                            This is an inventory management website for an
                            grocery store
                          </p>
                          <li>
                            Admin can add items, delete items, add or deliver a
                            quantity of items.
                          </li>
                          <li>
                            If a user is not logged in, users can't add items,
                            delete items and others.
                          </li>
                          <li>
                            If a user is logged in, user can update a tool stock
                            quantity
                          </li>
                        </>
                      ),
                      liveLink: "https://keep-stock-masharzy.web.app",
                      clientSideCode:
                        "https://github.com/masharzy/keep-stock-client",
                      serverSideCode:
                        "https://github.com/masharzy/keep-stock-server",
                      imageOne: "https://i.ibb.co/8b4Pc5H/keepstock.png",
                      imageTwo: "https://i.ibb.co/dW6vfHh/Screenshot-10.png",
                      imageThree: "https://i.ibb.co/Bf0pMpj/Screenshot-11.png",
                    })
                  }
                >
                  Details
                </label>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-full">
          <div class="card bg-base-100 shadow-xl">
            <figure>
              <img src="https://i.ibb.co/5j8DgQN/onegym.png" alt="" />
            </figure>
            <div class="card-body">
              <div class="">
                <button class="mr-2 bg-success text-white px-4 py-1 rounded-full mb-2">
                  React
                </button>
                <button class="mr-2 bg-success text-white px-4 py-1 rounded-full mb-2">
                  React Router
                </button>
                <button class="mr-2 bg-success text-white px-4 py-1 rounded-full mb-2">
                  Bootstrap
                </button>
                <button class="mr-2 bg-success text-white px-4 py-1 rounded-full mb-2">
                  SwiperJs
                </button>
              </div>
              <h2 class="card-title my-2">ONEGYM</h2>
              <div class="card-actions">
                <label
                  for="my-modal"
                  class="btn modal-button btn-primary w-full text-white rounded-full"
                  onClick={() =>
                    setDetails({
                      title: "ONEGYM",
                      description: (
                        <>
                          <p>
                            This website is made for those who want to sell
                            their gym services.
                          </p>
                          <li>If users not logged in user can't checkout.</li>
                          <li>In this website has a blog page.</li>
                          <li>
                            If user is logged in user can log out by clicking
                            'Log Out' Button
                          </li>
                        </>
                      ),
                      liveLink: "https://onegym-f75b6.web.app",
                      clientSideCode: "https://github.com/masharzy/onegym",
                      imageOne: "https://i.ibb.co/5j8DgQN/onegym.png",
                      imageTwo: "https://i.ibb.co/f1HpVKj/Screenshot-12.png",
                      imageThree: "https://i.ibb.co/myFzxpd/Screenshot-13.png",
                    })
                  }
                >
                  Details
                </label>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-full">
          <div class="card bg-base-100 shadow-xl">
            <figure>
              <img src={whatCar} alt="" />
            </figure>
            <div class="card-body">
              <div class="">
                <button class="mr-2 bg-error text-white px-4 py-1 rounded-full mb-2">
                  React
                </button>
                <button class="mr-2 bg-error text-white px-4 py-1 rounded-full mb-2">
                  React Router
                </button>
                <button class="mr-2 bg-error text-white px-4 py-1 rounded-full mb-2">
                  Bootstrap
                </button>
                <button class="mr-2 bg-error text-white px-4 py-1 rounded-full mb-2">
                  Rechart
                </button>
                <button class="mr-2 bg-error text-white px-4 py-1 rounded-full mb-2">
                  Font Awesome
                </button>
              </div>
              <h2 class="card-title my-2">What Car</h2>
              <div class="card-actions">
                <label
                  for="my-modal"
                  class="btn modal-button btn-primary w-full text-white rounded-full"
                  onClick={() =>
                    setDetails({
                      title: "What Car",
                      description: (
                        <>
                          <p>This website is made for review a car.</p>
                          <li>
                            In the home page showing 3 reviews from 10+ reviews
                          </li>
                          <li>In the Dashboard chart by Rechart</li>
                          <li>In this website has a blog page.</li>
                        </>
                      ),
                      liveLink: "https://what-car-masharzy.netlify.app",
                      clientSideCode: "https://github.com/masharzy/what-car",
                      imageOne: whatCar,
                      imageTwo: "https://i.ibb.co/NS6qRtM/Screenshot-14.png",
                      imageThree: "https://i.ibb.co/F514JDW/Screenshot-15.png",
                    })
                  }
                >
                  Details
                </label>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-full">
          <div class="card bg-base-100 shadow-xl">
            <figure>
              <img src={doctorsPortal} alt="" />
            </figure>
            <div class="card-body">
              <div class="">
                <button class="mr-2 bg-info text-white px-4 py-1 rounded-full mb-2">
                  React
                </button>
                <button class="mr-2 bg-info text-white px-4 py-1 rounded-full mb-2">
                  React Router
                </button>
                <button class="mr-2 bg-info text-white px-4 py-1 rounded-full mb-2">
                  TailwindCSS
                </button>
                <button class="mr-2 bg-info text-white px-4 py-1 rounded-full mb-2">
                  Stripe
                </button>
                <button class="mr-2 bg-info text-white px-4 py-1 rounded-full mb-2">
                  Daisy UI
                </button>
              </div>
              <h2 class="card-title my-2">Doctor's Portal</h2>
              <div class="card-actions">
                <label
                  for="my-modal"
                  class="btn modal-button btn-primary w-full text-white rounded-full"
                  onClick={() =>
                    setDetails({
                      title: "Doctor's Portal",
                      description: (
                        <>
                          <p>This website is made for doctor clinic</p>
                          <li>User can book an appointment.</li>
                          <li>User can pay for appointment with stripe.</li>
                          <li>
                            An admin can manage users, doctors and add a doctor.
                          </li>
                        </>
                      ),
                      liveLink: "https://doctors-portal-a7ec6.web.app/",
                      clientSideCode:
                        "https://github.com/masharzy/doctors-portal-client",
                      serverSideCode:
                        "https://github.com/masharzy/doctors-portal-server",
                      imageOne: doctorsPortal,
                      imageTwo: "https://i.ibb.co/NYJxXcT/Screenshot-16.png",
                      imageThree: "https://i.ibb.co/6cK8LDN/Screenshot-17.png",
                    })
                  }
                >
                  Details
                </label>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <Modal details={details}></Modal>
    </div>
  );
};

export default Projects;
