import express from "express";
import { CustomerControllers } from "./customer.controller";

const router = express.Router();

router.post("/create-customer", CustomerControllers.createCustomer);

router.get("/:email", CustomerControllers.getSingleCustomer);

export const CustomerRoutes = router;
