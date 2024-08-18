import React, { useState } from "react";
import PlaceCard from "./PlaceCard";
import Img1 from "../../assets/places/place1.png";
import Img2 from "../../assets/places/place2.png";
import Img3 from "../../assets/places/place3.png";
import Img4 from "../../assets/places/place4.png";
import Img5 from "../../assets/places/place5.png";
import Img6 from "../../assets/places/place6.png";

const PlacesData = [
  {
    img: Img1,
    title: "Hotel Flora",
    location: "R. Quintino Custodio, 186 - Centro",
    description: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price: 6700,
    type: "Hospedagem",
  },
  {
    img: Img2,
    title: "Jerônimos Hotel",
    location: "R. João Pacheco Cavalcante",
    description: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price: 6700,
    type: "Hospedagem",
  },
  {
    img: Img3,
    title: "Hotel Paraíso",
    location: "Rua Projetada",
    description: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price: 6200,
    type: "Hospedagem",
  },
  {
    img: Img4,
    title: "Hotel Pousada Espaço Mil",
    location: "R. Adolfo John Terry, 1-85 - Centro",
    description: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price: 6700,
    type: "Hospedagem",
  },
  {
    img: Img5,
    title: "Hotel Rimo",
    location: "Corrente - PI, 64980-000",
    description: "lorem ipsum dolor sit amet consectetur adipisicing elit",
    price: 6700,
    type: "Hospedagem",
  },
  {
    img: Img6,
    title: "Hotel Sayonara",
    location: "R. Emílio Cavalcanti - Centro",
    description: "lorem ipsum dolor sit amet consectetur adipisicing elit",
    price: 6200,
    type: "Hospedagem",
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
      <h1 className="my-8 border-l-8 border-[#D94F16]/50 py-2 pl-2 text-3xl font-bold">          
        O melhor da hospedagem de Corrente
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
