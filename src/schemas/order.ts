import z from "zod";

export const OrderSchema = z.object({
  name: z.string().min(3, "Required field name"),
  total: z.number().min(1, "Add something to your order"),
  order: z.array(
    z.object({
      id: z.number(),
      name: z.string(),
      artist: z.string(),
      price: z.number(),
      quantity: z.number(),
      subtotal: z.number(),
    }),
  ),
});
