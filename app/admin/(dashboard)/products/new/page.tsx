import { AddProductForm, Heading, ProductForm } from "@/app/components";

export default function NewProductPage() {
  return (
    <>
      <Heading>Create Product</Heading>
      <AddProductForm>
        <ProductForm />
      </AddProductForm>
    </>
  );
}
