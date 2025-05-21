import React from "react";

// React Icon

import { AiFillTikTok } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <footer className="flex justify-center items-center w-full bg-black text-white py-5">
      <div className="footer-content text-center w-[80%]">
        <div className="footer-row flex flex-col gap-3 lg:flex-row justify-between items-center my-5">
          <button className="p-3 bg-white border-blue-700 border-2 rounded-xl text-blue-700">
            Search
          </button>
          <h2>English - United States $ | Español</h2>
          <div className="social-links flex gap-2 text-lg">
            <AiFillTikTok className="cursor-pointer" />
            <FaFacebook className="cursor-pointer" />
            <FaXTwitter className="cursor-pointer" />
            <FaYoutube className="cursor-pointer" />
          </div>
        </div>
        <div className="footer-links flex gap-2 flex-wrap my-5">
          <a className="text-blue-700 text-lg flex items-center gap-2" href="#">
            <span>Contract of carriage</span>
          </a>
          <a className="text-blue-700 text-lg flex items-center gap-2" href="#">
            <span>Lengthy tarmac delay plan</span>
          </a>
          <a className="text-blue-700 text-lg flex items-center gap-2" href="#">
            <span>Legal information</span>
          </a>
          <a className="text-blue-700 text-lg flex items-center gap-2" href="#">
            <span>Our United Customer Commitment</span>
          </a>
          <a className="text-blue-700 text-lg flex items-center gap-2" href="#">
            <span>Help Center</span>
          </a>
          <a className="text-blue-700 text-lg flex items-center gap-2" href="#">
            <span>Accessible travel</span>
          </a>
          <a className="text-blue-700 text-lg flex items-center gap-2" href="#">
            <span>Privacy Policy</span>
          </a>
          <a className="text-blue-700 text-lg flex items-center gap-2" href="#">
            <span>Do Not Sell or Share My Personal Information</span>
          </a>
          <a className="text-blue-700 text-lg flex items-center gap-2" href="#">
            <span>Interest Based Ads</span>
          </a>
          <a className="text-blue-700 text-lg flex items-center gap-2" href="#">
            <span>United Jetstream</span>
          </a>
          <a className="text-blue-700 text-lg flex items-center gap-2" href="#">
            <span> Cargo</span>
          </a>
          <a className="text-blue-700 text-lg flex items-center gap-2" href="#">
            <span>Electronic Invoice</span>
          </a>
        </div>

        <div className="flex flex-col lg:flex-row gap-3 items-center justify-between my-5">
          <h1>
            Indicates an external site that may or may not meet accessibility
            guidelines. Copyright © 2025 United Airlines, Inc. All rights
            reserved.
          </h1>
          <div className="logos flex gap-2">
            <img
              src="https://www.united.com/3149651732b3c9591453.UnitedLogoInverted.svg"
              alt=""
            />
            <img
              src="https://www.united.com/dd45368f41b2bc6e1df9.StarAlliance.svg"
              alt=""
            />
          </div>
        </div>
        <button className="p-3 bg-white border-blue-700 border-2 rounded-xl text-blue-700">
          CoBrowse
        </button>
        <h1 className="text-lg flex gap-2 justify-center mt-3">
          <span>Made By</span>
          <a
            className="underline"
            href="https://github.com/AhmedY29"
            target="_blank"
          >
            Ahmed Alsaleh
          </a>
        </h1>
      </div>
    </footer>
  );
}

export default Footer;
