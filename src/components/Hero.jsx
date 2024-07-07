import React from "react";
import { Star, Play } from "lucide-react";

const Hero = () => {
  return (
    <section className="lg:mt-40 md:mt-20 mt-12 relative z-10">
      <div className="flex items-center gap-1 lg:mb-2">
        <Star fill="#FFC63E" strokeWidth={0} className="w-4 lg:w-6" />
        <span className="font-bold text-xs md:text-sm lg:text-base mr-1">
          9.2/10
        </span>
        <p className="uppercase text-[9px] font-medium lg:font-light lg:text-xs">
          Action | Crime | Thriller
        </p>
      </div>
      <h1 className="font-bayon text-3xl md:text-5xl lg:text-7xl">
        The Dark Knight
      </h1>
      <p className="text-xs lg:text-base md:w-[700px] w-[326px] lg:mb-6 lg:mt-3 mb-4 mt-2 font-normal">
        Batman, Lt. Jim Gordon, and District Attorney Harvey Dent form an
        effective alliance against Gotham's criminal organizations. Their
        success is challenged by the Joker, who unleashes chaos across the city.
      </p>
      <div className="flex items-center gap-2 mb-4 lg:mb-6">
        <span className="border border-white rounded py-[3px] px-2 lg:px-3 text-[10px] lg:text-sm">
          PG-13
        </span>
        <p className="text-xs font-medium lg:text-sm">Jul 18, 2008</p>
        <span className="w-1 h-1 rounded-full bg-white"></span>
        <p className="text-xs font-medium lg:text-sm">2h 32m</p>
      </div>
      <button className="bg-primary lg:px-7 lg:py-3 px-5 py-2 rounded-full font-semibold text-sm lg:text-base">
        <span className="flex justify-center items-center animate-pulse">
          <Play fill="#fff" strokeWidth={0} className="w-4 mr-2" />
          Play Trailer
        </span>
      </button>
    </section>
  );
};

export default Hero;
