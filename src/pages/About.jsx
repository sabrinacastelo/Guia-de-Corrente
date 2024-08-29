import React from "react";
import BlogsComp from "../components/Blogs/BlogsComp";
import Location from "../components/Location/Location";

const About = () => {
  return (
    <>
      <div className="container pt-14">
        <div className="py-10">
          <h1 className="my-8 border-l-8 border-[#D94F16]/50 py-2 pl-2 text-3xl font-bold">
            Sobre nós
          </h1>
          <p>
          A página Guia de Corrente foi desenvolvida para centralizar e facilitar o acesso a informações sobre serviços e turismo na cidade de Corrente, Piauí. Oferecemos uma plataforma intuitiva para cadastro e pesquisa de estabelecimentos e eventos, conectando usuários a diversas categorias de serviços, como hospedagem, alimentação, e lazer, além de destacar pontos turísticos. A página visa promover a valorização do comércio local e incentivar o turismo, facilitando a interação entre comerciantes, moradores e turistas.
Somos uma solução inovadora e colaborativa que visa promover serviços e turismo locais, oferecendo uma alternativa acessível e integradora.

          </p>
          <br />
          <p>
           
          </p>
        </div>
      </div>
      <Location />
      <BlogsComp />
    </>
  );
};

export default About;
