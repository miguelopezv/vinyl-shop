import { cookies, headers } from "next/headers";
import { jwtVerify } from "jose";
import { redirect } from "next/navigation";
import { COOKIE_AUTH_KEY } from "@/src/utils";

async function validateTokenAndGetUser() {
  const cookieStore = await cookies();
  const token = cookieStore.get(COOKIE_AUTH_KEY)?.value;

  if (!token) {
    return { user: null };
  }

  try {
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    const {
      payload: { id, email, isAdmin },
    } = await jwtVerify(token, secret);
    return { user: { id, email, isAdmin: isAdmin ? isAdmin : false } };
  } catch (error) {
    return {
      user: null,
      error:
        error instanceof Error && error.message?.startsWith("JWTExpired")
          ? "expired"
          : "invalid",
    };
  }
}

export default async function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const result = await validateTokenAndGetUser();
  const headersList = await headers();
  const currentPath = headersList.get("x-current-path");

  if (result.error) {
    if (result.error === "expired") {
      const cookieStore = await cookies();
      cookieStore.delete(COOKIE_AUTH_KEY);
    }
    if (currentPath !== "/admin") {
      redirect("/admin");
    }
  }

  return <>{children}</>;
}
