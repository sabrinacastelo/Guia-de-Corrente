import { useState, useEffect } from "react";
import PlaceCard from "./PlaceCard";
import axios from "axios";

// eslint-disable-next-line react/prop-types
const Places = ({ handleOrderPopup }) => {
  const [places, setPlaces] = useState([]);
  const [visiblePlaces, setVisiblePlaces] = useState(3);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/hosting/");
        setPlaces(response.data);
        setLoading(false);
        console.log(response.data);

      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchPlaces();
  }, []);

  const showMorePlaces = () => {
    setVisiblePlaces((prevVisiblePlaces) => prevVisiblePlaces + 3);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading blogs: {error.message}</div>;

  return (
    <div className="dark:bg-gray-900 dark:text-white bg-gray-50 py-10">
      <section data-aos="fade-up" className="container">
        <h1 className="my-8 border-l-8 border-[#D94F16]/50 py-2 pl-2 text-3xl font-bold">
          O melhor da hospedagem de Corrente
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {places.slice(0, visiblePlaces).map((item, index) => (
            <PlaceCard
              handleOrderPopup={handleOrderPopup}
              key={index}
              {...item}
            />
          ))}
        </div>
        {visiblePlaces < places.length && (
          <div className="text-center mt-4">
            <button
              onClick={showMorePlaces}
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

export default Places;
