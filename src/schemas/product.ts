import z from "zod";

export const ProductSearchSchema = z.object({
  search: z.string().trim().min(1, "Empty search field"),
});
