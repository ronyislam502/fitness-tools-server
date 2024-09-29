import { z } from "zod";

const inventoryValidationSchema = z.object({
  quantity: z.number(),
  isStock: z.boolean(),
});

export const createProductValidationSchema = z.object({
  body: z.object({
    name: z.string(),
    describe: z.string(),
    price: z.number(),
    image: z.string(),
    category: z.string(),
    inventory: inventoryValidationSchema,
  }),
});

const updateInventoryValidationSchema = z.object({
  quantity: z.number().optional(),
  isStock: z.boolean().optional(),
});

export const updateProductValidationSchema = z.object({
  body: z.object({
    name: z.string().optional(),
    describe: z.string().optional(),
    price: z.number().optional(),
    image: z.string().optional(),
    category: z.string().optional(),
    inventory: updateInventoryValidationSchema,
  }),
});

export const ProductValidations = {
  createProductValidationSchema,
  updateProductValidationSchema,
};
