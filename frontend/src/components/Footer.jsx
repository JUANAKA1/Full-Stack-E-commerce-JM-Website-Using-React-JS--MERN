import React from "react";
import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm ">
        <div>
          <img src={assets.logo} className="mb-5 w-32" alt="" />
          <p className="w-full md:w-2/3 text-gray-600">
            Somos una marca comprometida con ofrecer prendas de alta calidad,
            fusionando estilo, comodidad y sostenibilidad. Nos esforzamos por
            crear diseños únicos que se adapten a todas las personalidades y
            ocasiones, utilizando materiales premium y procesos responsables.
            Nuestra pasión es brindarte una experiencia de moda auténtica y
            accesible, siempre con la mejor atención al cliente.
          </p>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">COMPAÑÍA</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>
              <Link to={"/"}>Inicio</Link>
            </li>
            <li>
              <Link to={"/about"}>Sobre Nosotros</Link>
            </li>
            <li>
              <Link to={"/orders"}>Envíos y Entregas</Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-xl font-medium mb-5 ">CONTÁCTENOS</p>
          <ul className="flex flex-col gap-1 text-gray-600 ">
            <li>+57-3004730577</li>
            <li>contact@gmail.com</li>
          </ul>
        </div>
      </div>
      <div>
        <hr className="border-gray-300" />
        <p className="py-5 text-sm text-center ">
          &copy; 2025 JM - Todos los derechos reservados.
        </p>
      </div>
    </div>
  );
};

export default Footer;
