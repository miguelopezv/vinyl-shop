"use client";

import { Product } from "@/src/generated/prisma/client";
import { useStore } from "@/src/store";
import { MAX_ITEMS } from "@/src/utils/constants";

type AddProductButtonProps = {
  product: Product;
};

export default function AddProductButton({ product }: AddProductButtonProps) {
  const addToOrder = useStore((state) => state.addToOrder);
  const order = useStore((state) => state.order);
  const existingItem = order.find((item) => item.id === product.id);
  const isDisabled = existingItem ? existingItem.quantity >= MAX_ITEMS : false;

  return (
    <button
      type="button"
      className={`w-full mt-5 p-3 uppercase font-bold cursor-pointer ${
        isDisabled
          ? "bg-gray-400 cursor-not-allowed"
          : "bg-indigo-600 hover:bg-indigo-800 text-white"
      }`}
      onClick={() => addToOrder(product)}
      disabled={isDisabled}
    >
      Add to Cart
    </button>
  );
}
