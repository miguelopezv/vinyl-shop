import { SearchProduct } from "@/actions";
import { Heading, ProductSearchForm, ProductTable } from "@/app/components";

export default async function SearchPage({
  searchParams,
}: {
  searchParams: { search: string };
}) {
  const { search } = await searchParams;
  const products = await SearchProduct(search);

  return (
    <>
      <Heading>Search Results: {search}</Heading>
      <div className="flex flex-col lg:flex-row lg:justify-end gap-5">
        <ProductSearchForm />
      </div>
      {products.length ? (
        <ProductTable products={products} />
      ) : (
        <p className="text-center text-lg">No results</p>
      )}
    </>
  );
}
