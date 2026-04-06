import {
  Heading,
  ProductPagination,
  ProductSearchForm,
  ProductTable,
} from "@/app/components";
import { getProducts, getProductsCount } from "@/prisma/queries";
import { DEFAULT_PAGE, PAGE_SIZE } from "@/src/utils";
import Link from "next/link";
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
      <div className="flex flex-col lg:flex-row lg:justify-between gap-5">
        <Link
          className="bg-amber-400 w-full lg:w-auto text-xl px-10 py-3 text-center font-bold cursor-pointer"
          href={`/admin/products/new`}
        >
          Add Product
        </Link>
        <ProductSearchForm />
      </div>
      <ProductTable products={products} />
      <ProductPagination page={+page} totalPages={totalPages} />
    </>
  );
}
