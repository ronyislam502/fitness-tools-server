import { Router } from "express";
import { ProductRoutes } from "../models/product/product.route";
import { CustomerRoutes } from "../models/customer/customer.route";

const router = Router();

const moduleRoutes = [
  {
    path: "/products",
    route: ProductRoutes,
  },
  {
    path: "/customers",
    route: CustomerRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
