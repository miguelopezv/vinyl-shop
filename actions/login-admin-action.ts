"use server";

import { AdminAuth } from "@/src/schemas";
import z from "zod";

export default async function loginAdminAction(
  result: z.ZodSafeParseSuccess<AdminAuth>,
) {
  try {
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

    const data = await response.json();
    return { data, ok: response.ok };
  } catch (error) {
    console.error("🚀 ~ loginAdminAction ~ error:", error);
    return {
      data: {
        message: "Unable to connect to the server. Please try again later.",
      },
      ok: false,
    };
  }
}
