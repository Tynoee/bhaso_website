"use client";

import { Button, useMediaQuery } from "@relume_io/relume-ui";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { RxChevronDown } from "react-icons/rx";
import { Link } from "react-router-dom";

const useRelume = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 991px)");
  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const openOnMobileDropdownMenu = () => setIsDropdownOpen((prev) => !prev);
  const openOnDesktopDropdownMenu = () => {
    !isMobile && setIsDropdownOpen(true);
  };
  const closeOnDesktopDropdownMenu = () => {
    !isMobile && setIsDropdownOpen(false);
  };
  const animateMobileMenu = isMobileMenuOpen ? "open" : "close";
  const animateMobileMenuButtonSpan = isMobileMenuOpen
    ? ["open", "rotatePhase"]
    : "closed";
  const animateDropdownMenu = isDropdownOpen ? "open" : "close";
  const animateDropdownMenuIcon = isDropdownOpen ? "rotated" : "initial";
  return {
    toggleMobileMenu,
    openOnDesktopDropdownMenu,
    closeOnDesktopDropdownMenu,
    openOnMobileDropdownMenu,
    animateMobileMenu,
    animateMobileMenuButtonSpan,
    animateDropdownMenu,
    animateDropdownMenuIcon,
  };
};

export function Navbar2() {
  const useActive = useRelume();
  return (
    <section
      id="relume"
      className="z-[999] flex w-full items-center border-b border-green-900 bg-white text-green-900 lg:min-h-18 lg:px-[5%]"
    >
      <div className="mx-auto size-full lg:grid lg:grid-cols-[0.375fr_1fr_0.375fr] lg:items-center lg:justify-between lg:gap-4">
        <div className="flex min-h-16 items-center justify-between px-[5%] md:min-h-18 lg:min-h-full lg:px-0">
          <Link to="/">
            <img
              src="https://www.bhaso.org/images/BHASO-logo-236.png"
              alt="Logo"
              className="h-15 w-auto"
            />
          </Link>
          <div className="flex items-center gap-4 lg:hidden">
            <Button className="bg-green-900 text-white border border-green-900 px-4 py-1" title="Donate" size="sm">
              Donate
            </Button>
            <button
              className="-mr-2 flex size-12 flex-col items-center justify-center lg:hidden"
              onClick={useActive.toggleMobileMenu}
            >
              {/* burger icon */}
              <motion.span className="my-[3px] h-0.5 w-6 bg-green-900" animate={useActive.animateMobileMenuButtonSpan} variants={{
                open: { translateY: 8, transition: { delay: 0.1 } },
                rotatePhase: { rotate: -45, transition: { delay: 0.2 } },
                closed: { translateY: 0, rotate: 0, transition: { duration: 0.2 } }
              }} />
              <motion.span className="my-[3px] h-0.5 w-6 bg-green-900" animate={useActive.animateMobileMenu} variants={{
                open: { width: 0, transition: { duration: 0.1 } },
                closed: { width: "1.5rem", transition: { delay: 0.3, duration: 0.2 } }
              }} />
              <motion.span className="my-[3px] h-0.5 w-6 bg-green-900" animate={useActive.animateMobileMenuButtonSpan} variants={{
                open: { translateY: -8, transition: { delay: 0.1 } },
                rotatePhase: { rotate: 45, transition: { delay: 0.2 } },
                closed: { translateY: 0, rotate: 0, transition: { duration: 0.2 } }
              }} />
            </button>
          </div>
        </div>

        <motion.div
          variants={{
            open: { height: "var(--height-open, 100dvh)" },
            close: { height: "var(--height-closed, 0)" },
          }}
          animate={useActive.animateMobileMenu}
          initial="close"
          exit="close"
          transition={{ duration: 0.4 }}
          className="overflow-hidden px-[5%] text-center lg:flex lg:items-center lg:justify-center lg:px-0 lg:[--height-closed:auto] lg:[--height-open:auto]"
        >
          <Link
            to="/"
            className="block py-3 text-md first:pt-7 lg:px-4 lg:py-2 lg:text-base first:lg:pt-2 hover:text-green-900 transition-colors duration-200"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block py-3 text-md lg:px-4 lg:py-2 lg:text-base hover:text-green-500 transition-colors duration-200"
          >
            About Us
          </Link>
          <Link
            to="/our-work"
            className="block py-3 text-md lg:px-4 lg:py-2 lg:text-base hover:text-green-900 transition-colors duration-200"
          >
            Our Work
          </Link>

          {/* Dropdown */}
          <div
            onMouseEnter={useActive.openOnDesktopDropdownMenu}
            onMouseLeave={useActive.closeOnDesktopDropdownMenu}
          >
            <button
              className="flex w-full items-center justify-center gap-2 py-3 text-md lg:w-auto lg:justify-start lg:px-4 lg:py-2 lg:text-base hover:text-green-700 transition-colors duration-200"
              onClick={useActive.openOnMobileDropdownMenu}
            >
              <span>Get Involved</span>
              <motion.span
                variants={{ rotated: { rotate: 180 }, initial: { rotate: 0 } }}
                animate={useActive.animateDropdownMenuIcon}
                transition={{ duration: 0.3 }}
              >
                <RxChevronDown />
              </motion.span>
            </button>
            <AnimatePresence>
              <motion.nav
                variants={{
                  open: {
                    visibility: "visible",
                    opacity: "var(--opacity-open, 100%)",
                    display: "block",
                    y: 0,
                  },
                  close: {
                    visibility: "hidden",
                    opacity: "var(--opacity-close, 0)",
                    display: "none",
                    y: "var(--y-close, 0%)",
                  },
                }}
                animate={useActive.animateDropdownMenu}
                initial="close"
                exit="close"
                transition={{ duration: 0.2 }}
                className="bg-green-800 text-white lg:absolute lg:z-50 lg:border lg:border-white lg:p-2 lg:[--y-close:25%]"
              >
                <Link
                  to="/get-involved"
                  className="block py-3 text-center lg:px-4 lg:py-2 lg:text-left hover:bg-green-700 hover:text-white transition-colors duration-200"
                >
                  Volunteer
                </Link>
                <Link
                  to="/blog"
                  className="block py-3 text-center lg:px-4 lg:py-2 lg:text-left hover:bg-green-700 hover:text-white transition-colors duration-200"
                >
                  Blog Posts
                </Link>
                <Link
                  to="/contact"
                  className="block py-3 text-center lg:px-4 lg:py-2 lg:text-left hover:bg-green-700 hover:text-white transition-colors duration-200"
                >
                  Contact Us
                </Link>
              </motion.nav>
            </AnimatePresence>
          </div>
        </motion.div>

        <div className="hidden justify-self-end lg:block">
          <Button
            className="bg-green-900 text-white hover:bg-green-600 border border-green-900 px-6 py-2"
            title="Donate"
            size="sm"
          >
            Donate
          </Button>
        </div>
      </div>
    </section>
  );
}
