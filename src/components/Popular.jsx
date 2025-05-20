import React from "react";

// react icon
import { IoWifiOutline } from "react-icons/io5";
import { IoAirplane } from "react-icons/io5";
import { PiChairFill } from "react-icons/pi";
import { MdPets } from "react-icons/md";
import { FaSuitcase } from "react-icons/fa";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { FaHeadset } from "react-icons/fa6";
import { FaBookmark } from "react-icons/fa";

function Popular() {
  return (
    <section className="popular-section w-full flex justify-center bg-[#024] mt-5">
      <div className="popular-content w-[80%] text-white py-6">
        <div className="popular-topic flex justify-between w-full">
          <h1 className="text-4xl font-medium">Popular topics</h1>
          <input
            className="rounded-md p-2  outline-1 focus:outline-3 bg-white text-black w-[50%] h-10"
            type="text"
            placeholder="Search united"
          />
        </div>
        <ul className="flex flex-wrap text-xl gap-x-35 gap-8 my-5">
          <li>
            <a className="flex items-center gap-1 underline " href="#">
              <IoWifiOutline />
              Wi-Fi
            </a>
          </li>
          <li>
            <a className="flex items-center gap-1 underline " href="#">
              <IoAirplane />
              Change flight
            </a>
          </li>
          <li>
            <a className="flex items-center gap-1 underline " href="#">
              <PiChairFill />
              United Club
            </a>
          </li>
          <li>
            <a className="flex items-center gap-1 underline " href="#">
              <MdPets />
              Traveling with pets
            </a>
          </li>
          <li>
            <a className="flex items-center gap-1 underline " href="#">
              <FaBookmark />
              MileagePlus
            </a>
          </li>
          <li>
            <a className="flex items-center gap-1 underline " href="#">
              <FaSuitcase />
              Baggage
            </a>
          </li>
          <li>
            <a className="flex items-center gap-1 underline " href="#">
              <RiMoneyDollarCircleFill />
              Refund
            </a>
          </li>
          <li>
            <a className="flex items-center gap-1 underline " href="#">
              <FaHeadset />
              Help Center
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Popular;
