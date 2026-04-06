import prisma from "@/src/lib/prisma";
import { PAGE_SIZE } from "@/src/utils";

export async function getProducts(page: number) {
  const skip = (page - 1) * PAGE_SIZE;

  return await prisma.product.findMany({
    take: PAGE_SIZE,
    skip,
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

export async function findProductsByNameOrCategory(searchTerm: string) {
  return await prisma.product.findMany({
    where: {
      OR: [
        { name: { contains: searchTerm, mode: "insensitive" } },
        { category: { name: { contains: searchTerm, mode: "insensitive" } } },
      ],
    },
    include: { category: true },
  });
}

export async function getProductsCount() {
  return await prisma.product.count();
}

export type ProductsWithCategory = Awaited<ReturnType<typeof getProducts>>;
