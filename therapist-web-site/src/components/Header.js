import { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import "aos/dist/aos.css";
import Aos from "aos";

export const Header = () => {
  useEffect(() => {
    Aos.init({
      easing: "ease-out-quart",
      delay: 0,
      duration: 750,
    });
  }, []);
  useEffect(() => {
    document.title = "Therapy web Site";
  }, []);
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const contentMobile = (
    <>
      <div className="lg:hidden block absolute top-10 z-50 w-full left-0 right-0 text-black bg-brown-50  transition">
        <div className="flex justify-center justify-content-center items-center text-center flex-1">
          <img className="h-auto w-1/3" src={logo} alt="logo header" />
        </div>
        <ul className="text-center text-xl lg:p-20 p-3">
          <Link to="/">
            <li
              className="my-4 py-4 border-b  border-slate-800 hover:text-brown-100 uppercase font-bold hover:rounded"
              onClick={handleClick}
            >
              Accueil
            </li>
          </Link>
          <Link to="/about">
            <li
              className="my-4 py-4 border-b border-slate-800 hover:text-brown-100 uppercase font-bold hover:rounded"
              onClick={handleClick}
            >
              A propos
            </li>
          </Link>
          <Link to="/informations">
            <li
              className="my-4 py-4 border-b border-slate-800 hover:text-brown-100 uppercase font-bold hover:rounded"
              onClick={handleClick}
            >
              Informations
            </li>
          </Link>

          <Link to="/contact">
            <li
              className="my-4 py-4 border-b border-slate-800 hover:text-brown-100  uppercase font-bold hover:rounded"
              onClick={handleClick}
            >
              Contact
            </li>
          </Link>
        </ul>
      </div>
    </>
  );
  return (
    <>
      <nav>
        <div className="flex bg-brown-50 px-5 w-50 sm:w-30">
          <ul className="flex flex-1 justify-center items-center justify-items-center  hidden md:flex">
            <Link to="/">
              <li className="hover:text-brown-100 transition 0 hover:border-brown-100 mx-2 uppercase font-bold cursor-pointer">
                Accueil
              </li>
            </Link>
            <Link to="/about">
              <li className="hover:text-brown-100 transition  hover:border-brown-100 mx-2 uppercase font-bold cursor-pointer">
                A propos
              </li>
            </Link>
            <div
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <img
                //className="h-50"
                style={{ width: "7vw", height: "auto" }}
                src={logo}
                alt="logo header"
              />
            </div>
            <Link to="/informations">
              <li className="hover:text-brown-100 transition  hover:border-brown-100 mx-2 uppercase font-bold cursor-pointer">
                Informations
              </li>
            </Link>

            <Link to="/contact">
              <li className="hover:text-brown-100 transition  hover:border-brown-100 mx-2 uppercase font-bold cursor-pointer">
                Contact
              </li>
            </Link>
          </ul>
          <div>{click && contentMobile}</div>

          <button
            className="block sm:hidden transtion my-5"
            onClick={handleClick}
          >
            {click ? <FaTimes /> : <CiMenuFries />}
          </button>
        </div>
      </nav>
    </>
  );
};
