import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { verifyAdminToken } from "./src/lib/auth";
import { COOKIE_AUTH_KEY } from "./src/utils";

const ADMIN_LOGIN_PATH = "/admin";

export async function proxy(request: NextRequest) {
  const token = request.cookies.get(COOKIE_AUTH_KEY)?.value;
  const { pathname } = request.nextUrl;

  if (!token) {
    if (pathname !== ADMIN_LOGIN_PATH) {
      return NextResponse.redirect(new URL(ADMIN_LOGIN_PATH, request.url));
    }

    return NextResponse.next();
  }

  try {
    await verifyAdminToken(token);
  } catch (error) {
    const response =
      pathname === ADMIN_LOGIN_PATH
        ? NextResponse.next()
        : NextResponse.redirect(new URL(ADMIN_LOGIN_PATH, request.url));

    response.cookies.delete(COOKIE_AUTH_KEY);

    return response;
  }

  if (pathname === ADMIN_LOGIN_PATH) {
    return NextResponse.redirect(new URL("/admin/orders", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin", "/admin/:path*"],
};
