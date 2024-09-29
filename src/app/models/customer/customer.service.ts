import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import { Product } from "../product/product.model";
import { TCustomer } from "./customer.interface";
import { Customer } from "./customer.model";

const createCustomerIntoDb = async (payload: TCustomer) => {
  const product = await Product.findById(payload?.cartItems?.id);
  if (!product) {
    throw new AppError(httpStatus.NOT_FOUND, "Product not found");
  }

  if (payload.cartItems.quantity > product.inventory.quantity) {
    throw new AppError(httpStatus.BAD_REQUEST, "Insufficient stock");
  }
  const result = await Customer.create(payload);
  product.inventory.quantity -= payload.cartItems.quantity;

  product.inventory.inStock = product.inventory.quantity > 0;

  await product.save();

  return result;
};

const getSingleCustomerFromDB = async (email: string) => {
  const result = await Customer.findOne({ email });
  if (!result) {
    throw new Error("Customer not available");
  }
  return result;
};

export const CustomerServices = {
  createCustomerIntoDb,
  getSingleCustomerFromDB,
};
