import { ShopContext } from "../context/ShopContext";
import React, { useContext } from "react";

const NewsletterBox = () => {
    const onSubmitHandler = (event) => {
        event.preventDefault();
      }
      const {
        navigate,
        token,
      } = useContext(ShopContext);
  return (
    <div className="text-center">
      <p className="text-2xl font-medium text-gray-800">
      ¡Suscríbete ahora y obtén un 20% de descuento!
      </p>
      <p className="text-gray-400 mt-3">
      Únete a nuestra comunidad y recibe ofertas exclusivas, novedades y descuentos especiales antes que nadie.
      </p>
      <form onSubmit={onSubmitHandler} className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3">
        <input className="w-full sm:flex-1 outline-none" type="email" placeholder="Ingresa tu correo electrónico" required />
        <button
      onClick={() => (token ? null : navigate("/login"))}
      type="submit" // Cambié a "button" para evitar envíos no deseados
      className="bg-black text-white text-xs px-10 py-4"
    >
      SUSCRIBIRME
    </button>
      </form>
    </div>
  );
};

export default NewsletterBox;
