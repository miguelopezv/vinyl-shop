"use server";

import { AdminAuth } from "@/src/schemas";
import { cookies } from "next/headers";
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

    if (response.ok) {
      const cookieStore = await cookies();
      cookieStore.set("VS_AUTH_TOKEN", data.token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 60 * 60 * 24 * 7, // 7 days
        path: "/",
      });
    }

    return { data, ok: response.ok };
  } catch (error) {
    return {
      data: {
        message: "Unable to connect to the server. Please try again later.",
      },
      ok: false,
    };
  }
}
