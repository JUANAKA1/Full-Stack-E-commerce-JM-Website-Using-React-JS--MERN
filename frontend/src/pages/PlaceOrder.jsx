import React, { useContext, useState } from "react";
import Title from "../components/Title";
import CartTotal from "../components/CartTotal";
import { assets } from "../assets/assets";
import { ShopContext } from "../context/ShopContext";
import axios from "axios";
import { toast } from "react-toastify";

const PlaceOrder = () => {
  const [method, setMethod] = useState("cod");
  const {
    navigate,
    backendUrl,
    token,
    cartItems,
    setCartItems,
    getCartAmount,
    delivery_fee,
    products,
  } = useContext(ShopContext);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData((data) => ({ ...data, [name]: value }));
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      let orderItems = [];
      for (const items in cartItems) {
        for (const item in cartItems[items]) {
          if (cartItems[items][item] > 0) {
            const itemInfo = structuredClone(
              products.find((product) => product._id === items)
            );
            if (itemInfo) {
              itemInfo.size = item;
              itemInfo.quantity = cartItems[items][item];
              orderItems.push(itemInfo);
            }
          }
        }
      }
      let orderData = {
        address: formData,
        items: orderItems,
        amount: getCartAmount() + delivery_fee,
      };

      switch (method) {
        // api calls for COD
        case "cod":
          const response = await axios.post(
            backendUrl + "/api/order/place",
            orderData,
            { headers: { token } }
          );

          if (response.data.success) {
            setCartItems({});
            navigate("/orders");
          } else {
            toast.error(response.data.message);
          }
          break;

        // case "stripe":
        //   const responseStripe = await axios.post(
        //     backendUrl + "/api/order/stripe",
        //     orderData,
        //     { headers: { token } }
        //   );
        //   if (responseStripe.data.success) {
        //     const { session_url } = responseStripe.data;
        //     window.location.replace(session_url);
        //   } else {
        //     toast.error(responseStripe.data.message);
        //   }
        //   break;
        //   case "paypal":
        //   const responsePaypal = await axios.post(
        //     backendUrl + "/api/order/paipal",
        //     orderData,
        //     { headers: { token } }
        //   );
        //   if (responsePaypal.data.success) {
        //     const { session_url } = responsePaypal.data;
        //     window.location.replace(session_url);
        //   } else {
        //     toast.error(responsePaypal.data.message);
        //   }
        //   break;

        default:
          break;
      }
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    }
  };
  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t border-gray-200 "
    >
      {/* left side */}
      <div className="flex flex-col gap-4 w-full sm:max-w-[480px] ">
        <div className="text-xl sm:text-2xl my-3 ">
          <Title text1={"INFORMACIÓN"} text2={"DE ENTREGA"} />
        </div>
        <div className="flex gap-3 ">
          <input
            required
            onChange={onChangeHandler}
            name="firstName"
            value={formData.firstName}
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="Nombre"
          />
          <input
            required
            onChange={onChangeHandler}
            name="lastName"
            value={formData.lastName}
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="Apellido"
          />
        </div>
        <input
          required
          onChange={onChangeHandler}
          name="email"
          value={formData.email}
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          type="text"
          placeholder="Correo Electrónico"
        />
        <input
          required
          onChange={onChangeHandler}
          name="street"
          value={formData.street}
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          type="text"
          placeholder="Dirección"
        />
        <div className="flex gap-3 ">
          <input
            required
            onChange={onChangeHandler}
            name="city"
            value={formData.city}
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="Ciudad"
          />
          <input
            required
            onChange={onChangeHandler}
            name="state"
            value={formData.state}
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="Departamento"
          />
        </div>
        <div className="flex gap-3 ">
          <input
            required
            onChange={onChangeHandler}
            name="zipcode"
            value={formData.zipcode}
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="number"
            placeholder="Código Postal"
          />
          <input
            required
            onChange={onChangeHandler}
            name="country"
            value={formData.country}
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="País"
          />
        </div>
        <input
          required
          onChange={onChangeHandler}
          name="phone"
          value={formData.phone}
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          type="number"
          placeholder="Teléfono"
        />
      </div>
      {/* right Side */}
      <div className="mt-8">
        <div className="mt-8min-w-80 ">
          <CartTotal />
        </div>
        <div className="mt-12">
          <Title text1={"FORMA"} text2={"DE PAGO"} />
          {/* payment method Selection */}
          <div className="flex gap-3 flex-col lg:flex-row">
            {/* <div
              onClick={() => setMethod("stripe")}
              className="flex items-center gap-3 border border-gray-300 p-2 px-3 cursor-pointer "
            >
              <p
                className={`min-w-3.5 h-3.5 border border-gray-300 rounded-full ${
                  method === "stripe" ? "bg-green-400" : ""
                } `}
              ></p>
              <img className="h-5 mx-4" src={assets.stripe_logo} alt="" />
            </div>
            <div
              onClick={() => setMethod("paypal")}
              className="flex items-center gap-3 border border-gray-300 p-2 px-3 cursor-pointer "
            >
              <p
                className={`min-w-3.5 h-3.5 border border-gray-300 rounded-full ${
                  method === "paypal" ? "bg-green-400" : ""
                } `}
              ></p>
              <img className="h-5 mx-4" src={assets.paypal} alt="" />
            </div> */}
            <div
              onClick={() => setMethod("cod")}
              className="flex items-center gap-3 border border-gray-300 p-2 px-3 cursor-pointer "
            >
              <p
                className={`min-w-3.5 h-3.5 border border-gray-300 rounded-full ${
                  method === "cod" ? "bg-green-400" : ""
                } `}
              ></p>
              <p className="text-gray-500 text-sm font-medium mx-4 ">
                PAGO CONTRA ENTREGA
              </p>
            </div>
          </div>
          <div className="w-full text-end mt-8">
            <button
              type="submit"
              className="bg-black text-white px-16 py-3 text-sm cursor-pointer "
            >
              CONFIRMAR PEDIDO
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
