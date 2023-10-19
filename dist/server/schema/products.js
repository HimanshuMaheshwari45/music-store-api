"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductSchema = exports.ProductModel = void 0;
const mongoose_1 = require("mongoose");
const ProductSchema = new mongoose_1.Schema({
    id: Number,
    name: { type: String },
    category: String,
    price: Number,
});
exports.ProductSchema = ProductSchema;
const ProductModel = (0, mongoose_1.model)("product", ProductSchema, "products");
exports.ProductModel = ProductModel;
