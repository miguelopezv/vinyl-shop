import prisma from "@/src/lib/prisma";

//TODO: Update type for this query
export async function createOrder(data: any) {
  prisma.order.create({
    data: {
      name: data.name,
      total: data.total,
      orderProducts: {
        create: data.order.map((product: any) => ({
          productId: product.id,
          quantity: product.quantity,
        })),
      },
    },
  });
}

export async function findPendingOrders() {
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

export async function completeOrder(orderId: number) {
  prisma.order.update({
    where: { id: orderId },
    data: {
      status: true,
      orderReadyAt: new Date(Date.now()),
    },
  });
}
