"use server";
import { findProductsByNameOrCategory } from "@/prisma/queries";

export default async function SearchProductAction(searchTerm: string) {
  return await findProductsByNameOrCategory(searchTerm);
}
