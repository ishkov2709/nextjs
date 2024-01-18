import { comments } from "../data";

interface IParams {
  params: {
    id: string;
  };
}

export async function GET(_: Request, { params }: IParams) {
  const comment = comments.find(({ id }) => id === parseInt(params.id));

  if (comment) {
    return Response.json(comment);
  }

  if (!comment) {
    return new Response(JSON.stringify({ message: "Not Found" }), {
      headers: {
        "Content-Type": "application/json",
      },
      status: 404,
    });
  }
}

export async function PATCH(request: Request, { params }: IParams) {
  const body = await request.json();

  const indexComment = comments.findIndex(
    ({ id }) => id === parseInt(params.id)
  );

  comments[indexComment].text = body.text;

  return new Response(JSON.stringify(comments[indexComment]), {
    headers: {
      "Content-Type": "application/json",
    },
    status: 201,
  });
}

export async function DELETE(_: Request, { params }: IParams) {
  const indexComment = comments.findIndex(
    ({ id }) => id === parseInt(params.id)
  );
  comments.splice(indexComment, 1);

  return new Response(JSON.stringify({ message: "Comment is deleted" }), {
    headers: {
      "Content-Type": "application/json",
    },
    status: 200,
  });
}
