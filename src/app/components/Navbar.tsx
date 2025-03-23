"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Models", path: "/models" },
    { name: "Pricing", path: "/pricing" },
    { name: "About Us", path: "/about-us" },
    { name: "Contact Us", path: "/contact-us" },
    { name: "Custom Models", path: "/custom-models" },
  ];

  return (
    <div className="absolute top-2 w-full px-6 py-4 bg-transparent">
      <div className="flex items-center justify-between">
        {/* Logo on the Left */}
        <Image
          src={require("../../../public/logo.jpg")}
          alt="logo"
          width={48}
          height={48}
        />

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex flex-1 justify-center">
          <ul className="flex space-x-6">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.path}
                  className="text-white hover:text-blue-600 transition duration-300"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button (Hamburger) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Login & Get Started Buttons on the Right (Hidden in Mobile) */}
        <div className="hidden md:flex ml-auto space-x-4">
          <Link
            href="/login"
            className="text-white border border-white px-4 py-2 rounded-lg hover:text-blue-600 transition duration-300"
          >
            Login
          </Link>
          <Link
            href="/get-started"
            className="bg-white text-[#05152C] px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Get Started Now
          </Link>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#05152C] absolute top-full left-0 w-full shadow-md">
          <ul className="flex flex-col items-center space-y-4 py-4">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.path}
                  className="text-white hover:text-blue-600 transition duration-300"
                  onClick={() => setIsOpen(false)} // Close menu when a link is clicked
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <hr className="w-3/4 border-gray-600" />
            {/* Mobile Buttons */}
            <Link
              href="/login"
              className="text-white border border-white px-4 py-2 rounded-lg hover:text-blue-600 transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              Login
            </Link>
            <Link
              href="/get-started"
              className="bg-white text-[#05152C] px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              Get Started Now
            </Link>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
