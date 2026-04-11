import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { COOKIE_AUTH_KEY } from "./src/utils";

export function proxy(request: NextRequest) {
  const token = request.cookies.get(COOKIE_AUTH_KEY)?.value;
  const { pathname } = request.nextUrl;

  if (!token && pathname !== "/admin") {
    const loginUrl = new URL("/admin", request.url);
    loginUrl.searchParams.set("from", pathname);
    return NextResponse.redirect(loginUrl);
  }

  if (token && pathname === "/admin") {
    return NextResponse.redirect(new URL("/admin/orders", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
