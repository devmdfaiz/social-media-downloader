import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import * as jose from "jose";
import { evarConts } from "./lib/constants/evarConts";
import { getProductInfo } from "./lib/fetch";

// This function can be marked `async` if using `await` inside
export async function middleware(req: NextRequest) {
  const pathname = req.nextUrl.pathname;
  const url = req.url;

  const tokenRes = req.cookies.get("auth-token");
  const token = tokenRes?.value;

  const secret = new TextEncoder().encode(evarConts.jwtSec);

  if (pathname === "/") {
    return NextResponse.rewrite(new URL("/social-media-downloader", url));
  }

  if (pathname.startsWith("/admin")) {
    if (!token) {
      return NextResponse.redirect(new URL("/login", url));
    }

    try {
      const { payload } = await jose.jwtVerify(token, secret);
    } catch (error) {
      console.error("JWT verification failed:", error);
      return NextResponse.redirect(new URL("/login", url));
    }
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
