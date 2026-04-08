"use server";

import { AdminAuth } from "@/src/schemas";
import z from "zod";

export default async function loginAdminAction(
  result: z.ZodSafeParseSuccess<AdminAuth>,
) {
  const response = await fetch(
    `${process.env.BACKEND_URL}${process.env.API_VERSION}/auth/login`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(result.data),
    },
  );
  console.log(
    "🚀 ~ loginAdminAction ~ `${process.env.BACKEND_URL}${process.env.API_VERSION}/auth/login`:",
    `${process.env.BACKEND_URL}${process.env.API_VERSION}/auth/login`,
  );
  const data = await response.json();
  // Receive token and store
  // Redirect("/admin/orders");
}
