import { Schema, model } from "mongoose";

const ProductSchema = new Schema({
  id: Number,
  name: { type: String },
  category: String,
  price: Number,
});

const ProductModel = model("product", ProductSchema, "products");

export { ProductModel, ProductSchema };
