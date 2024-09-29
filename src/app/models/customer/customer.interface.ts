import { Types } from "mongoose";

export type TOrder = {
  id: Types.ObjectId;
  quantity: number;
};

export type TCustomer = {
  name: string;
  email: string;
  phone: string;
  address: string;
  cartItems: TOrder;
};
