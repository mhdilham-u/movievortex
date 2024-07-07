import { Search, Star } from "lucide-react";
import React, { useEffect, useState } from "react";
import { getMovieNowPlaying, searchMovie } from "../api.js";

const DiscoverMovies = () => {
  const [movieNowPlaying, setMovieNowPlaying] = useState([]);
  // const [search, setSearch] = useState();

  useEffect(() => {
    getMovieNowPlaying().then((result) => {
      setMovieNowPlaying(result);
    });
  }, []);

  const search = async (target) => {
    if (target.length > 3) {
      const query = await searchMovie(target);
      setMovieNowPlaying(query.results);
    }
    // searchMovie(q).then((result) => {
    //   setSearch(result);
    // });
    // const query = searchMovie(q);
  };
  return (
    <section className="lg:my-10 my-16">
      <h1 className="font-bayon text-xl md:text-4xl">Find a Movie's 🎬</h1>
      <div className="flex relative items-center mt-3 lg:mt-5">
        <Search className="absolute w-4" color="#DADADA" />
        <input
          type="text"
          className="w-full py-3 pl-7 text-sm md:text-base focus:outline-none border-b border-[#575757]"
          placeholder="Search by title..."
          onChange={({ target }) => search(target.value)}
        />
      </div>
      <div className="grid grid-cols-3 lg:grid-cols-6 justify-items-stretch mt-5 lg:mt-8 gap-3">
        {movieNowPlaying.slice(0, 18).map((data, index) => {
          return (
            <div
              className="relative group hover:scale-105 transition-all duration-300"
              key={index}
            >
              <img
                src={`${import.meta.env.VITE_API_IMAGE_URL}/${
                  data.poster_path
                }`}
                // w-[163px] h-[204px]
                className=" rounded-lg group-hover:opacity-30 transition-all"
                alt=""
              />
              <a
                href=""
                className="hidden lg:text-sm text-[10px] text-nowrap border border-white hover:bg-white hover:text-black transition-all py-1 px-3 rounded-full group-hover:block absolute top-1/3 lg:left-10 left-2 z-50"
              >
                See Details
              </a>
              <div className="mt-2">
                <h2 className="font-semibold lg:text-base text-xs truncate hover:text-clip hover:text-wrap">
                  {data.title}
                </h2>
                <div className="flex items-center gap-1 font-light my-1">
                  <span className="border border-white px-1.5 font-medium lg:px-2 text-[10px] lg:text-sm">
                    {data.original_language.toUpperCase()}
                  </span>
                  <p className="text-[11px] lg:text-sm text-neutral-300">
                    {data.release_date}
                  </p>
                </div>
                <div className="flex items-center gap-1">
                  <Star fill="#FFC63E" strokeWidth={0} className="w-4" />
                  <span className="font-bold text-xs md:text-sm mr-1">
                    {data.vote_average.toFixed(1)}/10
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex items-center mt-6">
        <span className="h-[1px] w-full bg-[#575757] mr-2"></span>
        <a
          className="px-8 py-2 border text-nowrap bg-primary border-primary transition-all duration-300 rounded-full"
          href="#"
        >
          Show more
        </a>
      </div>
    </section>
  );
};

export default DiscoverMovies;
