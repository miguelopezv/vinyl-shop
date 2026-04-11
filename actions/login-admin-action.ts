"use server";

import { AdminAuth } from "@/src/schemas";
import { COOKIE_AUTH_KEY } from "@/src/utils";
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
      cookieStore.set(COOKIE_AUTH_KEY, data.token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 60 * 60 * 24 * 7, // 7 days
        path: "/",
        priority: "high",
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
