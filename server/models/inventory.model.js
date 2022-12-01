import mongoose from "mongoose";
const { Schema } = mongoose;

const InventorySchema = new Schema({}, { strict: false }); //strict is false we can put anything in

export const InventoryModel = mongoose.model("Inventory", InventorySchema);