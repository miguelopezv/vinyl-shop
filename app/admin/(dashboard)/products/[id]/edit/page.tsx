import { EditProductForm, Heading, ProductForm } from "@/app/components";
import { getProductById } from "@/prisma/queries";
import { notFound } from "next/navigation";

export default async function page({ params }: { params: { id: string } }) {
  const { id } = await params;
  const product = await getProductById(+id);
  if (!product) {
    notFound();
  }

  return (
    <>
      <Heading>{`Edit: ${product.name}`}</Heading>
      <EditProductForm>
        <ProductForm product={product} />
      </EditProductForm>
    </>
  );
}
