import { Product } from "@/src/generated/prisma/client";
import { formatCurrency, getImagePath } from "@/src/utils";
import Image from "next/image";
import AddProductButton from "./AddProductButton";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="border bg-white">
      <Image
        width={400}
        height={400}
        src={getImagePath(product.image)}
        alt={`${product.name} album cover`}
        loading="eager"
        className="my-0 mx-auto h-auto w-auto py-3"
      />
      <div className="p-5">
        <h3 className="text-2xl font-bold">{product.name}</h3>
        <h4 className="text-xl font-bold">{product.artist}</h4>
        <p className="mt-5 font-black text-2xl text-amber-500">
          {formatCurrency(product.price)}
        </p>
        <AddProductButton product={product} />
      </div>
    </div>
  );
}
