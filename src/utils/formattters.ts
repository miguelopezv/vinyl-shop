import { ProductSchema } from "@/src/schemas";

export const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount);
};

export const slugify = (value: string) =>
  value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-");

export const getImagePath = (imagePath: string) => {
  const cloudinaryBaseUrl = "https://res.cloudinary.com";
  return imagePath.startsWith(cloudinaryBaseUrl)
    ? imagePath
    : `/products/${imagePath}.jpg`;
};

export function parseProductFormData(data: unknown) {
  return ProductSchema.safeParse(data);
}

export function buildProductData(
  data: NonNullable<ReturnType<typeof parseProductFormData>["data"]>,
) {
  const { name, artist, price, image, categoryMode, categoryId, categoryName } =
    data;

  const category =
    categoryMode === "existing"
      ? { connect: { id: categoryId as number } }
      : {
          create: {
            name: categoryName as string,
            slug: slugify(categoryName as string),
          },
        };

  return { name, artist, price, image, category };
}

export function productActionError(message: string, error: unknown) {
  console.error("🚀 ~ product action ~ error:", error);

  return {
    errors: [
      {
        message,
      },
    ],
  };
}
