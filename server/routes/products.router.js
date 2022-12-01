import express from "express";
import { inventoryController } from "../controllers/inventory.controller.js";

export const productRouter = express.Router();
const {
    getInventoryForCustomers,
    getInventoryItem,
  } = inventoryController; //descruct 

productRouter.get("/products", async (req, res) => {
  const products = await getInventoryForCustomers();
  return products != null
    ? res
        .status(200)
        .send({ msg: "Successfully queried for products!", data: products })
    : res.status(404).send({ msg: "error!", data: {} });
});

productRouter.get("/products/:id", async (req, res) => {
    const id = req.params.id;
    const products = await getInventoryItem(id);
    return products != null
      ? res
          .status(200)
          .send({ msg: "Successfully queried for products!", data: products })
      : res.status(404).send({ msg: "error!", data: {} });
  });