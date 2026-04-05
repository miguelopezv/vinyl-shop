import { Product, Order, OrderProducts } from "@/src/generated/prisma/client";

export type OrderItem = Pick<Product, "id" | "name" | "artist" | "price"> & {
  quantity: number;
  subtotal: number;
};

export type OrderWithProducts = Order & {
  orderProducts: (OrderProducts & {
    product: Product;
  })[];
};
