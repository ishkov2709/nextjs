import { comments } from "./data";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const value = searchParams.get("query") ?? "";

  const filteredComments = comments.filter(({ text }) => text.includes(value));

  return Response.json(filteredComments);
}

export async function POST(request: Request) {
  try {
    const comment = await request.json();

    const newComment = {
      id: comments[comments.length - 1].id + 1,
      text: comment.text,
    };

    comments.push(newComment);

    return new Response(JSON.stringify(newComment), {
      headers: {
        "Content-Type": "application/json",
      },
      status: 201,
    });
  } catch (error) {
    return new Response(JSON.stringify({ message: "Missing require fields" }), {
      headers: {
        "Content-Type": "application/json",
      },
      status: 400,
    });
  }
}
