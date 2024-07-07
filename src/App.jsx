import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HotMovies from "./components/HotMovies";
import Upcoming from "./components/Upcoming";
import DiscoverMovies from "./components/DiscoverMovies";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <div className="w-full lg:h-[828px] md:h-[528px] h-[428px] relative bg-hero-image bg-no-repeat bg-cover lg:bg-top bg-center backdrop-shadow">
        <div className="container mx-auto lg:px-[60px]">
          <Navbar />
          <Hero />
        </div>
      </div>
      <div className="container mx-auto lg:px-[60px]">
        <HotMovies />
        <Upcoming />
        <DiscoverMovies />
        <Footer />
      </div>
    </>
  );
};

export default App;
