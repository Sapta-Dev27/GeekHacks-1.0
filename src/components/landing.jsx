import React from "react";
import Spline from "@splinetool/react-spline";

const Home = () => {
  return (
    <main className="relative w-full h-screen -mt-16">
      {/* Spline Background */}
      <div className="absolute inset-0">
        <div className="w-full h-full min-h-[400px] md:min-h-[500px] lg:min-h-[600px] spline-div">
          <Spline
            className="w-full h-full object-contain"
            scene="https://prod.spline.design/RnUyvM4a9P5gpJiG/scene.splinecode"
          />
        </div>
      </div>

      {/* Content Overlay - Centered using flex */}
      <div className="relative h-full w-full flex flex-col items-center justify-center">
        {/* Text Container */}
        <div className="text-center space-y-4 mb-8">
          <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold px-4">
            Unleash Your Creativity
          </h1>
          <p className="text-[#eeeeee9f] text-base md:text-lg lg:text-xl">
            Where Innovation Meets Execution
          </p>
          <p className="text-white text-sm md:text-base lg:text-lg">
            April, 2025 📍Techno Main Salt Lake
          </p>
        </div>

        {/* Button Container */}
        <div className="flex flex-col items-center w-full px-4">
          <button className="bg-purple-700 text-white rounded-md py-2 px-4 w-full max-w-xs md:max-w-sm text-md font-semibold">
            Applications Starting Soon
          </button>
        </div>

        {/* Hider - Positioned at bottom */}
        <div className="absolute bottom-4 right-4 bg-[#00040f] w-[150px] h-[40px]"></div>
      </div>
    </main>
  );
};

export default Home;
