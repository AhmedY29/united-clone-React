import React from "react";

// react icons
import { IoIosArrowDown } from "react-icons/io";
import { GrShare } from "react-icons/gr";
import { MdInfo } from "react-icons/md";

function BottomNav() {
  return (
    <section className="bottom-nav flex w-full justify-center">
      <div className="bottom-nav-content flex justify-between w-[80%] py-5">
        <ul className="flex gap-2 flex-wrap">
          <li>
            <a
              className="text-blue-700 text-lg flex items-center gap-2"
              href="#"
            >
              <span>About United</span> <IoIosArrowDown />
            </a>
          </li>
          <li>
            <a
              className="text-blue-700 text-lg flex items-center gap-2"
              href="#"
            >
              <span>Products and services</span>
              <IoIosArrowDown />
            </a>
          </li>
          <li>
            <a
              className="text-blue-700 text-lg flex items-center gap-2"
              href="#"
            >
              <span>Popular destinations</span>
              <IoIosArrowDown />
            </a>
          </li>
          <li>
            <a
              className="text-blue-700 text-lg flex items-center gap-2"
              href="#"
            >
              <span>Careers</span>
              <GrShare />
            </a>
          </li>
        </ul>
        <h2 className="flex items-center gap-2 text-blue-700">
          <MdInfo />
          <span>Important notices</span>
        </h2>
      </div>
    </section>
  );
}

export default BottomNav;
