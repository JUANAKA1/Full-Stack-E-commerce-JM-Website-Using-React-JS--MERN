import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";
// import paypal from "@paypal/checkout-server-sdk";
// import Stripe from "stripe";

// Global variables
// const currency = "COP";
// const deliveryCharge = 10000;

// gateway initialize
// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
// const environment = new paypal.core.SandboxEnvironment(
//   process.env.PAYPAL_CLIENT_ID,
//   process.env.PAYPAL_CLIENT_SECRET
// );
// const paypalClient = new paypal.core.PayPalHttpClient(environment);

// Placing orders using cod method
const placeOrder = async (req, res) => {
  try {
    const { userId, items, amount, address } = req.body;

    const orderData = {
      userId,
      items,
      amount,
      address,
      paymentMethod: "COD",
      payment: false,
      date: Date.now(),
    };

    const newOrder = new orderModel(orderData);
    await newOrder.save();

    await userModel.findByIdAndUpdate(userId, { cartData: {} });

    res.json({ success: true, message: "Pedido realizado con éxito" });
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: error.message });
  }
};
// Placing orders using PayPal method

// Crear orden con PayPal
// const placeOrderPayPal = async (req, res) => {
//   try {
//     const { userId, items, amount, address } = req.body;

//     const orderData = {
//       userId,
//       items,
//       amount,
//       address,
//       paymentMethod: "PayPal",
//       payment: false,
//       date: Date.now(),
//     };

//     const newOrder = new orderModel(orderData);
//     await newOrder.save();
//     const options = {
//       amount: amount * 100,
//       currency: currency.toUpperCase(),
//       receipt: newOrder._id.toString(),

//     };
//     await paypalClient.orders.create(options,()=>{
//       if (error) {
//         console.error(error);
//         return res.json({ success: false, message: error.message });
        
//       }
//       res.json({ success: true, message: "Pedido realizado con éxito"});
//     });


//   } catch (error) {
//     console.error(error);
//     res.json({ success: false, message: error.message });
//   }
// };

// Verificar y capturar pago con PayPal
// const verifyPayPal = async (req, res) => {};

// Placing orders using Stripe method
// const placeOrderStripe = async (req, res) => {};
//   try {
//     const { userId, items, amount, address } = req.body;
//     const { origin } = req.headers;
//     const orderData = {
//       userId,
//       items,
//       amount,
//       address,
//       paymentMethod: "Stripe",
//       payment: false,
//       date: Date.now(),
//     };
//     const newOrder = new orderModel(orderData);
//     await newOrder.save();
//     const line_items = items.map(item => ({
//       price_data: {
//         currency: currency,
//         product_data: {
//           name: item.name,
//         },
//         unit_amount: item.price * 100,
//       },
//       quantity: item.quantity,
//     }))
//     line_items.push({
//       price_data: {
//         currency: currency,
//         product_data: {
//           name: "Gastos de envío",
//         },
//         unit_amount: deliveryCharge * 100,
//       },
//       quantity: 1,
//     })
//     const session = await stripe.checkout.sessions.create({
//       success_url: `${origin}/verify?success=true&orderId={newOrder._id}`,
//       cancel_url: `${origin}/verify?success=false&orderId={newOrder._id}`,
//       line_items,
//       mode:'payment',
//     })
//     res.json({ success: true, session_url: session.url });
//   } catch (error) {
//     console.error(error);
//     res.json({ success: false, message: error.message });
//   }
// };

// // verify stripe
// const verifyStripe = async (req, res) => {};
// const { orderId, success, userId } = req.body;
// try {
//   if (success === 'true') {
//     await orderModel.findByIdAndUpdate(orderId, {payment:true});
//     await userModel.findByIdAndUpdate(userId, { cartData: {} });
//     res.json({ success: true, message: "El pago fue aprobado" });
//   } else {
//     await orderModel.findByIdAndDelete(orderId);
//     res.json({ success: false });
//   }
// } catch (error) {
//   console.error(error);
//   res.json({ success: false, message: error.message });
// }
// };

// all orders data for admin panel
const allOrders = async (req, res) => {
  try {
    const orders = await orderModel.find({});
    res.json({ success: true, orders });
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: error.message });
  }
};
// user orders data for fortend
const userOrders = async (req, res) => {
  try {
    const { userId } = req.body;
    const orders = await orderModel.find({ userId });
    res.json({ success: true, orders });
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: error.message });
  }
};

// update order status from Admin Panel
const updateStatus = async (req, res) => {
  try {
    const { orderId, status } = req.body;
    await orderModel.findByIdAndUpdate(orderId, { status }, { new: true });
    res.json({
      success: true,
      message: "El estado del pedido ha sido actualizado",
    });
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: error.message });
  }
};

export {
  placeOrder,
  allOrders,
  userOrders,
  updateStatus, // To use PayPal methods directly in the controller.
};
