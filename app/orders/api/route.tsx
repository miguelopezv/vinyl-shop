import { findCompletedOrders } from "@/prisma/queries";

export async function GET() {
  const orders = await findCompletedOrders();
  return Response.json(orders);
}
