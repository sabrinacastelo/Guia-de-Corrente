import React from "react";

const Location = () => {
  return (
    <>
      <span id="location"></span>
      <section data-aos="fade-up" className="">
        <div className="container my-4">
          <h1 className="my-8 border-l-8 border-[#D94F16]/50 py-2 pl-2 text-3xl font-bold">
            Cidade para visitar
          </h1>

          <div className="rounded-xl ">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7847.504124311159!2d-45.16219619999997!3d-10.441238900000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x933339f38ef455f9%3A0x45fb3e5610c795c1!2sCorrente%2C%20PI%2C%2064980-000!5e0!3m2!1spt-BR!2sbr!4v1723384537720!5m2!1spt-BR!2sbr"
              width="100%"
              height="360"
              style={{ borderRadius: "20px" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            >
            </iframe>
          </div>
        </div>
      </section>
    </>
  );
};

export default Location;
