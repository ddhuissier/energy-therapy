import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import menu from "../assets/images/menu.svg";
import cross from "../assets/images/cross.svg";
import { Link } from "react-router-dom";
export const NavBar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };
  return (
    <>
      <header className="bg-brown-50 z-50 fixed top-0 w-full shadow">
        <nav
          id="main-nav"
          className="bg-brown-50 max-w-5xl mx-auto font-poppins p-6 flex items-center justify-between"
        >
          <Link to="/">
            <img src={logo} className="flex md:w-12 md:inline w-10" alt="" />
          </Link>
          <button
            aria-label="toggle button"
            aria-expanded="false"
            id="menu-btn"
            className="cursor-pointer w-7 md:hidden"
            onClick={handleClick}
          >
            {click ? <img src={cross} alt="" /> : <img src={menu} alt="" />}
          </button>
          <ul
            id="toggled-menu"
            className="w-full absolute top-full left-0 -translate-y-full -z-10 text-gray-800 border-b border-gray-200 flex flex-col items-center md:static md:z-10 md:w-min md:transform-none md:border-none md:flex-row"
          >
            <Link to="/">
              <li className="py-4 md:py-0 md:mr-6 text-sm uppercase font-semibold w-full hover:tbg-brown-100">
                Accueil
              </li>
            </Link>
            <Link to="/about">
              <li className="py-4 md:py-0 md:mr-6 text-sm uppercase font-semibold w-full hover:tbg-brown-100">
                A propos
              </li>
            </Link>
            <Link to="/informations">
              <li className="py-4 md:py-0 md:mr-6 text-sm uppercase font-semibold w-full hover:tbg-brown-100">
                Informations
              </li>
            </Link>
            <Link to="/contact">
              <li className="py-4 md:py-0 md:mr-6 text-sm uppercase font-semibold w-full hover:tbg-brown-100">
                Contact
              </li>
            </Link>
          </ul>
        </nav>
      </header>
    </>
  );
};
