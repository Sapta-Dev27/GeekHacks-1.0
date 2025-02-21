import { FaTwitter, FaGithub, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="footer mt-24 px-4 w-full min-h-[710px] md:min-h-[200px] overflow-auto">
      {/* Line Separator */}
      <div className="footer-line w-[60%] h-[1px] mx-auto bg-purple-400"></div>

      {/* Footer Content */}
      <div className="footer-content flex flex-wrap justify-center items-start text-center md:text-left md:flex-row gap-12 md:gap-32 mt-8">
        {/* Logo Section */}
        <div className="footer-image">
          <img
            src="/assets/images/Spectrum1.0.png"
            alt="Not Found"
            className="w-[180px] md:w-[160px] sm:w-[100px] mx-auto"
          />
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <div className="footer-links-content">
            <div className="font-bold text-purple-700 text-2xl">
              Quick Links
            </div>
            <div className="flex flex-col gap-2 mt-4">
              {[
                "About Us",
                "Timeline",
                "Tracks",
                "Sponsors",
                "Prizes",
                "Judges",
              ].map((item, index) => (
                <a
                  key={index}
                  href={`/${item.toLowerCase().replace(/\s/g, "")}`}
                  className="text-sm font-medium text-white transition hover:text-blue-500"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Socials */}
        <div className="footer-socials">
          <div className="footer-links-content">
            <div className="font-bold text-white text-2xl">Socials</div>
            <div className="flex justify-center md:justify-start gap-4 mt-4 text-purple-700 text-2xl">
              <a href="/about" className="hover:text-blue-500">
                <FaTwitter />
              </a>
              <a href="/teams" className="hover:text-blue-500">
                <FaGithub />
              </a>
              <a href="/events" className="hover:text-blue-500">
                <FaInstagram />
              </a>
              <a href="/blogs" className="hover:text-blue-500">
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Rights */}
      <div className="footer-rights mb-6 mt-8">
        <p className="text-center text-sm font-light text-gray-500">
          Made with <span className="text-red-600">❤</span>, Made for GeekHacks 1.0
        </p>
      </div>
    </div>
  );
}
