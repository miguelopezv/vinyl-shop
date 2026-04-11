"use server";
import { findProductsByNameOrCategory } from "@/prisma/queries";

export default async function SearchProductAction(searchTerm: string) {
  try {
    return await findProductsByNameOrCategory(searchTerm);
  } catch (error) {
    console.error("🚀 ~ SearchProductAction ~ error:", error);
    return [];
  }
}
