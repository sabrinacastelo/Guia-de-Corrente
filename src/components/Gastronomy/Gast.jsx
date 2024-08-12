import React, { useState } from "react";
import PlaceCard from "./GastCard";
import Img1 from "../../assets/gast/place1.png";
import Img2 from "../../assets/gast/place2.png";
import Img3 from "../../assets/gast/place3.png";
import Img4 from "../../assets/gast/place4.png";
import Img5 from "../../assets/gast/place5.png";
import Img6 from "../../assets/gast/place6.png";

const PlacesData = [
  {
    img: Img1,
    title: "Conquista",
    location: "R. Adolfo John Terry, 1314 - Centro",
    description: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price: 6700,
    type: "Gastronomia",
  },
  {
    img: Img2,
    title: "Bar do Bode",
    location: "Corrente - PI, 64980-000",
    description: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price: 6700,
    type: "Gastronomia",
  },
  {
    img: Img3,
    title: "Giraffas Burguer",
    location: "R. João Lago, 43",
    description: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price: 6200,
    type: "Gastronomia",
  },
  {
    img: Img4,
    title: "Restaurante e Churrascaria Lemos",
    location: "R. Des. Amaral, 745 - Centro",
    description: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price: 6700,
    type: "Gastronomia",
  },
  {
    img: Img5,
    title: "Churrasqueira do Mutuca",
    location: "R. Bahia, 2 - 104",
    description: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price: 6700,
    type: "Gastronomia",
  },
  {
    img: Img6,
    title: "Restaurante Cristal",
    location: "R. do Ipiranga",
    description: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price: 6200,
    type: "Gastronomia",
  },
];

const Places = ({ handleOrderPopup }) => {
  const [visibleItems, setVisibleItems] = useState(3);

  const showMoreItems = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 3);
  };

  return (
    <div className="dark:bg-gray-900 dark:text-white bg-gray-50 py-10">
      <section data-aos="fade-up" className="container">
        <h1 className="my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
          Conheça nossos restaurantes
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {PlacesData.slice(0, visibleItems).map((item, index) => (
            <PlaceCard
              handleOrderPopup={handleOrderPopup}
              key={index}
              {...item}
            />
          ))}
        </div>
        {visibleItems < PlacesData.length && (
          <div className="text-center mt-4">
            <button
              onClick={showMoreItems}
              className="bg-primary text-white px-4 py-2 rounded"
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
