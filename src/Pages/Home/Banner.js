import React from "react";
import banner from "../asstes/MPTP-1400-×-900-px.png";
const Banner = () => {
  return (
    <div>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={banner} className="w-full " />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"></div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
