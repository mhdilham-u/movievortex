import Slider from "react-slick";
import { getMovieDataList } from "../api";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import { useRef, useState, useEffect } from "react";

const HotMovies = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  useEffect(() => {
    getMovieDataList().then((result) => {
      setPopularMovies(result);
    });
  }, []);

  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };

  function HotMovieNextArrow() {
    return (
      <button
        onClick={next}
        className={`focus:ring-2 focus:ring-neutral-600 m-1 lg:w-9 w-6 lg:h-9 h-6 flex justify-center items-center rounded-full`}
      >
        <ArrowRight />
      </button>
    );
  }

  function HotMoviePrevArrow() {
    return (
      <button
        onClick={previous}
        className={`focus:ring-2 focus:ring-neutral-600 m-1 lg:w-9 w-6 lg:h-9 h-6 flex justify-center items-center rounded-full`}
      >
        <ArrowLeft />
      </button>
    );
  }

  var settings = {
    dots: false,
    infinite: true,
    speed: 200,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
  };
  return (
    <section>
      <div className="flex justify-between mb-3 lg:mb-5">
        <h1 className="font-bayon text-xl md:text-4xl">Hot Movie Spoils 🔥</h1>
        <div className="flex gap-2">
          <HotMoviePrevArrow />
          <HotMovieNextArrow />
        </div>
      </div>
      <Slider
        ref={(slider) => {
          sliderRef = slider;
        }}
        {...settings}
      >
        {popularMovies.map((item, index) => {
          return (
            <div key={index} className="w-[15%]">
              <img
                src={`${import.meta.env.VITE_API_IMAGE_URL}/${
                  item.poster_path
                }`}
                className="rounded-lg"
                alt=""
              />
              <div className="mt-2">
                <h2 className="font-semibold text-[13px] lg:text-sm truncate">
                  {item.title}
                </h2>
                <p className="text-xs lg:text-sm font-light text-neutral-300 mt-0.5">
                  {item.release_date}
                </p>
                <div className="flex items-center gap-1">
                  <Star fill="#FFC63E" strokeWidth={0} className="w-4" />
                  <span className="font-medium text-xs md:text-sm mr-1">
                    {item.vote_average.toFixed(1)}/10
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </section>
  );
};

export default HotMovies;
