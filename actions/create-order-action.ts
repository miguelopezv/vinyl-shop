"use server";

import { createOrder } from "@/prisma/queries";
import { OrderSchema } from "@/src/schemas";

export default async function createOrderAction(data: unknown) {
  const result = OrderSchema.safeParse(data);

  if (!result.success) {
    return { errors: result.error.issues };
  }

  try {
    await createOrder(result.data);
  } catch (error) {
    console.error("🚀 ~ createOrderAction error:", error);
  }
}
