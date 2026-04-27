"use server";
import { updateProduct } from "@/prisma/queries";
import { ProductSchema } from "@/src/schemas";
import { buildProductData, productActionError } from "@/src/utils";
import { revalidatePath } from "next/cache";

export default async function UpdateProductAction(data: unknown, id: number) {
  const result = ProductSchema.safeParse(data);
  if (!result.success) {
    return { errors: result.error.issues };
  }

  const productData = buildProductData(result.data);

  try {
    await updateProduct(productData, id);
    revalidatePath("/admin/products");
    return { success: true };
  } catch (error) {
    return productActionError("Could not create product.", error);
  }
}
