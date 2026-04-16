"use server";

import { COOKIE_AUTH_KEY } from "@/src/utils";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function logoutAdminAction() {
  try {
    const cookieStore = await cookies();
    cookieStore.delete(COOKIE_AUTH_KEY);
    redirect("/");
  } catch (error) {
    console.error("🚀 ~ logoutAdminAction error:", error);
  }
}
