import React from "react";

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <h1 className="text-center text-4xl sm:text-5xl font-bold mb-12 text-white">
        ABOUT <span className="text-purple-600">US</span>
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center lg:divide-x-2">
        {/* Left Section */}
        <div className="flex flex-col items-center lg:items-start">
          <h2 className="text-4xl sm:text-5xl lg:text-5xl font-bold tracking-tight text-center lg:text-left mb-8">
            <div className="inline-flex items-center">
              <span className="font-mono font-bold text-white mr-4 mt-2 ml-2">
                GeekHacks
              </span>
              <span className="font-sans font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#5C24FF] to-[#D94FD5] ml-2">
                1.0
              </span>
            </div>
          </h2>
          <img
            src="/assets/images/Spectrum1.0.png"
            alt="Not Found"
            className="w-[300px] mt-6 lg:mt-0 mb-8"
          />
          <button className="btn-discord ml-8 mt-2 bg-purple-700 text-white px-4 py-2 rounded-md">
            Join Our Discord Channel
          </button>
        </div>

        {/* Right Section (Text) */}
        <div className="space-y-6 ml-5 text-base sm:text-lg lg:px-5 text-center lg:text-left">
          <p className="text-white text-lg leading-relaxed">
            Join in with us on a{" "}
            <span className="font-bold text-purple-500">36-hour journey</span>{" "}
            of innovation and imagination, but be warned—it's going to be a
            rough three-day ride! We shall start the journey with an intense
            round of reasoning and validation with peers, followed by late-night
            coding and testing. Finally, the journey ends with a thorough
            validation by the best.
            <br />
            <br />
            Come along with us on{" "}
            <span className="font-bold text-purple-500">GeekHacks 1.0 </span>,
            organized by the{" "}
            <span className="font-bold text-purple-500">
              GDG On Campus TMSL .{" "}
            </span>
            A{" "}
            <span className="font-bold text-purple-500">36-hour marathon</span>{" "}
            of executing unique ideas. Choose from the seven tracks or create
            your own under the Slash track and turn your idea into reality. Get
            yourself tested beyond limits by the best in the industry.
            <br />
            <br />
            <span className="text-xl font-semibold text-purple-600">
              Let's Code, Commit, and Create!
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
