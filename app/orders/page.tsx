"use client";

import LatestOrderItem from "@/app/components/orders/LatestOrderItem";
import Logo from "@/app/components/ui/Logo";
import { OrderWithProducts } from "@/src/types";
import { COMPLETED_ORDERS_URL } from "@/src/utils";
import useSWR from "swr";

export default function OrdersPage() {
  const url = COMPLETED_ORDERS_URL;
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
        <h1 className="text-center mt-20 text-6xl font-black">
          Orders Completed
        </h1>
        <Logo />
        {data.length ? (
          <div className="grid grid-cols-1 gap-5 max-w-5xl mx-auto mt-10">
            {data.map((order) => (
              <LatestOrderItem order={order} key={order.id} />
            ))}
          </div>
        ) : (
          <p>No pending orders.</p>
        )}
      </>
    );
}
