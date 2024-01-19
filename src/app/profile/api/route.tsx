import { NextRequest } from "next/server";
import { cookies, headers } from "next/headers";

export async function GET(request: NextRequest) {
  const headersList = headers();

  const token = headersList.get("Authorization");

  cookies().set("JWT", String(token));

  console.log(cookies().get("JWT"));

  return new Response("<h1>Profile API data</h1>", {
    headers: {
      "Content-Type": "text/html",
    },
  });
}
