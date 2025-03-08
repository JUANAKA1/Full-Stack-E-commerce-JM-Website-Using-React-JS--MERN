import express from "express";
import {
  placeOrder,
  // placeOrderPayPal,
  // placeOrderStripe,
  allOrders,
  userOrders,
  updateStatus,
  // verifyStripe,
  // verifyPayPal,
} from "../controllers/orderController.js";
import adminAuth from "../middleware/adminAuth.js";
import authUser from "../middleware/auth.js";

const orderRouter = express.Router();

// Admin features
orderRouter.post("/list", adminAuth, allOrders);
orderRouter.post("/status", adminAuth, updateStatus);

// Payment features
orderRouter.post("/place", authUser, placeOrder);
// orderRouter.post("/paypal", authUser, placeOrderPayPal);
// orderRouter.post("/stripe", authUser, placeOrderStripe);

// User features
orderRouter.post("/userorders", authUser, userOrders);

// verify payment
// orderRouter.post("/verifyStripe", authUser, verifyStripe);
// orderRouter.post("/verifyPayPal", authUser, verifyPayPal);


export default orderRouter;
