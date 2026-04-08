import z from "zod";

export const AdminSchema = z.object({
  name: z.string(),
  email: z.email(),
  password: z.string().min(6, "Password must be 6 characters min."),
  password_confirmation: z.string(),
});

export const AdminAuthSchema = AdminSchema.omit({
  name: true,
  password_confirmation: true,
});

export type AdminAuth = z.infer<typeof AdminAuthSchema>;
