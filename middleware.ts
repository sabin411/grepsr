import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === "/") {
    return NextResponse.redirect(new URL("/dataset", request.url));
  }
}

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
