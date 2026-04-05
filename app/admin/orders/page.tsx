import { Heading } from "@/app/components";
import prisma from "@/src/lib/prisma";

async function getPendingOrders() {
  const orders = await prisma.order.findMany({
    where: { status: false },
    include: {
      orderProducts: {
        include: { product: true },
      },
    },
  });

  return orders;
}

export default async function OrdersPage() {
  const orders = await getPendingOrders();
  console.log("🚀 ~ OrdersPage ~ orders:", orders);
  return (
    <>
      <Heading>Manage orders</Heading>
    </>
  );
}
