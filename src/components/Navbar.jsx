import React from "react";

// REACT ICONS
import { FaSearch } from "react-icons/fa";
import { MdOutlineLanguage } from "react-icons/md";
import { GoPersonFill } from "react-icons/go";
import { IoIosArrowDown } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { IoIosMenu } from "react-icons/io";

function Navbar() {
  return (
    <nav className="flex justify-center items-center w-full bg-black text-white py-3">
      <div className="navbar-content flex justify-between items-center w-[80%]">
        <div className="navbar-list flex items-center gap-10">
          <img
            src="https://www.united.com/2500e4e62233fbfe8ac6.unitedLogoNew.svg"
            alt="logo"
            width={50}
          />
          <ul className=" hidden lg:flex gap-5">
            <li className="flex items-end hover:text-sky-200 hover:underline">
              <a href="#">Book</a>
              <IoIosArrowDown />
            </li>
            <li className="flex items-end hover:text-sky-200 hover:underline">
              <a href="#">My trips</a>
              <IoIosArrowDown />
            </li>
            <li className="flex items-end hover:text-sky-200 hover:underline">
              <a href="#">Travel info</a>
              <IoIosArrowDown />
            </li>
            <li className="flex items-end hover:text-sky-200 hover:underline">
              <a href="#">MileagePlus</a>
              <IoIosArrowDown />
            </li>
            <li className="flex items-end hover:text-sky-200 hover:underline">
              <a href="#">Deals</a>
              <IoIosArrowDown />
            </li>
            <li className="flex items-end hover:text-sky-200 hover:underline">
              <a href="#">Help</a>
              <IoIosArrowDown />
            </li>
          </ul>
        </div>
        <div className="navbar-btns flex items-center gap-5">
          <button className="bg-transparent hover:bg-sky-200 hover:text-black h-8 rounded-4xl flex items-center gap-3 p-2">
            <MdOutlineLanguage />
            <span>English - US$</span>
          </button>
          <button className="bg-transparent hover:bg-sky-200 hover:text-black  h-8 rounded-4xl p-2">
            <FaSearch />
          </button>
          <button className="bg-transparent hover:bg-sky-200 hover:text-black  h-8 rounded-4xl p-2">
            <GoPersonFill />
          </button>
          <button className="bg-transparent hover:bg-sky-200 hover:text-black  h-8 rounded-4xl p-2">
            <FaCartShopping />
          </button>
          <button className="bg-transparent hover:bg-sky-200 hover:text-black lg:hidden text-lg  h-8 rounded-4xl p-2">
            <IoIosMenu />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
