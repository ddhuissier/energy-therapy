import React from "react";
import addressMap from "../assets/images/582_Harrison_St-San Francisco-CA 94107-États-Unis.png";
import { HiMapPin } from "react-icons/hi2";
import { FaPhoneAlt } from "react-icons/fa";

export const Contact = () => {
  return (
    <>
      <div
        id="About"
        className="lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg:text-start flex lg:flex-row flex-col justify-between lg:gap-28 items-center"
      >
        <img
          data-aos="fade-right"
          className="profile-image "
          src={addressMap}
          alt=""
        />

        <div className=" h-full lg:py-40 flex flex-col justify-center lg:items-start items-center">
          <h1
            data-aos="fade-right"
            className="text-[52px] font-semibold mb-8 leading-normal  text-brown-100 uppercase"
          >
            Coordonnées
          </h1>
          <h2 className="uppercase">Energy Therapy</h2>
          <HiMapPin />
          <p data-aos="fade-left" className="flex text-brown-100 uppercase">
            582 Harrison St, San Francisco, CA 94107, États-Unis
          </p>
          <FaPhoneAlt />
          <p>+14157774709</p>
        </div>
      </div>
    </>
  );
};
