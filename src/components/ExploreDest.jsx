import React from "react";

function ExploreDest() {
  return (
    <section className="explore-section flex justify-center w-full my-10">
      <div className="explore-content w-[80%]">
        <div className="explore-titles">
          <h3 className="font-bold text-3xl mb-3">Explore destinations</h3>
          <h4 className="text-lg">
            Not sure where to go? Use our interactive map to find flights to
            great destinations.
          </h4>
          <div className="warning-msg">
            <h4>
              Sorry, no results have been found. Please enter a different origin
              location or expand your search area.
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExploreDest;
