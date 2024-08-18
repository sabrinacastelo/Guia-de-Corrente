import React from "react";

const BannerPic = ({ img }) => {
  const bgImage = {
    backgroundImage: `url(${img})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "450px",
  };
  return (
    <div data-aos="zoom-in" className="h-[450px] w-full" style={bgImage}></div>
  );
};

export default BannerPic;
