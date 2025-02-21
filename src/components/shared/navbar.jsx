import React, { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll"; // ✅ Use react-scroll instead of react-router-dom
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { IoLogoInstagram } from "react-icons/io5";
import { FiGithub } from "react-icons/fi";
import { SiLinkedin } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import "../../styles/navbar.css";

const navbarItems = [
  "Home",
  "Timeline",
  "Tracks",
  "Sponsors",
  "Prizes",
  "Judges",
  "Team",
  "FAQs",
];

const Navbar = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [menuOpen, setMenuOpen] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current - (scrollYProgress.getPrevious() || 0);
      setVisible(scrollYProgress.get() < 0.05 || direction < 0);
    }
  });

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const navbar = document.querySelector(".navbar");
    const handleMouseMove = (e) => {
      if (!navbar) return;
      const rect = navbar.getBoundingClientRect();
      setCursorPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    if (navbar) {
      navbar.addEventListener("mousemove", handleMouseMove);
      navbar.addEventListener("mouseenter", () => setIsHovered(true));
      navbar.addEventListener("mouseleave", () => setIsHovered(false));
    }

    return () => {
      if (navbar) {
        navbar.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  return (
    <>
      {/* Main Navbar */}
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 1, y: -100 }}
          animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
          transition={{ duration: 0.2 }}
          className="navbar"
        >
          {isHovered && !isMobile && (
            <div
              className="cursor"
              style={{ left: `${cursorPos.x}px`, top: `${cursorPos.y}px` }}
            />
          )}

          <div className="navbar-box">
            {/* Logo Section */}
            <div className="navbar-logo-section">
              <a href="/" className="text-lg font-bold">
                GeekHacks 1.0
              </a>
              <img
                src="/assets/images/Spectrum1.0.png"
                alt="Logo"
                className="w-10 h-10 ml-2"
              />
            </div>

            {/* Desktop Navbar Links */}
            {!isMobile && (
              <>
                <ul className="navbar-links">
                  {navbarItems.map((item, index) => (
                    <li key={index}>
                      <ScrollLink
                        to={item.toLowerCase()}
                        smooth={true}
                        duration={500}
                        offset={-80} // Adjust for navbar height
                        className="hover:text-blue-500 transition cursor-pointer"
                      >
                        {item}
                      </ScrollLink>
                    </li>
                  ))}
                </ul>

                {/* Social Media Icons */}
                <div className="navbar-auths flex space-x-3 text-xl">
                  <a href="#" className="hover:text-gray-300 transition">
                    <FiGithub />
                  </a>
                  <a href="#" className="hover:text-blue-600 transition">
                    <SiLinkedin />
                  </a>
                  <a href="#" className="hover:text-gray-300 transition">
                    <FaXTwitter />
                  </a>
                  <a href="#" className="hover:text-pink-400 transition">
                    <IoLogoInstagram />
                  </a>
                </div>
              </>
            )}

            {/* Mobile Hamburger Menu */}
            {isMobile && (
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="hamburger-menu"
              >
                <GiHamburgerMenu size={24} />
              </button>
            )}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isMobile && menuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="mobile-menu"
          >
            <button onClick={() => setMenuOpen(false)} className="close-menu">
              ✖
            </button>
            <ul className="mobile-menu-links">
              {navbarItems.map((item, index) => (
                <li key={index}>
                  <ScrollLink
                    to={item.toLowerCase()}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    className="hover:text-blue-500 transition cursor-pointer"
                    onClick={() => setMenuOpen(false)} // Close menu on click
                  >
                    {item}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
