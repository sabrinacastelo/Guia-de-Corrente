import { useState, useEffect } from "react";
import axios from "axios";
import BlogCard from "./BlogCard";

const BlogsComp = () => {
  const [blogs, setBlogs] = useState([]);
  const [visibleBlogs, setVisibleBlogs] = useState(3);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/tourist/");
        setBlogs(response.data);
        setLoading(false);
        console.log(response.data);
        
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const showMoreBlogs = () => {
    setVisibleBlogs((prevVisibleBlogs) => prevVisibleBlogs + 3);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading blogs: {error.message}</div>;

  return (
    <div className="dark:bg-gray-900 dark:text-white py-10">
      <section data-aos="fade-up" className="container">
        <h1 className="my-8 border-l-8 border-[#D94F16]/50 py-2 pl-2 text-3xl font-bold">
          Pontos Turísticos
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {blogs.slice(0, visibleBlogs).map((item) => (
            <BlogCard
              key={item.id}
              image={item.image}
              title={item.name}
              description={item.description}
            />
          ))}
        </div>
        {visibleBlogs < blogs.length && (
          <div className="flex justify-center mt-6">
            <button
              onClick={showMoreBlogs}
              className="bg-gradient-to-r from-[#E88918] to-[#D94F16] hover:bg-gradient-to-r hover:from-[#D94F16] hover:to-[#E88918] px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark"
            >
              Mostrar Mais
            </button>
          </div>
        )}
      </section>
    </div>
  );
};

export default BlogsComp;
