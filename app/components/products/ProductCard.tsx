import { Product } from "@/src/generated/prisma/client";
import { formatCurrency } from "@/src/utils";
import Image from "next/image";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="border bg-white">
      <Image
        width={450}
        height={500}
        src={`/products/${product.image}.jpg`}
        alt={`${product.name} album cover`}
        className="my-0 mx-auto py-3"
      />
      <div className="p-5">
        <h3 className="text-2xl font-bold">{product.name}</h3>
        <h4 className="text-xl font-bold">{product.artist}</h4>
        <p className="mt-5 font-black text-2xl text-amber-500">
          {formatCurrency(product.price)}
        </p>
        <button
          type="button"
          className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
