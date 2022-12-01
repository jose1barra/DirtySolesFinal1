import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import { sneakerRoutes } from "./routes/sneakers.router.js";
import { inventoryRouter } from "./routes/inventory.router.js";
import { productRouter } from "./routes/products.router.js";
import {userRouter} from "./routes/users.router.js"

dotenv.config();

const app = express();

// Middleware
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// Routes
app.use(sneakerRoutes);
app.use(inventoryRouter);
app.use(productRouter);
app.use(userRouter);

const URI = process.env.DB_URI;
const PORT = process.env.PORT || 13000;

mongoose
  .connect(URI, { useNewUrlParser: true, dbName: "production" })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port ${PORT} 🚀`))
  )
  .catch((error) => console.log(error.message));