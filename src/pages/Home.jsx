import React from "react";
import Hero from "../components/Hero/Hero";
import NatureVid from "../assets/video/IMG_6139.mp4";
import BlogsComp from "../components/Blogs/BlogsComp";
import Places from "../components/Places/Places";
import Testimonial from "../components/Testimonial/Testimonial";
import Banner from "../components/Banner/Banner";
import BannerPic from "../components/BannerPic/BannerPic";
import BannerImg from "../assets/Banner-Corrente.png";
import Banner2 from "../assets/Banner-Festejos.png";
import OrderPopup from "../components/OrderPopup/OrderPopup";
import Gast from "../components/Gastronomy/Gast";

const Home = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };
  return (
    <>
      <div>
        <div className="h-[700px] relative">
          <video
            autoPlay
            loop
            muted
            className="absolute right-0 top-0 h-[700px] w-full object-cover z-[-1]"
          >
            <source src={NatureVid} type="video/mp4" />
          </video>
          {/* <Hero /> */}
        </div>
        <BlogsComp />
        <BannerPic img={BannerImg} />
        <Places handleOrderPopup={handleOrderPopup} />
        <Banner />
        <Gast />
        <BannerPic img={Banner2} />
        <Testimonial />
        <OrderPopup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
      </div>
    </>
  );
};

export default Home;
