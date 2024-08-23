import React from "react";
import { Link } from "react-router-dom";
// import { FaFacebookF } from "react-icons/fa";
// import { FaYoutube } from "react-icons/fa6";
// import { RiInstagramFill } from "react-icons/ri";
// import { FaTwitter } from "react-icons/fa";
// import { SiWhatsapp } from "react-icons/si";

const Footer = () => {
  return (
    <>
      <div className="shadow-gray-300 bg-gray-200">
        <div className="flex flex-col lg:flex-row justify-center  space-y-4 lg:space-y-0 lg:gap-x-40 p-20">
          <div className="flex justify-center lg:block">
            {/* <img
              className="h-30 w-28 object-contain"
              src="flight.png"
              alt="this"
            /> */}
            <p className="text-red-600 text-4xl font-bold ml-6 shadow-xl">
              TEST AIRWAYS
            </p>
          </div>

          <div className="text-center lg:text-left">
            <p className="font-inter text-lg text-custom-black">Learn More</p>
            {/* <div className="gap-1 py-3 text-sm text-custom-black flex flex-col items-center lg:items-start">
              <Link to="">Homepage</Link>
              <Link to="">Explore</Link>
              <Link to="">My Facilities</Link>
              <Link to="">Requests</Link>
              <Link to="">Get Help!</Link>
            </div> */}
          </div>

          <div className="text-center lg:text-left">
            <p className="font-inter text-lg text-custom-black">Contact Us</p>
            <div className="py-4 text-sm text-custom-black flex flex-col items-center lg:items-start space-y-3">
              <p className="text-custom-black">
                Office Number:<span>{"     "}123-456-7890</span>
              </p>
              <p>
                Fax #: <span>123-456-7890</span>
              </p>
            </div>
          </div>

          <div className="text-center lg:text-left">
            <p className="font-inter text-lg text-custom-black">Social</p>
            {/* <div className="py-6 text-sm text-custom-black flex justify-center lg:justify-start items-center gap-4">
              <FaFacebookF className="text-custom-black cursor-pointer w-7 h-7" />
              <RiInstagramFill className="text-custom-black cursor-pointer w-7 h-7" />
              <FaTwitter className="text-custom-black cursor-pointer w-7 h-7" />
              <FaYoutube className="text-custom-black w-7 h-7 cursor-pointer" />
              <SiWhatsapp className="text-custom-black w-7 h-7 cursor-pointer" />
            </div> */}
          </div>
        </div>

        <div className=" sm:pl-10 sm:pr-10 lg:pl-40 lg:pr-52 ">
          <div className="border-b border-custom-gray "></div>

          <div className="flex flex-col lg:flex-row justify-between py-4 space-y-2 lg:space-y-0">
            <p className="font-inter text-base text-custom-black text-center lg:text-left">
              © 2019 Lift Media. All rights reserved.
            </p>
            <div className="text-base flex flex-col lg:flex-row space-y-2 lg:space-y-0 space-x-0 lg:space-x-4 text-center lg:text-left">
              <Link to="/privacypolicy">Term of Service</Link>
              <Link to="/privacypolicy">Privacy Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
