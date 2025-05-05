import { Link } from "react-router";
import { Hero } from "../../static/images";

const HeroSection = () => {
  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden rounded-b-[50px]">
      <div className="container absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/3 z-20 text-center">
        <h3 className="text-xl font-semibold uppercase text-white drop-shadow-md">
          Welcome to Debating India
        </h3>
        <h2 className="mt-3 mb-7 text-6xl font-bold text-white capitalize leading-tight w-full max-w-[800px] mx-auto drop-shadow-lg">
          Making Indian democracy fit for the 21st century
        </h2>
        <Link
          to="/get-started"
          className="inline-block font-semibold border border-solid border-white bg-white rounded-lg rounded-br-none px-4 py-2 transition duration-500 hover:bg-black hover:text-white"
        >
          Get Started
        </Link>
      </div>

      <div className="relative h-full w-full">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#000000a1] to-transparent z-10 pointer-events-none"></div>
        <img
          src={Hero}
          alt=""
          className="relative w-full h-full object-center object-cover"
        />
      </div>
    </section>
  );
};

export default HeroSection;
