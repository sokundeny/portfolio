"use client";

import Link from 'next/link';
import React, { useState, useRef, useEffect } from 'react';

interface NavItem {
  name: string;
  url: string;
}

const navItems: NavItem[] = [
  { name: "About Me", url: "#aboutme" },
  { name: "My Tech Stack", url: "#tech" },
  { name: "My Work", url: "#work" },
  { name: "Contact Me", url: "#contact" },
];

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden"; // Prevent background scroll
    } else {
      document.body.style.overflow = ""; // Restore scroll
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.body.style.overflow = ""; // Cleanup on unmount
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <nav className="fixed top-0 left-0 w-full z-20 backdrop-blur-md bg-white/0.5">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6 lg:px-8">
        <h1 className="text-primary text-2xl font-bold">SOKUN DENY</h1>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-12">
          {navItems.map((item, index) => (
            <Link key={index} href={item.url}>
              <h2 className="text-text-primary text-lg font-semibold tracking-wide hover:text-text-secondary transition-all duration-300 ease-out cursor-pointer">
                {item.name}
              </h2>
            </Link>
          ))}
        </div>

        {/* Mobile Burger */}
        <div className={`lg:hidden ${isOpen&&"hidden"}`}>
          <button
            className="focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="space-y-1">
              <span
                className={`block h-0.5 w-6 bg-text-primary transition-transform duration-300 ${isOpen ? "rotate-45 translate-y-1" : ""
                  }`}
              ></span>
              <span
                className={`block h-0.5 w-6 bg-text-primary transition-opacity duration-300 ${isOpen ? "opacity-0" : "opacity-100"
                  }`}
              ></span>
              <span
                className={`block h-0.5 w-6 bg-text-primary transition-transform duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
              ></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed h-screen w-screen inset-0 lg:hidden z-10 transition-opacity duration-300 ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
      >
        {/* Transparent overlay to catch outside clicks */}
        <div className="absolute inset-0 backdrop-blur-3xl bg-black/40" />

        {/* Sliding menu */}
        <div
          ref={menuRef}
          className={`absolute top-0 right-0 w-[70%] h-full bg-white/20 backdrop-blur-3xl shadow-lg flex flex-col items-stretch py-6 transition-transform duration-300
            ${isOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          {/* Close Button */}
          <button
            className="self-end mr-4 mb-4 text-text-primary text-2xl font-bold hover:text-text-secondary transition-all"
            onClick={() => setIsOpen(false)}
          >
            &times;
          </button>

          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.url}
              onClick={() => setIsOpen(false)}
            >
              <h2 className="text-center py-4 text-text-primary text-lg font-semibold tracking-wide hover:text-text-secondary transition-all duration-300 cursor-pointer">
                {item.name}
              </h2>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;