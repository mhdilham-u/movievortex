import React from "react";
// import { Facebook, Instagram, Twitter } from "lucide-react";
import logo from "../assets/logo.png";
import {
  SiFacebook,
  SiGoogle,
  SiInstagram,
  // SiTwitter,
} from "@icons-pack/react-simple-icons";

const Footer = () => {
  return (
    <footer className="py-7">
      <div className="flex justify-center items-center flex-col gap-3">
        <img src={logo} className="lg:w-52" alt="" />
        <p className="text-xs lg:text-base">
          ©2024 developed & designed by{" "}
          <a href="#" className="underline">
            mhdilhamu
          </a>
        </p>
      </div>
      <div className="flex flex-col justify-center items-center mt-10 gap-5">
        <div className="flex gap-5">
          <SiFacebook className="w-4 lg:w-5" />
          <SiInstagram className="w-4 lg:w-5" />
          {/* <SiTwitter className="w-4 lg:w-5" /> */}
          <SiGoogle className="w-4 lg:w-5" />
          {/* <Facebook fill="#FFF" strokeWidth={0} />
          <Instagram />
          <Twitter fill="#FFF" strokeWidth={0} /> */}
        </div>
        <ul className="flex text-xs lg:text-sm gap-5">
          <li>
            <a href="#">Privacy Policy</a>
          </li>
          <li>
            <a href="#">Term of Service</a>
          </li>
          <li>
            <a href="#">Language</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
