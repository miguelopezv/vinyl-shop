import { Heading, OrderCard } from "@/app/components";
import { findPendingOrders } from "@/prisma/queries";

export default async function OrdersPage() {
  const orders = await findPendingOrders();
  return (
    <>
      <Heading>Manage orders</Heading>
      {orders.length ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-5 mt-5">
          {orders.map((order) => (
            <OrderCard key={order.id} order={order} />
          ))}
        </div>
      ) : (
        <p>No pending orders.</p>
      )}
    </>
  );
}
