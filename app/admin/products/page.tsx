import { Heading, ProductPagination, ProductTable } from "@/app/components";
import { getProducts, getProductsCount } from "@/prisma/queries";
import { DEFAULT_PAGE, PAGE_SIZE } from "@/src/utils";
import { redirect } from "next/navigation";

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: { page: string };
}) {
  const params = await searchParams;
  const page = params.page || DEFAULT_PAGE;

  if (+page < 0) {
    redirect("/admin/products");
  }

  const [products, totalProducts] = await Promise.all([
    getProducts(+page),
    getProductsCount(),
  ]);

  const totalPages = Math.ceil(totalProducts / PAGE_SIZE);

  if (+page > totalPages) {
    redirect("/admin/products");
  }

  return (
    <>
      <Heading>Manage products</Heading>
      <ProductTable products={products} />
      <ProductPagination page={+page} totalPages={totalPages} />
    </>
  );
}
