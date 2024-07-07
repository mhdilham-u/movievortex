import React, { useEffect, useState } from "react";
import { getMovieUpcomingDataList } from "../api.js";
import Slider from "react-slick";

const Upcoming = () => {
  const [movieUpcoming, setMovieUpcoming] = useState([]);
  useEffect(() => {
    getMovieUpcomingDataList().then((result) => {
      setMovieUpcoming(result);
    });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
  };
  return (
    <section className="lg:my-20 my-10">
      <Slider {...settings}>
        {/* {movieUpcoming.slice(0, 4).map((item, index) => { */}
        {movieUpcoming.slice(0, 5).map((item, index) => {
          return (
            <div className="relative backdrop-shadow-2 w-1/4" key={index}>
              <img
                src={`${import.meta.env.VITE_API_IMAGE_URL}/${
                  item.backdrop_path
                }`}
                className="rounded-lg"
                alt={item.title}
              />
              <div className="absolute bottom-0 lg:p-8 p-2 text-xs md:text-2xl font-medium z-10">
                <div className="flex gap-2 items-center">
                  <span className="text-red-600 font-bold lg:text-sm text-xs border border-red-700 px-2 py-0.5">
                    UPCOMING!
                  </span>{" "}
                  <span className="font-extralight">|</span>
                  <h1 className="font-bayon lg:text-4xl text-xl">
                    {item.title}
                  </h1>
                </div>
                <p className="lg:text-base font-normal text-xs text-neutral-300 lg:mt-3 mt-0.5 lg:line-clamp-none line-clamp-2">
                  {item.overview}
                </p>
              </div>
            </div>
          );
        })}
      </Slider>
      {/* <div className="relative">
        <img src={placeholder} className="rounded-2xl" alt="" />
        <h2 className="absolute bottom-0 p-4 text-xs font-semibold">
          Upcoming
        </h2>
      </div> */}
    </section>
  );
};

export default Upcoming;
