"use server";

import { createProduct } from "@/prisma/queries";
import { ProductSchema } from "@/src/schemas";
import { slugify } from "@/src/utils";

export default async function CreateProductAction(data: unknown) {
  const result = ProductSchema.safeParse(data);
  if (!result.success) {
    return { errors: result.error.issues };
  }

  const { name, artist, price, image, categoryMode, categoryId, categoryName } =
    result.data;

  const category =
    categoryMode === "existing"
      ? { connect: { id: categoryId as number } }
      : {
          create: {
            name: categoryName as string,
            slug: slugify(categoryName as string),
          },
        };

  const productData = { name, artist, price, image, category };

  try {
    await createProduct(productData);
    return { success: true };
  } catch (error) {
    console.error("🚀 ~ CreateProductAction ~ error:", error);
    return {
      errors: [
        {
          message: "Could not create product.",
        },
      ],
    };
  }
}
