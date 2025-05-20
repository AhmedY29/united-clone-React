import React from "react";

// React Icon

import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

function Slider() {
  return (
    <section className="slider-section flex flex-col justify-center items-center w-full">
      <div className="slider-content w-[80%]">
        <div className="flex flex-col lg:flex-row justify-between bg-black rounded-2xl overflow-hidden">
          <div className="slider-text text-white flex flex-col justify-between m-5">
            <h1 className="text-3xl">Break the Wi-Fi barrier</h1>
            <div>
              <h4>
                Join MileagePlus® to access the fastest connectivity in the sky,
                for free. Now available on select United flights.
              </h4>
              <button className="p-3 bg-white border-blue-700 border-2 rounded-xl text-blue-700">
                Join now
              </button>
            </div>
          </div>
          <img
            src="https://media.united.com/assets/m/730a5b86b08a82b3/original/1265_Starlink_BelowTheFold_500x300-new.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="flex gap-5 my-1">
        <button className="cursor-pointer text-2xl bg-white border-2 text-blue-700  border-blue-700 hover:bg-blue-700 hover:text-white rounded-4xl">
          <IoIosArrowBack />
        </button>
        <h1>1 / 6</h1>
        <button className="cursor-pointer text-2xl bg-white border-2 text-blue-700 border-blue-700 hover:bg-blue-700 hover:text-white rounded-4xl">
          <IoIosArrowForward />
        </button>
      </div>
    </section>
  );
}

export default Slider;
