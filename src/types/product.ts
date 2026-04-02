import { Product } from "@/src/generated/prisma/client";

export type OrderItem = Pick<Product, "id" | "name" | "artist" | "price"> & {
  quantity: number;
  subtotal: number;
};
