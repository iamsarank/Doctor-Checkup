import React from "react";
import { assets } from "../assets/assets_frontend/assets";
import { useNavigate } from "react-router-dom";

const Footer = () => {
    const navigate = useNavigate();
  return (
    <div className="md:mx-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm py-10 border-b-1 border-gray-300">
        <div>
          <img src={assets.logo} alt="logo" className="mb-5 w-40" />
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
            maxime natus obcaecati, impedit enim, corrupti aperiam cum
            recusandae, unde aut odit.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li onClick={()=>navigate('/')}>Home</li>
            <li onClick={()=>navigate('/about')}>About us</li>
            <li onClick={()=>navigate('/contact')}>Contact us</li>
            <li onClick={()=>navigate('/')}>Privacy Policy</li>
          </ul>
        </div>
        <div className="flex flex-col gap-3">
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>+91 9384192707</li>
            <li>iamsarank@gmail.com</li>
          </ul>
        </div>
      </div>
      <div>
        <p className="py-5 text-sm text-center">
          © 2025 Doctor App. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
