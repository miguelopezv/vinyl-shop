import { findPendingOrders } from "@/prisma/queries";

export async function GET() {
  const orders = await findPendingOrders();
  return Response.json(orders);
}
