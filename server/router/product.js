import { Router } from "express";
import * as ProductController from "../controller/product.js";

const ProductRoute = Router();

ProductRoute.get("/average-prices", ProductController.averagePrices);

export default ProductRoute;
