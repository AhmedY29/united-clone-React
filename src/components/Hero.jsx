import React from "react";

// React ICon
import { GrShare } from "react-icons/gr";
import { GoArrowSwitch } from "react-icons/go";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { HiCreditCard } from "react-icons/hi2";
import { FaPause } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { IoAirplane } from "react-icons/io5";
import { FaRegClock } from "react-icons/fa";
import { FaRegCheckCircle } from "react-icons/fa";
import { FaSuitcase } from "react-icons/fa6";

function Hero() {
  return (
    <>
      <section className="hero-section bg-[url(https://media.united.com/assets/m/730a5b86b08a82b3/original/1265_Starlink_BelowTheFold_500x300-new.jpg)] bg-cover flex justify-center items-center w-full h-[80vh] relative  ">
        <div className="hero-content flex gap-20 w-[80%]">
          <div className="hero-form lg:block hidden flex-1/2 w-full ">
            <div className="hero-form-btns flex rounded-t-xl overflow-hidden">
              <button className="text-[#024] bg-white border-r-1 p-4 w-full cursor-pointer">
                Book
              </button>
              <button className="bg-[#024] text-white border-r-1 p-4 w-full cursor-pointer">
                Flight status
              </button>
              <button className="bg-[#024] text-white border-r-1 p-4 w-full  cursor-pointer">
                Check-in
              </button>
              <button className="bg-[#024] text-white p-4 w-full cursor-pointer ">
                My Trips
              </button>
            </div>
            <div className="form-section flex justify-center  bg-white pb-4 rounded-b-xl">
              <div className="form-content w-[90%]">
                <div className="form-nav flex justify-between py-3">
                  <ul className="flex gap-20 border-b-1 pt-3 text-gray-500 text-sm font-bold ">
                    <li className="border-black border-b-2 pb-5 cursor-pointer hover:text-black">
                      Flight
                    </li>
                    <li className="cursor-pointer hover:text-black">
                      Packages
                    </li>
                    <li className="cursor-pointer hover:text-black">Hotel</li>
                    <li className="cursor-pointer hover:text-black">Car</li>
                  </ul>
                  <a href="#" className="text-blue-600 flex gap-1 items-center">
                    <span>Cruise </span> <GrShare />
                  </a>
                </div>
                <div className="form-checks flex justify-between">
                  <div className="form-group flex items-center gap-2">
                    <input
                      className="h-5 w-5"
                      type="radio"
                      checked
                      name="roundtrip"
                      id="roundtrip"
                    />
                    <label htmlFor="roundtrip">Roundtrip</label>
                  </div>
                  <div className="form-group flex items-center gap-2">
                    <input
                      className="h-5 w-5"
                      type="radio"
                      name="one-way"
                      id="one-way"
                    />
                    <label htmlFor="one-way">One-way</label>
                  </div>
                  <div className="form-group flex items-center gap-2">
                    <input
                      className="h-5 w-5"
                      type="checkbox"
                      name="book-with-miles"
                      id="book-with-miles"
                    />
                    <label htmlFor="book-with-miles">Book with miles</label>
                  </div>
                  <div className="form-group flex items-center gap-2">
                    <input
                      className="h-5 w-5"
                      type="checkbox"
                      name="flexible-dates"
                      id="flexible-dates"
                    />
                    <label htmlFor="flexible-dates">Flexible dates</label>
                  </div>
                </div>

                <div className="form-inputs flex flex-col gap-5 my-3">
                  <div className=" flex justify-between items-center ">
                    <div className="form-group flex flex-col">
                      <label htmlFor="from">From</label>
                      <input
                        className="rounded-md p-2  outline-1 focus:outline-3 focus:outline-[#1414d2] h-8"
                        type="text"
                        id="from"
                        value={"Riyadh RUH"}
                      />
                    </div>
                    <GoArrowSwitch className="text-[#1414d2]" fontSize={30} />
                    <div className="form-group flex flex-col">
                      <label htmlFor="to">To</label>
                      <input
                        className="rounded-md p-2 outline-1 focus:outline-3 focus:outline-[#1414d2] h-8"
                        type="text"
                        id="to"
                        placeholder="destination"
                      />
                    </div>
                  </div>
                  <div className=" flex justify-between items-center ">
                    <div className="form-group flex flex-col">
                      <label htmlFor="date">Dates</label>
                      <input
                        className="rounded-md p-2  outline-1 focus:outline-3 focus:outline-[#1414d2] h-8"
                        type="date"
                        id="date"
                      />
                    </div>
                    <div className="form-group flex flex-col">
                      <label htmlFor="to">Travelers</label>
                      <input
                        className="rounded-md p-2 outline-1 focus:outline-3 focus:outline-[#1414d2] h-8"
                        type="text"
                        id="to"
                        readOnly
                        value={"1 Adult"}
                      />
                    </div>
                  </div>
                </div>

                <div className="form-actions flex justify-between mt-10">
                  <div>
                    <select
                      className="rounded-md p-2  outline-1 focus:outline-3 focus:outline-[#1414d2]"
                      name="select"
                      id="select"
                    >
                      <option value="economy">Economy</option>
                      <option value="premium-economy">Premium economy</option>
                      <option value="business-First">Business or First</option>
                    </select>
                    <a
                      className="flex items-center gap-1 text-blue-700 hover:underline"
                      href="#"
                    >
                      <span>Advanced search</span>
                      <MdOutlineArrowForwardIos />
                    </a>

                    <h6 className="text-sm font-bold">
                      (Certificates, multi-city and upgrades)
                    </h6>
                    <h5 className="text-sm">
                      <a className="text-blue-700 underline" href="#">
                        Changed bag rules{" "}
                      </a>{" "}
                      and <br />
                      <a className="text-blue-700 underline" href="#">
                        fees for optional services
                      </a>
                    </h5>
                  </div>
                  <div className="flex flex-col gap-5">
                    <button className="bg-blue-600  text-white h-15 px-2 rounded-xl  hover:bg-blue-800">
                      Find Flight
                    </button>
                    <button className="flex gap-1 border-blue-600 border-2 text-blue-600 h-15 px-2 rounded-xl items-center hover:bg-blue-800  hover:text-white">
                      <HiCreditCard />
                      <span>Find your Travel credit</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hero-box2 flex flex-row lg:flex-col items-center justify-center gap-10 flex-1/2">
            <div className="hero-text w-full h-[80vh] md:h-auto absolute  justify-center flex flex-col md:block  md:w-70 md:static bg-black/50 text-white p-2">
              <h6 className="text-sm font-bold">WANT FLIGHT DEALS?</h6>
              <h3 className="text-2xl">
                Text JOIN to 71529, and we’ll send low fares and sales!
              </h3>
              <div className="flex justify-between m-5 lg:block lg:m-0">
                <a
                  className="flex items-center gap-1 text-blue-700 hover:underline"
                  href="#"
                >
                  <span>Subscribe now</span>
                  <MdOutlineArrowForwardIos />
                </a>
                <div className="flex items-center gap-5 ">
                  <FaPause />
                  <h5>|</h5>
                  <div className="flex items-center gap-5 ">
                    <span className="w-2 h-2 bg-white rounded-4xl"></span>
                    <span className="w-2 h-2 bg-white rounded-4xl"></span>
                    <span className="w-2 h-2 bg-white rounded-4xl"></span>
                    <span className="w-2 h-2 bg-white rounded-4xl"></span>
                    <span className="w-3 h-3 border-white border-3 rounded-4xl"></span>
                  </div>
                </div>
              </div>
            </div>
            <img
              src="https://apps.rokt.com/userfiles/7325596850474455043.gif"
              className="hidden md:block w-[50%]"
              alt=""
            />
          </div>
        </div>
      </section>
      <div className="form-section-phone flex justify-center md:hidden w-full bg-white">
        <div className="form-content-phone w-[80%]">
          <div className="according flex justify-between items-center p-3 border-b-1">
            <div className="flex items-center gap-2">
              <IoAirplane /> <span>Book</span>
            </div>
            <IoIosArrowDown />
          </div>
          <div className="according flex justify-between items-center p-3 border-b-1">
            <div className="flex items-center gap-2">
              <FaRegClock /> <span>Flight status</span>
            </div>
            <IoIosArrowDown />
          </div>{" "}
          <div className="according flex justify-between items-center p-3 border-b-1">
            <div className="flex items-center gap-2">
              <FaRegCheckCircle /> <span>Check-in</span>
            </div>
            <IoIosArrowDown />
          </div>{" "}
          <div className="according flex justify-between items-center p-3 border-b-1">
            <div className="flex items-center gap-2">
              <FaSuitcase /> <span>My trips</span>
            </div>
            <IoIosArrowDown />
          </div>
          <img
            src="https://apps.rokt.com/userfiles/7325596850474455043.gif"
            className=" w-full"
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default Hero;
