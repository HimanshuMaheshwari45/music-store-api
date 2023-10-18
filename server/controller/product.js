import { ProductModel } from "../schema/products.js";
import { APIResponse } from "../utils/api.js";

export async function averagePrices(req, res) {
  try {
    const result = await ProductModel.aggregate([
      {
        $group: { _id: "$category", avergagePrice: { $avg: "$price" } },
      },
    ]);
    console.log(result);
    new APIResponse(res, result, "Average prices for category").json();
  } catch (error) {
    console.log(error);
  }
}
