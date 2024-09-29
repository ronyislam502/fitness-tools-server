import { z } from "zod";

const orderValidationSchema = z.object({
  id: z.string(),
  quantity: z.number(),
});

export const customerValidationSchema = z.object({
  body: z.object({
    name: z.string(),
    email: z.string(),
    phone: z.string(),
    address: z.string(),
    cartItems: orderValidationSchema,
  }),
});

export const CustomerValidations = {
  customerValidationSchema,
};
