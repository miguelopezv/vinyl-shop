import { Product } from "@/src/generated/prisma/client";
import { formatCurrency } from "@/src/utils";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="border bg-white">
      <div className="p-5">
        <h3 className="text-2xl font-bold">{product.name}</h3>
        <h4 className="text-xl font-bold">{product.artist}</h4>
        <p className="mt-5 font-black text-2xl text-amber-500">
          {formatCurrency(product.price)}
        </p>
      </div>
    </div>
  );
}
