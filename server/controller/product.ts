import { ProductModel } from "../schema/products";
import { IAveragePrice } from "../ts.demo";
import { APIResponse } from "../utils/api";

export async function averagePrices(req, res) {
  try {
    const result: IAveragePrice[] = await ProductModel.aggregate([
      {
        $group: { _id: "$category", avergagePrice: { $avg: "$price" } },
      },
    ]);

    // result.forEach((price)=>{
    //   console.log(price.price)
    // })

    new APIResponse(res, result, "Average prices for category").json();
  } catch (error) {
    console.log(error);
  }
}
