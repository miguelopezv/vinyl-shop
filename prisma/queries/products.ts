import prisma from "@/src/lib/prisma";

export async function getProducts() {
  return await prisma.product.findMany({
    include: {
      category: true,
    },
  });
}

export async function findProductsByCategory(category: string) {
  return await prisma.product.findMany({
    where: { category: { slug: category } },
  });
}

export type ProductsWithCategory = Awaited<ReturnType<typeof getProducts>>;
