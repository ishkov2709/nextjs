import { NextResponse, type NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  const themePrferense = response.cookies.get("theme");

  if (!themePrferense) {
    response.cookies.set("theme", "dark");
  }

  response.headers.set("Custom-Header", "custom");

  return response;
}
