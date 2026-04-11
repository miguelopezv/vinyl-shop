import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { COOKIE_AUTH_KEY } from "./src/utils";

export function proxy(request: NextRequest) {
  const token = request.cookies.get(COOKIE_AUTH_KEY)?.value;
  const { pathname } = request.nextUrl;

  const response = NextResponse.next();
  response.headers.set("x-current-path", pathname);
  response.headers.set("x-full-url", request.url);

  if (!token && pathname !== "/admin") {
    const loginUrl = new URL("/admin", request.url);
    loginUrl.searchParams.set("from", pathname);
    return NextResponse.redirect(loginUrl);
  }

  if (token && pathname === "/admin") {
    return NextResponse.redirect(new URL("/admin/orders", request.url));
  }

  return response;
}

export const config = {
  matcher: ["/admin/:path*"],
};
