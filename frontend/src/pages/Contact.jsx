import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 border-t border-gray-200 ">
        <Title text1={"CONTÁCTANOS"} />
      </div>
      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 ">
        <img
          className="w-full md:max-w-[480px] "
          src={assets.contact_img}
          alt=""
        />
        <div className="flex flex-col justify-center items-start gap-6 ">
          <p className="font-semibold text-xl text-gray-600 ">Nuestra Tienda</p>
          <p className="text-gray-500 ">
            Calle 100 # 19A-50 <br /> Bogotá, Colombia
          </p>
          <p className="text-gray-500 ">
            Tel: (+57) 601 356 54634 <br /> Email: contacto@tuempresa.com
          </p>
          <p className="font-semibold text-xl text-gray-600 ">
            Trabaja con Nosotros
          </p>
          <p className="text-gray-500 ">
            Conoce más sobre nuestros equipos y vacantes disponibles.{" "}
          </p>
          <button className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500 ">
            Explorar Vacantes
          </button>
        </div>
      </div>
      <NewsletterBox />
    </div>
  );
};

export default Contact;
