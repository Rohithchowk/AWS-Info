import React from "react";
import footerLogo from "../../assets/logo.png";
import Banner from "../../assets/website/qivos-aws-banner.png";
import { IoMdPerson } from "react-icons/io";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
} from "react-icons/fa";

const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "bottom",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "40%", // Reduced height
  width: "100%",
};

const FooterLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Services",
    link: "/#services",
  },
  {
    title: "Documentation",
    link: "/#blog",
  },
];

const Footer = () => {
  return (
    <div style={BannerImg} className="text-white">
      <div className="container">
        <div data-aos="zoom-in" className="grid md:grid-cols-3 pb-24 pt-4"> {/* Reduced padding */}
          {/* Company Details */}
          <div className="py-4 px-4"> {/* Reduced padding */}
            <h1 className="sm:text-2xl text-xl font-bold sm:text-left text-justify mb-2 flex items-center gap-3"> {/* Reduced margin */}
              <img src={footerLogo} alt="" className="max-w-[40px]" /> {/* Reduced logo size */}
              AWS
            </h1>
            <p className="text-sm"> {/* Adjusted text size */}
              {/* Add some description if needed */}
            </p>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-6"> {/* Adjusted padding */}
            <div>
              <div className="py-4 px-4"> {/* Reduced padding */}
                <h1 className="sm:text-lg text-lg font-bold sm:text-left text-justify mb-2"> {/* Adjusted text size */}
                  Important Links
                </h1>
                <ul className="flex flex-col gap-2"> {/* Reduced gap */}
                  {FooterLinks.map((link) => (
                    <li
                      className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200"
                      key={link.title}
                    >
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              {/* You can add additional content here if needed */}
            </div>

            {/* Social Links */}
            <div>
              <div className="flex items-center gap-3 mt-4"> {/* Reduced margin */}
                <a href="#">
                  <FaInstagram className="text-2xl" /> {/* Reduced icon size */}
                </a>
                <a href="#">
                  <FaFacebook className="text-2xl" /> {/* Reduced icon size */}
                </a>
                <a href="#">
                  <FaLinkedin className="text-2xl" /> {/* Reduced icon size */}
                </a>
              </div>
              <div className="mt-4"> {/* Reduced margin */}
                <div className="flex items-center gap-2">
                  <FaLocationArrow />
                  <p className="text-sm">Hyderabad, Telangana</p> {/* Adjusted text size */}
                </div>
                <div className="flex items-center gap-2 mt-2"> {/* Reduced margin */}
                  <IoMdPerson />
                  <p className="text-sm"></p> {/* Adjusted text size */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
