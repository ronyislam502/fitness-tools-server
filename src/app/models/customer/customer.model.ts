import mongoose, { model, Schema } from "mongoose";
import { TCustomer, TOrder } from "./customer.interface";

const orderSchema = new Schema<TOrder>({
  id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Product",
  },
  quantity: {
    type: Number,
    required: true,
  },
});

const customerSchema = new Schema<TCustomer>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
    cartItems: { type: orderSchema, required: true },
  },
  { timestamps: true }
);

export const Customer = model<TCustomer>("Customer", customerSchema);
