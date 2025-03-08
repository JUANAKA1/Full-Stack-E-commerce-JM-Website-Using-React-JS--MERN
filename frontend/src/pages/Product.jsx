import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import RelatedProducts from "../components/RelatedProducts";

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
        return null;
      }
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [productId]);

  return productData ? (
    <div className="border-t-2 border-gray-200 pt-10 transition-opacity ease-in duration-500 opacity-100 ">
      {/* product data */}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row ">
        {/* product image */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row ">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full ">
            {productData.image.map((item, index) => (
              <img
                onClick={() => setImage(item)}
                key={index}
                src={item}
                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer "
                alt=""
              />
            ))}
          </div>
          <div className="w-full sm:w-[80%] ">
            <img className="w-full h-auto " src={image} alt="" />
          </div>
        </div>
        {/* product details */}
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2 ">{productData.name}</h1>
          <div className="flex items-center gap-1 mt-2 ">
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_dull_icon} alt="" className="w-3 5" />
            <p className="pl-2">(122) </p>
          </div>
          <p className="m-5 text-3xl font-medium ">
            {currency}
            {productData.price}{" "}
          </p>
          <p className="m-5 text-gray-500 md:w-4/5 ">
            {productData.description}{" "}
          </p>
          <div className="flex flex-col gap-4 my-8 ">
            <p>Selecciona tu talla</p>
            <div className="flex gap-2">
              {productData.sizes.map((item, index) => (
                <button
                  key={index}
                  className={`border  px-4 py-2 border-gray-100 ${
                    item === size ? "border-orange-500" : ""
                  }`}
                  onClick={() => setSize(item)}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <button onClick={()=>addToCart(productData._id, size) } className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700 ">
          AÑADIR AL CARRITO
          </button>
          <hr className="mt-8 sm:w-4/5 border-gray-300" />
          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1 ">
            <p>✅ Producto 100% original.</p>
            <p>💳 Pago contra entrega disponible.</p>
            <p>🔄 Fácil devolución y cambio en un plazo de 7 días.</p>
          </div>
        </div>
      </div>
      {/* description & review section */}
      <div className="mt-20">
        <div className="flex">
          <b className="border px-5 py-3 text-sm border-gray-300">
          Descripción
          </b>
          <p className="border px-5 py-3 text-sm border-gray-300">
          Reseñas (122)
          </p>
        </div>
        <div className="flex flex-col gap-4 border border-gray-300 px-6 text-sm text-gray-500">
          <p>
          En nuestra tienda, cada prenda es diseñada con materiales de alta
            calidad, garantizando comodidad y estilo. Descubre la colección más
            reciente con tendencias innovadoras y acabados impecables.
          </p>
          <p>
          Nuestras prendas están pensadas para ofrecerte el mejor ajuste y una
            experiencia única. Ya sea para un look casual o elegante, tenemos
            opciones para cada ocasión.
          </p>
        </div>
      </div>
      {/* similar products */}
      <RelatedProducts category={productData.category} subCategory={productData.subCategory} />
    </div>
  ) : (
    <div className="opacity-0 ">Cargando producto...</div>
  );
};

export default Product;
