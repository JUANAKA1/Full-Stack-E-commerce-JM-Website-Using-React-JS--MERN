import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import userRouter from "./routes/userRoute.js";
import productRouter from "./routes/productRouter.js";
import cartRouter from "./routes/cartRouter.js";
import orderRouter from "./routes/orderRouter.js";

//App Config

const app = express();
const port = process.env.PORT || 4001;
connectDB();
connectCloudinary();
// Middleware

app.use(cors());
app.use(express.json());

// api endpoint
app.use("/api/user", userRouter);
app.use("/api/product", productRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

app.get("/", (req, res) => {
  res.send("Api working");
});

// Server Start
app.listen(port, () => console.log(`Server running on port ${port}`));
