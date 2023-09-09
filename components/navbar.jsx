"use client";

import React, { useState } from "react";
import { navItems } from "@/constants";
import { Link } from "react-scroll";
import { TfiClose } from "react-icons/tfi";
import { SlMenu } from "react-icons/sl";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const toggleMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav
        className="top-0 sticky z-50 flex justify-between md:justify-between items-center md:h-20 mx-auto py-4 px-4 lg:px-8 md:py-8 
      bg-blue-500 backdrop-filter backdrop-blur-lg bg-opacity-10 md:bg-opacity-30 md:border-b firefox:bg-opacity-30"
      >
        <div className="flex justify-center items-center">
          <img
            src="/icon.png"
            alt=""
            className="rounded-full h-12 w-12 xl:mr-8"
          />
          <h1 className="hidden xl:block text-2xl font-medium">
            Simon's Town Country Club
          </h1>
        </div>

        <ul className="hidden md:flex w-fit">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              target="_self"
              rel="noreferrer"
              className={`p-3 lg:p-4 hover:cursor-pointer flex justify-center items-center no-underline hover:underline underline-offset-4`}
            >
              {item.name}
            </a>
          ))}
        </ul>
        <div className="hidden lg:flex">
          <a
            href="https://www.facebook.com/STCountryClub/"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebookF size={30} className="mr-2 hover:cursor-pointer" />
          </a>
          <a
            href="https://www.instagram.com/simonstowncountryclub/"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram size={30} className="mr-2 hover:cursor-pointer" />
          </a>
        </div>
        <SlMenu
          size={20}
          className="md:hidden font-thin"
          onClick={toggleMenuOpen}
        />
      </nav>
      <nav
        className={
          isMenuOpen
            ? "fixed left-0 top-0 w-full h-full bg-slate-100 ease-in-out duration-300 md:hidden z-50"
            : "fixed top-[-100%]"
        }
      >
        <div className="py-4 px-8 flex justify-between items-center">
          <img src="/icon.png" alt="" className="rounded-full h-12 w-12" />
          <TfiClose size={20} className="font-thin" onClick={toggleMenuOpen} />
        </div>
        <ul className="mt-20">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              target="_self"
              rel="noreferrer"
              className={`p-4 hover:cursor-pointer flex justify-center items-center text-xl no-underline`}
            >
              {item.name}
            </a>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
