import React, { useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";
import photoZen from "../assets/images/fleur-lotus.png";
import photoGirl from "../assets/images/jolie-femme-souriante-meditant-regardant-gauche-removebg-preview.png";

export const Home = () => {
  useEffect(() => {
    Aos.init({
      easing: "ease-out-quart",
      delay: 0,
      duration: 750,
    });
  }, []);

  return (
    <>
      <div className="container-home w-full h-screen">
        <div
          id="Informations"
          className="lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg:text-start flex lg:flex-row flex-col justify-between lg:gap-28 items-center"
        >
          {/* <img className="profile-image " src={photoZen} alt="" /> */}

          <div className=" h-full lg:py-32 flex flex-col justify-center lg:items-start items-center">
            <h1
              data-aos="fade-right"
              className="text-[52px] font-semibold mb-8 leading-normal  text-brown-100 uppercase"
            >
              Welcome
            </h1>
            <img className="profile-image mb-5" src={photoGirl} alt="" />
            <p className="flex-1 w-1/2" data-aos="fade-left">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero
              praesentium cupiditate, optio id nesciunt quia debitis nostrum
              blanditiis aperiam tempora!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
