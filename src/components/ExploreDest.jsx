import React from "react";

// react icon
import { IoIosWarning } from "react-icons/io";

function ExploreDest() {
  return (
    <section className="explore-section flex justify-center w-full my-10 bg-gray-100">
      <div className="explore-content w-[80%]">
        <div className="explore-titles">
          <h3 className="font-bold text-3xl mb-3">Explore destinations</h3>
          <h4 className="text-lg">
            Not sure where to go? Use our interactive map to find flights to
            great destinations.
          </h4>
          <div className="warning-msg hidden lg:flex gap-2 items-center p-3 bg-red-100 border-2 border-red-300 rounded-lg">
            <IoIosWarning className="text-lg text-red-500" />
            <h4>
              Sorry, no results have been found. Please enter a different origin
              location or expand your search area.
            </h4>
          </div>
          <div className="form hidden lg:flex gap-3 justify-between items-center my-4 ">
            <div className="form-group flex flex-col">
              <label htmlFor="from">Flying from</label>
              <input
                className="rounded-md p-2  outline-1 focus:outline-3 focus:outline-[#1414d2] h-8"
                type="text"
                id="from"
                value={"Riyadh RUH"}
              />
            </div>
            <div className="form-group flex flex-col">
              <label htmlFor="from">Search type</label>
              <select
                className="rounded-md p-2  outline-1 focus:outline-3 focus:outline-[#1414d2]"
                name="select"
                id="select"
              >
                <option value="round-trip">Round Trip</option>
                <option value="one-way">One way</option>
              </select>
            </div>
            <div className="form-group flex flex-col">
              <label htmlFor="date">Dates</label>
              <input
                className="rounded-md p-2  outline-1 focus:outline-3 focus:outline-[#1414d2] h-8"
                type="date"
                id="date"
              />
            </div>
            <div className="form-group flex flex-col">
              <label htmlFor="price">Max price</label>
              <input
                className="rounded-md p-2  outline-1 focus:outline-3 focus:outline-[#1414d2] h-8"
                type="number"
                id="price"
              />
            </div>
            <button className="bg-blue-600  text-white h-15 px-2 rounded-xl  hover:bg-blue-800">
              Search
            </button>
            <a className="text-blue-700 underline" href="#">
              Refine search
            </a>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d18577396.993096385!2d-99.51978324107986!3d40.90856451398321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sar!2ssa!4v1747802114016!5m2!1sar!2ssa"
            height="500"
            className="w-full my-5"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>

          <h1 className="text-sm text-center p-2">
            *The prices shown are roundtrip fares and have been available within
            the last 48 hours. Additional baggage fees may apply. Fare prices in
            miles will include additional taxes and fees.
          </h1>
        </div>
      </div>
    </section>
  );
}

export default ExploreDest;
