"use server";
import { completeOrder } from "@/prisma/queries";
import { revalidatePath } from "next/cache";

export default async function completeOrderAction(formData: FormData) {
  const orderId = formData.get("order_id")!;
  try {
    await completeOrder(+orderId);
    revalidatePath("/admin/orders");
  } catch (error) {
    console.error("🚀 ~ completeOrderAction error:", error);
  }
}
