"use client";

import OrderCard from "@/app/components/orders/OrderCard";
import Heading from "@/app/components/ui/Heading";
import { OrderWithProducts } from "@/src/types";
import useSWR from "swr";

export default function OrdersPage() {
  const url = "/admin/orders/api";
  const fetcher = () =>
    fetch(url)
      .then((res) => res.json())
      .then((data) => data);
  const { data, error, isLoading } = useSWR<OrderWithProducts[]>(url, fetcher, {
    refreshInterval: 120000,
    revalidateOnFocus: false,
  });

  if (isLoading) return "Loading...";

  if (data)
    return (
      <>
        <Heading>Manage orders</Heading>
        {data.length ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-5 mt-5">
            {data.map((order) => (
              <OrderCard key={order.id} order={order} />
            ))}
          </div>
        ) : (
          <p>No pending orders.</p>
        )}
      </>
    );
}
