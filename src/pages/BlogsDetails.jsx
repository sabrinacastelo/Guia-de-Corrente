// import React from "react";
import { useLocation } from "react-router-dom";
import BlogsComp from "../components/Blogs/BlogsComp";

const BlogsDetails = (props) => {
  const location = useLocation();
  console.log(props, " props");
  console.log(location, " useLocation Hook");
  const { image, title, description } = location.state;

  return (
    <div className="pt-20">
      <div className="h-[650px] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="mx-auto h-[650px] w-full object-cover transition duration-700 hover:scale-110"
        />
      </div>
      <div className="container">
        {/* <p className="text-slate-600 text-sm py-3">
          written by {author} on {date}
        </p> */}
        <br></br>
        <h1 className="text-2xl font-semibold">{title}</h1>
        <br></br>
        <p>{description}</p>
      </div>

      {/* All Blogs Section */}
      <BlogsComp />
    </div>
  );
};

export default BlogsDetails;
