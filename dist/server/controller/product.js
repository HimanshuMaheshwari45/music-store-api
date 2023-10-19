"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.averagePrices = void 0;
const products_1 = require("../schema/products");
const api_1 = require("../utils/api");
async function averagePrices(req, res) {
    try {
        const result = await products_1.ProductModel.aggregate([
            {
                $group: { _id: "$category", avergagePrice: { $avg: "$price" } },
            },
        ]);
        // result.forEach((price)=>{
        //   console.log(price.price)
        // })
        new api_1.APIResponse(res, result, "Average prices for category").json();
    }
    catch (error) {
        console.log(error);
    }
}
exports.averagePrices = averagePrices;
