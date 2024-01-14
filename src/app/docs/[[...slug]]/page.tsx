interface IParams {
  params: {
    slug: string[];
  };
}

export default function Docs({ params }: IParams) {
  return (
    <>
      <h1>Docs Home Page</h1>
      {params.slug?.length > 0 && <p>{params.slug?.length} Level</p>}
      {!params.slug && <p>Docs</p>}
    </>
  );
}
