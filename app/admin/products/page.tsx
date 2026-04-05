import { Heading, ProductTable } from "@/app/components";
import { getProducts } from "@/prisma/queries";

export default async function ProductsPage() {
  const products = await getProducts();
  return (
    <>
      <Heading>Manage products</Heading>
      <ProductTable products={products} />
    </>
  );
}
