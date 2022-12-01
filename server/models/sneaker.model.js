import mongoose from "mongoose";
const { Schema } = mongoose;

const SneakerSchema = new Schema(
  {
    brand: { type: String },
    colorway: { type: String },
    images: { type: Object },
    name: { type: String },
    price: { type: Number },
    shoeType: { type: String },
  },
  { strict: false }
);

export const Sneaker = mongoose.model("Sneakers", SneakerSchema);