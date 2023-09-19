import Aos from "aos";
import React, { useEffect } from "react";
import profilImage from "../assets/images/photo-interieur-jeune-femme--cours-yoga.avif";

export const About = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <>
      <div
        id="About"
        className="lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg:text-start flex lg:flex-row flex-col justify-between lg:gap-28 items-center"
      >
        <img className="profile-image " src={profilImage} alt="" />

        <div className=" h-full lg:py-40 flex flex-col justify-center lg:items-start items-center">
          <h1
            data-aos="fade-right"
            className="text-[52px] font-semibold mb-8 leading-normal  text-brown-100 uppercase"
          >
            A propos !
          </h1>
          <p data-aos="fade-left">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero
            praesentium cupiditate, optio id nesciunt quia debitis nostrum
            blanditiis aperiam tempora!
          </p>
        </div>
      </div>
    </>
  );
};
