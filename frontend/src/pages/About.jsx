import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t border-gray-200">
        <Title text1={"SOBRE"} text2={"NOSOTROS"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16 ">
        <img
          className="w-full md:max-w-[450px] "
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            En nuestra empresa, creemos que la moda es más que solo ropa; es una
            forma de expresión, comodidad y confianza. Nos dedicamos a diseñar
            prendas modernas y versátiles, adaptadas a las necesidades y estilos
            de cada persona. Trabajamos con materiales de alta calidad y
            procesos sostenibles para garantizar no solo el mejor diseño, sino
            también un impacto positivo en el medio ambiente.
          </p>
          <p>
            Nuestra pasión por la moda nos impulsa a innovar constantemente,
            combinando tendencias actuales con la esencia atemporal de cada
            prenda. Ya sea que busques un look casual, elegante o deportivo, en
            nuestra colección encontrarás opciones que se ajustan a tu
            personalidad y estilo de vida.
          </p>
          <b className="text-gray-800">Nuestra Misión</b>
          <p>
            Nuestra misión es ofrecer ropa de alta calidad, accesible y con
            diseños exclusivos, priorizando la comodidad y el bienestar de
            nuestros clientes. Nos comprometemos a fomentar la moda sostenible,
            reduciendo el impacto ambiental de nuestra producción y promoviendo
            prácticas responsables en la industria textil. Queremos que cada
            persona que use nuestras prendas se sienta segura, auténtica y
            empoderada.
          </p>
        </div>
      </div>
      <div className="text-4xl py-4">
        <Title text1={"¿POR QUÉ"} text2={"ELEGIRNOS?"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border border-gray-200 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Garantía de Calidad:</b>
          <p>
            En nuestra empresa, nos comprometemos a ofrecer prendas de la más
            alta calidad. Cada artículo es cuidadosamente diseñado y
            confeccionado con materiales premium, asegurando durabilidad,
            confort y estilo. Implementamos estrictos controles en cada etapa de
            producción para garantizar que cada prenda cumpla con nuestros
            estándares de excelencia y satisfacción del cliente.
          </p>
        </div>
        <div className="border border-gray-200 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Comodidad y Facilidad:</b>
          <p>
            Creemos que comprar ropa debe ser una experiencia sencilla y
            placentera. Nuestra plataforma está diseñada para que puedas
            explorar nuestras colecciones de manera intuitiva, con opciones de
            búsqueda avanzada y recomendaciones personalizadas. Además,
            ofrecemos múltiples métodos de pago seguros, envíos rápidos y una
            política de cambios y devoluciones sin complicaciones.
          </p>
        </div>
        <div className="border border-gray-200 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Servicio al Cliente Excepcional:</b>
          <p>
            Nos esforzamos por brindar una atención personalizada y cercana a
            cada cliente. Nuestro equipo de soporte está siempre disponible para
            responder preguntas, asesorarte en tus compras y resolver cualquier
            inconveniente. Valoramos tu confianza y nos comprometemos a
            ofrecerte una experiencia de compra inigualable, con un servicio
            rápido, eficiente y amable.
          </p>
        </div>
      </div>
      <NewsletterBox />
    </div>
  );
};

export default About;
