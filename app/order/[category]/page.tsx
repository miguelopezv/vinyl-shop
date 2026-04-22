import { Heading, ProductCard } from "@/app/components";
import { findProductsByCategory } from "@/prisma/queries";

export default async function OrderPage({
  params,
}: {
  params: { category: string };
}) {
  const { category } = await params;
  const products = await findProductsByCategory(category);
  return (
    <>
      <Heading>Select your products</Heading>
      <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-4 items-start">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}
