import React from "react";

// React Icon
import { FaArrowRight } from "react-icons/fa6";

function Links() {
  let links = [
    {
      title: "Plan your trip",
      desc: "Find a destination and any entry requirements.",
    },
    {
      title: "Stay connected",
      desc: "Get Wi-Fi for your next flight.",
    },
    {
      title: "What to know before you go",
      desc: "The world of travel has changed, find out how.",
    },
    {
      title: "Visit the Help Center",
      desc: "Find info on refunds, bags, seats and more.",
    },
    {
      title: "Time to start packing",
      desc: "Learn more about bringing bags on your trip.",
    },
    {
      title: "See what's on your flight",
      desc: "View your seating, food and entertainment options.",
    },
  ];
  return (
    <section className="links-section flex justify-center w-full">
      <div className="links-content w-[80%]">
        <h1 className="text-3xl">Useful links for you</h1>

        <div className="links-container grid grid-cols-1 md:grid-cols-2 gap-3 my-4">
          {links.map((link, index) => (
            <button
              key={index}
              className="link border-2 border-gray-100 hover:border-blue-700 hover:border-3 flex justify-between items-center p-4 rounded-2xl"
            >
              <div className="link-text text-left">
                <h1 className="text-2xl">{link.title}</h1>
                <h1 className="font-light">{link.desc}</h1>
              </div>
              <FaArrowRight className="text-blue-700" fontSize={20} />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Links;
