import z from "zod";

export const ProductSchema = z
  .object({
    name: z.string().trim().min(1, { message: "Album name cannot be empty." }),
    artist: z
      .string()
      .trim()
      .min(1, { message: "Artist name cannot be empty." }),
    price: z
      .string()
      .trim()
      .refine((value) => value !== "", { message: "Price cannot be empty." })
      .transform((value) => parseFloat(value))
      .pipe(z.number().positive("Price must be greater than 0")),
    categoryMode: z.enum(["existing", "new"], {
      message: "Category mode must be 'existing' or 'new'.",
    }),
    categoryId: z.preprocess(
      (value) => (value === "" ? null : value),
      z
        .string()
        .transform((value) => parseInt(value))
        .pipe(z.number().positive())
        .nullable(),
    ),
    categoryName: z.preprocess(
      (value) => (value === "" ? null : value),
      z
        .string()
        .trim()
        .min(1, { message: "Category name cannot be empty." })
        .nullable(),
    ),
  })
  .superRefine((data, ctx) => {
    if (data.categoryMode === "existing" && !data.categoryId) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Select an existing category.",
        path: ["categoryId"],
      });
    }
    if (data.categoryMode === "new" && !data.categoryName) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Category name is required.",
        path: ["categoryName"],
      });
    }
  });

export const ProductSearchSchema = z.object({
  search: z.string().trim().min(1, "Empty search field"),
});
