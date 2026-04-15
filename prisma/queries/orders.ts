import prisma from "@/src/lib/prisma";
import { CreateOrderData } from "@/src/types/product";

export async function createOrder(data: CreateOrderData) {
  return await prisma.order.create({
    data: {
      name: data.name,
      total: data.total,
      orderProducts: {
        create: data.order.map((product: { id: number; quantity: number }) => ({
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
  return await prisma.order.update({
    where: { id: orderId },
    data: {
      status: true,
      orderReadyAt: new Date(Date.now()),
    },
  });
}
