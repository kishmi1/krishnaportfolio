"use client";

import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-[#2A2A2A] bg-[#090909]/95 backdrop-blur-md">
<div className="mx-auto max-w-7xl px-5 sm:px-6 md:px-10 lg:px-[5%]">
        {/* Top Navbar */}
        <div className="flex items-center justify-between py-5">

          {/* Logo */}
          <a
            href="#home"
            onClick={closeMenu}
            className="text-2xl font-bold tracking-[-1px] text-[#F5F5F0] md:text-[27px]"
          >
            Krishna<span className="text-[#F47B20]">.</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex lg:gap-10">

            <a
              href="#home"
              className="text-[15px] font-medium text-[#999] transition-colors duration-300 hover:text-[#F47B20]"
            >
              Home
            </a>

            <a
              href="#about"
              className="text-[15px] font-medium text-[#999] transition-colors duration-300 hover:text-[#F47B20]"
            >
              About
            </a>

            <a
              href="#skills"
              className="text-[15px] font-medium text-[#999] transition-colors duration-300 hover:text-[#F47B20]"
            >
              Skills
            </a>

            <a
              href="#projects"
              className="text-[15px] font-medium text-[#999] transition-colors duration-300 hover:text-[#F47B20]"
            >
              Projects
            </a>

            <a
              href="#experience"
              className="text-[15px] font-medium text-[#999] transition-colors duration-300 hover:text-[#F47B20]"
            >
              Experience
            </a>

            <a
              href="#contact"
              className="ml-2 bg-[#F47B20] px-6 py-3 text-[15px] font-semibold text-black transition-all duration-300 hover:bg-[#FF9638]"
            >
              Contact
            </a>

          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-10 w-10 items-center justify-center border border-[#2A2A2A] text-[#F5F5F0] transition-all duration-300 hover:border-[#F47B20] hover:text-[#F47B20] md:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <span className="text-xl">
              {menuOpen ? "×" : "☰"}
            </span>
          </button>

        </div>

        {/* Mobile Navigation */}
        <div
          className={`overflow-hidden transition-all duration-300 md:hidden ${
            menuOpen
              ? "max-h-[500px] border-t border-[#2A2A2A] pb-5 pt-4 opacity-100"
              : "max-h-0 opacity-0"
          }`}
        >

          <div className="flex flex-col">

            <a
              href="#home"
              onClick={closeMenu}
              className="border-b border-[#1F1F1F] py-4 text-sm font-medium text-[#999] transition-colors hover:text-[#F47B20]"
            >
              Home
            </a>

            <a
              href="#about"
              onClick={closeMenu}
              className="border-b border-[#1F1F1F] py-4 text-sm font-medium text-[#999] transition-colors hover:text-[#F47B20]"
            >
              About
            </a>

            <a
              href="#skills"
              onClick={closeMenu}
              className="border-b border-[#1F1F1F] py-4 text-sm font-medium text-[#999] transition-colors hover:text-[#F47B20]"
            >
              Skills
            </a>

            <a
              href="#projects"
              onClick={closeMenu}
              className="border-b border-[#1F1F1F] py-4 text-sm font-medium text-[#999] transition-colors hover:text-[#F47B20]"
            >
              Projects
            </a>

            <a
              href="#experience"
              onClick={closeMenu}
              className="border-b border-[#1F1F1F] py-4 text-sm font-medium text-[#999] transition-colors hover:text-[#F47B20]"
            >
              Experience
            </a>

            <a
              href="#contact"
              onClick={closeMenu}
              className="mt-4 bg-[#F47B20] px-5 py-3.5 text-center text-sm font-semibold text-black transition-colors hover:bg-[#FF9638]"
            >
              Contact
            </a>

          </div>

        </div>

      </div>
    </nav>
  );
}
