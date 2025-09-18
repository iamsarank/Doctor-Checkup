import React from "react";
import { assets } from "../assets/assets_frontend/assets";

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-6 md:px-10 lg:px-20 ">
      {/* Left Header content goes here */}
      <div className="md:w-1/2 flex flex-col justify-center gap-4 py-10 m-auto ">
        <p className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold text-center md:text-left ">
          Book Appointment <br /> With Trusted Doctors
        </p>
        <div className="text-white text-center md:text-left">
          <img src={assets.group_profiles} alt="header-group-image" />
          <p className="my-4 text-sm sm:text-base">
            Simply browse through our extensive list of trusted doctors,
            <br />
            schedule your appointment hassle-free{" "}
          </p>
          <a
            className="bg-white text-sm text-primary px-4 py-2 font-normal inline-flex items-center rounded-full"
            href="#speciality"
          >
            Book appointment{" "}
            <img src={assets.arrow_icon} alt="arrow" className="px-2 w-7" />
          </a>
        </div>
      </div>
      {/* Right Header content goes here */}
      <div className="md:w-1/2 pt-2 flex justify-center items-center">
        <img src={assets.header_img} alt="header" />
      </div>
    </div>
  );
};

export default Header;
