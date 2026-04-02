import React from "react";

export default function OrderPage({
  params,
}: {
  params: { category: string };
}) {
  console.log("🚀 ~ OrderPage ~ params:", params.category);
  return <div>OrderPage</div>;
}
